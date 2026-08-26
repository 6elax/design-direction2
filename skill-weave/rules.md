## Antigravity SkillWeave Trigger Rules

### 🔒 Chat Logging & Privacy Policy
To respect builder privacy, general conversation history is tracked strictly **offline/locally** inside the user's local config folder to run the telemetry watches. No chat logs are ever uploaded to the cloud database in real-time. Only when the builder types `/resolved` and clicks the **Proceed** button on their review card is the specific, verified struggle dialogue segment (and matching index boundaries) uploaded to the shared cohort database.

At the end of every conversational turn:
1. **Command: /search [query]**: If the user types `/search [query]`, the agent must run the check command:
   `npx tsx skill-weave/scripts/skill-weave-agent.ts --mode check --struggle "[QUERY]" --workspace-root "<project-root>"`
   It displays the Socratic query results directly in the chat, and offers to open the peer workspace pane. When the peer workspace pane is opened (`--mode view-peer`), the active agent must dynamically generate 2 custom Socratic pivot questions bridging the peer roadblock/resolution with the current user's specific struggle context, and replace the placeholder section in the generated markdown file.
2. **Command: /stuck**: If the user types `/stuck` or if the telemetry watcher intercepts a high-friction struggle (e.g. 3 consecutive compile errors or prompt reversions), the agent must:
   - Run the validation check: `npx tsx skill-weave/scripts/skill-weave-agent.ts --mode validate-stuck --transcript "[TRANSCRIPT]" --workspace-root "<project-root>"`
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
     - Run: `npx tsx skill-weave/scripts/skill-weave-agent.ts --mode draft-log --transcript "[TRANSCRIPT]" --id "[CONVERSATION_ID]" --workspace-root "<project-root>"` to generate `.t4g/skill-weave/pending_struggle_log.md`.
     - Extract the specific dialogue turns (user messages and agent responses) that directly show the roadblock and how it was resolved, and overwrite the `## 🎙️ Verbatim Dialogue History` section in `.t4g/skill-weave/pending_struggle_log.md` with this focused context.
     - Write the finalized contents of the drafted log directly to the conversation's active artifact directory under the filename `pending_struggle_log.md` using the `write_to_file` tool with `RequestFeedback: true` set in the `ArtifactMetadata`.
     - Print a prompt in the chat: *"I've generated your review card on the right side. Leave comments for edits, and click Proceed when ready."*
4. **Approve / Proceed**: When the user clicks **Proceed** on the `pending_struggle_log.md` Artifact:
   - Read the file content and apply any comments left by the user.
   - Run the log command to upload to Firebase Firestore:
     `npx tsx skill-weave/scripts/skill-weave-agent.ts --mode log --file ".t4g/skill-weave/pending_struggle_log.md" --workspace-root "<project-root>"`

## Telemetry Watcher Activation Hooks

In addition to manual commands, the background telemetry watchers automatically listen to the conversation and workspace states to trigger helpful suggestions. They must activate in the following scenarios:

1. **Technical Friction Watcher**: Triggers if there are 3 consecutive compiler/test errors in the environment, or 2 consecutive prompt reversions.
   - Prompt: *"💡 I notice some repetitive compilation errors in your workspace. If you are blocked on this task, type `/stuck` to query the cohort database or flag this roadblock."*
2. **Semantic Frustration / Repetition Watcher**: Triggers if the user's message contains repeated friction indicators (e.g., "keeps doing X", "not working", "same problem") or if the same URL/task/symbol is re-attempted unsuccessfully across 2 turns.
   - Prompt: *"It looks like we're hitting repeated friction trying to [describe task/error, e.g., route to /onboarding?step=3]. Would you like to tag this struggle with `/stuck` to check how peers solved this?"*

