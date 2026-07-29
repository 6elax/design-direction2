# Document Evolution Log — SkillWeave Research Landscape

<!-- A structured record of how the Research Landscape section of product-thesis.md evolved through the planning session.
     Each cycle captures the interaction between human and AI that produced a change
     in the document. User input is always quoted verbatim.

     This file is built in two phases:
     - Phase 1 (during session): Cycle records are appended after each critique-respond-update turn.
     - Phase 2 (end of session): Summary Statistics and Evolution by Section are generated. -->

---

## Cycle 1: Initial Draft

### User Input
> I think the most relevant things are related to human and ai interaction, how ai can be used to help develop learning, understanding, and refelction, rather than just spoon feeding users. sort of like a calculator, where you still have to do the math yourself, but for the extreme values that are difficult to solve and doesn't have much purpose in solving for example 123.4567*987.5678. i'm not sure what literature already exists related to this or how this may be something new, but can you help me come to a more new perspective by letting me know what exists/is common, what might be a less common idea or existance, and how this idea project fits into that.

### AI Draft Summary
The initial draft proposes a research thesis for **SkillWeave** mapping the academic landscape:
1. **Research Threads:**
   - *Cognitive Offloading & AI-Mediated Programming:* Balancing AI velocity vs. cognitive engagement.
   - *Conversational Scaffolding & Reflective Learning:* Dynamically triggering metacognitive reflection prompts in-situ.
   - *Community Knowledge Repositories & CSCL:* Aggregating dialogue logs to build a collective cohort asset.
2. **Theory Recommendations:**
   - Schön's *Reflection-in/on-Action* explaining user reflection loops.
   - Vygotsky/Bruner's *Cognitive Scaffolding* grounding the helper agent's questioning constraints.
   - Argyris & Schön's *Double-Loop Learning* framing the coordinator's template optimization loop.
3. **Gaps & Opportunities:** surtitles the gap in using aggregated, sanitized multi-turn agent transcripts to drive individual learning and community process adaptation.
4. **Knowledge Contribution Framing:** Claims that constraining assistants to diagnostic, peer-referenced guidance drives deeper user reflection and builds competency (bit flip). Target venues: ACM CHI or CSCW.

### What the AI added beyond what the user said
- **Thread Structures:** Mapped the user's "calculator vs. spoon-feeding" tension to the formal academic thread of "Cognitive Offloading and AI-Mediated Programming" and "Conversational Scaffolding."
- **Theoretical Foundations:** Named Donald Schön (Reflection-in-Action), Vygotsky (Zone of Proximal Development / Scaffolding), and Chris Argyris (Double-Loop Learning) as the core frameworks to justify the design.
- **Specific Literature Gaps:** Formulated two specific knowledge gaps: (1) Integrated Scaffolding vs. Direct Automation in human-AI workflows, and (2) Passive Process Knowledge Capture in co-writing/co-coding cohorts.
- **Reviewer Novelty Defense:** Outlined a 3-part defense against potential reviewer claims that the tool is just "another wiki or QA bot."
- **Bit Flip & Venue Selection:** Formulated the primary research claim (bit flip) and identified CHI/CSCW systems tracks as target venues.

---

## Cycle 2: Learning-Centric Framing, Runtime Scaffolding, & CSCW Debate Integration

### AI Critique
1. 🚨 **Scope Mismatch in Thread 1 (Too Programming-Centric)**: Focusing too narrowly on programming limits the system's justification for non-technical design/planning agents.
2. 🚨 **Unverified Claims & Cherry-Picking in Thread 2 (Static Tutors)**: Claiming in-situ scaffolding doesn't exist ignores a decade of CSCL research; we must target the specific gap of scaffolding *multi-turn agent steering*.
3. ⚠️ **Engineering Symptom vs. Theoretical Tension in Thread 3**: Framing documentation friction as a tension is too engineering-focused; it should be aligned with CSCW's *Codification vs. Personalization* debate.

