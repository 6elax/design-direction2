# SkillWeave System Thesis

<!-- Target User & Need, Product & Value Proposition, and Unique Differentiation. Owned by /define-product -->

<!-- This section defines who the system is for, what it does, and why it needs to exist. It covers the target user, the core problem, the solution, and the unique value proposition. -->

## Target User & Need

### 1. Student Builder / Peer Learner (Primary)
- **Target User:** A student developer, designer, or researcher in a project team (like Tech4Good) who uses agentic AI workflows (e.g. Cursor, Antigravity) to complete project milestones. They work within a shared methodology but often solve problems in isolation, unaware that other teams are facing the exact same challenges.
- **Core Need:** A way to learn *how* to build effectively with agents and resolve immediate blockers on their own, drawing on the collective intelligence and successful workflows of their community, without being spoon-fed direct code solutions or having to manually audit other teams' messy logs.
- **Insight:** Simply giving builders the answer (spoon-feeding) prevents them from developing the mental models needed to steer AI agents. By combining automated transcript analysis with structured, user-written reflections, we can turn raw logs into a peer-learning network that forces builders to actively think about their process.
- **Status Quo:** Builders work in silos. When stuck, they ask peers on Slack ("How do I get the agent to do X?"), read long raw markdown logs, or spend hours guessing. This is slow, repetitive, and misses the opportunity for the community to grow its collective knowledge.
- **Demand Evidence:**
  - *Observed:* Students asking in Slack for the exact prompts used by successful teams; senior team members manually pointing juniors to specific chat transcripts in git histories; builders maintaining personal notes on "how to steer this agent."
  - *Hypothesized:* Builders will take 2 minutes to write a post-session reflection if they get access to a repository of peer success patterns that help them solve their immediate blockers.
- **Value Separation (Not Just for Coordinators):** It is a common failure mode to assume this system exists solely to reduce the coordinator's audit workload. For the builder, the system provides immediate self-help leverage:
  - *Immediate Unblocking:* Builders get unstuck in minutes by accessing a peer's recent solution, instead of waiting hours for a coordinator or TA.
  - *Cognitive Growth:* They develop meta-skills in agent steering, planning, and debugging, which makes them highly autonomous builders rather than passive code-acceptors.
  - *Community Connection:* They see what other teams are building and how they are prompting, fostering peer-to-peer inspiration and collaboration.
- **Must-Have User:** The student builder who is eager to contribute but feels they are "fighting the agent" (e.g., getting stuck in infinite loops of agent error corrections or template rewrites).
  - *Why them specifically:* They have the highest friction and are most desperate for a system that shows them the steering and planning patterns that successful peers used to overcome the exact same steps.
  - *Access:* Onboarded directly through the research lab's weekly team meetings and project channels.

### 2. Lab Coordinator / Workflow Designer (Secondary)
- **Target User:** A research director or lab manager who designs the shared process skills and templates (like `/define-product` or `/feature-design-plan`) used by all teams.
- **Core Need:** Data-driven visibility into where the shared workflow instructions or templates are causing friction, and a way to improve these processes for the entire community.
- **Insight:** Process templates are usually designed top-down and updated only after visible team failures. Aggregating runtime errors, template edits, and builder reflections lets us diagnose process friction points in real-time, driving bottom-up updates to the templates.
- **Status Quo:** Reading repos manually at milestones, running retro meetings, or guessing why a team struggled. This is slow, subjective, and misses the micro-struggles of agent steering.
- **Demand Evidence:**
  - *Observed:* Lab coordinators spending hours auditing student repositories and transcripts before milestone reviews to figure out why a team fell behind.
  - *Hypothesized:* Coordinators will use an aggregated dashboard to identify which specific sections of their templates need rewrite or better instruction.
- **Must-Have Customer:** A lab director overseeing 5+ concurrent project teams using a shared set of workflow templates.
  - *Why them specifically:* They manage a high cognitive load trying to keep all teams aligned and have the authority to implement the system lab-wide.
  - *Access:* Lived access within our own research lab/workspace.

