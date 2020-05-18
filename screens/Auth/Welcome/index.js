import React, { useEffect } from "react";
import { Image, I18nManager, AsyncStorage } from "react-native";
import { BgImage } from "../../../components";
import { Images } from "../../../common";
import styles from "./style";
import { CircleBtn } from "./CircleBtn";
import { _toLogin } from "../../../navigation/Navigator";
import { useDispatch } from "react-redux";
import * as LangReducer from "../../../store/actions/Language";
import { Updates } from "expo";

const Welcome = ({ navigation }) => {
  const dispatch = useDispatch();

  const goLogin = async (lang, direction) => {
    await dispatch(LangReducer.changeLanguage(lang, direction));

    navigation.navigate("Login");
  };
  useEffect(() => {
    const direction = AsyncStorage.getItem("direction");
    if (direction) {
      navigation.navigate("Login");
    }
  }, []);

  return (
    <BgImage>
      <Image source={Images.logo} style={styles.image} />
      <CircleBtn
        title="الإنجليزية"
        style={styles.fCircle}
        onPress={() => goLogin("en", "LTR")}
      />
      <CircleBtn
        selected
        title="العربية"
        style={styles.sCircle}
        onPress={() => goLogin("ar", "RTL")}
      />
    </BgImage>
  );
};

export { Welcome };
