# Document Evolution Log — SkillWeave Product Definition

<!-- A structured record of how product-thesis.md evolved through the planning session.
     Each cycle captures the interaction between human and AI that produced a change
     in the document. User input is always quoted verbatim.

     This file is built in two phases:
     - Phase 1 (during session): Cycle records are appended after each critique-respond-update turn.
     - Phase 2 (end of session): Summary Statistics and Evolution by Section are generated. -->

---

## Cycle 1: Initial Draft

### User Input
> I have this idea: something related to peer/community learning + agent skills.
> across our project teams who are using the same set of skills or the same processes for work/planning/learning, how can we support the larger community in learning from each other in how they are using the skills, in improving the skills
> People individually (or in teams) work with the agent skills to carry out their projects, 
> There is some kind of “output” generated from the process (filled in template, chat log, other reflections generated on the way)
> This output is aggregated to generate: 1) reflections for each person in how they are using the skills compared to others, 2) improvements in the skills,
> Related resources
> https://paxel.ycombinator.com

### AI Draft Summary
The initial draft proposes **SkillWeave**, a platform designed for communities/labs (like Tech4Good) where multiple project teams use shared agent skills. The system aggregates local session outputs (like chat logs, template modifications, and reflections) via a CLI tool. It generates:
1. A **Builder Dashboard** for individuals to view their builder profile, benchmarks, and contextual tips linked to successful peer transcripts.
2. A **Skill Health Dashboard** for lab coordinators/skill authors to pinpoint template parts causing the most friction and receive automated pull requests suggesting instruction improvements.
It defines the narrowest wedge (MVP) focused on parsing local files (`product-thesis-evolution.md`, `transcript.jsonl`) and building a static builder report and skill friction report.

### What the AI added beyond what the user said
- **Product Name:** Coined "SkillWeave" as the product name.
- **User Roles:** Separated the users into two distinct profiles: Student Builders (Primary User) and Lab Coordinators / Skill Authors (Secondary User/Customer), clarifying the specific value proposition and need for each.
- **Workflow & CLI:** Proposed the exact workflow of running a CLI client (`weave submit`) to sanitize and upload logs, making the system architecture tangible.
- **Aha Moments:** Structured specific "Aha Moments" for both student builders (seeing peer solutions linked) and coordinators (viewing template friction heatmaps).
- **Narrowest Wedge (MVP) Definition:** Scoped the MVP strictly to local file parsing and static markdown/HTML reports, deferring multi-tenant cloud features.
- **Moat & Unique Differentiation:** Framed the moat around integration with proprietary team-specific agent workflows (like Antigravity skills), explaining why general tools like Cursor or Git analytics cannot easily copy this.
- **Founder & Acquisition Advantage:** Lived access within our own research lab/workspace as the primary distribution channel and feedback loop.

---

## Cycle 2: Pivot to Learning System & Metacognitive Reflection

### AI Critique
1. 🚨 **SOLUTION-IN-SEARCH-OF-NEED Trap**: Assuming student builders care about self-reflecting on agentic steering metrics instead of just getting their tasks done.
2. 🚨 **Surveillance Friction**: Resistance to sharing transcripts due to social vulnerability and feeling monitored.
3. ⚠️ **Weak Demand Evidence**: Confusing sharing configuration files with sharing raw transcripts.
4. ⚠️ **Must-Have User Alignment**: Brand-new students might be too insecure to share, suggesting senior mentors might be a better target.

### User Response
> how about instead of trying to create a product specifically, come up with a system for how this idea will work out?
> i like this idea: Builders work in their own repositories. When they get stuck or want to improve, they must manually ask peers on Slack/Discord ("How did you get the agent to do X?"), read through long raw Markdown logs/chat histories of other teams, or simply guess how to improve. This costs them significant time, slows down their project velocity, and leads to repeating the same mistakes.
> continue in that direction! But ensure that it's not only the agent feeding the user all the information, the user must be able to also learn and think, possibly doing these by reflecting, or any other method.
>
> I also want to know, for number 2, demand evidence, what does an "aggregated dashboard" look like? and if there exists an agent to help a user with problems instead of lab leads looking at everything, what will be the agent's source of information and judgment?

