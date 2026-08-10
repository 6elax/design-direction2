# Historical Struggles Registry — Protostudy 1

This registry contains the complete compilation of all user struggles, difficulties, and frustrations identified across all student chat logs in `examples/chatlogs/`.

This database serves as the evaluation material for the Protostudy 1 retrospective studies (Author Review and Cohort Cross-Reading).

---

## 🏷️ Taxonomy Classification Key

Each user struggle is classified under one of the following descriptive categories:

*   **`SCOPING`**: Roadblocks encountered while defining product boundaries, narrowing the MVP scope, or setting target user limitations.
*   **`DESIGN-FRICTION`**: Trade-offs or concerns regarding the user interface, privacy parameters, or collaborative workflow interactions.
*   **`THEORETICAL`**: Difficulty aligning the tool's design features with research literature and cognitive theories (e.g. Cognitive Scaffolding, Double-Loop Learning).
*   **`TECHNICAL`**: Concrete development blocks, compilation errors, framework incompatibilities, or system orchestration issues.
*   **`HALLUCINATION`**: Context drift or incorrect instruction execution by the AI agent, requiring direct user intervention.
*   **`METACOGNITIVE`**: Cognitive or psychological barriers, including near-peer query anxiety, search fatigue, and help-seeking vocabulary gaps.
*   **`VALIDATION`**: Challenges scoping testable research hypotheses, proxy metrics, or feasibility limitations of the evaluation study.

---

## 📚 Historical Struggles Registry Database

