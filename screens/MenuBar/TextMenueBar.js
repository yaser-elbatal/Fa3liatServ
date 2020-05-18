import React, { useContext } from "react";
import { View } from "react-native";
import { Images, width } from "../../common";
import TextModule from "./TextModule";
import {
  _toHome,
  _toArt,
  _toApoutApp,
  _toTermsCondition,
  toContactUs,
  _toSettings,
  _toLogin,
} from "../../navigation/Navigator";
import * as LoginActions from "../../store/actions/SignIn";
import { useDispatch } from "react-redux";

const TextMenueBar = ({ navigation }) => {
  const dispatch = useDispatch();

  const LogoutHandle = async () => {
    await dispatch(LoginActions.logout());
    // navigation.navigate("Login");
  };

  return (
    <View>
      <TextModule
        label="الرئيسيه"
        image={Images.home}
        onPress={() => _toHome(navigation)}
      />
      <TextModule
        label="الهيئات"
        image={Images.filter}
        onPress={() => _toArt(navigation)}
      />
      <TextModule
        label="عن التطبيق"
        image={Images.about}
        onPress={() => _toApoutApp(navigation)}
      />

      <TextModule label="مشاركه التطبيق" image={Images.share} />

      <TextModule
        label=" احكام وشروط"
        image={Images.terms}
        onPress={() => _toTermsCondition(navigation)}
      />
      <TextModule
        label="اتصل بنا"
        image={Images.contactUs}
        onPress={() => toContactUs(navigation)}
      />
      <TextModule
        label="اعدادات"
        image={Images.setting}
        onPress={() => _toSettings(navigation)}
      />
      <TextModule
        label="تسجيل خروج"
        image={Images.logout}
        onPress={LogoutHandle}
      />
    </View>
  );
};
export { TextMenueBar };
