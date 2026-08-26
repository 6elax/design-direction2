import { readFileSync, writeFileSync, existsSync, mkdirSync, unlinkSync } from "fs";
import { join, resolve } from "path";
import { parseArgs } from "util";

const { positionals, values } = parseArgs({
  options: {
    "mode": { type: "string" }, // "check", "log", "draft-log", "view-peer", "status", or "setup"
    "transcript": { type: "string" },
    "workspace-root": { type: "string" },
    "payload": { type: "string" }, // JSON payload for manual testing
    "type": { type: "string" }, // Struggle type passed by reflections agent
    "struggle": { type: "string" }, // Struggle text passed by reflections agent
    "id": { type: "string" }, // Peer case ID/key to view
    "file": { type: "string" } // Path to pending_struggle_log.md for parsing
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

const projectId = process.env.FIREBASE_PROJECT_ID || "paci-e55e7";

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

// Generate local ISO string with PST/PDT offset
function getLocalISOString(): string {
  const tzoffset = (new Date()).getTimezoneOffset() * 60000;
  const localISOTime = (new Date(Date.now() - tzoffset)).toISOString().slice(0, -1);
  
  const offset = (new Date()).getTimezoneOffset();
  const sign = offset > 0 ? "-" : "+";
  const absOffset = Math.abs(offset);
  const hours = String(Math.floor(absOffset / 60)).padStart(2, "0");
  const minutes = String(absOffset % 60).padStart(2, "0");
  
  return `${localISOTime}${sign}${hours}:${minutes}`;
}

// Firestore REST Serialization Helpers
function toFirestoreValue(value: any): any {
  if (value === null || value === undefined) {
    return { nullValue: null };
  }
  if (typeof value === "string") {
    return { stringValue: value };
  }
  if (typeof value === "number") {
    return { doubleValue: value };
  }
  if (typeof value === "boolean") {
    return { booleanValue: value };
  }
  return { stringValue: String(value) };
}

function fromFirestoreValue(valueObj: any): any {
  if (!valueObj) return null;
  if (valueObj.nullValue !== undefined) return null;
  if (valueObj.stringValue !== undefined) return valueObj.stringValue;
  if (valueObj.doubleValue !== undefined) return Number(valueObj.doubleValue);
  if (valueObj.integerValue !== undefined) return Number(valueObj.integerValue);
  if (valueObj.booleanValue !== undefined) return valueObj.booleanValue;
  return null;
}

export function toFirestoreDocument(obj: Record<string, any>): any {
  const fields: Record<string, any> = {};
  for (const [k, v] of Object.entries(obj)) {
    if (v !== undefined) {
      fields[k] = toFirestoreValue(v);
    }
  }
  return { fields };
}

export function fromFirestoreDocument(doc: any): Record<string, any> {
  const obj: Record<string, any> = {};
  if (!doc || !doc.fields) return obj;
  const nameParts = doc.name ? doc.name.split("/") : [];
  obj.id = nameParts[nameParts.length - 1] || "";
  
  for (const [k, v] of Object.entries(doc.fields)) {
    obj[k] = fromFirestoreValue(v);
  }
  return obj;
}

// Format document keys as username-problem
export function formatStruggleKey(author: string, keyInput: string): string {
  const cleanAuthor = author.toLowerCase().replace(/[^a-z0-9]/g, "");
  let cleanProblem = keyInput.toLowerCase()
    .replace(/[^a-z0-9-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
  
  if (cleanProblem.startsWith(`${cleanAuthor}-`)) {
    cleanProblem = cleanProblem.slice(cleanAuthor.length + 1);
  }
  
  return `${cleanAuthor}-${cleanProblem}`;
}

// Find matching chat log from the chats collection in Firestore
export async function findMatchingChatId(author: string, key: string, type: string, transcriptText?: string): Promise<string> {
  try {
    const response = await fetch(`https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/chats`);
    if (!response.ok) return "00000000-0000-0000-0000-000000000000";
    const data = await response.json() as any;
    const docs = data.documents || [];
    
    const cleanAuthor = author.toLowerCase().trim();
    
    // Determine topic based on transcript keywords or file key/type
    let topic = "product";
    const keyLower = key.toLowerCase();
    const typeLower = type.toLowerCase();
    
    if (transcriptText) {
      const text = transcriptText.toLowerCase();
      if (text.includes("validation") || text.includes("protostudy")) {
        topic = "validation";
      } else if (text.includes("research") || text.includes("literature")) {
        topic = "research";
      }
    } else {
      if (keyLower.includes("validation") || keyLower.includes("hypothesis") || keyLower.includes("study") || keyLower.includes("evaluation") || typeLower.includes("validation")) {
        topic = "validation";
      } else if (keyLower.includes("literature") || keyLower.includes("thesis") || keyLower.includes("scarcity") || keyLower.includes("scaffolding-scoping") || keyLower.includes("research")) {
        topic = "research";
      }
    }
    
    // Find doc matching author and topic
    const matches = docs.filter((doc: any) => {
      const docUser = (doc.fields.user?.stringValue || "").toLowerCase().trim();
      const docTopic = (doc.fields.topic?.stringValue || "").toLowerCase().trim();
      return docUser === cleanAuthor && docTopic === topic;
    });
    
    if (matches.length > 0) {
      const parts = matches[0].name.split("/");
      return parts[parts.length - 1];
    }
  } catch (e) {}
  return "00000000-0000-0000-0000-000000000000";
}

export async function syncChatToFirestore(conversationId: string, author: string, key: string, type: string, dialogueHistory: string) {
  if (!conversationId || conversationId === "00000000-0000-0000-0000-000000000000" || !dialogueHistory) {
    return;
  }

  try {
    const lines = dialogueHistory.split("\n");
    const parsedMessages = [];
    let currentSender = "";
    let currentContentLines = [];

    for (const line of lines) {
      const cleanLine = line.trim();
      const userMatch = cleanLine.match(/^(?:\*\*User\*\*|\*\*user\*\*):\s*(.*)/i);
      const agentMatch = cleanLine.match(/^(?:>\s*\*\*Agent\*\*|>\s*\*\*agent\*\*|\*\*Agent\*\*|\*\*agent\*\*):\s*(.*)/i);

      if (userMatch) {
        if (currentSender && currentContentLines.length > 0) {
          parsedMessages.push({ sender: currentSender, content: currentContentLines.join("\n").trim() });
        }
        currentSender = "User";
        currentContentLines = [userMatch[1]];
      } else if (agentMatch) {
        if (currentSender && currentContentLines.length > 0) {
          parsedMessages.push({ sender: currentSender, content: currentContentLines.join("\n").trim() });
        }
        currentSender = "Agent";
        currentContentLines = [agentMatch[1]];
      } else {
        if (currentSender) {
          let contentLine = line; // Preserve raw spaces/tabs
          if (currentSender === "Agent" && contentLine.trim().startsWith(">")) {
            const trimmed = contentLine.trim();
            contentLine = trimmed.slice(1);
            if (contentLine.startsWith(" ")) {
              contentLine = contentLine.slice(1);
            }
          }
          currentContentLines.push(contentLine);
        }
      }
    }

    if (currentSender && currentContentLines.length > 0) {
      parsedMessages.push({ sender: currentSender, content: currentContentLines.join("\n").trim() });
    }

    if (parsedMessages.length === 0) return;

    let topic = "product";
    const keyLower = key.toLowerCase();
    const typeLower = type.toLowerCase();
    if (keyLower.includes("validation") || keyLower.includes("hypothesis") || keyLower.includes("study") || typeLower.includes("validation")) {
      topic = "validation";
    } else if (keyLower.includes("literature") || keyLower.includes("research") || keyLower.includes("thesis")) {
      topic = "research";
    }

    // Fetch existing chats document to merge phases and evolution
    let existingPhases = [];
    let existingEvolution = [];
    const chatUrl = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/chats/${conversationId}`;
    try {
      const fetchRes = await fetch(chatUrl);
      if (fetchRes.ok) {
        const existingDoc = await fetchRes.json() as any;
        existingPhases = existingDoc.fields?.phases?.arrayValue?.values || [];
        existingEvolution = existingDoc.fields?.evolution?.arrayValue?.values || [];
      }
    } catch (e) {}

    // Construct new phase map
    const newPhaseValue = {
      mapValue: {
        fields: {
          title: { stringValue: `Struggle: ${key}` },
          messages: {
            arrayValue: {
              values: parsedMessages.map(msg => ({
                mapValue: {
                  fields: {
                    sender: { stringValue: msg.sender },
                    content: { stringValue: msg.content }
                  }
                }
              }))
            }
          }
        }
      }
    };

    // Append new phase to the end
    const updatedPhases = [...existingPhases, newPhaseValue];

    // Construct payload payload including metadata fields: project, topic, user
    const chatDocPayload: Record<string, any> = {
      fields: {
        user: { stringValue: author.toLowerCase() },
        topic: { stringValue: topic },
        project: { stringValue: "design-dir-2" },
        phases: {
          arrayValue: {
            values: updatedPhases
          }
        }
      }
    };

    // Preserve existing evolution if present
    if (existingEvolution.length > 0) {
      chatDocPayload.fields.evolution = {
        arrayValue: {
          values: existingEvolution
        }
      };
    }

    const response = await fetch(chatUrl, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(chatDocPayload)
    });

    if (response.ok) {
      console.log(`Successfully synced dialogue to chats collection document: [${conversationId}]`);
    } else {
      const errorText = await response.text();
      console.warn(`Failed to sync dialogue to chats collection: ${errorText}`);
    }
  } catch (e: any) {
    console.warn(`Error during chats collection sync: ${e.message}`);
  }
}

// Ensure .gitignore has .t4g/skill-weave/
function ensureGitignore() {
  const gitignorePath = join(projectRoot, ".gitignore");
  const ignoreRule = "\n.t4g/skill-weave/\n";
  if (existsSync(gitignorePath)) {
    const content = readFileSync(gitignorePath, "utf-8");
    if (!content.includes(".t4g/skill-weave/")) {
      writeFileSync(gitignorePath, content + ignoreRule, "utf-8");
    }
  } else {
    writeFileSync(gitignorePath, ignoreRule, "utf-8");
  }
}

async function main() {
  ensureGitignore();

  const mode = values["mode"];
  const outDir = join(projectRoot, ".t4g", "skill-weave");

  if (mode === "check") {
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

      for (let i = lines.length - 1; i >= 0; i--) {
        const line = lines[i].trim();
        if (!line) continue;
        try {
          const entry = JSON.parse(line);
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

    // Fetch struggles from Firestore REST API
    let struggles: any[] = [];
    try {
      const response = await fetch(`https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/struggles`);
      if (response.ok) {
        const data = await response.json() as any;
        const docs = data.documents || [];
        struggles = docs.map(fromFirestoreDocument);
      } else if (response.status === 404) {
        struggles = [];
      } else {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
    } catch (e: any) {
      console.error("Failed to fetch matching struggles from Firestore:", e.message);
      process.exit(1);
    }

    const matches = [];

    for (const struggle of struggles) {
      const textToMatch = `${struggle.key} ${struggle.summary || ""} ${struggle.roadblock || struggle.insight || ""} ${struggle.resolution || ""}`.toLowerCase();
      let overlapCount = 0;
      for (const keyword of queryKeywords) {
        if (textToMatch.includes(keyword)) {
          overlapCount++;
        }
      }
      if (overlapCount >= 1) {
        matches.push({ ...struggle, overlapCount });
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
        console.log(`📌 Case ${j + 1} (ID: ${match.id}): [${match.type}] [${match.key}]`);
        console.log(`- Author: ${match.author}`);
        console.log(`- Summary: ${match.summary || "No generalized summary logged."}`);
        console.log(`- Roadblock: ${match.roadblock || match.insight}`);
        console.log(`Run '/stuck' or '/search' in the chat to dynamically generate Socratic questions comparing your code to this peer log.`);
        console.log(`------------------------------------------------------------`);
      }
    }
  } else if (mode === "view-peer") {
    const peerId = values["id"];
    if (!peerId) {
      console.error("Please provide a peer case study ID/key using --id");
      process.exit(1);
    }

    try {
      const response = await fetch(`https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/struggles/${peerId}`);
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      const doc = await response.json() as any;
      const match = fromFirestoreDocument(doc);

      // Fetch dynamic dialogue snippet using phase index & message index boundaries from the chats collection
      let dynamicDialogue = "Dialogue history not linked.";
      const conversationId = match.conversation_id;
      const pIdx = match.phase_index;
      const startIdx = match.start_message_index;
      const endIdx = match.end_message_index;

      if (conversationId && conversationId !== "00000000-0000-0000-0000-000000000000" && pIdx !== undefined && startIdx !== undefined && endIdx !== undefined) {
        try {
          const chatResponse = await fetch(`https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/chats/${conversationId}`);
          if (chatResponse.ok) {
            const chatDoc = await chatResponse.json() as any;
            const phases = chatDoc.fields?.phases?.arrayValue?.values || [];
            if (pIdx < phases.length) {
              const phase = phases[pIdx].mapValue?.fields;
              const messages = phase.messages?.arrayValue?.values || [];
              const sliceStart = Math.max(0, startIdx);
              const sliceEnd = Math.min(messages.length - 1, endIdx);
              
              const lines = [];
              for (let idx = sliceStart; idx <= sliceEnd; idx++) {
                const msg = messages[idx].mapValue?.fields;
                const sender = msg.sender?.stringValue || "Unknown";
                const content = msg.content?.stringValue || "";
                
                if (sender.toLowerCase() === "user") {
                  lines.push(`**User**: ${content}`);
                } else {
                  lines.push(`> **Agent**: ${content}`);
                }
              }
              if (lines.length > 0) {
                dynamicDialogue = lines.join("\n\n");
              }
            }
          }
        } catch (e: any) {
          dynamicDialogue = `Failed to retrieve dynamic dialogue snippet: ${e.message}`;
        }
      }

      if (!existsSync(outDir)) {
        mkdirSync(outDir, { recursive: true });
      }

      // Templates for default questions depending on struggle type.
      // These will serve as structured fallbacks. The live active agent will dynamically replace them with 
      // personalized questions that bridge this peer case to the current user's specific context.
      let q1 = "How does this peer's resolution apply to the problem you are currently facing?";
      let q2 = "What are the trade-offs of using this approach in your active project files?";

      if (match.type === "SCOPING") {
        q1 = "How can you restrict your study boundaries to match your core thesis?";
        q2 = "What features in your current plan can be deferred to a later iteration?";
      } else if (match.type === "DESIGN-FRICTION") {
        q1 = "How can you mitigate surveillance anxiety or compliance gaming for your user flows?";
        q2 = "Does this peer's design balance safety against flexibility effectively?";
      }

      const paneContent = `# [SkillWeave Workspace Pane]
-------------------------------------------------------------

## 📝 Peer Roadblock & Summary
**Summary**: ${match.summary || "No generalized summary logged."}

**Roadblock**: ${match.roadblock || match.insight || "No summary provided."}

**Resolution**: ${match.resolution || "No resolution details logged."}

---

## 💡 Socratic Pivot Questions
<!-- AGENT_INJECTION: Please replace these with 2 custom Socratic pivot questions that bridge the peer roadblock/resolution with the current user's specific struggle/difficulty context. -->
1. ${q1}
2. ${q2}

---

## 🎙️ Verbatim Dialogue History
${dynamicDialogue}
`;

      const outPath = join(outDir, "peer_workspace_case_study.md");
      writeFileSync(outPath, paneContent, "utf-8");
      console.log(`Generated peer workspace view at: ${outPath}`);
    } catch (e: any) {
      console.error("Failed to load peer case study:", e.message);
      process.exit(1);
    }
  } else if (mode === "draft-log") {
    const transcriptPath = values["transcript"];
    if (!transcriptPath || !existsSync(transcriptPath)) {
      console.error("Please provide a valid --transcript path to draft the review log.");
      process.exit(1);
    }

    let roadblockText = "The cohort member hit a steering bottleneck while updating the database environment configs.";
    let resolutionText = "They resolved this by passing values[\"file\"] dynamically to check config files instead of hardcoding \".env\".";
    let dialogueMock = "";
    let transcriptText = "";

    try {
      transcriptText = readFileSync(transcriptPath, "utf-8");
      const lines = transcriptText.split("\n");
      const entries = [];
      
      for (const line of lines) {
        if (!line.trim()) continue;
        try {
          entries.push(JSON.parse(line));
        } catch (e) {}
      }

      let startIndex = -1;
      let endIndex = -1;

      for (let i = entries.length - 1; i >= 0; i--) {
        const entry = entries[i];
        if (entry.type === "USER_INPUT") {
          const text = (entry.content || "").toLowerCase();
          if (text.includes("/resolved") && endIndex === -1) {
            endIndex = i;
          }
          if (text.includes("/stuck") && startIndex === -1 && endIndex !== -1) {
            startIndex = i;
            break;
          }
        }
      }

      let targetEntries = [];
      if (endIndex !== -1) {
        const start = startIndex !== -1 ? Math.max(0, startIndex - 5) : Math.max(0, endIndex - 10);
        targetEntries = entries.slice(start, endIndex + 2);
      } else {
        targetEntries = entries.slice(Math.max(0, entries.length - 12));
      }

      const formattedLines = [];
      for (const entry of targetEntries) {
        if (entry.type === "USER_INPUT") {
          roadblockText = entry.content || roadblockText;
          formattedLines.push(`**User**: ${entry.content}`);
        } else if (entry.type === "PLANNER_RESPONSE") {
          formattedLines.push(`> **Agent**: ${entry.content || "Responding..."}`);
        }
      }

      if (formattedLines.length > 0) {
        dialogueMock = formattedLines.join("\n\n");
      }
    } catch (e) {}

    if (!dialogueMock) {
      dialogueMock = `**User**: Why does the helper agent only trigger on coding files?\n\n> **Agent**: The current telemetry watchers only listen to code changes.\n\n**User**: We need to expand this. Non-developers should be able to use SkillWeave for planning and design tasks too.`;
    }

    if (!existsSync(outDir)) {
      mkdirSync(outDir, { recursive: true });
    }

    // Dynamically query chats collection to find correct conversation ID link
    const author = "alexis";
    const initialKey = formatStruggleKey(author, `struggle-${Date.now()}`);
    const conversationId = await findMatchingChatId(author, initialKey, "TECHNICAL", transcriptText);
    
    // Dynamically search the Firestore chat log phases and messages to find the exact matching range
    let phaseIndex = 0;
    let startMsgIndex = 0;
    let endMsgIndex = 0;

    if (conversationId && conversationId !== "00000000-0000-0000-0000-000000000000") {
      try {
        const response = await fetch(`https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/chats/${conversationId}`);
        if (response.ok) {
          const doc = await response.json() as any;
          const phases = doc.fields?.phases?.arrayValue?.values || [];
          
          // Clean search texts from local transcript roadblock/resolution
          const cleanRoadblock = roadblockText.toLowerCase().replace(/[^\w]/g, "");
          
          let bestPhase = 0;
          let bestStart = 0;
          let bestEnd = 0;
          let maxStartScore = -1;
          let maxEndScore = -1;
          
          for (let p = 0; p < phases.length; p++) {
            const phase = phases[p].mapValue?.fields;
            const messages = phase.messages?.arrayValue?.values || [];
            for (let m = 0; m < messages.length; m++) {
              const content = (messages[m].mapValue?.fields?.content?.stringValue || "").toLowerCase().replace(/[^\w]/g, "");
              if (!content) continue;
              
              let matchScore = 0;
              if (content.includes(cleanRoadblock) || cleanRoadblock.includes(content)) {
                matchScore = 100;
              } else {
                // keyword fallback
                const words = cleanRoadblock.split(/\s+/).filter(w => w.length > 3);
                for (const w of words) {
                  if (w && content.includes(w)) matchScore++;
                }
              }
              
              if (matchScore > maxStartScore) {
                maxStartScore = matchScore;
                bestPhase = p;
                bestStart = m;
              }
            }
          }
          
          // For the end message index, we find a message in the same phase that matches the resolution
          if (phases[bestPhase]) {
            const phase = phases[bestPhase].mapValue?.fields;
            const messages = phase.messages?.arrayValue?.values || [];
            const cleanResolution = resolutionText.toLowerCase().replace(/[^\w]/g, "");
            
            for (let m = bestStart; m < messages.length; m++) {
              const content = (messages[m].mapValue?.fields?.content?.stringValue || "").toLowerCase().replace(/[^\w]/g, "");
              if (!content) continue;
              
              let matchScore = 0;
              if (content.includes(cleanResolution) || cleanResolution.includes(content)) {
                matchScore = 100;
              } else {
                const words = cleanResolution.split(/\s+/).filter(w => w.length > 3);
                for (const w of words) {
                  if (w && content.includes(w)) matchScore++;
                }
              }
              
              if (matchScore > maxEndScore) {
                maxEndScore = matchScore;
                bestEnd = m;
              }
            }
          }
          
          phaseIndex = bestPhase;
          // Set window starting 4 turns before roadblock and ending 2 turns after resolution to capture full context
          startMsgIndex = Math.max(0, bestStart - 4);
          endMsgIndex = Math.min((phases[bestPhase]?.mapValue?.fields?.messages?.arrayValue?.values?.length || 1) - 1, bestEnd + 2);
        }
      } catch (e) {
        console.warn("Could not dynamically resolve active indices from chats collection:", e);
      }
    }

    // Pre-written generalized summary by the agent ending in exactly 1 general Socratic question on a new line
    const summaryText = "Faced a bottleneck while trying to configure project settings, and resolved it by replacing hardcoded paths with a dynamic variable parameter to make configuration checks flexible.\\n\\nHow can you parameterize your environment configurations to support multiple runtime settings?";

    const reviewContent = `# [SkillWeave: Review Your Resolved Struggle]
-------------------------------------------------------------
* **Author**: ${author}
* **Created At**: ${getLocalISOString()}
* **Type**: TECHNICAL
* **Key**: ${initialKey}
* **Conversation ID**: ${conversationId}
* **Phase Index**: ${phaseIndex}
* **Start Message Index**: ${startMsgIndex}
* **End Message Index**: ${endMsgIndex}
* **Status**: Pending Approval (Review and commit to cohort database)

---

## 📝 AI-Generated Struggle Summary
**Summary**: ${summaryText}

**Roadblock**: ${roadblockText}

**Resolution**: ${resolutionText}

---

## 🔍 Comparative Diffs & Context
\`\`\`diff
- const envPath = ".env";
+ const envPath = values["file"] ? resolve(values["file"]) : ".env";
\`\`\`

---

## 🎙️ Verbatim Dialogue History
${dialogueMock}

---

> [!TIP]
> **To Log**: Write comments directly on this Artifact (like Google Docs comments) to request edits or typo corrections, or chat updates directly with the agent. Once you are done reviewing, click the native **Proceed** button on this artifact panel to commit it to the database.
`;

    const outPath = join(outDir, "pending_struggle_log.md");
    writeFileSync(outPath, reviewContent, "utf-8");
    console.log(`Generated review card at: ${outPath}`);
  } else if (mode === "log") {
    const filePath = values["file"] as string | undefined;

    if (filePath) {
      if (!existsSync(filePath)) {
        console.error(`File does not exist: ${filePath}`);
        process.exit(1);
      }
      const content = readFileSync(filePath, "utf-8");
      
      const authorMatch = content.match(/\*\s*\*\*Author\*\*:\s*(.*)/i);
      const typeMatch = content.match(/\*\s*\*\*Type\*\*:\s*(.*)/i);
      const keyMatch = content.match(/\*\s*\*\*Key\*\*:\s*(.*)/i);
      const convMatch = content.match(/\*\s*\*\*Conversation ID\*\*:\s*(.*)/i);
      const phaseMatch = content.match(/\*\s*\*\*Phase Index\*\*:\s*(.*)/i);
      const startMatch = content.match(/\*\s*\*\*Start Message Index\*\*:\s*(.*)/i);
      const endMatch = content.match(/\*\s*\*\*End Message Index\*\*:\s*(.*)/i);
      
      const author = authorMatch ? authorMatch[1].trim().toLowerCase() : "unknown";
      const type = typeMatch ? typeMatch[1].trim() : "TECHNICAL";
      const rawKey = keyMatch ? keyMatch[1].trim() : `struggle-${Date.now()}`;
      const conversationId = convMatch ? convMatch[1].trim() : "00000000-0000-0000-0000-000000000000";
      const phaseIndex = phaseMatch ? Number(phaseMatch[1].trim()) : 0;
      const startMsgIndex = startMatch ? Number(startMatch[1].trim()) : 0;
      const endMsgIndex = endMatch ? Number(endMatch[1].trim()) : 0;
      
      const key = formatStruggleKey(author, rawKey);

      const sections = content.split(/## /);
      let summary = "";
      let roadblock = "";
      let resolution = "";
      let dialogue_history = "";
      
      for (const section of sections) {
        const lines = section.split("\n");
        const heading = lines[0].trim();
        const bodyLines = lines.slice(1);
        
        const cleanBody = bodyLines
          .filter(line => !line.trim().startsWith("<!--") && !line.trim().endsWith("-->") && !line.trim().startsWith("Comment:") && !line.trim().startsWith(">"))
          .join("\n")
          .trim();
          
        if (heading.includes("Summary")) {
          const summaryStr = bodyLines
            .filter(line => !line.trim().startsWith("<!--") && !line.trim().endsWith("-->") && !line.trim().startsWith("Comment:"))
            .join("\n")
            .trim();
          
          const genSummaryMatch = summaryStr.match(/\*\*Summary\*\*:\s*([\s\S]*?)(?=\*\*Roadblock\*\*|$)/i);
          const roadblockMatch = summaryStr.match(/\*\*Roadblock\*\*:\s*([\s\S]*?)(?=\*\*Resolution\*\*|$)/i);
          const resolutionMatch = summaryStr.match(/\*\*Resolution\*\*:\s*([\s\S]*?)$/i);
          
          summary = genSummaryMatch ? genSummaryMatch[1].trim() : "";
          roadblock = roadblockMatch ? roadblockMatch[1].trim() : (genSummaryMatch ? summaryStr.replace(genSummaryMatch[0], "").trim() : summaryStr);
          resolution = resolutionMatch ? resolutionMatch[1].trim() : "";
        } else if (heading.includes("Diffs") || heading.includes("Resolution")) {
          const codeBlockMatch = cleanBody.match(/```diff([\s\S]*?)```/);
          const rawRes = codeBlockMatch ? codeBlockMatch[1].trim() : cleanBody;
          if (!resolution) {
            resolution = rawRes;
          }
        } else if (heading.includes("Dialogue") || heading.includes("History")) {
          const dialogLines = bodyLines
            .filter(line => !line.trim().startsWith("<!--") && !line.trim().endsWith("-->") && !line.trim().startsWith("Comment:"))
            .join("\n")
            .trim();
          dialogue_history = dialogLines;
        }
      }
      
      if (!roadblock) roadblock = "Struggle resolved.";

      const upperType = type.toUpperCase();
      if (!VALID_TYPES.has(upperType)) {
        console.error(`Invalid type: ${upperType}`);
        process.exit(1);
      }
      
      const projectUuid = process.env.PROJECT_UUID || "00000000-0000-0000-0000-000000000000";
      
      try {
        const docData = toFirestoreDocument({
          project_uuid: projectUuid,
          type: upperType,
          key,
          summary: summary || null,
          roadblock,
          resolution: resolution || null,
          conversation_id: conversationId,
          phase_index: phaseIndex,
          start_message_index: startMsgIndex,
          end_message_index: endMsgIndex,
          author,
          created_at: getLocalISOString(),
          dialogue_history: dialogue_history || null
        });

        const response = await fetch(`https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/struggles/${key}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(docData)
        });
        
        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`HTTP ${response.status}: ${errorText}`);
        }
        
        console.log(`Successfully logged SkillWeave struggle from file: [${key}]`);
        
        await syncChatToFirestore(conversationId, author, key, type, dialogue_history);
        
        try {
          unlinkSync(filePath);
          console.log(`Cleared local review file: ${filePath}`);
        } catch (e) {}
      } catch (e: any) {
        console.error("Failed to commit log from file:", e.message);
        process.exit(1);
      }
    } else {
      // Legacy payload-based logging fallback
      const payloadStr = values["payload"];
      if (!payloadStr) {
        console.error("Please provide a JSON payload using --payload OR a review card file using --file");
        process.exit(1);
      }

      try {
        const payload = JSON.parse(payloadStr);
        const { type, key: rawKey, summary, insight, roadblock: payRoadblock, resolution, example, "conversation-id": conversationId, author, phase_index, start_message_index, end_message_index } = payload;

        if (!type || !rawKey || !(insight || payRoadblock) || !conversationId || !author) {
          throw new Error("Missing required fields: type, key, roadblock/insight, conversation-id, author");
        }

        const upperType = type.toUpperCase();
        if (!VALID_TYPES.has(upperType)) {
          throw new Error(`Type must be one of: ${Array.from(VALID_TYPES).join(", ")}`);
        }

        const key = formatStruggleKey(author, rawKey);

        const projectUuid = process.env.PROJECT_UUID || "00000000-0000-0000-0000-000000000000";

        const docData = toFirestoreDocument({
          project_uuid: projectUuid,
          type: upperType,
          key,
          summary: summary || null,
          roadblock: payRoadblock || insight,
          resolution: resolution || example || null,
          conversation_id: conversationId,
          phase_index: phase_index !== undefined ? Number(phase_index) : 0,
          start_message_index: start_message_index !== undefined ? Number(start_message_index) : 0,
          end_message_index: end_message_index !== undefined ? Number(end_message_index) : 0,
          author: author.toLowerCase(),
          created_at: getLocalISOString(),
          dialogue_history: dialogue_history || null
        });

        const response = await fetch(`https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/struggles/${key}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(docData)
        });

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`HTTP ${response.status}: ${errorText}`);
        }

        console.log(`Successfully logged SkillWeave struggle: [${key}]`);
        
        await syncChatToFirestore(conversationId, author, key, type, dialogue_history);
      } catch (e: any) {
        console.error("Failed to log struggle:", e.message);
        process.exit(1);
      }
    }
  } else if (mode === "status") {
    try {
      const response = await fetch(`https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/struggles`);
      let strugglesList: any[] = [];
      if (response.ok) {
        const data = await response.json() as any;
        const docs = data.documents || [];
        strugglesList = docs.map(fromFirestoreDocument);
      }

      const projectUuid = process.env.PROJECT_UUID || "00000000-0000-0000-0000-000000000000";
      const totalCount = strugglesList.length;
      let localCount = 0;
      let peerCount = 0;
      const typeCounts: Record<string, number> = {};

      for (const row of strugglesList) {
        if (row.project_uuid === projectUuid) {
          localCount++;
        } else {
          peerCount++;
        }
        typeCounts[row.type] = (typeCounts[row.type] || 0) + 1;
      }

      console.log("\n🛰️ SkillWeave Status:");
      console.log("-----------------------------------------");
      console.log(`- Connection: ACTIVE (Firebase Firestore)`);
      console.log(`- Firebase Project ID: ${projectId}`);
      console.log(`- Project UUID: ${projectUuid}`);
      console.log(`- Your Project's Local Struggles: ${localCount} logged`);
      console.log(`- Peer Struggles (Cohort Sync): ${peerCount} synced`);
      console.log(`- Total Cloud Database Struggles: ${totalCount}`);
      for (const type of Array.from(VALID_TYPES)) {
        if (typeCounts[type]) {
          console.log(`  * ${type} struggles: ${typeCounts[type]}`);
        }
      }
      console.log("-----------------------------------------");
    } catch (e: any) {
      console.error("Failed to query database status:", e.message);
      process.exit(1);
    }
  } else if (mode === "validate-stuck") {
    const transcriptPath = values["transcript"];
    if (!transcriptPath || !existsSync(transcriptPath)) {
      console.error("Please provide a valid --transcript path to validate stuck trigger.");
      process.exit(1);
    }

    try {
      const content = readFileSync(transcriptPath, "utf-8");
      const lines = content.split("\n");
      const entries = [];

      for (const line of lines) {
        if (!line.trim()) continue;
        try {
          const entry = JSON.parse(line);
          if (entry.type === "USER_INPUT" && (entry.content || "").trim().toLowerCase().startsWith("/stuck")) {
            continue;
          }
          entries.push(entry);
        } catch (e) {}
      }

      const lastEntries = entries.slice(-4);
      let foundStruggle = false;

      for (const entry of lastEntries) {
        if (entry.type === "ERROR_MESSAGE") {
          foundStruggle = true;
          break;
        }
        if (entry.tool_calls) {
          for (const call of entry.tool_calls) {
            if (call.output && (call.output.toLowerCase().includes("error") || call.output.toLowerCase().includes("fail"))) {
              foundStruggle = true;
              break;
            }
          }
          if (foundStruggle) break;
        }
        if (entry.type === "USER_INPUT") {
          const text = (entry.content || "").toLowerCase();
          const keywords = ["fail", "error", "stuck", "bug", "wrong", "not working", "broken", "timed out", "crash", "refuse", "repetition", "repetitive", "repeat", "loop", "again"];
          if (keywords.some(kw => text.includes(kw))) {
            foundStruggle = true;
            break;
          }
        }
      }

      if (foundStruggle) {
        console.log("Struggle detected: valid");
        process.exit(0);
      } else {
        console.log("No struggle detected: invalid");
        process.exit(1);
      }
    } catch (e: any) {
      console.error("Failed to run validation check:", e.message);
      process.exit(1);
    }
  } else if (mode === "setup") {
    try {
      console.log("\n🛠️ SkillWeave Setup: Initializing workspace integration...");
      if (!outDir) {
        mkdirSync(outDir, { recursive: true });
        console.log(`Created directory: ${outDir}`);
      }

      const envExamplePath = join(projectRoot, ".env.example");
      if (!existsSync(envExamplePath)) {
        writeFileSync(envExamplePath, "FIREBASE_PROJECT_ID=\"\"\nPROJECT_UUID=\"\"\n");
        console.log(`Created template: ${envExamplePath}`);
      }

      const envPath = join(projectRoot, ".env");
      if (!existsSync(envPath)) {
        writeFileSync(envPath, "FIREBASE_PROJECT_ID=\"\"\nPROJECT_UUID=\"\"\n");
        console.warn(`⚠️ Created empty .env file. Please fill in your FIREBASE_PROJECT_ID in: ${envPath}`);
      }

      const gitignorePath = join(projectRoot, ".gitignore");
      let needsAppend = true;
      if (existsSync(gitignorePath)) {
        const content = readFileSync(gitignorePath, "utf-8");
        if (content.includes(".env") && content.includes(".t4g/skill-weave/")) {
          needsAppend = false;
        }
      }

      if (needsAppend) {
        appendFileSync(gitignorePath, "\n# SkillWeave credentials and memory DB files\n.env\n.t4g/skill-weave/\n");
        console.log(`Updated ${gitignorePath} to ignore .env and .t4g/skill-weave/`);
      }

      console.log("\n💡 SkillWeave Setup completed! Please configure your credentials inside .env.");
    } catch (e: any) {
      console.error("Failed to complete setup:", e.message);
      process.exit(1);
    }
  } else {
    console.error("Invalid mode. Use --mode check, --mode view-peer, --mode draft-log, --mode log, --mode status, or --mode setup");
    process.exit(1);
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
