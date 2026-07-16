import 'dotenv/config';
import { z } from 'zod';

const env = z.object({
  DISCORD_TOKEN: z.string().min(1),
  DISCORD_CLIENT_ID: z.string().min(1),
  DISCORD_GUILD_ID: z.string().min(1),
  OPENAI_API_KEY: z.string().min(1),
});

export const config = env.parse(process.env);