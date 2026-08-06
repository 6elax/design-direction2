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

---

## Cycle 5: Alignment Reset to Validation Plan MVP 1

### AI Critique
1. 🚨 **Hypothesis Mismatch via Form Gating**: Introducing multi-page Google Forms for MVP 1 deviated from the validation plan's core premise of a lightweight, low-friction, 1-page copy-paste template. Forms add unnecessary reporting friction and hide the raw Markdown-based collaboration.

### User Response
> how about can you ignore everything that's currently in the protostudy1.md, and rewrite/make a new protostudy 1.md that matches what validation plan mvp 1 says? since im reading it, and the current protostudy1 has google forms instead, which i don't think does the trick.

### Document Delta
| Field | Before (Cycle 4) | After (Cycle 5) |
|---|---|---|
| Launch & Reflection | Aug 5 – Aug 7 (3 days) | Aug 10 – Aug 24 (2 weeks) |
| Participant Scale | 2 builders (pilot) | 3 active lab teams (6–8 builders) |
| Build Plan / Scope | 3 Google Forms, daily spreadsheet-to-md sync | No-code workspace directory, copy-paste `struggle-template.md` |
| Hypotheses Tested | H3 (Primary), H1 (Exploratory) | H1 (Error Overlap) & H3 (Value of Peer Dialogue) |
| Data Collection | Google Forms spreadsheet logs, interviews | Git folder commits, weekly reports, coordinator audit |

### What shifted
- **User reset scope to Validation Plan**: The user rejected the Google Forms pivot and requested a strict return to the original validation plan's MVP 1 design: a 2-week, 3-team manual sharing probe utilizing a shared workspace directory and a 1-page copy-paste template.
- **Created Template Files**: Scaffolded the actual `struggle-template.md` and created the `shared-logs/.gitkeep` directory inside the repository to facilitate the no-code build.

---

## Cycle 6: Google Sheet Platform Choice and Cohort Split Alignment

### AI Critique
1. 🚨 **High Repository Commits Friction**: Forcing builders to write separate markdown files and commit them to git for every struggle increases workflow friction. A shared Google Sheet allows instant row-based logging.
2. 🚨 **Target Cohort Inconsistency**: We mapped all 10 builders to MVP 1. However, the validation plan timeline specifies that Team C must be held back as a fresh control group. MVP 1 must strictly target Team A and Team B (approx. 6 builders total) for 1 week.

### User Response
> im wondering, for protostudy 1, why not just have a google sheet or something, and log everything there? at least that was my understanding from: "Deploy a shared Google Drive/GitHub folder" and that mvp 1 would be "A shared Google Drive folder or a designated repo directory.". 
>
> also reference this from another chat: 
> Phase 1 — MVP 1: Manual Sharing Probe (No-Code)
> Who participates: Team A and Team B (~6 people total).
> Why: We hold back Team C as your "fresh control group" for later phases.
> What you track: Have them log their struggles in a shared directory for 1 week.
> [...]
> ^ After looking at this again, i realize most of this is also mentioned in the validation plan timeline. please follow the validation plan :/

### Document Delta
| Field | Before (Cycle 5) | After (Cycle 6) |
|---|---|---|
| Launch & Reflection | Aug 10 – Aug 24 (2 weeks) | Aug 10 – Aug 14 (1 week / 5 days) |
| Participant Scale | 3 active lab teams (6–8 builders) | Team A and Team B (~6 builders, Team C held back as control) |
| Platform / Tooling | Workspace Markdown files (`shared-logs/`) | Shared Google Sheet in a Google Drive folder |
| Data Collection | Git commits and folder version history | Sheets edit/version history & weekly updates self-reports |

### What shifted
- **User enforced Validation Plan constraints**: Shifted the platform from local git files to a shared Google Sheet inside a Google Drive folder.
- **Cohort aligned**: Restored the cohort split strategy (Team A & B participate, Team C serves as control).
- **Duration adjusted**: Reduced the duration from 2 weeks to 1 week (5 days) to match the Phase 1 manual probe specification.
- **Cleaned Workspace**: Deleted the deprecated local markdown template and logs folder to keep the repository tidy.

---

## Cycle 7: Pre-Mortem, Struggle Definitions, and Search Friction Risk

### AI Critique
1. 🚨 **Lack of Operational Definitions**: We didn't define what technically constitutes a "struggle" (leading to inconsistent reporting). We must specify measurable criteria (time stuck, prompt count, reversions).
2. 🚨 **Skepticism on Search Efficacy**: Manual search in a spreadsheet scales poorly and causes high lookup friction. However, documenting this "search annoyance threshold" in the pre-mortem is necessary because it establishes the baseline empirical justification for MVP 2's automation.

