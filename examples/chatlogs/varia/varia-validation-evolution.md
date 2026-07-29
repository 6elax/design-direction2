# Document Evolution Log — Peer Learning Agents Validation Plan

---

## Cycle 1: Initial Draft

### User Input
> the biggest assumption that this project does is assume that such tool that we are making would lead to more efficient (immeasurable, i know) conversations, and would overall contribute to a better structure of research-related meetings with limited time of the members. 

### AI Draft Summary
Created an initial validation plan containing four core hypotheses (Meeting Overload, Efficiency Gain, Friction Highlighting, Cognitive Load Shift) and a two-stage MVP sequence (MVP 1: Wizard of Oz Agenda, MVP 2: Automated Prototype).

### What the AI added beyond what the user said
- Structured the user's assumption into specific Context, Value, Design, and Impact categories.
- Proposed measuring efficiency via "time spent on core decisions".
- Added hypotheses about cognitive load shift and AI critique defensiveness.
- Defined the "Wizard of Oz" approach for MVP 1 to test the agenda's value before building the AI.

---

## Cycle 2: Refining Efficiency and Adding Impact

### AI Critique
1. 🚨 **UNTESTABLE-HYPOTHESIS on "Efficiency" (H2):** The definition of "efficient conversations" was too vague. Demanded a highly specific metric for what a "better structure" looks like.
2. ⚠️ **Missing Context Risk:** Missing hypothesis on whether faculty actually have time/attention to pre-read the agenda before meetings.
3. 🚨 **The "Garbage In, Garbage Out" Risk:** Missing hypothesis on student input quality. If students don't write detailed asynchronous updates, the AI has no friction to highlight.

### User Response
> hm, i would define core value to be tested as "they successfully make a decision on a thorny design issue instead of tabling it for next week" type scenario. i would also add that a successful meeting would result in less confusion, therefore, more confidence in waht each team member is doing/how they're feeling about working on this project, and what the faculty thinks about their contributions => hypothesis of measuring confidence 1-5 type of scenario, after a meeting like that? how confident on your influence on the overall conversation, if your individual perspectives felt valuable in the group discussion, etc? the "rich input" would be the chat logs, submitted by students? 

### Document Delta
| Field | Before | After |
|---|---|---|
| Value Hypotheses | H2 defined efficiency simply as "time spent on core decisions". | H4: Decision Velocity focuses on making decisions on thorny design issues instead of tabling them. |
| Context Hypotheses | Only one hypothesis (Meeting Overload). | Added H2 (Faculty Attention Span) and H3 (Natural Chat Quality). |
| Impact Hypotheses | Only one hypothesis (Cognitive Load). | Added H7 (Felt Influence) measured by a 1-5 post-meeting confidence scale. |

### What shifted
- User narrowed scope of "efficiency" from a vague concept to a concrete behavioral outcome (making decisions vs. tabling them).
- User introduced a strong new psychological impact metric (felt influence / mattering), significantly deepening the theoretical contribution.
- AI's forcing question unlocked latent thinking about *how* participants feel after a successfully structured meeting.

---

## Cycle 3: Defending Subjective Insight and Clarifying Chat Risk

### AI Critique
1. 🚨 **The "Chat Log" Risk (H3):** Challenged the assumption that raw chat logs will contain enough natural friction. If students don't explicitly write down their disagreements, the AI can't synthesize them.
2. ⚠️ **The Confidence Metric (H7):** Challenged the 1-5 self-reported confidence scale as unreliable due to confirmation bias. Pushed for an observable behavioral signal.

### User Response
> i feel like personal insight shouldn't be discarded because of confirmation bias; i think its important to consider people's personal opinions on conclusions of the meeting because how else would we know what people think? it could also be tracked how much time is spent on recap vs. how much time is spent on active live discussion? also, for chat log risk, the purpose of the tool is to take chat logs and then summarize them into one big agenda?

### Document Delta
| Field | Before | After |
|---|---|---|
| Impact Hypotheses | H7 only used a 1-5 scale. | H7 updated to include both the 1-5 scale and a behavioral tracking metric (recap vs. active discussion time). |
| Appendix | Empty. | Logged a Strong Stance defending the validity of self-reported personal insight. |

### What shifted
- User successfully defended a choice against the AI (validity of subjective self-reporting), forcing the AI to log a 🔵 Strong Stance.
- User provided a perfect behavioral complement (recap vs. active discussion time) to pair with the subjective metric.

---

## Cycle 4: Correcting the Source Input Misunderstanding

### User Correction (unprompted, referencing document)
> where did this part of discord/slack messages come from? are we talking about the same thing? please review product-thesis.md and research-thesis.md and come back to talk about this

### AI Critique
- The AI completely misunderstood the source data, confusing "student-to-student Slack chats" with the actual product thesis: "individual student-to-AI brainstorming logs" (e.g., ChatGPT transcripts).
- The AI reviewed the product and research theses, recognized the error, and corrected H3. The real risk is not "shallow status updates" but "divergent brainstorming contexts" where students talk to their AIs about completely different things, giving the synthesizer no overlap to compare.

