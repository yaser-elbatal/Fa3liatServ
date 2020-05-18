import React, { useState } from "react";
import { CustomModal } from "../../../../components/Modal/modal";
import { InputIcon, SText } from "../../../../components";
import { BtnOk } from "../../../../components/CornerBtn/BtnOk";
import RBSheet from "react-native-raw-bottom-sheet";

import {
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  Text,
  TextInput,
  I18nManager,
} from "react-native";
import { width, height, Colors } from "../../../../common";
import { InputIon } from "../../../../common/InputText";
import { _toSettings } from "../../../../navigation/Navigator";

const ChangePassword = ({ refRBSheet, navigation }) => {
  const [password, setPassword] = useState("000000000");
  const [newpass, setnewwPass] = useState("كلمه المرور الجديده");
  const [okpass, setwokPass] = useState("تأكيد كلمه المرور الجديده ");

  return (
    <RBSheet
      ref={refRBSheet}
      closeOnDragDown={true}
      closeOnPressMask={true}
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
      <View style={styles.container}>
        <SText title="كلمه المرور الحاليه" style={styles.header} />
        <TextInput
          style={styles.inputText}
          underlineColorAndroid="transparent"
          placeholderTextColor={Colors.white}
          value={password}
          onChange={(e) => setPassword(e)}
        />
      </View>
      <View style={{ bottom: width * 0.03 }}>
        <InputIon value={newpass} onChangeText={(e) => setnewwPass(e)} />
        <InputIon value={okpass} onChangeText={(e) => setwokPass(e)} />
      </View>

      <View style={styles.btnView}>
        <BtnOk
          btnName="تأكيد"
          btnPress={() => {
            _toSettings(navigation), refRBSheet.current.close();
          }}
        />
        <TouchableWithoutFeedback
          onPress={() => {
            _toSettings(navigation), refRBSheet.current.close();
          }}
        >
          <Text style={styles.texStyl}>الغاء</Text>
        </TouchableWithoutFeedback>
      </View>
    </RBSheet>
  );
};
const styles = StyleSheet.create({
  inputStyle: {
    borderColor: "#5EDEFA",
    borderBottomColor: "#ED71A5",
  },
  wrapp: {
    top: width / 3.5,
    left: width * 0.46,
    width: width * 0.5,
  },
  texStyl: {
    textAlign: "center",
    color: "#EA5050",
    fontSize: 15,
    fontFamily: "sukar-black",
    left: width / 3,
    bottom: width * 0.06,
  },
  btnView: {
    top: height * 0.25,
    right: width * 0.1,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    height: width * 0.18,
    marginTop: 30,

    width: "90%",
    alignSelf: "center",
    paddingHorizontal: width * 0.01,
    paddingStart: width * 0.01,
  },
  header: {
    color: "#B5F0FD",
    position: "absolute",
    top: width * 0.01,
    left: 30,
    paddingHorizontal: 10,
    zIndex: 40,
    backgroundColor: "#FFFFFF",
    fontSize: 12,
  },
  inputText: {
    flex: 2,
    fontSize: width * 0.037,
    fontFamily: "sukar-black",
    color: "#B4B3B6",
    padding: 12,
    margin: 10,
    textAlign: I18nManager.isRTL ? "right" : "left",
    position: "relative",
    borderWidth: 1,
    borderRadius: 50,
    borderColor: "#EF76A8",
    borderTopColor: "#7FDCF5",
  },
});

export { ChangePassword };
