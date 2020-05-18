import React, { useState } from "react";
import { Image, ActivityIndicator } from "react-native";
import { BgImage } from "../../../components";
import { Images } from "../../../common";
import { InputIcon, Btn } from "../../../components";
import styles from "./style";
import {
  _toActivation,
  _toLogin,
  _toHome,
} from "../../../navigation/Navigator";
// import UserContext from "../../../UserContext";
import { CustomTextInput } from "../../../components/TextOverBorder/InputText";
import { Toaster } from "../../../components/Toaster";
import { validateCode } from "../../../components/Validations";

const Activation = ({ navigation, route }) => {
  let { codeActivate } = route.params;

  const [code, setCode] = useState(codeActivate);
  const [loading, setLoading] = useState(false);
  console.log(codeActivate);

  const _validate = () => {
    let codeError = validateCode(code);
    return codeError;
  };
  const onActivate = async () => {
    if (codeActivate === code) {
      setLoading(true);

      await navigation.navigate("Login");
    } else {
      return Toaster(_validate());
    }

    setLoading(false);
  };

  return (
    <BgImage>
      <Image source={Images.logo} style={styles.image} />

      <CustomTextInput
        placeholder={"كود التفعيل"}
        onChangeText={(e) => setCode(e)}
        image={Images.check}
        imageFocused={Images.check}
        value={String(code)}
      />
      {loading ? (
        <ActivityIndicator size="small" color="red" />
      ) : (
        <Btn
          text={"تأكيد"}
          btnStyle={styles.loginBtn}
          textStyle={styles.btnText}
          onPress={onActivate}
        />
      )}
    </BgImage>
  );
};
export { Activation };
