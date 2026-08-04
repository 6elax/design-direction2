# Protostudy 1 — MVP 1: Manual Sharing Probe

**Companion docs:** [protostudy-1-instruments.md](./docs-plans/protostudy-1/protostudy-1-instruments.md) (surveys, coordination protocols, interview guide)

---

## Overview

**Launch**: August 5, 2026 | **Reflection**: August 7, 2026

This MVP serves as a 2-person pre-pilot usability dry-run to test the logging process, form interfaces, and manual digest logistics. We're testing whether builders will actively document and read peer logs, while evaluating the feasibility of daily spreadsheet-to-markdown syncs. We're using a no-code build consisting of a shared Google Form database and a manual markdown digest compiled daily in the repository. We are collecting data through a Pre-Study survey, an Incident Logging Form, a Post-Study survey, and exit interviews.

### What We're Testing & Exploring

This MVP specifically tests:
* **H3: Value of Peer Dialogue** — Will builders actively check and read a shared log of peer struggles and fixes to solve their own agent roadblocks instead of asking coordinators directly?
* **H1: Error Overlap Context (Exploratory)** — Although the 2-person sample is too small to test cohort-wide overlap, we will explore if their individual struggles show any conceptual overlap.

Beyond testing assumptions, we're exploring:
* **Logging Friction** — What is the threshold of effort builders are willing to exert to document their struggles manually before they experience survey fatigue?

### What We're Building (No-Code Infrastructure)
Zero custom software is written for this round. We deploy:
* **Google Forms Database** — A set of three forms (Pre-Study, Usage, and Post-Study) to ingest baseline, incident-level, and post-pilot data.
* **Shared Peer Logs Digest** — A manual markdown file (`docs-plans/protostudy-1/shared-peer-logs.md`) updated daily by the coordinator compiling all reported struggles and fixes.

### How We're Collecting Data
We will deploy this manual probe to 2 student builders in our lab. The study will run for **3 days** to evaluate logging friction and process logistics during their scheduled coding sessions.
* **Incident Logging spreadsheet** — Analyzed to measure overlap metrics.
* **Pre/Post/Usage Surveys** — Captured via Google Forms.
* **Exit Interviews** — 10-minute debriefs with selected participants.

---

## Build Plan

We leverage a pure no-code workflow to test the behavioral assumptions before investing in CLI/agent software development.

### Component 1: Ingestion Pipeline
- **Pre-Study Form** — Baseline mapping.
- **Usage Form** — Incident logging for roadblocks and resolutions.
- **Post-Study Form** — Terminal survey assessing value.

### Component 2: Manual Sync Loop
- **Daily Markdown Exporter** — Coordinator (human researcher) manually reads the new Google Forms spreadsheet responses at 6:00 PM PST daily, cleans/sanitizes any credentials, and appends them to `shared-peer-logs.md`.
- **Digest Structure** — Each entry lists: (1) Roadblock context/error, (2) Peer fix (prompts used), and (3) Verbatim reflection.

### Explicitly Deferred
- **Automated CLI Telemetry Checker** (Deferred to MVP 2)
- **Socratic Suggestion Card webviews** (Deferred to MVP 2)

---

## Data Collection Plan

Detailed instruments in [protostudy-1-instruments.md](./docs-plans/protostudy-1/protostudy-1-instruments.md).

We deploy the probe to 2 lab builders during a 3-day coding sprint.

### Pre-Study Baseline (Google Form)
Administered before launch.
- **Steering competency baseline** — Pre-intervention self-assessment.
- **Stuck frequency** — Establishes how often students get stuck in a typical week.

### Incident Logging (Google Form)
Administered during development.
- **Overlap analysis** — We analyze error descriptions to map overlaps.
- **Relevance mapping** — We audit the "Match Utility" scores (1-5) on the form.

### Post-Study Survey & Debriefs
Administered after day 3.
- **Utility score** — Measures self-reported value of the shared logs.
- **Exit Interviews** — Unpacks friction and help-seeking behaviors.

---

## Reflection Plan

### Evaluating Assumptions

We're on the right track if builders successfully complete the pre/usage/post surveys, and report that the manual daily digest was easy to find and read. Since the study is a 2-person pilot, we do not expect high statistical overlap, but signs for concern include builders completely bypassing the forms due to copy-paste friction.

**Signals that deepen conviction:**
- Builders submit at least 2 logs per person during the week.
- Survey logs record at least 1 instance where a user used their peer's fix.
- Exit interviews confirm builders checked the log before asking a coordinator.

**Signals that prompt reconsideration:**
- Zero overlap in reported struggles (each team hits entirely isolated, unique errors).
- Builders log zero entries in the Usage Form due to manual copy-paste friction.
- Participants report that it was easier to ask Google/ChatGPT than search the shared markdown log.

**Thresholds for directional intuition:**

| Metric | Target | Red Flag | Notes |
|---|---|---|---|
| Form Usability Score | $\geq 4.0/5.0$ | $< 3.0/5.0$ | Measures if form friction is acceptable. |
| Log Compliance | $\geq 2$ logs/dev | $< 0.5$ logs/dev | Low compliance shows manual friction is too high. |
| Match Utility | $\geq 3.5/5.0$ | $< 2.5/5.0$ | Tells us if peer logs actually contain useful, tacit context. |

### Interpreting Exploration

We want to explore the logging barrier. How much effort does a manual, multi-page Google Form require, and where do builders start truncating their reflections?

**Observations that would shift our thinking:**
- If we find that manual form compliance is $<20\%$, we must pivot MVP 2 to prioritize **low-friction telemetry auto-logging** over rich, manual reflections.

---

## Pre-Mortem & Initial Assumptions
*(To be drafted during Step 5 review)*

---

## Appendix A: Detailed Focal Questions & Observable Signals

### Assumptions We Are Testing

#### 1. H1: Error Overlap Context *(Thesis: Section 4.1)*
*Do teams working in the same cohort hit overlapping struggles?*
* **What would deepen conviction**: Multiple teams reporting identical library configuration issues or identical agent steering failures (e.g. loops, file location errors).
* **What would prompt reconsideration**: Every team logging highly specific domain logic bugs that cannot possibly apply to others.

#### 2. H3: Value of Peer Dialogue *(Thesis: Section 4.3)*
*Will builders read peer logs to resolve issues?*
* **What would deepen conviction**: Post-study surveys showing builders rank peer logs as more relevant than standard library documentations.
* **What would prompt reconsideration**: Participants reporting that they only filled out the forms because it was mandatory and never read the shared file.

---

## Appendix B: Stances & Deferred Issues

### 🔵 Strong Stances
*(None logged yet)*

### ⏳ Deferred Issues
*(None logged yet)*
