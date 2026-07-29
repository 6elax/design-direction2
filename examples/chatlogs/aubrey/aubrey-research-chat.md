# Research Thesis Chat Log — Causeway Conversational-UX

This document is a verbatim record of the conversation during the Research Thesis phase. It captures the full text of each substantive exchange — user responses, agent challenges, and key decisions — but excludes purely orchestration messages (e.g., "Let me check the freeze file," "Now let me run the script"), agent-learning log entries, and system metadata.

This record is intended to support reflection on the AI-collaboration process — how ideas evolve, where the human and agent push back on each other, and how the positioning is iteratively sharpened.

---

## Phase 1: Relevant Research Threads

### 👤 User

/define-research Reference the materials in the repository about Conversational-UX as we discuss the product plan and its purpose within the product thesis. We aim to explore learner sourcing in a way to provide novel results by researching how to use ai in learner sourcing or how working with real content in peoples repository instead of topical content in useful in learner-sourcing. We have an existing walkthrough mode in which users can go through a guide to teach them web development through a set of microroals and assigned subgoals, so when users interact with a real code base and use our mcp server we want to learn about learner sourcing from this.

---

### 🤖 Agent

Here is the initial draft: research-thesis.md. I will now review each section one at a time and push hard on vague thread identification, unverified gap claims, and contribution framings that won't survive peer review. My goal is to challenge you and sharpen the research positioning!

This is an open discussion. If you disagree with my critiques, push back and explain your reasoning — your perspective on what matters in the field is crucial. You can also flag areas where you need to do more reading before committing to a position.

***

### Step 1: Reviewing Relevant Research Threads

Let's start with the **Relevant Research Threads**. Here is what I currently have in the document:

1. **Implicit Learner-Sourcing from Authentic Struggles:** Using AI to observe "in-the-wild" struggles to identify missing curriculum steps implicitly, rather than relying on explicit student authorship (like PeerWise).
2. **Situated Scaffolding: Real Content vs. Topical Sandboxes:** The tension between the authenticity of real-world open-ended repositories and the predictability of scaffolded sandboxes, and how contextual AI (MCP) bridges this.
3. **Conversational-UX for Pedagogical Routing and Fading:** Designing conversational AI to explicitly refuse code generation in favor of pedagogical routing, to combat the "reliance trap" seen in standard LLM coding assistants.

#### My Critiques (Black Hat Stance):

I'm going to push back hard on these to make sure they are rigorous, reviewer-proof conversations rather than just product features:

*   **Critique on Thread 1 (Implicit Learner-Sourcing):** This sounds more like a description of Causeway's feature than an established academic conversation. Is "implicit learner-sourcing" a recognized term with a community of scholars? While learner-sourcing (e.g., PeerWise) is a known thread, who is specifically talking about extracting curriculum gaps from *unprompted student failure data*? Can you name 2-3 specific papers or authors investigating this tension, or are we just hoping this thread exists?
*   **Critique on Thread 2 (Situated Scaffolding):** This feels too broad and field-level. "Situated learning vs topical sandboxes" is an old debate (going back to Lave & Wenger or Collins). What is the *specific modern conversation* we are entering? Are we participating in the computing education literature about authentic open-source contributions vs. toy assignments? Or are we talking about the limits of Intelligent Tutoring Systems (ITS) in open-ended environments? We need to narrow this down significantly.
*   **Critique on Thread 3 (Conversational-UX):** "Conversational-UX" is an entire field. The actual tension here seems to be about the **AI reliance trap in computing education** (e.g., the recent work by Kazemitabaar et al. or Prather et al. on Copilot). We should reframe this thread strictly around *over-reliance on generative AI vs. sense-making*. Does the field already agree that fading/routing is the solution to the Copilot reliance trap, or is that exactly what remains untested? 

**Your turn:** How would you respond to these challenges? Are there specific papers or narrower conversations you want to anchor these threads to, or should we rethink the framing?