### User Response
> by the way, what does MVP stand for?
>
> also some of my concerns: for this protostudy 1, what if most people don't even have many problems/difficulties to beign with? and what exactly is considered a problem/difficulty? how is that measured?
> also, how are overlapped roadblocks logged? like do users log every issue they come across, then check the spreadsheet for similar problems that may help them? and if they find nothing, they move on? to be honest i'm not sure how effective searching the spreadsheet is, since if there are tons and tons of entries it may be hard and annoying for the user to find a similar/matching error.

### Document Delta
| Section | Before | After |
|---|---|---|
| Pre-Mortem | *(To be drafted during Step 5 review)* | Added defined struggle parameters, low frequency mitigations, and search annoyance risk stance. |

### What shifted
- **Defined Struggle Metric**: Set explicit triggers for logging (spent $\geq 5\text{-}10$ minutes, prompted $\geq 3$ times, or performed git reversion).
- **Framed Search Friction as Baseline**: Agreed that spreadsheet search is highly annoying at scale. Documented this risk in the Pre-Mortem to prove that the failure/frustration of manual lookup in MVP 1 serves as the validation threshold that justifies building the automated watcher in MVP 2.

---

## Cycle 8: Lookup Success Tracking and Duplicate Prevention

### AI Critique
1. 🚨 **Friction of Duplicate Entries**: If Developer B uses Developer A's fix, requiring Developer B to log a new row with the same error/fix creates redundancy and increases logging friction. We need a way to track lookup success without duplicate rows.

### User Response
> is the idea that if a user comes upon an error, they log the error, and if they're able to fix it, they then answer the columns "The Steer Fix (Prompts / Diff)" and "2-Sentence Reflection"? what if a user was able to fix it, only because they looked at another user's logs? what would they then put for those last 2 columns?

### Document Delta
| Section | Before (Cycle 7) | After (Cycle 8) |
|---|---|---|
| Platform Columns | 4 columns: Metadata, Roadblock, Fix, Reflection | 5 columns: Added "Helpful Matches (Who used this?)" column |
| Instruments Sheet Schema | 7 columns | 8 columns (Added Helpful Matches column definition) |

### What shifted
- **Introduced Match Tracking Column**: Added the `Helpful Matches (Who used this?)` column to the Google Sheet.
- **Formulated Reuse Protocol**: Instructed that if a participant successfully uses a peer's logged fix, they do *not* write a new row. Instead, they simply append their name and date to the peer's existing row in the `Helpful Matches` column, giving the coordinator a perfect running count of peer log utility (H3) with zero duplicates.

---

## Cycle 9: Written Onboarding and DM Gating Boundaries

### AI Critique
1. 🚨 **Enforcement Loophole**: Instructing users not to DM the coordinator creates a barrier when users encounter genuine system bugs or usability questions.
2. 🚨 **Onboarding Friction**: A full "onboarding day" adds unnecessary project overhead. A simple, 1-page written onboarding instructions guide sent before launch is sufficient.

### User Response
> for the critiques, something to note is that i am not a lead or director or anything, if users trying out prototype 1 get confused about the system itself, i think it makes sense for them to dm and ask clarifying questions to me. but for regular work, i dont think they will dm me. 
> i don't think we need an "onboarding day", maybe a list of instructions is enough, have them read through those then have them start logging things? i don't really understand your "cold launch" part tbh.

### Document Delta
| Section | Before (Cycle 8) | After (Cycle 9) |
|---|---|---|
| protostudy-1.md (Component 2) | Access Gating (checking sheet first before asking coordinators) | Team Gating & Onboarding Protocol (1-page onboarding guide, whitelisted DMs for system usability, blocked DMs for coding help) |
| protostudy-1-instruments.md | No onboarding text | Added Participant Onboarding Instructions section |

### What shifted
- **Refined DM Boundaries**: Clarified that while coding roadblocks must refer to the shared spreadsheet, direct messages to the coordinator are whitelisted and encouraged for clarifying questions regarding the logging system itself.
- **Substituted Onboarding Guide**: Replaced the "Onboarding Day" proposal with a 1-page written instructions guide embedded directly in the instruments, to be distributed before launch.

---

## Cycle 10: Mockup Ingestion in Instruments Reference

### AI Critique
1. 🚨 **Focal Example Separation**: Describing the spreadsheet structure in text leaves room for formatting misunderstandings. Appending the visual mockup table to the instruments document provides a single reference point.

### User Response
> at the end of protostudy-1-instruments, can you also include an example/concrete picture of what the table looks like?

### Document Delta
| Section | Before (Cycle 9) | After (Cycle 10) |
|---|---|---|
| protostudy-1-instruments.md | Text-only description of columns | Appended "Concrete Google Sheet Mockup Example" table at the bottom of the file |

### What shifted
- **Embedded Mockup Table**: Copied the visual mockup table representing the Google Sheet columns and mock rows directly into the instruments file as an operational reference.
