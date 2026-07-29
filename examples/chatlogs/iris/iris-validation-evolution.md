# Document Evolution Log — Causeway Validation Plan

<!-- A structured record of how the Validation Plan evolved through the planning session.
     Each cycle captures the interaction between human and AI that produced a change
     in the document. User input is always quoted verbatim.

     This file is built in two phases:
     - Phase 1 (during session): Cycle records are appended after each critique-respond-update turn.
     - Phase 2 (end of session): Summary Statistics and Evolution by Section are generated. -->

---

## Cycle 1: Initial Draft — Technology Probe Rewrite

### User Input
> Here's what we've built, *that's relevant to this paper*, since we're focusing on Walkthrough Mode and the MCP server: An MCP server that logs queries and other relevant actions to understanding our users and learnersourcing mechanism, and fetches guides from Walkthrough Mode guides where relevant. It'll also comment code for additional scaffolding. We're still working on grouping related queries from multiple users to identify potential new subsubgoals. We will continue to build based on our new research thesis and validation plan hopefully.
>
> I discussed this with the undergrads, but the original MVP 1 with a controlled group didn't make too much sense. We can't control for people's background experience, so measuring learning outcomes after 2 weeks is weak. I would love to instead do a technology probe to identify how people use our initial system in the wild and build from there. What type of questions are the users asking and how are they applying it? My theory is that this system can be used to support intermediate learners who can transition from Practice Mode (post-onboarding phase after Walkthrough Mode completion) to an open-ended environment, but they might not have mastered everything. This system is in place to provide them some light scaffolding and inform us how we could improve the initial onboarding phase and subsequently all that follows.

### AI Draft Summary
Complete rewrite of the validation plan, discarding the previous version (which referenced Antigravity IDE, controlled experiments, fading mechanics, and hypotheses misaligned with the current research thesis). The new plan:

- **9 hypotheses** organized across Context (H1-H2), Value (H3-H4), Design (H5-H6), and Impact (H7-H9).
- **Primary research contribution** (implicit learnersourcing, Gap 1) mapped to H7, tested in MVP 2-3.
- **Secondary research contribution** (AI-generated subgoals, Gap 2) mapped to H8, tested in MVP 4.
- **Design implications contribution** (Gap 3) mapped to H5-H6, emerging across all MVPs.
- **4 MVPs**: Technology Probe → Learnersourcing Signal → Contextualized Scaffolding → Generated Subgoals.
- **MVP 1 reframed as technology probe** — no control group, focus on understanding interaction landscape.
- **Theory chain** explicitly stated in research perspective: Cognitive Apprenticeship → Subgoal Learning → Learnersourcing Framework.
- **Positionality statement** preserved and updated to reference interaction logs rather than controlled telemetry.

### What the AI added beyond what the user said
- Structured 9 hypotheses across the four IWD categories (Context, Value, Design, Impact), mapping each to specific research gaps from the research thesis.
- Created H4 (Faculty Actionability) as a separate testable prediction — the user described the dual purpose of scaffolding + informing curriculum, but didn't frame faculty's perception of the data as a standalone hypothesis.
- Created H5 (Interaction Pattern Taxonomy) as a design-category open question — the user said "what type of questions are the users asking and how are they applying it?" but the AI elevated this to a research contribution opportunity (Gap 3 design implications).
- Created H6 (Curated vs. Generated Content Boundary) for MVPs 3 & 4 — the user didn't discuss this tension directly, but it emerges from the product thesis's distinction between expert-curated and AI-generated subgoals.
- Introduced explicit success criteria for each MVP (adoption thresholds, data richness measures, signal quality benchmarks).
- Framed the product perspective risks (Adoption, Retrieval Relevance, Data Actionability) and research perspective risks (Interaction Pattern Viability, Signal vs. Noise, Generated Subgoal Quality) as ordered priority lists.
- Set specific target dates (Aug 2026, Sep 2026, Nov 2026, Jan 2027) based on the progressive build sequence.
- Added think-aloud sessions and faculty independent gap identification as research methods for MVP 1.

---

<!-- Append one cycle per critique-respond-update turn. Use continuous numbering across all sections. -->

## Cycle 2: Hypothesis Specificity, Theory Grounding, & Logging Schema

