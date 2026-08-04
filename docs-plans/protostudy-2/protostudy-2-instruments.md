# Protostudy 2 Instruments — MVP 2: Streamlined Local CLI

This companion document holds the operational detail for data collection for MVP 2. It contains the exact question guides, links, protocols, and observation lenses used to validate steering breakdowns and Socratic peer highlights.

**Main doc:** [protostudy-2.md](./protostudy-2.md)

---

## 📋 Surveys & Embedded Data Collection

### 1. Pre-Study Survey (Baseline Behaviors)
* **Form URL**: [https://forms.gle/GeKiR8FdNY1vjbqE8](https://forms.gle/GeKiR8FdNY1vjbqE8)
* **Timing**: Administered once to each participant before they receive access to the SkillWeave tool.
* **Core Questions Captured**:
  - Demographics and cohort role (e.g., student researcher, developer).
  - Baseline agent usage frequency and primary tasks (coding, planning, design).
  - Subjective assessment of current agent-steering competency.
  - Frequency of "stuck cycles" (losing progress, repetitive prompting).
  - Help-seeking preferences when stuck (Google search, asking peer, asking coordinator).

### 2. During-Use Survey (Trigger-Gated Reflections)
* **Form URL**: [https://forms.gle/3F4GkdkBAgjuzuoFA](https://forms.gle/3F4GkdkBAgjuzuoFA)
* **Timing**: Users fill this out whenever a struggle is resolved and logged by the SkillWeave CLI.
* **Reflective & Assessment Lenses**:
  - **Logged vs. Provided Help**:
    1. *Did the peer match preview summary capture your actual struggle accurately?* (1 = Not at all, 5 = Perfectly).
    2. *Did you read the Socratic Pivot prompt inside the match card?* (Yes/No).
    3. *Did the Socratic prompt or comparative code diff help you resolve your roadblock?* (1 = Not at all, 5 = Completely).
    4. *Did you open the Level 2 Peer Workspace Pane?* (Yes/No).
    5. *If you opened it, what specific insight did you draw from the peer's reflection/diff?* (Open-ended).
  - **Socratic Reflection (Optional - "Soft Log")**:
    1. *What did the agent do unexpectedly or incorrectly that led to the roadblock?* (Open-ended).
    2. *How did you steer the agent to resolve the issue?* (Open-ended).

### 3. Post-Study Survey (Impact & Usability)
* **Form URL**: [https://forms.gle/wWTrsB4VGiJSM7ac8](https://forms.gle/wWTrsB4VGiJSM7ac8)
* **Timing**: Administered at the end of the 2-week pilot study.
* **Usability & Competency Scales**:
  - Subjective usability rating of the suggestion cards (Level 1) and Workspace Pane (Level 2).
  - Perceived utility of peer Socratic reflections compared to documentation.
  - Perceived change in individual agent-steering competency.
  - Frequency of task abandonment or bypass when encountering prompts.

---

## 🎙️ Exit Interview Guide

Open-ended questions for 15-minute debrief conversations.

### Opening (Context setting, no product mention)
1. "Tell me about a project task you worked on with an agent this week. What went well, and what took longer than expected?"
2. "When you hit a technical roadblock or a logic gap this week, what was your first instinct to resolve it?"

### Core Questions (Product dimensions)
1. "When the SkillWeave matching card appeared in your Artifacts panel, what was your immediate reaction? Did it feel like a distraction or a resource?"
2. "Walk me through how you used the Peer Workspace Pane. Did you read only the summary, or did you look at the Socratic questions and code diffs?"
3. "We allowed you to skip writing Socratic reflections (the 'soft log'). How often did you skip it, and why? What would have motivated you to write one?"

### Research Probes (Phenomenon exploration)
1. "Did seeing how a peer resolved a struggle change the way you structured your next prompt to the agent?"
2. "Do you feel like you understand your agent's steering limitations better now compared to two weeks ago?"

---

## 🔍 Observation Protocols

| What to watch | When/where | Connects to |
|---|---|---|
| **Raw Log Expansion Rate** | When Level 2 Socratic Workspace Pane is opened | **H5**: Do users value LLM timeline highlights, or do they still expand the raw 4-hour logs? |
| **Voluntary Reflection Rate** | During the SkillWeave log loop | **H4**: Do builders willingly write reflections, or does the "soft log" option lead to complete bypass? |
| **Struggle Intercept Rate** | telemetery CLI logs | **H2**: How accurately do keyboard idle times and file reversions flag conceptual breakdowns? |

---

## 🧠 Theory-Derived Observation Lenses

### Transactive Memory Systems (TMS)
* **Construct to probe**: Directory / Specialization (knowing who knows what in the cohort).
* **What to watch for**: Do participants reference their peers by name or project area after viewing match cards?
* **Interview probe**: *"Did seeing a match card prompt you to talk to that teammate in person, or did the offline markdown file contain enough context?"*

### Metacognitive Scaffolding
* **Construct to probe**: Transition from task execution to monitoring (evaluating one's own progress).
* **What to watch for**: Does the appearance of the card cause the user to pause typing, check their strategy, and pivot?
* **Interview probe**: *"When the card popped up, did it make you stop and reconsider your steering approach, or did you just copy the code change?"*

---

## 🛡️ Honest Assessment Practices
- **Record raw actions before interpretation**: Track the timestamped telemetry logs (e.g. click logs) separately from exit interview self-reports.
- **Track the "Silent Bypasses"**: Measure how many matches were shown but dismissed within 3 seconds.
- **Focus on the Disengaged**: Prioritize interviewing builders who logged 0 reflections or frequently dismissed cards.
