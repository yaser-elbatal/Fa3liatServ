import { I18nManager, AsyncStorage } from "react-native";
import i18n from "../../Language/Localization";
import Expo, { Updates } from "expo";
import ApiRequest from "../../screens/api";

export const chooseLang = "choose_Lang";

export const changeLanguage = (lang, direction) => {
  return async (dispatch) => {
    try {
      await AsyncStorage.setItem("lang", lang, () =>
        AsyncStorage.setItem("direction", direction)
      );

      await AsyncStorage.getItem("direction", (err, res) => {
        if (res === "RTL") {
          I18nManager.forceRTL(true);
        } else {
          I18nManager.forceRTL(false);
        }
      });
      await ApiRequest.post("set_lang", {
        lang,
      });

      dispatch({
        type: chooseLang,
        lang,
        direction,
      }).then(await Updates.reload());
    } catch (e) {
      console.log("chang lang err", e);
    }
  };
};
