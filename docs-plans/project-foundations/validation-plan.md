# SkillWeave Validation Plan

<!-- Validation strategy for research-led social innovation projects. Core hypotheses and research questions define what we're trying to learn; the MVP/protostudy sequence defines how we learn it. Owned by /define-validation. Observable signals, interview instruments, and reflection protocols are developed per-MVP using /protostudy-prep. -->

This document provides the strategic overview of what we're validating, why, and in what order. It defines a series of protostudies to validate and derisk both the product and research aspects of the project. Detailed build plans, data collection instruments, and reflection protocols live in per-MVP protostudy documents.

---

## Core Hypotheses & Research Questions

What we're trying to learn, organized by categories that span our integrated approach — contextual understanding, product viability, design knowledge, and community impact. Each item concisely describes what the question/hypothesis is and why it matters to us. They will be fleshed out in more detail in the individual protostudy documents.

### Context: User & Ecosystem

Building a deeper understanding of the user and community ecosystem — surfacing insights about needs and contextual, systemic risks that shape what to design.

1. **H1: Error Overlap Context** *(Open Question — MVP 1).* Do different project teams/builders working in the same cohort hit overlapping technical errors and steering challenges, or are their error profiles entirely isolated? *Why it matters:* If different teams have zero overlap in their challenges, a shared community log database will provide zero utility.
2. **H2: Steering Breakdown Signal** *(Open Question — MVP 2).* What interaction signals (e.g. error rate, typing idle time, file reversions) reliably indicate a developer has hit a conceptual "breakdown" in agent steering? *Why it matters:* Understanding these signals is necessary to trigger mixed-initiative helper agent offers without annoying the user.

### Value: Product-Market Fit, Demand & Growth

Does the product solve a felt need, and will people adopt and spread it? These questions determine whether the solution is viable as a sustained offering.

3. **H3: Value of Peer Dialogue** *(Prediction — MVP 1).* Builders will actively choose to review peer transcripts/highlights to solve errors instead of guessing or asking lab leads. *Why it matters if wrong:* If builders prefer asking coordinators directly regardless of peer logs, the tool's adoption will fail.
4. **H4: Scaffolding vs. Autocomplete** *(Prediction — MVP 2).* Builders will adopt a constrained diagnostic helper agent that does *not* write code, even though a code-generating assistant is faster, because they value learning the underlying steering competency. *Why it matters if wrong:* If users reject diagnostic guidance in favor of raw copy-paste code generation, our educational value proposition collapses.

### Design: Embodiment & Experience

How users interpret and interact with the design — the design conjectures and experiential insights that shape the next design iteration and design theory.

5. **H5: Collapsible Timeline Usability** *(Open Question — MVP 2).* Does the LLM-summarized collapsible timeline and Pivot Moment highlight provide enough context to resolve errors, or do builders still expand the raw 4-hour logs? *Why it matters:* Dictates whether our LLM summarization pipeline needs deeper context parameters or if high-level highlights are sufficient.
6. **H6: NLU Reflection Quality Gate** *(Prediction + Open Question — MVP 3).* Integrating NLU validation (understandability and relevance checks) will increase the quality of student reflections and reduce "compliance gaming" (filler words/gibberish). *Open question:* Does the NLU gating increase frustration and trigger task abandonment? *Why it matters:* Balances reflection depth against user friction.

### Impact: Mediating Processes & Outcomes

The deeper psychological and behavioral changes we hope to produce — the theoretical conjectures and the actual community impact we're striving for.

7. **H7: Steering Competency Transfer** *(Prediction — MVP 3).* Using SkillWeave increases builders' independence, letting them solve *new, unseen* agent steering errors with fewer stuck cycles over time. *Why it matters if wrong:* If builders only learn how to copy specific recipes rather than building general agent-steering mental models, the long-term competence value is lost.
8. **H8: Double-Loop Optimization** *(Prediction — MVP 3).* Aggregating individual friction reports allows coordinators to successfully identify and fix structural flaws in the shared workflow templates, reducing overall cohort error rates. *Why it matters if wrong:* If coordinators ignore dashboard suggestions or if template updates fail to reduce subsequent errors, the double-loop optimization fails.

---

## MVP / Protostudy Sequence

### Product Perspective

Does a shared registry of AI agent logs actually unblock student teams and improve cohort velocity? The key product risks, in priority order:

1. **Isolated Domains Risk (No Overlap)** — Different teams work on completely different features/frameworks, resulting in zero overlapping errors and no reason to query the database.
2. **Scaffolding Abandonment Friction** — Students find the helper agent's diagnostic prompts too slow and annoying, preferring to copy-paste code from general AI assistants.
3. **Log Graveyard Risk** — Builders ignore the dashboard and peer registry entirely, relying on direct coordinator help.

### Research Perspective

Does constraining assistant outputs and aggregating transcripts successfully drive individual metacognition and organizational process learning? The key research risks, in the order we need to verify them:

1. **Cognitive Offloading Predominance** — Builders prioritize execution speed over learning, writing low-effort gibberish reflections to bypass CLI triggers.
2. **Context Loss in Synthesis** — The LLM-generated Pivot Highlights fail to capture the necessary tacit context, forcing builders to read raw logs (nullifying streamlining).
3. **Double-Loop Failure** — Lab coordinators do not update shared methodologies because aggregated reflections fail to expose structural flaws.

