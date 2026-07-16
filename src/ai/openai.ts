import OpenAI from "openai";
import { config } from "../config.js";
import type { AIProvider } from "./provider.js";

const client = new OpenAI({
  apiKey: config.OPENAI_API_KEY,
});

export class OpenAIProvider implements AIProvider {
  async ask(prompt: string): Promise<string> {
    const response = await client.responses.create({
      model: "gpt-4.1-mini",
      input: prompt,
    });

    return response.output_text;
  }
}