import React, { useState } from "react";
import { View, StyleSheet, TextInput, I18nManager, Image } from "react-native";
import { Colors, width } from "../common";
import { SText } from "../components";
// import { SText } from "./Text";

const InputIon = ({
  icon,
  cStyle,
  iconStyle,
  inputStyle,
  image,
  imageFocused,
  placeholder,
  value,
  vStyle,
  ...props
}) => {
  const [focused, setFocused] = useState(false);
  return (
    <View style={styles.container}>
      {value ? (
        <SText title={placeholder} style={[styles.header, vStyle]} />
      ) : null}

      <View style={[styles.inputC, { borderColor: "#B0B0B3" }, cStyle]}>
        <TextInput
          placeholder={placeholder}
          style={[styles.inputStyle, inputStyle]}
          underlineColorAndroid="transparent"
          placeholderTextColor={Colors.white}
          value={value}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          {...props}
        />
        <Image
          source={focused || value ? imageFocused : image}
          style={styles.image}
        />
      </View>
    </View>
  );
};
export { InputIon };
const styles = StyleSheet.create({
  container: {
    height: width * 0.18,
    justifyContent: "flex-end",
    position: "relative",
  },
  header: {
    color: "#B0B0B3",
    position: "absolute",
    top: 12,
    left: 50,
    paddingHorizontal: 1,
    zIndex: 50,
    backgroundColor: "white",
    fontSize: 12,
  },
  inputC: {
    flexDirection: "row",
    alignItems: "center",
    height: width * 0.12,
    borderRadius: width,
    width: "80%",
    alignSelf: "center",
    paddingHorizontal: width * 0.03,
    paddingStart: width * 0.039,
    borderWidth: 1,
    borderColor: Colors.white,
    borderRadius: 70,
  },
  inputStyle: {
    flex: 1,
    fontSize: width * 0.037,
    fontFamily: "sukar-black",
    color: "#B0B0B3",
    textAlign: I18nManager.isRTL ? "right" : "left",
    position: "relative",
  },
  image: {
    width: width * 0.06,
    maxWidth: width * 0.12,
    height: width * 0.06,
    maxHeight: width * 0.12,
    resizeMode: "contain",
  },
});