### Timeline

We will deploy our validation sequence across the project teams in our research lab. We start with a no-code manual probe to test the overlap hypothesis, scale to a low-code local CLI to test scaffolding interfaces, and finally deploy the integrated system to study learning outcomes.

| Phase | Target Date | What Happens | What We Learn |
|---|---|---|---|
| MVP 1: Manual Sharing Probe | [Date] | Deploy a shared Google Drive/GitHub folder where 3 teams manually copy-paste resolved errors and 2-sentence prompt fixes. | H1 (Error overlap) and H3 (Value of peer logs). |
| MVP 2: Streamlined Local CLI | [Date] | Deploy a local script that generates collapsible timelines and runs a local constrained Helper Agent (no code generation) for 10 builders. | H2 (Breakdown signals), H4 (Scaffolding adoption), and H5 (Timeline usability). |
| MVP 3: Full SkillWeave Deploy | [Date] | Deploy full integration (NLU quality gate, coordinator dashboard, automated template PRs) across the entire lab cohort. | H6 (NLU gate friction), H7 (Competency transfer), and H8 (Double-loop learning). |

### MVP 1: Manual Sharing Probe (No-Code)

**Purpose:** De-risk the foundational assumption that teams hit overlapping errors and will actively read peer logs before building any automated CLI infrastructure. *(Addresses: H1 [Error Overlap Context], H3 [Value of Peer Dialogue])*

**What we build:**
Zero custom code. We create:
- A shared Google Drive folder or a designated repo directory.
- A basic, 1-page template where builders copy-paste: (1) their raw error log, (2) their successful prompt adjustment, and (3) a 2-sentence reflection on what they learned.
- We mandate that when builders get stuck, they must check this shared directory first.

**How we learn:**
We deploy this for 2 weeks across 3 active lab teams. We collect:
- Access logs / document view history of the shared folder.
- Self-reports: did they find a peer log? Did it help them resolve their issue?
- Researcher audit: we analyze their resolved errors to calculate the percentage of technical overlap between different teams.

→ Detailed plan: *to be created via /protostudy-prep*

### MVP 2: Streamlined Local CLI (Low-Code)

**Purpose:** Validate whether developers will accept a constrained diagnostic agent (no code-gen) and if collapsible timelines provide sufficient context. *(Addresses: H2 [Steering Breakdown Signal], H4 [Scaffolding vs. Autocomplete], H5 [Collapsible Timeline Usability])*

**What we build:**
A lightweight local CLI prototype:
- A script that parses raw chat history, runs a basic LLM prompt to extract the "Pivot Moment," and generates a static, collapsible markdown index of peer logs.
- A local Helper Agent prompt template that reads this index to guide the user with diagnostic questions without writing code.
- Telemetry logging: we log typing speed, idle time, and error frequencies to map breakdown signals.

**How we learn:**
Deploy to 10 builders. We track:
- Invocations: how often do they click "Yes" to trigger helper prompts when suggested?
- Navigation: how often do they expand the raw log versus reading only the Pivot Highlights?
- Exit Interviews: we interview builders about the cognitive friction of being guided instead of given code.

→ Detailed plan: *to be created via /protostudy-prep*

### MVP 3: Full SkillWeave Deploy (Integrated System)

**Purpose:** Evaluate learning outcomes (NLU reflections quality and competency transfer) and cohort double-loop optimization. *(Addresses: H6 [NLU Reflection Quality Gate], H7 [Steering Competency Transfer], H8 [Double-Loop Optimization])*

**What we build:**
The complete integrated system:
- CLI with NLU reflection validation (understandability and relevance checks).
- Shared database with host-level privacy and archival controls (allowing hosts to delete raw logs after Pivot extraction).
- Coordinator dashboard displaying friction heatmaps and suggesting template PRs.

**How we learn:**
Deploy across the entire lab cohort (20+ builders) during a 6-week sprint. We collect:
- Reflection logs to evaluate NLU quality scores over time.
- Transfer tests: we evaluate builders on new, unseen agent steering tasks to measure stuck-cycles and resolution time.
- Coordinator interviews: we track the adoption and acceptance rate of automated template PR recommendations.

→ Detailed plan: *to be created via /protostudy-prep*

---

## Positionality Statement

<!-- What biases and assumptions are you bringing to this project? How does your background (gender, race, SES, personal history) affect how you view the users and the problem? How might users perceive your authority? -->

[Leave blank to be filled out during its dedicated review step at the end.]

---

## Appendix: Stances & Deferred Issues

<!-- Stances & Open Issues from the validation process. Owned by /define-validation.
     Log ONLY:
     - 🔵 Strong Stances: moments where the user pushed back against something the agent proposed and explained their reasoning. Must state what was rejected and why.
     - ⏳ Deferred Issues: hypotheses to revisit, research questions deferred to later MVPs, or unresolved tensions.
     Do NOT log decisions that have been fully incorporated into the main body. -->

### Core Hypotheses & Research Questions
- 🔵 **Preference for Simple Wording:** The agent proposed rewriting predictions into strict "If/Then/Because" template formats to ensure testability. The user rejected this, preferring the current high-level wording to keep the document concise and readable.

### MVP / Protostudy Sequence
