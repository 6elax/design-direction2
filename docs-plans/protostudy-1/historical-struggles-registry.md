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
    <col style="width: 5%;">
    <col style="width: 5%;">
    <col style="width: 5%;">
    <col style="width: 5%;">
    <col style="width: 50%;">
    <col style="width: 30%;">
    <col style="width: 10%;">
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
      <td>The agent critiqued Iris's target user scoping as too broad. Iris struggles to define a narrow user group for the research paper validation without feeling like she is excluding members of her lab cohort. Under this critique, Iris proposed expanding the tool to support complex open-source repos, which the agent warned would cause massive scope creep.</td>
      <td>Iris resolved the conflict by splitting the lab implementation from the research paper scope: she steered the agent to limit the paper's validation strictly to Angular/Firebase codebases, moving the open-source vision to the long-term appendix.</td>
      <td><a href="file:///Users/alexisluo/tech4good/design-dir-2/examples/chatlogs/iris/iris-product-chat.md#L97-L179">iris-product-chat.md:L97-L179</a></td>
    </tr>
    <tr>
      <td><code>alexis-surveillance-vs-learning</code></td>
      <td>DESIGN-FRICTION</td>
      <td>Alexis</td>
      <td>2026-07-20</td>
      <td>The agent critiqued the planned metric dashboard (tracking typing speed and planning ratios) as "administrative surveillance" that developers would resist. Alexis is stuck trying to design a learning feedback system that forces active reflection without creating compliance gaming or surveillance anxiety.</td>
      <td>Alexis redirected the agent away from tracking speed/ratios and co-designed a learning system where reflections are triggered only when stuck, mapping group metrics to repository template health rather than individual performance.</td>
      <td><a href="file:///Users/alexisluo/tech4good/design-dir-2/examples/chatlogs/alexis/alexis-product-chat.md#L109-L140">alexis-product-chat.md:L109-L140</a></td>
    </tr>
    <tr>
      <td><code>varia-synthesis-overload</code></td>
      <td>DESIGN-FRICTION</td>
      <td>Varia</td>
      <td>2026-07-22</td>
      <td>The agent proposed flat-summarizing all individual chats for team convergence. Varia worries that flat AI summaries will create too much text for the team to read, causing synthesis overload and leaving no cognitive space or time for actual human convergence and alignment.</td>
      <td>Varia steered the agent to change its aggregation model: instead of generating flat summaries, the AI extracts only pinpointed themes and divergent points to trigger authentic human discussion rather than AI reading.</td>
      <td><a href="file:///Users/alexisluo/tech4good/design-dir-2/examples/chatlogs/varia/varia-research-chat.md#L52-L90">varia-research-chat.md:L52-L90</a></td>
    </tr>
    <tr>
      <td><code>varia-agent-hallucination-drift</code></td>
      <td>HALLUCINATION</td>
      <td>Varia</td>
      <td>2026-08-01</td>
      <td>During validation planning, the agent experienced context drift and hallucinated criticisms about analyzing "Slack/Discord messages," completely losing track of the product's actual architecture (individual student-to-AI transcripts).</td>
      <td>Varia explicitly intervened and ordered the agent to halt, pointing out the hallucination directly and instructing it to re-read the core product-thesis and research-thesis files to align its suggestions.</td>
      <td><a href="file:///Users/alexisluo/tech4good/design-dir-2/examples/chatlogs/varia/varia-validation-chat.md#L123-L140">varia-validation-chat.md:L123-L140</a></td>
    </tr>
    <tr>
      <td><code>rachel-social-sharing-barrier</code></td>
      <td>METACOGNITIVE</td>
      <td>Rachel</td>
      <td>2026-07-10</td>
      <td>The agent pushed for shared brainstorming logs. Rachel worries about the social barrier for junior students, who are too intimidated to share half-formed research ideas in front of peers and mentors, causing them to stay silent in sync reviews.</td>
      <td>Rachel steered the agent to define a two-stage privacy boundary: the AI acts as a private questioning partner first, and the group template only exposes support tags for ideas rather than raw transcript files.</td>
      <td><a href="file:///Users/alexisluo/tech4good/design-dir-2/examples/chatlogs/rachel/rachel-product-chat.md#L90-L100">rachel-product-chat.md:L90-L100</a></td>
    </tr>
    <tr>
      <td><code>aubrey-fragile-novice-onboarding</code></td>
      <td>METACOGNITIVE</td>
      <td>Aubrey</td>
      <td>2026-07-08</td>
      <td>The agent assumed target users are "highly motivated/desperate" students. Aubrey points out that students actually skim onboarding guides and fail tasks because they are too intimidated to ask human mentors for help and suffer from help-seeking vocabulary gaps.</td>
      <td>Aubrey steered the agent to pivot the user persona from a resilient expert to an "intelligent but fragile novice" who needs psychological safety, configuring the tool to provide low-stakes conversational AI partners to build confidence.</td>
      <td><a href="file:///Users/alexisluo/tech4good/design-dir-2/examples/chatlogs/aubrey/aubrey-product-chat.md#L40-L68">aubrey-product-chat.md:L40-L68</a></td>
    </tr>
    <tr>
      <td><code>alej-bypassing-and-resistance</code></td>
      <td>DESIGN-FRICTION</td>
      <td>Alej</td>
      <td>2026-07-15</td>
      <td>The agent warned that if the Socratic tool refuses to write code, students will just open ChatGPT in another tab. Alej faces a dilemma: how to create learning resistance without making the tool so annoying that students bypass it entirely.</td>
      <td>Alej steered the design to build contextual templates and pre-written helper prompts directly into the editor interface, making it lower-friction for students to use the Socratic tool than opening an external tab.</td>
      <td><a href="file:///Users/alexisluo/tech4good/design-dir-2/examples/chatlogs/alej/alej-product-chat.md#L83-L100">alej-product-chat.md:L83-L100</a></td>
    </tr>
    <tr>
      <td><code>varia-transcript-fatigue</code></td>
      <td>DESIGN-FRICTION</td>
      <td>Varia</td>
      <td>2026-07-22</td>
      <td>The agent proposed sharing raw developer logs. Varia worries that busy faculty mentors will ignore raw transcript graveyards due to time constraints, defeating the tool's collaborative value.</td>
      <td>Varia pushed back on raw transcript sharing, steering the agent to design a synthesis overview that surfaces pros/cons and themes rather than raw conversation files.</td>
      <td><a href="file:///Users/alexisluo/tech4good/design-dir-2/examples/chatlogs/varia/varia-research-chat.md#L308-L330">varia-research-chat.md:L308-L330</a></td>
    </tr>
    <tr>
      <td><code>varia-literature-scarcity</code></td>
      <td>SCOPING</td>
      <td>Varia</td>
      <td>2026-07-22</td>
      <td>Varia is struggling to find literature to validate their learnersourcing approach, worrying that reviewers will reject the contribution as unoriginal since many platforms explore collaborative coding.</td>
      <td>Varia prompted the agent to search for positioning gaps, steering it to define "Telemetry-Driven Learnersourcing" (capturing user friction signals rather than manual user summaries).</td>
      <td><a href="file:///Users/alexisluo/tech4good/design-dir-2/examples/chatlogs/varia/varia-research-chat.md#L548-L570">varia-research-chat.md:L548-L570</a></td>
    </tr>
    <tr>
      <td><code>alexis-scaffolding-intangibility</code></td>
      <td>THEORETICAL</td>
      <td>Alexis</td>
      <td>2026-07-20</td>
      <td>The agent proposed "contextual runtime scaffolding" as a key concept. Alexis is stuck because he cannot understand what this looks like in practice compared to standard static tutorials.</td>
      <td>Alexis pressed the agent for concrete definitions, steering it to outline visual layout playgrounds, database query visualizers, and pre-written diagnostic widgets in the IDE sidebar.</td>
      <td><a href="file:///Users/alexisluo/tech4good/design-dir-2/examples/chatlogs/alexis/alexis-research-chat.md#L85-L120">alexis-research-chat.md:L85-L120</a></td>
    </tr>
    <tr>
      <td><code>alexis-compliance-gaming</code></td>
      <td>DESIGN-FRICTION</td>
      <td>Alexis</td>
      <td>2026-07-20</td>
      <td>If the tool forces reflection prompts, developers will write low-effort gibberish just to bypass the gates, rendering the reflections useless.</td>
      <td>Alexis co-designed an NLU gating mechanism with the agent that checks reflection relevancy and understandability before unblocking the task, preventing raw bypass entries.</td>
      <td><a href="file:///Users/alexisluo/tech4good/design-dir-2/examples/chatlogs/alexis/alexis-research-chat.md#L140-L180">alexis-research-chat.md:L140-L180</a></td>
    </tr>
    <tr>
      <td><code>alexis-theory-disconnect</code></td>
      <td>THEORETICAL</td>
      <td>Alexis</td>
      <td>2026-07-20</td>
      <td>The agent demanded that Alexis align validation hypotheses with academic theories (e.g. Double-Loop Learning), but Alexis is stuck because the theories are too abstract and hard to connect to features.</td>
      <td>Alexis pushed the agent to visualize the theories, translating Double-Loop Learning into template-update loops where student telemetry updates the master walkthrough files.</td>
      <td><a href="file:///Users/alexisluo/tech4good/design-dir-2/examples/chatlogs/alexis/alexis-research-chat.md#L239-L290">alexis-research-chat.md:L239-L290</a></td>
    </tr>
    <tr>
      <td><code>alexis-peer-sync-friction</code></td>
      <td>TECHNICAL</td>
      <td>Alexis</td>
      <td>2026-07-20</td>
      <td>Alexis identified that developers get stuck on the same prompt errors and waste hours manually asking peers or searching disorganized channels, slowing down overall cohort velocity.</td>
      <td>Alexis steered the agent to design a centralized CLI command that automatically logs, sanitizes, and indexes steering solutions inside the workspace repository.</td>
      <td><a href="file:///Users/alexisluo/tech4good/design-dir-2/examples/chatlogs/alexis/alexis-product-chat.md#L109-L135">alexis-product-chat.md:L109-L135</a></td>
    </tr>
    <tr>
      <td><code>alexis-log-reading-fatigue</code></td>
      <td>DESIGN-FRICTION</td>
      <td>Alexis</td>
      <td>2026-07-20</td>
      <td>Reading a 4-hour raw developer transcript is a turn-off for developers who are stuck and under time pressure, making raw transcripts an ineffective help resource.</td>
      <td>Alexis directed the agent to co-design collapsible summaries and highlight pivot moments, creating a timeline summary of key decisions rather than raw logs.</td>
      <td><a href="file:///Users/alexisluo/tech4good/design-dir-2/examples/chatlogs/alexis/alexis-product-chat.md#L333-L370">alexis-product-chat.md:L333-L370</a></td>
    </tr>
    <tr>
      <td><code>alexis-error-isolation</code></td>
      <td>TECHNICAL</td>
      <td>Alexis</td>
      <td>2026-07-20</td>
      <td>Alexis is worried that different teams have completely isolated error profiles, which would make a shared logs registry useless for cohort alignment.</td>
      <td>Alexis structured MVP 1 to run a retrospective study mapping error profiles across different teams to test the recurrence assumption before coding.</td>
      <td><a href="file:///Users/alexisluo/tech4good/design-dir-2/examples/chatlogs/alexis/alexis-validation-chat.md#L27-L65">alexis-validation-chat.md:L27-L65</a></td>
    </tr>
    <tr>
      <td><code>alexis-interface-ambiguity</code></td>
      <td>DESIGN-FRICTION</td>
      <td>Alexis</td>
      <td>2026-07-20</td>
      <td>Alexis is confused about whether the tool should be a VS Code extension, a CLI tool, or an agent skill, making it difficult to define the core system architecture.</td>
      <td>Alexis pushed the agent to detail the interfaces, defining the tool as a CLI command for logging and an interactive sidebar extension for chat.</td>
      <td><a href="file:///Users/alexisluo/tech4good/design-dir-2/examples/chatlogs/alexis/alexis-validation-chat.md#L285-L320">alexis-validation-chat.md:L285-L320</a></td>
    </tr>
    <tr>
      <td><code>alexis-log-scale-overload</code></td>
      <td>DESIGN-FRICTION</td>
      <td>Alexis</td>
      <td>2026-07-20</td>
      <td>If 10+ teams hit the same error, displaying all 10 logs will overwhelm developers. Alexis is stuck trying to filter the logs without losing context.</td>
      <td>Alexis steered the agent to design similarity grouping algorithms that merge identical failures and rank logs by developer feedback ratings.</td>
      <td><a href="file:///Users/alexisluo/tech4good/design-dir-2/examples/chatlogs/alexis/alexis-validation-chat.md#L681-L720">alexis-validation-chat.md:L681-L720</a></td>
    </tr>
    <tr>
      <td><code>iris-inclusivity-scoping</code></td>
      <td>SCOPING</td>
      <td>Iris</td>
      <td>2026-07-28</td>
      <td>Iris wants to keep the tool inclusive for all lab members by supporting open-source repos, but the agent critiques this as a source of massive scope creep.</td>
      <td>Iris resolved the scope tension by limiting the paper's validation scope to the lab's Angular/Firebase curriculum while deferring open-source extensions.</td>
      <td><a href="file:///Users/alexisluo/tech4good/design-dir-2/examples/chatlogs/iris/iris-product-chat.md#L97-L160">iris-product-chat.md:L97-L160</a></td>
    </tr>
    <tr>
      <td><code>iris-fading-scaffolding-turnoff</code></td>
      <td>DESIGN-FRICTION</td>
      <td>Iris</td>
      <td>2026-07-28</td>
      <td>The agent proposed telling the developer "I refuse to write code." Iris warns that this blunt Socratic friction is a turn-off for students under time pressure.</td>
      <td>Iris redirected the agent to co-design diagnostic questions that frame the friction as helpful advice rather than simple refusals.</td>
      <td><a href="file:///Users/alexisluo/tech4good/design-dir-2/examples/chatlogs/iris/iris-product-chat.md#L182-L200">iris-product-chat.md:L182-L200</a></td>
    </tr>
    <tr>
      <td><code>iris-hypothesis-dilution</code></td>
      <td>VALIDATION</td>
      <td>Iris</td>
      <td>2026-07-28</td>
      <td>Iris's advisor wants to test both learning retention and learnersourcing at once, diluting the focus of the validation study.</td>
      <td>Iris split the validation metrics: tested individual learning retention inside walkthroughs and learnersourcing updates via cohort dashboards.</td>
      <td><a href="file:///Users/alexisluo/tech4good/design-dir-2/examples/chatlogs/iris/iris-product-chat.md#L194-L200">iris-product-chat.md:L194-L200</a></td>
    </tr>
    <tr>
      <td><code>aubrey-scaffolding-scoping</code></td>
      <td>SCOPING</td>
      <td>Aubrey</td>
      <td>2026-07-08</td>
      <td>The agent attempted to scope "practice mode" tasks into the product thesis, which Aubrey rejects as irrelevant to walkthrough guides.</td>
      <td>Aubrey pushed back on the agent's inclusion, explicitly limiting the product thesis scope strictly to conversational walkthrough mode guides.</td>
      <td><a href="file:///Users/alexisluo/tech4good/design-dir-2/examples/chatlogs/aubrey/aubrey-product-chat.md#L254-L278">aubrey-product-chat.md:L254-L278</a></td>
    </tr>
    <tr>
      <td><code>rachel-participation-disparity</code></td>
      <td>DESIGN-FRICTION</td>
      <td>Rachel</td>
      <td>2026-07-10</td>
      <td>Rachel notices that loud, confident team members dominate sync meetings, silencing quiet or junior students.</td>
      <td>Rachel directed the agent to co-design AI templates that structure individual brainstorming logs into neutral summaries highlighting all viewpoints equally.</td>
      <td><a href="file:///Users/alexisluo/tech4good/design-dir-2/examples/chatlogs/rachel/rachel-validation-chat.md#L73-L90">rachel-validation-chat.md:L73-L90</a></td>
    </tr>
    <tr>
      <td><code>rachel-anonymity-dilemma</code></td>
      <td>DESIGN-FRICTION</td>
      <td>Rachel</td>
      <td>2026-07-10</td>
      <td>Rachel is struggling to attribute ideas to individuals on the agenda without exposing raw chats and violating developer privacy.</td>
      <td>Rachel steered the agent to design overview templates showing options with support tags, keeping conversational histories private.</td>
      <td><a href="file:///Users/alexisluo/tech4good/design-dir-2/examples/chatlogs/rachel/rachel-product-chat.md#L325-L360">rachel-product-chat.md:L325-L360</a></td>
    </tr>
  </tbody>
</table>
