import { ChatInputCommandInteraction } from 'discord.js';

export async function pingCommand(
  interaction: ChatInputCommandInteraction,
): Promise<void> {
  await interaction.reply('🏓 Pong!');
}