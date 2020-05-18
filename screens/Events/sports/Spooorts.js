import React from "react";
import {
  TouchableWithoutFeedback,
  View,
  Image,
  Text,
  StyleSheet,
} from "react-native";
import { width, height, Images } from "../../../common";

const Spooorts = ({ label, RightImage, onPress2 }) => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPress2}>
        <View style={styles.wrapp}>
          <Image source={RightImage} style={styles.imgStyle} />
          <View style={styles.content}>
            <Text style={styles.textStyle}>{label}</Text>
            <View>
              <View style={styles.viewStyle}>
                <Image source={Images.clock} style={styles.imgStyl} />
                <Text style={styles.textClock}>10مساء</Text>
              </View>
              <View style={styles.conStyle}>
                <View style={{ flexDirection: "row" }}>
                  <Image
                    source={Images.calender}
                    style={styles.imageCalender}
                  />
                  <Text style={styles.datestyle}>22/5/2019</Text>
                </View>
                <View style={{ justifyContent: "flex-end" }}>
                  <Text style={styles.priceStyle}>1500 ر.س</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: height * 0.1,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
  },
  wrapp: {
    borderWidth: 1,
    flexDirection: "row",
    borderColor: "#E9E9E9",
  },
  conStyle: {
    flexDirection: "row",
    paddingTop: 5,
  },
  imgStyle: {
    width: width * 0.3,
    height: height * 0.1,
  },
  content: {
    flexDirection: "column",
    paddingStart: 10,
  },
  textStyle: {
    fontSize: width * 0.04,
    fontWeight: "bold",
  },
  viewStyle: {
    flexDirection: "row",
    paddingTop: 5,
  },
  imgStyl: {
    width: 15,
    height: 15,
  },
  textClock: {
    fontSize: width * 0.03,
    marginLeft: 5,
  },
  imageCalender: {
    width: 15,
    height: 15,
  },
  datestyle: {
    fontSize: width * 0.03,
    marginLeft: 5,
  },
  priceStyle: {
    color: "#EF7FAA",
    marginLeft: width * 0.2,
  },
});
export { Spooorts };
