import React from "react";
import { ScrollView, View } from "react-native";
import { BigImage } from "./BigImgMenue";
import { TextMenueBar } from "./TextMenueBar";

const CustomDrawerMenue = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#121320",
      }}
    >
      <ScrollView>
        <BigImage />
        <TextMenueBar navigation={navigation} />
      </ScrollView>
    </View>
  );
};
export { CustomDrawerMenue };
