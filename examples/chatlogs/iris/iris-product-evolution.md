# Document Evolution Log — Causeway Practice Mode Product Definition

---

## Cycle 1: Initial Draft

### User Input
> the product plan should focus on Causeway Practice Mode which is a new set of features being built on top of an existing Causeway platform.
> 
> this whole project builds on a core underlying idea of micro-role based courses. in prior work, we explored it in a platform Causeway and in an analog program in our lab where we involve undergrads in experiential learning projects as they learn. the main idea is to organize content around micro-roles that scaffold pathways for experiential learning and mental models of ideal practice
> 
> the original platform (in Developer/causeway2) centers on a walkthrough mode where people "walk through" the implementation of tasks for different roles. they are essentially worked examples structured as micro-roles and enhanced by subgoal labels.
> 
> Causeway Practice Mode aims to extend beyond these worked examples to bring together the benefits of collaborative peer learning with personalized pathways for learning. you can particularly look at @[Causeway_Collaborative_Pathways_Paper_Draft (2).md] for a draft of a paper we're working on that describes practice mode. the other docs can give you context on the prior history and the framing of the big problem and need and value for the micro-role concept.

### AI Draft Summary
Defined the primary user as undergraduate novice developers transitioning from worked examples to collaborative projects. Identified the core need to bridge personalization with the unstructured nature of real-world group work. Articulated the solution as an AI-orchestrated platform using a micro-role hierarchy to assign tasks, restrict file access, and manage peer review. Positioned the value prop around safe, scalable experiential learning that prevents free-riding and overwhelming codebases. 

### What the AI added beyond what the user said
- Explicitly named the tension between "collaborative scale and individual personalization" as the core insight.
- Formulated testable hypotheses around equitable participation and faster milestone completion.
- Identified the "Aha moments" for users (e.g., realizing they only need to focus on a subset of files).
- Extracted the MVP boundaries (included RCP and AI criteria, excluded AI code generation and non-Angular stacks).
- Mapped the competitive landscape against 1-on-1 AI tutors and VSCode Liveshare.

---

## Cycle 2: Broadening Scope to Full Platform & Refining User

### AI Critique
1. 🚨 UNDEFINED-HIGH-EXPECTATION-CUSTOMER (Desperate Specificity): "Undergraduate students or novice programmers" is too broad. Need to narrow down to a specific human whose career or grade is on the line.
2. ⚠️ Weak Demand Evidence & Status Quo: Frustration is not demand. What is the cost of their current workaround?
3. ⚠️ The Insight is Academic, Not Behavioral: The tension between collaborative scale and personalization is an academic insight, not a behavioral one.
4. 🚨 Must-Have User is Too Generic: Who is the person who would use this even if it was buggy? 

### User Response
> 1. I think that the target user is: Undergrads who have not yet landed their first internship and are looking for project-based experiences and are looking to learn to build real projects. The need is that it's very hard to learn how to carry out/build real-world complex projects since a lot of that comes from apprenticeship learning. it's tough to build that mental model of ideal practice and understand the whole process. that's what we are trying to solve with causeway.
>
> I realized that for defining the product thesis, it might not make sense to define it just in terms of practice mode (later on the research side, we would like to focus on practice mode, but for thinking about user needs and product value, we really want to think about the overall causeway product that encompasses the entire micro-role based learning experience). given that, can you update the initial draft for that broader context? (the major problem / needs around experiential learning and our insight/approach to that)

### Document Delta
| Field | Before | After |
|---|---|---|
| Target User | Undergraduate students or novice programmers | Undergrads CS/SE students who have not yet landed their first internship |
| Core Need | Learn how to collaborate on a large-scale project without getting overwhelmed | Need project-based experience to become hirable; need mental models of ideal practice from apprenticeship |
| One-Liner | Causeway Practice Mode orchestrates collaborative... | Causeway is a micro-role based learning platform that simulates real-world software engineering apprenticeships... |
| Core Experience | Only detailed Practice Mode | Included Walkthrough Mode as the initial apprenticeship step |
| Scope | Limited to Practice Mode | Expanded to full Causeway platform |

### What shifted
- User narrowed scope of the target user to undergrads specifically seeking their first internship.
- User corrected AI framing by pushing back on the narrow scope of just Practice Mode, expanding it to the full Causeway platform to better capture the value proposition of building mental models of ideal practice.

---

## Cycle 3: Drilling Down on Cost, Users, and Insights

### AI Critique
1. 🚨 Challenge 1: The "Status Quo" Cost is Still Vague: What is the actual cost they are paying right now?
2. 🚨 Challenge 2: "Undergrads seeking first internship" is Still Too Broad: Who is the Must-Have user?
3. ⚠️ Challenge 3: Where is the Unexpected Insight?: "It's tough to build that mental model" is an academic fact. What is the non-obvious truth?

