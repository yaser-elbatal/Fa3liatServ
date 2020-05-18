import React from "react";
import { View, Image, Text, ScrollView, StyleSheet } from "react-native";

export default function TextNotficationModule({ image }) {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <Image source={image} style={styles.Img} />
        <Text style={{ left: 5 }}>رساله من لوحه التحكم</Text>
      </View>

      <Text style={styles.textClock}>3:00 مساء</Text>
      <View style={styles.content}>
        <Text style={styles.tallText}>
          هذا النص هو مثال لنص يمكن ان يستدل بنفس المساحه لقد تم توليد هذا النص
          من مولد
        </Text>
      </View>
      <View style={styles.lineStyle}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingStart: 21,
    marginBottom: 5,
    top: 10,
    flex: 1,
  },
  Img: {
    width: 22,
    height: 20,
  },
  lineStyle: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#F8F8F8",
    marginBottom: 5,
  },
  textClock: {
    left: 280,
    top: -25,
  },
  content: {
    bottom: 20,
    paddingStart: 20,
  },
  tallText: { fontSize: 12, opacity: 0.5 },
});
