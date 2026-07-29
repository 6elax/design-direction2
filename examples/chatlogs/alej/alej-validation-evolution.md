# Document Evolution Log — Causeway Gen-UI Validation Plan

<!-- A structured record of how the Validation Plan section of product-thesis.md evolved through the planning session.
     Each cycle captures the interaction between human and AI that produced a change
     in the document. User input is always quoted verbatim.

     This file is built in two phases:
     - Phase 1 (during session): Cycle records are appended after each critique-respond-update turn.
     - Phase 2 (end of session): Summary Statistics and Evolution by Section are generated. -->

---

## Cycle 1: Initial Draft

### User Input
> I am creating a proejct that's extending an existing platform for process-driven walkthroughts to help guide users through learning web-development in an on the job sense. I have provided reference materials of previous CHI papers and drafts for future CHI paper submissions that are also extending the platform with collaborative features. I've also added papers from other research labs in relation to Generative UI. Now, I am trying to explore how generative UI can be used within causeway to futhur the personalization of learning experience. How a user may be able to ask to add tailored tools to help them better understand concepts, such as tooltips for scss styles, demos for representing different html elements, an interactive query engiene. Even some less relative to the content at hand such as a simple color picker for hex codes or a pomodoro timer to help them focus. We want to develop this product to see how people can change the learning experience to fit their own needs/preferences. What level of customization should we aim to achieve with this and what safe guards should we add to prevent users for just asking for answers?
> 
> 1. Ultimately, it's impossible to fully anticipate a student's needs and generative UI can fill that gap of being to generate tools/preferences to fully fit a student's learning experience. It's also time consuming for members of out research lab to constantly curate new tools to integrate into the causeway platform.
> 
> 2. Perhaps we can add some resistance but ultimately let a user move on if they are stuck. Even of our generative UI may ultimately give an answer, giving some resistance and allowing the student to think about the problem and attempt of solution would still be better than just going to another tab and AI giving them an answer immediately.
> 
> 3. We can formulate prompting with ways of helping a student in certain groups of scenarios, we can also give the AI context of the current task the user is working on to further help AI tailor responses/tools to help the student. There could also be pre-written prompts in the interface to help give users ideas of what they can prompt.
> 
> 4. Often times, students or even myself might go look for other resources online to help better explain concepts. I'll often look at videos online explaining a concept, or go to documentation with graphs and tables visulaizing methods/terms in a library.

### AI Draft Summary
Created a comprehensive validation plan detailing 7 core hypotheses organized across Context (triggers, vocabulary), Value (pedagogical friction, custom vs. static), Design (visual playgrounds, context-aware suggestions), and Impact (retention vs. copy-pasting). Laid out a 2-MVP protostudy sequence: MVP 1 focuses on a pilot with pre-defined static sandboxes and context-aware recommendations to study user help-seeking behavior. MVP 2 introduces the fully adaptive Gen-UI prompt-to-widget engine and measures the impact of "pedagogical friction" hurdles.

### What the AI added beyond what the user said
- Organized hypotheses into the four categories (Context, Value, Design, Impact) required by the In-the-Wild Design framework.
- Formulated specific, testable predictions (e.g. H3 on friction adoption, H4 on curation vs. custom, H6 on prompt recommendation efficacy, H7 on retention rates).
- Defined a sequenced MVP path: MVP 1 (controlled pilot with faked dynamic rendering to isolate user interaction and vocabulary barriers) and MVP 2 (fully adaptive deployment evaluating pedagogical friction mechanisms).
- Formulated explicit lists of Product and Research risks, structuring them by verification priority (e.g., Friction Bypass Risk, Interactive Scaffolding Efficacy, and Collaboration Impact).
- Proposed target dates and deliverables for the study timeline.

---

## Cycle 2: Scoping, Mechanisms, and Measurability