### User Response
> 1. the status quo is that people are vibe coding portfolio projects. this gives them something to show, but it doesn't actually help them learn it deeply. the portfolio projects can be often AI slop that they don't actually understand and could not actually build on further in a deep way. alternatively, people might use online tutorials or platforms to try to learn the topics, but struggle to really cross the bridge between the topical learning and connecting that to a process for building out a project. causeway brings both the organization of learning content to process, and in practice mode, the collaborative peer learning that helps to encourage quality and accountability
>
> 2. I think it would be first and second year students that want to join a project-based community (e.g. a research lab, a selective club) but do not yet have the appropriate skills to contribute and thus really want/need something that ramps them up into it.
>
> this is also making us realize, there is another user group which is the faculty / leaders of a club/project community who want to ramp up new members / learners into meaningful contributors to their projects. these are an important user.
>
> 3. I think the insight to me is that the environment for learning is often split between the learning and doing. the only contexts where these are combined together are contexts that are very selective and not scalable (like internships, etc.) so our insight is that there needs to be a way to bridge learning and doing in a scalable manner.
>
> most learning experiences are organized topically as opposed to being organized based on the process. so there isn't a really natural pathway for systematically developing understanding of the process. on the collaborative aspects, I think we are trying to say that there are a lot of motivational benefits to collaborative / peer learning, as well as peer support that can happen. it's not so much that authentic practice requires teamwork.

### Document Delta
| Field | Before | After |
|---|---|---|
| Target User | CS/SE students who have not yet landed their first internship | 1st or 2nd-year undergrads who want to join selective project communities (e.g., research labs) but lack practical skills |
| Secondary User | None | Faculty members running labs or student leads of selective clubs who need to onboard novices |
| Status Quo | Learn alone or join unstructured group projects | Vibe coding AI slop portfolios or doing topical tutorials that fail to teach process |
| Insight | Tension between collaborative scale and personalization | Learning is artificially split from doing; topical learning ignores the process of building |
| Must-Have User | Rising junior failing interviews | 1st/2nd year rejected from a lab because they can't contribute to existing code |

### What shifted
- User provided specific behavioral evidence for the status quo ("vibe coding AI slop").
- User narrowed the target user significantly to students seeking to join a *selective community*, introducing a concrete motivation.
- User identified a brand new secondary user segment (faculty/club leaders) who experience the pain of ramping up novices.
- User clarified the core insight: the split between learning and doing, and the flaw of topical vs. process-based learning.

---

## Cycle 4: Verifying Demand Evidence & Refining Secondary User

### AI Critique
None. User volunteered this unprompted based on the previous conversation.

### User Response
> on demand evidence, we actually have a lot of evidence of students wanting to join these experiences. we have 100 applications every quarter of students engaging with very intensive / time consuming applications. people repeatedly reaching out, etc.
>
> for the faculty must-have user: I think it's more faculty who are teaching longer-term capstone courses or running longer-lasting undergrad research programs like the research pathways / vip consortium.

### Document Delta
| Field | Before | After |
|---|---|---|
| Demand Evidence | Hypothesized students want to work on real projects... | Observed over 100 applications every quarter, engaging with intensive applications and reaching out repeatedly. |
| Secondary Must-Have User | Research lab director trying to double team size quickly | Faculty teaching longer-term capstone courses or running undergrad research programs (VIP consortium). |

### What shifted
- User corrected AI framing of the secondary user, clarifying they are faculty running structured programs (capstones/VIPs) rather than a lab director just needing rapid scale-up.
- User provided concrete behavioral evidence (100+ intensive applications per quarter) to validate the demand.

---

## Cycle 5: Shift to Conversational Walkthrough Dynamics

### User Input
> We would like to address this ongoing issue by making a new version of our walkthrough mode which is entirely conversational. We have been playing around with 3 different dynamics: our standard static guides we have been using for a while ago, a highlighting text triggered version of the static guides where when you highlight a text that was confusing it would trigger a modal where you can ask question and feedback and it would dynamically update the guide, and a fully chat based walkthrough thats completly dynamic but anchored by some context (think ai-tutor). We want to uncover what would be the product value in creating and launching these different versions into a broader learning community.

### AI Draft Summary
Updated the thesis to incorporate the new Conversational Walkthrough Mode. Reframed the core problem to include the failure of static guides (users skimming or skipping them, leading to under-preparedness). Defined the new core experience around testing three dynamic interactions: static (baseline), contextual Q&A (highlight-triggered), and fully chat-based AI tutor. Shifted the MVP focus to implementing and A/B testing these three variants to uncover product value for sense-making.

### Document Delta
| Field | Before | After |
|---|---|---|
| Status Quo | Vibe coding AI slop or doing topical tutorials that fail to teach process | Added that even with structured static guides, users skim/skip them and are under-prepared |
# Document Evolution Log — Causeway Practice Mode Product Definition

---

## Cycle 1: Initial Draft

