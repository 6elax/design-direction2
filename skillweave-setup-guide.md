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
Ensure the following files are copied into your repository's local configuration directory:
1.  **Skill Description:** Place [SKILL.md](file:///Users/alexisluo/tech4good/design-dir-2/SKILL.md) in your workspace root directory.
2.  **Runner Controller:** Place the runner script at [.t4g/skills/skill-weave/scripts/skill-weave-agent.ts](file:///Users/alexisluo/tech4good/design-dir-2/.t4g/skills/skill-weave/scripts/skill-weave-agent.ts).

---

### Step 2: Configure Supabase Credentials
To set up access to the shared cloud database:
1. Ensure the following environment variables are set in your environment (e.g. in your `.env` file at the workspace root):
   ```env
   SUPABASE_URL="https://your-project-id.supabase.co"
   SUPABASE_KEY="your-anon-or-service-role-key"
   ```
2. The `skill-weave-agent.ts` script automatically loads these credentials to connect to the central DB.

---

### Step 3: Seed the Cloud Database with Peer Cases (Optional)
To pre-populate the cloud database with the baseline peer struggle analysis dataset (e.g. from Causeway and AlignDraft):
1.  Create a temporary script `scripts/feed-database.ts` that inserts your peer learnings.
2.  Run the seed script:
    ```bash
    npx tsx scripts/feed-database.ts
    ```

---

### Step 4: Hook the Skill into Chat Agent Rules
To make the AI agent run SkillWeave automatically behind the scenes of every chat turn, hook it into your project's agent-reflections rules file (e.g. `.cursorrules`, `.gemini/rules.md`, or your workspace `rules.md`):

```markdown
## Antigravity SkillWeave Trigger Hook
At the end of every conversational turn:
1. Wait for the agent-reflections skill to scan the transcript.
2. If the reflections agent identifies a struggle, pass the type and struggle text directly to SkillWeave:
   `npx tsx .t4g/skills/skill-weave/scripts/skill-weave-agent.ts --mode check --type "[ERROR-CODE / FRUSTRATION]" --struggle "[STRUGGLE_TEXT]" --workspace-root "<project-root>"`
3. If similar peer cases are found (Match Score >= 1), prepend the Level 1 Inline suggestion card above the prompt input window:
   "💡 Peer Match Found (94% confidence) — Teammate resolved a similar error. [🔍 Open Peer Workspace Pane]"
4. Upon task resolution (NLU verified or build succeeds):
   - Prompt the user with the 3-question reflection toast.
   - Commit the reflection back to the DB:
     `npx tsx .t4g/skills/skill-weave/scripts/skill-weave-agent.ts --mode log --workspace-root "<project-root>" --payload '{"type":"[TYPE]","key":"[KEY]","insight":"[INSIGHT]","example":"[EXAMPLE]","conversation-id":"[CONVERSATION_ID]"}'`
```

---

## 🧪 Verifying the Setup

### Test 1: Check Mode (Struggle Detection)
Ensure the matching engine successfully retrieves database matches when triggered with direct inputs from the reflections agent:
```bash
npx tsx .t4g/skills/skill-weave/scripts/skill-weave-agent.ts \
  --mode check \
  --type "ERROR-CODE" \
  --struggle "My database keeps hallucinating ChatGPT layouts" \
  --workspace-root "./"
```
*Expected Output:*
- Displays the received error details.
- Prints the top similar case studies from the database with match scores.

### Test 2: Log Mode (Reflection Committing)
Test inserting a new resolved struggle back to the cloud learnings index:
```bash
npx tsx .t4g/skills/skill-weave/scripts/skill-weave-agent.ts \
  --mode log \
  --workspace-root "./" \
  --payload '{"type":"ERROR-CODE","key":"db-connection-timeout","insight":"Novice failed to fetch custom claims due to permission constraints.","example":"Query request.auth.token.admin == true instead of standard uid checks.","conversation-id":"test-session-uuid"}'
```
*Expected Output:*
- `Successfully logged SkillWeave learning: [db-connection-timeout]`
