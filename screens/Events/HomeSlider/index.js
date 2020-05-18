import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import Swipper from "../../../common/swipper";
import { ImageType } from "../cats";
import { BottomNavigator } from "../../../common";
import Constants from "expo-constants";

const Home = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Swipper navigation={navigation} />
      <ImageType navigation={navigation} />
      <BottomNavigator />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121320",
    paddingTop: Constants.statusBarHeight,
  },
});
export { Home };
