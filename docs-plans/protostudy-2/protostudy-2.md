# Protostudy 2 — MVP 2: Streamlined Local CLI

**Companion docs:** [protostudy-2-instruments.md](./docs-plans/protostudy-2/protostudy-2-instruments.md) (surveys, interview guides, observation protocols, TMS lenses)

---

## Overview

**Launch**: August 15, 2026 | **Reflection**: August 29, 2026

Before we can build an integrated, automated double-loop learning loop for the whole lab cohort, we need to test whether builders will adopt a constrained, Socratic diagnostic helper and if LLM timeline highlights preserve the necessary contextual details. We're building a local telemetry checker daemon, an Artifact-based suggestion card generator, and a cloud Supabase logging pipeline. We are collecting data through telemetry logs, a 3-part Google Forms survey sequence, and exit interviews to evaluate both scaffolding adoption and timeline usability.

### What We're Testing & Exploring

Before we proceed with complex NLU reflection quality gating, we need to test three important assumptions:
* **H2: Steering Breakdown Signal** — Can we reliably detect steering breakdowns through simple interaction signals (typing speed, idle time, reversion count) without constant LLM parsing?
* **H4: Scaffolding vs. Autocomplete** — Will builders engage with a diagnostic helper that prompts them with Socratic questions, or will they bypass it in favor of raw copy-paste code-gen assistants?
* **H5: Collapsible Timeline Usability** — Do the LLM-extracted Pivot Highlights provide sufficient context to resolve a struggle, or do builders still expand the raw 4-hour chat logs?

Beyond testing assumptions, we're exploring the community-wide learning experience:
* **TMS Specialization** — Does seeing peer case studies make builders aware of cohort expertise, encouraging them to seek out teammates for face-to-face assistance?
* **Soft Log Friction** — How does removing strict validation (allowing optional reflections) impact the quantity and quality of logs committed to the shared database?

### What We're Building
A lightweight local CLI prototype that watches active conversations and presents peer Socratic case studies in the Electron artifacts pane.
* **Telemetry Checker Daemon** — A background shell loop that matches typing speed and reversions, calling `skill-weave-agent --mode check` when a struggle pattern is detected.
* **Artifact-Based Suggestion Card (Level 1)** — A script that outputs a markdown file (`peer_suggestion_card.md`) to the user's system artifacts directory, automatically loading a visual suggestion card inside Antigravity 2.0's HTML Auxiliary pane.
* **Socratic Workspace Pane (Level 2)** — A local markdown file detailing peer reflections, code diffs, and contrast questions that opens in the right-side Artifacts panel when clicked.
* **Soft Logging Database Pipeline** — A central cloud Supabase database logging tool that supports optional/null Socratic reflection inputs.

### How We're Collecting Data
We will deploy the CLI tool to 10 student builders in our research lab for two weeks.
* **Telemetry logs** — We log typing speed, idle time, reversions, match card triggers, card dismissals, and timeline expansions.
* **Pre/During/Post Surveys** — Administered via Google Forms to track baseline behaviors, inline match helpfulness, and perceived usability.
* **Exit Interviews** — 15-minute post-study debriefs to unpack cognitive friction and learning behaviors.

---

## Build Plan

This round tests the Socratic intervention flow under a low-code infrastructure, leveraging the conversation system's artifacts folder to bypass Electron app recompilation.

### Feature 1: Telemetry Checker Daemon
A background monitoring script that runs in the student's project terminal to detect struggles.
- **Idle & Reversion Watcher** — Tracks keyboard activity and file reversions, triggering a match check when a developer is idle for >3 minutes after a reversion.
- **Cloud Database Query Engine** — Runs a keyword similarity check directly against the remote Supabase database learnings table when a trigger fires.

### Feature 2: Artifact-Based Suggestion Card (Level 1)
Generates the visual suggestion card inside the app webview.
- **System Artifact Writer** — Outputs `peer_suggestion_card.md` to the user's system directory, prompting Antigravity 2.0 to load it in the right-side panel.
- **Socratic Match Card** — Displays match scores, peer names, and Socratic pivot hints.

### Feature 3: Socratic Workspace Pane (Level 2)
The detailed comparative view.
- **Local Markdown Generator** — Outputs `peer-workspace-pane.md` in the workspace docs folder containing the comparative diff and contrast questions.

