# Protostudy 2 Instruments — MVP 2: Streamlined Chat Companion

This companion document holds the operational detail for data collection for MVP 2. It contains the exact question guides, links, protocols, and observation lenses used to validate steering breakdowns and Socratic peer highlights.

**Main doc:** [protostudy-2.md](./protostudy-2.md)

---

## 📋 Surveys & Embedded Data Collection

### 1. Pre-Study Survey (Baseline Behaviors)
*   **Form URL**: [https://forms.gle/GeKiR8FdNY1vjbqE8](https://forms.gle/GeKiR8FdNY1vjbqE8)
*   **Timing**: Administered once to each participant before they receive access to the SkillWeave tool.
*   **Core Questions Captured**:
    - Demographics and cohort role (e.g., researcher, developer, designer).
    - Baseline agent usage frequency and primary tasks (coding, research planning, design, writing).
    - Subjective assessment of current agent-steering competency.
    - Frequency of "stuck cycles" (losing progress, repetitive prompting, dead-ends).
    - Help-seeking preferences when stuck (Google search, documentation, asking peer, asking coordinator).

### 2. During-Use Survey (Trigger-Gated Reflections)
*   **Form URL**: [https://forms.gle/3F4GkdkBAgjuzuoFA](https://forms.gle/3F4GkdkBAgjuzuoFA)
*   **Timing**: Users fill this out whenever a struggle is resolved and logged by the SkillWeave in-chat companion (triggered by the in-situ resolved popup).
*   **Reflective & Assessment Lenses**:
    - **Logged vs. Provided Help**:
        1. *Did the peer match preview summary capture your actual struggle accurately?* (1 = Not at all, 5 = Perfectly).
        2. *Did you read the Socratic Pivot prompt inside the match card?* (Yes/No).
        3. *Did the Socratic prompt or comparative diff help you resolve your roadblock?* (1 = Not at all, 5 = Completely).
        4. *Did you open the Level 2 Peer Workspace Pane?* (Yes/No).
        5. *If you opened it, did you use the manual keyword search fallback widget?* (Yes/No).
        6. *What specific insight did you draw from the peer's reflection/diff?* (Open-ended).
    - **Socratic Reflection (Optional - "Soft Log")**:
        1. *What did the agent do unexpectedly or incorrectly that led to the roadblock?* (Open-ended).
        2. *How did you steer the agent to resolve the issue?* (Open-ended).

### 3. Post-Study Survey (Impact & Usability)
*   **Form URL**: [https://forms.gle/wWTrsB4VGiJSM7ac8](https://forms.gle/wWTrsB4VGiJSM7ac8)
*   **Timing**: Administered at the end of the 5-day pilot study.
*   **Usability & Competency Scales**:
    - Subjective usability rating of the suggestion cards (Level 1) and Workspace Pane (Level 2).
    - Perceived utility of peer Socratic reflections compared to documentation or web search.
    - Perceived change in individual agent-steering competency across coding, planning, and design.
    - Frequency of task abandonment or bypass when encountering suggestion cards.
    - Perceived clutter or screen-space distraction of the right-side Artifacts panel (H5).
    - Clarity of the onboarding warning/instructions in setting steering expectations.

---

## 🎙️ Exit Interview Guide

Open-ended questions for 15-minute debrief conversations.

### Opening (Context setting, no product mention)
1. "Tell me about a project task (coding, planning, design, or writing) you worked on with an agent this week. What went well, and what took longer than expected?"
2. "When you hit a technical roadblock or a conceptual logic gap this week, what was your first instinct to resolve it?"

### Core Questions (Product dimensions)
1. "When the SkillWeave matching card appeared in your Artifacts panel, what was your immediate reaction? Did it feel like a distraction or a resource? Did the limit of 2 Socratic questions make you more or less likely to read it?"
2. "Walk me through how you used the Peer Workspace Pane. Did you read only the summary, or did you look at the Socratic questions and diffs? Did you ever use the manual keyword search fallback?"
3. "We allowed you to skip writing Socratic reflections (the 'soft log') and used a popup query to check when you resolved your struggle. How did that popup flow feel? Did you skip reflections often? What would have motivated you to write one?"
4. "Did you notice the onboarding warning about how lazy prompts affect tool accuracy? Did that influence how you prompted the agent?"

### Research Probes (Phenomenon exploration)
1. "Did seeing how a peer from another project team resolved a struggle change the way you structured your next prompt or plan? Was it hard to translate their experience to your domain?"
2. "Do you feel like you understand your agent's steering limitations and your own steering competency better now compared to one week ago?"

---

## 🔍 Observation Protocols

| What to watch | When/where | Connects to |
|---|---|---|
| **Workspace Pane Navigation Rate** | When Level 2 Socratic Workspace Pane is opened | **H5**: Do users click and use the right-side panel for comparative diffs, or does it clutter their workflow? |
| **In-Situ Response & Voluntary Reflection Rate** | When the resolved popup query is triggered | **H4**: Do builders respond to the in-situ query and willingly write reflections, or does the "soft log" option lead to complete bypass? |
| **Struggle Intercept Rate** | In-chat companion telemetry logs | **H2**: How accurately do keyboard idle times and file reversions flag conceptual/technical breakdowns? |
| **Manual Search Fallback Usage** | Telemetry logs on search box queries | **Exploration**: How often do automated telemetry triggers fail, requiring manual search overrides? |

---

## 🧠 Theory-Derived Observation Lenses

### Transactive Memory Systems (TMS)
*   **Construct to probe**: Directory / Specialization (knowing who knows what in the cohort).
*   **What to watch for**: Do participants reference their peers by name or project area after viewing match cards?
*   **Interview probe**: *"Did seeing a match card prompt you to talk to that teammate in person, or did the offline markdown file contain enough context?"*

### Metacognitive Scaffolding
*   **Construct to probe**: Transition from task execution to monitoring (evaluating one's own progress).
*   **What to watch for**: Does the appearance of the card cause the user to pause typing, check their strategy, and pivot?
*   **Interview probe**: *"When the card popped up, did it make you stop and reconsider your steering approach, or did you just copy the suggested change?"*

---

## 🛡️ Honest Assessment Practices
- **Record raw actions before interpretation**: Track the timestamped telemetry logs (e.g. click logs, idle times) separately from exit interview self-reports.
- **Track the "Silent Bypasses"**: Measure how many matches were shown but dismissed within 5 seconds.
- **Focus on the Disengaged**: Prioritize interviewing builders who logged 0 reflections, frequently dismissed cards, or reported high screen clutter.
