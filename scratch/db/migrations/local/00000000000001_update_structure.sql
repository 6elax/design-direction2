DROP TABLE IF EXISTS learnings;

CREATE TABLE IF NOT EXISTS learnings (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  project_uuid TEXT NOT NULL,
  type TEXT NOT NULL,
  skill TEXT,
  section TEXT,
  key TEXT NOT NULL,
  insight TEXT NOT NULL,
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