<table>
  <colgroup>
    <col style="width: 3%;">
    <col style="width: 3%;">
    <col style="width: 3%;">
    <col style="width: 3%;">
    <col style="width: 40%;">
    <col style="width: 45%;">
    <col style="width: 3%;">
  </colgroup>
  <thead>
    <tr>
      <th align="left">Case ID</th>
      <th align="left">Type</th>
      <th align="left">Author</th>
      <th align="left">Date</th>
      <th align="left">Roadblock (The User's Difficulty)</th>
      <th align="left">Resolution / Steer Fix</th>
      <th align="left">Source File & Lines</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>iris-user-scoping-dilemma</code></td>
      <td>SCOPING</td>
      <td>Iris</td>
      <td>2026-07-28</td>
      <td>Iris is struggling to define a narrow target user persona for the research paper validation without excluding other members of her lab cohort. Under this critique, Iris proposed expanding the tool to support complex open-source repos, which the agent warned would cause massive scope creep.</td>
      <td>Instead of defining a single target user for the entire program, Iris resolved this by splitting the lab curriculum from the research paper, steering the agent to limit the paper's validation scope strictly to Angular/Firebase codebases.</td>
      <td><a href="file:///Users/alexisluo/tech4good/design-dir-2/examples/chatlogs/iris/iris-product-chat.md#L97-L179">iris-product-chat.md:L97-L179</a></td>
    </tr>
    <tr>
      <td><code>alexis-surveillance-vs-learning</code></td>
      <td>DESIGN-FRICTION</td>
      <td>Alexis</td>
      <td>2026-07-20</td>
      <td>The agent critiqued the planned metric dashboard (tracking typing speed and planning ratios) as "administrative surveillance." Alexis is struggling to design a learning feedback system that triggers reflection without making users feel monitored or creating compliance gaming.</td>
      <td>Instead of tracking developer speed and ratio metrics, Alexis resolved the surveillance anxiety by prompting the agent to co-design CLI-triggered reflections and repository-level template failure heatmaps.</td>
      <td><a href="file:///Users/alexisluo/tech4good/design-dir-2/examples/chatlogs/alexis/alexis-product-chat.md#L109-L140">alexis-product-chat.md:L109-L140</a></td>
    </tr>
    <tr>
      <td><code>varia-synthesis-overload</code></td>
      <td>DESIGN-FRICTION</td>
      <td>Varia</td>
      <td>2026-07-22</td>
      <td>Varia worries that flat AI-generated summaries of individual brainstorms will cause synthesis overload and leave no cognitive space for human convergence.</td>
      <td>Instead of generating flat summaries of individual chats, Varia resolved this by steering the agent to extract only pinpointed highlights and themes to trigger active human discussion.</td>
      <td><a href="file:///Users/alexisluo/tech4good/design-dir-2/examples/chatlogs/varia/varia-research-chat.md#L52-L90">varia-research-chat.md:L52-L90</a></td>
    </tr>
    <tr>
      <td><code>varia-agent-hallucination-drift</code></td>
      <td>HALLUCINATION</td>
      <td>Varia</td>
      <td>2026-08-01</td>
      <td>The agent hallucinated criticisms about analyzing "Slack/Discord messages," losing track of the core product concept (individual student-to-AI transcripts).</td>
      <td>Instead of letting the agent continue criticizing the wrong architecture, Varia resolved the drift by prompting the agent to re-read the core thesis files.</td>
      <td><a href="file:///Users/alexisluo/tech4good/design-dir-2/examples/chatlogs/varia/varia-validation-chat.md#L123-L140">varia-validation-chat.md:L123-L140</a></td>
    </tr>
    <tr>
      <td><code>rachel-social-sharing-barrier</code></td>
      <td>METACOGNITIVE</td>
      <td>Rachel</td>
      <td>2026-07-10</td>
      <td>Rachel is concerned that junior students are too intimidated to share half-formed research ideas publicly in front of peers and mentors.</td>
      <td>Instead of forcing students to share raw conversational logs, Rachel resolved the sharing anxiety by steering the agent to act as a private questioning partner, exposing only support tags in the group template.</td>
      <td><a href="file:///Users/alexisluo/tech4good/design-dir-2/examples/chatlogs/rachel/rachel-product-chat.md#L90-L100">rachel-product-chat.md:L90-L100</a></td>
    </tr>
    <tr>
      <td><code>aubrey-fragile-novice-onboarding</code></td>
      <td>METACOGNITIVE</td>
      <td>Aubrey</td>
      <td>2026-07-08</td>
      <td>Aubrey points out that new students skim onboarding guides and fail because they are too intimidated to ask human mentors for help when confused.</td>
      <td>Instead of designing walkthroughs for highly resilient novices, Aubrey resolved the onboarding gap by steering the agent to design a conversational interface that acts as a low-stakes learning partner.</td>
      <td><a href="file:///Users/alexisluo/tech4good/design-dir-2/examples/chatlogs/aubrey/aubrey-product-chat.md#L40-L68">aubrey-product-chat.md:L40-L68</a></td>
    </tr>
    <tr>
      <td><code>alej-bypassing-and-resistance</code></td>
      <td>DESIGN-FRICTION</td>
      <td>Alej</td>
      <td>2026-07-15</td>
      <td>Alej faces a dilemma: if the Socratic tool refuses to write code, students will bypass it by copying their task into ChatGPT in another tab.</td>
      <td>Instead of using strict Socratic refusals, Alej resolved the bypassing risk by steering the agent to build context-aware templates and helper prompts directly into the interface.</td>
      <td><a href="file:///Users/alexisluo/tech4good/design-dir-2/examples/chatlogs/alej/alej-product-chat.md#L83-L100">alej-product-chat.md:L83-L100</a></td>
    </tr>
    <tr>
      <td><code>varia-transcript-fatigue</code></td>
      <td>DESIGN-FRICTION</td>
      <td>Varia</td>
      <td>2026-07-22</td>
      <td>Varia worries that busy faculty mentors will ignore raw developer transcripts due to time constraints, leaving logs unread.</td>
      <td>Instead of publishing raw developer logs, Varia resolved this by steering the agent to design a synthesis overview of pros/cons and themes rather than raw conversation files.</td>
      <td><a href="file:///Users/alexisluo/tech4good/design-dir-2/examples/chatlogs/varia/varia-research-chat.md#L308-L330">varia-research-chat.md:L308-L330</a></td>
    </tr>
    <tr>
      <td><code>varia-literature-scarcity</code></td>
      <td>SCOPING</td>
      <td>Varia</td>
      <td>2026-07-22</td>
      <td>Varia is struggling to position the learnersourcing approach in the literature, worrying it will be rejected as unoriginal.</td>
      <td>Instead of framing it as standard learnersourcing, Varia resolved the gap by prompting the agent to position the paper around "Telemetry-Driven Learnersourcing" (capturing friction signals).</td>
      <td><a href="file:///Users/alexisluo/tech4good/design-dir-2/examples/chatlogs/varia/varia-research-chat.md#L548-L570">varia-research-chat.md:L548-L570</a></td>
    </tr>
    <tr>
      <td><code>alexis-scaffolding-intangibility</code></td>
      <td>THEORETICAL</td>
      <td>Alexis</td>
      <td>2026-07-20</td>
      <td>Alexis cannot understand what "contextual runtime scaffolding" looks like in practice compared to static tutorials.</td>
      <td>Instead of accepting abstract terms, Alexis resolved this by prompting the agent for concrete definitions, steering it to design specific layout and query widgets.</td>
      <td><a href="file:///Users/alexisluo/tech4good/design-dir-2/examples/chatlogs/alexis/alexis-research-chat.md#L85-L120">alexis-research-chat.md:L85-L120</a></td>
    </tr>
    <tr>
      <td><code>alexis-compliance-gaming</code></td>
      <td>DESIGN-FRICTION</td>
      <td>Alexis</td>
      <td>2026-07-20</td>
      <td>Alexis is concerned that forcing reflections will lead to compliance gaming (users writing gibberish to bypass triggers).</td>
      <td>Instead of using unchecked reflection fields, Alexis resolved this by co-designing an NLU gating mechanism that validates reflection relevance and syntax.</td>
      <td><a href="file:///Users/alexisluo/tech4good/design-dir-2/examples/chatlogs/alexis/alexis-research-chat.md#L140-L180">alexis-research-chat.md:L140-L180</a></td>
    </tr>
    <tr>
      <td><code>alexis-theory-disconnect</code></td>
      <td>THEORETICAL</td>
      <td>Alexis</td>
      <td>2026-07-20</td>
      <td>Alexis is struggling to map abstract academic theories (e.g. Double-Loop Learning) to concrete system design features.</td>
      <td>Instead of relying on theoretical abstracts, Alexis resolved this by prompting the agent to translate Double-Loop Learning into template-update telemetry loops.</td>
      <td><a href="file:///Users/alexisluo/tech4good/design-dir-2/examples/chatlogs/alexis/alexis-research-chat.md#L239-L290">alexis-research-chat.md:L239-L290</a></td>
    </tr>
    <tr>
      <td><code>alexis-peer-sync-friction</code></td>
      <td>TECHNICAL</td>
      <td>Alexis</td>
      <td>2026-07-20</td>
      <td>Alexis notes that developers waste hours manually asking peers on Slack/Discord to solve recurring prompt-steering errors.</td>
      <td>Instead of relying on manual peer questioning, Alexis resolved the friction by steering the agent to design a CLI command that logs and indexes steering fixes.</td>
      <td><a href="file:///Users/alexisluo/tech4good/design-dir-2/examples/chatlogs/alexis/alexis-product-chat.md#L109-L135">alexis-product-chat.md:L109-L135</a></td>
    </tr>
    <tr>
      <td><code>alexis-log-reading-fatigue</code></td>
      <td>DESIGN-FRICTION</td>
      <td>Alexis</td>
      <td>2026-07-20</td>
      <td>Alexis is concerned that reading a long, 4-hour raw chat log is a turn-off for developers looking for quick solutions.</td>
      <td>Instead of displaying raw logs, Alexis resolved this by steering the agent to co-design collapsible timelines and automated pivot moment highlights.</td>
      <td><a href="file:///Users/alexisluo/tech4good/design-dir-2/examples/chatlogs/alexis/alexis-product-chat.md#L333-L370">alexis-product-chat.md:L333-L370</a></td>
    </tr>
    <tr>
      <td><code>alexis-error-isolation</code></td>
      <td>TECHNICAL</td>
      <td>Alexis</td>
      <td>2026-07-20</td>
      <td>Alexis is worried that different teams have completely isolated error profiles, making a shared registry of peer logs useless.</td>
      <td>Instead of building a complex database immediately, Alexis resolved this by structuring MVP 1 as a retrospective check mapping historical error overlap.</td>
      <td><a href="file:///Users/alexisluo/tech4good/design-dir-2/examples/chatlogs/alexis/alexis-validation-chat.md#L27-L65">alexis-validation-chat.md:L27-L65</a></td>
    </tr>
    <tr>
      <td><code>alexis-interface-ambiguity</code></td>
      <td>DESIGN-FRICTION</td>
      <td>Alexis</td>
      <td>2026-07-20</td>
      <td>Alexis is confused about the tool's interface format (whether it operates as a CLI tool, VS Code extension, or agent skill).</td>
      <td>Instead of choosing a single medium, Alexis resolved this by prompting the agent to split the interface into a CLI for logging and a VS Code sidebar widget for chat.</td>
      <td><a href="file:///Users/alexisluo/tech4good/design-dir-2/examples/chatlogs/alexis/alexis-validation-chat.md#L285-L320">alexis-validation-chat.md:L285-L320</a></td>
    </tr>
    <tr>
      <td><code>alexis-log-scale-overload</code></td>
      <td>DESIGN-FRICTION</td>
      <td>Alexis</td>
      <td>2026-07-20</td>
      <td>Alexis is concerned that if 10+ people hit the same error, showing all their logs will cause cognitive overload.</td>
      <td>Instead of listing all logs sequentially, Alexis resolved this by steering the agent to design similarity grouping and user rating filters.</td>
      <td><a href="file:///Users/alexisluo/tech4good/design-dir-2/examples/chatlogs/alexis/alexis-validation-chat.md#L681-L720">alexis-validation-chat.md:L681-L720</a></td>
    </tr>
    <tr>
      <td><code>iris-inclusivity-scoping</code></td>
      <td>SCOPING</td>
      <td>Iris</td>
      <td>2026-07-28</td>
      <td>Iris wants to support complex open-source repos to keep the tool inclusive, but the agent critiques this as massive scope creep.</td>
      <td>Instead of supporting arbitrary repositories, Iris resolved this by steering the agent to limit the research scope strictly to the lab's Angular/Firebase curriculum.</td>
      <td><a href="file:///Users/alexisluo/tech4good/design-dir-2/examples/chatlogs/iris/iris-product-chat.md#L97-L160">iris-product-chat.md:L97-L160</a></td>
    </tr>
    <tr>
      <td><code>iris-fading-scaffolding-turnoff</code></td>
      <td>DESIGN-FRICTION</td>
      <td>Iris</td>
      <td>2026-07-28</td>
      <td>Iris warns that blunt Socratic messages (like "I refuse to write code") will frustrate students under tight time pressure.</td>
      <td>Instead of displaying a hard refusal message, Iris resolved this by steering the agent to co-design helpful diagnostic questions.</td>
      <td><a href="file:///Users/alexisluo/tech4good/design-dir-2/examples/chatlogs/iris/iris-product-chat.md#L182-L200">iris-product-chat.md:L182-L200</a></td>
    </tr>
    <tr>
      <td><code>iris-hypothesis-dilution</code></td>
      <td>VALIDATION</td>
      <td>Iris</td>
      <td>2026-07-28</td>
      <td>Iris's advisor wants to validate both individual learning and learnersourcing at once, diluting the focus of the study.</td>
      <td>Instead of testing both in a single block, Iris resolved this by steering the agent to split the study into walkthrough retention metrics and cohort dashboards.</td>
      <td><a href="file:///Users/alexisluo/tech4good/design-dir-2/examples/chatlogs/iris/iris-product-chat.md#L194-L200">iris-product-chat.md:L194-L200</a></td>
    </tr>
    <tr>
      <td><code>aubrey-scaffolding-scoping</code></td>
      <td>SCOPING</td>
      <td>Aubrey</td>
      <td>2026-07-08</td>
      <td>The agent attempted to scope "practice mode" into the product thesis, which Aubrey rejects as unrelated to walkthrough guides.</td>
      <td>Instead of including practice mode in the thesis, Aubrey resolved this by pushing back and limiting the scope strictly to conversational walkthrough mode.</td>
      <td><a href="file:///Users/alexisluo/tech4good/design-dir-2/examples/chatlogs/aubrey/aubrey-product-chat.md#L254-L278">aubrey-product-chat.md:L254-L278</a></td>
    </tr>
    <tr>
      <td><code>rachel-participation-disparity</code></td>
      <td>DESIGN-FRICTION</td>
      <td>Rachel</td>
      <td>2026-07-10</td>
      <td>Rachel is concerned that confident, loud students dominate sync alignment meetings, silencing quiet or junior team members.</td>
      <td>Instead of relying on open-ended group sync debates, Rachel resolved this by steering the agent to co-design templates that summarize individual ideas into neutral summaries.</td>
      <td><a href="file:///Users/alexisluo/tech4good/design-dir-2/examples/chatlogs/rachel/rachel-validation-chat.md#L73-L90">rachel-validation-chat.md:L73-L90</a></td>
    </tr>
    <tr>
      <td><code>rachel-anonymity-dilemma</code></td>
      <td>DESIGN-FRICTION</td>
      <td>Rachel</td>
      <td>2026-07-10</td>
      <td>Rachel is struggling to attribute ideas on the shared template without exposing raw transcripts and violating developer privacy.</td>
      <td>Instead of exposing raw conversation histories, Rachel resolved this by steering the agent to display support tags for options while keeping transcripts private.</td>
      <td><a href="file:///Users/alexisluo/tech4good/design-dir-2/examples/chatlogs/rachel/rachel-product-chat.md#L325-L360">rachel-product-chat.md:L325-L360</a></td>
    </tr>
  </tbody>
</table>
