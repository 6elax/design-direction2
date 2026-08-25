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
    *   Removed metadata headers (author, key, date) from the top of the file to simplify layout.
    *   Added **Peer Roadblock & Summary** (split into roadblock and resolution paragraphs) and **Verbatim Dialogue History** sections.
    *   Formatted dialogue history so user turns are plain text and agent turns are blockquotes (`>` prefixed), with blank lines between turns.
*   **NEW**: [`pending-struggle-log.md`](file:///Users/alexisluo/tech4good/design-dir-2/docs-plans/protostudy-2/pending-struggle-log.md)
    *   Created a mockup showing the dynamic `pending_struggle_log.md` review card, structuring summary into separate Roadblock/Resolution paragraphs, formatting dialogue history (spaced turns, user turns as plain text, agent turns with `>` sidebar), and correcting the tip.
*   **Modified**: [`protostudy-2-evolution.md`](file:///Users/alexisluo/tech4good/design-dir-2/docs-plans/protostudy-2/protostudy-2-evolution.md)
    *   Recorded Cycle 2 planning decisions, scope refinements, and timeline scaling adjustments.

### 6. Modified Prototype Script & Skill Rules
*   **Modified**: [`skill-weave-agent.ts`](file:///Users/alexisluo/tech4good/design-dir-2/skill-weave/scripts/skill-weave-agent.ts)
    *   Added `--mode view-peer` to generate `.t4g/skill-weave/peer_workspace_case_study.md` on the right side, rendering **Peer Roadblock & Summary** (separate roadblock and resolution paragraphs) and **Verbatim Dialogue History** (blank lines between turns, user turns as regular text, agent turns with blockquote sidebars). Removed the metadata headers.
    *   Added `--mode draft-log` to generate `.t4g/skill-weave/pending_struggle_log.md` inside a hidden, gitignored `.t4g/skill-weave/` folder with updated instructions (commenting/Proceed), divided paragraphs, and dialogue formatting.
    *   Updated `--mode log` to accept `--file` parameter which reads the saved review card file, parses out user comments, extracts the Roadblock/Resolution summaries and verbatim dialogue history, and commits them to Firebase Firestore.
*   **Modified**: [`SKILL.md`](file:///Users/alexisluo/tech4good/design-dir-2/skill-weave/SKILL.md) & [`rules.md`](file:///Users/alexisluo/tech4good/design-dir-2/skill-weave/rules.md)
    *   Updated progressive disclosure layout and review gating instructions.
*   **Database Updated**: Migrated database backend to Firebase Firestore struggles collection, using dynamic lookup links to reference parent chat session documents.
*   **Directory Cleanup**: Purged temporary `.agents/` folder to align with the core `skills` repository installation structure (retaining only the standard project `skill-weave/` folder).

### 7. Core Skills Repository Synchronization
*   **Synced Files**: Copied all updated files from `skill-weave/` folder to `skills/plugins-in-progress/agent-learning/skills/skillweave/`:
    *   `skill-weave-agent.ts` (script with Firestore bindings, roadblock/resolution summaries, dialogue line spacing, and metadata removals)
    *   `SKILL.md` (progressive disclosure layouts and pane templates matching the new format)
    *   `skillweave-setup-usage-guide.md` (renamed setup instructions guide mapping out Firestore credentials config, seeding scripts, and trigger hook commands)
    *   `skills/plugins-in-progress/agent-learning/rules/GEMINI.md` (added automatic trigger rules hook so they deploy directly when users run `bun run setup` globally)

---

## Verification Results

*   **Link Verification**: All document links, relative cross-references, and line anchor links have been verified and are fully resolved.
*   **Structural Verification**: All headers, tables, and lists are properly closed and formatted in standard Markdown.
*   **Validation Plan Sync**: Hypotheses (H2, H4, H5) and cohort/sprint sizes are 100% matched across the main validation strategy and the per-MVP study protocols.
