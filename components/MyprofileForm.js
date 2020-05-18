import React, { useState } from "react";
import {
  View,
  Dimensions,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
} from "react-native";
import { InputIon } from "../common/InputText";
import { BtnOk } from "./CornerBtn/BtnOk";
import { useNavigation } from "@react-navigation/native";
import { _toProfileRegister } from "../navigation/Navigator";
import { height, width } from "../common";

export const MyProfileForm = () => {
  const [userName, setUserName] = useState("أوامر الشبكة");
  const [phone, setPhone] = useState("0000");
  const [email, setEmail] = useState("awamer_elshabka@gmail.com");
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.container}>
        <InputIon
          placeholder={"اسم المستخدم"}
          value={userName}
          onChangeText={(e) => setUserName(e)}
        />
        <InputIon
          placeholder={"رقم الجوال"}
          value={phone}
          onChangeText={(e) => setPhone(e)}
        />
        <InputIon
          placeholder={"البريد الالكتروني"}
          value={email}
          onChangeText={(e) => setEmail(e)}
        />
      </View>
      <View></View>
      <View style={{ top: height * 0.97 }}>
        <BtnOk
          btnName="تأكيد"
          btnPress={() => _toProfileRegister(navigation)}
        />
      </View>
      <View style={styles.wrapp}>
        <TouchableWithoutFeedback
          onPress={() => _toProfileRegister(navigation)}
        >
          <Text style={styles.texStyle}>الغاء</Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height * 0.6,
    paddingTop: 20,
    position: "absolute",
    width: width,
    backgroundColor: "white",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    marginTop: height * 0.42,
  },
  wrapp: {
    top: height * 0.89,
    left: width * 0.5,
    width: width * 0.5,
    padding: width * 0.04,
  },
  texStyle: {
    textAlign: "center",
    color: "#EA5050",
    fontSize: 15,
    fontFamily: "sukar-black",
  },
});
