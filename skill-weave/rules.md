## Antigravity SkillWeave Trigger Rules

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
     - Run NLU synthesis to extract the Summary (generalized plain-language overview), Roadblock, and Resolution from the dialogue block.
     - Run: `npx tsx skill-weave/scripts/skill-weave-agent.ts --mode draft-log --transcript "[TRANSCRIPT]" --id "[CONVERSATION_ID]" --workspace-root "<project-root>"` to generate `.t4g/skill-weave/pending_struggle_log.md`.
     - Extract the specific dialogue turns (user messages and agent responses) that directly show the roadblock and how it was resolved, and overwrite the `## 🎙️ Verbatim Dialogue History` section in `.t4g/skill-weave/pending_struggle_log.md` with this focused context.
     - Write the finalized contents of the drafted log directly to the conversation's active artifact directory under the filename `pending_struggle_log.md` using the `write_to_file` tool with `RequestFeedback: true` set in the `ArtifactMetadata`.
     - Print a prompt in the chat: *"I've generated your review card on the right side. Leave comments for edits, and click Proceed when ready."*
4. **Approve / Proceed**: When the user clicks **Proceed** on the `pending_struggle_log.md` Artifact:
   - Read the file content and apply any comments left by the user.
   - Run the log command to upload to Firebase Firestore:
     `npx tsx skill-weave/scripts/skill-weave-agent.ts --mode log --file ".t4g/skill-weave/pending_struggle_log.md" --workspace-root "<project-root>"`
