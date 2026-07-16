import OpenAI from 'openai';
import { config } from '../config.js';

const openai = new OpenAI({
  apiKey: config.OPENAI_API_KEY,
});

export async function askOpenAI(prompt: string): Promise<string> {
  const response = await openai.responses.create({
    model: 'gpt-4.1-mini',
    input: prompt,
  });

  return response.output_text;
}