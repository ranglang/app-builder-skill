import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { buildSkillMarkdown } from "./skill/build";

const outPath = resolve(import.meta.dir, "../../skills/app-builder/SKILL.md");
const checkOnly = process.argv.includes("--check");
const built = buildSkillMarkdown();

if (checkOnly) {
    const existing = readFileSync(outPath, "utf8");
    if (existing !== built) {
        console.error(`SKILL.md is out of date. Run: cd deprecated && bun run build`);
        process.exit(1);
    }
    console.log(`OK: ${outPath} matches generated output`);
} else {
    writeFileSync(outPath, built, "utf8");
    console.log(`Wrote ${outPath}`);
}
