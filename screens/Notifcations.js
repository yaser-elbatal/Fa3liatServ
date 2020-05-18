import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Images, width } from "../common";
import TextNotficationModule from "./module/TextNotficationModule";
import { ScrollView } from "react-native-gesture-handler";

export const Notifcations = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>الاشعارات</Text>
      <View style={{ flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <TextNotficationModule image={Images.blue} />
          <TextNotficationModule image={Images.pink} />
          <TextNotficationModule image={Images.blue} />
          <TextNotficationModule image={Images.pink} />
          <TextNotficationModule image={Images.blue} />
          <TextNotficationModule image={Images.pink} />
          <TextNotficationModule image={Images.blue} />
          <TextNotficationModule image={Images.pink} />
          <TextNotficationModule image={Images.blue} />
        </ScrollView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    textAlign: "center",
    fontFamily: "sukar-black",
    fontSize: width * 0.04,
    fontWeight: "bold",
    paddingTop: width * 0.05,
  },
});