### AI Critique
1. ⚠️ **H7 is the most load-bearing hypothesis but also the vaguest.** "Reveal curriculum gaps" is underspecified — what counts as a gap? Missing subgoal? Under-decomposed step? Poorly explained concept? Without pre-defined categories, the learnersourcing claim becomes unfalsifiable.
2. ⚠️ **H9 is a DISGUISED-PREDICTION.** Framed as an open question but directionally assumes scaffolding helps. A genuinely open version would include the possibility of harm.
3. ⚠️ **Cognitive Apprenticeship and Subgoal Learning don't generate specific predictions.** They risk being decorative — cited for framing but not producing testable claims. Should we add a transfer hypothesis (Subgoal Learning) and define CA-observable patterns?

### User Response
> **On H7 categories:** "I think we should pre-define some categories (exactly the ones you've described), but perhaps we can take a grounded theory approach and let other categories emerge from the data."
>
> **On H9:** "Yeah, I can agree with making it more open."
>
> **On transfer + CA observables:** "Regarding your questions, yes to both, if it's possible to measure. For the first question, are you saying first they use the MCP server then the second they don't at all?"
>
> The user then shared the undergrads' logging schema, including fields: `conceptOrTaskStepId`, `rawErrorOrQuestion`, `intent`, `problemContext`, `inferredMisconception`, `studentCodeSnippet`, `aiActionTaken`, `newSubSubGoal` (with `count`), `pasteEventDetected`, `conceptBacktrack`, `guideAccessed`, `sessionTurnCount`, `userEmail`.

### Document Delta
| Field | Before | After |
|---|---|---|
| H7 curriculum gap operationalization | Undefined — "reveal curriculum gaps" without categories | Three pre-defined categories: (a) missing subgoals (`newSubSubGoal` + high `count`), (b) under-decomposed subsubgoals (repeated queries to same `conceptOrTaskStepId`), (c) coverage-but-poor-explanation (`guideAccessed: true` → `conceptBacktrack: true`). Grounded theory for emergent categories. |
| H9 framing | Directional — "articulate clearer mental models" | Genuinely open — "including moments where it helps, hinders, or constrains" |
| H10 | Did not exist | New: Subgoal Knowledge Transfer Across Contexts — derived from Subgoal Learning Model. Transfer observed *within* MCP server interactions (query specificity evolution, `conceptBacktrack` patterns) not by students *leaving* the system. |
| H5 theory lens | Not present | Added CA-observable patterns mapped to logging schema fields: Modeling → `guideAccessed`, Coaching → `inferredMisconception` + `aiActionTaken`, Articulation → `rawErrorOrQuestion` precision over time, Reflection → `conceptBacktrack` |
| MVP 1 "What we build" | Generic "logs queries and relevant actions" | Full logging schema enumerated with research-lens annotations |
| MVP 2/3 cross-references | Did not include H10 | Updated to reference H10 |

### What shifted
- AI's forcing question on H7 categories unlocked a hybrid approach — pre-defined + grounded theory — that operationalizes the most load-bearing hypothesis.
- User's sharing of the logging schema transformed abstract theory connections into concrete, measurable observables.
- AI clarified that subgoal transfer is observed *within* continued MCP use (query evolution), not by students leaving the system — resolving the user's confusion about what transfer measurement means in this context.

---

## Cycle 3: Practice Mode Correction, MVP Scoping Push, & pasteEventDetected

### AI Critique
1. ⚠️ **MVP 1 tests 5 hypotheses — OVERLOADED-MVP?** Five hypotheses for a single deployment, though all are open questions rather than competing predictions.
2. 🚨 **The `pasteEventDetected` field is a bypass signal you already have.** H3's success criteria only use session count (adoption breadth) without leveraging the behavioral in-session bypass detection.
3. ⚠️ **MVP 2 → MVP 3 sequencing risk.** MVP 3's contextualized scaffolding might change interaction patterns so dramatically that MVP 2's query grouping categories become obsolete.