### AI Critique
1. 🚨 **Weak Mechanism in H3 (Scaffolded Friction)**: The original H3 claimed friction cost alone would keep students in-platform, but this mechanism is easily defeated since tab-switching takes seconds and external AI gives direct answers with no friction.
2. 🚨 **Untestable Retention Claims (H7)**: H7 originally predicted "40% higher conceptual retention" but had no grounded power analysis or control group design. The metric was aspirational, not operational.
3. ⚠️ **Missing Collaborative/Social Hypotheses**: The plan had no hypotheses testing how Gen-UI widgets interact with Causeway's pair programming or role-based task allocation.

### User Response
> 1. Oftentimes, even if you could switch to another AI chat near-instantaneously, the student still has to take screenshots, type out context, and hide signs of copying code back. Adding a recommended tool that already has context of what you are working on without the downsides of cheating can be really enticing to students.
>
> 2. We can examine how the students use the platform, how fast they switch to using the chat, how often they use it on tasks, what feedback they give, etc.
>
> 3. We are completely omitting the collaborative portion of Causeway as we are only focusing on the walkthrough portion of Causeway, where it's based on individual progress. This allows us to keep our research goals refined.

### Document Delta
| Field | Before | After |
|---|---|---|
| H3: Mechanism | "...because the cost of tab-switching to external tabs exceeds the low friction of using integrated visual playgrounds." | "...because the integrated assistant already has full context of the user's active files, schema, and task — eliminating the context-transfer overhead of screenshotting, re-typing context, and hiding copied code that external AI requires." |
| H7: Name & Metrics | "Conceptual Mastery vs. Copy-Pasting" — 40% higher retention via quiz. | "Behavioral Engagement with Interactive Widgets" — measured via time-to-first-chat-switch, widget interaction frequency, qualitative self-reports, and post-task explanation quality. |
| Research Perspective: Framing | "...collaborative coordination in a synchronous apprenticeship environment" | "...self-regulated learning in an individual walkthrough environment" |
| Research Risk #3 | "Collaboration Impact" — role-bounded widgets foster coordination | "Context-Advantage Adoption" — pre-populated workspace context provides behavioral advantage over external AI |
| Appendix: Stances | Empty | Logged 3 strong stances: Individual Walkthrough Scope, Context-Transfer as Behavioral Hook, Observable Behavioral Metrics over Retention Claims |

### What shifted
- H3's mechanism was strengthened from a generic "friction cost" argument to a specific "context-transfer overhead + cheating risk elimination" argument grounded in the user's lived experience of student behavior.
- H7 was reframed from an untestable quantitative retention claim to a multi-metric behavioral observation approach that is feasible within a protostudy format.
- The entire plan was scoped to individual walkthroughs only, explicitly dropping collaborative hypotheses. This is a deliberate narrowing to maintain research focus, with the understanding that collaboration can be a future extension.

---

## Cycle 3: MVP Methodology & Control Design

### AI Critique
1. 🚨 **MVP 1 sample too small for H6's quantitative claim**: N=4 students has no statistical power to support a "50% more frequently" prediction. Either drop the benchmark or increase the sample.
2. ⚠️ **MVP 1 still references paired students**: Plan says "2 student pairs" but the entire study was just scoped to individual walkthroughs — internal contradiction.
3. ⚠️ **No control condition design specified**: H7 references a comparison but the plan had no control group, no within/between-subjects design, and no methodology for observing external chatbot usage.

### User Response
> 1. Yes, you can drop the 50% more frequently claim.
>
> 2. Yes, please reframe around individual walkthroughs.
>
> 3. I think it's really hard to observe when a user switches to external chatbots as students don't really tend to tell leads/professors when they do this. I think the control group will just be without gen-ui group but they will still be given links to outside resources as usual and feedback will be collected.