---

### 👤 User

Critique on Thread 1 (Implicit Learner-Sourcing):
Can you help me know where to start to start looking into this thread

Critique on Thread 2 (Situated Scaffolding): 
I believe we have a greater focus on enabling a user to contribute while learning vs toy assignments where the answers are predefined. By enabling a user to use this mcp server is a changing code base it allows the user to learn by doing and also recognize their own gaps in understanding. Then, rather than asking an agent to solve the issue for them or struggle to find relavent content that would be applicable to their situation the mcp server would provide the tools for them to learn the content they need to know rather than go through a prestructured guide which teaches them content which may not be relavent in the moment.

Critique on Thread 3 (Conversational-UX)
I agree that the tension seems to be about reliance on AI and skimming over learning resources which result in users not having a deep understanding on the content they're interacting with. Where can I find more resources on what the field agrees with and what is untested

---

### 🤖 Agent

I've updated the `research-thesis.md` document with your feedback! Specifically, I completely reframed **Thread 2** to focus on the tension between "Just-in-Time Scaffolding in Authentic Repositories" and "Predefined Toy Assignments," capturing your insight about providing tools for just-in-time learning in changing codebases rather than prestructured guides. I've also logged your need for more reading on Threads 1 and 3 as **Deferred Issues** in the Appendix. I've launched a background process to update the project evolution log with our discussion.

Here is some guidance to help you start looking into the literature for those two threads:

**For Thread 1 (Implicit Learner-Sourcing):**
You'll want to search for work sitting at the intersection of "learner sourcing" and "educational data mining." Key search terms include:
*   *Implicit crowdsourcing in education* or *implicit learner sourcing*
*   *Data-driven hint generation* (look at work by John Stamper, Neil Heffernan, or the intelligent tutoring systems community)
*   *Mining student code for misconceptions*
*   Check if anyone has used the term "learner sourcing" to describe harvesting log data rather than explicitly asking students to write questions.

**For Thread 3 (Conversational-UX / AI Reliance):**
There has been a massive wave of recent papers on LLM over-reliance in computing education that you can dig into. Key search terms and starting points:
*   Kazemitabaar et al. (2023): *"Studying the effect of AI Code Generators on Supporting Novice Learners in Introductory Programming"* (Discusses the learning vs. productivity tradeoff).
*   Prather et al. (2024): *"The Robots Are Here: Navigating the Generative AI Revolution in Computing Education"*
*   Search terms: *AI reliance in programming education*, *LLM overreliance novices*, *scaffolding vs. code generation in AI tutors*. The untested part is usually whether explicitly *refusing* generation in an authentic environment actually works to combat this reliance without destroying user motivation.

Since you've flagged that you need to do more reading on these threads before committing to a final stance, I've safely logged them in the Appendix. 

I think we've examined this thoroughly enough to move on. Does the Relevant Research Threads section of research-thesis.md look complete to you, or is there anything else we need to tighten up before moving on to Theory Recommendations? Once you confirm, I will save the chat transcript.

---

### 👤 User

One thread that I like is Top-Down Expect scaffolding vs Bottom-Up Telemetry Curation as it trys to get around the blind spots of 'Experts' designing course material. It could contribute by demonstrating how IDE telemetry can be used to audit, evaluate, and restructure subgoals. This could replace thread 1. Thread 3 I'm not exactly sure I want this to be my thread what could be other threads to explore around this idea of learn-sourcing

---

### 🤖 Agent

I love the pivot for Thread 1! "Top-Down Expert Scaffolding vs. Bottom-Up Telemetry Curation" is a phenomenal framing. It directly tackles the "curse of knowledge" by pitting traditional, expert-designed curriculum against dynamic, data-driven restructuring using IDE telemetry. I have completely replaced Thread 1 in the document with this new framing and updated the evolution log.