### User Input
> the product plan should focus on Causeway Practice Mode which is a new set of features being built on top of an existing Causeway platform.
> 
> this whole project builds on a core underlying idea of micro-role based courses. in prior work, we explored it in a platform Causeway and in an analog program in our lab where we involve undergrads in experiential learning projects as they learn. the main idea is to organize content around micro-roles that scaffold pathways for experiential learning and mental models of ideal practice
> 
> the original platform (in Developer/causeway2) centers on a walkthrough mode where people "walk through" the implementation of tasks for different roles. they are essentially worked examples structured as micro-roles and enhanced by subgoal labels.
> 
> Causeway Practice Mode aims to extend beyond these worked examples to bring together the benefits of collaborative peer learning with personalized pathways for learning. you can particularly look at @[Causeway_Collaborative_Pathways_Paper_Draft (2).md] for a draft of a paper we're working on that describes practice mode. the other docs can give you context on the prior history and the framing of the big problem and need and value for the micro-role concept.

### AI Draft Summary
Defined the primary user as undergraduate novice developers transitioning from worked examples to collaborative projects. Identified the core need to bridge personalization with the unstructured nature of real-world group work. Articulated the solution as an AI-orchestrated platform using a micro-role hierarchy to assign tasks, restrict file access, and manage peer review. Positioned the value prop around safe, scalable experiential learning that prevents free-riding and overwhelming codebases. 

### What the AI added beyond what the user said
- Explicitly named the tension between "collaborative scale and individual personalization" as the core insight.
- Formulated testable hypotheses around equitable participation and faster milestone completion.
- Identified the "Aha moments" for users (e.g., realizing they only need to focus on a subset of files).
- Extracted the MVP boundaries (included RCP and AI criteria, excluded AI code generation and non-Angular stacks).
- Mapped the competitive landscape against 1-on-1 AI tutors and VSCode Liveshare.

---

## Cycle 2: Broadening Scope to Full Platform & Refining User

### AI Critique
1. 🚨 UNDEFINED-HIGH-EXPECTATION-CUSTOMER (Desperate Specificity): "Undergraduate students or novice programmers" is too broad. Need to narrow down to a specific human whose career or grade is the line.
2. ⚠️ Weak Demand Evidence & Status Quo: Frustration is not demand. What is the cost of their current workaround?
3. ⚠️ The Insight is Academic, Not Behavioral: The tension between collaborative scale and personalization is an academic insight, not a behavioral one.
4. 🚨 Must-Have User is Too Generic: Who is the person who would use this even if it was buggy? 

### User Response
> 1. I think that the target user is: Undergrads who have not yet landed their first internship and are looking for project-based experiences and are looking to learn to build real projects. The need is that it's very hard to learn how to carry out/build real-world complex projects since a lot of that comes from apprenticeship learning. it's tough to build that mental model of ideal practice and understand the whole process. that's what we are trying to solve with causeway.
>
> I realized that for defining the product thesis, it might not make sense to define it just in terms of practice mode (later on the research side, we would like to focus on practice mode, but for thinking about user needs and product value, we really want to think about the overall causeway product that encompasses the entire micro-role based learning experience). given that, can you update the initial draft for that broader context? (the major problem / needs around experiential learning and our insight/approach to that)

### Document Delta
| Field | Before | After |
|---|---|---|
| Target User | Undergraduate students or novice programmers | Undergrads CS/SE students who have not yet landed their first internship |
| Core Need | Learn how to collaborate on a large-scale project without getting overwhelmed | Need project-based experience to become hirable; need mental models of ideal practice from apprenticeship |
| One-Liner | Causeway Practice Mode orchestrates collaborative... | Causeway is a micro-role based learning platform that simulates real-world software engineering apprenticeships... |
| Core Experience | Only detailed Practice Mode | Included Walkthrough Mode as the initial apprenticeship step |
| Scope | Limited to Practice Mode | Expanded to full Causeway platform |

### What shifted
- User narrowed scope of the target user to undergrads specifically seeking their first internship.
- User corrected AI framing by pushing back on the narrow scope of just Practice Mode, expanding it to the full Causeway platform to better capture the value proposition of building mental models of ideal practice.

---

## Cycle 3: Drilling Down on Cost, Users, and Insights

### AI Critique
1. 🚨 Challenge 1: The "Status Quo" Cost is Still Vague: What is the actual cost they are paying right now?
2. 🚨 Challenge 2: "Undergrads seeking first internship" is Still Too Broad: Who is the Must-Have user?
3. ⚠️ Challenge 3: Where is the Unexpected Insight?: "It's tough to build that mental model" is an academic fact. What is the non-obvious truth?