### Document Delta
| Field | Before | After |
|---|---|---|
| H6: Type | "Prediction + Open Question" with 50% trigger frequency claim | "Open Question" — purely exploratory, no quantitative benchmark |
| H7: Comparison | "compared to their usage of external chatbots" (unobservable) | "compared to a control group completing the same walkthroughs with standard external resource links" (between-subjects) |
| MVP 1: Participants | "2 student pairs in a 1.5-hour session" | "4–6 individual students in 1.5-hour walkthrough sessions" |
| MVP 1: Purpose | "resolve blocks in Component and Container tasks" (paired roles) | "resolve blocks in individual walkthrough tasks" |
| MVP 2: Design | Undefined comparison, "external tab switching logs" | Between-subjects: 12 students (6 Gen-UI, 6 control with standard resource links) |
| MVP 2: Metrics | "external tab switching logs" + "post-task conceptual quiz" | Widget telemetry, task completion, qualitative self-reports, post-task explanation quality |
| Appendix: MVP Stances | Empty | Logged 3 stances: H6 exploratory reframe, individual students, between-subjects control design |

### What shifted
- H6 lost its quantitative teeth and became a purely exploratory open question, appropriate for the small MVP 1 sample.
- The MVP 1 framing was corrected to align with the individual walkthrough scope locked in Cycle 2 — no more references to "pairs" or role-based tasks.
- MVP 2 now has a concrete between-subjects methodology. The user's insight that external chatbot usage is unobservable shifted the comparison from "vs. external AI" to "vs. standard resources control group," which is much cleaner methodologically.

---

## Cycle 4: External AI Confound

### AI Critique
1. ⚠️ **Control group can still use external AI**: Both conditions have unrestricted access to ChatGPT/Copilot. If control-group students are heavier external AI users, the between-subjects comparison is confounded. Need to account for this via self-report interviews, a tools-used checklist, or an acknowledged limitation.

### User Response
> I think it will just have to be a mixture of [self-report interviews] and [acknowledging the limitation]. It's impossible to fully prevent cheating but hopefully there will be clear benefits in understanding who relies on the gen-ui tools vs outside tools, as students tend to suffer in assessments when they rely on AI tools more.

### Document Delta
| Field | Before | After |
|---|---|---|
| MVP 2: How we learn | No mention of external tool self-report | Added post-study semi-structured interview asking both groups about external tool usage |
| MVP 2: Known limitation | Not present | Added explicit limitation acknowledging uncontrollable external AI access; post-task explanation quality as indirect proxy |
| Appendix: MVP Stances | 3 stances | Added stance #4: External AI as Acknowledged Limitation |

### What shifted
- Rather than trying to control for external AI usage (which is practically impossible in a naturalistic deployment), the plan now acknowledges it as a limitation and uses two mitigation strategies: (1) post-study self-report interviews and (2) post-task explanation quality as an indirect behavioral signal of AI reliance.
- The user's insight that "students tend to suffer in assessments when they rely on AI tools more" provides the theoretical basis for using explanation quality as a proxy metric.

---

## Cycle 5: Positionality Statement

### AI Critique
No critique required — the Positionality Statement was drafted collaboratively from the user's self-reported reflections. Three guiding prompts were given; the user responded to all three.

### User Response
> 1. I am a former Causeway student but I actually didn't use Causeway much. I already had prior web development experience prior to joining the lab, so I found myself more familiar using outside developer resources. I'm a current lead though.
>
> 2. I've seen how AI can make students suffer in understanding, but I also understand that it's impossible to remove AI from the equation. Allowing students to use AI to their benefit could be a great way to move forward how we train members.
>
> 3. This is why we'll just have to acknowledge that students may just keep going to other tools. If we intervene too much, it can sacrifice how much "control" is really the control group.

### Document Delta
| Field | Before | After |
|---|---|---|
| Positionality Statement | Empty | Three paragraphs: Insider status & experiential bias, Stance on AI in learning, Power dynamics & observation effects |

### What shifted
- The positionality statement crystallized a key methodological tension: the researcher's own atypical experience (prior web dev skill, preference for external resources) means they are designing for a user population whose experience they did not share. This is a real risk of overestimating novice self-direction.
- The power dynamics paragraph directly connects to the study design choice of avoiding surveillance-style monitoring — the positionality statement and the methodology are now aligned.

---

<!-- Append one cycle per critique-respond-update turn. Use continuous numbering across all sections. -->
