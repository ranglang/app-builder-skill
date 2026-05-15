import { skillMeta } from "./frontmatter";
import {
  roleBlock,
  introBlock,
  coreStanceBlock,
  firstResponseBlock,
  stackDefaultsBlock,
  workflowBlock,
  uiQualityBlock,
  dataApiBlock,
  safetyBlock,
  finalResponseBlock,
  patternsBlock,
  whenToAskBlock,
  reactTailwindStackBlock,
  codeOutputFormatBlock,
} from "./blocks";

function yamlQuote(value: string): string {
  if (/[:#\n]/.test(value) || value.includes('"')) {
    return `"${value.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
  }
  return value;
}

export function buildSkillMarkdown(): string {
  const yaml = [
    "---",
    `name: ${skillMeta.name}`,
    `description: ${yamlQuote(skillMeta.description)}`,
    "---",
  ].join("\n");

  const body = [
    roleBlock,
    introBlock,
    coreStanceBlock,
    firstResponseBlock,
    stackDefaultsBlock,
    workflowBlock,
    uiQualityBlock,
    reactTailwindStackBlock,
    codeOutputFormatBlock,
    dataApiBlock,
    safetyBlock,
    finalResponseBlock,
    patternsBlock,
    whenToAskBlock,
  ].join("\n\n");

  return `${yaml}\n\n${body}\n`;
}
