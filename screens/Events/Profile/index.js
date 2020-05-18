import React from "react";
import { BgImageProfile } from "../../../components";
import { View } from "react-native";
import { BottomNavigator } from "../../../common";
import { ProfileForm } from "./ProfileForm";
export const Profile = () => {
  return (
    <View style={{ flex: 1 }}>
      <BgImageProfile />
      <ProfileForm />
      <BottomNavigator />
    </View>
  );
};