### User Response
> 1. the status quo is that people are vibe coding portfolio projects. this gives them something to show, but it doesn't actually help them learn it deeply. the portfolio projects can be often AI slop that they don't actually understand and could not actually build on further in a deep way. alternatively, people might use online tutorials or platforms to try to learn the topics, but struggle to really cross the bridge between the topical learning and connecting that to a process for building out a project. causeway brings both the organization of learning content to process, and in practice mode, the collaborative peer learning that helps to encourage quality and accountability
>
> 2. I think it would be first and second year students that want to join a project-based community (e.g. a research lab, a selective club) but do not yet have the appropriate skills to contribute and thus really want/need something that they ramps them up into it.
>
> this is also making us realize, there is another user group which is the faculty / leaders of a club/project community who want to ramp up new members / learners into meaningful contributors to their projects. these are an important user.
>
> 3. I think the insight to me is that the environment for learning is often split between the learning and doing. the only contexts where these are combined together are contexts that are very selective and not scalable (like internships, etc.) so our insight is that there needs to be a way to bridge learning and doing in a scalable manner.
>
> most learning experiences are organized topically as opposed to being organized based on the process. so there isn't a really natural pathway for systematically developing understanding of the process. on the collaborative aspects, I think we are trying to say that there are a lot of motivational benefits to collaborative / peer learning, as well as peer support that can happen. it's not so much that authentic practice requires teamwork.

### Document Delta
| Field | Before | After |
|---|---|---|
| Target User | CS/SE students who have not yet landed their first internship | 1st or 2nd-year undergrads who want to join selective project communities (e.g., research labs) but lack practical skills |
| Secondary User | None | Faculty members running labs or student leads of selective clubs who need to onboard novices |
| Status Quo | Learn alone or join unstructured group projects | Vibe coding AI slop portfolios or doing topical tutorials that fail to teach process |
| Insight | Tension between collaborative scale and personalization | Learning is artificially split from doing; topical learning ignores the process of building |
| Must-Have User | Rising junior failing interviews | 1st/2nd year rejected from a lab because they can't contribute to existing code |

### What shifted
- User provided specific behavioral evidence for the status quo ("vibe coding AI slop").
- User narrowed the target user significantly to students seeking to join a *selective community*, introducing a concrete motivation.
- User identified a brand new secondary user segment (faculty/club leaders) who experience the pain of ramping up novices.
- User clarified the core insight: the split between learning and doing, and the flaw of topical vs. process-based learning.

---

## Cycle 4: Verifying Demand Evidence & Refining Secondary User

### AI Critique
None. User volunteered this unprompted based on the previous conversation.

### User Response
> on demand evidence, we actually have a lot of evidence of students wanting to join these experiences. we have 100 applications every quarter of students engaging with very intensive / time consuming applications. people repeatedly reaching out, etc.
>
> for the faculty must-have user: I think it's more faculty who are teaching longer-term capstone courses or running longer-lasting undergrad research programs like the research pathways / vip consortium.

### Document Delta
| Field | Before | After |
|---|---|---|
| Demand Evidence | Hypothesized students want to work on real projects... | Observed over 100 applications every quarter, engaging with intensive applications and reaching out repeatedly. |
| Secondary Must-Have User | Research lab director trying to double team size quickly | Faculty teaching longer-term capstone courses or running undergrad research programs (VIP consortium). |

### What shifted
- User corrected AI framing of the secondary user, clarifying they are faculty running structured programs (capstones/VIPs) rather than a lab director just needing rapid scale-up.
- User provided concrete behavioral evidence (100+ intensive applications per quarter) to validate the demand.

---

## Cycle 5: Shift to Conversational Walkthrough Dynamics

### User Input
> We would like to address this ongoing issue by making a new version of our walkthrough mode which is entirely conversational. We have been playing around with 3 different dynamics: our standard static guides we have been using for a while ago, a highlighting text triggered version of the static guides where when you highlight a text that was confusing it would trigger a modal where you can ask question and feedback and it would dynamically update the guide, and a fully chat based walkthrough thats completly dynamic but anchored by some context (think ai-tutor). We want to uncover what would be the product value in creating and launching these different versions into a broader learning community.

### AI Draft Summary
Updated the thesis to incorporate the new Conversational Walkthrough Mode. Reframed the core problem to include the failure of static guides (users skimming or skipping them, leading to under-preparedness). Defined the new core experience around testing three dynamic interactions: static (baseline), contextual Q&A (highlight-triggered), and fully chat-based AI tutor. Shifted the MVP focus to implementing and A/B testing these three variants to uncover product value for sense-making.

### Document Delta
| Field | Before | After |
|---|---|---|
| Status Quo | Vibe coding AI slop or doing topical tutorials that fail to teach process | Added that even with structured static guides, users skim/skip them and are under-prepared |
| Core Concept | Scaffolding structured learning and collaborative peer learning | Generative AI offers a powerful paradigm for personal learning at scale via conversational AI walkthroughs |
| Core Experience | Walkthrough Mode as static guided worked examples | Walkthrough Mode as a conversational sense-making stage testing 3 dynamics (static, contextual Q&A, chat-based) |
| MVP | Walkthrough worked examples, real-time editor, basic AI criteria | Implementation and A/B testing of the three Walkthrough Mode dynamics |

