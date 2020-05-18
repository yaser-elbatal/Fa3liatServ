import React, { useState } from "react";
import { Image, ActivityIndicator, AsyncStorage } from "react-native";
import { BgImage } from "../../../components";
import { Images } from "../../../common";
import styles from "./style";
import { InputIcon, Btn } from "../../../components";
import { _toLogin, _toActivation } from "../../../navigation/Navigator";
import { CustomTextInput } from "../../../components/TextOverBorder/InputText";
import { useDispatch, useSelector } from "react-redux";
import * as RegisterReducer from "../../../store/actions/Register";
import {
  validateUserName,
  validateEmail,
  validatePhone,
  validatePassword,
  validateTwoPasswords,
} from "../../../components/Validations";
import { Toaster } from "../../../components/Toaster";

const Register = ({ navigation }) => {
  const [userName, setUserName] = useState("أوامر الشبكة");
  const [phone, SetPhone] = useState();
  const [email, setemail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState("");
  const [token, setToken] = useState(
    AsyncStorage.getItem("token", (err, res) => setToken(res))
  );

  const [isLoading, Setisloading] = useState(false);
  const isAuth = useSelector((state) => state.Register.REgister);

  const dispatch = useDispatch();
  const Lang = useSelector((state) => state.Lang.language);

  const _validate = () => {
    return (
      validateUserName(userName) ||
      validateEmail(email) ||
      validatePhone(phone) ||
      validatePassword(password) ||
      validateTwoPasswords(password, confirmPassword)
    );
  };

  const HandleRegister = async () => {
    const isVal = _validate();
    let DeviceId = await AsyncStorage.getItem("deviceID");
    let Language = await AsyncStorage.getItem("lang");

    if (isVal) return Toaster(_validate());
    else {
      Setisloading(true);
      await dispatch(
        RegisterReducer.RegisterActions(
          userName,
          phone,
          email,
          password,
          Language,
          DeviceId,
          navigation
        )
      );
    }
    Setisloading(false);
  };

  return (
    <BgImage btnName="دخول" btnPress={() => _toLogin(navigation)}>
      <Image source={Images.logo} style={styles.image} />

      <CustomTextInput
        placeholder={"اسم المستخدم"}
        onChangeText={(e) => setUserName(e)}
        value={userName}
        image={Images.whiteProfile}
        imageFocused={Images.blueProfile}
      />
      <InputIcon
        placeholder={"رقم الجوال"}
        onChangeText={(e) => SetPhone(e)}
        value={phone}
        image={Images.whitePhone}
        imageFocused={Images.bluePhone}
      />
      <InputIcon
        placeholder={"البريد الالكتروني"}
        onChangeText={(e) => setemail(e)}
        value={email}
        image={Images.whiteEmail}
        imageFocused={Images.blueEmail}
      />
      <InputIcon
        placeholder={"كلمة المرور"}
        onChangeText={(e) => setPassword(e)}
        value={password}
        image={Images.whiteLock}
        imageFocused={Images.blueLock}
      />
      <InputIcon
        placeholder={"تأكيد كلمة المرور"}
        onChangeText={(e) => setConfirmPassword(e)}
        value={confirmPassword}
        image={Images.whiteLock}
        imageFocused={Images.blueLock}
      />
      {isLoading ? (
        <ActivityIndicator size="small" color="red" />
      ) : (
        <Btn
          text={"تسجيل"}
          btnStyle={styles.loginBtn}
          textStyle={styles.btnText}
          onPress={HandleRegister}
        />
      )}
    </BgImage>
  );
};

export { Register };
