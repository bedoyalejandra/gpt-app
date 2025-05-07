import Constants from "expo-constants";
import OpenAI from "openai";

// Access the API key from expo-constants, which gets it from app.config.js
const OPENAI_API_KEY = Constants.expoConfig?.extra?.openaiApiKey;

const client = new OpenAI({ apiKey: OPENAI_API_KEY });

export const makeChatRequest = async (prompt: string) => {
  const response = await client.responses.create({
    model: "gpt-4.1",
    input: prompt,
  });

  console.log(response.output_text);
};
