import React from "react";
import { Text, StyleSheet, I18nManager } from "react-native";
import { Colors } from "../../common";

const AText = ({ title, style, onPress, ...rest }) => (
  <Text {...rest} style={[styles.text, style]}>
    {title}
  </Text>
);
export { AText };

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    color: '#0FD1FA',
    fontFamily: "sukar-black",
    textAlign: I18nManager.isRTL ? "left" : "left"
  }
});
