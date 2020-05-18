import React, { useState } from "react";

import { DrwerNAv, AuthNavigator } from "./AuthStack";
import { useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { AsyncStorage } from "react-native";

export default () => {
  const isAuth = useSelector((state) => state.Auth.logedIN);

  const [token, setToken] = useState(
    AsyncStorage.getItem("token", (err, res) => setToken(res))
  );

  return (
    <NavigationContainer>
      {token ? <DrwerNAv /> : <AuthNavigator />}
    </NavigationContainer>
  );
};
