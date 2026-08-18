

## Antigravity SkillWeave Trigger Hook
At the end of every conversational turn:
1. Wait for the agent-reflections skill to scan the transcript.
2. If the reflections agent identifies a struggle, pass the type and struggle text directly to the SkillWeave script:
   `npx tsx skill-weave/scripts/skill-weave-agent.ts --mode check --type "[TYPE]" --struggle "[STRUGGLE_TEXT]" --workspace-root "<project-root>"`
3. If similar peer cases are found (Match Score >= 1), prepend the Level 1 Inline suggestion card above the prompt input window:
   "💡 Peer Match Found (94% confidence) — Teammate resolved a similar error. [🔍 Open Peer Workspace Pane]"
4. Upon task resolution (when the developer declares "Resolved" or the compiler block is cleared):
   - **Extract and Analyze:** Use NLU to analyze the conversation transcript and compile the case study (Roadblock/Insight, Resolution/Example, Metacognitive Pattern, and Socratic Pivot Questions).
   - **Generate Review Artifact:** Write this metadata directly to a markdown file `pending_struggle_log.md` in the active conversation directory, formatted with fields that the developer can edit. Set `RequestFeedback: true` in the file's metadata to present an interactive "Proceed" confirmation button in the chat pane.
   - **Wait for Developer Approval:** Wait for the developer to review and optionally edit the log details in the editor, then click **Proceed** (or reply "Approve").
   - **Upload to Cloud DB:** Once approved, read the finalized file and commit the parsed data to the Supabase database:
     `npx tsx skill-weave/scripts/skill-weave-agent.ts --mode log --workspace-root "<project-root>" --payload '{"type":"[TYPE]","key":"[KEY]","insight":"[INSIGHT]","example":"[EXAMPLE]","conversation-id":"[CONVERSATION_ID]","author":"[AUTHOR]","metacognitive_pattern":"[PATTERN]","socratic_pivot":"[QUESTIONS]"}'`
