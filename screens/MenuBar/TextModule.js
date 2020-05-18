import React from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";
import { width } from "../../common";

export default function TextModule({ label, image, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.Touchable}>
      <Image source={image} style={styles.Img} />
      <Text style={styles.TextStyle}>{label}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  Touchable: {
    flexDirection: "row",
    paddingStart: width * 0.03,
    marginTop: width * 0.08,
  },
  Img: {
    width: width * 0.05,
    height: width * 0.05,
    marginRight: 10,
  },
  TextStyle: {
    color: "white",
    fontSize: width * 0.037,
    fontFamily: "sukar-black",
  },
});
