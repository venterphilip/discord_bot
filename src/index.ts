import {
  Client,
  GatewayIntentBits,
} from 'discord.js';

import { config } from './config.js';

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
  ],
});

client.once('ready', () => {
  console.log(`✅ Logged in as ${client.user?.tag}`);
});

client.login(config.DISCORD_TOKEN);