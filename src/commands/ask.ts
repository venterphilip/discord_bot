import { ChatInputCommandInteraction } from 'discord.js';
import { ai } from "../ai/factory.js";
import { splitMessage } from "../lib/discord.js";

export async function askCommand(
  interaction: ChatInputCommandInteraction,
): Promise<void> {
  const question = interaction.options.getString('question', true);

  await interaction.deferReply();

  try {
    const answer = await ai.ask(question);
    const parts = splitMessage(answer);

    await interaction.editReply(parts[0]);

    for (let i = 1; i < parts.length; i++) {
      await interaction.followUp(parts[i]);
    }
  } catch (err) {
    console.error(err);
    await interaction.editReply('Sorry, something went wrong.');
  }
}