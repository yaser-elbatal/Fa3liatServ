import React from "react";
import {
  Image,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import { width, height, Images, Colors } from "../common";
import { useNavigation } from "@react-navigation/native";
import { _toProfileRegister } from "../navigation/Navigator";

const BgImagemyProfile = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image source={Images.profileopacity} style={styles.image} />
      <TouchableWithoutFeedback onPress={() => _toProfileRegister(navigation)}>
        <Image source={Images.right} style={styles.ImageIcon} />
      </TouchableWithoutFeedback>
      <Image style={styles.ImgIcon2} source={Images.add} />
    </View>
  );
};

export { BgImagemyProfile };

const styles = StyleSheet.create({
  container: { flex: 1 },
  image: {
    width: width,
    height: height * 0.55,
    resizeMode: "cover",
    position: "absolute",
  },
  opacityBg: {
    width: width,
    height: height,
    backgroundColor: Colors.bgOpacity,
  },
  ImageIcon: {
    width: width * 0.05,
    height: width * 0.06,
    margin: width * 0.05,
    opacity: 0.5,
  },
  ImgIcon2: {
    width: width * 0.05,
    height: width * 0.06,
    opacity: 0.5,
    marginHorizontal: width * 0.9,
    top: -height * 0.06,
  },
});
