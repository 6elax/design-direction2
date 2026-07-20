import { readFileSync, writeFileSync } from "fs";

const transcriptPath = "/Users/alexisluo/.gemini/antigravity/brain/6064755a-78dd-46fb-9b36-c642feccda54/.system_generated/logs/transcript_full.jsonl";
const targetSteps = [412, 444, 540, 753, 759];

const fileContent = readFileSync(transcriptPath, "utf-8");
const lines = fileContent.split("\n");

for (const line of lines) {
  if (!line.trim()) continue;
  try {
    const entry = JSON.parse(line);
    if (targetSteps.includes(entry.step_index)) {
      const outputPath = `/Users/alexisluo/tech4good/design-dir-2/step-${entry.step_index}.txt`;
      writeFileSync(outputPath, entry.content, "utf-8");
      console.log(`Wrote step ${entry.step_index} to ${outputPath}`);
    }
  } catch (e) {
    // Ignore parse errors
  }
}
