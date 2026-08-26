# SkillWeave Integration & Setup Guide

This guide explains how to install, configure, and register the **SkillWeave background agent skill** in your repository or chat workspace.

SkillWeave runs as a background chat skill agent (integrated with the `agent-reflections` skill) that scans your conversation history for struggles, matches them against a team database (Firebase Firestore), and returns Socratic guideposts.

---

## 📋 Prerequisites
- **Node.js:** Version `v22.5.0` or higher.
- **Workspace Tooling:** Bun or TSX (`npx tsx`) to run TypeScript scripts in the environment.

---

## 🛠️ Step-by-Step Installation

### Step 1: Clone or Copy Skill Assets
Ensure the following files are copied into your repository's configuration directory:
1.  **Skill Description:** Place `SKILL.md` in your workspace `skill-weave/` directory.
2.  **Runner Controller:** Place the runner script at `skill-weave/scripts/skill-weave-agent.ts`.

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

## Antigravity SkillWeave Trigger Rules

### 🔒 Chat Logging & Privacy Policy
To respect builder privacy, general conversation history is tracked strictly **offline/locally** inside the user's local config folder to run the telemetry watches. No chat logs are ever uploaded to the cloud database in real-time. Only when the builder types `/resolved` and clicks the **Proceed** button on their review card is the specific, verified struggle dialogue segment (and matching index boundaries) uploaded to the shared cohort database.

At the end of every conversational turn:
1. **Command: /search [query]**: If the user types `/search [query]`, the agent must run the check command:
   `npx tsx ~/.gemini/config/plugins/agent-learning/skills/skillweave/scripts/skill-weave-agent.ts --mode check --struggle "[QUERY]" --workspace-root "<project-root>"`
   It displays the Socratic query results directly in the chat, and offers to open the peer workspace pane. When the peer workspace pane is opened (`--mode view-peer`), the active agent must dynamically generate 2 custom Socratic pivot questions bridging the peer roadblock/resolution with the current user's specific struggle context, and replace the placeholder section in the generated markdown file.
2. **Command: /stuck**: If the user types `/stuck` or if the telemetry watcher intercepts a high-friction struggle (e.g. 3 consecutive compile errors or prompt reversions), the agent must:
   - Run the validation check: `npx tsx ~/.gemini/config/plugins/agent-learning/skills/skillweave/scripts/skill-weave-agent.ts --mode validate-stuck --transcript "[TRANSCRIPT]" --workspace-root "<project-root>"`
   - If the check returns code `1` (blocked) and the command had no description arguments:
     - Print the pushback message: *"I don't notice any compilation errors or struggle patterns in our recent dialogue. If you are stuck on a conceptual design or planning task, please type `/stuck [brief description of your roadblock]` to tag this struggle."*
   - If the check passes (exits code `0`) or the user provided a description argument (e.g. `/stuck [description]`):
     - Print the confirmation: *"Roadblock tagged. I'm tracking this struggle. Type `/resolved` when you've solved it."*
     - Query Firebase Firestore for matching struggles, analyze context, and print custom Socratic pivot questions directly in the chat.
3. **Command: /resolved**: If the user types `/resolved`, the agent must:
   - Check if the struggle block (from `/stuck` to `/resolved`) contains less than 2 exchanges (e.g., less than 2 User inputs and 2 Agent responses).
   - If the block is trivial (less than 2 exchanges):
     - Print the warning: *"It looks like we only had a short exchange since you tagged this struggle. To ensure database quality, struggles can only be logged if a conceptual roadblock was solved. If you want to discard this struggle, you can type `/cancel` or ignore this card."*
   - If the block is valid (at least 2 exchanges):
     - Trigger the `/save-chat-transcript` utility skill to extract the offline conversation logs.
     - Run NLU synthesis to extract the Summary (generalized plain-language overview), Roadblock, and Resolution from the local transcript buffer.
     - Run: `npx tsx ~/.gemini/config/plugins/agent-learning/skills/skillweave/scripts/skill-weave-agent.ts --mode draft-log --transcript "[TRANSCRIPT]" --id "[CONVERSATION_ID]" --workspace-root "<project-root>"` to generate `.t4g/skill-weave/pending_struggle_log.md`.
     - Extract the specific dialogue turns (user messages and agent responses) that directly show the roadblock and how it was resolved, and overwrite the `## 🎙️ Verbatim Dialogue History` section in `.t4g/skill-weave/pending_struggle_log.md` with this focused context.
     - Write the finalized contents of the drafted log directly to the conversation's active artifact directory under the filename `pending_struggle_log.md` using the `write_to_file` tool with `RequestFeedback: true` set in the `ArtifactMetadata`.
     - Print a prompt in the chat: *"I've generated your review card on the right side. Leave comments for edits, and click Proceed when ready."*
4. **Approve / Proceed**: When the user clicks **Proceed** on the `pending_struggle_log.md` Artifact:
   - Read the file content and apply any comments left by the user.
   - Run the log command to upload to Firebase Firestore:
     `npx tsx ~/.gemini/config/plugins/agent-learning/skills/skillweave/scripts/skill-weave-agent.ts --mode log --file ".t4g/skill-weave/pending_struggle_log.md" --workspace-root "<project-root>"`

## Telemetry Watcher Activation Hooks

In addition to manual commands, the background telemetry watchers automatically listen to the conversation and workspace states to trigger helpful suggestions. They must activate in the following scenarios:

1. **Technical Friction Watcher**: Triggers if there are 3 consecutive compiler/test errors in the environment, or 2 consecutive prompt reversions.
   - Prompt: *"💡 I notice some repetitive compilation errors in your workspace. If you are blocked on this task, type `/stuck` to query the cohort database or flag this roadblock."*
2. **Semantic Frustration / Repetition Watcher**: Triggers if the user's message contains repeated friction indicators (e.g., "keeps doing X", "not working", "same problem") or if the same URL/task/symbol is re-attempted unsuccessfully across 2 turns.
   - Prompt: *"It looks like we're hitting repeated friction trying to [describe task/error, e.g., route to /onboarding?step=3]. Would you like to tag this struggle with `/stuck` to check how peers solved this?"*

---

## 📊 Shared Struggles Firestore Database Schema

When a struggle log is committed to Firebase Firestore under the `struggles` collection, it contains the following exact fields:

*   **`author`**: Teammate's name (String, e.g. `"Alexis"`).
*   **`conversation_id`**: Parent chat conversation UUID (String).
*   **`created_at`**: Local PST/PDT offset ISO timestamp (String, e.g. `"2026-08-25T12:19:04.687-07:00"`).
*   **`end_message_index`**: Slice ending position of the struggle block in the parent chat history (Double).
*   **`key`**: Unique document slugified key (String, e.g. `"alexis-theory-disconnect"`).
*   **`phase_index`**: Active phase index containing the conversation in the parent chat history (Double).
*   **`project_uuid`**: Shared cohort group UUID (String).
*   **`roadblock`**: Plain English description of the bottleneck encountered (String).
*   **`resolution`**: Details on how the roadblock was resolved (String).
*   **`start_message_index`**: Slice starting position of the struggle block in the parent chat history (Double).
*   **`summary`**: A generalized overview of the roadblock/resolution ending with exactly 1 Socratic question (String).
*   **`type`**: Struggle category, one of `SCOPING`, `DESIGN-FRICTION`, `THEORETICAL`, `TECHNICAL`, `HALLUCINATION`, `METACOGNITIVE`, `VALIDATION`, `ERROR-CODE`, `FRUSTRATION` (String).
*   **`dialogue_history`**: Focused verbatim chat transcript segment of user plain text and agent blockquotes (String).
