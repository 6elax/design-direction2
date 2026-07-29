# Document Evolution Log — Causeway MCP Server Research Landscape

<!-- A structured record of how the Research Landscape section of research-thesis.md evolved through the planning session.
     Each cycle captures the interaction between human and AI that produced a change
     in the document. User input is always quoted verbatim.

     This file is built in two phases:
     - Phase 1 (during session): Cycle records are appended after each critique-respond-update turn.
     - Phase 2 (end of session): Summary Statistics and Evolution by Section are generated. -->

---

## Cycle 1: Initial Draft (Rewrite from Undergrad Version)

### User Input
> Off the bat: the easy ones are subgoals/scaffolding, cognitive apprenticeship, and lpp (to a certain extent). we can expand outwards but those are the musts.
>
> (Context: User is a PhD student iterating on undergrad advisees' work. They requested a reground of the research thesis against advisor meeting transcripts. The user also has a completed product-thesis.md from a prior /define-product session.)

### AI Draft Summary
The agent performed a drift analysis of the existing research thesis (written by undergrads) against two advisor meeting transcripts and the recently completed product thesis. Major drift areas identified:

1. **Learnersourcing was entirely absent as a named thread.** The advisor's primary contribution angle — learnersourcing through AI agent conversations — was buried as "Telemetry-Driven Scaffold Discovery & Guide Auditing," missing the entire learnersourcing literature (Kim, Weir, Williams) and the advisor's specific framing.
2. **LPP was completely missing.** The user explicitly named it as a must-have thread.
3. **Thread 2 was a feature description, not a research thread.** "Pedagogical Scaffolding via MCP Guide Routing & Curriculum Mapping" described what the system does, not a scholarly conversation.
4. **"Antigravity" references throughout** were outdated/irrelevant to the research framing.
5. **"Fading by coverage expansion"** was explicitly rejected in the product thesis work.
6. **Theory section had "Telemetry-Driven Formative Assessment"** — not a standard theory, replaced with LPP.
7. **Contribution framing was about the artifact, not knowledge.**

The agent rewrote all four sections:
- **Research Threads:** (1) AI Reliance & Vibecoding Crisis, (2) Scaffolding & Subgoal Learning for Complex Coding Tasks, (3) Learnersourcing: Generating Pedagogical Content from Learner Interactions, (4) Newcomer Onboarding & LPP in Software Communities.
- **Theory Recommendations:** (1) LPP (Lave & Wenger), (2) Cognitive Apprenticeship (Collins, Brown, Newman), (3) Subgoal Learning Model (Catrambone). Coherent chain: context → pedagogy → mechanism.
- **Gaps & Opportunities:** (1) Learnersourcing through AI agent conversations, (2) Subgoal decomposition in authentic multi-file environments, (3) AI-mediated scaffolding for the LPP trajectory.
- **Knowledge Contribution Framing:** Bit flip centered on implicit learnersourcing through tool interaction vs. explicit contribution tasks. Paper type: systems paper with deployment study. Target venue: CHI.

### What the AI added beyond what the user said
- Identified learnersourcing as a distinct, first-class research thread (user hadn't named it; advisor had emphasized it)
- Framed the AI reliance thread with specific papers (Kazemitabaar, Prather, CodeAid, AutoPBL)
- Proposed the theory chain: context (LPP) → pedagogy (Cognitive Apprenticeship) → mechanism (Subgoal Learning)
- Proposed three specific gaps with "how we'd observe this" sections
- Composed the bit flip: "Most researchers assume learnersourcing requires purpose-built interfaces where learners explicitly contribute content... Our work shows that AI agent conversations in authentic coding contexts naturally produce learnersourcing data."
- Added "Theories to explore further" section (Desirable Difficulty, ZPD, SDT)
- Framed the "two papers" risk from the advisor as a convergence of threads rather than separate contributions

---

## Cycle 2: Thread Refinement — AI Reliance Pivot, LPP Demotion, Learnersourcing Correction, Generated Subgoals

### AI Critique
1. 🚨 **Thread 1 is a problem statement, not a research thread.** "AI Reliance & the Vibecoding Crisis" describes the problem, not a conversation Causeway participates in. Should be reframed as "Designing AI coding support that scaffolds rather than automates" where CodeAid, AutoPBL, and Causeway are in conversation.
2. ⚠️ **Thread 4 (LPP) — can you actually contribute empirical results?** LPP might be a theory you use (explaining why in-the-wild scaffolding matters) without being a thread you contribute results to. Will the study produce data about LPP trajectories?
3. ⚠️ **Thread 3 (Learnersourcing) citations need verification.** The claim "no prior work has examined learnersourcing through AI agent conversations" may be too strong.
4. ⚠️ **Thread 2 — is "authentic" the strongest angle?** The advisor's emphasis was on AI-generated subgoals grounded in an existing taxonomy, which is more novel than "we did it in a bigger codebase."

### User Response
> Critique 1: I can see the "Designing AI coding support that scaffolds rather than automates" pivot, because there's so much literature on the AI reliance topic we can get specific.
>
> Critique 2: I can 100% agree with this assessment. I would love to see the evolution of logs and questions asked produced by novices over time, but I'm worried we won't be able to say anything empirically about LPP trajectories.
>
> Critique 3: I might push back on the learnersourcing through AI. Doesn't Williams et al. 2016 do personalized hint systems through AI? Totally agree with it being a citation, but saying no one has done learnersourcing through AI conversations is a stretch.
>
> Perhaps this is a key missing citation too: https://dl.acm.org/doi/10.1145/3637308 or "CodeTree: A System for Learnersourcing Subgoal Hierarchies in Code Examples" given the structure of Walkthrough Mode.
>
> Critique 4: In our program we run, we decompose work into Components and Containers micro-roles (roughly mapping to front-end and back-end development). For Components, at least, its decomposed into the following subgoals: Elements (declaring necessary HTML elements), Layout (orienting elements on layout), Data (handling data flow and dynamic displays via inputs and template binding), and Events (binding user events to the UI via outputs). These subgoals do cover multiple files and have been applied to complex codebases already. Yes, we have yet to apply subgoals in our lab to real, in-the-wild projects without pre-defined decomposition by leads – but I would agree the most interesting contribution is just as my advisor said: AI producing new subgoal structures grounded in an existing taxonomy.
>
> Also sidenote, I'm noticing some citation hallucinations (e.g., AutoPBL was written by Zhu et al.)

### Document Delta
| Field | Before | After |
|---|---|---|
| Thread 1 title | "AI Reliance & the Vibecoding Crisis in Computing Education" | "Designing AI Coding Support That Scaffolds Rather Than Automates" |
| Thread 1 framing | Problem statement (does AI help or hurt?) | Design conversation (what stances work? CodeAid vs AutoPBL vs Causeway) |
| Thread 2 title | "Scaffolding & Subgoal Learning for Complex Coding Tasks" | "Subgoal Learning: Expert-Designed vs. AI-Generated Decompositions" |
| Thread 2 core tension | Bounded vs. authentic environments | Expert-designed vs. AI-generated subgoals grounded in expert taxonomy |
| Thread 2 citations | Catrambone, Margulieux, Morrison only | Added Jin & Kim (2024) CodeTree |
| Thread 2 subgoal details | Generic "micro-roles and subgoals" | Specific: Components/Containers roles; Elements, Layout, Data, Events subgoals |
| Thread 3 title | "Generating Pedagogical Content from Learner Interactions" | "From Explicit Contribution Tasks to Implicit Tool Interaction" |
| Thread 3 claims | "No prior work has examined learnersourcing through AI agent conversations" | Corrected: Williams et al. showed AI can mediate learnersourcing; gap reframed as learnersourcing of *experiential scaffolding* (role/subgoal structures) |
| Thread 3 citations | Kim, Weir, Williams | Added Jin & Kim (2024) CodeTree |
| Thread 4 (LPP) | Full research thread | Removed as thread; kept as Theory #1 |
| AutoPBL citation | "Aggarwal & Guo (2025)" | "Zhu et al. (2025)" |
| Gap 2 | "Subgoal Decomposition in Authentic Multi-File Environments" | "AI-Generated Subgoals Grounded in Expert Taxonomies" |
| Gap 3 | "AI-Mediated Scaffolding for the LPP Trajectory" | "The Design Space for Curriculum-Grounded AI Scaffolding" |

### What shifted
- User agreed with all four critiques (Thread 1 pivot, LPP demotion, learnersourcing correction, subgoal recentering)
- User corrected AI's citation hallucination (AutoPBL authors) — demonstrates the value of user verification
- User pushed back on "no prior work" claim for learnersourcing through AI — agent's original claim was too strong
- User contributed concrete micro-role/subgoal taxonomy details (Elements, Layout, Data, Events) that enrich Thread 2
- User contributed a critical missing citation (CodeTree, Jin & Kim 2024) that directly challenges the learnersourcing novelty claim and sharpens it

---

## Cycle 3: Theory Restructuring — LPP Demotion, Fading Rejection, Learnersourcing Framework

### AI Critique
1. ⚠️ **LPP is doing less work than it claims.** Stress test: remove LPP, does any design decision become unjustified? The MCP server scaffolds individual tasks, not community trajectories.
2. ⚠️ **Cognitive Apprenticeship "fading" — does it actually happen?** The system doesn't detect internalization or reduce scaffolding.
3. 🚨 **The theory chain predicts scaffolding works, but the contribution is about learnersourcing.** No theory explains or predicts the learnersourcing mechanism.

### User Response
> Critique 1: While I'd love to reach the latter described system in far later MVPs, I can see it being cut for now if we want to focus on our core (learnersourcing)
>
> Critique 2: Mind you, that was what the undergrads wrote. I think fading inherently contradicts what my advisor said about learnersourcing and creating new subgoals. If we're transitioning to independent practice, why use a scaffolding MCP server to begin with? How would we even detect "internalization" to begin with... I think let's stick to what my advisor wants.
>
> Critique 3: I think we already have all the learnersourcing subgoal literature here, here's what I've also found online: [provided 4 papers: UpGrade (Bhat et al., 2019), Towards Learnersourcing Relatable Materials (2025), Glassman et al. (2016), and Darvishi et al. (2022) synthesis framework]

### Document Delta
| Field | Before | After |
|---|---|---|
| Theory #1 | LPP (Lave & Wenger) — context theory | Cognitive Apprenticeship (Collins et al.) — pedagogy theory |
| Theory #2 | Cognitive Apprenticeship — pedagogy | Subgoal Learning Model (Catrambone) — mechanism |
| Theory #3 | Subgoal Learning Model — mechanism | Learnersourcing Framework (Darvishi et al., 2022) — contribution |
| LPP status | Core theory | Demoted to "theories to explore further" |
| Fading (Cognitive Apprenticeship) | Listed as operationalized stage | Explicitly *not* operationalized; replaced with "scaffolding adapts rather than withdraws" |
| Theory chain | context (LPP) → pedagogy → mechanism | pedagogy → mechanism → contribution |
| Thread 3 citations | 5 papers | 8 papers (added Glassman et al., UpGrade, Darvishi et al.) |

### What shifted
- User's fading pushback was the strongest stance of the session — it revealed a fundamental design philosophy: the system should remain present, not withdraw, because continued use is the learnersourcing mechanism
- User supplied the missing theoretical grounding (Darvishi et al. 2022) from their own literature search, directly filling the gap the agent identified
- The theory chain now directly grounds the learnersourcing contribution, not just the scaffolding design

---
---

## Cycle 4: Gaps & Knowledge Contribution — CSCW Alignment, Bit Flip Strengthening

### AI Critique
1. ⚠️ **Gap 3 is a "mapping the design space" paper — is that what the advisor wants?** Design space contribution vs. learnersourcing contribution tension.
2. ⚠️ **Knowledge Contribution still references "newcomer."** LPP was cut, so "newcomer" implies a claim we're not making.
3. 🚨 **Bit flip leads with mechanism, but advisor emphasized content.** Should lead with *what's being learnersourced* (experiential scaffolding), not just *how* (implicit).
4. ⚠️ **Gap 2 observation method describes a controlled experiment.** Doesn't match an in-the-wild deployment study for CSCW.

### User Response
> Critique 1: Hmm, that's a good question. The MCP server is curriculum-grounded, and if we're aiming for CSCW we should have design implications. I don't think design implications necessarily contradict what my advisor said. So I can go either way.
>
> Critique 2: I don't think it matters, since a not-newcomer wouldn't need this MCP server, only intermediate and beginners. You can say student learning, and we can put a pin in the LPP conversation for later MVPs.
>
> Critique 3: I'd say both the mechanism and the content are important for tying our threads together (MCP server usage goes against the grain of traditional agentic coding usage and for obvious reasons the content).
>
> Critique 4: It'll be a bit odd to do a controlled experiment for this sort of system that necessitates in-the-wild usage. Would you say is appropriate here given we're aiming for CSCW? I'm leaning towards qualitative / interview / survey measures.

### Document Delta
| Field | Before | After |
|---|---|---|
| Gap 3 title | "The Design Space for Curriculum-Grounded AI Scaffolding" | "Design Implications for Curriculum-Grounded AI Scaffolding" |
| Gap 3 framing | Mapping the design space | Design implications that transfer to future systems |
| Gap 2 observation | Controlled experiment (between-subjects comparison) | Qualitative analysis, interviews, surveys |
| Knowledge Contribution | "scaffolding newcomer learning" | "scaffolding student learning" |
| Bit flip | Mechanism only (implicit vs. explicit) | Both mechanism AND content (implicit + experiential scaffolding) |
| Target venue | "Primary: CHI. Secondary: CSCW" | "Primary: CSCW. Secondary: CHI" |

### What shifted
- CSCW elevated to primary venue — aligns with design implications contribution and in-the-wild deployment study
- Bit flip now carries both novelty claims (mechanism + content) as a unified argument
- User explicitly deferred LPP to later MVPs — pins it for future work rather than cutting permanently

---

## Summary Statistics
<!-- Generated at the end of the session after all sections are confirmed. -->

| Metric | Count |
|---|---|
| Total interaction cycles | |
| Times user narrowed scope | |
| Times user corrected AI framing | |
| Times user defended a choice against AI | |
| Times user referenced specific document lines | |
| Times AI forced a question that unlocked new thinking | |
| Times AI filled gaps from user's existing knowledge | |
| Times AI proposed text improvements user accepted | |
| Largest single document delta | |

---

## Evolution by Section
<!-- Generated at the end of the session. For each research landscape section, write a narrative covering how it evolved from initial state to final form. -->

How each section of the document evolved from initial state through critiques to its final form.

---

### Relevant Research Threads

**Initial state (from Cycle 1):**

**Evolution:**

**AI critiques that drove change:**

**User's voice through the evolution:**

**Final state:**

**How AI's role changed:**

---

### Theory Recommendations

**Initial state (from Cycle 1):**

**Evolution:**

**AI critiques that drove change:**

**User's voice through the evolution:**

**Final state:**

**How AI's role changed:**

---

### Gaps & Opportunities

**Initial state (from Cycle 1):**

**Evolution:**

**AI critiques that drove change:**

**User's voice through the evolution:**

**Final state:**

**How AI's role changed:**

---

### Knowledge Contribution Framing

**Initial state (from Cycle 1):**

**Evolution:**

**AI critiques that drove change:**

**User's voice through the evolution:**

**Final state:**

**How AI's role changed:**
