# Protostudy 2 — MVP 2: Streamlined Chat Companion

**Companion docs:** [protostudy-2-instruments.md](./protostudy-2-instruments.md) (surveys, interview guides, observation protocols, TMS lenses)

---

## Overview

**Launch**: August 15, 2026 | **Reflection**: August 20, 2026

Before we can build an integrated, automated double-loop learning system for the whole lab cohort, we need to test whether cohort members (builders) will adopt a constrained, Socratic diagnostic helper and if the right-side Auxiliary Pane (the IDE's native Artifacts panel) provides a seamless side-by-side workflow experience. This study deploys an in-chat companion integration that proactively matches active tasks to peer Socratic case studies, rendering suggestions in the right-side Artifacts panel.

Based on MVP 1 findings, we have pivoted from a dashboard-centered manual search tool to a proactive, telemetry-triggered suggestion companion. To minimize reading fatigue and prevent task abandonment, suggestion cards enforce a strict maximum limit of two concise questions. Reflections are gathered using low-friction in-situ resolution detection popups, rather than forced post-hoc forms.

### What We're Testing & Exploring

We are testing three main hypotheses:
*   **H2: Steering Breakdown Signal** — Can we reliably detect steering breakdowns during workflow tasks (planning, design, writing, or coding) through interaction signals (e.g. keyboard idle time, prompt reversion counts, and editor error states) without constant LLM parsing?
*   **H4: Scaffolding vs. Direct Answers** — Will cohort members adopt a constrained diagnostic helper agent that does *not* generate direct answers/code, even though an automated assistant is faster, because they value learning the underlying steering competency?
*   **H5: Auxiliary Pane Usability** — Does rendering the Level 1 Inline Card and Level 2 Workspace Case Studies inside the right-side Artifacts panel (HTML Auxiliary Pane) provide a seamless side-by-side experience, or does it clutter the member's workspace layout?

Beyond testing assumptions, we explore the community-wide learning experience:
*   **TMS Specialization** — Does seeing peer case studies make builders aware of cohort expertise, encouraging them to seek out teammates for face-to-face assistance?
*   **Soft Log Friction** — How does removing strict validation (allowing optional reflections) impact the quantity and quality of logs committed to the shared database?

---

## What We're Building

A lightweight in-chat companion prototype that watches active conversations and presents peer Socratic case studies in the right-side Artifacts panel.

*   **In-Chat Checking Harness & Telemetry Gating** — A script (`skill-weave-agent.ts`) invoked by chat hooks at the end of each turn that runs checking (`--mode check`) and logging (`--mode log`) against the remote database. It uses telemetry metrics (idle times, reversion counts) to gate matches and prevent false-positive interruptions.
*   **Interactive Socratic Logging Gating** — Once a struggle is resolved (either detected by the agent or declared by the user), the assistant runs NLU synthesis to extract the roadblock, resolution, metacognitive pattern, and Socratic pivot questions, presenting them in a review card (`pending_struggle_log.md`). The user can review, edit, and approve the details before they are committed to Supabase.
*   **Artifact-Based Suggestion Card (Level 1)** — Outputs a concise card (`peer_suggestion_card.md`) to the active conversation directory, prompting the IDE to open it in the right-side panel. It enforces a strict UI limit of **maximum 2 concise Socratic questions** to prevent reading fatigue.
*   **Socratic Workspace Pane (Level 2)** — A markdown file (`peer-workspace-pane.md`) detailing peer reflections, comparative file diffs, and Socratic contrast questions.
*   **Cross-Domain Explanation Pipeline** — An automated generation pipeline that translates domain-specific details into plain, generalized lessons so that members from different project areas can immediately grasp the roadblock's core lesson.
*   **Manual Keyword Search Fallback** — A search box widget in the Workspace Pane allowing manual query fallbacks if telemetry triggering fails.
*   **Onboarding Expectation Gating (Anti-Lazy Prompting Warning)** — Frames intentional prompting as an effectiveness trade-off (*"the tool will be less effective if you write lazy prompts"*).
*   **Cohort-Wide Search Routing** — Searches the entire cohort database without team-internal bias, ensuring cross-team metacognitive transfer.
*   **Soft Logging Database Pipeline** — A central cloud database logging tool supporting optional/null reflection inputs to prevent task blocking.

---

## Build Plan

This round tests the Socratic intervention flow under a low-code infrastructure, leveraging the conversation system's artifacts folder to bypass application recompilation.

### Feature 1: In-Chat Checking Harness & Telemetry Logger
Lightweight background checking triggered by the agent execution environment.
*   **In-Chat Hook Checker** — A script (`skill-weave-agent.ts`) invoked by chat hooks at the end of each turn that runs checking (`--mode check`) and logging (`--mode log`) against the remote database using cohort-wide search routing.
*   **Telemetry Logger** — Logs typing speed, idle time, reversion counts, and error frequencies to map breakdown signals (H2).
*   **NLU Synthesis Engine** — Synthesizes the active conversation transcript to extract the struggle roadblock, resolution, metacognitive pattern, and Socratic pivot questions.
*   **Interactive Review Gating** — Writes the generated case study to `pending_struggle_log.md` and prompts the user for verification/edits before committing.

### Feature 2: Artifact-Based Suggestion Card (Level 1)
Generates the visual suggestion card inside the app webview.
*   **System Artifact Writer** — Outputs `peer_suggestion_card.md` to the active conversation directory, prompting Antigravity 2.0 to load it in the right-side panel.
*   **Socratic Match Card** — Displays match scores, peer names, and Socratic pivot hints (enforcing the strict max-2 questions limit).
*   **Onboarding Expectation Gating** — Displays the warning about lazy prompting during setup.

### Feature 3: Socratic Workspace Pane (Level 2)
The detailed comparative view.
*   **Local Markdown Generator** — Outputs `peer-workspace-pane.md` containing the comparative diff, cross-domain generalized lessons, and manual search fallback widget.

### Explicitly Deferred
*   **Coordinator Friction Dashboard** (Deferred to MVP 3)

---

## Data Collection Plan

Detailed instruments in [protostudy-2-instruments.md](./protostudy-2-instruments.md).

We will deploy this tool to up to 5 active cohort members during a 5-day development sprint.

### Telemetry Logs
Automated system monitoring.
*   **Trigger accuracy** — We track idle time vs. actual compile/syntax errors to refine H2.
*   **Card dismissals** — We count how many suggestion cards are dismissed within 5 seconds.
*   **Workspace Pane Navigation** — We track whether builders open the Level 2 Peer Workspace Pane or just close/ignore the Level 1 card.
*   **In-Situ Resolution Responses** — We track the response rate to the popup queries.

### User Survey Sequence
Three-part Google Forms surveys.
*   **Pre-Study Form (Baseline)** — Demographics and baseline agent-steering competency.
*   **Usage Form (During-Use)** — Filled out upon struggle resolution to capture match helpfulness.
*   **Post-Study Form (Post-Study)** — Usability scales, perceived learning, and abandonment.

---

## Reflection Plan

### Evaluating Assumptions

We're on the right track if builders successfully diagnose steering issues using peer reflections, resulting in fewer repeated prompts, and willingly write reflections without strict verification gating. Signs for concern include high card dismissal rates, builders ignoring the auxiliary pane due to screen clutter, or complete reflection bypass.

**Signals that deepen conviction:**
*   Builders log at least 2 voluntary reflections per week under the "soft log" flow.
*   Telemetry shows that builders resolve errors within 3 minutes of opening the peer workspace pane, compared to a baseline of 10+ minutes.
*   Survey scores for "Match Relevance" average above 4.0/5.0.

**Signals that prompt reconsideration:**
*   Over 60% of suggestion cards are dismissed immediately (dismissed within 5 seconds).
*   Builders consistently report that the right-side panel clutters their workspace (H5) or that Socratic prompts are too slow and annoying, preferring standard direct-answer chatbots (H4).
*   The in-situ popup is dismissed or ignored >80% of the time, or user edits in the confirmation gate are completely bypassed.

**Thresholds for directional intuition:**

| Metric | Target | Red Flag | Notes |
|---|---|---|---|
| Card Dismissal Rate | < 25% | > 50% | High dismissals indicate low keyword relevance or annoying triggers. |
| Workspace Pane Click Rate | > 30% | < 10% | Low clicks show that the Level 1 suggestion cards fail to entice users. |
| Voluntary Reflections | > 50% of logs | < 20% of logs | Tells us if users completely bypass optional reflections. |

### Interpreting Exploration

We want to explore how Socratic matching impacts cohort socialization and whether it triggers face-to-face cooperation.

**Key things to understand:**
*   Do peer suggestion cards prompt builders to seek out their teammates for help (TMS)?
*   What is the subjective friction difference between writing a 2-sentence reflection vs. copy-pasting code?

**Observations that would shift our thinking:**
*   If we observe that builders use the tool to find *who* has solved a problem and immediately walk over to talk to them, we would shift the design from a passive wiki-reader to a **collaborative matchmaker**.

---

## Appendix A: Detailed Focal Questions & Observable Signals

### Assumptions We Are Testing

#### 1. H2: Steering Breakdown Signal
*Can we reliably detect conceptual agent-steering breakdowns through keyboard idle time and reversions?*
*   **What would deepen conviction**: Telemetry showing idle times >3 minutes correlate with repetitive prompting (semantic overlap in consecutive prompts) and reversion counts.
*   **What would prompt reconsideration**: High rates of cards triggered while the user is simply reading documentation or sketching on paper (false positives).

#### 2. H4: Scaffolding vs. Direct Answers
*Will builders engage with Socratic prompts over raw code-gen/answer autocomplete?*
*   **What would deepen conviction**: Interview feedback stating that Socratic guidance helped them understand the agent's logic better.
*   **What would prompt reconsideration**: Participants reporting that they disabled the companion or used standard direct-answer tools in another window to bypass it.

#### 3. H5: Auxiliary Pane Usability
*Does rendering suggestion cards and workspace case studies in the Artifacts panel provide a seamless side-by-side experience?*
*   **What would deepen conviction**: Participants report that the right-side panel is convenient and does not clutter their development flow.
*   **What would prompt reconsideration**: Participants report that the split-screen view makes the code editor too narrow and leads to screen clutter.

---

## Appendix B: Stances & Deferred Issues

### 🔵 Strong Stances

*   **Socratic Dominance & Conciseness Limit**: Prioritize abstract Socratic pivot questions over raw code snippets, but enforce a strict limit of **maximum 2 concise Socratic questions** in each suggestion card (no wordy paragraphs) to prevent developer annoyance and tedium.
*   **Automatic Recommendation over Search**: Transition the core value proposition of MVP 2 from a "queryable database" to an "automatic recommendation engine" based on background IDE logs, resolving the search friction barrier (*"a lot of work to find logs"*).
*   **Onboarding Expectation Gating (Anti-Lazy Prompting Warning)**: Frame intentional prompting as an effectiveness trade-off (*"the tool will be less effective if you write lazy prompts"*), allowing builders to choose how they engage while managing their expectations.
*   **No Team-Internal Recommendation Bias**: Search across the entire cohort database without prioritizing the user's immediate team, preserving the opportunity for cross-team metacognitive transfer despite the higher translation effort.
*   **Cross-Domain Explanation Pipeline**: The automated generator must translate and simplify project-specific details so that a reader from any team or domain can immediately grasp the roadblock's core lesson.
*   **Manual Keyword Search Fallback**: Include a simple keyword search box in the sidebar panel as a manual fallback to query peer struggles, despite user doubt about final implementation details.
*   **Constrained User Editing**: The User Confirmation Gate will limit user modifications to minimal edits (privacy scrubbing and typo corrections) to prevent developers from deleting critical Socratic context or technical data.
*   **No Live Logging Probe**: Replaced the live Google Forms/Markdown logging sprint with a retrospective survey evaluation in MVP 1 to bypass participant compliance risk.
*   **Socratic Context Focus**: Prioritized evaluating *Socratic contrast questions* over simple code snippets, checking if conceptual guidance helps across different lifecycles.
*   **Domain-Agnostic Plain English & Conciseness**: Enforce that all registry case summaries are written in plain, non-wordy English. Keep descriptions to 1-2 punchy sentences, avoiding platform-specific jargon. Refer to authors directly by their actual names rather than role descriptors, leveraging the metadata team column for cohort background context.

### ⏳ Deferred Issues
*   **Telemetry False Positives**: How to prevent suggestion cards from popping up when the user is just reading or thinking (not stuck).
*   **Optional Suggestion Cards Interaction Gating**: Consult with advisor on whether suggestion cards should be strictly optional/dismissible (to preserve velocity) or if there should be interactive gating (to ensure reflection quality), and establish corresponding success metrics.
*   **NLU Reflection Validation** (Deferred to MVP 3)
