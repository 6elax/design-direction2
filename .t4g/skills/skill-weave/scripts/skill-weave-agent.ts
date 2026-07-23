import { readFileSync, existsSync } from "fs";
const { DatabaseSync } = require("node:sqlite");
import { join, resolve } from "path";
import { parseArgs } from "util";

const { positionals, values } = parseArgs({
  options: {
    "mode": { type: "string" }, // "check" or "log"
    "transcript": { type: "string" },
    "workspace-root": { type: "string" },
    "payload": { type: "string" } // JSON payload for logging
  },
  allowPositionals: true,
});

const projectRoot = values["workspace-root"] ? resolve(values["workspace-root"] as string) : process.cwd();
const dbPath = join(projectRoot, ".t4g", "agent-memory.db");

if (!existsSync(dbPath)) {
  console.error(`Database not found at ${dbPath}`);
  process.exit(1);
}

const db = new DatabaseSync(dbPath);

const STOP_WORDS = new Set([
  "the", "a", "an", "and", "or", "but", "if", "then", "else", "for", "to", "in", "on", "at", "by", 
  "from", "with", "about", "against", "of", "is", "are", "was", "were", "be", "been", "being", 
  "have", "has", "had", "do", "does", "did", "can", "could", "should", "would", "will", "i", "we", 
  "you", "he", "she", "they", "it", "this", "that", "these", "those"
]);

function getKeywords(text: string): string[] {
  return text.toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .split(/\s+/)
    .filter(word => word.length > 2 && !STOP_WORDS.has(word));
}

if (values["mode"] === "check") {
  const transcriptPath = values["transcript"];
  if (!transcriptPath || !existsSync(transcriptPath)) {
    console.error("Please provide a valid transcript path using --transcript");
    process.exit(1);
  }

  const content = readFileSync(transcriptPath, "utf-8");
  const lines = content.split("\n");

  let lastStruggleText = "";
  let lastStruggleType = "";

  // Parse lines from bottom up (newest first) to find recent struggle
  for (let i = lines.length - 1; i >= 0; i--) {
    const line = lines[i].trim();
    if (!line) continue;
    try {
      const entry = JSON.parse(line);
      // Check for user errors or tool errors
      if (entry.type === "ERROR_MESSAGE") {
        lastStruggleText = entry.content || "";
        lastStruggleType = "ERROR-CODE";
        break;
      }
      if (entry.tool_calls) {
        for (const call of entry.tool_calls) {
          if (call.output && (call.output.toLowerCase().includes("error") || call.output.toLowerCase().includes("fail"))) {
            lastStruggleText = call.output;
            lastStruggleType = "ERROR-CODE";
            break;
          }
        }
        if (lastStruggleText) break;
      }
      if (entry.type === "USER_INPUT") {
        const text = entry.content || "";
        if (text.toLowerCase().includes("error") || text.toLowerCase().includes("fail") || text.toLowerCase().includes("struggle") || text.toLowerCase().includes("stuck") || text.toLowerCase().includes("wrong")) {
          lastStruggleText = text;
          lastStruggleType = "FRUSTRATION";
          break;
        }
      }
    } catch (e) {}
  }

  if (!lastStruggleText) {
    console.log("No recent compiler errors or user struggles detected in transcript.");
    process.exit(0);
  }

  console.log(`\n🔍 SkillWeave: Analyzing struggle context (${lastStruggleType}):`);
  console.log(`> "${lastStruggleText.slice(0, 150)}..."`);

  const queryKeywords = getKeywords(lastStruggleText);

  // Read matching learnings from DB
  const learnings = db.prepare(`
    SELECT id, type, skill, section, key, insight, example 
    FROM learnings 
    WHERE type IN ('ERROR-CODE', 'FRUSTRATION')
  `).all() as any[];

  const matches = [];

  for (const learning of learnings) {
    const textToMatch = `${learning.key} ${learning.insight} ${learning.example || ""}`.toLowerCase();
    let overlapCount = 0;
    for (const keyword of queryKeywords) {
      if (textToMatch.includes(keyword)) {
        overlapCount++;
      }
    }
    if (overlapCount >= 1) {
      matches.push({ ...learning, overlapCount });
    }
  }

  matches.sort((a, b) => b.overlapCount - a.overlapCount);

  if (matches.length === 0) {
    console.log("\n💡 SkillWeave: No similar peer struggles found.");
  } else {
    console.log(`\n💡 SkillWeave: Found ${matches.length} matching peer case studies:\n`);
    for (let j = 0; j < Math.min(3, matches.length); j++) {
      const match = matches[j];
      console.log(`------------------------------------------------------------`);
      console.log(`📌 Case ${j + 1}: [${match.type}] [${match.key}] (Match Score: ${match.overlapCount})`);
      console.log(`- Problem/Struggle: ${match.insight}`);
      if (match.example) {
        console.log(`- Peer Resolution: ${match.example}`);
      }
      console.log(`------------------------------------------------------------`);
    }
  }
} else if (values["mode"] === "log") {
  const payloadStr = values["payload"];
  if (!payloadStr) {
    console.error("Please provide a JSON payload using --payload");
    process.exit(1);
  }

  try {
    const payload = JSON.parse(payloadStr);
    const { type, key, insight, example, "conversation-id": conversationId, skill = "skill-weave" } = payload;

    if (!type || !key || !insight || !conversationId) {
      throw new Error("Missing required fields: type, key, insight, conversation-id");
    }

    if (type !== "ERROR-CODE" && type !== "FRUSTRATION") {
      throw new Error("Type must be either ERROR-CODE or FRUSTRATION");
    }

    if (!/^[a-z0-9-]+$/.test(key)) {
      throw new Error("Key must be kebab-case (lowercase, numbers, and hyphens)");
    }

    // Get project uuid
    const projectInfo = db.prepare(`SELECT uuid FROM project_info LIMIT 1`).get() as { uuid: string } | undefined;
    const projectUuid = projectInfo?.uuid;

    if (!projectUuid) {
      throw new Error("project_info UUID missing in database.");
    }

    const insertQuery = db.prepare(`
      INSERT INTO learnings (
        project_uuid, type, skill, section, key, insight, source, model, example, conversation_id
      ) VALUES (
        ?, ?, ?, ?, ?, ?, 'USER', 'gemini-2.0-pro', ?, ?
      )
    `);

    insertQuery.run(
      projectUuid,
      type,
      skill,
      payload.section || null,
      key,
      insight,
      example || null,
      conversationId
    );

    console.log(`Successfully logged SkillWeave learning: [${key}]`);
  } catch (e: any) {
    console.error("Failed to log learning:", e.message);
    process.exit(1);
  }
} else {
  console.error("Invalid mode. Use --mode check or --mode log");
  process.exit(1);
}