### User Response
> **On Practice Mode terminology (unprompted correction):** "In H1, you said 'structured Practice Mode'. We're focusing on Walkthrough Mode. While people will use Practice Mode in between their initial onboarding on Walkthrough Mode and this open-ended development environment I'm describing with the MCP server, it's not a focus on this paper. I'm seeing you mention Practice Mode a lot here when I probably wouldn't mention Practice Mode by name in a full paper (maybe a vague 'collaborative project-based learning onboarding mention'), and that's because Practice Mode is collaborative, whereas both Walkthrough Mode and this MCP server utilizes 1-1 interactions during learning."
>
> **On MVP 1 overloading:** "It is an overloading MVP. I'd like to get initial thoughts with a technology probe in an exploratory way, then stress-test particular features in reaction to that with stricter deployments. But ultimately, we should do whatever is methodologically defensible for CSCW."
>
> **On pasteEventDetected:** "Sure, but I think pasteEventDetected was described to me by the undergrads as a detection of if they copied and pasted AI generated code."
>
> **On MVP 2 → 3 sequencing:** "Both MVP 2 and 3 are huge to begin with. Why would I ever invest 8 weeks into an MVP if I must do an MVP later than may just de-legitimize all the work. Let's scope MVPs down before we even revisit that conversation of ordering. It's okay to have more than 3 MVPs."

### Document Delta
| Field | Before | After |
|---|---|---|
| "Practice Mode" references (9 occurrences) | Named Practice Mode throughout | Replaced with "structured onboarding," "onboarding-to-project transition," "post-onboarding" — Practice Mode never named |
| `pasteEventDetected` annotation | Generic "bypass signal" | "flags when a student pastes AI-generated code from an external tool — bypass signal" |
| MVP scoping | 4 MVPs, each 6-8 weeks | Not yet rescoped — user pushed back, requesting narrower MVPs before discussing ordering |

### What shifted
- User corrected a fundamental framing error: Practice Mode is a *separate paper* about collaborative learning. This paper's scope is 1-1 interactions (Walkthrough Mode + MCP server). The correction affects how the paper will describe the transition context.
- User accepted MVP 1 overloading for exploratory purposes but wants subsequent MVPs to be narrower and more focused — "stress-test particular features in reaction to that with stricter deployments."
- User's push on MVP scoping reveals a preference for the "Half-it" rule: scope down first, then sequence. This is the correct order of operations per the skill's anti-patterns.

---

## Cycle 4: MVP Rescoping — 4 to 6, Advisor's Two-Stage Pipeline

### AI Critique
1. Proposed rescoping from 4 large MVPs (6-8 weeks each) to 6 narrower ones (2-4 weeks each), applying the "Half-it" rule.
2. Identified the advisor's two-stage pipeline from meeting notes: Stage 1 = AI generates provisional guides on-the-fly; Stage 2 = successful guides get promoted to permanent curriculum.
3. Asked the user where "creating new guides" fits in the sequence.

### User Response
> "For MVP 3, I think to a certain extent that fits with what we've already built (suggesting subgoals that already exist if relevant and guides and commenting your code to show fit). We still need to build functionalities for generating new subsubgoals/subgoals. So honestly I think all of your MVPs make relative sense to me."

### Document Delta
| Field | Before | After |
|---|---|---|
| MVP count | 4 MVPs | 6 MVPs (1, 1b, 2, 3, 4, 5) |
| MVP 1 duration | 4-6 weeks | 2-3 weeks |
| MVP 1b | Did not exist | New: internal analysis phase (no deployment), 1-2 weeks |
| MVP 2 | Query grouping + faculty gap reports (6-8 wks) | Query grouping only (3-4 wks) |
| MVP 3 | Contextualized scaffolding | Faculty Gap Validation — present gaps to faculty (2-3 wks). Old contextualized scaffolding noted as already partially built. |
| MVP 4 | Generated subgoals (full study) | Provisional Guide Generation — advisor's Stage 1 (3-4 wks) |
| MVP 5 | Did not exist | New: Curriculum Evolution Closure — advisor's Stage 2 (4-6 wks, full study). Guides get promoted to permanent curriculum. |
| Existing system capabilities | "fetches guides, logs queries, comments code" | Added "suggests existing subgoals where relevant (basic contextualized scaffolding)" |

### What shifted
- User confirmed that basic contextualized scaffolding (suggesting existing subgoals) is already built — this is not new work for MVP 3.
- The advisor's two-stage pipeline (generate → promote) naturally maps to two separate MVPs (4 and 5), which the user accepted.
- User's approval of the 6-MVP sequence resolves the earlier concern about MVPs being too large.

---

