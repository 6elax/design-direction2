CREATE TABLE IF NOT EXISTS project_info (
  uuid TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS learnings (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  project_uuid TEXT NOT NULL,
  task TEXT NOT NULL,
  type TEXT NOT NULL,
  key TEXT NOT NULL,
  insight TEXT NOT NULL,
  importance INTEGER DEFAULT 3,
  source TEXT DEFAULT 'ai-proposed',
  files TEXT DEFAULT '[]',
  branch TEXT,
  conversation_id TEXT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TRIGGER IF NOT EXISTS update_learnings_updated_at 
AFTER UPDATE ON learnings 
FOR EACH ROW 
WHEN NEW.updated_at = OLD.updated_at 
BEGIN 
  UPDATE learnings SET updated_at = CURRENT_TIMESTAMP WHERE id = NEW.id; 
END;
