# SkillWeave Protostudy Reflection — Round 1

## Data Synthesis & Surprises

### What Was Tested
We evaluated the foundational assumptions of the Historical Struggles Registry retrospectively. We constructed the registry spreadsheet with 22 entries extracted from previous quarters' chat logs. The evaluation was split into two steps:
1. **Author Verification:** Five original authors (Rachel, Alej, Aubrey, Iris, Varia) reviewed their summarized cases to verify accuracy and wrote short Socratic reflections.
2. **Cohort Cross-Reading:** Cohort members evaluated whether the registry cases would have helped them during their own projects, particularly checking if the generalized "Socratic Pivot" column successfully bridged domain/project gaps.

### Key Findings
* **Project-Specific Relevance Barrier:** Initially, users found that the raw struggles and solutions were too specific to their own domains to be transferable. 
  * Aubrey: *"To me the issues and solutions seem too specific to be able to easily transfer to my own situations... I would need to find all the logs that align and find a pattern... which would be a lot of work."*
  * Alej: *"The problem is that a lot of them are concerns that are specific to the projects... Only the people who I am working more closely with (Iris/Aubrey) have entries I would consider."*
* **Socratic Pivots as a Transfer Bridge:** Adding the generalized systems-level "Socratic Pivot" column resolved the cross-team relevance barrier, providing generalizable insights.
  * Rachel: *"I think yes because now it feels more inclusive... Even if they aren't building a similar project, they can still benefit from asking themselves those questions."*
  * Aubrey: *"I do think the new info is more helpful in relating to struggles... giving good advice on what I should ask myself."*
  * Iris: *"Socratic pivot questions could be helpful on occasion... keeping in mind as opposed to thinking critically."*
  * Varia: *"rachel-anonymity-dilemma... is something that’s relevant to my project as well... [and for alej-bypassing-and-resistance] i found the resolution being 'make staying in the tool faster than leaving' - i think that's a really good approach, and is something i did not necessarily consider for my tool."*
* **The "Lazy Prompter" Attribution (Iris):** Iris attributed her struggles to her own "laziness" in prompting rather than tool failure.
  * Iris: *"I feel like this was mostly me being a lazy prompter and failing to provide the necessary level of detail... my struggles were a product of my own actions... and not an actual cognitive struggle."*
* **Roadblocks as Iteration Challenges (Varia):** Varia noted that the registry entries challenged her understanding of forming and iterating on research ideas, with AI hallucination representing the most frustrating, high-friction technical struggle.
  * Varia: *"they did not seem as unfixable problems, but they did challenge my understanding in forming and iterating on a research idea quite a bit... AI hallucinating would be the one that would be best described an actual struggle, since i had to refresh a bunch and look for a 'technical' solutions."*

