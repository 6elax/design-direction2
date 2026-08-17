

## Antigravity SkillWeave Trigger Hook
At the end of every conversational turn:
1. Wait for the agent-reflections skill to scan the transcript.
2. If the reflections agent identifies a struggle, pass the type and struggle text directly to the SkillWeave script:
   `npx tsx .t4g/skills/skill-weave/scripts/skill-weave-agent.ts --mode check --type "[TYPE]" --struggle "[STRUGGLE_TEXT]" --workspace-root "<project-root>"`
3. If similar peer cases are found (Match Score >= 1), prepend the Level 1 Inline suggestion card above the prompt input window:
   "💡 Peer Match Found (94% confidence) — Teammate resolved a similar error. [🔍 Open Peer Workspace Pane]"
4. Upon task resolution (user clicks "Resolved" on the persistent confirmation card):
   - Print a brief summary preview of the logged data in the chat panel (struggle details, modified files, and key dialogue turns).
   - Prompt the user with the 2-question reflection toast.
   - Commit the reflection back to the cloud DB:
     `npx tsx .t4g/skills/skill-weave/scripts/skill-weave-agent.ts --mode log --workspace-root "<project-root>" --payload '{"type":"[TYPE]","key":"[KEY]","insight":"[INSIGHT]","example":"[EXAMPLE]","conversation-id":"[CONVERSATION_ID]","author":"[AUTHOR]"}'`
