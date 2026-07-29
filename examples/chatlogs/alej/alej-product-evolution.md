# Document Evolution Log — Causeway Gen-UI Product Definition

<!-- A structured record of how product-thesis.md evolved through the planning session.
     Each cycle captures the interaction between human and AI that produced a change
     in the document. User input is always quoted verbatim.

     This file is built in two phases:
     - Phase 1 (during session): Cycle records are appended after each critique-respond-update turn.
     - Phase 2 (end of session): Summary Statistics and Evolution by Section are generated. -->

---

## Cycle 1: Initial Draft

### User Input
> I am creating a proejct that's extending an existing platform for process-driven walkthroughts to help guide users through learning web-development in an on the job sense. I have provided reference materials of previous CHI papers and drafts for future CHI paper submissions that are also extending the platform with collaborative features. I've also added papers from other research labs in relation to Generative UI. Now, I am trying to explore how generative UI can be used within causeway to futhur the personalization of learning experience. How a user may be able to ask to add tailored tools to help them better understand concepts, such as tooltips for scss styles, demos for representing different html elements, an interactive query engiene. Even some less relative to the content at hand such as a simple color picker for hex codes or a pomodoro timer to help them focus. We want to develop this product to see how people can change the learning experience to fit their own needs/preferences. What level of customization should we aim to achieve with this and what safe guards should we add to prevent users for just asking for answers?

### AI Draft Summary
Introduced a structured product thesis for "Causeway Gen-UI" featuring two key personas: the Web Development Apprentice (who needs personalized real-time visual learning scaffolds like SCSS styling sandboxes, Firestore query simulators, and Pomodoro timers) and the Research Mentor/Program Lead (who needs tracking analytics on generated tools to measure cohort mastery and prevent shortcuts). Outlined a core experience loop where users trigger widgets via prompting in a sidebar, interacting with them conceptually before writing their own code. Framed a testable value proposition comparing widget usage to static docs, and outlined a narrow MVP wedge.

### What the AI added beyond what the user said
- Formulated two concrete personas (Apprentice and Research Mentor) with specific roles, core needs, and insights.
- Specified "Desperate/Must-Have" users for both segments (e.g., student contributor on Container task with no database experience, and instructor managing 10+ pairs synchronously).
- Defined the "Scaffolding-as-a-Service" core concept and mapped out a detailed 8-step User Experience journey.
- Defined a measurable, testable hypothesis for the value proposition (30% reduction in code review rejection cycles).
- Outlined the "Aha Moments" for both target user roles.
- Defined the MVP boundaries (Narrowest Wedge) including explicit inclusions and exclusions (e.g., blocking direct code generation).
- Outlined five dimensions of structural advantages (Founder, Market, Product, Acquisition, Network Effects) and specific comparative positioning against Cursor/Copilot, traditional LMS, and standard chatbots.

---

## Cycle 2: Refining Scaffolding and Safeguards

### AI Critique
1. 🚨 **SOLUTION-IN-SEARCH-OF-NEED**: Questioned the absolute necessity of Generative UI over a fixed curated set of static tools.
2. 🚨 **Bypassing Safeguards**: Challenged how blocking answers doesn't just drive users to external AI tabs (ChatGPT/Copilot).
3. ⚠️ **Novice Querying Paradox**: Questioned how database/CSS novices can prompt for complex helper tools if they lack the conceptual vocabulary.
4. ⚠️ **Loose Demand Evidence**: Highlighted that observing confusion/cognitive overload in Causeway is not direct behavioral demand for Gen-UI.

### User Response
> 1. Ultimately, it's impossible to fully anticipate a student's needs and generative UI can fill that gap of being to generate tools/preferences to fully fit a student's learning experience. It's also time consuming for members of out research lab to constantly curate new tools to integrate into the causeway platform.
> 
> 2. Perhaps we can add some resistance but ultimately let a user move on if they are stuck. Even of our generative UI may ultimately give an answer, giving some resistance and allowing the student to think about the problem and attempt of solution would still be better than just going to another tab and AI giving them an answer immediately.
> 
> 3. We can formulate prompting with ways of helping a student in certain groups of scenarios, we can also give the AI context of the current task the user is working on to further help AI tailor responses/tools to help the student. There could also be pre-written prompts in the interface to help give users ideas of what they can prompt.
> 
> 4. Often times, students or even myself might go look for other resources online to help better explain concepts. I'll often look at videos online explaining a concept, or go to documentation with graphs and tables visulaizing methods/terms in a library.

