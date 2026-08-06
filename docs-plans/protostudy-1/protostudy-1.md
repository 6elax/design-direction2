# Protostudy 1 — MVP 1: Manual Sharing Probe

**Companion docs:** [protostudy-1-instruments.md](./docs-plans/protostudy-1/protostudy-1-instruments.md) (copy-paste templates, interview guides, audit protocols)

---

## Overview

**Launch**: August 10, 2026 | **Reflection**: August 14, 2026

This MVP tests whether different student builders working in the same cohort hit overlapping technical/steering struggles and if they will actively read peer logs to resolve them before seeking direct coordinator help. We're using a no-code build consisting of a shared Google Sheet in a Google Drive folder where builders copy-paste their raw errors, successful prompt adjustments, and 2-sentence reflections. We are collecting data through Google Sheets version history (view logs/edits), self-report help logs, and a coordinator technical overlap audit over **1 week (5 working days)** across **Team A and Team B (approx. 6 builders total)**, holding back Team C as a control group.

### What We're Testing & Exploring

This MVP specifically tests two core assumptions from the validation plan:
* **H1: Error Overlap Context** — Do different teams/builders working in the same cohort hit overlapping technical errors and agent-steering challenges, or are their error profiles entirely isolated?
* **H3: Value of Peer Dialogue** — Will builders actively check and read a shared log of peer struggles and fixes to solve their own agent roadblocks instead of asking coordinators directly?

Beyond testing assumptions, we're exploring:
* **Manual Platform Friction** — How does the overhead of manually copying raw chat dialogues into a shared spreadsheet row affect a developer's willingness to document their struggles compared to direct messaging?

### What We're Building (No-Code Infrastructure)
Zero custom software is written for this round. We deploy:
* **Shared Google Drive Directory** — A shared cohort folder containing the logs.
* **Shared Google Sheet Log** — A central collaborative spreadsheet structured to ingest struggles.
* **1-Page Template Blueprint** — A reference layout defining the columns for raw error logs, prompt adjustments, and reflections.
* (***Alternate Idea***) - use a google form + sheet - have users fill out a google form for logging difficulties, and search through the linked spreadsheet for already logged encounters.

### How We're Collecting Data
We will deploy this manual probe for **1 week (5 days)**.
* **Participants**: **Team A and Team B (~6 builders total)**. Team C is held back as a fresh control group.
* **Google Sheet Edit/Version History** — Audited daily to log compliance and views.
* **Self-Report Logs** — Standardized questions in weekly updates tracking if they checked the shared sheet and if it unblocked them.
* **Coordinator Overlap Audit** — A qualitative match rate calculation completed at the end of the week.

---

## Build Plan

We leverage a pure no-code Google Drive setup to test baseline documentation and lookup behaviors before building any CLI software.

### Component 1: Shared Google Sheet Setup
A collaborative spreadsheet created in the shared Drive folder.
- **Log Table Structure** — Columns configured for:
  1. **Metadata**: Date, Author, Team, Project Area.
  2. **The Roadblock**: Raw error message or traceback, plus a description of the agent-steering loop.
  3. **The Steer Fix**: The successful prompt adjustment, prompt sequence, or code diff that resolved the issue.
  4. **The Reflection**: A mandatory 2-sentence reflection on what they learned.
  5. **Helpful Matches (Who used this?)**: A list of builder names and dates who successfully used this row to unblock themselves (prevents duplicate logs).

### Component 2: Team Gating & Onboarding Protocol
A mandated workflow steering participants to the shared spreadsheet and onboarding them via written instructions.
- **Onboarding Instructions** — Before starting, participants are sent a 1-page instruction document outlining triggers (loops, time limits) and the shared sheet link.
- **Access Gating** — Participants are instructed that when they hit an agent loop or compile error, they MUST search the Google Sheet first before posting in general help channels.
- **DM Protocol** — Direct messages to the coordinator are permitted only for clarifying questions about the SkillWeave system itself (e.g. logging issues, sheet formatting) but not for standard coding assistance.

### Explicitly Deferred
- **Google Forms Survey Ingestion** (Deferred to avoid form-entry friction)
- **Automated CLI Telemetry Checker** (Deferred to MVP 2)
- **Socratic Suggestion Card webviews** (Deferred to MVP 2)

---

## Data Collection Plan

Detailed instruments in [protostudy-1-instruments.md](./docs-plans/protostudy-1/protostudy-1-instruments.md).

We deploy the probe to Team A and Team B (6 builders) during a 5-day coding sprint.

### Google Sheet Version Audit
Monitored daily by the coordinator.
- **Log Compliance** — How many struggles are successfully recorded in the sheet.
- **Recall Quality** — Reviewing whether developers paste raw logs or write highly summarized text.
- **Sheet Views** — Audited via Google Sheets Activity Dashboard to track how often participants open the file.

### Participant Self-Reports
Collected via weekly progress meetings.
- **Log Utility** — Self-reports on whether they found a peer log and if it helped them resolve their issue.
- **Search Friction** — Feedback on the difficulty of manually searching a spreadsheet compared to general Google search.

