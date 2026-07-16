export interface AIProvider {
  ask(prompt: string, systemPrompt?: string): Promise<string>;
}