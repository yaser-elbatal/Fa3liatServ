import React from "react";
import { Text, StyleSheet, I18nManager } from "react-native";
import { Colors } from "../../common";

const SText = ({ title, style, onPress, ...rest }) => (
  <Text {...rest} style={[styles.text, style]}>
    {title}
  </Text>
);
export { SText };

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    color: Colors.main,
    fontFamily: "sukar-black",
    textAlign: I18nManager.isRTL ? "left" : "left",
  },
});