### User Response
> thread 1: maybe this can be specifically targetting learning? or used in schools? since i imagine people in the actual workforce don't want to do all the reflecting all the time, especially since they probably actually have all the knowledge they need alrady, and will find it just a slower process in trying to do their work. the only other side to this is if this product is used in teams and specifically allows people in the team to think deeper and furhter in ideas. or the feature where you can look at the transcript of other team's past similar errors can be helpful and in general make work in the organization more efficient.
> 
> thread 2: i agree with the psychology parts, it makes me think if this should be targetted specifically for schools/learning. but it seems that the field already has knowledge on this, and i'm having trouble understanding the idea and how effective the proposed open tensions are. what exactly is static tutoring, and what does "contextual, runtime scaffolding" look like? 
> 
> thread 3: i like this idea! I like the idea of the context gap, and maybe how this tool might fix that a bit, since it's used in the context of an organization, and the ai creating its own database. 
> 
> can you answer any questions listed, and maybe can you elaborate a bit more on threads 1 and 3?

### Document Delta
| Field | Before | After |
|---|---|---|
| Thread 1 | `Cognitive Offloading and AI-Mediated Programming` (focused on Copilot coding velocity vs coding mental models) | `AI-Mediated Learning and Cognitive Offloading in Project-Based Settings` (focusing on learning environments, Project-Based Learning, and onboarding cohorts where learning is the primary goal) |
| Thread 2 | `Conversational Scaffolding and Reflective Learning` (stating agents are separate, static tutors) | `Contextual, Runtime Scaffolding vs. Static Tutoring` (contrasting separate sandbox ITS exercises with integrated, runtime agent steering prompts) |
| Thread 3 | `Community Knowledge Repositories and CSCL` (framed around documentation friction) | `Codification vs. Personalization in Community Knowledge Sharing` (anchored in the CSCW debate and resolving the "context gap" via passive log aggregation) |
| Gaps Convergence | References to Thread 1 & 2 programming focus | References to learning in PBL, runtime scaffolding, and codification vs. personalization |

### What shifted
- **Target Context Refinement:** Pivoted Thread 1 to focus specifically on learning cohorts (schools/PBL and onboarding juniors) where builders are incentivized to reflect, while retaining the organizational efficiency of shared peer transcript libraries.
- **Scaffolding Clarified:** Defined static tutoring (sandbox environments separate from actual tasks) vs. contextual runtime scaffolding (in-situ CLI/agent interactions guiding real-world tasks).
- **CSCW Grounding:** Transformed the third thread from an engineering pain point into a classic CSCW research debate: how passive capture of dialogue context resolves the codification vs. personalization trade-off.

---

## Cycle 3: Designing Scaffolding Agency, Compliance Mitigation, & Transcript Curation

### AI Critique
1. ❓ **The Compliance Gaming Problem**: What stops students from typing filler text (gibberish reflections) just to proceed past forced CLI prompts?
2. ❓ **Runtime Trigger Annoyance**: How do we trigger in-context prompts at the right "moment of breakdown" without disrupting the builder's flow?
3. ❓ **The Curation graveyards**: How do we prevent a passive database of long transcripts from becoming a graveyard of unread files?

### User Response
> 1. i have a question before i answer the question, what is considered "gibberish" reflections? 
> 2. I think it overall is better to have the agent still ask the user when to trigger the runtime scaffolding (ask for confirmation) rather than make it simply automated. because each user is different and will have different expectations and habits.
> 3. what is a "passive" transcript? Overall, I think that transcripts will inevitably have unread areas that make part of it an "unread graveyard". however, I think being able to have some sort of tldr and/or highlighting the important parts of a change or key point that helped a group/user to fix an error is what most people will be looking at, and that highlgiht should be more important.

### Document Delta
| Field | Before | After |
|---|---|---|
| Thread 1 | `Open Tensions` focusing on introducing desirable difficulties generally | Added tension of preventing compliance gaming (filler/gibberish text) while prompting meaningful reflections |
| Thread 2 | `Open Tensions` focusing on scaling in-context prompts in general | Added tension of designing mixed-initiative triggers (asking user confirmation before triggering scaffolds) |
| Thread 3 | `Open Tensions` focusing on capture and database aggregation generally | Defined passive capture and added tension of isolating "Pivot Moments" (TL;DR highlights) to combat log graveyards |