### What shifted
- The project direction pivoted to focus specifically on the evolution of Walkthrough Mode into a conversational generative AI experience to solve the "skimming" problem of static guides.

---

## Cycle 6: Clarifying Skimming and the Faculty Persona

### AI Critique
1. 🚨 **Contradiction in Motivation (The Skimming Problem):** If students are desperate to join, why do they skim? Is it a motivation issue or a cognitive one?
2. ⚠️ **Who owns the problem?** The faculty member pays the cost of skimming (wasted time, bad code). Should value be framed around assuring the community leader?
3. 🚨 **Status Quo Cost is Vague:** What is the actual tangible cost when they skim the guides?

### User Response
> 1. Desperate Specificity: students who join are scared of asking questions to their near peers/mentors. People are more comfortable asking questions to an LLM. Integrating LLMs into early sense-making builds confidence.
> 2. The Unexpected Insight: They skim because they don't know what to search for. Mentors have to tell people what to look for, when research is about finding your own questions.
> 3. Demand Reality (Faculty): PIs are pushed to run UREs for tenure and PhD mentorship training. If undergrads upskill quickly, they drive development and co-author publications.
> 4. Status Quo: Open-ended ChatGPT hallucinates and doesn't follow lab procedure.

### Document Delta
| Field | Before | After |
|---|---|---|
| Primary Insight | Learning is split from doing; students skim | Added the psychological safety issue (fear of asking peers) and the meta-cognitive gap (don't know what to search for) |
| Primary Status Quo | Skim static guides, leaving them under-prepared | ChatGPT hallucinates; static guides require mentors to manually point out what to look for |
| Secondary Need | Scalable way to ramp up novices | Need to satisfy admin mandates for UREs and upskill undergrads to co-author papers without burning out PhDs |
| Secondary Status Quo | Throw novices in deep end | Mentors spend hours telling students exactly what to look for in the guides, or students use hallucinating LLMs and drop out |

### What shifted
- The root cause of the "skimming" problem was identified: it's not a lack of motivation, but a combination of intimidation (lack of psychological safety) and a meta-cognitive gap (not knowing what questions to ask).
- The cost to the secondary user (faculty) was made much more tangible: the burden falls on PhD mentors to manually guide students through the material.
- The competitive advantage over open-ended LLMs like ChatGPT was clarified: open-ended LLMs hallucinate and ignore specific lab procedures.

---

## Cycle 7: Advisor Alignment & MCP Server Refocus

### Context & Trigger
- **Section(s) affected:** All (Target User & Need, Product & Value Proposition, Unique Differentiation)
- **What triggered the change:** The user (Aubrey, now a PhD student taking over from undergrad advisees) brought two meeting transcripts from their advisor that revealed significant drift between the existing product thesis and the advisor's vision. The agent performed a drift analysis identifying 5 areas of misalignment.

### AI Critique (Drift Analysis)
1. Underweighted the 'AI reliance crisis' framing.
2. Overemphasized walkthrough mode learner-sourcing vs. MCP-based learner-sourcing.
3. Described 'naive linking' when the advisor wanted contextualizing practice.
4. Used a 'fade-out mechanic' for unmapped concepts when the advisor wanted generated subgoals.
5. Risked feeling like 'two papers glued together.'

### User Response (Verbatim)
- **On Scope:** "Yes, let's keep it focused to what my advisor wants. The whole platform (e.g., Practice Mode) is its own paper that exists separate from us."
- **On Generated Subgoals:** "Yes, let's do what my advisor wants. I think it's very possible, with how hard it is to develop these walkthrough mode worked examples to begin with, that we may not have enough content to cover every scenario – it's simply unfeasible. generating subgoals (and more specifically subsubgoals) will serve our general community more, as repeated questions indicate the existing content doesn't cover it well enough or not at all."
- **On Two Papers Risk:** "I think we can naturally balance both with our focus on the MCP server as the system."

### Document Delta
| Field | Before | After |
|---|---|---|
| Document Title | Causeway Practice Mode Product Definition | Causeway MCP Server Product Thesis |
| Core Experience | Link routing + fade-out mechanic | Contextualized practice scaffolding + generated subgoals + curriculum evolution through use |
| Competitive Positioning | Generic AI tutors / VSCode Liveshare | CodeAid (CHI 2024), AutoPBL (CHI 2025), and CodeHelp |
| Narrative Structure | Split between platform practice and learner-sourcing | Unified story: the same system that scaffolds learning naturally produces data for curriculum evolution |
| Validation Plan | Basic MVP testing ideas | Formalized Validation Plan section with 4 hypotheses |

### What Shifted
- Complete restructuring:
  1. Title changed to 'Causeway MCP Server Product Thesis' to scope to the MCP server.
  2. Core Experience rewritten from 'link routing + fade-out' to 'contextualized practice scaffolding + generated subgoals + curriculum evolution through use.'
  3. Comparative positioning updated with CodeAid (CHI 2024), AutoPBL (CHI 2025), and CodeHelp.
  4. Unified story: the same system that scaffolds learning naturally produces data for curriculum evolution.
  5. Added Validation Plan section with 4 hypotheses.

### What the AI Added Beyond What the User Said
- The agent introduced specific competitor comparisons (CodeAid, AutoPBL, CodeHelp).
- Reframed the 'Why Now' around CS enrollment declines.
- Added the concept of 'provisional subgoals' as terminology.
- Structured the unified scaffolding+learnersourcing story around the phrase 'curriculum evolution through use.'

---

## Cycle 8: Target User Broadening & Institutional Adoption

### Context & Trigger
- **Section(s) affected:** Target User & Need
- **What triggered the change:** Agent presented four critiques of the Target User & Need section. User responded to all four with substantive pushback and clarifications.

### AI Critique
1. Primary user '1st or 2nd-year undergrads' is a category, not a person — needs more specificity.
2. 'Entry point into complex coding tasks' is vague.
3. Demand evidence is weak for the MCP server specifically — proves demand for the program, not the tool.
4. Faculty 'buyer' framing doesn't match actual access pattern if it's an open MCP server students install themselves.

### User Response (Verbatim)
- **On broadening the user:** "We should accommodate *everyone* in our program. We imagine people using this MCP server in later stages of sense-making after successful completion of a web development skill-building program organized after micro-roles, assuring some degree of familiarity with web development to level the playing field. After ~6 weeks of Practice Mode, they can move onto new projects where this MCP server might still be necessary for handling this transition period and sense-making phase."
- **On going even broader:** "I will push back on 'a student who is learning to code in their own repository and using AI tools'. A student should get their own codebase. I was thinking even broader like open-source repos that are super complex and often completely hard to jump into since there's weak scaffolding beyond 'good first issue', despite such sites being perfect for LPP."
- **On entry point meaning:** "I meant it as decomposing subgoals, as the point of subgoals is for you to pick up the process. In decomposing it to subgoals/subsubgoals, you can devise a plan of action."
- **On demand:** "I don't think your average Joe will want to use it, and really faculty and undergraduate program leads will need to advocate for this system: if people don't get micro-roles and the fundamentals, how can they be successful in research?"
- **On faculty as buyers:** "I think they're buyers in the sense that using this system should help their underlings build their skillsets while also scaffolding the tasks assigned to them."

### What Changed in the Document
1. Target user broadened from 'students trying to join selective communities' to 'students working on complex, unfamiliar codebases' including open-source repos and research lab codebases.
2. Core need sharpened to 'decomposing unfamiliar tasks into subgoals/subsubgoals to devise a plan of action.'
3. Demand evidence now explicitly acknowledges weak self-selection — adoption depends on institutional advocacy.
4. Faculty reframed as 'Buyers & Advocates' who champion adoption.
5. Added open-source onboarding as a 'Why Now' factor and comparative positioning entry.
6. Added H5 to Validation Plan about institutional adoption dependency.

### What the AI Added Beyond What the User Said
- Framed the open-source angle as an LPP gap.
- Added 'vs. Open-Source Onboarding (Good First Issue)' comparative positioning.
- Introduced 'institutional adoption path' as an explicit hard tradeoff.
- Surfaced the self-selection hypothesis as H5 in the Validation Plan.

---

## Cycle 9: Scope Tightening, Concrete Must-Have User, and Coexistence Model

### Context & Trigger
- **Section(s) affected:** Target User & Need, Hard Tradeoffs, Comparative Positioning
- **What triggered the change:** Agent pushed a second time on three tensions from the user's previous responses: (A) open-source vision creates scope tension with Angular/Firebase MVP, (B) 'everyone in our program' is the HORIZONTAL-DILUTION anti-pattern, (C) institutional adoption dependency is the biggest risk.

### AI Critique
1. **Open-source scope tension:** Open-source repos require entirely generated subgoals since no curated curriculum exists for arbitrary frameworks.
2. **Horizontal dilution:** Pushed the user to name ONE specific student ('everyone in our program' is the HORIZONTAL-DILUTION anti-pattern).
3. **Adoption fragility:** Adoption chain has four links (faculty understands value, believes it works, mandates it, students don't switch back to Copilot) — any break kills adoption.

### User Response (Verbatim)
- **On open-source scope:** "I 100% agree about the off-hand open-source mention I made. That is not in the scope of this paper and just could be a long-term product direction post- our first paper."
- **On naming one person:** "I'm not going to give a specific name, but there are some people who come to mind who should work on open-ended tasks independently, but really struggled because it wasn't achievable just through AI – they needed to bring their own conceptual understanding to the problem (it was specifically about Flexbox, which is covered in the Layout subgoal). Our system should reaffirm and reintroduce subgoal content, and extend their understanding further via an MCP server."
- **On adoption:** "Enforcement mechanism would be server logs. I think students will come to appreciate the platform for what it does, but I do anticipate initial hesitancy using this over Copilot (but I think both systems can coexist?)"

### What Changed in the Document
1. Open-source removed from Target User, Core Experience, and Why Now sections; moved to future expansion only.
2. Must-Have User rewritten around the concrete Flexbox/Layout subgoal example.
3. 'Not an AI Copilot' hard tradeoff replaced with 'Complements, Not Replaces, Code Generation' — reframed as coexistence model.
4. Open-source comparative positioning marked as [Future].
5. Server logs added as enforcement/observability mechanism.

### What the AI Added Beyond What the User Said
- Framed the Flexbox example as 'reactivating Layout subgoal knowledge' in a new context.
- Introduced the concept of a 'complementary scaffolding layer' to describe the coexistence model.
- Added 'their struggle is observable and concrete' to the must-have user description.

---

## Cycle 10: Reverting Coexistence Model — Keeping 'Refuses to Write Code'

### Context & Trigger
- **Section(s) affected:** Target User & Need (Insight), Unique Differentiation (Hard Tradeoffs)
- **What triggered the change:** Agent asked whether 'refuses to write code' or a coexistence model with Copilot was the right framing, based on user's earlier mention of both systems coexisting.

### AI Critique
Pointed out that if the MCP server coexists with Copilot, it doesn't actually 'refuse' anything — the student can always ask Copilot for code. Suggested reframing to 'complementary scaffolding layer.'

### User Response (Verbatim)
- "Maybe I just threw out the copilot mention in my message, but don't focus on it. 'Refuses to write code' is still the right framing. Otherwise, we're good to move on."

### What Changed in the Document
Reverted 'Complements, Not Replaces, Code Generation' hard tradeoff back to 'Not an AI Copilot: The MCP server explicitly refuses to generate or autocomplete code.' Reverted Insight section back to the paradox framing. Coexistence language removed throughout.

### What the AI Added Beyond What the User Said
Nothing — this was a pure revert based on user's strong stance.

---

## Cycle 11: Product & Value Proposition Review — Socratic One-Liner, Progressive MVPs, and Hypothesis Prioritization

### Context & Trigger
- **Section(s) affected:** Product & Value Proposition, Validation Plan, Appendix
- **What triggered the change:** Agent reviewed the Product & Value Proposition section against the forcing questions from the skill resource, presenting 5 critiques: (1) one-liner fails copy-paste test, (2) Core Experience Step 2 describes unseen interaction, (3) student aha moment is too neat, (4) testable hypothesis tests two things at once, (5) MVP is too big.

### AI Critique
1. One-liner is 45 words with abstract language.
2. Has the contextualized scaffolding interaction been prototyped?
3. Will student problems always map cleanly to a single subgoal?
4. The advisor warned against 'two papers glued together' — the hypothesis has the same problem.
5. Narrowest wedge principle: what could ship this week?

### User Response (Verbatim)
- **On one-liner:** "The alternative makes sense, but honestly the harping on the refuses to write code is a turnoff to me. Is there a way to more attractively present the Socratic elements?"
- **On Core Experience:** "We have built an MVP for linking guides based on a query already. The parts we're working on now are logging different interaction patterns following a query and response."
- **On aha moment:** "I think this example isn't off since Queries is pretty critical part of our workflow and many struggle on just that. I can agree though that it could be a more complex example for later MVPs."
- **On hypothesis:** "I'm not sure since I think to some extent my advisor will want both. I suppose the learner-sourcing is interesting to me."
- **On MVP:** "You're so right, we should have smaller MVPs (e.g., an MCP server that's basically a RAG DB that fetches the closest Causeway guide), and then progressively build more and more per feedback."

### What Changed in the Document
1. One-liner rewritten to emphasize Socratic guidance: 'walks students through how experts break down coding tasks — step by step, in their own IDE — so they learn the process, not just get the answer.'
2. Core Experience Step 2 annotated with implementation status.
3. Testable hypothesis split into primary (learnersourcing) and secondary (scaffolding effectiveness).
4. MVP restructured into 4 progressive stages: RAG guide fetching (Built) → Interaction logging (In Progress) → Contextualized scaffolding (Planned) → Generated subgoals (Planned).
5. Validation Plan reordered with learnersourcing hypotheses first.
6. Deferred issue added: confirming hypothesis priority with advisor.

### What the AI Added Beyond What the User Said
- Proposed the specific Socratic one-liner wording.
- Interpreted advisor transcripts to propose learnersourcing as primary hypothesis (advisor said scaffolding alone 'doesn't have that much to talk about').
- Structured the 4-stage MVP progression.
- Flagged the hypothesis priority as a deferred issue requiring advisor confirmation.

---

## Cycle 12: One-Liner Finalized & MVP Study Scope Clarified

### Context & Trigger
- **Section(s) affected:** Product & Value Proposition (One-Liner, Narrowest Wedge)
- **What triggered the change:** Agent pushed a second time on two items: (A) does the new one-liner differentiate from generic AI tutoring? (B) which MVP is the paper's MVP?

### AI Critique
1. 'Walks students through how experts break down tasks' could describe any AI tutor. Suggested alluding to the micro-role curriculum as the differentiator.
2. MVP 1 alone doesn't produce interesting paper results — which MVPs does the paper need?

### User Response (Verbatim)
- **On one-liner:** "I would like to allude to the micro-roles in some way as its our distinguisher, so your one-liner is an improvement."
- **On MVP scope:** "MVP 4 is what I want for a full study, but we can do formative studies with earlier versions."

### What Changed in the Document
1. One-liner updated to: 'The Causeway MCP Server maps a student's coding task to a structured curriculum of expert practices — showing them the steps, not writing the code — right in their IDE.'
2. MVP 4 annotated as 'Full Study Target — Required for the full study and primary learnersourcing contribution.' MVPs 1-3 annotated as 'Supports formative studies.'

### What the AI Added Beyond What the User Said
- Proposed the specific one-liner wording with 'structured curriculum of expert practices' to allude to micro-roles.
- Added study-scope annotations to each MVP.

---

## Cycle 13: Unique Differentiation Review — In-the-Wild Advantage & Future-Fit Defense

### Context & Trigger
- **Section(s) affected:** Unique Differentiation, Appendix
- **What triggered the change:** Agent reviewed the Unique Differentiation section against the forcing questions from the skill resource, presenting 4 critiques: (1) Data Flywheel listed twice and unproven, (2) 'in-the-wild' positioning buried instead of elevated, (3) Future-Fit conviction untested, (4) missing Pricing Model.

### AI Critique
1. Flywheel is MVP 4 vision, not yet implemented.
2. The strongest differentiator (operating in the student's authentic codebase vs bounded contexts) isn't called out as a first-class structural advantage.
3. What if vibecoding becomes a legitimate professional skill and deep understanding becomes niche?
4. Template has a pricing field.

### User Response (Verbatim)
- **On data flywheel:** "Why is it a bad thing if we can reasonably implement this by fall?"
- **On in-the-wild:** "Yes" (agreed to elevate).
- **On future-fit:** "I'm sticking to my guns with this one, since mostly every online forum will agree with me. How can you prompt AI effectively and detect BS without getting the fundamentals?"
- **On pricing:** "Deferred or not relevant since this is an academic tool."

### What Changed in the Document
1. 'In-the-Wild Scaffolding' added as a new structural advantage (Product Advantage), described as 'the single sharpest differentiator.'
2. Data Flywheel kept in both locations but annotated with implementation timeline (Fall 2025, currently hypothesized).
3. 'In-the-Wild Data' added to Sustainability & Moat.
4. Future-Fit thesis strengthened with user's reasoning: 'You cannot prompt AI effectively or detect errors in AI-generated code without understanding the fundamentals.'
5. Pricing Model added as 'Not applicable — academic research tool. Deferred.'
6. Four new stances added to Appendix.

### What the AI Added Beyond What the User Said
- Framed in-the-wild as 'Product Advantage' using the structural advantages taxonomy.
- Added 'In-the-Wild Data' as a separate moat entry.
- Composed the specific language for the Future-Fit addition.

---

## Cycle 14: Validation Plan Synchronization

### Context & Trigger
- **Section(s) affected:** Product & Value Proposition (Core Experience, Narrowest Wedge), Validation Plan
- **What triggered the change:** User explicitly requested to sync the product thesis with the newly defined `validation-plan.md` and `validation-plan-chat.md`.

### Document Delta
| Field | Before | After |
|---|---|---|
| Core Experience | MVP 2 logged interactions | Updated to reflect query grouping, learnersourcing, and provisional guide generation based on the validation plan |
| Progressive MVPs | MVPs 1-4 (fetching guides to generated subgoals) | MVPs 1-5 (Technology Probe, Probe Analysis, Query Grouping, Faculty Gap Validation, Provisional Guide Gen, Curriculum Evolution Closure) |
| Validation Plan | Basic H1-H5 list | Updated to H3, H4, H7, H8, H10 from the validation plan, referencing the full list of 10 hypotheses in `validation-plan.md` |

### What Changed in the Document
1. Updated the Core Experience and Progressive MVPs to match the 5-MVP sequence defined in the validation plan.
2. Updated the Validation Plan section to highlight the primary and secondary research contributions (H7, H8) and key product/adoption hypotheses (H3, H4, H10) mapped in the new validation plan.