### Document Delta
| Field | Before | After |
|---|---|---|
| Context Hypotheses | H3: Natural Chat Quality (assumed students self-censor in public Discord/Slack channels). | H3: Divergent Brainstorming Contexts (assumes students brainstorm non-overlapping topics with their individual AIs, making friction extraction impossible). |

### What shifted
- User caught a massive AI hallucination regarding the core data pipeline of the product.
- AI corrected its mental model from "team chat summarizer" back to the actual concept: "multi-agent synthesis of individual AI brainstorming sessions."

---

## Cycle 5: Scoping the MVP Data Ingestion

### AI Critique
1. 🚨 **MVP 1 Data Ingestion:** The Wizard of Oz test lacked a clear mechanism for collecting the ChatGPT transcripts from students.
2. 🚨 **MVP 2 Scope Creep:** The proposed MVP 2 included building a custom "web interface," which is unnecessary just to test if an LLM can synthesize logs. Recommended a no-code Google Form + Zapier pipeline.

### User Response
> i agree with using a google form to drop the chat contents, but what is the purpose of sending it to faculty? please clarify

### Document Delta
| Field | Before | After |
|---|---|---|
| MVP 1 Scope | "We will read the students' weekly asynchronous updates/chats..." and hand the agenda "to the faculty member." | Specified using a Google Form for ingestion. Clarified that the synthesized agenda is distributed as a "shared group dashboard" to everyone (students + faculty), not just the faculty. |
| MVP 2 Scope | Build a "simple web interface" and the LLM "emails a formatted debate agenda to the faculty." | Replaced custom UI with a no-code automation (Google Form + Zapier + OpenAI) that posts the agenda to the shared group. |

### What shifted
- User accepted the scope-narrowing push from custom UI to no-code automation, significantly reducing engineering risk for the validation phase.
- User clarified that the agenda is a shared artifact, correcting the AI's assumption that it was solely a faculty briefing tool.

---

## Cycle 6: Reverting to Software for MVP 2

### AI Critique
- The AI pushed too hard on the "narrowest wedge," insisting that even MVP 2 should remain a no-code Zapier automation to test the LLM synthesis.

### User Response
> no it has to build something, i think. even just a simple vibe-coded prototype would work i believe? or would the approach be we do Googel Forms part, and THEN build software?

### Document Delta
| Field | Before | After |
|---|---|---|
| MVP 2 Scope | A no-code Zapier automation. | Reverted back to a "simple, vibe-coded web app" where students log in and paste transcripts into a dedicated UI, generating a shared dashboard. |

### What shifted
- User pushed back on the extreme narrowing of MVP 2, asserting the need to test the actual software experience (a vibe-coded app) after the initial manual (Google Form) test.
- AI clarified that the sequence accommodates this perfectly: MVP 1 fakes it with Google Forms, MVP 2 builds the software.

---

## Cycle 7: Drafting the Positionality Statement

### AI Critique
- Prompted the user to reflect on their background and assumptions (Positionality Statement) to understand potential biases in the research.

### User Response
> i would say that personally, i dont find need to use this tool - partially bc i usually dont brainstorm with agents, so the need for this seems excessive. not sure if my against-ness of using AI for this could be a stopper for people in the study. the lab focuses on people with/looking for tech backgrounds, so since i imagine most studies would be occurring within the lab, the context for how much this tool is actually relevant to other students in academic research could be biased from the lab standpoint.

### Document Delta
| Field | Before | After |
|---|---|---|
| Positionality Statement | Empty | Drafted a statement acknowledging the researcher's personal skepticism toward AI brainstorming (potential negative bias) and the highly tech-literate, engineering-focused nature of the participant pool (potential sampling bias). |

### What shifted
- Acknowledged potential biases in the validation plan, adding transparency to how the results will be interpreted, especially regarding external validity to non-tech academic populations.

---

## Phase 2 Synthesis: Validation Planning

### Summary Statistics
| Metric | Count |
|---|---|
| Total Interaction Cycles | 7 |
| Core Hypotheses Modified | 4 |
| MVP Scopes Narrowed | 2 |

### Evolution by Section

**Core Hypotheses & Research Questions:**
Started with vague notions of "efficiency" and "better structure." Through intense pushback on measurability and behavioral outcomes, we narrowed the focus to concrete metrics: decision velocity (tabling vs. deciding thorny issues) and felt influence (self-reported confidence and active discussion vs. recap). The most critical shift was preserving the user's strong stance on subjective personal insight despite AI pushback for purely behavioral metrics.

**MVP / Protostudy Sequence:**
Initially suffered from a hallucinated data pipeline (Discord integration) and significant scope creep (building a custom web interface for MVP 2). The sequence was heavily constrained to the "narrowest wedge": MVP 1 was scoped down to a Google Form ingestion and manual Wizard of Oz synthesis. MVP 2 was initially pushed down to a no-code Zapier automation, but the user successfully argued to revert it to a "vibe-coded" prototype to accurately test the software interaction experience in the second phase.