### What shifted
- **Refining Metacognitive Scaffolds:** Addressed the behavioral risk of forced reflection by focusing design research on preventing compliance gaming (minimizing gibberish entries).
- **Mixed-Initiative Scaffolding:** Integrated the user's design preference for developer agency, framing the triggering mechanism around user-confirmed interventions rather than full automation.
- **Transcript Condensation Priority:** Recognized the inevitability of log archives becoming unread graveyards, shifting the academic contribution focus toward LLM-based extraction of "Pivot Moments" and selective highlights.

---

## Cycle 4: Quality Gating, Mixed-Initiative Telemetry, & Organizational Privacy Controls

### AI Critique
1. ❓ **The Compliance Gaming Problem**: What stops students from typing filler text (gibberish reflections) just to proceed past forced CLI prompts?
2. ❓ **Runtime Trigger Annoyance**: How do we trigger in-context prompts at the right "moment of breakdown" without disrupting the builder's flow?
3. ❓ **The Curation graveyards**: How do we prevent a passive database of long transcripts from becoming a graveyard of unread files?

### User Response
> to answer 1. How to prevent Compliance Gaming (writing gibberish reflections) in learning environments,
> The agent should read what the user responds, and see if the response is 1. understandable, and 2. relevant/related to the chat with the agent earlier. in any of those cases, the agent should ignore what the user said. 
> 
> 2. yes, mixed-initiative design is a good idea. how much/what areas of this idea is still a problem that needs to be researched about?
> 
> 3. yes, i think it may be better to have a summary with the key effective points rather than the whole chatlog. Maybe the host of the organization can choose to save chatlogs to an archive, or just not save them, since I'm thinking people may not want to save all the chatlogs as it'll just take up unnecessary storage and space.

### Document Delta
| Field | Before | After |
|---|---|---|
| Thread 1 | `Open Tensions` focusing generally on compliance gaming | Added automated quality gating tension where the LLM evaluates understandability and relevance to reject low-quality reflections |
| Thread 2 | `Open Tensions` focusing generally on mixed-initiative triggers | Formulated two specific research questions: telemetry signals for detecting breakdowns and personalization/fading of trigger thresholds |
| Thread 3 | `Open Tensions` focusing generally on isolating Pivot Moments | Added tension around flexible privacy/storage controls (toggling raw transcript archival vs. deletion after Pivot extraction) |

### What shifted
- **Refinement of Metacognitive Gate:** Framed a concrete NLU-based validation loop that actively checks student inputs against dialogue context for understandability and relevance before acceptance.
- **Mixed-Initiative Research Questions:** Divided the mixed-initiative triggers into two technical research threads: (1) mapping telemetry signals to user confusion, and (2) modeling adaptive threshold fading over time.
- **Privacy & Storage Archival Policies:** Integrated host-level storage controls into the CSCW community repository design, balancing explicit knowledge sharing with data minimization.

---

## Cycle 5: Theory-to-Interface Design Mapping & Alternative Selection

### AI Critique
1. 🚨 **Refining Schön's Design Mapping**: The mapping to Schön's theory was too general; it should connect to specific constructs like *surprise* and *reframing* in our NLU reflection loop.
2. 🚨 **Wood et al. Scaffolding Specificity**: "Scaffolding" is name-dropped without mapping to concrete functions (e.g. *reduction in degrees of freedom* and *marking critical features*).
3. ⚠️ **Theories Chain & Alternatives**: The rejected alternatives (Self-Determination Theory and Communities of Practice) must be documented to justify our choices to reviewers.

### User Response
> Yes, visualizing these features makes the role of these theories clearer! I think the idea of how all 3 theories work together makes sense, and should be included in how the user uses this tool. i especially like Theory 2: Wood et al.'s "Cognitive Scaffolding", as it really emphasizes learning rather than automation. i'm not sure what other feedback you want for htis.

