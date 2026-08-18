import { readFileSync, existsSync } from "fs";
import { join, resolve } from "path";
import { parseArgs } from "util";

const { positionals, values } = parseArgs({
  options: {
    "mode": { type: "string" }, // "check" or "log"
    "transcript": { type: "string" },
    "workspace-root": { type: "string" },
    "payload": { type: "string" }, // JSON payload for logging
    "type": { type: "string" }, // Struggle type passed by reflections agent
    "struggle": { type: "string" } // Struggle text passed by reflections agent
  },
  allowPositionals: true,
});

const projectRoot = values["workspace-root"] ? resolve(values["workspace-root"] as string) : process.cwd();

// Custom .env parser
const dotenvPath = join(projectRoot, ".env");
if (existsSync(dotenvPath)) {
  const dotenvContent = readFileSync(dotenvPath, "utf-8");
  for (const line of dotenvContent.split("\n")) {
    const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
    if (match) {
      const key = match[1];
      let value = match[2] || "";
      if (value.startsWith('"') && value.endsWith('"')) {
        value = value.slice(1, -1);
      } else if (value.startsWith("'") && value.endsWith("'")) {
        value = value.slice(1, -1);
      }
      process.env[key] = value.trim();
    }
  }
}

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("Error: SUPABASE_URL and SUPABASE_KEY must be set in your environment or .env file.");
  process.exit(1);
}

const STOP_WORDS = new Set([
  "the", "a", "an", "and", "or", "but", "if", "then", "else", "for", "to", "in", "on", "at", "by", 
  "from", "with", "about", "against", "of", "is", "are", "was", "were", "be", "been", "being", 
  "have", "has", "had", "do", "does", "did", "can", "could", "should", "would", "will", "i", "we", 
  "you", "he", "she", "they", "it", "this", "that", "these", "those"
]);

const VALID_TYPES = new Set([
  "SCOPING", "DESIGN-FRICTION", "THEORETICAL", "TECHNICAL", "HALLUCINATION", "METACOGNITIVE", "VALIDATION", "ERROR-CODE", "FRUSTRATION"
]);

function getKeywords(text: string): string[] {
  return text.toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .split(/\s+/)
    .filter(word => word.length > 2 && !STOP_WORDS.has(word));
}

async function main() {
  if (values["mode"] === "check") {
    let lastStruggleText = values["struggle"] as string | undefined;
    let lastStruggleType = values["type"] as string | undefined;

    if (!lastStruggleText || !lastStruggleType) {
      const transcriptPath = values["transcript"];
      if (!transcriptPath || !existsSync(transcriptPath)) {
        console.error("Please provide --type and --struggle, OR a valid transcript path using --transcript");
        process.exit(1);
      }

      const content = readFileSync(transcriptPath, "utf-8");
      const lines = content.split("\n");

      lastStruggleText = "";
      lastStruggleType = "";

      // Parse lines from bottom up (newest first) to find recent struggle
      for (let i = lines.length - 1; i >= 0; i--) {
        const line = lines[i].trim();
        if (!line) continue;
        try {
          const entry = JSON.parse(line);
          // Check for user errors or tool errors
          if (entry.type === "ERROR_MESSAGE") {
            lastStruggleText = entry.content || "";
            lastStruggleType = "TECHNICAL";
            break;
          }
          if (entry.tool_calls) {
            for (const call of entry.tool_calls) {
              if (call.output && (call.output.toLowerCase().includes("error") || call.output.toLowerCase().includes("fail"))) {
                lastStruggleText = call.output;
                lastStruggleType = "TECHNICAL";
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
    }

    if (!lastStruggleText) {
      console.log("No recent compiler errors or user struggles detected in transcript.");
      process.exit(0);
    }

    console.log(`\n🔍 SkillWeave: Analyzing struggle context (${lastStruggleType}):`);
    console.log(`> "${lastStruggleText.slice(0, 150)}..."`);

    const queryKeywords = getKeywords(lastStruggleText);

    // Fetch learnings from Supabase
    let learnings: any[] = [];
    try {
      const response = await fetch(`${supabaseUrl}/rest/v1/learnings?select=id,type,skill,section,key,insight,example,author,metacognitive_pattern,socratic_pivot`, {
        headers: {
          "apikey": supabaseKey,
          "Authorization": `Bearer ${supabaseKey}`
        }
      });
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      learnings = await response.json() as any[];
    } catch (e: any) {
      console.error("Failed to fetch matching learnings from Supabase:", e.message);
      process.exit(1);
    }

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
        console.log(`- Author: ${match.author}`);
        console.log(`- Problem/Struggle: ${match.insight}`);
        if (match.metacognitive_pattern) {
          console.log(`- Metacognitive Pattern: ${match.metacognitive_pattern}`);
        }
        if (match.example) {
          console.log(`- Peer Resolution: ${match.example}`);
        }
        if (match.socratic_pivot) {
          console.log(`- Socratic Pivot Questions:\n${match.socratic_pivot}`);
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
      const { type, key, insight, example, "conversation-id": conversationId, skill = "skill-weave", author, metacognitive_pattern, socratic_pivot } = payload;

      if (!type || !key || !insight || !conversationId || !author) {
        throw new Error("Missing required fields: type, key, insight, conversation-id, author");
      }

      const upperType = type.toUpperCase();
      if (!VALID_TYPES.has(upperType)) {
        throw new Error(`Type must be one of: ${Array.from(VALID_TYPES).join(", ")}`);
      }

      if (!/^[a-z0-9-]+$/.test(key)) {
        throw new Error("Key must be kebab-case (lowercase, numbers, and hyphens)");
      }

      const projectUuid = process.env.PROJECT_UUID || "00000000-0000-0000-0000-000000000000";

      const response = await fetch(`${supabaseUrl}/rest/v1/learnings`, {
        method: "POST",
        headers: {
          "apikey": supabaseKey,
          "Authorization": `Bearer ${supabaseKey}`,
          "Content-Type": "application/json",
          "Prefer": "return=representation"
        },
        body: JSON.stringify({
          project_uuid: projectUuid,
          type: upperType,
          skill,
          section: payload.section || null,
          key,
          insight,
          source: "USER",
          model: "gemini-2.0-pro",
          example: example || null,
          conversation_id: conversationId,
          author,
          metacognitive_pattern: metacognitive_pattern || null,
          socratic_pivot: socratic_pivot || null
        })
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP ${response.status}: ${errorText}`);
      }

      console.log(`Successfully logged SkillWeave learning: [${key}]`);
    } catch (e: any) {
      console.error("Failed to log learning:", e.message);
      process.exit(1);
    }
  } else {
    console.error("Invalid mode. Use --mode check or --mode log");
    process.exit(1);
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