### Researcher Overlap Audit
Completed at the end of the week.
- **Technical Overlap Calculation** — Categorizing and matching logged errors to compute the overlap percentage.

---

## Reflection Plan

### Evaluating Assumptions

We're on the right track if we find at least a 30% overlap in reported struggles and if builders report using a peer's log to unblock themselves at least once. Signs for concern include zero overlap (isolated domains), complete bypass of the shared folder, or participant refusal to format logs manually.

**Signals that deepen conviction:**
- Overlap audit reveals $\geq 3$ separate incidents of the same technical/steering issue across different teams.
- Weekly updates report at least 3 instances where a builder resolved a roadblock by copying a peer's logged prompt fix.
- Version history shows builders voluntarily logging at least 1 struggle per week.

**Signals that prompt reconsideration:**
- Zero overlap in reported struggles (each team hits entirely isolated, unique errors).
- Builders log zero entries due to manual copy-paste friction.
- Participants report that it was easier to ask Google/ChatGPT than search the shared spreadsheet.

**Thresholds for directional intuition:**

| Metric | Target | Red Flag | Notes |
|---|---|---|---|
| Overlap Rate | $\geq 30\%$ | $< 10\%$ | Measures if cohort-wide logging is viable. |
| Log Compliance | $\geq 1.5$ logs/dev | $< 0.5$ logs/dev | Low compliance shows manual friction is too high. |
| Peer Help Utility | $\geq 2$ instances | $0$ instances | Verifies if the shared folder provided actual value. |

### Interpreting Exploration

We want to explore the manual logging barrier. How much effort does a manual, 1-row Spreadsheet layout require, and where do builders start truncating their reflections?

**Observations that would shift our thinking:**
- If we find that manual spreadsheet compliance is $<20\%$, we must pivot MVP 2 to prioritize **low-friction telemetry auto-logging** over rich, manual reflections.

---

## Pre-Mortem & Initial Assumptions

Before launching the study, we identify three critical risks that could derail our learning goals, and define how we will interpret them.

### 1. What Defines a "Struggle" (Measurement Strategy)
To ensure consistent reporting, we define an agent-steering struggle as meeting at least one of these criteria:
* **Prompt Loop**: The builder has to write $\geq 3$ consecutive prompts trying to get the agent to fix the same error or logic block.
* **Time Stuck**: The builder spends $\geq 5\text{ to }10\text{ minutes}$ trying to troubleshoot a single agent-generated bug or compilation error.
* **Reversion**: The builder discards the agent's changes entirely and reverts to a previous git commit or code block.

### 2. Risk: Low Struggle Frequency (What if nobody gets stuck?)
* **The Concern**: Participants might report that they completed their coding tasks without hitting any notable agent difficulties.
* **Our Stance**: While this is possible for very simple tasks, previous lab studies show builders encounter steering failures multiple times per day. If they truly hit zero roadblocks, this is a critical finding: it disproves the necessity of building SkillWeave in the first place.
* **Mitigation**: Instruct participants during onboarding to log *any* loop where the agent hallucinated a library API or created a typescript type error, even if they resolved it in 3 minutes.

### 3. Risk: Spreadsheet Search Annoyance (The Search Friction Barrier)
* **The Concern**: Searching a static spreadsheet manually using `Cmd+F` is tedious. As the row count grows, participants will find searching annoying and bypass the lookup entirely, asking coordinators instead.
* **Our Stance**: This friction is the **exact behavioral assumption** MVP 1 is designed to evaluate. If developers find manual search too annoying, it provides the empirical justification for the automated SQLite/CLI watcher matching engine we plan to build in MVP 2. MVP 1 establishes the "friction baseline."

---

## Appendix A: Detailed Focal Questions & Observable Signals

### Assumptions We Are Testing

#### 1. H1: Error Overlap Context *(Thesis: Section 4.1)*
*Do different teams working in the same cohort hit overlapping struggles?*
* **What would deepen conviction**: Multiple teams logging identical library configuration issues or identical agent steering failures (e.g. loops, file location errors).
* **What would prompt reconsideration**: Every team logging highly specific domain logic bugs that cannot possibly apply to others.

#### 2. H3: Value of Peer Dialogue *(Thesis: Section 4.3)*
*Will builders check the shared directory to resolve issues?*
* **What would deepen conviction**: Self-reports showing builders check the folder first when stuck.
* **What would prompt reconsideration**: Participants reporting that they only logged files because it was mandatory and never read the folder.

---

## Appendix B: Stances & Deferred Issues

### 🔵 Strong Stances
- **Google Sheets Platform**: Followed validation plan to use a shared Google Drive spreadsheet for MVP 1 to reduce git-commit friction.
- **Cohort Split**: Maintained the cohort design: Team A/B active (6 people), Team C control, 1-week timeline.

### ⏳ Deferred Issues
*(None logged yet)*
