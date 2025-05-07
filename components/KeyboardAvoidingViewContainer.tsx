import React from "react";
import { KeyboardAvoidingView, Platform } from "react-native";

const KeyboardAvoidingViewContainer = (props: any) => {
  if (Platform.OS === "android") {
    return props.children;
  }
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior="padding"
      keyboardVerticalOffset={80}
    >
      {props.children}
    </KeyboardAvoidingView>
  );
};

export default KeyboardAvoidingViewContainer;