For **Thread 3**, if you want to move away from AI Reliance and focus more heavily on the tensions *within* learner-sourcing, we have a few great options. Here are three potential tensions we could explore to replace Thread 3. Let me know which of these resonates with you the most, or if they spark a different idea:

**Option A: The Burden of Sourcing — Explicit Authorship vs. Implicit Exhaust**
*   **The Tension:** Traditional learner-sourcing systems (like PeerWise) force learners to stop what they are doing and explicitly author content (e.g., write a multiple-choice question or a hint). Our approach uses "implicit exhaust"—the natural struggle captured by telemetry—so the learner never has to stop working. 
*   **Why it's strong:** It challenges the assumption that learner-sourcing requires an active "creator" mindset, arguing that authentic failure is more valuable than authored hints.

**Option B: Validation and Trust — Expert Gatekeeping vs. Crowdsourced Evaluation**
*   **The Tension:** Once telemetry curates a potential gap or new subgoal, who decides if it's correct and gets integrated into the official curriculum? Does the AI dynamically restructure it based purely on the crowd's data, or is there an expert-in-the-loop?
*   **Why it's strong:** It tackles the quality-assurance problem inherent in learner-sourcing. If we bypass experts to find the gaps, do we still need them to validate the fixes?

**Option C: The Dual-Purpose Intervention — System Auditing vs. Individual Scaffolding**
*   **The Tension:** We are trying to do two things at once: help the individual student in the moment (scaffolding) *and* extract high-fidelity telemetry to fix the curriculum (auditing). Sometimes these conflict—giving the student the answer right away helps *them*, but letting them struggle helps *the system* map the gap.
*   **Why it's strong:** It exposes a core design tension in AI-mediated learning. How do we design an MCP agent that balances the pedagogical needs of the individual against the data needs of the learner-sourcing engine?

Which of these threads feels most aligned with the story you want to tell? Once we lock in Thread 3, we can do a final check and move on to Theory Recommendations!

---

### 👤 User

I'm not sure, please reevaluate my current thread and provide critique and recommendation

---

### 🤖 Agent

Let's take a step back and look at the "engine" we are building with Threads 1 and 2. 

Right now, your two locked-in threads form a really beautiful loop:
*   **Thread 2 (The Learning Environment):** You are putting learners into authentic, open-ended repositories and giving them Just-in-Time (JIT) scaffolding via an MCP server when they get stuck, rather than forcing them into toy sandboxes.
*   **Thread 1 (The Curriculum Audit):** As those learners naturally struggle in that authentic environment, you are capturing that telemetry bottom-up to find the gaps that the experts missed.

**The Critique:** 
The tension here is that these two goals are actually at war with each other. 
To get high-quality telemetry (Thread 1), you *want* learners to struggle, make mistakes, and hit roadblocks so the system can map exactly where the curriculum is failing. 
But to provide effective JIT JIT scaffolding (Thread 2), you want the MCP agent to *help* them overcome those roadblocks so they don't get frustrated and quit. 

**My Recommendation for Thread 3:**
Because of this conflict, I strongly recommend we use **Option C: The Dual-Purpose Intervention (System Auditing vs. Individual Scaffolding)** as your third thread. 

Here is why: it perfectly bridges Thread 1 and Thread 2. It asks the critical question: *How do we design an AI agent that is helpful enough to keep a student motivated in an open-ended codebase (JIT scaffolding), but constrained enough that it still allows for the authentic struggle required to harvest curriculum gaps (telemetry)?*

If the AI acts like a standard Copilot and just gives them the answer, they don't struggle, and your telemetry engine gets no data. If the AI refuses to help at all, they quit. The research contribution is figuring out exactly how to balance this conversational UX. 

How does that framing feel to you? Does "The Dual-Purpose Intervention" tie the whole system together in a way that makes sense for the product thesis?

---

### 👤 User

Yes that can work

---

## Phase 2: Theory Recommendations

### 🤖 Agent

