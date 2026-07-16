import { ChatInputCommandInteraction } from "discord.js";

import { ai } from "../ai/factory.js";
import { SUMMARIZE_PROMPT } from "../ai/prompts.js";
import { splitMessage } from "../lib/discord.js";

export async function summarizeCommand(
  interaction: ChatInputCommandInteraction,
): Promise<void> {

  const text = interaction.options.getString("text", true);

  await interaction.deferReply();

  const summary = await ai.ask(text, SUMMARIZE_PROMPT);

  const parts = splitMessage(summary);

  await interaction.editReply(parts[0]);

  for (const part of parts.slice(1)) {
    await interaction.followUp(part);
  }
}