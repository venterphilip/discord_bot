import { Client, GatewayIntentBits } from 'discord.js';
import { config } from '../config.js';
import { pingCommand } from '../commands/ping.js';
import { askCommand } from '../commands/ask.js';
import { summarizeCommand } from '../commands/summarize.js';

export const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

export async function startDiscord(): Promise<void> {
  client.once('clientReady', (readyClient) => {
    console.log(`✅ Logged in as ${readyClient.user.tag}`);
  });

  client.on('interactionCreate', async (interaction) => {
    if (!interaction.isChatInputCommand()) {
      return;
    }

    switch (interaction.commandName) {
      case 'ping':
        await pingCommand(interaction);
        break;
      case 'ask':
       await askCommand(interaction);
       break;
      case "summarize":
       await summarizeCommand(interaction);
       break;
      default:
        await interaction.reply({
          content: 'Unknown command.',
          ephemeral: true,
        });
    }
  });

  await client.login(config.DISCORD_TOKEN);
}