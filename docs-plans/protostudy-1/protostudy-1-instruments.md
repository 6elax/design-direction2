# Protostudy 1 Instruments — MVP 1: Manual Sharing Probe

This companion document holds the operational detail for data collection for MVP 1. It details the forms, surveys, and manual verification protocols used to test error overlap and peer logs value.

**Main doc:** [protostudy-1.md](./protostudy-1.md)

---

## 📋 Surveys & Forms

### 1. Pre-Study Survey (Baseline Behaviors)
* **Form URL**: [https://forms.gle/GeKiR8FdNY1vjbqE8](https://forms.gle/GeKiR8FdNY1vjbqE8)
* **Timing**: Administered once to each participant before they begin the study.
* **Core Lenses**:
  - Primary agent tasks and frameworks.
  - Subjective assessment of agent-steering competency.
  - Frequency of "stuck cycles."
  - Help-seeking preferences (asking peers, coordinators, search).

### 2. During-Use / Incident Logging Survey (Usage Form)
* **Form URL**: [https://forms.gle/3F4GkdkBAgjuzuoFA](https://forms.gle/3F4GkdkBAgjuzuoFA)
* **Timing**: Builders fill this out:
  1. Whenever they hit an agent-steering roadblock (to log the struggle).
  2. Whenever they use a peer's logged solution to unblock themselves (to log match utility).
* **Core Questions**:
  - Roadblock description and error messages.
  - Resolution strategy (how they steered the agent to fix it).
  - Subjective rating of peer log relevance.

### 3. Post-Study Survey (Evaluation)
* **Form URL**: [https://forms.gle/wWTrsB4VGiJSM7ac8](https://forms.gle/wWTrsB4VGiJSM7ac8)
* **Timing**: Administered once at the end of the study.
* **Core Lenses**:
  - Perceived value of the shared logs folder.
  - Likelihood of checking peer logs before asking coordinators.
  - Subjective change in agent steering awareness.

---

## 🎙️ Exit Interview Guide
A 10-minute debrief at the end of the study.

### Questions:
1. "When you got stuck this week, did you check the shared peer struggles document? Why or why not?"
2. "Was there a specific time where a peer's logged struggle helped you resolve your own issue? Describe it."
3. "How did it feel having to manually copy-paste your struggles and fixes into the Google Form? Did it disrupt your coding flow?"

---

## 🛠️ Manual Verification & Coordination Protocol
Because we are running a no-code probe:
1. **End-of-Day Sync**: The coordinator reviews all responses in the Usage Form spreadsheet at 6:00 PM PST.
2. **Digest Generation**: The coordinator compiles new struggles and fixes into a clean, searchable markdown file (`docs-plans/protostudy-1/shared-peer-logs.md`) inside the shared repository.
3. **Daily Alert**: The coordinator sends a Slack message to the lab cohort summarizing the new cases: *"Teammate A resolved a Firestore claims error; Teammate B fixed an Angular signals reactivity bug. Check the shared-peer-logs.md file for their prompt fixes!"*