## Product & Value Proposition
- **One-Liner:** "SkillWeave aggregates AI agent session outputs across project teams to generate builder-directed reflections and automate community-wide workflow improvements."
- **Core Concept:** We are making the bet that the key to developer velocity in the AI era is learning how to steer and plan with agents. This cannot be taught by feeding answers; it requires a reflective system that forces builders to diagnose their own process while drawing from peer success patterns.
- **Core Experience:**
  1. **Task Execution:** A student builder carries out a task using a local agent guided by a shared skill template.
  2. **Active Reflection Trigger (Confirmation Card & Summary Preview):** When a struggle is detected, a persistent popup confirmation card appears in the chat area and waits for the user. Once the user resolves the roadblock and clicks "Resolved," the agent outputs a transparent summary preview in the chat panel describing exactly what transcript data, modified files, and struggle details it is preparing to log. The system then prompts the user for their quick, structured reflection (e.g., "What did the agent do unexpectedly?", "How did you steer it back?") before committing.
  3. **Sanitized Upload & Transcript Streamlining:** The builder runs `weave submit`, which sanitizes the logs (removing credentials/secrets) and processes the transcript:
     - *Key Pivot Extraction:* An LLM-based parser extracts the core error, the root cause, and the specific prompt/steering moment that successfully unblocked the team (the "Pivot Moment").
     - *Collapsible Timeline:* The system collapses redundant chat exchanges, displaying only the TL;DR header and expanding the key steering turns by default. Builders can expand the full raw chat only if they need low-level code details.
  4. **Aggregated Dashboard & Cohort-Wide Feedback:** 
     - *Template Heatmaps (Friction Dashboard):* A visual dashboard showing where teams spend the most time or make the most edits (e.g. showing that 80% of teams struggle on Section 3 of the product thesis template).
     - *Emergent Prompt Cookbook (Shared Playbook):* When a team successfully completes a difficult task with zero errors or very fast execution, the system automatically extracts their prompt sequences and templates as "featured recipes" for the whole community.
     - *Cross-Team Synergy Matches:* The system parses files and transcripts to find overlaps. If Team A is working on SQLite schema changes and Team B did the same yesterday, the system alerts both: *"Team A, sync with Team B on SQLite schema changes — they solved a similar issue yesterday."*
     - *Collaborative Peer Review Loops:* The system prompts teams about to start a task to review another team's recently logged reflection for that same task, turning logs into interactive learning artifacts.
  5. **Helper Agent Intervention & Progressive Knowledge Aggregation:** 
     - When a builder gets stuck, they invoke a local helper agent.
     - *Information Sources:* The helper agent reads the community's repository of sanitized transcripts, the official skill templates, the logged builder reflections, and common error glossaries.
     - *Progressive Aggregation (Mesh vs. Baseline):* 
       - *Baseline Case Study:* If an error has occurred only once or twice, the agent points the user directly to the streamlined peer transcript of that first encounter.
       - *Refinement Variants:* As other teams encounter and resolve the same error under different conditions (e.g., React SSR vs. Angular context), their solutions are appended as alternative tabs/variants under that error code.
       - *Meshed Wiki Synthesis:* Once the error code has occurred $N \geq 3$ times, the system runs an offline synthesis script to generate a single consolidated **Troubleshooting Wiki Page**. This page meshes all encounters into a unified guide highlighting common root causes and standard resolution checklists, with links back to individual team case studies.
     - *First-Time Error Fallback (Cold Start):* If an error has never been encountered before in the community database, the helper agent shifts to *Diagnostic Research Mode*. It performs web/documentation searches, guides the builder in constructing a step-by-step debugging plan, and documents their resolution as the first peer recipe for that error.
  6. **Process Improvement Suggestion (Double-Loop Adaptation):** The system flags friction hotspots to the lab coordinator and proposes edits (pull requests) to the global skill templates. Once merged, the shared skills/instructions in the repo are updated, immediately changing the behavior of the local agent skills for all subsequent sessions.

### System Integration & Boundaries
- **Core Framework (Background Skill Agent):** SkillWeave runs purely as a background skill agent inside the human-AI chat conversation window (similar to how reflections and verification agents operate). It passively monitors the chat dialogue log and telemetry feeds, automatically querying the organization's peer repository when struggles are detected.
- **Alternative Integration Mediums (Touchpoints):**
  - *Chat Welcome Banner:* When starting a new chat session with the agent, a badge header states `🛡️ SkillWeave companion active` to confirm tracking is running.
  - *Inline Suggestion Card (Popup above Chat Input):* Intercepts messages in the background. If a similarity match is found in the peer database, the skill displays a styled suggestion popup directly above the chat text input area (just like a permission prompt). It reads:
    `💡 Peer Match Found (94% confidence) — Teammate resolved a similar Firestore permission error. [🔍 Open Peer Workspace Pane] [Dismiss]`
  - *Workspace Split-Pane View:* Clicking the button opens a read-only split-pane artifact on the right side of the chat interface (`skillweave://peers/causeway/case-study.md`). In standard desktop app environments (like Antigravity 2.0) where custom UI overlays cannot be dynamically compiled, the suggestion card is written as a System Artifact file (`peer_suggestion_card.md`) inside the conversation artifacts folder. Antigravity 2.0 automatically opens and renders this document inside the right-side **Artifacts panel** (HTML Auxiliary Pane). Clicking the `[🔍 Open Peer Workspace Pane]` link inside this suggestion card redirects the Artifacts panel to render the peer case study, providing a side-by-side split-view without changing the client UI shell.
  - *Team Wiki Dashboard (For General Exploration):* A static web index dashboard allows non-technical team members to search and read peer prompt playbooks manually.
