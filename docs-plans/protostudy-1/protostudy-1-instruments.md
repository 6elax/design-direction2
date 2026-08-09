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
"Please write a 2-sentence reflection on what you learned from this resolution. Focus on the generalizable lesson (e.g., how to guide the agent, design tradeoffs) that a peer could apply if they get stuck on a similar problem."
*   `[Text Area: Reflection]`

---

## 📋 Instrument 2: Cohort Cross-Reading Evaluation Guide
*(Distributed to the rest of the cohort along with the compiled Historical Struggles Registry)*

### Questionnaire

#### 1. Identification of Overlapping Roadblocks
"Review the list of peer struggles in the spreadsheet. Have you encountered similar difficulties (technical, conceptual, or design bottlenecks) during your own project work?"
*   `[ ] Yes (Please list which Case IDs you matched with)`
*   `[ ] No`

#### 2. Perceived Helpfulness of Socratic Scaffolding
"For the cases you matched with, review the **Resolution** and **Socratic Contrast Questions** logged by your peer. On a scale of 1-5, how helpful would this guidance have been if you had access to it at the moment you were stuck?"
*   `[ ] 1 - Not helpful / too vague`
*   `[ ] 2 - Slightly helpful / too generic`
*   `[ ] 3 - Neutral`
*   `[ ] 4 - Mostly helpful / provides good guidance`
*   `[ ] 5 - Highly helpful / would have saved me significant time`

#### 3. Metacognitive Prompting Value
"Did reading your peers' struggles and resolutions make you reconsider your own project's design choices or how you interact with AI agents? If so, please describe how."
*   `[Text Area: Response]`

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
