# Protostudy 1 — MVP 1: Retrospective Database Evaluation

**Companion docs:**
- [protostudy-1-instruments.md](./docs-plans/protostudy-1/protostudy-1-instruments.md) (Author survey forms, cross-reading interview guides)
- [historical-struggles-registry.md](./docs-plans/protostudy-1/historical-struggles-registry.md) (The master database of extracted historical roadblocks)

---

## Overview

**Launch**: August 10, 2026 | **Reflection**: August 14, 2026

This study tests the foundational assumptions of SkillWeave retrospectively. Rather than deploying a live manual logging system (which risks compliance fatigue and sparse error reporting), we ingest existing chatlogs from previous projects (e.g., Iris, Alexis, Varia) to construct a **Historical Struggles Registry**. 

We evaluate this registry using a two-step retrospective study:
1. **Author Verification:** Original authors review their summarized cases to verify correctness and write short Socratic reflections.
2. **Cohort Cross-Reading:** Cohort members review the aggregated registry to identify which peer cases would have helped them resolve similar roadblocks during their own projects.

---

## What We're Testing & Exploring

This study tests two core assumptions from the validation plan:
*   **H1: Error & Friction Overlap** — Do different cohort members working on different projects or in different stages encounter overlapping technical, conceptual, or design struggles?
*   **H3: Value of Peer Dialogue** — Do the synthesized Socratic summaries and contrast questions provide enough clarity and context that peers can understand and apply them to their own work?

Beyond these, we explore:
*   **Synthesis Accuracy & Nuance Loss** — Can an agent-style extraction pipeline represent a user's complex debugging logic and Socratic learning curve accurately, or does it flat-summarize and lose the crucial tacit context?

---

## Study Execution Steps

```text
┌────────────────────────┐
│   Step 1: Ingestion    │ ── Ingest historical chatlogs from examples/chatlogs/
└──────────┬─────────────┘
           │
           ▼
┌────────────────────────┐
│ Step 2: Author Review  │ ── Show cases to original authors.
└──────────┬─────────────┘    Verify accuracy & collect reflections.
           │
           ▼
┌────────────────────────┐
│ Step 3: Cross-Reading  │ ── Show full registry to the rest of the cohort.
└────────────────────────┘    Audit perceived helpfulness & overlap.
```

### Step 1: Ingestion (Database Construction)
*   **Task:** The researcher extracts roadblocks, prompt resolutions, code changes, and potential contrast questions from historical chatlogs in `examples/chatlogs/`.
*   **Output:** The cases are formatted and recorded in the [Historical Struggles Registry](./docs-plans/protostudy-1/historical-struggles-registry.md).

### Step 2: Author Review (Synthesis Validation)
*   **Task:** The researcher sends the extracted cases to their respective original authors.
*   **Survey/Interview:** Original authors complete an evaluation to verify if the summary is accurate and add a 2-sentence reflection on the trade-offs of their fix.
*   **Target:** 100% of authors who are currently active in the cohort.

### Step 3: Cohort Cross-Reading (Overlap & Helpfulness Validation)
*   **Task:** The researcher shares the verified Struggles Registry with the rest of the cohort (~10 people).
*   **Survey/Interview:** Participants review the peer logs and note: (1) if they encountered a similar roadblock, and (2) if the peer's fix and Socratic questions would have helped them resolve it faster.

---

## Evaluation Metrics & Thresholds

| Metric | Target | Red Flag | Notes |
|---|---|---|---|
| **Author Accuracy Rating** | $\geq 4.0 / 5.0$ | $< 3.5 / 5.0$ | Measures if the extracted summary preserves nuance and correctness. |
| **Cohort Perceived Overlap** | $\geq 40\%$ | $< 20\%$ | % of participants who identify at least 1 peer roadblock they also hit. |
| **Peer Helpfulness Rate** | $\geq 30\%$ | $< 10\%$ | % of participants who state a peer's logged fix would have saved them time. |

### Signals that deepen conviction:
*   Authors report that the summarized cases accurately reflect their debugging path without losing important design choices.
*   At least 3 cohort members identify the *exact same* conceptual roadblock (e.g. scoping target users or managing AI-summarization drift) in peer logs.
*   Participants state they would prefer reading these Socratic templates over raw chat transcripts or Slack messages.

### Signals that prompt reconsideration:
*   Original authors report that the extracted summaries are flat and lose the critical context of *why* the fix worked.
*   Zero cohort members find any relevant overlap, indicating that planning and implementation roadblocks are completely isolated across different projects.

---

## Appendix: Stances & Deferred Issues

### 🔵 Strong Stances
*   **No Live Logging Probe:** Replaced the live Google Forms/Markdown logging sprint with a retrospective survey evaluation to bypass participant compliance risk.
*   **Socratic Context Focus:** Prioritized evaluating *Socratic contrast questions* over simple code snippets, checking if conceptual guidance helps across different lifecycles.
