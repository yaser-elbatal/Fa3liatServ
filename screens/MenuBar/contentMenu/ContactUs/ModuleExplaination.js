import React, { useEffect, useState } from "react";
import RBSheet from "react-native-raw-bottom-sheet";
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import { InputIon } from "../../../../common/InputText";
import { width, height } from "../../../../common";
import { BtnOk } from "../../../../components/CornerBtn/BtnOk";
import { TextInput } from "react-native-gesture-handler";
import { toContactUs } from "../../../../navigation/Navigator";

const ModuleExplaination = ({ refRBSheet3, navigation }) => {
  console.log("refRBSheet3refRBSheet3" + refRBSheet3);

  const [name, setname] = useState("اوامر الشبكه");
  const [email, setEmail] = useState("البريد الالكتروني");

  return (
    <RBSheet
      ref={refRBSheet3}
      closeOnDragDown={true}
      closeOnPressMask={true}
      onClose={() => toContactUs(navigation)}
      customStyles={{
        wrapper: {},
        container: {
          flex: 2,
          borderTopRightRadius: 70,
          borderTopLeftRadius: 70,
        },
        draggableIcon: {
          backgroundColor: "#EA488A",
        },
      }}
    >
      <View style={styles.viewStyle}>
        <View style={{ bottom: width * 0.09 }}>
          <Text
            style={{
              textAlign: "center",
              fontSize: width * 0.03,
              fontFamily: "sukar-black",
              color: "#CECECE",
            }}
          >
            ارسال شكوي او استفسار
          </Text>
        </View>
        <InputIon
          placeholder={"اسم المستخدم"}
          value={name}
          onChangeText={(e) => setname(e)}
          cStyle={{ borderColor: "#EDAECC" }}
          vStyle={{ color: "#95EBFC" }}
        />
        <InputIon
          value={email}
          onChangeText={(e) => setEmail(e)}
          inputStyle={{ paddingHorizontal: 0 }}
        />

        <TextInput
          placeholder="نص الرساله"
          style={styles.textInput}
          numberOfLines={20}
          autoCapitalize={"none"}
          autoCorrect={false}
          multiline={true}
          textAlignVertical="top"
        />
        <View style={{ top: height * 0.17 }}>
          <BtnOk
            btnName="تأكيد"
            btnPress={() => {
              toContactUs(navigation), refRBSheet3.current.close();
            }}
          />

          <TouchableWithoutFeedback
            onPress={() => {
              toContactUs(navigation), refRBSheet3.current.close();
            }}
          >
            <Text style={styles.texStyle}>الغاء</Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </RBSheet>
  );
};
const styles = StyleSheet.create({
  viewStyle: {
    paddingTop: 27,
    position: "absolute",
    width: width,

    backgroundColor: "white",
    borderTopRightRadius: 100,
    marginTop: width * 0.1,
    flex: 1,
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
    top: width * 0.23,
    left: width * 0.5,
    width: width * 0.5,
    padding: width * 0.04,
  },
  texStyle: {
    textAlign: "center",
    color: "#EA5050",
    fontSize: 15,
    fontFamily: "sukar-black",
    left: width / 4,
    bottom: width * 0.06,
  },
});
export { ModuleExplaination };
