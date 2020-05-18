import React from "react";
import { View, Text } from "react-native";
import SliderSIgner from "./SliderSIgner";

const PartyDet = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <SliderSIgner navigation={navigation} />
    </View>
  );
};

export default PartyDet;
