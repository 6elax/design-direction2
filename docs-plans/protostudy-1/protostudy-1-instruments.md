# Protostudy 1 Instruments — MVP 1: Manual Sharing Probe

This companion document holds the operational detail for data collection for MVP 1. It details the Google Sheet row structure, weekly updates reporting template, and exit interview questions.

**Main doc:** [protostudy-1.md](./protostudy-1.md)

---

## 📖 Participant Onboarding Instructions
*(Send this text directly to Team A and Team B members via Slack or email before the study begins)*

### Welcome to the SkillWeave Pilot!
We are running a 1-week pilot to see how we can share agent-steering struggles and fixes across the lab cohort. 

#### 1. What counts as a struggle?
You should log a row in the Google Sheet whenever you hit at least one of these criteria:
* **Prompt Loop**: You prompt your AI agent $\geq 3$ consecutive times to fix the exact same compile error or logic bug.
* **Time Stuck**: You spend $\geq 5\text{ to }10\text{ minutes}$ trying to troubleshoot a single agent-generated issue.
* **Reversion**: You discard the agent's changes entirely and revert your code back.

#### 2. Your Workflow
1. **Get Stuck**: You hit a struggle matching the criteria above.
2. **Search**: Open the **[Shared Google Sheet Link]** and search (`Cmd+F`) for keywords relating to your roadblock (e.g. "signals", "firebase").
3. **If you find a peer fix**: Apply their prompt fix. If it works, **do not write a new row**. Simply add your name and date inside their row's **`Helpful Matches (Who used this?)`** column.
4. **If you find nothing**: Resolve the issue yourself. Once resolved, **add a new row** to the bottom of the Sheet documenting your roadblock, your successful fix prompts, and a quick 2-sentence reflection.

#### 3. Getting Help
* If you have technical coding questions, search the Google Sheet or troubleshoot.
* If you have clarifying questions about how to use this Google Sheet, what to log, or hit system access issues, DM **[Coordinator Name]** directly on Slack!

---

## 📊 Shared Google Sheet Log Structure

The central spreadsheet is created in a shared Google Drive folder accessible to Team A and Team B. 

### Columns:
1. **Timestamp**: Generated automatically on row insertion.
2. **Author**: Name of the developer logging the struggle.
3. **Team**: Team A or Team B.
4. **Project/Area**: e.g., Angular signals component, Firestore security rules.
5. **The Roadblock**: Raw error message, console log, or traceback, plus a description of the agent-steering loop.
6. **The Steer Fix**: The successful prompt adjustment, prompt sequence, or code diff that resolved the issue.
7. **2-Sentence Reflection**: A mandatory 2-sentence reflection on what they learned.
8. **Helpful Matches (Who used this?)**: If a peer uses your row to resolve their roadblock, they append their name/initials and date here (e.g., "Developer B - Aug 12"). This allows us to track search success rate (H3) without creating duplicate error entries.

---

## 🎙️ Weekly Update Self-Report Template

Participants include this lightweight status section in their weekly written updates:

```markdown
### SkillWeave MVP 1 Tracking
* Number of roadblocks hit this week: [Count]
* Did you check the shared Google Sheet when stuck? [Yes/No/How often]
* Did a teammate's logged fix help you resolve a roadblock? [Yes (describe)/No]
* Did you log your resolved roadblocks in the sheet? [Yes (link cases)/No (why)]
```

---

## 🎙️ Exit Interview Guide
A 10-minute debrief at the end of the 1-week pilot.

### Questions:
1. "When you got stuck on your project this week, did you check the shared Google Sheet? Why or why not?"
2. "Was there a specific incident where a teammate's logged struggle helped you resolve your own issue? Describe it."
3. "How did it feel having to manually copy-paste your raw error, prompt adjustment, and 2-sentence reflection into a spreadsheet row? Did it disrupt your coding flow?"
4. "Where did you find yourself cutting corners in the sheet (e.g. leaving the reflection blank, omitting raw tracebacks)?"

---

## 🔍 Coordinator Audit Protocol
Because we are running a no-code probe:
1. **Google Sheets Version History Audit**: Every Friday, the coordinator audits the Sheet using the Google Sheets Version History and Activity Dashboard to count:
   - Total logged rows.
   - Compliance rate per participant.
   - Sheet view logs (who opened the sheet and when).
2. **Technical Overlap Matching**: The coordinator reviews all resolved errors in the spreadsheet, groups them by categories (e.g. Firebase, Angular reactivity, Agent file path errors), and calculates:
   $$\text{Overlap Rate} = \frac{\text{Number of Overlapping Roadblocks}}{\text{Total Roadblocks logged}} \times 100\%$$

---

## 📊 Concrete Google Sheet Mockup Example

This is a visual blueprint of the columns and rows configured in the shared Google Sheet:

| Timestamp | Author | Team | Project / Area | The Roadblock (Error / Friction) | The Steer Fix (Prompts / Diff) | 2-Sentence Reflection | Helpful Matches (Who used this?) |
|---|---|---|---|---|---|---|---|
| 2026-08-10 14:15 | Developer A | Team A | Angular Reactivity | **Infinite digest loop**. The agent kept rewriting template click bindings but failed to see circular dependencies in active signals. | I prompted: *"Stop using template bindings to trigger side-effects. Use effect() in the TS component file."* | Agents struggle to track implicit dependencies inside HTML templates. Moving reactivity explicitly to TS files makes the dependency graph visible to the context window. | **Developer C (Aug 11)**, <br>**Developer B (Aug 13)** |
| 2026-08-11 10:20 | Developer B | Team B | Firebase Rules | **Insufficient Permissions Error**. Firestore rules blocked `get()` queries. Agent suggested disabling rules which I rejected. | I prompted: *"Write a security rule for match /docs/{docId} that checks request.auth != null."* | Firestore rules require client-side queries to match rule filters exactly. If rules require auth, you must pass the auth context in the client query or it will auto-reject. | *[Leave blank if no matches yet]* |
