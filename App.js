import React, { useState, useEffect } from "react";
import i18n from "./Language/Localization";

import {
  Platform,
  StatusBar,
  StyleSheet,
  View,
  AsyncStorage,
} from "react-native";
import { SplashScreen } from "expo";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import AuthNav from "./navigation";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import { Provider, useSelector } from "react-redux";
import AuthenticationReducer from "./store/reducers/SignIn";
import RegisterReducer from "./store/reducers/Register";

import LangReducer from "./store/reducers/Language";

export default function App(props) {
  AsyncStorage.getItem("lang").then((lang) => {
    i18n.locale = lang ? lang : "en";
  });

  const [isLoadingComplete, setLoadingComplete] = useState(false);

  const RootReducer = combineReducers({
    Lang: LangReducer,
    Auth: AuthenticationReducer,
    Register: RegisterReducer,
  });
  const store = createStore(RootReducer, applyMiddleware(ReduxThunk));

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          "sukar-black": require("./assets/fonts/sukar-black.ttf"),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === "ios" && <StatusBar barStyle="dark-content" />}
        {Platform.OS != "ios" && <StatusBar />}

        <Provider store={store}>
          <AuthNav />
        </Provider>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
