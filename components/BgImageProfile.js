import React from "react";
import {
  Image,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import { width, height, Images, Colors } from "../common";
import { _RegisterProfile } from "../navigation/Navigator";
import { useNavigation } from "@react-navigation/native";

const BgImageProfile = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image source={Images.profilepic} style={styles.image} />
      <TouchableWithoutFeedback onPress={() => navigation.toggleDrawer()}>
        <Image source={Images.menue} style={styles.imageStyle} />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => _RegisterProfile(navigation)}>
        <Image style={styles.editImage} source={Images.edit} />
      </TouchableWithoutFeedback>
    </View>
  );
};
export { BgImageProfile };

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
  imageStyle: {
    width: width * 0.06,
    height: width * 0.055,
    margin: width * 0.06,
    opacity: 0.5,
  },
  editImage: {
    width: width * 0.06,
    height: width * 0.055,
    opacity: 0.5,
    marginHorizontal: width * 0.9,
    top: -height * 0.07,
  },
});