### Surprises & Unexpected Patterns
* **Reading Tedium & Density (Alej's Nitpick):** The generalized Socratic questions, while helpful for inclusivity, introduced reading fatigue.
  * Alej: *"Is it bad if I found it more tedious to look through the new column? I feel like I would more easily read something more concise."*
* **Authorship Identity vs. Case Alignment:** Aubrey clarified that the novice onboarding case was not her own struggle, but rather an issue she described. This led us to purge non-struggles, showing that database cleanliness is critical.

### Assumed vs. Observed

| Hypothesis | Expected | Observed | Implication |
|---|---|---|---|
| **H1: Error & Friction Overlap** | Cohort members encounter overlapping roadblocks and easily see relevance in peer logs. | Low raw overlap; relevance was only unlocked after adding the generalized "Socratic Pivot" column. | **Weakened/Revised:** Overlap exists, but only when abstracted to systems-level design patterns. |
| **H3: Value of Peer Dialogue** | Users find peer logs helpful and will manually review them to solve errors. | Manual search/lookup of peer logs is perceived as too much effort (*"would be a lot of work"*). | **Weakened:** Users reject manual browsing; recommendations must be automatically targeted. |

---

## Plan Revision

### Hypothesis Updates
* **H1 (Friction Overlap):** Strengthened for systems-level metacognitive patterns; weakened for concrete code/framework specifics.
* **H3 (Value of Peer Dialogue):** Revised. Cohort members value Socratic guidance but reject *manual* log registries. We must pivot from a "searchable log dashboard" to a **proactive, telemetry-triggered suggestion interface**.

### Research Question Updates
* **New RQ:** *How can we design automated trigger rules that accurately match a user's active coding telemetry to a peer's Socratic Pivot without requiring manual user search?*

### MVP Scope Changes
* **MVP 2 Scope Pivot (Automated Relevance & High Conciseness):**
  * **Concise UI Constraints:** We will enforce a strict length limit (max 2 bulleted questions, no wordy paragraphs) for suggestion cards in the Auxiliary Pane to prevent reading fatigue (Alej's nitpick).
  * **Telemetry Gating:** We will test background telemetry matching (idle times, reversion counts) to push suggestion cards proactively (since Iris's "lazy prompting" and Aubrey's "too much work to search" feedback show users will not manually search or log).

---

## Research Protocol Notes

### Emerging Claims
* **The Metacognitive Translation Barrier:** Learners cannot translate concrete technical solutions from other domains, but they can self-apply Socratic pivot prompts that abstract the design trade-off.
* **Passive Metacognitive Gating:** Socratic suggestion cards do not require forced active interaction (like mandatory writing) to guide user behavior. Passive "reminders" can successfully steer a user's mental model and give them immediate ideas on how to adjust their prompts.

### Methodological Lessons
* **Avoid Post-Hoc Recall Bias:** Cohort members noted that recalling struggles from weeks ago was difficult (*"this was a really long time ago and my memory is not known for being reliable"*). For MVP 2, we must capture reflections immediately.
* **In-Situ Resolution Detection:** To capture reflections immediately, once a struggle block is detected, the system can render a simple, non-blocking popup query: *"Are you still stuck, or have you resolved this?"* Clicking *"Yes, resolved"* acts as the trigger to prompt the 1-sentence reflection, bypassing recall bias with minimal friction.

### Study Design Implications
* **Cohort-Wide Baseline Comparison:** The eventual study design should compare two groups of builders during a live sprint: Group A (using the automated Socratic suggestion companion) vs. Group B (using standard AI without suggestions). We will measure debugging velocity (stuck duration) and steering competency transfer in a post-test task.

---

## System Design Notes

### Design Decisions: Validated vs. Invalidated
* **Invalidated: Manual Search Dashboard:** The assumption that students will browse a shared spreadsheet is invalidated.
* **Validated: Socratic Pivots Concept:** Metacognitive abstraction (Socratic Pivots) successfully bridges the cross-team translation barrier.
* **Invalidated: Dense Socratic Text Format:** Dense, paragraph-length text presentation of Socratic pivots leads to user tedium and ignore behavior, justifying a strict max-2 concise questions limit.

### New Design Insights
* **Automatic Telemetry Triggers:** The system must use idle-time telemetry to push relevant Socratic cards to the user, bypassing search friction.
* **Human-in-the-Loop Verification:** A user confirmation gate (where the user confirms or corrects the AI-drafted struggle) is necessary to ensure accuracy and database cleanliness, resolving misclassification noise.
* **Manual Search Fallback:** Incorporating manual search query widgets mitigates automated telemetry trigger errors and provides users with a fallback support path, despite implementation uncertainty.

### Research-Product Tensions
* **Optional Suggestion Cards vs. Guided Reflection:** To prevent task abandonment and developer annoyance, suggestion cards must be non-blocking and optional (allowing users to ignore or close them freely). This conflicts with the research goal of driving active metacognition, which we will address by offering low-friction, rewarding reflection options rather than hard interaction blocks.
* **Structured Summary Integrity vs. User Edit Control:** Giving users full editing power over logged struggles helps manage social anxiety and privacy, but risks losing relevant research details if users delete critical context. We address this by having the system generate the core Socratic summary and constraining user edits to minimal corrections/anonymization rather than full text deletion.

---

## Appendix: Round 1 Reflection

### 🔵 Strong Stances
* **Socratic Dominance & Conciseness Limit:** Prioritize abstract Socratic pivot questions over raw code snippets, but enforce a strict limit of **maximum 2 concise Socratic questions** in each suggestion card (no wordy paragraphs) to prevent developer annoyance and tedium.
* **Automatic Recommendation over Search:** Transition the core value proposition of MVP 2 from a "queryable database" to an "automatic recommendation engine" based on background IDE logs, resolving the search friction barrier (*"a lot of work to find logs"*).
* **Onboarding Expectation Gating (Anti-Lazy Prompting Warning):** Rather than trying to force strict prompting compliance, the system will use onboarding warnings to frame intentional prompting as an effectiveness trade-off (*"the tool will be less effective if you write lazy prompts"*), allowing builders to choose how they engage while managing their expectations.
* **No Team-Internal Recommendation Bias:** The recommendation engine will search across the entire cohort database without prioritizing the user's immediate team, preserving the opportunity for cross-team metacognitive transfer despite the higher translation effort.
* **Cross-Domain Explanation Pipeline:** The automated generator must translate and simplify project-specific details so that a reader from any team or domain can immediately grasp the roadblock's core lesson.
* **Manual Keyword Search Fallback:** Include a simple keyword search box in the sidebar panel as a manual fallback to query peer struggles, despite user doubt about final implementation details.
* **Constrained User Editing:** The User Confirmation Gate will limit user modifications to minimal edits (privacy scrubbing and typo corrections) to prevent developers from deleting critical Socratic context or technical data.

### ⏳ Deferred Issues
* **Telemetry False Positives:** How to prevent suggestion cards from popping up when the user is just reading or thinking (not stuck).
* **Optional Suggestion Cards Interaction Gating (Deferred):** Consult with advisor on whether suggestion cards should be strictly optional/dismissible (to preserve velocity) or if there should be interactive gating (to ensure reflection quality), and establish corresponding success metrics.

---

## Raw Cohort Feedback

### Rachel
* **Struggles Validation:** *"I think all of these were concerns I was grappling with in the designing the study... I’m trying to remember other struggles I faced, I think a big one was if the research contribution was novel or if I resolved the black hat critiques."*
* **Meta-Steering Friction:** *"Yea I would often ask if my solution for the boundaries of their critique were suffice bc they’d often j accept and move on"*
* **Cross-Team Relevance (Before Socratic Pivot):** *"honestly for the context of our research in direction 1 Varia’s was obviously most helpful cus it’s the same project. There was one metacognitive insight from Aubrey that was relevant but most were specific to their own projects. However I’d imagine it’s difficult to find relevancy for research, if ppl were struggling w my concrete vs conceptual things this tool might b more helpful?"*
* **Self-Reflections:**
  * *rachel-social-sharing-barrier:* *"First entry- the private sparring was always a part of the design, however when I was clarifying the who the users are, I found that it is more catered towards junior level members who may lack confidence. As for the support tags, I suggested them when they agent posed the issues of having prompts that directly put team mates ideas against each other, causing hostility. I figure have support tags will defuse tension as a neutral claim with the support tags to elicits elaboration vs the friction of the intial prompts."*
  * *rachel-participation-disparity:* *"Second entry- I wanted the template to be neutral that shared everybody's ideas so that no ideas are valued over another. This way the members explore all of the divergent ideas, coming to alignment on their own rather that AI or the loudest speaker influencing which direction they should agree with most."*
  * *rachel-anonymity-dilemma:* *"Third entry- Instead of having transcripts available for viewing or users names to be stated in the template, instead I opted for the template to give a description of the idea with the support tag for the user to elaborate on if needed. This way the individual sparring was more to help the user ideate rather than being a concrete representation of their thinking for everyone to view."*
* **Socratic Pivot Feedback:** *"I think the socratic questions are nice, they directly give the user a way to think about the information and how it may apply to their own struggles!... [Relevant after column added?] I think yes because now it feels more inclusive to different experiences. Even if they aren't building a similar project, they can still benefit from asking themselves those questions to strengthen their own"*

### Alej
* **Struggles Validation:** *"It's a little weird since this was a struggle I thought about a lot when I was originally working on this iteration, but I have since re-done everything and without it being a student tool anymore, it doesn't really matter anymore. I think some of the other issues I encountered would have still applied though. For example, there were some serious technical scope concerns with my project. Also, some issues with the skills themselves not getting context right..."*
* **Cross-Team Relevance (Before Socratic Pivot):** *"I'm not sure to be honest. The problem is that a lot of them are concerns that are specific the projects they are working on. Only the people who I am working more closely with (i.e. iris and aubrey) have entries that I would maybe consider when I'm chatting with an agent again."*
* **Self-Reflection (Curation Bottleneck/Bypassing):** *"Honestly, it was less like a struggle and more of challenge the skills brought up? I hadn't thought about it and then when it was mentioned, I realized it had a great point and did a bit of back and forth before it was at spot I liked."*
* **Socratic Pivot Feedback:** *"Is it bad if I found it more tedious to look through the new column? I feel like I would more easily read something more concise."*

### Aubrey
* **Struggles Validation:**
  * *aubrey-fragile-novice-onboarding:* *"I wouldn't consider this a struggle that I had working with the agent. I more so was informing the agent of the struggles of students which was the purpose of designing the product."*
  * *aubrey-scaffolding-scoping:* *"This was a real struggle I encountered as I didn't realize there were old documents in my repo that the agent was informing its responses based off of... we often came into the issues with hallucinations, AI generally just not understanding what metrics we use + how they can be applied, and old docs being out of line with new ones."*
* **Cross-Team Relevance (Before Socratic Pivot):** *"I think its interesting in seeing how each person resolved these issues but to me the issues and solutions seem too specific to be able to easily transfer to my own situations. I feel like if I were to take from these logs to apply to my situation I would need to more so find all the logs that align with my situation and then find a pattern in the resolution to apply to my issue which would be a lot of work"*
* **Self-Reflections:**
  * *aubrey-fragile-novice-onboarding:* *"Wasn't a struggle so N/A"*
  * *aubrey-scaffolding-scoping (stale context):* *"I solved the issue by asking my partner why the agents keeps giving me bad results and then she showed me that my repository held old practice-mode documents which was completly unrelated to my project"*
* **Socratic Pivot Feedback:** *"I do think the new info is more helpful in relating to struggles. I take it as like giving good advice on what I should ask myself if I end up in a similar problem"*

### Iris
* **Struggles Validation:**
  * *iris-user-scoping-dilemma:* *"I feel like this was mostly me being a lazy prompter and failing to provide the necessary level of detail"*
  * *iris-inclusivity-scoping:* *"same as above. actually, I think that these are basically the same thing, just based on different lines of my chat. I think that this one and the one above should definitely be consolidated"*
  * *iris-fading-scaffolding-turnoff:* *"imo this was not an actual struggle"*
  * *iris-hypothesis-dilution:* *"also not a struggle"*
* **Meta-Reflections on Struggles:** *"I hope this isn't me subconsciously gaslighting myself into thinking that I don't struggle at all lol, but I think most of these are a result of me needing to clarify a lot because of my initial laziness... no not really? again, I'm a lazy prompter so most of my 'struggles' were a product of my own actions (e.g. not providing enough detail) and not an actual cognitive struggle"*
* **Self-Reflections:** *"beyond not being lazy and stringy with words for iris-user-scoping-dilemma and iris-inclusivity-scoping, I'm not sure what else I would change given the fact that I don't consider the other two entries as actual struggles"*
* **Socratic Pivot Feedback:** *"hrmm, maybe one or two? I think that the socratic pivot questions could be helpful on occasion but I don't think that it would change much. it's would be mostly something that I would be keeping in mind as opposed to thinking critically about because I've probably thought about that already"*

### Varia
* **Struggles Validation:** *"i would say they felt somewhat like struggles in my conversations - they did not seem as unfixable problems, but they did challenge my understanding in forming and iterating on a research idea quite a bit. i would say that AI hallucinating would be the one that would be best described an actual struggle, since i had to refresh a bunch and look for a 'technical' solutions, while other ones are more like brainstorming challenges, if that makes sense. i think the AI hallucinating was the biggest issue for me, which *was* mentioned, so nothing else missed i don't think!"*
* **Self-Reflections:**
  * *varia-synthesis-overload:* *"for the problem of 'too long, didn't read cuz i am exhausted,' i decided it would be best to make the summaries as short as possible while still providing insight in some way for action from the team. because whatever the summary is, for a research team, everyone needs to actively collaborate with one another because that is how good ideas are made (in my opinion), not by just AI offering ways to combine, but rather prompting people to actively integrate each other's ideas together."*
  * *varia-agent-hallucination-drift:* *"not sure if i really had a good 'aha!' moment for resolving this problem, it was more like me initially telling the AI that it is hallucinating, then, when it would not listen or change the responses, refreshed the chat, then closed the app, and only then it worked. my prompting method of trying to make the AI rethink its hallucination was asking it to read all the docs in a folder i was working on, and then asking it to re-read its own answers to check if that makes sense. that did not really work out, so i did what i described before with reloads and refreshes."*
  * *varia-transcript-fatigue:* *"the solution was similar to the first problem - though reading and looking through everyone's transcripts would be good to fully and thoroughly understand what each member is doing, such an amount of information is really hard to process; therefore, it is best to make a synthesis that not just passively restates what the conversation with the user was about, but rather highlights THE important points necessary based on the discussion and alignment goal at hand."*
  * *varia-literature-scarcity:* *"i am not sure if the “resolution” column states it accurately; in my mind, the solution for this problem was reframing the research focus of the study to be something like 'AI is used as a helper and its negativity is viewed as an issue - how can we explore the negativity AI can express for peer learning?' as in, the solution was essentially reframing and re-thinking my approach to the project, how could i alter the thesis to test out a different hypothesis? and the other thing i did to resolve this roadblock was to ask the AI itself to search for appropriate literature that already exists to make sure that my research idea would have unique standing."*
* **Cross-Team Relevance:** *"a few other rows stood out to me, such as rachel-anonymity-dilemma, since we discussed this during our meeting and that is something that’s relevant to my project as well: how aggressive should the agent be in making the summaries, and what is the appropriate level of privacy for the students in the meeting, given that they are research lab members that are brainstorming individual ideas that they presumably can defend. i liked the “resolution” column for this one as well, though for my idea, it was a little more vague: how can we protect individual agent chat logs, while also promoting accountability for each person’s idea without them feeling attacked? another one that i found interesting and potentially applicable for the work in the lab is alej-bypassing-and-resistance, where the problem is basically how can this tool be more helpful than just using another agent like ChatGPT for generating direct answers. i found this relatable because in /define-research, the biggest point of contempt for me was how would this project be unique, if unique at all, since anyone can go straight to ChatGPT, for example? i found the resolution being “make staying in the tool faster than leaving” - i think that’s a really good approach, and is something i did not necessarily consider for my tool, at least in the protostudy step, since you have to add all the collected transcript files to the folder, then add them into the chat with the agent, then ask for summary generation with the skill... and only then it generates the agenda for the meeting. it might seem tedious to do, so this is a good tactic to consider when working on a research idea where an agent would be used, and i found it interesting and helpful."*