### Document Delta
| Field | Before | After |
|---|---|---|
| Document Title | `# SkillWeave Product Thesis` | `# SkillWeave System Thesis` |
| Primary User Need | Benchmarking and self-reflecting on steering metrics | Learning how to build with agents, unblocking blockers, and active thinking without spoon-feeding |
| Insight | Ephemeral logs contain behavioral patterns for community benchmarks | Spoon-feeding answers prevents builder mental models; combining automated logs with user-written reflections builds active learning |
| Core Experience | CLI logs upload, metrics analysis, builder profile, coordinator dashboards | Execution -> Active Reflection Trigger -> Sanitized Upload -> Aggregated Dashboard (Heatmaps/Friction Hotspots/Library) -> Helper Agent Intervention (guided diagnostics, peer references) -> Process Improvement suggestions |
| Tradeoffs | Not a generic developer analytics tool | Not an autocomplete or code generation tool; focuses on guiding steering and planning |

### What shifted
- **System Pivot:** Shifted from commercial product positioning to an educational community system.
- **Active Metacognitive Model:** Designed an active reflection trigger to prevent "spoon-feeding" and ensure the builder actively learns.
- **Helper Agent Architecture:** Defined the helper agent's information sources (sanitized logs, guidelines, reflections) and judgment heuristics (guided questions and peer references instead of direct code generation).
- **Dashboard Details:** Described the dashboard structure using template heatmaps, error hotspots, and peer transcript libraries.

---

## Cycle 3: Collaborative Cohort Learning & Feedback Types Expansion

### AI Critique/Query
1. ❓ **Feedback Expansion**: Asked the user if there are other forms of feedback or community loops that could be generated beyond individual benchmarking and template PRs.
2. ⚠️ **Group Learning Focus**: Explored how to shift the focus from individual profiling (surveillance) to collaborative, cohort-wide learning.

### User Response
> make sure to focus this idea on supporting group collaboration, or a way so that the entire group/community can learn.
>
> also, i mentioned the output is aggregated to generate: 1) reflections for each person in how they are using the skills compared to others, 2) improvements in the skills,
> but is there any other feedback that can be generated for the output?

### Document Delta
| Field | Before | After |
|---|---|---|
| Primary User Need | Individual learning from peer benchmarks without raw logs | Cohort-wide learning from collective intelligence to unblock each other and grow shared knowledge |
| Core Experience Step 4 | Aggregated Dashboard (heatmaps, errors, peer transcript list) | Aggregated Dashboard & Cohort-Wide Feedback: Heatmaps, Emergent Prompt Cookbook (cookbook recipes), Cross-Team Synergy Matches, and Collaborative Peer Review Loops |
| Appendix: Target User & Need | Pivot to System stance | Added Collaborative Focus stance detailing Cookbook, Synergy Matchmaking, and Peer Review Loops |

### What shifted
- **Collaboration Centricity:** Pivot from individual metrics-driven benchmarks to multi-team collaboration tools.
- **Emergent Prompt Cookbook:** Created a feedback loop that extracts highly successful prompt sequences to share across the cohort.
- **Cross-Team Synergy Matchmaking:** Designed a passive pairing mechanism that matches teams working on overlapping technical or design challenges.
- **Collaborative Peer Review loops:** Integrated cross-team reflection critiques into the pre-task workflow.

---

## Cycle 4: Concrete System Walkthrough & User Scenarios

### AI Critique/Query
1. ❓ **Scenario Request**: Clarified the user's request for concrete examples of the system's usage in daily practice.

### User Response
> can you give more examples of how this product will look like like when used?

