import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { width, Colors } from "../../../../common";
import { SText } from "../../../../components";
import { LinearGradient } from "expo-linear-gradient";

const CircleBtn = ({ title, style, selected, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      {selected ? (
        <LinearGradient
          colors={[Colors.aMain, Colors.aSecondary]}
          style={[styles.gradiant, style]}
          start={{ x: 1.0, y: 0.0 }}
          end={{ x: 1.0, y: 1.0 }}
        >
          <View style={styles.btnGradiant}>
            <SText
              title={title}
              style={[styles.text, { color: Colors.aMain }]}
            />
          </View>
        </LinearGradient>
      ) : (
        <View style={[styles.btnContainer, style]}>
          <SText title={title} style={styles.text} />
        </View>
      )}
    </TouchableWithoutFeedback>
  );
};
export { CircleBtn };

const styles = StyleSheet.create({
  gradiant: {
    width: width * 0.3,
    height: width * 0.3,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: width
  },
  btnContainer: {
    // alignSelf: "flex-start",
    borderRadius: width,
    borderWidth: width * 0.02,
    borderColor: Colors.white,
    width: width * 0.3,
    height: width * 0.3,
    justifyContent: "center",
    alignItems: "center"
  },
  btnGradiant: {
    width: width * 0.265,
    height: width * 0.265,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.bg,
    borderRadius: width
  },
  text: {
    padding: width * 0.05,
    color: Colors.white
  }
});
