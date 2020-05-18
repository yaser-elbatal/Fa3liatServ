import React, { useState, useRef } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Avatar } from "react-native-elements";
import { Images, height, width } from "../../../../common";
import { _toHome, _toExplaination } from "../../../../navigation/Navigator";
import { InputIon } from "../../../../common/InputText";
import { ModuleExplaination } from "./ModuleExplaination";

const Contactus = ({ navigation }) => {
  const [Address, setAddress] = useState("الرياض شارع التخصصي");
  const [phone, setPhone] = useState("0000");
  const [email, setEmail] = useState("awamer_elshabka@gmail.com");
  const refRBSheet3 = useRef();

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
              <Text style={styles.textStyleS}>اتصل بنا</Text>
              <Text style={styles.TextBig}>
                هذا النص هو مثال لنص يمكن ان يستدل في نفس المساحه لقد تم توليد
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.ChildContainer}>
          <View style={styles.viewStyle}>
            <InputIon
              placeholder={"العنوان"}
              value={Address}
              onChangeText={(e) => setAddress(e)}
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
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Avatar rounded source={Images.facebook} />
              <Avatar
                rounded
                source={Images.twitter}
                containerStyle={{ marginHorizontal: 30 }}
              />
              <Avatar rounded source={Images.insta} />
            </View>
            <TouchableOpacity
              onPress={() => refRBSheet3.current.open()}
              style={{ bottom: width / 1.3 }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: width * 0.04,
                  fontFamily: "sukar-black",
                }}
              >
                ارسل شكوي او استفسار
              </Text>
            </TouchableOpacity>
            <ModuleExplaination
              refRBSheet3={refRBSheet3}
              navigation={navigation}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapp: {
    position: "absolute",
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
    flex: 1,
    position: "absolute",
    height: height,
  },

  viewStyle: {
    paddingTop: 30,
    position: "absolute",
    width: width,
    backgroundColor: "white",
    borderTopRightRadius: 100,
    marginTop: width * 0.1,
  },
  textInput: {
    borderRadius: 15,
    borderWidth: 1,
    height: Platform.OS === "ios" ? 60 : 80,
    fontSize: 16,
    paddingHorizontal: 10,
    marginHorizontal: 35,
    padding: 10,
    marginTop: 15,
    borderColor: "#B0B0B3",
  },
  btnCancel: {
    top: width * 0.05,
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
export { Contactus };
