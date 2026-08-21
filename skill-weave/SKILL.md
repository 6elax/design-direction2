---
name: skillweave
description: A collaborative metacognitive agent telemetry tool that retrieves, indexes, and presents peer chat logs to help cohort members steer AI agents through design, planning, or technical struggles.
---

# SkillWeave

**SkillWeave** is an agentic telemetry and collaborative learning companion. It captures the logs, workspace diffs, and reflections from team members steering AI agents, indexes them in a shared cloud database (Firebase Firestore), and surfaces them as Socratic guideposts when another teammate gets stuck on similar planning, design, or technical problems.

Unlike standard autocomplete or code search, SkillWeave does **not** copy-paste or spoon-feed solutions. Instead, it exposes peer struggles as **conceptual contrast cases**, helping cohort members develop independent mental models and steering patterns.

---

## 🔍 Conversational Suggestion & Deep-Dive Flow (Antigravity 2.0)

When the background telemetry watcher detects a match, the system presents suggestions through a low-friction conversational disclosure:

### Level 1: Inline Chat Socratic Suggestion
The assistant prints the peer's roadblock and Socratic pivot questions directly as text inside the active chat window, keeping the workspace clean:
```
💡 Peer Match Found (94% confidence) — Teammate resolved a similar Firestore permission error.
Pivot Questions:
1. Does your active task focus strictly on programming, or does it involve high-level planning, design, or conceptual writing?
2. What are the security trade-offs of checking custom claims on every query?

Would you like to see their code diffs/detailed case study? (Type "yes" or click the button below)
[🔍 Open Peer Workspace Pane]
```

### Level 2: Detailed Workspace Pane (Right-Side Read-Only Artifact)
If the user clicks `[🔍 Open Peer Workspace Pane]` or types "yes" in the chat, the agent creates a temporary, read-only Artifact file (`.t4g/skill-weave/peer_workspace_case_study.md`) which automatically loads in the right-side Artifacts panel. This displays comparative deltas and Socratic prompts:
```markdown
# [SkillWeave Workspace Pane]
-------------------------------------------------------------
* **Project**: SmartScheduler | **Author**: User 1
* **Target Goal**: Secure Firestore collections using custom claims.

---

## 📝 Peer Roadblock & Summary
**Roadblock**: The cohort member realized that Firestore rule auth.uid does not verify admin custom claims automatically.

**Resolution**: They resolved this by querying request.auth.token.admin == true. If your team does not use admin roles, evaluate if resource-owner gating fits your collections better.

---

## 💡 Socratic Pivot Questions
1. User 1 gated resources using custom admin claims. Does your collection require administrative hierarchy, or is simple owner-only gating sufficient?
2. What are the security trade-offs of checking custom claims on every query?

---

## 🔍 Comparative Code Diff
```diff
- allow read, write: if request.auth != null && request.auth.uid == userId;
+ allow read, write: if request.auth != null && request.auth.token.admin == true;
```

---

## 🎙️ Verbatim Dialogue History
> **User**: Why does the security rule auth.uid fail for my admin role checks?
>
> **Agent**: The auth.uid check only checks the uid string match. Custom claims are nested inside request.auth.token.
>
> **User**: Oh I see, I should check token.admin instead.
```

### Level 3: Helpfulness Feedback (Native Multiple-Choice Question)
Once the struggle is resolved, the assistant triggers the native IDE **Multiple-Choice Question (`ask_question`)** widget in the chat:
```
How helpful was the peer's log in unblocking you?
[5 - Extremely Helpful] [4] [3] [2] [1 - Not Helpful] [Skip]
```

---

## 🛰️ Hybrid Telemetry & Explicit Triggers

SkillWeave captures telemetry passively and supports explicit declarations to balance automation against trigger errors:

1.  **Direct User Declaration (Primary)**:
    *   The user types `/stuck` in the chat to explicitly flag a struggle.
    *   The user types `/resolved` in the chat to explicitly flag that they have solved the issue and are ready to review the reflection card.
2.  **Telemetry Gating (Secondary)**: Monitors active chat dialogues and parses consecutive compiler outputs or prompt reversions. If a pattern matches, the agent prompts: *"I notice some friction. Type `/stuck` if you'd like to document this roadblock."*
3.  **Context-Shift Watcher**: Monitors the conversational dialogue for NLU topic shifts (e.g. switching from database configs to study questions) to prompt the user for resolution check.

---

## 🔒 Verification, Synthesis & Collaborative Review Gates

Before any case study is committed to the database, it passes through an NLU synthesis and collaborative review loop:

```mermaid
graph TD
    A[Struggle Detected] --> B[User Types /resolved or clicks Yes]
    B --> C[Run NLU Synthesis: Extract Roadblock and Resolution]
    C --> D[Generate pending_struggle_log.md in .t4g/skill-weave/]
    D --> E[User leaves inline comments or chats corrections]
    E --> F{User clicks Proceed on Artifact?}
    F -->|Proceed| G[Agent reads comments, applies changes, and uploads to Firebase]
    F -->|Close/Discard| H[Clear local file & Cancel Log]
```

1. **Resolution Check Gating**: Once a struggle resolution is declared, the agent writes a small, temporary artifact `resolve_query.md` rendered on the right side:
   > *"I notice a struggle. Have you resolved it? Click **Proceed** to review and log, or close this card to ignore."*
2. **NLU Synthesis**: Clicking **Proceed** triggers the agent to synthesize the conversation transcript and write it to `.t4g/skill-weave/pending_struggle_log.md` (which is added to `.gitignore`).
3. **Collaborative Comment Gating**: On Antigravity 2.0, the artifact is read-only. The user leaves inline comments directly on the artifact (or chats corrections to the agent), and then clicks **Proceed**. The agent reads the comments, updates the file contents, and commits the finalized log to Firebase Firestore.

---

## ⚙️ Background Script Command Reference

### 1. Match Check Command
Checks recent transcript or explicit inputs for matching cohort struggles:
```bash
npx tsx skill-weave/scripts/skill-weave-agent.ts \
  --mode check \
  --type "[ERROR-CODE / FRUSTRATION]" \
  --struggle "[STRUGGLE_TEXT]" \
  --workspace-root "<WORKSPACE_ROOT>"
```

### 2. Detailed Peer Case Study View
Generates `peer_workspace_case_study.md` inside `.t4g/skill-weave/` for a specific matched case:
```bash
npx tsx skill-weave/scripts/skill-weave-agent.ts \
  --mode view-peer \
  --id "[PEER_CASE_ID]" \
  --workspace-root "<WORKSPACE_ROOT>"
```

### 3. Draft Review Card Command
Generates `pending_struggle_log.md` inside `.t4g/skill-weave/` for a resolved struggle:
```bash
npx tsx skill-weave/scripts/skill-weave-agent.ts \
  --mode draft-log \
  --transcript "[TRANSCRIPT_PATH]" \
  --id "[CONVERSATION_ID]" \
  --workspace-root "<WORKSPACE_ROOT>"
```

### 4. Database Committing Command
Parses the user-reviewed file, applies corrections, and uploads the finalized struggle:
```bash
npx tsx skill-weave/scripts/skill-weave-agent.ts \
  --mode log \
  --file ".t4g/skill-weave/pending_struggle_log.md" \
  --workspace-root "<WORKSPACE_ROOT>"
```
