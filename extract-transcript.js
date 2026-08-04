const fs = require('fs');
const path = require('path');
const os = require('os');

const conversationId = process.argv[2];
const outputPath = process.argv[3];
const sinceStep = parseInt(process.argv[4] || '0', 10);

if (!conversationId || !outputPath) {
  console.error("Usage: node extract-transcript.js <conversationId> <outputPath> [sinceStep]");
  process.exit(1);
}

const appDataDir = path.join(os.homedir(), '.gemini', 'antigravity');
const transcriptPath = path.join(appDataDir, 'brain', conversationId, '.system_generated', 'logs', 'transcript.jsonl');

function isMinimalOrchestration(text) {
  return text.trim().length < 50;
}

function extractUserMessage(content) {
  const match = content.match(/<USER_REQUEST>([\s\S]*?)<\/USER_REQUEST>/);
  if (!match) return null;
  const msg = match[1].trim();
  if (msg.startsWith("/") && msg.length < 30) return null;
  if (msg.length < 5) return null;
  if (msg.toLowerCase() === "continue") return null;
  return msg;
}

function cleanFileLinks(text) {
  return text.replace(/\[([^\]]+)\]\(file:\/\/\/[^)]+\)/g, "$1");
}

function formatTruncationMarkers(text, step) {
  return text.replace(
    /<truncated (\d+) bytes>/g,
    `\n\n<!-- TRUNCATED: $1 bytes missing. Step ${step}. Please fill in from context. -->\n`
  );
}

let content;
try {
  content = fs.readFileSync(transcriptPath, "utf-8");
} catch (e) {
  console.error(`Error: Could not read transcript at ${transcriptPath}`);
  process.exit(1);
}

const entries = [];
for (const line of content.split("\n")) {
  if (!line.trim()) continue;
  try {
    entries.push(JSON.parse(line));
  } catch (e) {}
}

const exchanges = [];
for (const entry of entries) {
  const step = entry.step_index;
  const type = entry.type;
  const entryContent = entry.content;

  if (step < sinceStep) continue;
  if (!entryContent || entryContent.trim().length < 5) continue;

  if (type === "USER_INPUT") {
    const msg = extractUserMessage(entryContent);
    if (msg) {
      exchanges.push({ role: "USER", step, message: msg });
    }
  } else if (type === "PLANNER_RESPONSE") {
    const msg = entryContent.trim();
    if (!isMinimalOrchestration(msg)) {
      exchanges.push({ role: "AGENT", step, message: msg });
    }
  }
}

const lines = [];
for (const ex of exchanges) {
  let cleaned = cleanFileLinks(ex.message);
  cleaned = formatTruncationMarkers(cleaned, ex.step);
  const icon = ex.role === "USER" ? "👤 User" : "🤖 Agent";
  lines.push(`### ${icon}\n`);
  lines.push(`${cleaned}\n`);
  lines.push("---\n");
}

fs.writeFileSync(outputPath, lines.join("\n"), "utf-8");

const userCount = exchanges.filter((e) => e.role === "USER").length;
const agentCount = exchanges.filter((e) => e.role === "AGENT").length;
const truncatedCount = exchanges.filter((e) => e.message.includes("<truncated")).length;

console.log(`Extracted transcript to: ${outputPath}`);
console.log(`  Total exchanges: ${exchanges.length}`);
console.log(`  User turns: ${userCount}`);
console.log(`  Agent turns: ${agentCount}`);
console.log(`  Truncated messages: ${truncatedCount}`);