### Document Delta
| Field | Before | After |
|---|---|---|
| Primary User: Core Need | Adapting to immediate task role, personal learning pace, and cognitive style without providing raw copy-paste solutions. | Adapt to task context, active files, and learning pace, offering interactive learning widgets that require active exploration before revealing direct solutions. |
| Primary User: Insight | Traditional learning aids are static or too enabling... | operationally impossible for research labs to pre-author tools for every conceptual gap... introduce "pedagogical friction" to force visual playground interaction. |
| Primary User: Status Quo | Search Google, MDN, ask AI chat, wait for leads. | Search for external visual explanations (graphs, tables, videos) to build a mental model. Or copy-paste from standard AI. |
| Primary User: Demand Evidence | Observed: Novices experience cognitive overload in Causeway walkthrough mode. Hypothesized: Learners will query conceptual scaffolds. | Observed: Novices seek external visual resources (videos, MDN tables) to cross-reference with codebase. Hypothesized: Context-aware prompt suggestions and scaffolded friction lower barrier & keep in loop. |
| Appendix: Target User & Need | Undefined | Logged strong stances on curation bottlenecks and pedagogical friction, and deferred issue on scaffolding-aware prompt suggestions. |

### What shifted
- The AI's critiques forced the user to clarify operational constraints (lab curating bottleneck) and human workarounds (seeking external visual/diagrammatic resources).
- Resolved the safeguard debate by choosing "pedagogical friction" over a hard block, acknowledging that absolute restriction pushes users to external chats.
- Addressed the querying paradox by introducing workspace task-context and pre-written prompt recommendations.

---

## Cycle 3: Walkthrough Mode Scope Correction

### AI Critique
No AI critique triggered this cycle. The user identified stale collaborative/Practice Mode references in the product thesis that contradicted the walkthrough-only scope established in the validation plan.

### User Response
> You make a lot of mentions of practice mode... I want to make clear that there are two modes in Causeway right now, Walkthrough and Practice Mode, with walkthrough being the more individual guide-based mode and practice mode being the collaborative task-based mode. We are strictly focusing on walkthrough mode for this gen UI proposal.

### Document Delta
| Field | Before | After |
|---|---|---|
| Primary User: Target User | "transitioning from isolated step-by-step tutorials to open-ended, collaborative software engineering tasks" | "working through guided, step-by-step walkthroughs of real-world web development tasks" |
| Secondary User: Target User | "CSCL (Computer-Supported Collaborative Learning) researchers" | "researchers orchestrating web-development apprenticeship programs using Causeway's walkthrough mode" |
| Secondary User: Core Need | "avoiding the 'free-rider' effect" + "cohort's cognitive gaps" | Dropped free-rider reference; "individual learners' cognitive gaps" |
| Secondary User: Must-Have | "10+ student pairs synchronously" | "10+ students working through walkthroughs" |
| Core Experience: Step 1 | "starts a Components or Containers task with their partner" | "starts a walkthrough task in Causeway" |
| Core Experience: Step 4 | "analyzes the user's role (Components vs. Containers)" | "analyzes the user's active walkthrough step" |
| Product Advantage | "awareness of the specific micro-role (Elements/Layout vs. Queries/Actions)" | "awareness of the user's active walkthrough step, file context" |
| Network Effects | Active team catalog feature | Deferred to future Practice Mode extension |
| Appendix | No walkthrough scope stance | Added walkthrough-only scope stance + network effects deferral |

### What shifted
- This was a user-initiated correction, not an AI-driven critique. The product thesis still contained collaborative framing (CSCL, paired roles, team catalogs, Practice Mode references) that contradicted the walkthrough-only scope locked in the validation plan (Cycle 2).
- All references to Components/Containers role pairing, CSCL, synchronous pairs, free-rider effects, and team widget catalogs were removed or reframed around individual walkthrough usage.
- Network Effects was explicitly marked as a future Practice Mode extension rather than a current differentiator.

---

<!-- Append one cycle per critique-respond-update turn. Use continuous numbering across all sections. -->
