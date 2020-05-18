import React from "react";
import {
  TouchableWithoutFeedback,
  StyleSheet,
  Platform,
  Dimensions,
  View,
  ActivityIndicator
} from "react-native";
import { Colors } from "../../common/Colors";
import { SText } from "../Text";
import { width } from "../../common";

const Btn = ({ text, btnStyle, textStyle, loading, loaderColor, ...props }) => {
  return loading ? (
    <View style={[styles.ownStyle, btnStyle]}>
      <ActivityIndicator
        color={loaderColor || Colors.white}
        // Hint You Can not add Size to Indicator as Number Only Small or Large
      />
    </View>
  ) : (
    <TouchableWithoutFeedback {...props}>
      <View style={[styles.ownStyle, btnStyle]}>
        <SText style={[styles.btnS, textStyle]} title={text} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export { Btn };

const styles = StyleSheet.create({
  ownStyle: {
    backgroundColor: Colors.main,
    borderRadius:
      Math.round(
        Dimensions.get("window").width + Dimensions.get("window").height
      ) / 2,
    alignItems: "center",
    justifyContent: "center",
    ...Platform.select({
      ios: {
        shadowColor: Colors.black,
        shadowOffset: { height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 1
      }
    }),
    paddingHorizontal: 0,
    paddingVertical: width * 0.05,
    width: "80%",
    alignSelf: "center",
    height: width * 0.12
  },
  btnS: {
    color: Colors.white,
    fontSize: width * 0.04
  }
});
