# Document Evolution Log — SkillWeave Protostudy 1 Prep

This evolution log tracks the interactive planning cycles for Protostudy 1 (Manual Sharing Probe). Each cycle captures the human-AI interaction that refined the study plan, observations, and instruments.

---

## Cycle 1: Initial Draft

### User Input
> can we actually save this prostudy idea for a different time? for now I want you to help me make a protostudy based on the 3 google forms I sent you. so far I'm thinking about having it be 3 days long? not sure if that's long enough.
>
> pre study form: https://forms.gle/GeKiR8FdNY1vjbqE8
> usage form: https://forms.gle/3F4GkdkBAgjuzuoFA
> post study form: https://forms.gle/wWTrsB4VGiJSM7ac8

### AI Draft Summary
Pivot from the automated CLI prototype plan (MVP 2) to a simplified, low-friction study plan centered strictly around the 3 Google Forms (Pre-Study, Usage, and Post-Study) and manual peer sharing. Scaffolded the Protostudy 1 planning documents. Proposed extending the timeline from 3 days to 5 days (1 week) to ensure participants hit enough coding roadblocks and experience peer logs, while outlining the exact manual sharing mechanism.

### What the AI added beyond what the user said
- **Operational Timeline**: Suggested a 5-day duration (Monday–Friday) as the baseline for coding cycles, explaining the trade-offs of 3 days.
- **Manual Logging Process (Build Scope)**: Defined a no-code "build" where the coordinator manually exports new usage form responses to a shared markdown file/sheet at the end of each day.
- **Data Collection Plan**: Integrated the 3 provided Google Forms directly with coordinator observations and exit interviews.
- **Reflection Plan**: Formulated conviction/reconsideration signals specifically for error overlap (H1) and peer log value (H3).

---

## Cycle 2: Narrowing Participant Scope

### AI Critique
1. 🚨 **Participant Scope Overhead**: We proposed a 10-person study. However, the manual ingestion and spreadsheet-to-markdown sync workload for a 10-person cohort might overload the coordinator if participants hit many errors. A smaller 2-person formative pilot is safer to test the logistics first.
2. 🚨 **Error Overlap Validation (H1)**: A 2-person sample is statistically too small to validate cohort-wide error overlap rates. We must pivot H1 to be an exploratory question rather than a primary hypothesis.

### User Response
> for the first protostudy i think i will only test it on 2 people just to see how the prototype works (since i think it's still iffy) and just to get a general idea of things before conduting a more formal protostudy

### Document Delta
| Field | Before | After |
|---|---|---|
| Overview | Sample size: 10 builders | Sample size: 2 builders |
| What We're Testing & Exploring | H1: Error Overlap Context (Core hypothesis) | H1: Error Overlap Context (Exploratory / Secondary) |
| Reflection Plan (Evaluating Assumptions) | Expect $\geq 30\%$ overlap, $\geq 5$ uses | usability feedback, $\geq 1$ use |
| Reflection Plan (Thresholds) | Overlap Rate: $\geq 30\%$ | Form Usability Score: $\geq 4.0/5.0$ |

### What shifted
- **User narrowed scope**: User agreed to downscale the pilot to 2 participants (usability dry-run / pre-pilot) to test the prototype mechanics before committing to a larger cohort.
- **Hypothesis deprioritized**: Reclassified H1 (Error Overlap) as secondary/exploratory due to the small sample size.

---

## Cycle 3: Usability Study Duration and Sync Clarification

### AI Critique
1. 🚨 **Duration Trade-Offs**: Since this is a 2-person pilot testing form usability and ingestion friction rather than statistical learning outcomes, a 5-day timeline introduces unnecessary delay. A 3-day timeline is cleaner for rapid iteration.
2. 🚨 **Sync Loop Ambiguity**: The term "parses" in the daily sync loop was ambiguous and suggested automation. Since this is a no-code probe, it should be clarified that parsing is done manually by the coordinator.

### User Response
> based on protostudy-1.md, im not really understanding this part, and how the parsing would look like?
> ### Component 2: Manual Sync Loop
> - **Daily Markdown Exporter** — Coordinator parses the Google Sheets response sheet at 6:00 PM PST daily and writes new entries to `shared-peer-logs.md`.
>
> also since this is only testing usability and has 2 people, do you think it's better to do 3 or 5 days?

### Document Delta
| Field | Before | After |
|---|---|---|
| Overview (Dates) | Launch: Aug 10 | Reflection: Aug 15 | Launch: Aug 10 | Reflection: Aug 13 |
| How We're Collecting Data | Duration: 5 days (1 work week) | Duration: 3 days |
| Build Plan (Component 2) | parses the Google Sheets response sheet... | manually reads responses, cleans credentials, appends... |
| Data Collection Plan | 5-day coding sprint, after day 5 | 3-day coding sprint, after day 3 |

### What shifted
- **User selected duration**: User agreed that for a 2-person usability pilot, 3 days is appropriate to test the feedback loop quickly.
- **Clarified manual sync**: Refined the manual exporter definition to make it explicit that the coordinator (human researcher) acts as the manual compiler, sanitizing and formatting the form submissions.

---

## Cycle 4: Launch Date Adjustment and Loop Purpose Clarification

### AI Critique
1. 🚨 **Incorrect Date Span**: A 3-day timeline starting August 10 and ending August 13 spans 4 days (Aug 10, 11, 12, 13). We should adjust the dates to a true 3-day span (e.g. Aug 5, 6, 7) and support the user's request to start earlier.

### User Response
> btw aug 10-13 is 4 days. i'm also thinking of having it start earlier. 
>
> also what is the purpose of ### Component 2: Manual Sync Loop? will the ai do something to it later? or is it just for my own information?

### Document Delta
| Field | Before | After |
|---|---|---|
| Overview (Dates) | Launch: Aug 10 | Reflection: Aug 13 | Launch: Aug 5 | Reflection: Aug 7 |

### What shifted
- **User adjusted timeline**: Corrected the date duration calculation and shifted the launch earlier to Wednesday, August 5, 2026 – Friday, August 7, 2026.
- **Clarified sync loop purpose**: Explained that while Component 2 is currently manual (Wizard of Oz) for MVP 1, it defines the behavioral contract and process blueprint that the CLI software will automate in MVP 2.
