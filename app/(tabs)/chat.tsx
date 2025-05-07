import colors from "@/constants/Colors";
import { Feather } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const Chat = () => {
  return (
    <View style={styles.container}>
      <Text>Chat</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textbox} placeholder="Type a message..." />
        <TouchableOpacity>
          <Feather name="send" size={18} color="black"/>
        </TouchableOpacity>
      </View>
    </View>
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
});

export default Chat;