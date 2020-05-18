import React from "react";
import { TouchableWithoutFeedback, StyleSheet, View } from "react-native";
import { width, Colors } from "../../common";
import { AText } from "./Text";

const BtnOk = ({ btnName, btnPress }) => {
  return (
    <TouchableWithoutFeedback onPress={btnPress}>
      <View style={styles.container}>
        <AText title={btnName} style={styles.text} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export { BtnOk };

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: -1,
    start: -1,
    borderColor: '#0FD1FA',
    borderWidth: width * 0.02,
    borderTopEndRadius: width * 0.05,
    backgroundColor:'#0FD1FA',
    width:width*0.5
  },
  text: {
    paddingVertical: width * 0.04,
    paddingHorizontal: width * 0.06,
    color:'white',
    textAlign:'center'
  }
});
