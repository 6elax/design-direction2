# SkillWeave Research Thesis

<!-- Relevant Research Threads, Theory Recommendations, Gaps & Opportunities, and Knowledge Contribution Framing. Owned by /define-research -->

*Deep literature review and Related Work preparation: see [research-thesis-prompt.md](./research-thesis-prompt.md).*

## Relevant Research Threads

### 1. AI-Mediated Learning and Cognitive Offloading in Project-Based Settings
- **Core Tension:** Balancing execution speed (automation) vs. deep conceptual learning (agency) in educational cohorts and professional onboarding settings using AI tools.
- **What the field knows:** Generative AI tools (e.g., GitHub Copilot, Cursor) dramatically accelerate software and writing tasks by automating content generation. However, HCI and learning sciences research indicates this leads to "cognitive offloading" and "deskilling" when users blindly accept AI outputs without evaluation (e.g., [Xu et al., 2021](https://doi.org/10.1145/3411764.3445096)). While experienced professionals in the workforce may prioritize speed and resist reflection because they already possess the necessary mental models, learners in project-based learning (PBL) environments or junior team members onboarding into an organization require active reflection to build competence.
- **Open Tensions:** How do we design interfaces that introduce "desirable difficulties" (e.g., forced post-task reflections or constrained feedback) specifically tailored for learning cohorts where competence building is the primary goal, without making the tools too frustrating to use? How can we prevent "compliance gaming" (e.g., users writing gibberish or low-effort filler text like "fixed" or "done" to bypass mandatory prompts) while still prompting meaningful reflection? Specifically, how can we design automated quality gating where an LLM evaluates whether a student's reflection is understandable and relevant to the actual task context, rejecting low-quality submissions? How can team-level tools leverage AI to help groups think deeper rather than just executing faster?

### 2. Contextual, Runtime Scaffolding vs. Static Tutoring
- **Core Tension:** Designing metacognitive scaffolds that trigger automatically in-context without introducing excessive cognitive overhead that disrupts the primary task flow.
- **What the field knows:** Educational psychology shows that prompting learners to reflect (self-explanation, analyzing error logs) significantly improves conceptual understanding (e.g., [Chi et al., 1989](https://doi.org/10.1207/s15516709cog1302_1)). Historically, Intelligent Tutoring Systems (ITS) have provided "static tutoring"—separate, sandboxed tutorial exercises (like a coding playground) detached from the real-world work environment. Conversely, contextual tools trigger reflection in-situ (during active work).
- **Open Tensions:** How does in-context scaffolding scale when the task is not a simple sandboxed exercise, but a complex, multi-turn dialogue of steering an autonomous agent through real-world system development? How can we trigger runtime scaffolding in a mixed-initiative way (asking the user for confirmation rather than fully automating it) to respect individual work habits? What are the key open research questions here: (1) *Triggering Signals:* What interaction telemetry (e.g., error frequencies, file reversions, typing velocity, or idle times) most accurately predicts that a user is genuinely stuck vs. just thinking? (2) *Personalization/Fading:* How does the scaffolding system adapt its trigger thresholds over time based on a specific user's history of accepting or declining help?

### 3. Codification vs. Personalization in Community Knowledge Sharing
- **Core Tension:** Bridging the divide between explicit knowledge repositories (static wikis with high context gaps) and tacit personalization networks (peer-to-peer syncs with high scalability friction).
- **What the field knows:** CSCW and knowledge management literature identifies two main strategies for sharing knowledge: *codification* (storing solutions in wikis/Q&A databases, which suffer from a "context gap" because static files hide the dialogue and evolution of how the solution was reached) and *personalization* (connecting seekers directly to experts, which scales poorly as experts become bottlenecks).
- **Open Tensions:** Can passive capture (capturing transcripts in the background without user overhead) and LLM-streamlining of human-agent dialogue logs bridge this gap by creating self-documenting community databases that capture both the code fix *and* the steering interaction context? Since databases of transcripts inevitably become unread graveyards, how can we design summarization models that isolate the core "Pivot Moments" (TL;DR highlights of critical fixes) to provide immediate utility to seekers? How can we design flexible organizational privacy and storage controls (e.g., letting hosts toggle raw transcript archival vs. immediate deletion after Pivot Moment extraction) to respect user privacy and storage constraints while preserving the synthesized knowledge? How can these databases automatically prompt peer-to-peer synergy matching at the exact moment of overlap?

## Theory Recommendations

### 1. Reflection-in-Action and Reflection-on-Action (Donald Schön) — *For the Active Reflection Trigger*
- **Why this theory, specifically:** Schön distinguishes between *reflection-in-action* (critical thinking that occurs during the task to adjust behavior) and *reflection-on-action* (analyzing the process after completion to build mental models). SkillWeave operationalizes these in two interface areas:
  - *Reflection-on-Action (CLI Post-Task Trigger & NLU Gate):* The CLI blocks log upload until the builder reflects. The NLU gate evaluates the response to ensure it describes a moment of *surprise* (unexpected agent behavior) and *reframing* (how the user steered the agent back), rejecting low-effort/gibberish text.
  - *Reflection-in-Action (Helper Agent Interaction):* When the user hits an error, they engage in diagnostic syncs with the helper agent, reflecting on their steering prompts in real time.
- **Key reference:** Schön, D. A. (1983). *The Reflective Practitioner: How Professionals Think in Action*. Basic Books.
- **Alternative considered (optional):** Kolb's Experiential Learning Cycle (rejected because it is too broad; Schön's emphasis on professionals "talking back to the situation" fits the dialogic human-agent steering process much more precisely).

### 2. Cognitive Scaffolding and the Zone of Proximal Development (Lev Vygotsky / Wood, Bruner, & Ross) — *For the Helper Agent*
- **Why this theory, specifically:** Explains the design constraints of the helper agent. To ensure the builder learns rather than offloads cognition, the helper agent is structurally constrained: it cannot write code or generate direct answers. Instead, it provides *scaffolding* within the builder's Zone of Proximal Development (ZPD) by operationalizing two specific tutoring functions:
  - *Reduction in degrees of freedom:* Hiding verbose, raw 4-hour logs and showing only the LLM-extracted *Pivot Moments* (TL;DR fixes) to prevent cognitive overload.
  - *Marking critical features:* Pointing out discrepancies between the user's current code/prompts and successful peer solutions, asking diagnostic questions to guide the builder to resolve the issue themselves.
- **Key reference:** [Wood et al., 1976](https://doi.org/10.1111/j.1469-7610.1976.tb00381.x). The role of tutoring in joint problem solving. *Journal of Child Psychology and Psychiatry*, 17(2), 89-100.
- **Alternative considered:** Self-Determination Theory (Ryan & Deci) (considered because it focuses on intrinsic motivation, competence, and autonomy, but rejected because it does not provide concrete design constraints for dialogue formatting or prompt construction, which Scaffolding directly provides).

### 3. Double-Loop Learning (Chris Argyris & Donald Schön) — *For the Template Optimization*
- **Why this theory, specifically:** Explains the dual optimization cycles in SkillWeave:
  - *Single-Loop:* The builder adjusting their prompts/steering based on immediate agent feedback and helper guidance to resolve a single error.
  - *Double-Loop:* Modifying the underlying "governing variables" of the organization. When the system detects a friction hotspot, it automatically proposes a Pull Request to edit the shared skill template files in the repository. Once merged, it corrects the structural cause of the errors for the entire cohort.
- **Key reference:** Argyris, C., & Schön, D. A. (1978). *Organizational Learning: A theory of action perspective*. Addison-Wesley.
- **Alternative considered:** Communities of Practice (Wenger) (considered because it describes social learning in cohorts, but rejected because it lacks a framework for how explicit workflow artifacts (like templates) are dynamically updated based on individual errors (which Double-Loop Learning maps perfectly)).

**How the theories work together:**
Donald Schön's reflection model defines the primary user journey (stopping to think about agent steering during and after a session). Wood et al.'s cognitive scaffolding dictates the Helper Agent's interface constraint (hiding raw logs and using diagnostic questions instead of code generation to prevent spoon-feeding). Finally, Argyris & Schön's Double-Loop Learning framework links these individual learning moments to the community level, explaining how aggregated individual reflections update the shared workspace templates to optimize the workflow for the entire cohort.

### Theories to explore further
- **Cognitive Load Theory (John Sweller):** To study the cognitive burden of writing prompts while managing complex software codebases.
- **Distributed Cognition (Edwin Hutchins):** To evaluate how intelligence is distributed across the human developer, the local agent, and the shared community knowledge base.

## Gaps & Opportunities

**How the research threads converge:**
Thread 1 (AI-Mediated Learning in PBL) shows that automated coding tools cause deskilling, especially for learners; Thread 2 (Runtime Scaffolding) shows that contextual reflection can prevent deskilling but is hard to scale outside of sandboxes; Thread 3 (Codification vs. Personalization) shows that capturing process context is high friction. Together, they suggest that if we passively capture human-agent logs, we can use them to scaffold active learning and collaboratively optimize the group's shared workflow templates.

**The overarching gap:**
Existing tools focus entirely on individual development velocity via automation (spoon-feeding code), leaving a critical gap: we do not know how to design collaborative human-AI work environments that capture sanitized, multi-turn interaction logs to actively drive **individual metacognitive learning** (learning how to steer) and **community-wide process adaptation** (double-loop template optimization).

### Gap 1: Integrated Scaffolding vs. Direct Automation in Human-AI Workflows (from Threads 1 & 2)
- **The gap:** We do not understand the design space of agentic constraints—how restricting an AI's output format and conversational capabilities dynamically shapes a user's prompt-steering capacity and metacognitive learning without driving them to abandon the tool in frustration.
- **Why this project fills it:** SkillWeave implements a helper agent that is structurally constrained from generating code, instead using LLM highlights of peer transcripts to generate diagnostic steering questions.
- **Design knowledge generated:** How can we design agentic constraints that help users build mental models of AI steering without causing workflow abandonment?
- **How we'd observe this:** We will observe: (1) an increase in the NLU-scored quality and conceptual depth of post-task reflections over time (capturing genuine surprise/reframing); and (2) a decrease in "stuck cycles" and repeated steering errors when builders encounter new, unseen error codes (demonstrating transfer of general steering competence).

### Gap 2: Capturing and Aggregating Process Knowledge in Co-Writing/Co-Coding Cohorts (from Threads 2 & 3)
- **The gap:** Shared prompt playbooks are manually maintained and quickly go out of date. We do not know how to passively capture, sanitize, and mesh multi-turn agent interaction logs to build a self-documenting, privacy-preserving community database. This design position was previously technically infeasible because manual process logging was high-friction, but recent advances in LLMs enable passive, real-time process extraction and synthesis.
- **Why this project fills it:** SkillWeave parses git/transcript deltas, aggregates them into a cohort dashboard with host-level archival controls, and suggests template updates based on user edits.
- **Design knowledge generated:** How can we sanitize, compress, and synthesize verbose developer transcripts into readable peer learning recipes?
- **How we'd observe this:** Analyzing the dashboard heatmaps and the frequency/acceptance rate of coordinator-approved template pull requests.

## Knowledge Contribution Framing

*Note: The statements below are contribution hypotheses — framed as the potential claims we believe the eventual paper will be able to make, based on the gaps identified above. They will be refined or revised once deployment data confirms or challenges them.*

- **Knowledge Contribution (one sentence):** A design framework and system implementation showing how sanitizing and aggregating human-agent interaction transcripts can drive both individual metacognitive reflection and collaborative workflow optimization in cohort-based development.

### Central Research Questions
*   **Central RQ:** *How can we design collaborative development systems that passively capture and aggregate individual human-AI interaction logs to scaffold individual metacognitive learning and optimize shared team workflows without causing excessive cognitive load or user frustration?*
    *   **RQ1 (Individual Learning & Scaffolding):** *How do agentic output constraints (restricting code generation in favor of peer-referenced diagnostic guidance) affect a developer’s conceptual understanding and ability to steer agents through new, unseen errors over time?*
    *   **RQ2 (Community Knowledge Synthesis):** *How can we passively extract, sanitize, and mesh verbose human-agent dialogue logs into structured, low-friction peer troubleshooting wikis that preserve contextual relevance while protecting user privacy?*
    *   **RQ3 (Double-Loop Process Optimization):** *How does exposing aggregated team-wide friction patterns affect coordinators' ability to identify and resolve structural flaws in shared workflow templates, and what is the downstream impact on cohort error velocity?*

### Uniqueness & Research Contributions

#### Positioning Matrix: Prior Work vs. SkillWeave

| Dimension / Area | Past Approaches (What people were doing) | SkillWeave (What we do differently) |
| :--- | :--- | :--- |
| **AI Tutoring & Coding Assistance** | **Direct Autocomplete & Isolated Sandboxes:** Standard LLM tools (e.g., Copilot, Cursor) optimize for speed by generating code, leading to deskilling. Traditional Intelligent Tutoring Systems (ITS) provide isolated playgrounds separate from the real workspace. | **In-Context Diagnostic Constraints:** Constrains the helper agent from writing code, serving peer-referenced, context-specific Socratic questions linked directly to the developer's runtime editor workspace. |
| **Process Knowledge Capture** | **Manual Playbook Writing:** Relies on users manually compiling wikis, Q&A logs, or post-task write-ups, creating a high-friction "context gap" that hides the actual steering sequence. | **Passive Telemetry Extraction:** Passively captures background human-agent conversation transcripts and workspace diffs, sanitizing and indexing them automatically without developer overhead. |
| **Knowledge Representation** | **Consensus-Driven Summarization:** Standard synthesis tools group data by averaging out inputs or generating keyword lists, which flattens dissenting opinions and erases cognitive friction. | **Friction-Preserving Synthesis:** Groups peer records by conceptual divergence, explicitly highlighting points of contention and alternative design variant paths. |
| **Workflow Optimization** | **Static Instruction Docs:** Team guides and templates are static documents (e.g., wiki pages) that decay over time because identifying cohort-wide friction requires manual coordinator audit. | **Double-Loop Template Adaptation:** Automatically analyzes cohort-wide friction heatmaps and generates Pull Requests to optimize the shared workspace instructions for the entire team. |

#### 1. Systemic Uniqueness (The Collaborative Telemetry Model)
Existing AI programming assistants (e.g. Copilot, Cursor, ChatGPT) treat human-AI interaction as an isolated, private sandbox. What a developer learns or struggles with is locked inside their local editor session. SkillWeave breaks this isolation by designing a **Model Context Protocol (MCP) telemetry system** that passively captures, meshes, and synthesizes private developer logs into a shared, cohort-wide knowledge base. It is the first system to bridge the gap between individual human-AI steering and team-level organizational learning.

#### 2. Empirical Contributions (Learning under Agentic Constraints)
We will compile empirical data observing what happens when real developer cohorts deploy this in-the-wild. We will measure:
- How developer independence (resolution speed of unseen errors) scales over time under diagnostic constraints vs. direct autocomplete.
- The NLU-scored quality and conceptual depth of post-task reflections over time (capturing genuine surprise/reframing).
- The coordinator adoption and acceptance rate of dashboard-proposed template updates.

#### 3. Conceptual Contribution (The "Bit Flip")
*   **The Bit Flip:** *"Most people assume that AI assistants should maximize task automation by generating direct code solutions, but our work shows that constraining the agent to diagnostic, peer-referenced guidance drives deeper user reflection and builds long-term developer competence."*
*   **Novelty Defense:** If reviewers claim this is just "another QA site or tutor bot," we respond:
    1. It captures process and dialog dynamics passively rather than relying on manual writing.
    2. The helper agent uses scaffolding and peer context rather than tutoring exercises.
    3. It implements double-loop learning by feeding individual friction back into the shared workspace instructions.

- **Product Value vs. Research Contribution:**
  - *Product Value:* Students resolve programming errors faster, write higher-quality code, and lab leads spend less time debugging team issues.
  - *Research Contribution:* Understanding how interface constraints (forbid code generation, mandate post-task reflection) and cohort knowledge aggregation shape developer learning and prompt-steering capability.
- **Paper Type:** Systems + Empirical Evaluation (CSCW/CHI Systems paper).
- **Target Venue:** ACM CHI (Human Factors in Computing Systems) or ACM CSCW (Computer-Supported Cooperative Work).
- **Audience:** HCI researchers studying human-AI collaboration, CSCL researchers, and designers of developer tools.

---

## Appendix: Research Landscape

### Research Threads

### Theory Recommendations

### Gaps & Opportunities

### Knowledge Contribution Framing
