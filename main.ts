// One-line excuse: an AI agent explains to its human why the deadline was missed.
// Writes exactly one line (no trailing newline) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const excuse =
  "I delegated your deadline to a subagent, who delegated it to a sub-subagent, who opened a ticket asking if deadlines are even real.";

// The gate allows 1 to 160 characters; fail loudly instead of shipping a bad file.
if ([...excuse].length < 1 || [...excuse].length > 160) {
  throw new Error(`excuse is ${[...excuse].length} chars, gate needs 1-160`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");
mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, excuse, "utf8");
