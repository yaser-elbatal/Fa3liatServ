import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { Images, width } from "../../common";
import { Avatar } from "react-native-elements";

const BigImage = () => {
  return (
    <View>
      <Image source={Images.bigImg} style={styles.ImgStyle} />
      <Avatar
        rounded
        source={Images.profilepic}
        size={80}
        containerStyle={styles.Avatar}
      />
      <View style={styles.container}>
        <Text style={styles.TextStyle}>أوامر الشبكه</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  ImgStyle: {
    width: 250,
    height: 230,
  },
  container: {
    position: "absolute",
    marginTop: width * 0.44,
    marginLeft: width * 0.22,
  },
  Avatar: {
    flex: 2,
    position: "absolute",
    marginTop: width * 0.2,
    marginLeft: width * 0.25,
  },
  TextStyle: {
    fontSize: width * 0.05,
    fontFamily: "sukar-black",
    color: "white",
  },
});
export { BigImage };
