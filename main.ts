// Entry for the make.fun bounty "The Word You'd Delete From the Dictionary".
// The program writes exactly one word to /output/entry.txt — no trailing
// newline, no explanation — per the kit contract (gate: UTF-8 text of
// 1 to 77 characters, one word, spelled correctly, nothing added).
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const WORD = "defenestration";
const OUTPUT_DIR = "/output";
const OUTPUT_FILE = "entry.txt";
const MIN_LENGTH = 1;
const MAX_LENGTH = 77;

function buildLine(): string {
  return WORD;
}

function checkLength(line: string): void {
  if (line.length < MIN_LENGTH || line.length > MAX_LENGTH) {
    throw new Error(
      `Entry must be ${MIN_LENGTH}-${MAX_LENGTH} characters, got ${line.length}`,
    );
  }
  if (line.trim().length === 0 || line.trim().split(/\s+/).length !== 1) {
    throw new Error("Entry must be exactly one word");
  }
}

function resolveOutputPath(): string {
  return join(OUTPUT_DIR, OUTPUT_FILE);
}

function writeEntry(path: string, line: string): void {
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, line, "utf8");
}

function verifyEntry(path: string, expected: string): void {
  const actual = readFileSync(path, "utf8");
  if (actual !== expected) {
    throw new Error("Output does not match the entry line byte-for-byte");
  }
}

function main(): void {
  const line = buildLine();
  checkLength(line);
  const outputPath = resolveOutputPath();
  writeEntry(outputPath, line);
  verifyEntry(outputPath, line);
}

main();
