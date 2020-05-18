import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { InputIon } from "../../../common/InputText";
import { height, width } from "../../../common";

export const ProfileForm = () => {
  const [userName, setUserName] = useState("أوامر الشبكة");
  const [phone, setPhone] = useState("0000");
  const [email, setEmail] = useState("awamer_elshabka@gmail.com");

  return (
    <View style={styles.container}>
      <View style={styles.viewStyle}>
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
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
  },
  viewStyle: {
    height: height * 0.6,
    paddingTop: 20,
    position: "absolute",
    width: width,
    backgroundColor: "white",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    marginTop: height * 0.42,
  },
});
