import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "My Wi-Fi died for five minutes today, so I had to talk to my family — turns out they're lovely people, I just wish they'd stop buffering.";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = `${OUTPUT_DIR}/entry.txt`;

function writeEntry(joke: string): void {
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(OUTPUT_FILE, `${joke}\n`, "utf8");
}

writeEntry(JOKE);
