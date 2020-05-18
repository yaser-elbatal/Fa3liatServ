import React, { useState, useContext, useEffect } from "react";
import {
  View,
  Image,
  TouchableWithoutFeedback,
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  AsyncStorage,
} from "react-native";
import { Images } from "../../../common";
import styles from "./style";
import { InputIcon, SText, Btn, BgImage, CornerBtn } from "../../../components";
import { _toRegister, _toHome } from "../../../navigation/Navigator";
import { CustomTextInput } from "../../../components/TextOverBorder/InputText";
import { useDispatch, useSelector } from "react-redux";
import * as LoginActions from "../../../store/actions/SignIn";
import i18n from "../../../Language/Localization";
import { Toaster } from "../../../components/Toaster";
import {
  validatePhone,
  validatePassword,
} from "../../../components/Validations";
import Constants from "expo-constants";
import { Notifications } from "expo";
import * as Permissions from "expo-permissions";

import Expo from "expo";
import { registerForPushNotificationsAsync } from "../../Notifacation/Notification";
const Login = ({ navigation }) => {
  const [phone, setPhone] = useState("1069541294");
  const [password, setPassword] = useState("");
  const [isLoading, Setisloading] = useState(false);

  const dispatch = useDispatch();
  const deviceID = Constants.deviceId;

  useEffect(() => {
    registerForPushNotificationsAsync();
  }, []);
  const _validate = () => {
    let phoneErr = validatePhone(phone);
    let passwordErr = validatePassword(password);
    return phoneErr || passwordErr;
  };

  const SubmitLoginHandler = async () => {
    const isVal = _validate();
    if (!isVal) {
      Setisloading(true);
      await dispatch(LoginActions.SignInActions(phone, password));
    } else {
      Toaster(_validate());
    }
    Setisloading(false);
  };

  return (
    <BgImage btnName="تسجيل" btnPress={() => _toRegister(navigation)}>
      <Image source={Images.logo} style={styles.image} />

      <CustomTextInput
        placeholder={i18n.t("auth.phoneNumber")}
        value={phone}
        image={Images.whitePhone}
        imageFocused={Images.bluePhone}
        onChangeText={(e) => setPhone(e)}
      />
      <InputIcon
        placeholder={i18n.t("auth.password")}
        onChangeText={(e) => setPassword(e)}
        image={Images.whiteLock}
        imageFocused={Images.blueLock}
        value={password}
      />
      <View style={styles.rowSpace}>
        <TouchableWithoutFeedback>
          <SText title={i18n.t("auth.forgetPass")} style={styles.text} />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <SText title={i18n.t("auth.guest")} style={styles.text} />
        </TouchableWithoutFeedback>
      </View>
      {isLoading ? (
        <ActivityIndicator size="small" color="red" />
      ) : (
        <Btn
          text={i18n.t("auth.loginButton")}
          btnStyle={styles.loginBtn}
          textStyle={styles.btnText}
          onPress={SubmitLoginHandler}
        />
      )}
    </BgImage>
  );
};

export { Login };