Fantastic. With those threads locked in, we have a very strong, cohesive research landscape. Now let's move on to the **Theory Recommendations**. A strong paper doesn't just cite theories because they are famous; the theories must actively predict *why* our specific design choices will work.

Here is the current state of the document:

1. **Cognitive Apprenticeship (Collins, Brown, & Newman, 1989)**
   *   *Why this theory:* Provides the modeling-coaching-scaffolding-fading framework. The AI acts as a coach in the authentic environment, providing JIT scaffolding (routing to walkthroughs) and fading (refusing to generate code) to promote independent problem-solving.
2. **Knowledge Building (Scardamalia & Bereiter, 1994)**
   *   *Why this theory:* Frames students as active contributors to collective knowledge. Their struggles are the data that continuously refines the pedagogical taxonomy for future learners.

#### My Critiques (Black Hat Stance):

I'm going to push hard here to prevent "name-dropping" (citing a theory without a direct mapping to a design feature).

*   **Critique 1 (Theory-Design Gap in Cognitive Apprenticeship):** You claim this theory supports JIT JIT scaffolding and fading. But a core pillar of Cognitive Apprenticeship is **Modeling** (the expert making their internal cognitive processes visible). Is your MCP agent actually *modeling* how an expert writes code, or is it just acting as a diagnostic router? If it doesn't do modeling, is this really Cognitive Apprenticeship, or is it just standard scaffolding? What alternative did you consider (e.g., Vygotsky's Zone of Proximal Development)?
*   **Critique 2 (The Wrong Mechanism for Knowledge Building?):** You are citing Scardamalia & Bereiter's Knowledge Building to justify the learner-sourcing engine. But a fundamental premise of Knowledge Building is **intentionality**—a community of learners deliberately working together to advance the community's ideas. But in Thread 1, we just said we are using *passive telemetry* (implicit exhaust). Are students actually building knowledge together, or are they just generating data that the system uses? If it's passive, Knowledge Building might be the wrong theory entirely. Have you considered something like *Stigmergy* (indirect coordination through the environment) or *Distributed Cognition* instead?
*   **Critique 3 (The Missing Chain):** How do these theories connect? One is highly individual (an apprentice learning a skill), and the other is communal (a community building a database of knowledge). What is the theoretical bridge that converts individual JIT JIT scaffolding failures into structural curriculum updates? 

**Your turn:** Fight back! Why are these the exact right theories for the product? How does the product specifically operationalize "Modeling" or "Intentionality"? Or, do you agree we need to swap them out for theories that better fit the passive telemetry approach?

---

### 👤 User

Critique 1 (Theory-Design Gap in Cognitive Apprenticeship)
The MCP server would not show the user how to write code but rather identify microroles and subgoals for the user and then direct them to where they can practice and learn those subgoals that are related to the problem they need help with. This is more so scaffolding.

Critique 2 (The Wrong Mechanism for Knowledge Building?)
The studetn could intentionally improve the guides, but just for themselves by using our conversation guide tool which allow them to chat to an agent and highlight parts of the guide that is confusing which will result in an updated guide.

---

### 🤖 Agent

I've updated `research-thesis.md` and the evolution log based on your excellent clarifications! 

Specifically, I completely replaced Cognitive Apprenticeship with **Scaffolding and the Zone of Proximal Development** (Wood, Bruner, & Ross; Vygotsky), as it perfectly captures the idea of the AI diagnosing the user's ZPD edge and routing them to the right micro-role without modeling the code. I also reframed Knowledge Building around the specific mechanism of the **conversational guide tool**, clarifying that intentionality happens when users highlight and chat about confusing parts.

#### My Final Critique on Theories (Black Hat Stance):

You successfully defended the two theories, but you skipped my third critique! 

**Critique 3 (The Missing Chain):** How do these two theories actually connect? We have Scaffolding/ZPD explaining the *individual* interaction (the MCP agent helping a stuck user). We have Knowledge Building explaining the *communal* interaction (the user intentionally updating the guide). 