- **Synchronization & Data Boundaries:** 
  - *Git Repo Sync (Local-First):* For self-hosted and repository-centric teams, sanitized logs are written to a local project folder (`.weave/` or `.t4g/`) inside the workspace repository. Teammates synchronize logs peer-to-peer using standard `git push/pull` commands, ensuring zero external network dependency.
  - *Workspace SSO Sync (Cloud-Gated):* For enterprise and cloud-hosted teams, logs are preserved in a private Firebase/Supabase database. Access is strictly bounded by the organization's Single Sign-On (SSO) email domain, preventing any public exposure of code assets or team IP.
  - *Local DB Cache & Embedding Index:* The background skill agent queries a local database cache (SQLite) to dynamically search peer transcripts. A background process runs a lightweight local embedding model to compute semantic similarity vectors, ensuring rapid match retrieval directly in the client session without constant network round-trips.
  - *Telemetry Buffering & Privacy Gating:* To prevent database bloat and protect developer privacy, telemetry streams (chat dialogue logs, workspace file deltas shared in chat) are buffered in volatile local memory. Once the user clicks "Resolved" on the persistent confirmation card, the agent prints a brief summary preview of the logged data in the chat. The data is only flushed and committed to the SQLite database after the user reviews the preview and submits their 2-sentence reflection.

- **Value Proposition:**
  - *Narrative:* For builders, SkillWeave provides diagnostic guidance that teaches them how to steer agents effectively using peer patterns. For coordinators, it turns process design into a data-driven feedback loop.
  - *Testable Hypothesis:* Builders using the reflective helper agent will show a 40% reduction in repeated steering errors and require 30% less direct intervention from coordinators.
- **Aha Moments:**
  - *Student Builder (first aha):* Getting stuck, invoking the helper agent, and being guided to a peer's reflection that explains the exact mental model shift needed to prompt the agent correctly.
  - *Student Builder (sustained aha):* Recognizing that their own ability to plan tasks and debug agent loops has improved, as evidenced by their dashboard metrics showing fewer "stuck cycles."
  - *Lab Coordinator (first aha):* Looking at the dashboard heatmap and realizing that a single vague sentence in the planning template was responsible for 10 hours of wasted team effort across the cohort.
- **Narrowest Wedge (MVP):**
  - *Included:*
    - A background agent hook that watches the chat conversation history and triggers a 3-question popup reflection above the chat text box when the user indicates their task is successfully resolved (passing the NLU confirmation gate).
    - A parser that indexes local transcripts and reflections into a shared local directory.
    - A static, markdown-based "Peer Learning Index" (linking to sanitized transcripts and reflections of other teams).
    - A basic "Friction & Error Report" highlighting the template sections with the most user edits.
    - A basic local Helper Agent prompt template that reads this index to guide the user when stuck.
  - *Excluded (future expansion):* Fully automated PR generation, cloud-hosted multi-tenant web application, real-time Slack/Discord bot integration.
