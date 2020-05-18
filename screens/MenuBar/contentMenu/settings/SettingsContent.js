import React, { useState, useRef } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableWithoutFeedback,
  Switch,
} from "react-native";
import { Images, height, width, Colors } from "../../../../common";

import { ChangeLangMod } from "./ChangeLangMod";
import { ChangePassword } from "./ChangePassword";

const SettingsContent = ({ navigation }) => {
  const [switchVal, setswitchValue] = useState(true);

  const refRBSheet = useRef();
  const refRBSheet2 = useRef();

  return (
    <View style={styles.container}>
      <View style={styles.wrapp}>
        <Image source={Images.blue} style={styles.imgStyle} />

        <TouchableWithoutFeedback onPress={() => refRBSheet2.current.open()}>
          <Text style={styles.TextStyle}>اللغه</Text>
        </TouchableWithoutFeedback>

        <ChangeLangMod navigation={navigation} refRBSheet2={refRBSheet2} />
      </View>

      <View style={styles.lineStyle}></View>
      <View style={styles.wrapp}>
        <Image source={Images.pink} style={styles.imgStyle} />
        <TouchableWithoutFeedback onPress={() => refRBSheet.current.open()}>
          <Text style={styles.TextStyle}>تغيير كلمه المرور</Text>
        </TouchableWithoutFeedback>

        <ChangePassword navigation={navigation} refRBSheet={refRBSheet} />
      </View>

      <View style={styles.lineStyle}></View>

      <View style={styles.wrapp}>
        <Image source={Images.blue} style={styles.imgStyle} />

        <Text style={styles.TextStyle}>غلق الاشعارات</Text>
        <View
          style={{
            backgroundColor: switchVal ? "#906AA1" : "#252527",
            borderRadius: 20,
            left: width * 0.5,
          }}
        >
          <Switch
            trackColor={switchVal ? "#906AA1" : "#252527"}
            onValueChange={(switchVal) => setswitchValue(switchVal)}
            value={switchVal}
          />
        </View>
      </View>
      <View style={styles.lineStyle}></View>
    </View>
  );
};

export { SettingsContent };
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginTop: 20,
  },
  wrapp: {
    flexDirection: "row",
    padding: width * 0.04,
    marginTop: width * 0.05,
  },
  imgStyle: {
    width: 12,
    height: 12,
  },
  lineStyle: {
    width: width * 0.85,
    marginStart: 25,
    borderColor: "#F6F6F6",
    marginTop: width * 0.1,
    borderWidth: 1,
  },
  TextStyle: {
    fontSize: width * 0.035,
    fontFamily: "sukar-black",
    left: width / 30,
  },
  gradiant: {
    width: width * 0.13,
    height: width * 0.04,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: width,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