### Document Delta
| Field | Before | After |
|---|---|---|
| Theory 1 (Schön) | General reflection trigger description | Mapped Reflection-on-Action to CLI trigger/NLU gate (surprise/reframing checks) and Reflection-in-Action to helper agent |
| Theory 2 (Scaffolding) | General helper agent scaffolding statement | Mapped *reduction in degrees of freedom* (collapsing logs/Pivot highlights) and *marking critical features* (discrepancy diagnostics). Added Self-Determination Theory (Ryan & Deci) as rejected alternative |
| Theory 3 (Double-Loop) | General prompt and template statement | Structured single-loop (prompt adjustments) vs. double-loop (template modifications). Added Communities of Practice (Wenger) as rejected alternative |
| Integrated Chain | Generic summary of theories working together | Formulated a tight user journey: Schön (Individual Journey) -> Wood et al. (Agent Constraint) -> Argyris (Community Feedback) |
| Theories to Explore Further | Undefined | Added Cognitive Load Theory (Sweller) and Distributed Cognition (Hutchins) |

### What shifted
- **Rigorous Feature Grounding:** Transformed academic name-dropping into a concrete feature-design blueprint, mapping specific system telemetry and gates to established learning constructs.
- **Academic Positioning (Defense):** Strengthened the thesis defense by documenting rejected frameworks (SDT and CoP) to preempt reviewer challenges.
- **Aligned Theoretical Chain:** Connected individual reflection, scaffolding constraints, and organizational learning into a single cohesive system cycle.

---

## Cycle 6: Reframing Knowledge Gaps & Scaffolding Evaluation Metrics

### AI Critique
1. 🚨 **Reframing Artifact Gaps (VAL-LIT-04)**: Gap 1 was framed as a missing tool rather than a knowledge gap about agentic constraints.
2. 🚨 **Technological Enablement (VAL-LIT-07)**: The thesis must address why this design position was previously infeasible (LLM passive capture of process context).
3. ⚠️ **Weak Observation Plan (VAL-LIT-06)**: Counting helper agent invocations is a weak measure of learning; we need NLU reflection scores and steering skill transfer tests.

### User Response
> ok you can save this for now.

### Document Delta
| Field | Before | After |
|---|---|---|
| Gap 1 | `The field lacks designs that scaffold active user reflection...` | `We do not understand the design space of agentic constraints—how restricting an AI's output format... shapes a user's prompt-steering capacity...` |
| Gap 1 Observation | `We will observe a decrease in repeated steering errors and increase in user independence...` | Added NLU-scored quality depth over time and transfer of steering competence to new, unseen error codes |
| Gap 2 | `Shared prompt playbooks are manually maintained...` | Added technological enablement detail (LLM passive real-time extraction and synthesis of verbose dialogue logs) |
| Gap 2 Why Project Fills It | `SkillWeave parses deltas, aggregates them into a cohort dashboard...` | Added host-level archival controls to dashboard detail |

### What shifted
- **Knowledge-Centric Gaps:** Refactored the gap definitions from missing artifacts (tools) to missing design knowledge, preempting reviewer critiques of trivial novelty.
- **Scaffolding Evaluation:** Strengthened the empirical study design by mapping telemetry metrics to cognitive growth (reflection depth and general steering transfer).
- **Technological Enablement:** Positioned the system's contribution around newly possible AI capabilities that automate the extraction of dialogue context.

---

## Cycle 7: Research Questions Formulation & Uniqueness Elaborations

### AI Critique/Query
1. ❓ **Elaborating Research & RQ Formulation**: The user initiated the `/define-research` command to request a detailed elaboration on the research uniqueness/contributions and a summarizing research question (RQ).

### User Response
> /define-research can you elaborate on the research part and the uniqueness/contributions that this tool/project/research idea will bring? and can you come up with a research question that basically summarizes what the research is trying to find?

### Document Delta
| Field | Before | After |
|---|---|---|
| research-thesis.md | Vague contribution statement and generic novelty list | Added **Central Research Questions** (comprising a central RQ and three sub-questions mapping to scaffolding, meshing, and double-loop learning). Added **Uniqueness & Research Contributions** detailing systemic (collaborative telemetry), empirical, and conceptual (bit flip) differentiators. |

### What shifted
- **Academic Rigor & Structuring:** Grounded the research thesis with an explicit central RQ and sub-questions, and mapped the uniqueness across system, empirical, and conceptual dimensions to prepare the project for academic review (e.g. CHI/CSCW).
