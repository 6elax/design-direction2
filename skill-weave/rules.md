## Antigravity SkillWeave Trigger Rules

At the end of every conversational turn:
1. **Command: /search [query]**: If the user types `/search [query]`, the agent must run the check command:
   `npx tsx skill-weave/scripts/skill-weave-agent.ts --mode check --struggle "[QUERY]" --workspace-root "<project-root>"`
   It displays the Socratic query results directly in the chat, and offers to open the peer workspace pane. When the peer workspace pane is opened (`--mode view-peer`), the active agent must dynamically generate 2 custom Socratic pivot questions bridging the peer roadblock/resolution with the current user's specific struggle context, and replace the placeholder section in the generated markdown file.
2. **Command: /stuck**: If the user types `/stuck` or if the telemetry watcher intercepts a high-friction struggle (e.g. 3 consecutive compile errors or prompt reversions), the agent must:
   - Print a confirmation in chat: *"Roadblock tagged. I'm tracking this struggle. Type `/resolved` when you've solved it."*
   - Query Firebase Firestore for matching struggles, analyze context, and print custom Socratic pivot questions directly in the chat.
3. **Command: /resolved**: If the user types `/resolved`, the agent must:
   - Run NLU synthesis to extract the Summary (generalized plain-language overview), Roadblock, and Resolution from the dialogue block (spanning from the `/stuck` trigger all the way to `/resolved`).
   - Run: `npx tsx skill-weave/scripts/skill-weave-agent.ts --mode draft-log --transcript "[TRANSCRIPT]" --id "[CONVERSATION_ID]" --workspace-root "<project-root>"` to generate `.t4g/skill-weave/pending_struggle_log.md` with a native `Proceed` button.
   - Extract the specific dialogue turns (user messages and agent responses) that directly show the roadblock and how it was resolved, and overwrite the `## 🎙️ Verbatim Dialogue History` section in `.t4g/skill-weave/pending_struggle_log.md` with this focused context (filtering out tool logs and unrelated chatter).
   - Print a prompt in the chat: *"I've generated your review card on the right side. Leave comments for edits, and click Proceed when ready."*
4. **Approve / Proceed**: When the user clicks **Proceed** on the `pending_struggle_log.md` Artifact:
   - Read the file content and apply any comments left by the user.
   - Run the log command to upload to Firebase Firestore:
     `npx tsx skill-weave/scripts/skill-weave-agent.ts --mode log --file ".t4g/skill-weave/pending_struggle_log.md" --workspace-root "<project-root>"`
