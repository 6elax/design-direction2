# Walkthrough: Protostudy 2 Synchronization & Terminology Generalization

I have successfully updated all relevant files in the `docs-plans/protostudy-2/` directory, the main validation plan, and the `skill-weave` repository files to synchronize Protostudy 2 with MVP 2 of the validation plan, integrate key design and research insights from the MVP 1 reflection, generalize all terminology to support non-technical and non-coding tasks (e.g. study planning, writing, and UI/UX design), scale the study timeline down to 5 days, and align the prototype implementation with Antigravity 2.0's real capabilities (comments on artifacts + Proceed button).

## Changes Made

### 1. Unified Research Hypotheses & Core Scope
*   **Modified**: [`protostudy-2.md`](file:///Users/alexisluo/tech4good/design-dir-2/docs-plans/protostudy-2/protostudy-2.md)
*   **Updates**:
    *   Renamed **H4** to **"Scaffolding vs. Direct Answers"** and **H5** to **"Auxiliary Pane Usability"** to match [`validation-plan.md`](file:///Users/alexisluo/tech4good/design-dir-2/docs-plans/project-foundations/validation-plan.md).
    *   Redefined **H5** to assess the usability and layout of the IDE's right-side **Artifacts panel** (Auxiliary Pane) rather than timeline log expansion.
    *   Updated the Overview to pivot the CLI companion from manual lookup to a proactive, telemetry-triggered inline suggestion card engine.
    *   Generalised all role and task descriptors (e.g. replacing "developer" with "cohort member" or "builder", and "coding sprint" with "workflow task/sprint").
    *   Scaled down the study timeline from 14 days to **5 days** (August 15 to August 20, 2026) and scaled down participant size to **up to 5 cohort members** to reduce compliance fatigue and ensure hyper-focused feedback during a single sprint cycle.

### 2. Expanded Build Plan with MVP 1 Reflections
*   **Modified**: [`protostudy-2.md`](file:///Users/alexisluo/tech4good/design-dir-2/docs-plans/protostudy-2/protostudy-2.md)
*   **Updates**:
    *   Added **Interactive Socratic Logging Gating**: Renders the AI-drafted struggle, resolution, and contrast questions inside a temporary review card (`pending_struggle_log.md` inside a hidden `.t4g/skill-weave/` folder) rendered side-by-side with their work in the IDE's Artifacts panel.
    *   Enforced **Concise Socratic Cards**: Strict UI limit of maximum 2 concise questions to combat reading fatigue.
    *   Added **Manual Keyword Search Fallback** and **Onboarding Expectation Gating** (Anti-Lazy Prompting Warning).
    *   Updated Appendix B with strong design stances (such as no team-internal recommendation bias, cross-domain explanation pipelines, and plain English descriptions) and deferred issues.

### 3. Integrated Instruments & Observation Protocols
*   **Modified**: [`protostudy-2-instruments.md`](file:///Users/alexisluo/tech4good/design-dir-2/docs-plans/protostudy-2/protostudy-2-instruments.md)
*   **Updates**:
    *   Aligned observation protocols, survey questions, and exit interview debrief prompts to evaluate the new features (review card verification, onboarding warnings, max-2 concise Socratic questions, manual keyword search fallback).
    *   Generalised demographics and tasks to cover non-coding tasks (planning, design, writing).
    *   Scaled study duration references down to **5 days** and **1 week** across exit interview and survey guides.
    *   Aligned metrics to track Workspace Pane navigation rate and interactive review card approval/edit rates.
    *   Replaced "Peer Reflection" and "Workspace Materials" references in data questions with "roadblock summary or diff" and "Socratic case studies" to match the database changes.

### 4. Synced Allocation Plan in Validation Strategy
*   **Modified**: [`validation-plan.md`](file:///Users/alexisluo/tech4good/design-dir-2/docs-plans/project-foundations/validation-plan.md)
*   **Updates**:
    *   Scaled the MVP 2 allocation plan and timeline details to reflect testing with **up to 5 cohort members** during a **5-day workflow sprint**.

### 5. Layout Mockups & Evolution Logs
*   **Modified**: [`peer-workspace-pane.md`](file:///Users/alexisluo/tech4good/design-dir-2/docs-plans/protostudy-2/peer-workspace-pane.md)
    *   Removed the obsolete "Peer Reflection" and "Workspace Materials" sections, and deleted the non-functional search box mockup.
    *   Added **Peer Roadblock & Summary** (split into distinct **Roadblock** and **Resolution** bold paragraphs) and **Verbatim Dialogue History** sections (formatted with blank lines between turns) to render actual conversation logs.
*   **NEW**: [`pending-struggle-log.md`](file:///Users/alexisluo/tech4good/design-dir-2/docs-plans/protostudy-2/pending-struggle-log.md)
    *   Created a mockup showing exactly how the dynamic `pending_struggle_log.md` review card will render in the right-side Artifacts panel, structuring the struggle summary into separate Roadblock/Resolution paragraphs, formatting dialogue history with blank lines, and correcting the tip to explain comment-based review and clicking **Proceed** (no command line commits).
*   **Modified**: [`protostudy-2-evolution.md`](file:///Users/alexisluo/tech4good/design-dir-2/docs-plans/protostudy-2/protostudy-2-evolution.md)
    *   Recorded Cycle 2 planning decisions, scope refinements, and timeline scaling adjustments.

### 6. Modified Prototype Script & Skill Rules
*   **Modified**: [`skill-weave-agent.ts`](file:///Users/alexisluo/tech4good/design-dir-2/skill-weave/scripts/skill-weave-agent.ts)
    *   Added `--mode view-peer` to generate `.t4g/skill-weave/peer_workspace_case_study.md` on the right side, rendering the **Peer Roadblock & Summary** (separate roadblock and resolution paragraphs) and **Verbatim Dialogue History** (blank lines between turns) sections.
    *   Added `--mode draft-log` to generate `.t4g/skill-weave/pending_struggle_log.md` inside a hidden, gitignored `.t4g/skill-weave/` folder with updated instructions (commenting/Proceed), divided paragraphs, and resolved `conversation_id` referencing the `chats` collection.
    *   Updated `--mode log` to accept `--file` parameter which reads the saved review card file, parses out user comments, extracts the Roadblock/Resolution summaries and verbatim dialogue history, and commits them to Firebase Firestore.
*   **Modified**: [`SKILL.md`](file:///Users/alexisluo/tech4good/design-dir-2/skill-weave/SKILL.md) & [`rules.md`](file:///Users/alexisluo/tech4good/design-dir-2/skill-weave/rules.md)
    *   Updated the progressive disclosure layout and review gating instructions to match the Antigravity 2.0-native flow (Roadblock & Summary split, Verbatim Dialogue History with blank lines, comments for editing, Multiple-Choice rating via `ask_question` widget, and Proceed button).
*   **Database Updated**: Migrated database backend from Supabase to Firebase Firestore struggles collection, using dynamic lookup links to reference parent chat session documents in the chats collection. Deleted obsolete `schema.sql`.

---

## Verification Results

*   **Link Verification**: All document links, relative cross-references, and line anchor links have been verified and are fully resolved.
*   **Structural Verification**: All headers, tables, and lists are properly closed and formatted in standard Markdown.
*   **Validation Plan Sync**: Hypotheses (H2, H4, H5) and cohort/sprint sizes are 100% matched across the main validation strategy and the per-MVP study protocols.
