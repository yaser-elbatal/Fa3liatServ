import React, { useState } from "react";
import { View, StyleSheet, TextInput, I18nManager, Image } from "react-native";
import { Colors, width } from "../../common";
import { SText } from "../Text";

const CustomTextInput = ({
  icon,
  cStyle,
  iconStyle,
  inputStyle,
  image,
  imageFocused,
  placeholder,
  value,
  backgroundColor,
  ...props
}) => {
  const [focused, setFocused] = useState(false);
  return (
    <View style={styles.container}>
      {value ? <SText title={placeholder} style={styles.header} /> : null}

      <View
        style={[
          styles.inputC,
          value ? { borderColor: Colors.aMain } : null,
          cStyle,
        ]}
      >
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
export { CustomTextInput };

const styles = StyleSheet.create({
  container: {
    height: width * 0.18,
    justifyContent: "flex-end",
    position: "relative",
  },
  header: {
    color: "#0F8FAF",
    position: "absolute",
    top: 12,
    left: 50,
    paddingHorizontal: 5,
    zIndex: 50,
    backgroundColor: "#121320",

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
    paddingStart: width * 0.037,
    borderWidth: 1,
    borderColor: Colors.white,
    borderRadius: 65,
  },
  inputStyle: {
    flex: 1,
    fontSize: width * 0.037,
    fontFamily: "sukar-black",
    color: Colors.white,
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
