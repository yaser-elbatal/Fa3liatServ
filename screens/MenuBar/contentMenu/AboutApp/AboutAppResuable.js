import React from "react";
import { View, Image, Text, StyleSheet, ScrollView } from "react-native";
import { width } from "../../../../common";

const AboutAppResuable = ({ image }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={image} style={styles.ImgStyle} />

        <Text style={styles.textStyle}>
          هذا النص هو مثال لنص يمكن ان يستدل بنفس المساحه لقد تم توليد
        </Text>
        <View style={styles.lineStyle}></View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: width * 0.07,
    flexDirection: "row",
    marginStart: width * 0.02,
    flex: 1,
  },
  ImgStyle: {
    width: 15,
    height: 15,
  },
  textStyle: {
    fontSize: width * 0.04,
    opacity: 0.5,
    fontFamily: "sukar-black",
    marginLeft: width * 0.02,
  },
  lineStyle: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#F8F8F8",
    marginBottom: 5,
  },
});
export default AboutAppResuable;