- **System in Action (User Scenarios):**
  - *Scenario A (Student Builder & Helper Agent - with Cold Start):* A developer on Team "SmartScheduler" is implementing Firestore rules in their conversation. The agent notices in the chat log that rules fail unit tests with a permission error. The background SkillWeave agent intercepts the error and displays an inline suggestion card popup directly above the chat input, containing a link to TaskBoard's sanitized transcript and a Socratic question checking their query parameters. If the error is brand new to the lab, the helper agent enters *Diagnostic Research Mode*: it queries Firestore security rules docs, suggests a debugging print statement to isolate the mismatch, and once resolved, saves the developer's fix as a new reference for the community.
  - *Scenario B (The Reflection & Agent Update Loop):* A designer completes the `/define-brand` skill to create `DESIGN.md`. Upon completion, the background skill agent triggers a submission popup above the chat input box. The agent blocks the workspace sync and prompts: *"1. What was the most difficult design choice you had to steer? 2. What prompt did the agent misunderstand?"* The designer enters: *"We struggled to define brand voice because the template was too startup-focused. I had to prompt the agent to use 'cooperative learning' aesthetics instead."* The system sanitizes credentials/secrets and uploads the log, file deltas, and reflection. The next week, the coordinator merges a PR generated from this feedback, modifying `brand-voice.md`. When the designer (or any other team) starts their next branding task, the local agent reads the updated instructions, changing its default prompting style to include cooperative aesthetics.
  - *Scenario C (Coordinator Template Optimization):* The lab lead opens their SkillWeave dashboard at the end of week 3. They view the heatmap for the `/define-brand` template. The section "Visual Voice / Brand Personality" glows red (indicating high time-on-task and multiple manual user edits). The dashboard aggregates reflections: *"5/6 teams reported that default brand voice options were too corporate/startup-oriented."* The dashboard proposes a pull request to `brand-voice.md` to add community-led and research-centric aesthetic examples, resolving the friction for the next cohort.
  - *Scenario D (Cross-Team Sprint Sync):* Team "SmartScheduler" (3 builders, 1 designer) is in the middle of a sprint building a calendar integration. During their weekly retrospective, the team lead notices that they spent 40% of their agent interaction time debugging a React SSR hydration error. They open the logged reflections, identify the SSR configuration mistake, and compile a quick "React-Hydration-Protocol" recipe in their SkillWeave dashboard. Because the system parses files and reflections across teams, it flags that Team "EventTracker" in the same organization is scheduled to implement a similar calendar component next week. SkillWeave proactively alerts EventTracker: *"Team SmartScheduler spent 4 hours resolving React SSR hydration errors. Review their prompt cookbook [Link] before starting."* The EventTracker team reads the recipe before invoking their local agent, avoiding the 4-hour pitfall entirely.
  - *Scenario E (Non-Coding Figma UI Spacing & Grid Alignment):*
    - **The Problem:** A designer uses a Figma generative design agent to lay out dashboard cards. The agent keeps generating overlapping elements and hardcoded pixel sizes because it doesn't understand Figma's Auto-Layout constraints.
    - **What the User Sees:** Overlapping, non-responsive cards in the Figma frame with parameters like `width: 382px; position: absolute; left: 14px;`.
    - **What the User Asks:** *"Fix the layout of these cards so they are spaced evenly and align correctly in the dashboard frame."* (The Figma agent shifts them slightly but maintains absolute positions, resulting in a misaligned layout on screen resize).
    - **What SkillWeave Outputs (Figma Sidebar):**
      The sidebar detects multiple consecutive card repositioning loops on the frame and flashes a Peer Match:
      > 💡 **Peer Match:** *Team C resolved Figma absolute-positioning loops in Step 3 yesterday.*
      The designer clicks "View Peer Hint":
      > **[SkillWeave Helper]** Team C resolved this in Figma design syncs. 
      > *Pivot Prompt:* "Group these cards in a parent frame with Auto-Layout set to horizontal wrap, and change all children width to 'Fill Container' rather than fixed pixels."
      > *Diagnostic Questions:* 
      > 1. Are your cards grouped into a parent Auto-Layout frame?
      > 2. Have you explicitly told the agent to use 'Fill Container' for relative child sizes?
    - **How it helps the user get unstuck:** The designer prompts the Figma agent: *"Wrap the three dashboard cards in a parent frame. Enable horizontal Auto-Layout with wrap, and set all card widths to fill the parent container."* The agent correctly groups them, producing a responsive grid.
  - *Scenario F (Non-Coding Academic Paper Citation Halucinations):*
    - **The Problem:** A researcher uses a literature review agent to compile a summary of a PDF paper. The agent hallucinates citations (e.g. citing "Bernstein et al., 2024" for claims not present in the PDF) due to relying on its pre-trained weights.
    - **What the User Sees:** An agent-generated summary containing 3 citation keys that do not exist in the PDF paper.
    - **What the User Asks:** *"Are you sure those citations are correct? Double check the PDF references list and fix them."* (The agent apologizes and replaces them with another set of hallucinated citations).
    - **What SkillWeave Outputs (Editor Sidebar):**
      The sidebar detects the "citation correction" repair pattern in the log and prints:
      > 💡 **Peer Match:** *Teammate John resolved citation hallucinations summarizing CHI papers.*
      The researcher clicks "View Peer Hint":
      > **[SkillWeave Helper]** John resolved this in Literature Reviews.
      > *Pivot Prompt:* "Do not cite any papers from your pre-trained weights. Only extract inline bracketed footnotes ([^authorYear]) matching the exact bibliography items in the references list of this PDF."
      > *Diagnostic Questions:*
      > 1. Have you explicitly told the agent to restrict citations strictly to the PDF's references bibliography?
      > 2. Are you using footnote citation keys?
    - **How it helps the user get unstuck:** The researcher prompts the agent: *"Rewrite the paper summary. Do not use any external knowledge or pre-trained citation weights. Restrict all citations strictly to the footnote markers matching the references bibliography at the end of the PDF."* The agent produces a clean, hallucination-free summary.
  - *Scenario G (Collaborative Process Positionality Statement Gating):*
    - **The Problem:** A student builder is executing the `/define-validation` process. The agent prompts them to draft their Positionality Statement. The student writes a single low-effort sentence: *"I am an undergraduate student."* The background skill agent blocks the validation gate in the chat because the statement lacks critical depth.
    - **What the User Sees:** The chat window blocks the submission with an alert card:
      `[SkillWeave] Validation blocked: Positionality statement lacks reflection on gender, SES, and authority perceptions. Re-enter:`
    - **What the User Asks the Helper Agent:** *"What am I supposed to write here? Give me an example of what is expected."*
    - **What SkillWeave Outputs (Inline Popup / Sidebar):**
      The background agent displays a peer template match in the right-side split-pane:
      > **[SkillWeave Helper]** Team B successfully passed this validation gate on Step 3 yesterday.
      > *Sanitized Peer Reference:* "As a researcher from [University X] with a background in [Computer Science], I recognize my position as an authority figure to students..."
      > *Diagnostic Questions:*
      > 1. Have you addressed how your affiliation with this university research lab might affect student participant responses?
      > 2. Have you reflected on your technical background and how it shapes your view of the users?
    - **How it helps the user get unstuck:** The builder reads the peer outline, understands the expected dimensions of a Positionality statement, and writes a robust 3-paragraph statement reflecting on their student status, technical privilege, and authority perceptions. The background agent accepts the validation once the student expands their text.


