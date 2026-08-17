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

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("Error: SUPABASE_URL and SUPABASE_KEY must be set in your .env file.");
  process.exit(1);
}

const CASES = [
  {
    key: "iris-user-scoping-dilemma",
    type: "SCOPING",
    author: "Iris",
    insight: "Iris struggled to define a narrow target user group for her product evaluation without excluding other members of her cohort. Under this challenge, Iris proposed expanding the tool to support any arbitrary software repository, which the agent warned would cause massive scope creep.",
    example: "Instead of trying to accommodate all user groups at once, Iris resolved this by separating the general curriculum from the specific evaluation study, steering the agent to limit the study's scope strictly to standard template database frameworks instead of general codebases.",
    metacognitive_pattern: "Monolith Scoping (attempting to satisfy multiple conflicting requirements with a single complex scope).",
    socratic_pivot: "1. Are you trying to design a single component, flow, or scope that solves multiple unrelated user goals at once?\n2. What is the single core constraint you can isolate first? What requirements can you defer or decouple?"
  },
  {
    key: "alexis-surveillance-vs-learning",
    type: "DESIGN-FRICTION",
    author: "Alexis",
    insight: "Alexis struggled to design a learning feedback system. The agent suggested tracking productivity metrics (typing speed and prompt counts) in a dashboard, which Alexis feared would feel like invasive monitoring and lead to compliance gaming.",
    example: "Instead of tracking productivity metrics, Alexis resolved the surveillance anxiety by prompting the agent to co-design a simple text input box directly inside the chat interface where users write a brief reflection when they resolve a bug, alongside a shared dashboard showing common errors.",
    metacognitive_pattern: "Surveillance vs. Growth (measuring compliance metrics causes evaluation anxiety, prompting users to game the system).",
    socratic_pivot: "1. Does your design require collecting user performance data (like typing speed), or is a simple description of their final solution sufficient?\n2. How can you structure feedback inputs directly into the workflow so users perceive them as a helpful pause rather than a chore they want to skip?"
  },
  {
    key: "varia-synthesis-overload",
    type: "DESIGN-FRICTION",
    author: "Varia",
    insight: "Varia worried that generating flat, machine-written summaries of individual brainstorms would cause synthesis overload (cognitive fatigue from reading too much aggregated information) and leave no mental space for the team to agree on ideas.",
    example: "Instead of generating flat text summaries of each chat, Varia resolved this by steering the agent to extract only targeted highlights and themes to trigger active human discussion.",
    metacognitive_pattern: "Information Overload (providing too much dense text reduces comprehension).",
    socratic_pivot: "1. Is your design displaying raw logs or long text summaries? How can you filter the information to show only active decision points?\n2. How can you structure summary outputs to invite human analysis rather than passive reading?"
  },
  {
    key: "varia-agent-hallucination-drift",
    type: "HALLUCINATION",
    author: "Varia",
    insight: "The agent hallucinated criticisms about analyzing messaging channels like Slack or Discord, losing track of the core product definition (which only stores individual user-to-AI chat logs).",
    example: "Instead of letting the agent continue criticizing the wrong database structure, Varia corrected the agent's context by prompting it to re-read the core thesis files and explicitly list the system constraints.",
    metacognitive_pattern: "Context Drift (AI agent losing track of the core product scope or constraints).",
    socratic_pivot: "1. When your agent suggests changes that violate your core assumptions, are you correcting it immediately, or letting it build on wrong assumptions?\n2. What reference files or constraints can you prompt the agent to re-read to ground its context window?"
  },
  {
    key: "rachel-social-sharing-barrier",
    type: "METACOGNITIVE",
    author: "Rachel",
    insight: "Rachel was concerned that junior students would feel too intimidated to share half-formed research ideas publicly in front of peers and faculty mentors.",
    example: "Instead of forcing students to publish raw chat logs, Rachel resolved the sharing anxiety by steering the agent to act as a private questioning partner, exposing only general support tags in the shared template.",
    metacognitive_pattern: "Evaluation Anxiety (intimidating users into withholding ideas due to public exposure).",
    socratic_pivot: "1. Does your design force users to share raw, unedited work? How can you build private draft spaces to encourage low-stakes experimentation?\n2. What is the minimum metadata users can share to collaborate without exposing their entire thought process?"
  },
  {
    key: "aubrey-fragile-novice-onboarding",
    type: "METACOGNITIVE",
    author: "Aubrey",
    insight: "Aubrey pointed out that new students often skim written onboarding instructions and fail because they are too intimidated to ask human mentors for help when confused.",
    example: "Instead of expecting novices to follow static guides, Aubrey resolved the learning gap by steering the agent to design an interactive conversational partner that guides the user through tasks step-by-step.",
    metacognitive_pattern: "Novice Helplessness (skimming documentation and refusing to seek help due to intimidation).",
    socratic_pivot: "1. Does your onboarding rely on static text walls? How can you break instructions into active, step-by-step interactions?\n2. How can your system detect when a user is struggling in silence and offer low-stakes guidance?"
  },
  {
    key: "alej-bypassing-and-resistance",
    type: "DESIGN-FRICTION",
    author: "Alej",
    insight: "Alej faced a dilemma: if the Socratic tool strictly acts Socratic (refusing to generate direct answers), students will bypass the tool entirely by copying their tasks into a standard chatbot in another tab.",
    example: "Instead of using rigid refusals, Alej resolved the bypassing risk by prompting the agent to design helper templates and context-aware starter structures that make staying in the tool faster than leaving.",
    metacognitive_pattern: "Tool Bypassing (users escaping strict learning constraints to find faster shortcuts).",
    socratic_pivot: "1. Are your learning constraints so strict that they frustrate users? How can you make staying in the workflow more helpful than bypassing it?\n2. What templates or starting scaffolds can you provide to accelerate work without giving away the final answers?"
  },
  {
    key: "varia-transcript-fatigue",
    type: "DESIGN-FRICTION",
    author: "Varia",
    insight: "Varia worried that busy faculty mentors would ignore raw developer conversation transcripts due to time constraints, leaving the logs completely unread.",
    example: "Instead of publishing raw transcripts, Varia resolved this by steering the agent to design a synthesis overview highlighting key decisions and trade-offs rather than long conversation files.",
    metacognitive_pattern: "Reviewer Fatigue (dense raw logs prevent mentors from offering feedback).",
    socratic_pivot: "1. Are you expecting reviewers to read raw user transcripts or logs? How can you extract and summarize key decision points for them?\n2. What visual highlights can you use to draw a reviewer's attention to critical pivot moments?"
  },
  {
    key: "varia-literature-scarcity",
    type: "SCOPING",
    author: "Varia",
    insight: "Varia struggled to position her research approach in the literature, worrying that reviewers would reject her design as too similar to existing study tools.",
    example: "Instead of framing the project as a standard study tool, Varia prompted the agent to position the paper around a new theoretical lens: capturing user friction signals automatically to generate cohort-wide templates.",
    metacognitive_pattern: "Weak Theoretical Framing (failing to distinguish a project from existing work in the field).",
    socratic_pivot: "1. Is your project framed as a generic tool? What unique theoretical lens or data capture mechanism distinguishes it from existing solutions?\n2. How can you position your evaluation study to highlight this core differentiation?"
  },
  {
    key: "alexis-scaffolding-intangibility",
    type: "THEORETICAL",
    author: "Alexis",
    insight: "Alexis struggled to visualize what 'contextual runtime scaffolding' (interactive guide popups) looked like in practice compared to basic static text tutorials.",
    example: "Instead of accepting abstract terms, Alexis forced the agent to define concrete layouts, steering it to design specific layout components and query widgets.",
    metacognitive_pattern: "Abstract Design Vagueness (relying on buzzwords instead of concrete layouts).",
    socratic_pivot: "1. Are you using abstract terms in your plan? How can you force your agent to define the exact layout, triggers, and state variables?\n2. What concrete interface widgets can represent your abstract concepts?"
  },
  {
    key: "alexis-compliance-gaming",
    type: "DESIGN-FRICTION",
    author: "Alexis",
    insight: "Alexis was concerned that forcing developers to write reflections before saving files would lead to compliance gaming (users typing gibberish or fake answers just to bypass the system gating blocks).",
    example: "Instead of using unverified text boxes, Alexis co-designed an automated parser that analyzes reflection relevance and filters out low-effort entries.",
    metacognitive_pattern: "Compliance Gaming (users writing fake entries to bypass mandatory gates).",
    socratic_pivot: "1. Does your design force users to complete tasks to unlock features? How can you validate the quality of their input without creating frustrating barriers?\n2. How can you align the user's natural goals with the reflective tasks you want them to perform?"
  },
  {
    key: "alexis-theory-disconnect",
    type: "THEORETICAL",
    author: "Alexis",
    insight: "Alexis struggled to map abstract academic concepts (like Double-Loop Learning, where users reflect on and change their underlying rules) into concrete software features.",
    example: "Instead of relying on theoretical abstracts, Alexis prompted the agent to translate Double-Loop Learning into template-update loops (where user struggles automatically update project starter files).",
    metacognitive_pattern: "Theory-Feature Disconnect (abstract concepts failing to manifest as concrete system behaviors).",
    socratic_pivot: "1. What academic theory grounds your project? Can you translate its core terms into concrete user actions or data loops?\n2. What software features act as the direct mechanism for your theory?"
  },
  {
    key: "alexis-peer-sync-friction",
    type: "TECHNICAL",
    author: "Alexis",
    insight: "Alexis noticed that developers waste hours asking teammates on Slack or Discord to help them resolve recurring agent-steering errors or setup bugs.",
    example: "Instead of relying on manual peer questioning, Alexis guided the agent to design a command-line tool that automatically logs and indexes successful steering prompts.",
    metacognitive_pattern: "Fragmented Knowledge Sharing (wasting time asking peers for repetitive technical fixes).",
    socratic_pivot: "1. Do your users solve similar problems in isolation? How can you automatically capture and centralize their solutions?\n2. How can you make searching this shared knowledge base faster than asking a peer directly?"
  },
  {
    key: "alexis-log-reading-fatigue",
    type: "DESIGN-FRICTION",
    author: "Alexis",
    insight: "Alexis was concerned that developers looking for quick solutions would refuse to read long, 4-hour raw conversation logs of peer debugging sessions.",
    example: "Instead of displaying raw transcripts, Alexis steered the agent to design collapsible chat timelines and automatically highlight key pivot moments where the fix occurred.",
    metacognitive_pattern: "Information Fatigue (raw historical logs are too dense to be useful).",
    socratic_pivot: "1. Does your interface display raw developer history? How can you filter out the noise and highlight only the key decisions or resolutions?\n2. How can you visualize a long timeline of events in a scannable format?"
  },
  {
    key: "alexis-error-isolation",
    type: "TECHNICAL",
    author: "Alexis",
    insight: "Alexis worried that different teams have completely isolated codebases and tasks, making a shared registry of peer struggles useless because their problems would never overlap.",
    example: "Instead of building a complex database immediately, Alexis structured the first study as a retrospective evaluation to audit historical chat logs for actual overlapping patterns.",
    metacognitive_pattern: "Premature Automation (building complex sync engines before verifying that user needs actually overlap).",
    socratic_pivot: "1. Are you building complex software systems based on unverified assumptions? How can you design a manual or retrospective study to validate the need first?\n2. What manual checks can establish a baseline for your software's value?"
  },
  {
    key: "alexis-interface-ambiguity",
    type: "DESIGN-FRICTION",
    author: "Alexis",
    insight: "Alexis was confused about the tool's interface format, debating whether it should operate as a command-line tool, a code editor extension, or a standalone website.",
    example: "Instead of choosing a single format, Alexis split the interface: a command-line utility for quick background logging and a code editor sidebar widget for interactive chat.",
    metacognitive_pattern: "Monolithic Interface Bias (trying to force all system roles into a single interface format).",
    socratic_pivot: "1. Are you trying to force your entire system into one interface format? How can you distribute features across different tools (CLI, web, IDE extension) to match user workflows?\n2. Which interface format is least disruptive for each specific user action?"
  },
  {
    key: "alexis-log-scale-overload",
    type: "DESIGN-FRICTION",
    author: "Alexis",
    insight: "Alexis was concerned that if many developers hit the same roadblock, displaying all their individual logs would cause search overload and make it hard to find the best fix.",
    example: "Instead of listing all logs sequentially, Alexis guided the agent to design similarity grouping and rating filters to surface the most helpful fixes first.",
    metacognitive_pattern: "Log Scale Overload (popular solutions cluttering search results).",
    socratic_pivot: "1. How does your search results layout scale when the database gets hundreds of entries? How can you group duplicate or similar entries?\n2. What rating or ranking system can surface the highest-quality solutions first?"
  },
  {
    key: "iris-inclusivity-scoping",
    type: "SCOPING",
    author: "Iris",
    insight: "Iris wanted her validation study to support complex, open-source repositories to remain inclusive of all developers, but the agent warned this would cause massive scope creep.",
    example: "Instead of supporting arbitrary repositories, Iris restricted the evaluation scope strictly to the lab's standard database curriculum codebases.",
    metacognitive_pattern: "Inclusivity Scope Creep (expanding product requirements to satisfy edge cases, delaying the MVP).",
    socratic_pivot: "1. Are you expanding your product's scope to be inclusive of all potential users? What core user group can you focus on to validate your main hypothesis first?\n2. What features can you explicitly defer to a later release?"
  },
  {
    key: "iris-fading-scaffolding-turnoff",
    type: "DESIGN-FRICTION",
    author: "Iris",
    insight: "Iris warned that blunt Socratic messages from the agent (like refusing to write code) would frustrate developers under tight deadlines and cause them to abandon the tool.",
    example: "Instead of displaying hard refusal messages, Iris guided the agent to co-design diagnostic questions that help the user write their own code.",
    metacognitive_pattern: "Scaffolding Frustration (refusals in the name of learning blocking user productivity).",
    socratic_pivot: "1. Does your educational tool block user progress when they get stuck? How can you transition from strict refusals to helpful hints?\n2. What diagnostic prompts can guide the user toward the solution without writing it for them?"
  },
  {
    key: "iris-hypothesis-dilution",
    type: "VALIDATION",
    author: "Iris",
    insight: "Iris's advisor wanted her validation study to evaluate both individual student retention and cohort-wide collaboration at the same time, diluting the study's focus.",
    example: "Instead of testing both in a single study, Iris split the evaluation: she focused on individual code retention metrics first, deferring cohort dashboard audits.",
    metacognitive_pattern: "Hypothesis Dilution (trying to evaluate too many research questions in a single study).",
    socratic_pivot: "1. Are you trying to prove multiple research claims in one evaluation? What is the single most critical hypothesis you must isolate and test first?\n2. What proxy metrics or control groups can validate that specific hypothesis?"
  },
  {
    key: "aubrey-scaffolding-scoping",
    type: "SCOPING",
    author: "Aubrey",
    insight: "The agent attempted to scope a 'practice coding mode' into Aubrey's product thesis, which Aubrey rejected as unrelated to her core focus on walkthrough guides.",
    example: "Instead of including practice mode, Aubrey pushed back and limited the scope strictly to conversational walkthrough guidance.",
    metacognitive_pattern: "Thesis Bloat (allowing suggestions to drag the project scope outside the core thesis boundaries).",
    socratic_pivot: "1. Are you allowing agent suggestions or feature ideas to expand your project's core thesis? How can you define strict boundaries for what is in-scope?\n2. Does this new feature directly serve your core research question?"
  },
  {
    key: "rachel-participation-disparity",
    type: "DESIGN-FRICTION",
    author: "Rachel",
    insight: "Rachel was concerned that confident, outspoken students dominated sync alignment meetings, silencing quiet or junior team members during brainstorms.",
    example: "Instead of relying on open-ended group sync debates, Rachel guided the agent to design templates that summarize individual ideas into neutral, aggregated overviews before group meetings.",
    metacognitive_pattern: "Groupthink Domination (vocal users silencing quieter cohort members during sync collaboration).",
    socratic_pivot: "1. Does your collaboration system rely on live, open-ended meetings? How can you capture individual ideas asynchronously first to ensure equal participation?\n2. How can you aggregate feedback to focus the team on concepts rather than who proposed them?"
  },
  {
    key: "rachel-anonymity-dilemma",
    type: "DESIGN-FRICTION",
    author: "Rachel",
    insight: "Rachel struggled to attribute ideas on a shared team template without exposing raw conversation histories, which would violate student privacy.",
    example: "Instead of exposing raw logs, Rachel guided the agent to display general support tags (tracking overall options selected) while keeping individual transcripts private.",
    metacognitive_pattern: "Privacy-Collaboration Mismatch (disclosing raw personal logs to enable group coordination).",
    socratic_pivot: "1. Does your collaborative dashboard require exposing private user text logs? How can you aggregate or abstract the data to preserve privacy?\n2. What is the minimum necessary coordinate signal you need to display?"
  }
];

async function seed() {
  console.log(`Seeding ${CASES.length} historical case studies into Supabase learnings table...\n`);
  
  const projectUuid = process.env.PROJECT_UUID || "00000000-0000-0000-0000-000000000000";
  const conversationId = "00000000-0000-0000-0000-000000000000"; // Placeholder dummy UUID
  
  for (let i = 0; i < CASES.length; i++) {
    const item = CASES[i];
    console.log(`[${i + 1}/${CASES.length}] Seeding [${item.type}] ${item.key}...`);
    
    try {
      const response = await fetch(`${supabaseUrl}/rest/v1/learnings`, {
        method: "POST",
        headers: {
          "apikey": supabaseKey,
          "Authorization": `Bearer ${supabaseKey}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          project_uuid: projectUuid,
          type: item.type,
          skill: "skill-weave",
          key: item.key,
          insight: item.insight,
          example: item.example,
          metacognitive_pattern: item.metacognitive_pattern,
          socratic_pivot: item.socratic_pivot,
          author: item.author,
          conversation_id: conversationId,
          source: "USER",
          model: "gemini-2.0-pro"
        })
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
