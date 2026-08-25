import { readFileSync, existsSync } from "fs";
import { join } from "path";

const projectRoot = process.cwd();

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

const CASES = [
  {
    key: "iris-user-scoping-dilemma",
    type: "SCOPING",
    author: "Iris",
    summary: "Faced a conflict scoping an evaluation study for diverse user groups, and resolved it by restricting the study's scope to a standard curriculum database template, separating general needs from active research scopes.\n\nHow can you partition your user groups to keep your evaluation focused without completely neglecting the broader audience?",
    roadblock: "Iris struggled to define a narrow target user group for her product evaluation without excluding other members of her cohort. Under this challenge, Iris proposed expanding the tool to support any arbitrary software repository, which the agent warned would cause massive scope creep.",
    resolution: "Instead of trying to accommodate all user groups at once, Iris resolved this by separating the general curriculum from the specific evaluation study, steering the agent to limit the study's scope strictly to standard template database frameworks instead of general codebases."
  },
  {
    key: "alexis-surveillance-vs-learning",
    type: "DESIGN-FRICTION",
    author: "Alexis",
    summary: "Faced builder pushback when attempting to log micro-activity metrics (perceptions of invasive tracking), and resolved it by shifting tracking from passive logs to low-friction voluntary reflection inputs.\n\nHow can you design feedback features that feel like supportive learning tools rather than compliance monitoring?",
    roadblock: "Alexis struggled to design a learning feedback system. The agent suggested tracking productivity metrics (typing speed and prompt counts) in a dashboard, which Alexis feared would feel like invasive monitoring and lead to compliance gaming.",
    resolution: "Instead of tracking productivity metrics, Alexis resolved the surveillance anxiety by prompting the agent to co-design a simple text input box directly inside the chat interface where users write a brief reflection when they resolve a bug, alongside a shared dashboard showing common errors."
  },
  {
    key: "varia-synthesis-overload",
    type: "DESIGN-FRICTION",
    author: "Varia",
    summary: "Faced information fatigue when generating full summaries of group brainstorms, and resolved it by extracting only high-level highlights to seed active human alignment discussions.\n\nHow can you design summaries to trigger active group discussion rather than passive consumption?",
    roadblock: "Varia worried that generating flat, machine-written summaries of individual brainstorms would cause synthesis overload (cognitive fatigue from reading too much aggregated information) and leave no mental space for the team to agree on ideas.",
    resolution: "Instead of generating flat text summaries of each chat, Varia resolved this by steering the agent to extract only targeted highlights and themes to trigger active human discussion."
  },
  {
    key: "varia-agent-hallucination-drift",
    type: "HALLUCINATION",
    author: "Varia",
    summary: "Faced assistant steering drift when it lost track of project requirements, and resolved it by instructing the agent to re-read core design files and explicitly print system constraints.\n\nHow can you establish explicit checkpoints to keep your assistant aligned with core project constraints?",
    roadblock: "The agent hallucinated criticisms about analyzing messaging channels like Slack or Discord, losing track of the core product definition (which only stores individual user-to-AI chat logs).",
    resolution: "Instead of letting the agent continue criticizing the wrong database structure, Varia corrected the agent's context by prompting it to re-read the core thesis files and explicitly list the system constraints."
  },
  {
    key: "rachel-social-sharing-barrier",
    type: "METACOGNITIVE",
    author: "Rachel",
    summary: "Faced participation anxiety from quiet team members when sharing research notes publicly, and resolved it by exposing only high-level status tags while keeping detailed logs private.\n\nHow can you design shared workspace summaries to protect individual privacy while still encouraging collaboration?",
    roadblock: "Rachel was concerned that junior students would feel too intimidated to share half-formed research ideas publicly in front of peers and faculty mentors.",
    resolution: "Instead of forcing students to publish raw chat logs, Rachel resolved the sharing anxiety by steering the agent to act as a private questioning partner, exposing only general support tags in the shared template."
  },
  {
    key: "aubrey-fragile-novice-onboarding",
    type: "METACOGNITIVE",
    author: "Aubrey",
    summary: "Faced beginner confusion when onboarded with static text manuals, and resolved it by designing an interactive conversational tutor that guides users through setup steps.\n\nHow can you transform static documentation into active, step-by-step guidance for new users?",
    roadblock: "Aubrey pointed out that new students often skim written onboarding instructions and fail because they are too intimidated to ask human mentors for help when confused.",
    resolution: "Instead of expecting novices to follow static guides, Aubrey resolved the learning gap by steering the agent to design an interactive conversational partner that guides the user through tasks step-by-step."
  },
  {
    key: "alej-bypassing-and-resistance",
    type: "DESIGN-FRICTION",
    author: "Alej",
    summary: "Faced the risk of users bypassing restrictive, purely Socratic assistants for direct-answer bots, and resolved it by building contextual templates that make staying in the tool faster than leaving.\n\nHow can you align your educational constraints with the user's demand for speed?",
    roadblock: "Alej faced a dilemma: if the Socratic tool strictly acts Socratic (refusing to generate direct answers), students will bypass the tool entirely by copying their tasks into a standard chatbot in another tab.",
    resolution: "Instead of using rigid refusals, Alej resolved the bypassing risk by prompting the agent to design helper templates and context-aware starter structures that make staying in the tool faster than leaving."
  },
  {
    key: "varia-transcript-fatigue",
    type: "DESIGN-FRICTION",
    author: "Varia",
    summary: "Faced time constraints from team leaders reviewing long transcripts, and resolved it by compiling key decisions into condensed overviews rather than long dialogue text.\n\nHow can you structure project logs so that busy mentors can extract core decisions in under a minute?",
    roadblock: "Varia worried that busy faculty mentors would ignore raw developer conversation transcripts due to time constraints, leaving the logs completely unread.",
    resolution: "Instead of publishing raw transcripts, Varia resolved this by steering the agent to design a synthesis overview highlighting key decisions and trade-offs rather than long conversation files."
  },
  {
    key: "varia-literature-scarcity",
    type: "SCOPING",
    author: "Varia",
    summary: "Faced positioning dilemmas when writing paper scopes that felt too similar to existing systems, and resolved it by framing the work around a new theoretical lens (capturing human friction to auto-update tools).\n\nHow can you reframe your standard product implementation as a theoretical contribution to academic literature?",
    roadblock: "Varia struggled to position her research approach in the literature, worrying that reviewers would reject her design as too similar to existing study tools.",
    resolution: "Instead of framing the project as a standard study tool, Varia prompted the agent to position the paper around a new theoretical lens: capturing user friction signals automatically to generate cohort-wide templates."
  },
  {
    key: "alexis-scaffolding-intangibility",
    type: "THEORETICAL",
    author: "Alexis",
    summary: "Faced user confusion trying to conceptualize abstract interface concepts, and resolved it by forcing the assistant to mock up concrete layout models and navigation mockups.\n\nHow can you leverage visual layout prototypes to clarify abstract design ideas?",
    roadblock: "Alexis struggled to visualize what 'contextual runtime scaffolding' (interactive guide popups) looked like in practice compared to basic static text tutorials.",
    resolution: "Instead of accepting abstract terms, Alexis forced the agent to define concrete layouts, steering it to design specific layout components and query widgets."
  },
  {
    key: "alexis-compliance-gaming",
    type: "DESIGN-FRICTION",
    author: "Alexis",
    summary: "Faced compliance gaming (builders typing random letters to bypass reflection fields), and resolved it by implementing an automated relevance parser that rejects low-effort inputs.\n\nHow can you structure checks to filter out low-effort entries without annoying well-intentioned users?",
    roadblock: "Alexis was concerned that forcing developers to write reflections before saving files would lead to compliance gaming (users typing gibberish or fake answers just to bypass the system gating blocks).",
    resolution: "Instead of using unverified text boxes, Alexis co-designed an automated parser that analyzes reflection relevance and filters out low-effort entries."
  },
  {
    key: "alexis-theory-disconnect",
    type: "THEORETICAL",
    author: "Alexis",
    summary: "Faced difficulty translating high-level educational theories into features, and resolved it by mapping abstract concepts to concrete product mechanisms (using struggles to auto-update templates).\n\nHow can you translate your abstract pedagogical concepts into concrete software features?",
    roadblock: "Alexis struggled to map abstract academic concepts (like Double-Loop Learning, where users reflect on and change their underlying rules) into concrete software features.",
    resolution: "Instead of relying on theoretical abstracts, Alexis prompted the agent to translate Double-Loop Learning into template-update loops (where user struggles automatically update project starter files)."
  },
  {
    key: "alexis-peer-sync-friction",
    type: "TECHNICAL",
    author: "Alexis",
    summary: "Faced time lost when team members asked repetitive setup questions in chats, and resolved it by designing a CLI utility to auto-log and index successful steering prompts.\n\nHow can you automate the capture of successful setup fixes to prevent repetitive questions?",
    roadblock: "Alexis noticed that developers waste hours asking teammates on Slack or Discord to help them resolve recurring agent-steering errors or setup bugs.",
    resolution: "Instead of relying on manual peer questioning, Alexis guided the agent to design a command-line tool that automatically logs and indexes successful steering prompts."
  },
  {
    key: "alexis-log-reading-fatigue",
    type: "DESIGN-FRICTION",
    author: "Alexis",
    summary: "Faced reading fatigue from team members exploring long debugging transcripts, and resolved it by designing collapsible timelines highlighting key correction points.\n\nHow can you filter long developer logs to highlight only the critical pivot moments?",
    roadblock: "Alexis was concerned that developers looking for quick solutions would refuse to read long, 4-hour raw conversation logs of peer debugging sessions.",
    resolution: "Instead of displaying raw transcripts, Alexis steered the agent to design collapsible chat timelines and automatically highlight key pivot moments where the fix occurred."
  },
  {
    key: "alexis-error-isolation",
    type: "TECHNICAL",
    author: "Alexis",
    summary: "Faced concerns that unique team setups made sharing struggles useless, and resolved it by auditing historical logs to confirm actual overlapping breakdown patterns.\n\nHow can you verify if your team's struggles overlap before building a shared registry?",
    roadblock: "Alexis worried that different teams have completely isolated codebases and tasks, making a shared registry of peer struggles useless because their problems would never overlap.",
    resolution: "Instead of building a complex database immediately, Alexis structured the first study as a retrospective evaluation to audit historical chat logs for actual overlapping patterns."
  },
  {
    key: "alexis-interface-ambiguity",
    type: "DESIGN-FRICTION",
    author: "Alexis",
    summary: "Faced indecision on whether the utility should be CLI-only or web-only, and resolved it by splitting the interface into a CLI background logger and a sidebar chat panel.\n\nHow can you split your product interface to support both background logging and active user reflection?",
    roadblock: "Alexis was confused about the tool's interface format, debating whether it should operate as a command-line tool, a code editor extension, or a standalone website.",
    resolution: "Instead of choosing a single format, Alexis split the interface: a command-line utility for quick background logging and a code editor sidebar widget for interactive chat."
  },
  {
    key: "alexis-log-scale-overload",
    type: "DESIGN-FRICTION",
    author: "Alexis",
    summary: "Faced search overload when many people encountered similar roadblocks, and resolved it by designing similarity grouping and rating filters to highlight the best fixes first.\n\nHow can you filter a growing database of struggles to surface only the most high-value peer case studies?",
    roadblock: "Alexis was concerned that if many developers hit the same roadblock, displaying all their individual logs would cause search overload and make it hard to find the best fix.",
    resolution: "Instead of listing all logs sequentially, Alexis guided the agent to design similarity grouping and rating filters to surface the most helpful fixes first."
  },
  {
    key: "iris-inclusivity-scoping",
    type: "SCOPING",
    author: "Iris",
    summary: "Faced scope creep when trying to validate an evaluation tool across complex open-source setups, and resolved it by limiting the test cases strictly to the team's standard template repositories.\n\nHow can you restrict your validation testbed to maintain a realistic scope for your study?",
    roadblock: "Iris wanted her validation study to support complex, open-source repositories to remain inclusive of all developers, but the agent warned this would cause massive scope creep.",
    resolution: "Instead of supporting arbitrary repositories, Iris restricted the evaluation scope strictly to the lab's standard database curriculum codebases."
  },
  {
    key: "iris-fading-scaffolding-turnoff",
    type: "DESIGN-FRICTION",
    author: "Iris",
    summary: "Faced builder frustration when an assistant refused to write code under deadlines, and resolved it by co-designing diagnostic helper prompts instead of hard refusals.\n\nHow can you design helpful guiding prompts that assist the user without flatly refusing to write code?",
    roadblock: "Iris warned that Socratic messages from the agent (like refusing to write code) would frustrate developers under tight deadlines and cause them to abandon the tool.",
    resolution: "Instead of displaying hard refusal messages, Iris guided the agent to co-design diagnostic questions that help the user write their own code."
  },
  {
    key: "iris-hypothesis-dilution",
    type: "VALIDATION",
    author: "Iris",
    summary: "Faced advisory pressure to test too many research variables simultaneously, and resolved it by splitting the evaluation into sequential, separate study blocks.\n\nHow can you sequence your evaluation phases to test individual variables without diluting your core hypotheses?",
    roadblock: "Iris's advisor wanted her validation study to evaluate both individual student retention and cohort-wide collaboration at the same time, diluting the study's focus.",
    resolution: "Instead of testing both in a single study, Iris split the evaluation: she focused on individual code retention metrics first, deferring cohort dashboard audits."
  },
  {
    key: "aubrey-scaffolding-scoping",
    type: "SCOPING",
    author: "Aubrey",
    summary: "Faced scope creep when an assistant attempted to add an unrelated practice sandbox to a guide script, and resolved it by pushback that restricted the scope strictly to guidance walkthroughs.\n\nHow can you enforce scope boundaries when your assistant proposes features outside your core thesis?",
    roadblock: "The agent attempted to scope a 'practice coding mode' into Aubrey's product thesis, which Aubrey rejected as unrelated to her core focus on walkthrough guides.",
    resolution: "Instead of including practice mode, Aubrey pushed back and limited the scope strictly to conversational walkthrough guidance."
  },
  {
    key: "rachel-participation-disparity",
    type: "DESIGN-FRICTION",
    author: "Rachel",
    summary: "Faced loudest-voice dominance during group brainstorm sessions, and resolved it by compiling individual ideas into neutral, aggregated summaries before meetings.\n\nHow can you structure your ideation process to give equal visibility to quiet or junior team members?",
    roadblock: "Rachel was concerned that confident, outspoken students dominated sync alignment meetings, silencing quiet or junior team members during brainstorms.",
    resolution: "Instead of relying on open-ended group sync debates, Rachel guided the agent to design templates that summarize individual ideas into neutral, aggregated overviews before group meetings."
  },
  {
    key: "rachel-anonymity-dilemma",
    type: "DESIGN-FRICTION",
    author: "Rachel",
    summary: "Faced privacy concerns when attributing ideas in team summaries, and resolved it by displaying high-level consensus tags while keeping individual identities hidden.\n\nHow can you design shared summaries to show team ideas without exposing individual identities?",
    roadblock: "Rachel struggled to attribute ideas on a shared team template without exposing raw conversation histories, which would violate student privacy.",
    resolution: "Instead of exposing raw logs, Rachel guided the agent to display general support tags (tracking overall options selected) while keeping individual transcripts private."
  }
];

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

