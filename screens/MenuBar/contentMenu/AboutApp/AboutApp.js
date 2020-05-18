import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Images, height, width } from "../../../../common";
import AboutAppResuable from "./AboutAppResuable";
import { _toHome } from "../../../../navigation/Navigator";

const AboutApp = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapp}>
        <Image source={Images.atifa} style={styles.imgBackg} />
        <View style={{ position: "absolute" }}>
          <View style={styles.content}>
            <TouchableOpacity onPress={() => _toHome(navigation)}>
              <Image source={Images.right} style={styles.imgStyle} />
            </TouchableOpacity>
            <View style={{ flexDirection: "column" }}>
              <Text style={styles.textStyleS}>عن التطبيق</Text>
              <Text style={styles.TextBig}>
                هذا النص هو مثال لنص يمكن ان يستدل في نفس المساحه لقد تم توليد
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.ChildContainer}>
          <AboutAppResuable image={Images.blue} />
          <AboutAppResuable image={Images.pink} />
          <AboutAppResuable image={Images.blue} />
          <AboutAppResuable image={Images.pink} />
          <AboutAppResuable image={Images.blue} />
          <AboutAppResuable image={Images.pink} />
          <AboutAppResuable image={Images.blue} />
          <AboutAppResuable image={Images.pink} />
          <AboutAppResuable image={Images.blue} />
          <AboutAppResuable image={Images.blue} />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
  },
  wrapp: {
    position: "absolute",
    flex: 1,
  },
  imgBackg: {
    width: width,
    height: height,
    resizeMode: "stretch",
  },
  content: {
    flexDirection: "row",
    marginTop: width * 0.1,
    marginLeft: width * 0.04,
  },
  imgStyle: {
    width: 20,
    height: 20,
  },
  textStyleS: {
    color: "white",
    fontSize: width * 0.05,
    fontFamily: "sukar-black",
    left: width / 3.5,
  },
  TextBig: {
    color: "white",
    fontSize: width * 0.04,
    fontFamily: "sukar-black",
    left: -width * 0.03,
    marginTop: width * 0.11,
  },
  ChildContainer: {
    backgroundColor: "white",
    borderTopRightRadius: 100,
    top: width * 0.5,
    width: width,
    position: "absolute",
  },
});
export { AboutApp };
