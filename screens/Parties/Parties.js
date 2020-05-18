import React, { useEffect } from "react";
import { View, Image, Text, StyleSheet, ScrollView } from "react-native";
import { width, Images } from "../../common";
import { _toHome, _toBooking } from "../../navigation/Navigator";
import PiceTextComponent from "./PiceTextComponent";
import { useNavigation } from "@react-navigation/native";

const Parties = ({ refRBSheet2 }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView>
        <PiceTextComponent
          image={Images.part1}
          label={15}
          refRBSheet2={refRBSheet2}
          onPress={() => {
            _toBooking(navigation);

            refRBSheet2.current.close();
          }}
        />
        <PiceTextComponent image={Images.signer} label={18} />
        <PiceTextComponent image={Images.tabla} label={19} />
        <PiceTextComponent image={Images.party} label={20} />
        <PiceTextComponent image={Images.part1} label={21} />
        <PiceTextComponent image={Images.tabla} label={22} />
        <PiceTextComponent image={Images.signer} label={23} />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ImageStyle: {
    width: width / 1.2,
    height: width * 0.4,
    marginStart: 10,
  },
  ImgText: {
    flexDirection: "row",
    marginTop: 10,
  },
  CollText: {
    flexDirection: "column",
    marginStart: 15,
  },
});
export default Parties;
