# Document Evolution Log — Causeway Gen-UI Research Landscape

<!-- A structured record of how the Research Landscape section of product-thesis.md evolved through the planning session.
     Each cycle captures the interaction between human and AI that produced a change
     in the document. User input is always quoted verbatim.

     This file is built in two phases:
     - Phase 1 (during session): Cycle records are appended after each critique-respond-update turn.
     - Phase 2 (end of session): Summary Statistics and Evolution by Section are generated. -->

---

## Cycle 1: Initial Draft

### User Input
> I'm honestly new to research as an undergraduate student, are you able to find any relevant threads?

### AI Draft Summary
Developed a comprehensive research thesis for Causeway Gen-UI. Identified three relevant research threads: (1) End-User Customization of Learning Scaffolding vs. Curational Bottlenecks, (2) Generative UI in Situated Workspace Environments, and (3) Pedagogical Friction vs. Scaffolding Bypassing. Suggested three theoretical groundings: Legitimate Peripheral Participation (LPP), Zone of Proximal Development (ZPD) & Scaffolding, and Productive Struggle. Outlined two knowledge gaps (Dynamic Scaffolding vs. Fixed Curation, and Designing Pedagogical Friction) and mapped out a systems paper knowledge contribution targeting CHI or CSCW.

### What the AI added beyond what the user said
- Formulated three distinct research threads (Customization vs. Curation, Situated Generative UI, Pedagogical Friction vs. Bypassing) drawing from CSCL, intelligent tutoring, and software engineering AI literature.
- Recommended and mapped three specific educational theories (Lave & Wenger's LPP, Vygotsky's ZPD, Kapur's Productive Struggle) to show how they justify Causeway's design choices.
- Surfaced two knowledge-based research gaps regarding on-demand visual tool customization and the design of pedagogical friction.
- Formulated the paper contribution framing (systems/empirical study), novelty defense (context-awareness advantages over general ChatGPT), paper type, and target venues (CHI/CSCW).

---

## Cycle 2: Walkthrough Mode Scope Correction

### AI Critique
No AI critique triggered this cycle. The user identified stale collaborative/Practice Mode/CSCL/micro-role references in the research thesis that contradicted the walkthrough-only scope established in the validation plan and product thesis.

### User Response
> You make a lot of mentions of practice mode... I want to make clear that there are two modes in Causeway right now, Walkthrough and Practice Mode, with walkthrough being the more individual guide-based mode and practice mode being the collaborative task-based mode. We are strictly focusing on walkthrough mode for this gen UI proposal.

### Document Delta
| Field | Before | After |
|---|---|---|
| Thread 1: Core Tension | "collaborative software engineering environments" | "guided walkthrough-based learning environments" |
| Thread 1: What the field knows | "Computer-Supported Collaborative Learning (CSCL) platforms utilize structured collaboration scripts and micro-roles" | "Structured learning platforms utilize guided walkthroughs and task sequences" |
| Theory framing note | "LPP to frame the student's entry into collaborative practice" | "LPP to frame the student's entry into authentic practice through guided walkthroughs" |
| LPP heading & content | "For the micro-role apprenticeship structure" — Components vs. Containers role pairing | "For the walkthrough apprenticeship structure" — guided task sequences |
| ZPD content | "workspace state (active files, micro-roles)" | "workspace state (active files, walkthrough step context)" |
| Theory chain | "collaborative micro-roles inside Causeway" | "guided walkthrough progression inside Causeway" |
| Overarching gap | "Prior work in CSCL and developer environments" | "Prior work in educational technology and developer environments" |
| Gap 1: Why this project | "Causeway's micro-role architecture" | "Causeway's walkthrough architecture" |
| Knowledge Contribution | "collaborative developer apprenticeships" | "guided developer apprenticeships" |
| Novelty Defense | "student's active micro-role" | "student's active walkthrough step" |
| Target Venue | "CHI... or CSCW (secondary venue)" | "CHI... or L@S (secondary venue)" |
| Audience | "Researchers in CSCL, intelligent tutoring systems" | "Researchers in intelligent tutoring systems, learning sciences" |
| Appendix | Empty | Added 3 stances: Walkthrough Mode Scope, LPP Reframed for Walkthroughs, Venue Shift from CSCW to L@S |

### What shifted
- This was a user-initiated correction, not an AI-driven critique. The research thesis contained extensive collaborative framing (CSCL, micro-roles, Components/Containers pairing, CSCW venue) inherited from when the project included Practice Mode.
- LPP's application was fundamentally reframed: instead of mapping to collaborative micro-roles, it now maps to the walkthrough's guided task progression (periphery = simpler walkthrough steps, core = complex steps).
- The secondary venue shifted from CSCW to L@S, reflecting the individual learning focus.

---

## Cycle 3: Research Thread Restructuring

### AI Critique
No AI critique triggered this cycle. The user proposed a fundamental restructuring of the research threads from three narrow threads to two primary threads.

### User Response
> I want to refine to include two primary research threads, one of having new ways to conduct research. Instead of current methods like diary studies and surveys, it would be interested to use gen ui in a way to give immediate feedback to research participants, changing UI and explanations on the fly. The other research thread is more of what we've already been talking about, using it to assist learning for students. Can we get started on these research threads?

### Document Delta
| Field | Before | After |
|---|---|---|
| Thread count | 3 threads (Curation Bottlenecks, Generative UI in Workspaces, Pedagogical Friction) | 2 threads (Gen-UI as Research Methodology, Gen-UI as Personalized Learning Scaffold) |
| Thread 1 | End-User Customization vs. Curation Bottlenecks | Generative UI as a Research Methodology — entirely new thread about using Gen-UI as a research instrument for real-time adaptive feedback |
| Thread 2 | Generative UI in Situated Workspace Environments | Generative UI as Personalized Learning Scaffold — consolidated from all 3 prior threads into a unified learning thread with sub-tensions |
| Thread 3 | Pedagogical Friction vs. Scaffolding Bypassing | Folded into Thread 2 as a sub-tension |

### What shifted
- The user introduced an entirely new research dimension: Gen-UI as a research methodology, not just a learning tool. This positions the project as contributing to HCI methods (how we conduct research) in addition to learning technology design.
- The three prior threads were consolidated into a single learning scaffold thread, preserving their tensions as sub-points. This tightens the structure and creates a clear two-pillar architecture: methods contribution + design contribution.

---

<!-- Append one cycle per critique-respond-update turn. Use continuous numbering across all sections. -->
