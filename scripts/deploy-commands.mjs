import { REST, Routes, SlashCommandBuilder } from 'discord.js';
import 'dotenv/config';

const commands = [
  new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Replies with Pong!')
    .toJSON(),

  new SlashCommandBuilder()
    .setName('ask')
    .setDescription('Ask ChatGPT a question')
    .addStringOption(option =>
      option
        .setName('question')
        .setDescription('Your question')
        .setRequired(true)
    )
    .toJSON(),
];

const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);

try {
  console.log('Registering slash commands...');

  await rest.put(
    Routes.applicationGuildCommands(
      process.env.DISCORD_CLIENT_ID,
      process.env.DISCORD_GUILD_ID,
    ),
    { body: commands },
  );

  console.log('Slash commands registered.');
} catch (error) {
  console.error(error);
}