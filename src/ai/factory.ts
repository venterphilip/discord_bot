import { config } from "../config.js";
import { GoogleProvider } from "./google.js";
import { OpenAIProvider } from "./openai.js";

export const ai =
  config.AI_PROVIDER === "google"
    ? new GoogleProvider()
    : new OpenAIProvider();