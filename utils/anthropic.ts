import Anthropic from "@anthropic-ai/sdk";
import Constants from "expo-constants";
import { addAssistantMessage, getConversation } from "./conversatioonHistory";

const ANTHROPIC_API_KEY = Constants.expoConfig?.extra?.anthropicApiKey;

const client = new Anthropic({ apiKey: ANTHROPIC_API_KEY });

export const makeChatRequest = async () => {
  const response = await client.messages.create({
    model: "claude-3-7-sonnet-20250219",
    max_tokens: 1000,
    temperature: 1,
    system: "Respond only with short poems.",
    messages: getConversation(),
  });
  if (response.content && response.content.length > 0) {
    const contentBlock = response.content[0];
    if (contentBlock.type === "text") {
      let text = contentBlock.text;
      // text = text.replace(/(\r\n|\n|\r)/gm, "");
      addAssistantMessage(text);
      getConversation().forEach((message) =>
        console.log(
          "role: " + message.role + "message: " + message.content[0].text
        )
      );
      return;
    }
  }

  throw new Error("No response from Anthropic");
};