### Document Delta
| Field | Before | After |
|---|---|---|
| Core Experience | CLI logs upload, metrics analysis, dashboards, peer review, and agent diagnostics | Added concrete User Walkthrough Scenarios detailing Scenario A (Helper Agent), Scenario B (Reflection Loop), and Scenario C (Coordinator Heatmaps) |

### What shifted
- **Tangible Scenarios:** Provided realistic, step-by-step walkthroughs of the runtime experience for builders, designers, and coordinators, moving from abstract mechanics to specific user actions (e.g. running `weave helper` or `weave submit`).
- **Pedagogical Alignment:** Showed how the metacognitive model operates by illustrating a diagnostic helper agent that avoids direct code generation and instead poses guiding questions.

---

## Cycle 5: Refinement of Scenarios, Double-Loop Learning, and Builder Value

### AI Critique/Query
1. ❓ **Cold Start handling**: What does the helper agent do if an error is completely new (Scenario A fallback)?
2. ❓ **Agent Adaptation**: What does the agent do with user feedback, and does the agent itself change (Scenario B loop)?
3. 🚨 **Value Proposition Alignment**: Questioned if the tool is only useful for reducing the coordinator's audit load.

### User Response
> for scenario a, what if no one else in the team has come across a similar issue before, i.e. this is the first time this error has been encountered. what might the agent/product do in this case?
> for scenario b, what will the agent do with the feedback/responses given by the designer? will anything change in the agent?
>
> for the target user and need section, is essentially the only use of this product for the lab coordinator so that it makes their life easier as they don't have to look through the bugs or errors themselves?

### Document Delta
| Field | Before | After |
|---|---|---|
| Primary User Need | Details on learning from peer benchmarks and unblocking | Added `Value Separation (Not Just for Coordinators)` detailing immediate builder self-help unblocking, steering mastery, and cohort connection |
| Core Experience Step 5 | Helper Agent Intervention (comparing state with peer transcripts) | Added *First-Time Error Fallback (Cold Start)* detailing *Diagnostic Research Mode* and first-time recipe creation |
| Core Experience Step 6 | Coordinator suggestions and PRs | Expanded to explain *Double-Loop Adaptation* (updating agent prompts in repo, changing local agent behavior for subsequent runs) |
| Scenario A | SmartScheduler permission error peer match | Added fallback for brand new errors: queries docs, suggests debugging prints, and logs resolution |
| Scenario B | Reflection upload of designer's prompt struggles | Added the update loop: coordinator merges PR modifying brand-voice.md, next local run reads updated rules, adapting default prompt aesthetics |
| Appendix | Pivot and Collaborative stances | Added `Value for Builders` stance and `Agent Instruction Compilation` deferred issue |

### What shifted
- **Cold Start Protocol:** Defined a fallback mechanism (Diagnostic Research Mode) that shifts from peer matchmaking to guided documentation research and knowledge creation.
- **Double-Loop Learning:** Explained how user reflections close the loop by automatically proposing PRs that modify agent system instructions, causing the agent itself to behave differently in future sessions.
- **Builder Incentives:** Articulated the direct personal benefits to the student builder (immediate unblocking, resume-building steering skills, peer community ties) to ensure the system is not perceived as mere surveillance or coordinator convenience.

---

## Cycle 6: Team Collaboration Walkthrough

### AI Critique/Query
1. ❓ **Team Usage request**: Clarified the user's request for an example of how a group or team within a larger organization collectively uses this tool.

### User Response
> can you just add one more example of how this tool may be used in a team setting, like how a team together uses this tool? (given a team in a larger organization)

### Document Delta
| Field | Before | After |
|---|---|---|
| Core Experience | Scenarios A, B, and C detailing builder, designer, and coordinator flows | Added Scenario D (Cross-Team Sprint Sync) detailing how a team retrospective identifies an SSR hydration error, compiles a recipe, and proactively alerts a peer team scheduled to work on calendar components next week |

