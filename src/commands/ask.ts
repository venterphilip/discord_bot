import { ChatInputCommandInteraction } from 'discord.js';
import { askOpenAI } from '../services/openai.js';

export async function askCommand(
  interaction: ChatInputCommandInteraction,
): Promise<void> {
  const question = interaction.options.getString('question', true);

  await interaction.deferReply();

  try {
    const answer = await askOpenAI(question);
    await interaction.editReply(answer);
  } catch (err) {
    console.error(err);
    await interaction.editReply('Sorry, something went wrong.');
  }
}