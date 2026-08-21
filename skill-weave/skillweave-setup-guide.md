# SkillWeave Integration & Setup Guide

This guide explains how to install, configure, and register the **SkillWeave background agent skill** in your repository or chat workspace.

SkillWeave runs as a background chat skill agent (similar to the `agent-reflections` skill) that scans your conversation history for struggles, matches them against a team database, and returns Socratic guideposts.

---

## 📋 Prerequisites
- **Node.js:** Version `v22.5.0` or higher.
- **Workspace Tooling:** Bun or TSX (`npx tsx`) to run TypeScript scripts in the environment.

---

## 🛠️ Step-by-Step Installation

### Step 1: Clone or Copy Skill Assets
Ensure the following files are copied into your repository's configuration directory:
1.  **Skill Description:** Place [SKILL.md](file:///Users/alexisluo/tech4good/design-dir-2/skill-weave/SKILL.md) in your workspace `skill-weave/` directory.
2.  **Runner Controller:** Place the runner script at [skill-weave/scripts/skill-weave-agent.ts](file:///Users/alexisluo/tech4good/design-dir-2/skill-weave/scripts/skill-weave-agent.ts).

---

### Step 2: Configure Shared Firebase Credentials
To set up access to the shared cohort database (so all team members log to and query from the same database):
1. Obtain the shared database credentials from your team coordinator or administrator.
2. Add these variables to your local `.env` file at the root of your workspace:
   ```env
   FIREBASE_PROJECT_ID="your-cohort-firebase-project-id"
   PROJECT_UUID="your-cohort-group-uuid"
   ```
3. The `skill-weave-agent.ts` script automatically loads these credentials to connect all cohort members to the same central database.

---

### Step 3: Seed the Cloud Database with Peer Cases (Optional)
To pre-populate the cloud database with the baseline peer struggle analysis dataset (e.g. from Causeway and AlignDraft):
1.  Verify the seed script is in `skill-weave/scripts/feed-database.ts`.
2.  Run the seed script:
     ```bash
     npx tsx skill-weave/scripts/feed-database.ts
     ```

---

### Step 4: Hook the Skill into Chat Agent Rules
To make the AI agent run SkillWeave automatically behind the scenes of every chat turn, hook it into your project's agent rules file (e.g. `.cursorrules`, `.gemini/rules.md`, or your workspace `rules.md`):

```markdown
## Antigravity SkillWeave Trigger Rules

At the end of every conversational turn:
1. **Command: /search [query]**: If the user types `/search [query]`, the agent must run the check command:
   `npx tsx skill-weave/scripts/skill-weave-agent.ts --mode check --struggle "[QUERY]" --workspace-root "<project-root>"`
   It displays the Socratic query results directly in the chat, and offers to open the peer workspace pane.
2. **Command: /stuck**: If the user types `/stuck` or if the telemetry watcher intercepts a high-friction struggle (e.g. 3 consecutive compile errors or prompt reversions), the agent must:
   - Print a confirmation in chat: *"Roadblock tagged. I'm tracking this struggle. Type `/resolved` when you've solved it."*
   - Query Firebase Firestore for matching struggles, analyze context, and print custom Socratic pivot questions directly in the chat.
3. **Command: /resolved**: If the user types `/resolved`, the agent must:
   - Run NLU synthesis to extract the Roadblock and Resolution from the dialogue block (spanning from the `/stuck` trigger all the way to `/resolved`).
   - Run: `npx tsx skill-weave/scripts/skill-weave-agent.ts --mode draft-log --transcript "[TRANSCRIPT]" --id "[CONVERSATION_ID]" --workspace-root "<project-root>"` to generate `.t4g/skill-weave/pending_struggle_log.md` with a native `Proceed` button.
   - Print a prompt in the chat: *"I've generated your review card on the right side. Leave comments for edits, and click Proceed when ready."*
4. **Approve / Proceed**: When the user clicks **Proceed** on the `pending_struggle_log.md` Artifact:
   - Read the file content and apply any comments left by the user.
   - Run the log command to upload to Firebase Firestore:
     `npx tsx skill-weave/scripts/skill-weave-agent.ts --mode log --file ".t4g/skill-weave/pending_struggle_log.md" --workspace-root "<project-root>"`
```

---

## 🎙️ Conversational Commands Guide

As a builder or cohort member, you can use the following commands in the chat window to control SkillWeave:

*   **`/stuck`**: Tells the agent that you have encountered a struggle. This explicitly tags the start of your struggle dialogue block. The agent will check the database and print matching peer pivot questions in your chat.
*   **`/resolved`**: Tells the agent that you have successfully resolved the struggle. This marks the end of your struggle block. The agent will run NLU synthesis on the conversation (from `/stuck` to `/resolved`), write a review card (`pending_struggle_log.md`) in the Artifacts tab, and allow you to leave comments before clicking **Proceed** to commit it to the shared database.
*   **`/search <query>`**: Searches the shared database of cohort learnings for any keywords (e.g. `/search firestore`) and displays matching Socratic guides and questions directly in the chat.

---

## 🧪 Verifying the Setup

### Test 1: Check Mode (Struggle Detection)
Ensure the matching engine successfully retrieves database matches when triggered with direct inputs from the reflections agent:
```bash
npx tsx skill-weave/scripts/skill-weave-agent.ts \
  --mode check \
  --type "TECHNICAL" \
  --struggle "My database keeps timing out" \
  --workspace-root "./"
```
*Expected Output:*
- Displays the received error details.
- Prints the top similar case studies from the database with matching Socratic pivot questions.

### Test 2: View Peer Pane (Right-Side Pane Generation)
Generate a peer workspace case study pane using a specific database ID:
```bash
npx tsx skill-weave/scripts/skill-weave-agent.ts \
  --mode view-peer \
  --id "1" \
  --workspace-root "./"
```
*Expected Output:*
- Generates `.t4g/skill-weave/peer_workspace_case_study.md` showing roadblock/resolution paragraphs and verbatim dialogue history.

### Test 3: Draft Review Card (Synthesis and Logging)
Simulate task resolution by generating a draft review card from your conversation log:
```bash
npx tsx skill-weave/scripts/skill-weave-agent.ts \
  --mode draft-log \
  --transcript ".gemini/antigravity/brain/your-session-id/.system_generated/logs/transcript.jsonl" \
  --id "your-session-id" \
  --workspace-root "./"
```
*Expected Output:*
- Generates `.t4g/skill-weave/pending_struggle_log.md` with Roadblock/Resolution headers, separated conversation lines, and Proceed instructions.
