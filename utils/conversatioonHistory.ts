let conversation: MessageParam[] = [];

type MessageParam = {
  role: "user" | "assistant";
  content: { type: "text"; text: string }[];
};

export const getConversation = () => conversation;

export const addUserMessage = (message: string) => {
  conversation.push({
    role: "user",
    content: [
      {
        type: "text",
        text: message,
      },
    ],
  });
};

export const addAssistantMessage = (message: string) => {
  conversation.push({
    role: "assistant",
    content: [
      {
        type: "text",
        text: message,
      },
    ],
  });
};