### Explicitly Deferred
- **NLU Quality Gating** (Deferred to MVP 3)
- **Coordinator Friction Dashboard** (Deferred to MVP 3)

---

## Data Collection Plan

Detailed instruments in [protostudy-2-instruments.md](./docs-plans/protostudy-2/protostudy-2-instruments.md).

We will deploy this tool to 10 active student builders during a 2-week development sprint.

### Telemetry Logs
Automated system monitoring.
- **Trigger accuracy** — We track idle time vs. actual compile errors to refine H2.
- **Card dismissals** — We count how many suggestion cards are dismissed within 5 seconds.
- **Timeline expansions** — We track whether builders open the raw log files or read only the Socratic summaries.

### User Survey Sequence
Three-part Google Forms surveys.
- **Pre-Study Form** (Baseline) — Demographics and baseline agent-steering competency.
- **Usage Form** (During-Use) — Filled out upon struggle resolution to capture match helpfulness.
- **Post-Study Form** (Post-Study) — Usability scales, perceived learning, and abandonment.

---

## Reflection Plan

### Evaluating Assumptions

We're on the right track if builders successfully diagnose steering issues using peer reflections, resulting in fewer repeated prompts, and willingly write reflections without strict verification gating. Signs for concern include high card dismissal rates, builders consistently opening raw 4-hour logs due to poor LLM summaries, or complete reflection bypass.

**Signals that deepen conviction:**
- Builders log at least 2 voluntary reflections per week under the "soft log" flow.
- Telemetry shows that builders resolve errors within 3 minutes of opening the peer workspace pane, compared to a baseline of 10+ minutes.
- Survey scores for "Match Relevance" average above 4.0/5.0.

**Signals that prompt reconsideration:**
- Over 60% of suggestion cards are dismissed immediately (dismissed within 5 seconds).
- Builders consistently open raw chatlogs because the Pivot Highlights lack necessary context.
- Exit interviews reveal that builders find Socratic prompting highly annoying and bypass it in favor of standard code generation tools.

**Thresholds for directional intuition:**

| Metric | Target | Red Flag | Notes |
|---|---|---|---|
| Card Dismissal Rate | < 25% | > 50% | High dismissals indicate low keyword relevance or annoying triggers. |
| Timeline Expansion | < 30% | > 70% | High expansion shows LLM summary details are insufficient. |
| Voluntary Reflections | > 50% of logs | < 20% of logs | Tells us if users completely bypass optional reflections. |

### Interpreting Exploration

We want to explore how Socratic matching impacts cohort socialization and whether it triggers face-to-face cooperation.

**Key things to understand:**
- Do peer suggestion cards prompt builders to seek out their teammates for help (TMS)?
- What is the subjective friction difference between writing a 2-sentence reflection vs. copy-pasting code?

**Observations that would shift our thinking:**
- If we observe that builders use the tool to find *who* has solved a problem and immediately walk over to talk to them, we would shift the design from a passive wiki-reader to a **collaborative matchmaker**.

---

## Pre-Mortem & Initial Assumptions
*(To be drafted during Step 5 review)*

---

## Appendix A: Detailed Focal Questions & Observable Signals

### Assumptions We Are Testing

#### 1. H2: Steering Breakdown Signal *(Thesis: Section 4.2)*
*Can we reliably detect conceptual agent-steering breakdowns through keyboard idle time and reversions?*
* **What would deepen conviction**: Telemetry showing idle times >3 minutes correlate with repetitive prompting (semantic overlap in consecutive prompts).
* **What would prompt reconsideration**: High rates of cards triggered while the user is simply reading documentation or sketching on paper (false positives).

#### 2. H4: Scaffolding Adoption *(Thesis: Section 4.4)*
*Will builders engage with Socratic prompts over raw code-gen autocomplete?*
* **What would deepen conviction**: Interview feedback stating that Socratic guidance helped them understand the agent's logic better.
* **What would prompt reconsideration**: Participants reporting that they disabled the daemon or used copy-paste tools in another window to bypass it.

---

## Appendix B: Stances & Deferred Issues

### 🔵 Strong Stances
*(None logged yet)*

### ⏳ Deferred Issues
- **NLU Reflection Validation** (Deferred to MVP 3)