## Unique Differentiation
- **Structural Advantages:**
  - *Founder Advantage:* Direct access to student teams in the Tech4Good lab using structured Antigravity skills, providing a natural testbed and immediate feedback.
  - *Process-Driven Focus:* By targeting structured, file-based skill workflows (like Antigravity or Cursor rules), we can parse and score process compliance in a way that generic chat tools cannot.
  - *Network Effects:* The system gets smarter as more teams contribute their reflections and logs, building a rich repository of local organizational knowledge.
- **Hard Tradeoffs:**
  - *Not an Autocomplete/Generation Tool:* We choose NOT to write code or prompts for the builder. We focus strictly on guiding the builder's own steering and planning processes.
  - *Community First, Single-Player Second:* The system is designed for cohort-based environments sharing a common methodology, not for isolated developers.
- **Sustainability & Moat:**
  - *Contextual Integration:* The helper agent's judgment is grounded in the lab's proprietary templates, team guidelines, and peer logs. A generic coding model cannot duplicate this without access to the lab's private, sanitized transcript repository.
- **Future-Fit Thesis:** In 3-5 years, standard coding tasks will be fully automated. The core skill of a developer will be workflow planning and agent steering. SkillWeave's reflective learning model prepares developers for this future.
- **Pricing Model:** Open-source core for educational and research labs, with an enterprise SaaS tier for engineering organizations seeking to capture and scale custom AI-agent processes.

## Appendix: Product Definition

### Target User & Need
- 🔵 **Strong Stance (Pivot to System & Metacognitive Learning):** The user rejected the framing of a commercial "product" in favor of a "system" designed for community/lab learning. They emphasized that the system must not spoon-feed answers to the builder, but must instead force the builder to learn and think (e.g. via active reflections). This was fully incorporated into the Primary User's core need and the core experience design.
- 🔵 **Strong Stance (Collaborative Focus):** The user pushed to focus the system heavily on group collaboration and community learning rather than just individual benchmarking. They requested additional forms of feedback beyond simple reflections and template improvements. This led to introducing the Emergent Prompt Cookbook, Cross-Team Synergy Matchmaking, and Collaborative Peer Review Loops.
- 🔵 **Strong Stance (Value for Builders):** The user questioned if the primary value of the tool was only making the coordinator's job easier. The agent pushed back, detailing the student builder's own incentives: immediate self-help unblocking (not waiting for TAs), developing high-value agent steering mastery, and cohort connection. This was structured in the new "Value Separation" field in the Primary User Need.
- ⏳ **Deferred Issues (Agent Instruction Compilation):** Revisit in validation phase how user feedback on agent behavior (e.g., brand-voice being too startup-focused) is translated into specific, syntactically correct modifications of the agent skill prompts.

### Product & Value Proposition

### Unique Differentiation