function toFirestoreDocument(obj: Record<string, any>): any {
  const fields: Record<string, any> = {};
  for (const [k, v] of Object.entries(obj)) {
    if (v !== undefined) {
      fields[k] = toFirestoreValue(v);
    }
  }
  return { fields };
}

function formatStruggleKey(author: string, keyInput: string): string {
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

async function findMatchingChatId(author: string, key: string, type: string): Promise<string> {
  try {
    const response = await fetch(`https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/chats`);
    if (!response.ok) return "00000000-0000-0000-0000-000000000000";
    const data = await response.json() as any;
    const docs = data.documents || [];
    
    const cleanAuthor = author.toLowerCase().trim();
    
    // Determine topic based on key/type fallbacks
    let topic = "product";
    const keyLower = key.toLowerCase();
    const typeLower = type.toLowerCase();
    
    if (keyLower.includes("validation") || keyLower.includes("hypothesis") || keyLower.includes("study") || keyLower.includes("evaluation") || typeLower.includes("validation")) {
      topic = "validation";
    } else if (keyLower.includes("literature") || keyLower.includes("thesis") || keyLower.includes("scarcity") || keyLower.includes("scaffolding-scoping") || keyLower.includes("research")) {
      topic = "research";
    }
    
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

// Find specific message range inside the chat log corresponding to the roadblock & resolution
async function findDialogueIndices(chatId: string, roadblock: string, resolution: string): Promise<{ phase_index: number; start_message_index: number; end_message_index: number }> {
  const fallback = { phase_index: 0, start_message_index: 0, end_message_index: 0 };
  if (chatId === "00000000-0000-0000-0000-000000000000") return fallback;
  
  try {
    const response = await fetch(`https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/chats/${chatId}`);
    if (!response.ok) return fallback;
    const doc = await response.json() as any;
    const phases = doc.fields?.phases?.arrayValue?.values || [];
    
    const keywords = [
      ...roadblock.toLowerCase().split(/\s+/).filter(w => w.length > 3),
      ...resolution.toLowerCase().split(/\s+/).filter(w => w.length > 3)
    ];
    
    let bestPhaseIndex = 0;
    let bestMsgIndex = 0;
    let maxOverlap = -1;
    
    for (let p = 0; p < phases.length; p++) {
      const phase = phases[p].mapValue?.fields;
      const messages = phase.messages?.arrayValue?.values || [];
      for (let m = 0; m < messages.length; m++) {
        const content = (messages[m].mapValue?.fields?.content?.stringValue || "").toLowerCase();
        let overlap = 0;
        for (const kw of keywords) {
          if (content.includes(kw)) {
            overlap++;
          }
        }
        if (overlap > maxOverlap) {
          maxOverlap = overlap;
          bestPhaseIndex = p;
          bestMsgIndex = m;
        }
      }
    }
    
    const phase = phases[bestPhaseIndex].mapValue?.fields;
    const messages = phase.messages?.arrayValue?.values || [];
    
    // We want a small window of 2-3 turns around the best matching message
    const start_message_index = Math.max(0, bestMsgIndex - 1);
    const end_message_index = Math.min(messages.length - 1, bestMsgIndex + 1);
    
    return {
      phase_index: bestPhaseIndex,
      start_message_index,
      end_message_index
    };
  } catch (e) {}
  return fallback;
}

async function seed() {
  console.log(`Seeding ${CASES.length} historical case studies into Firebase Firestore struggles collection...\n`);
  
  const projectUuid = process.env.PROJECT_UUID || "00000000-0000-0000-0000-000000000000";
  
  for (let i = 0; i < CASES.length; i++) {
    const item = CASES[i];
    const key = formatStruggleKey(item.author, item.key);
    
    // Dynamically look up matching conversation_id from chats collection
    console.log(`[${i + 1}/${CASES.length}] Querying chats link for ${key}...`);
    const conversationId = await findMatchingChatId(item.author, key, item.type);
    console.log(`  └─ Found chat ID: ${conversationId}`);
    
    // Dynamically find index range for relevant dialogue history
    console.log(`  └─ Slicing dialogue indices in chat log...`);
    const indices = await findDialogueIndices(conversationId, item.roadblock, item.resolution);
    console.log(`  └─ Found range: Phase ${indices.phase_index}, messages [${indices.start_message_index} to ${indices.end_message_index}]`);
    
    try {
      const docData = toFirestoreDocument({
        project_uuid: projectUuid,
        type: item.type,
        key: key,
        summary: item.summary,
        roadblock: item.roadblock,
        resolution: item.resolution,
        author: item.author,
        conversation_id: conversationId,
        phase_index: indices.phase_index,
        start_message_index: indices.start_message_index,
        end_message_index: indices.end_message_index,
        created_at: new Date().toISOString()
      });

      const response = await fetch(`https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/struggles/${key}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(docData)
      });
      
      if (!response.ok) {
        const errText = await response.text();
        console.error(`  x Failed: HTTP ${response.status} - ${errText}`);
      } else {
        console.log(`  ✓ Success`);
      }
    } catch (e: any) {
      console.error(`  x Failed: ${e.message}`);
    }
  }
  
  console.log("\nSeeding finished!");
}

seed().catch(err => {
  console.error("Uncaught error during seeding:", err);
  process.exit(1);
});
