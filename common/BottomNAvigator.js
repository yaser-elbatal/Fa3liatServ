import React, { useRef, useState, useEffect } from "react";
import { View, TouchableOpacity, Image, StyleSheet, Text } from "react-native";
import {
  _toHome,
  _toLogin,
  _toProfileRegister,
  _toParties,
} from "../navigation/Navigator";
import { useNavigation } from "@react-navigation/native";
import RBSheet from "react-native-raw-bottom-sheet";
import { height, width, Images } from "../common";
import { SearchBottom } from "../screens/search";
import Parties from "../screens/Parties/Parties";

export const BottomNavigator = () => {
  const [selected, setSelected] = useState(1);
  const navigation = useNavigation();
  const refRBSheet = useRef();
  const refRBSheet2 = useRef();

  return (
    <View style={styles.cnotainer}>
      <TouchableOpacity
        onPress={() => {
          _toHome(navigation);
        }}
      >
        <Image source={Images.bhome} style={styles.image} />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          refRBSheet2.current.open();
        }}
      >
        <Image source={Images.gray} style={styles.image} />
      </TouchableOpacity>

      <RBSheet
        ref={refRBSheet2}
        closeOnDragDown={true}
        closeOnPressMask={true}
        closeOnPressBack={true}
        onOpen={() => {
          _toHome(navigation);
        }}
        // onClose={() => {
        //   _toHome(navigation);
        // }}
        animationType="slide"
        customStyles={{
          container: {
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            flex: 1,
            top: width * 0.3,
            position: "absolute",
            height: height / 1.36,
          },
          wrapper: {
            backgroundColor: "transparent",
          },
          draggableIcon: {
            backgroundColor: "#EF659C",
            width: 50,
            bottom: 10,
          },
        }}
      >
        <Parties refRBSheet2={refRBSheet2} />
      </RBSheet>

      <TouchableOpacity
        style={{ elevation: 0 }}
        onPress={() => {
          _toHome(navigation);

          refRBSheet.current.open();
        }}
      >
        <Image source={Images.search} style={styles.image} />
      </TouchableOpacity>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        closeOnPressBack={true}
        animationType="slide"
        duration={100}
        customStyles={{
          container: {
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            flex: 2,
            position: "absolute",
            top: width * 0.8,
            height: width * 0.9,
          },
          wrapper: {
            backgroundColor: "transparent",
          },
          draggableIcon: {
            backgroundColor: "#EF659C",
            width: 50,
            bottom: 10,
          },
        }}
      >
        <SearchBottom />
      </RBSheet>

      <TouchableOpacity onPress={() => setSelected(4)}>
        <Image source={Images.save} style={styles.image} />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          _toProfileRegister(navigation);
        }}
      >
        <Image source={Images.profile} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cnotainer: {
    flexDirection: "row",
    bottom: 0,
    backgroundColor: "#121320",
    justifyContent: "space-around",
    borderWidth: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    width: width,
    padding: width * 0.03,
  },
  image: {
    width: width * 0.06,
    height: width * 0.06,
    resizeMode: "stretch",
    alignSelf: "center",
  },
  MainContainer: {
    flex: 1,
    margin: 2,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Platform.OS === "ios" ? 20 : 0,
    backgroundColor: "#E0F7FA",
  },
  bottomNavigationView: {
    backgroundColor: "#fff",
    width: "100%",
    height: 250,
    justifyContent: "center",
    alignItems: "center",
  },
});
