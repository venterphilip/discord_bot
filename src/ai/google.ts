import { GoogleGenAI } from "@google/genai";
import { config } from "../config.js";
import type { AIProvider } from "./provider.js";

const ai = new GoogleGenAI({
  apiKey: config.GOOGLE_API_KEY!,
});

export class GoogleProvider implements AIProvider {
  async ask(prompt: string, systemPrompt?: string): Promise<string> {
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      config: {
        systemInstruction: systemPrompt,
      },
      contents: prompt,
    });

    return response.text ?? "No response.";
  }
}