import React from "react";
import { TouchableWithoutFeedback, StyleSheet, View } from "react-native";
import { width, Colors } from "../../common";
import { SText } from "../Text";

const CornerBtn = ({ btnName, btnPress }) => {
  return (
    <TouchableWithoutFeedback onPress={btnPress}>
      <View style={styles.container}>
        <SText title={btnName} style={styles.text} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export { CornerBtn };

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: -1,
    start: -1,
    borderColor: Colors.main,
    borderWidth: width * 0.002,
    borderTopEndRadius: width * 0.05
  },
  text: {
    paddingVertical: width * 0.04,
    paddingHorizontal: width * 0.06
  }
});
