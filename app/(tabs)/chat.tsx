import KeyboardAvoidingViewContainer from "@/components/KeyboardAvoidingViewContainer";
import colors from "@/constants/Colors";
import { makeChatRequest } from "@/utils/anthropic";
import { addUserMessage } from "@/utils/conversationHistory";
import { Feather } from "@expo/vector-icons";
import React, { useCallback, useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";

const Chat = () => {
  const [message, setMessage] = useState("");

  const sendMessage = useCallback(async () => {
    try {
      addUserMessage(message)
      await makeChatRequest();
      setMessage("");
    } catch (error) {
      console.error(error);
    }
  }, [message]);

  return (
    <KeyboardAvoidingViewContainer>
      <View style={styles.container}>
        <View style={styles.messagesContainer}></View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textbox}
            placeholder="Type a message..."
            onChangeText={setMessage}
            value={message}
          />
          <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
            <Feather name="send" size={18} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingViewContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.greyBg,
  },
  inputContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 10,
  },
  textbox: {
    flex: 1,
  },
  sendButton: {
    backgroundColor: colors.primary,
    width: 35,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
  messagesContainer: {
    flex: 1,
    padding: 10,
  },
});

export default Chat;
