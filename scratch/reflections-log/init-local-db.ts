import { Database } from "bun:sqlite";
import { join, dirname, resolve } from "node:path";
import { mkdirSync, existsSync, appendFileSync, writeFileSync, readFileSync } from "node:fs";
import { homedir } from "node:os";
import { findProjectRoot } from "./utils.ts";
import { parseArgs } from "node:util";

export function initLocalDb(projectRoot: string) {
  const t4gDir = join(projectRoot, ".t4g");
  mkdirSync(t4gDir, { recursive: true });

  const gitignorePath = join(projectRoot, ".gitignore");
  if (existsSync(gitignorePath)) {
    const content = readFileSync(gitignorePath, "utf8");
    if (!content.includes(".t4g/")) {
      appendFileSync(gitignorePath, "\n.t4g/\n", "utf8");
    }
  } else {
    writeFileSync(gitignorePath, ".t4g/\n", "utf8");
  }

  const dbPath = join(t4gDir, "agent-memory.db");
  const db = new Database(dbPath, { create: true });

  db.run(`
    CREATE TABLE IF NOT EXISTS schema_migrations (
      filename TEXT PRIMARY KEY,
      applied_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `);

  const migrationsDir = join(import.meta.dir, "..", "db", "migrations", "local");
  if (existsSync(migrationsDir)) {
    const { readdirSync } = require("node:fs");
    const files = readdirSync(migrationsDir).filter(f => f.endsWith(".sql")).sort();
    for (const file of files) {
      const applied = db.query(`SELECT 1 FROM schema_migrations WHERE filename = ?`).get(file);
      if (!applied) {
        console.log(`Applying migration ${file}...`);
        const sql = readFileSync(join(migrationsDir, file), "utf8");
        try {
          db.exec(sql);
          db.run(`INSERT INTO schema_migrations (filename) VALUES (?)`, [file]);
        } catch (e) {
          console.error(`Failed to apply migration ${file}:`, e);
          throw e;
        }
      }
    }
  }

  // Ensure project_info has a UUID
  const projectInfo = db.query(`SELECT uuid FROM project_info LIMIT 1`).get() as { uuid: string } | undefined;
  if (!projectInfo) {
    const uuid = crypto.randomUUID();
    const name = require("node:path").basename(projectRoot);
    db.run(`INSERT INTO project_info (uuid, name) VALUES (?, ?)`, [uuid, name]);
    console.log(`Generated new project UUID: ${uuid} (Name: ${name})`);
  }

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
    // Ignore parse errors
  }

  if (!isRegistered) {
    console.log(`\nAGENT INSTRUCTION: Your current project is not registered for global syncing. You MUST use your native write_to_file tool to append "${projectRoot}" to the JSON array in ~/.t4g/projects.json`);
  }
}

if (import.meta.main) {
  const { values } = parseArgs({
    options: {
      "workspace-root": { type: "string" },
    },
    allowPositionals: true,
  });

  const explicitWorkspaceRoot = values["workspace-root"];
  const projectRoot = explicitWorkspaceRoot ? resolve(explicitWorkspaceRoot as string) : findProjectRoot(process.cwd());

  console.log(`Initializing agent memory database at ${join(projectRoot, ".t4g", "agent-memory.db")}...`);
  try {
    initLocalDb(projectRoot);
    console.log("Database initialized successfully.");
  } catch (e) {
    process.exit(1);
  }
}
