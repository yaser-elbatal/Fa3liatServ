import React, { useState } from "react";
import { CustomModal } from "../../../../components/Modal/modal";
import {
  Text,
  Button,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import { width, height, Images } from "../../../../common";
import { InputIon } from "../../../../common/InputText";
import { BtnOk } from "../../../../components/CornerBtn/BtnOk";
import { InputIcon } from "../../../../components";
import RBSheet from "react-native-raw-bottom-sheet";
import { _toSettings } from "../../../../navigation/Navigator";

const ChangeLangMod = ({ refRBSheet2, navigation }) => {
  const [arab, setArab] = useState("العربيه");
  const [lang, setLang] = useState("الانجليزيه");
  return (
    <RBSheet
      ref={refRBSheet2}
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
      <Text style={styles.textstyle}>اختر لغه التطبيق</Text>

      <InputIon
        cStyle={{ borderColor: "#5EDEFA", borderBottomColor: "#ED71A5" }}
        onChangeText={(e) => setArab(e)}
        image={Images.success}
        imageFocused={Images.success}
        value={arab}
      />

      <InputIon value={lang} onChangeText={(e) => setLang(e)} />

      <View style={styles.btnView}>
        <BtnOk
          btnName="تأكيد"
          btnPress={() => {
            _toSettings(navigation), refRBSheet2.current.close();
          }}
        />
        <TouchableWithoutFeedback
          onPress={() => {
            _toSettings(navigation), refRBSheet2.current.close();
          }}
        >
          <Text style={styles.texStyl}>الغاء</Text>
        </TouchableWithoutFeedback>
      </View>
    </RBSheet>
  );
};
const styles = StyleSheet.create({
  line: {
    width: width * 0.2,
    backgroundColor: "#E94086",
    height: 5,
    left: width * 0.34,
    bottom: width * 0.026,
  },
  textstyle: {
    textAlign: "center",
    fontFamily: "sukar-black",
    color: "#E6E6E6",
  },
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
  btnView: { top: height * 0.36, right: width * 0.1 },
});

export { ChangeLangMod };
