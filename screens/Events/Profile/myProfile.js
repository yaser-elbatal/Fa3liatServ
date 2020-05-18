import React from "react";
import { BgImagemyProfile } from "../../../components/BigImgMyprofile";
import { View } from "react-native";
import { MyProfileForm } from "../../../components/MyprofileForm";

const myProfile = () => {
  return (
    <View>
      <BgImagemyProfile />
      <MyProfileForm />
    </View>
  );
};
export { myProfile };
