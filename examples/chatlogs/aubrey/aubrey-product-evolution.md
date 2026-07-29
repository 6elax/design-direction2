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
