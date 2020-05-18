import React from "react";
import {
  View,
  Image,
  Text,
  TouchableWithoutFeedback,
  ScrollView,
  StyleSheet,
} from "react-native";
import { width, height } from "../../common";
import { Spooorts } from "../Events/sports/Spooorts";

const EventsModule = ({
  IconRight,
  IconLeft,
  eventTypeImage,
  label,
  RightImage,
  onPress,
  typeText,
  RightImg,
  onPress2,
}) => {
  return (
    <View style={{ position: "absolute", flex: 1 }}>
      <View style={{ backgroundColor: "#121320" }}>
        <View style={styles.container}>
          <View>
            <TouchableWithoutFeedback onPress={onPress}>
              <Image source={IconRight} style={styles.imgStyle} />
            </TouchableWithoutFeedback>
          </View>
          <Text style={styles.TextStyle}>{typeText}</Text>
          <Image source={IconLeft} style={styles.imgStyle} />
        </View>
        <View style={styles.content}>
          <View style={styles.lineStyle}></View>
          <View style={{ flex: 1 }}>
            <View style={{ alignItems: "center", marginTop: height * 0.03 }}>
              <Image source={eventTypeImage} style={styles.imgType} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
              <Spooorts
                label={label}
                RightImage={RightImage}
                onPress2={onPress2}
              />
              <Spooorts label={label} RightImage={RightImg} />
              <Spooorts label={label} RightImage={RightImage} />
              <Spooorts label={label} RightImage={RightImg} />
              <Spooorts label={label} RightImage={RightImage} />
              <Spooorts label={label} RightImage={RightImg} />
              <Spooorts label={label} RightImage={RightImage} />
              <Spooorts label={label} RightImage={RightImg} />
              <Spooorts label={label} RightImage={RightImage} />
            </ScrollView>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: "#121320",
    padding: width * 0.03,
    height: height,
    width: width,
  },
  content: {
    flex: 1,
    backgroundColor: "white",
    height: height,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    top: width * 0.11,
    width: width,
    position: "absolute",
    paddingBottom: width / 5,
  },
  imgStyle: {
    width: 20,
    height: 20,
  },
  TextStyle: {
    color: "white",
    fontFamily: "sukar-black",
    fontSize: width * 0.05,
  },
  lineStyle: {
    width: width / 5,
    height: 3,
    backgroundColor: "#EF659C",
    alignSelf: "center",
    position: "absolute",
  },
  imgType: {
    width: width * 0.2,
    height: height * 0.1,
  },
});
export default EventsModule;