But what is the theoretical bridge that converts individual scaffolding failures into community knowledge building? 

**Your turn:** Is it that the MCP agent detects when JIT scaffolding *fails* (i.e., the user falls out of their ZPD and remains stuck), and *that* failure is the trigger that explicitly prompts the user to use the conversational guide tool to update the curriculum? How does the transition from Theory 1 to Theory 2 happen in the user flow? 

---

### 👤 User

Critique 3 (The Missing Chain)
The user is able to work on a real project and make contributions. While they are working they are able to find they don't know how to implement something and ask for help on it. The mcp server gives them the related microrole and subgoals that are related, then they can be guided of where to practice this in our walkthrough mode. From this they can ask the guide to update based on their needs. Through this we can find missing cognitive steps in the learning process and rearrange our static microroles and subgoals that are in a linear path to be in a path that is useful for someone who is actually implementing a project and may need to learn content in a different order

---

## Phase 3: Gaps & Opportunities

### 🤖 Agent

With the threads and theories locked in, we are ready for the final piece of the puzzle: the **Gaps & Opportunities** and **Knowledge Contribution Framing**. 

A research gap is *not* just "nobody has built this exact feature before" — it must be a specific area where the field's *understanding* is incomplete or limited by prior design positions. 

I've rewritten this section in `research-thesis.md` to align with our new threads. Here is the core of the new framing:

*   **The Overarching Gap:** The field does not know how to design an AI system that simultaneously provides effective JIT scaffolding for novices in unstructured repositories *and* harnesses the resulting "structural telemetry" to automatically audit and restructure a static curriculum into a dynamic dependency graph.
*   **Gap 1 (Structural Telemetry):** We don't know if the telemetry generated by novices jumping to JIT walkthroughs can reliably identify missing cognitive steps and successfully reorganize a linear curriculum.
*   **Gap 2 (The Dual-Purpose AI UX):** We don't know how to design a Conversational-UX that balances enough JIT scaffolding to prevent drop-out, while preserving enough authentic struggle to generate high-fidelity telemetry for learner-sourcing.
*   **The "Bit Flip" (Our core contrarian claim):** *"Most people assume curricula must be evaluated and restructured top-down by experts or explicitly by crowds; our work shows that the natural, unstructured routing choices novices make when seeking JIT help in authentic codebases can implicitly restructure a curriculum bottom-up."*

#### My Critiques (Black Hat Stance):

Let's make sure these gaps survive peer review:

*   **Critique 1 (Significance of Gap 1):** So what if we can restructure a linear curriculum into a dependency graph? Does the field actually care about dynamic dependency graphs? If a reviewer asks, "Why is a dynamically generated dependency graph better than a good expert-designed linear path?", what is your answer? What is the *value* of this structural telemetry to the broader computing education community?
*   **Critique 2 (Methodological Alignment of Gap 2):** For Gap 2, you are claiming we will generate design knowledge on how to balance scaffolding vs. authentic struggle. But how are we actually going to measure that balance in a deployment? Are we going to A/B test different strictness levels of the MCP agent? If we only deploy *one* version of the agent, we can't answer this gap. Do our deployment plans support answering this question?

**Your turn:** Fight back! Defend the significance of the dynamic dependency graph, and tell me how we plan to actually measure the UX balance in Gap 2!

---

### 👤 User

Critique 1 (Significance of Gap 1)
An expert will consider the a curriculum in which ideas are most similar, but some of these ideas don't get implemented till much later and a user may not need certain information so they will spend the time learning a concept, not know in what situation it is supposed to be implemented(e.g. using a batchwrite over other methods of updating a database) and apply the wrong subgoal to their issue. This will lead in more time wasted for a user to learn the concepts they need which will likely push them towards using an agent to code for them as they may feel helpless in their learning as they don't know where to go to learn. 

Critique 2 (Methodological Alignment of Gap 2)
this can be dtermined later while we can just ideate on this
