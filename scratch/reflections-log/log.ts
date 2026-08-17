import { Database } from "bun:sqlite";
import { join, dirname, resolve } from "node:path";
import { findProjectRoot } from "./utils.ts";
import { parseArgs } from "node:util";
import { existsSync, readFileSync } from "node:fs";
import { homedir } from "node:os";
import { initLocalDb } from "./init-local-db.ts";
import {
  validateType,
  validateKey,
  validateSource,
  checkInjectionPatterns,
} from "./validators.ts";

const { positionals, values } = parseArgs({
  options: {
    "update-id": { type: "string" },
    "workspace-root": { type: "string" },
  },
  allowPositionals: true,
});

const explicitWorkspaceRoot = values["workspace-root"];
const projectRoot = explicitWorkspaceRoot ? resolve(explicitWorkspaceRoot as string) : findProjectRoot(process.cwd());
const t4gDir = join(projectRoot, ".t4g");
const dbPath = join(t4gDir, "agent-memory.db");

// Ensure database is initialized and migrated to the latest schema in-process
initLocalDb(projectRoot);

try {
  const db = new Database(dbPath);

  if (positionals.length === 0) {
    console.error("t4g-learnings-log: Expected a JSON string as a positional argument.");
    process.exit(1);
  }

  let rawPayload: any = {};
  try {
    rawPayload = JSON.parse(positionals[0]);
  } catch (e) {
    console.error("t4g-learnings-log: invalid JSON, skipping");
    process.exit(1);
  }

  const payloads = Array.isArray(rawPayload) ? rawPayload : [rawPayload];
  
  const projectInfo = db.query(`SELECT uuid FROM project_info LIMIT 1`).get() as { uuid: string } | undefined;
  const projectUuid = projectInfo?.uuid;
  if (!projectUuid) {
    console.error("t4g-learnings-log: local database missing project_info. Try running t4g-create-db to fix.");
    process.exit(1);
  }

  const isUpdate = !!values["update-id"];

  // Process all logs in a single transaction for speed and safety
  const processPayloads = db.transaction((items) => {
    for (const item of items) {
      const {
        skill = null,
        section = null,
        type,
        key,
        insight,
        source,
        model = null,
        example = null,
        "conversation-id": conversationId,
      } = item;

      if (!isUpdate && !insight) {
        throw new Error("missing 'insight' field");
      }

      if (!isUpdate && !conversationId) {
        throw new Error("missing 'conversation-id' (must be passed via JSON)");
      }

      // Field validation via extracted validators
      const typeResult = validateType(type);
      if (!typeResult.valid) {
        throw new Error(typeResult.error);
      }

      const keyResult = validateKey(key);
      if (!keyResult.valid) {
        throw new Error(keyResult.error);
      }

      const sourceResult = validateSource(source);
      if (!sourceResult.valid) {
        throw new Error(sourceResult.error);
      }

      // Content sanitization: reject prompt-injection patterns in insight text
      const injectionResult = checkInjectionPatterns(insight);
      if (!injectionResult.safe) {
        throw new Error(injectionResult.error);
      }

      if (isUpdate) {
        const updateId = values["update-id"];
        
        // Check if learning exists
        const existing = db.query(`SELECT id, key FROM learnings WHERE id = ?`).get(updateId) as { id: number, key: string } | undefined;
        if (!existing) {
          throw new Error(`could not find learning with id ${updateId} to update`);
        }

        const ALLOWED_UPDATE_FIELDS = ['skill', 'section', 'type', 'key', 'insight', 'source', 'model', 'example'];
        const updatePairs: string[] = [];
        const queryParams: any = { $id: updateId };

        for (const field of ALLOWED_UPDATE_FIELDS) {
          let val = item[field];
          if (val !== undefined) {
            updatePairs.push(`${field} = $${field}`);
            queryParams[`$${field}`] = val;
          }
        }

        if (updatePairs.length === 0) {
          console.log(`No fields to update for learning ID ${updateId}.`);
        } else {
          const updateQuery = `UPDATE learnings SET ${updatePairs.join(', ')} WHERE id = $id`;
          db.prepare(updateQuery).run(queryParams);
          console.log(`Successfully updated learning: [${existing.key}] (ID: ${existing.id})`);
        }
      } else {
        const query = db.prepare(`
          INSERT INTO learnings (
            project_uuid, type, skill, section, key, insight, source, model, example, conversation_id
          ) VALUES (
            $projectUuid, $type, $skill, $section, $key, $insight, $source, $model, $example, $conversationId
          )
        `);

        const result = query.run({
          $projectUuid: projectUuid,
          $type: type,
          $skill: skill,
          $section: section,
          $key: key,
          $insight: insight,
          $source: source || 'AGENT',
          $model: model,
          $example: example,
          $conversationId: conversationId
        });

        console.log(`Successfully logged learning: [${key}] (ID: ${result.lastInsertRowid})`);
      }
    }
  });

  processPayloads(payloads);

  // Registry check
  const registryPath = join(homedir(), ".t4g", "projects.json");
  let isRegistered = false;
  try {
    if (existsSync(registryPath)) {
      const registry = JSON.parse(readFileSync(registryPath, "utf8"));
      if (Array.isArray(registry)) {
        for (const project of registry) {
          if (projectRoot === project || projectRoot.startsWith(project + '/')) {
            isRegistered = true;
            break;
          }
        }
      }
    }
  } catch (e) {
    // Ignore parse
  }

  if (!isRegistered) {
    console.log(`\nAGENT INSTRUCTION: Your current project is not registered for global syncing. You MUST use your native write_to_file tool to append "${projectRoot}" to the JSON array in ~/.t4g/projects.json`);
  }
} catch (error: any) {
  console.error("Failed to log learning:", error.message || error);
  process.exit(1);
}
