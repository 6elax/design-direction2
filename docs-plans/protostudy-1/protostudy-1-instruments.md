# Protostudy 1 Instruments — MVP 1: Retrospective Evaluation

This companion document holds the survey instruments, evaluation metrics, and interview guides for the retrospective evaluation of historical chatlogs.

**Main doc:** [protostudy-1.md](./protostudy-1.md)

---

## 📋 Instrument 1: Author Verification Survey
*(Sent to the original authors—e.g., Iris, Alexis, Varia—along with their respective extracted spreadsheet cases)*

### Evaluation Survey Form

#### 1. Accuracy of Roadblock & Fix Extraction
"Please review the extracted Case Study corresponding to your previous chatlog. On a scale of 1-5, how accurately does this summary represent the actual roadblock you faced and how you resolved it?"
*   `[ ] 1 - Completely inaccurate / missed the point`
*   `[ ] 2 - Mostly inaccurate / minor details correct`
*   `[ ] 3 - Neutral / correct facts but lacks context`
*   `[ ] 4 - Mostly accurate / captures the core experience`
*   `[ ] 5 - Highly accurate / captures both the facts and the nuance`

#### 2. Nuance & Detail Corrections
"What details, design trade-offs, or specific context are missing or incorrectly summarized in this entry? Please note any changes we should make to represent your struggle accurately."
*   `[Text Area: Response]`

#### 3. Socratic Reflection Capture
"Looking back, what was the key 'aha!' steer or design trade-off that finally resolved your struggle, and what generalizable advice would you give a peer facing this?"
*   `[Text Area: Reflection]`

> **Research Goal (What we are trying to learn):** We want to capture the exact cognitive transition from a failing steering strategy (e.g., arguing with the agent, letting it generate code on assumptions) to a successful re-steering action, extracting the developer's tacit steering knowledge.
> **Research Utility (How it helps us):** This reflection text represents the literal educational guidance that will be stored in the Socratic database and rendered dynamically in the right-side Socratic Workspace Pane (Level 2) during prototype MVPs 2/3.

---

## 📋 Instrument 2: Cohort Cross-Reading Evaluation Guide
*(Distributed to the rest of the cohort along with the compiled Historical Struggles Registry)*

### Questionnaire

#### 1. Identification of Overlapping Roadblocks
"Review the list of peer struggles in the spreadsheet. Have you encountered similar difficulties (technical, conceptual, or design bottlenecks) during your own project work?"
*   `[ ] Yes (Please list which Case IDs you matched with)`
*   `[ ] No`

#### 2. Perceived Helpfulness of Socratic Scaffolding
"For the cases you matched with, review the **Resolution** and **Socratic Pivot Questions** logged by your peer. On a scale of 1-5, how helpful would this guidance have been if you had access to it at the moment you were stuck?"
*   `[ ] 1 - Not helpful / too vague`
*   `[ ] 2 - Slightly helpful / too generic`
*   `[ ] 3 - Neutral`
*   `[ ] 4 - Mostly helpful / provides good guidance`
*   `[ ] 5 - Highly helpful / would have saved me significant time`

#### 3. Generalization & Cross-Team Relevancy Check
"Previously, some cohort members found peer logs from other teams (e.g., web-dev vs. design) irrelevant. Review the new **Socratic Pivot Questions** column.
On a scale of 1-5, does framing these cases as high-level systems/metacognitive questions make them helpful and applicable to your own project work?"
*   `[ ] 1 - Still irrelevant / too domain-specific`
*   `[ ] 2 - Mostly irrelevant`
*   `[ ] 3 - Neutral`
*   `[ ] 4 - Mostly helpful / I can map these questions to my own project`
*   `[ ] 5 - Highly helpful / directly relevant to my active workspace`

#### 4. Metacognitive Mapping & Prompt Translation
"For the cases you matched with, review your peer's Socratic Pivot Questions. If you had read these questions when you were stuck, how would you have translated them into a concrete prompt change or action in your own project?"
*   `[Text Area: Response]`

> **Research Goal (What we are trying to learn):** We want to evaluate the participant's capacity for **metacognitive transfer**—specifically, whether our systems-level generalization successfully bridges domain boundaries (web-dev vs. design) and triggers active self-correction in a reader.
> **Research Utility (How it helps us):** This validates our core hypothesis **H3 (Value of Peer Dialogue)**: verifying if peer-scaffolded Socratic questions can trigger active self-correction in a reader rather than acting as static, unread documentation. It also tells us whether the "Systems-level abstraction" is clear enough to bridge domain boundaries in practice.

---

## 🔍 Researcher Audit Protocol
The researcher analyzes the survey responses to calculate baseline feasibility metrics:

### 1. Ingestion Accuracy Score
$$\text{Average Author Accuracy} = \frac{\sum(\text{Author Accuracy Ratings})}{\text{Total Authors surveyed}}$$
*   *Target:* $\geq 4.0 / 5.0$. If this score is low, our extraction pipeline is losing too much nuance, and we must refine our LLM prompt templates for MVP 2.

### 2. Friction Overlap Rate
$$\text{Friction Overlap Rate} = \frac{\text{Number of Cohort Members reporting overlap with } \ge 1 \text{ case}}{\text{Total cohort size}} \times 100\%$$
*   *Target:* $\geq 40\%$. Proves that struggles generalized across different members' planning/technical tasks.

### 3. Perceived Helpfulness Rate
$$\text{Helpfulness Rate} = \frac{\sum(\text{Helpfulness Ratings } \ge 4)}{\text{Total Match evaluations}} \times 100\%$$
*   *Target:* $\geq 30\%$. Verifies that Socratic matching offers genuine educational/problem-solving value.