### What shifted
- **Cross-Team Sprint Sync:** Visualized how SkillWeave links team-level sprint retrospectives with organization-wide proactive alert structures, demonstrating how collective velocity is preserved without direct synchronous meetings.

---

## Cycle 7: Transcript Streamlining & Progressive Aggregation

### AI Critique/Query
1. ❓ **Streamlining Long Transcripts**: How to make a 4-hour chat log readable for others without overwhelming them.
2. ❓ **Mesh vs. Original**: Whether multiple teams encountering the same error receive the first group's original log or a synthesized version.

### User Response
> If there's a previous chat that takes a very long time (e.g. 4 hours), I'm guessing most people who are given the transcript don't want to read everything. is there a way to streamline some messages and make it more of a tldr thing, or highlighting the key points that really helped the previous team?
> also, if multiple teams come upon the same error/troubleshooting, do they all receive the transcript of the first group's encounter, or will the received transcript material be a mesh of all group encounters?

### Document Delta
| Field | Before | After |
|---|---|---|
| Core Experience Step 3 | Sanitized Upload | Sanitized Upload & Transcript Streamlining (LLM Pivot Moment extraction and Collapsible Timelines) |
| Core Experience Step 5 | Helper Agent Intervention | Helper Agent Intervention & Progressive Knowledge Aggregation (Baseline Case Studies, Refinement Variants, and Meshed Wiki Synthesis once N >= 3) |

### What shifted
- **Transcript Streamlining:** Designed automated summarization to isolate key decisions/fixes (Pivot Moments) and collapse verbose chat transcripts.
- **Progressive Synthesis:** Created a tiered information delivery model where simple case studies scale up into consolidated troubleshooting wikis as more data is collected.

---

## Cycle 8: System Integration Touchpoints & Non-Coding Use-Case Walkthroughs

### AI Critique/Query
1. ❓ **Integration & Sync Mechanics**: Clarified where the tool displays suggestions (sidebar, tooltips, CLI) and how it syncs logs (Git hidden folders, workspace SSO).
2. ❓ **Non-Coding Applicability**: Brainstormed how the same metacognitive scaffolding patterns apply to Figma layout design, literature reviews, and positionality statement validation gates.

### User Response
> so the tool you're imagining connects to both the code/code editor, and the agent chat on the side? when it detects the user may be having difficulty, where does it print/show its output? also lastly, how does a user connect to their organization for this tool? since this tool will only show previous chat logs for people from the organization, rather than the entire database
> 
> other questions: does this tool have other uses other than for coding? like if there is some collaborative feature it can be used for in agent chatting or planning or making new and more skills, etc
> 
> can you add your responses 1, 2, 3 to product-thesis.md?
> also I want you to give concrete examples of the 3 "concrete examples" of a realistic chat, what the user's problem is (make sure it is realistic), what the user sees, what they ask, what this tool outputs for the user, and how exactly it helps the user and allows the user to become unstuck.

### Document Delta
| Field | Before | After |
|---|---|---|
| System Integration & Boundaries | Undefined | Added section detailing SQLite database watching, VS Code sidebar/hover tooltips, and Git/SSO data boundaries |
| Scenario E | Undefined | Added Figma layout design agent dialogue (Auto-Layout positioning solution) |
| Scenario F | Undefined | Added literature review agent citation hallucination dialogue (Bibliography reference constraint) |
| Scenario G | Undefined | Added validation positionality statement CLI gate dialogue (University research role reflection scaffolding) |

### What shifted
- **Concrete Integration Model:** Solidified the system's runtime boundaries by mapping it as an IDE/CLI wrapper over existing databases (preventing Everything-MVP scope creep).
- **Cross-Domain Generality:** Demonstrated that SkillWeave's core "prompt playbooks" and "reflection gates" generalize beyond programming to design (Figma), research (literature summaries), and planning (collaborative skill creation).
