# Document Evolution Log — SkillWeave Protostudy 2 Prep

This evolution log tracks the interactive planning cycles for Protostudy 2 (Streamlined Local CLI). Each cycle captures the human-AI interaction that refined the study plan, observations, and instruments.

---

## Cycle 1: Initial Draft

### User Input
> timing: no timing constraints for this. we can deploy soon as long as code works.
> participants: we'll probably deploy it to students in the lab (around 10) who are using agents to work on projects.
>
> pre study form: https://forms.gle/GeKiR8FdNY1vjbqE8 (users fill this out before using the tool, before protostudy begins)
> usage form: https://forms.gle/3F4GkdkBAgjuzuoFA (users will fill out this form while doing their day to day tasks, and fill it out whenever skill weave gets triggered)
> post study form: https://forms.gle/wWTrsB4VGiJSM7ac8 (users fill this out at the end of the protostudy, after using the tool)

### AI Draft Summary
Scaffolded the initial draft of the Protostudy 2 plan and instruments matching the Streamlined Local CLI scope. Translated the abstract hypotheses from the validation plan (H2, H4, H5) into explicit observable signals and observation protocols. Linked the user's provided Google Forms (Pre-Study, Usage, and Post-Study) directly into the data collection flow and appended draft exit interview questions.

### What the AI added beyond what the user said
- **Build Plan**: Defined the concrete CLI watcher script features (telemetry checker daemon, System Artifact output cards in `peer_suggestion_card.md` to bypass Electron overlay limitations, and Socratic webview pane redirection).
- **Data Collection Sources**: Integrated the user's Google Forms with telemetry log auditing (idle times, reversions) and structured exit interview topics.
- **Reflection Plan**: Proposed concrete conviction/reconsideration signals and established directional threshold metrics (e.g. reflection quality rates, suggestion override rates).
- **Appendix A Breakdown**: Drafted high-level signals for H2 (Steering Breakdown), H4 (Scaffolding adoption), and H5 (Timeline usability).

---

## Cycle 2: Alignment with MVP 2 & Protostudy 1 Reflections

### User Input
> can you update protostudy 2 so that it matches MVP 2 from validation doc, and also any new content from protostudy 1?
> an important thing to note is that this tool isn't designed solely for developers. non develoeprs will use it too for other things, for example planning.

### AI Draft Summary
Refined and updated the study plan (`protostudy-2.md`) and data collection instruments (`protostudy-2-instruments.md`) to align with MVP 2 as defined in the SkillWeave validation plan and integrate key insights and scoping adjustments from the MVP 1 reflection.

### Key Modifications
*   **Hypothesis Synchronisation**: Renamed H4 to "Scaffolding vs. Direct Answers" and H5 to "Auxiliary Pane Usability" to restore alignment with the validation plan. Redefined H5 to evaluate layout usability (the right-side Artifacts panel) instead of timeline expansion.
*   **Support for Non-Developers**: Replaced developer-focused terminology (e.g., "developer," "code snippets," "coding sprint") with broader, generalized phrasing (e.g., "cohort member," "builder," "workflow task") across all documents, explicitly accounting for planning, design, and writing workflows.
*   **Refinement of Intervention Flow**: Integrated the proactive, telemetry-triggered matching model from the MVP 1 reflection. Added build details for the **In-Situ Resolution Detector** (non-blocking resolved check popup), **User Confirmation Gate** (constrained editing), **Manual Keyword Search Fallback** widget, and **Onboarding Expectation Gating**.
*   **Stances & Deferred Issues**: Appended all strong design stances and deferred challenges (e.g., telemetry false positives, onboarding warnings, team-internal search routing) from the MVP 1 reflection to Appendix B.

