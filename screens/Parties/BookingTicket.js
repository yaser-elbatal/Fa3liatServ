import React from "react";
import { View, Image, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Images, width, height } from "../../common";
import { _toHome, _PartY } from "../../navigation/Navigator";
import { AText } from "../../components/CornerBtn/Text";

const BookingTicket = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapp}>
        <Image source={Images.part1} style={styles.imgBackg} />
        <View style={{ position: "absolute" }}>
          <View style={styles.content}>
            <TouchableOpacity onPress={() => _toHome(navigation)}>
              <Image source={Images.right} style={styles.imgStyle} />
            </TouchableOpacity>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                top: width * 0.5,
                opacity: 0.7,
                alignItems: "center",
                width: width * 0.2,
                marginHorizontal: 5,
              }}
            >
              <View
                style={{
                  backgroundColor: "#126D82",
                  padding: 10,
                  marginHorizontal: 5,
                }}
              >
                <Text style={{ color: "white" }}>15</Text>
                <Text style={{ color: "white" }}>مايو</Text>
              </View>
              <View style={{ backgroundColor: "#9C446E", padding: 10 }}>
                <Text style={{ color: "white" }}>13س</Text>
                <Text style={{ color: "white" }}>متبقي</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.ChildContainer}>
          <View style={styles.wrap}>
            <View style={styles.fViewSt}>
              <Text style={styles.texstyle}>حفله عمر خيرت</Text>

              <Text style={styles.pricStyle}>1500رس</Text>
            </View>
            <View style={styles.ViewStyle}>
              <Image source={Images.clock} style={styles.ImgStyle} />
              <Text style={styles.TeStyle}>10 مساء</Text>
            </View>
            <View style={styles.ViewStyle}>
              <Image source={Images.calender} style={styles.ImgStyle} />
              <Text style={styles.TeStyle}>17/4/2019 </Text>
            </View>
            <View style={styles.ViewStyle}>
              <Image source={Images.location} style={styles.ImgStyle} />
              <Text style={styles.TeStyle}>الرياض-شارع التخصصي</Text>
            </View>
            <View style={styles.ViewStyle}>
              <Image source={Images.gray} style={styles.ImgStyle} />
              <Text style={styles.TeStyle}>حجز اون لاين</Text>
            </View>
            <View
              style={{
                borderWidth: 1,
                marginTop: 15,
                borderColor: "#F9F9F9",
                borderStyle: "dotted",
              }}
            ></View>
            <View style={styles.ViewStyle}>
              <Text style={styles.TeStyle}>قم بعمليه مسح لكود QR</Text>
            </View>
            <Image
              source={Images.QR}
              style={{ width: 80, height: 100, marginStart: 15 }}
            />
            <TouchableOpacity
              onPress={() => {
                _toHome(navigation);
              }}
            >
              <View style={styles.ViewBtn}>
                <AText title="حذف التذكره" style={styles.text2} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapp: {
    position: "absolute",
  },
  imgBackg: {
    width: width,
    height: height,
    resizeMode: "stretch",
  },
  content: {
    flexDirection: "column",
    marginTop: width * 0.05,
    marginLeft: width * 0.04,
  },
  imgStyle: {
    width: 17,
    height: 17,
  },
  textStyleS: {
    color: "white",
    fontSize: width * 0.05,
    fontFamily: "sukar-black",
    left: width / 3.5,
  },

  ChildContainer: {
    backgroundColor: "white",
    borderTopRightRadius: 100,
    top: width * 0.8,
    width: width,
    flex: 1,
    position: "absolute",
    height: height,
  },

  viewStyle: {
    paddingTop: 30,
    position: "absolute",
    width: width,
    backgroundColor: "white",
    borderTopRightRadius: 100,
    marginTop: width * 0.1,
  },

  texStyle: {
    textAlign: "center",
    color: "#EA5050",
    fontSize: 15,
    fontFamily: "sukar-black",
  },
  wrap: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderTopRightRadius: 100,
    top: width * 0.01,
    width: width,
    position: "absolute",
    height: height,
  },
  fViewSt: {
    flexDirection: "row",
    marginTop: 10,
    marginStart: 10,
  },

  texstyle: {
    fontSize: width * 0.04,
    fontFamily: "sukar-black",
  },
  STexStyle: {
    fontSize: width * 0.04,
    fontFamily: "sukar-black",
    color: "#D8D8DA",
    marginStart: 5,
  },
  pricStyle: {
    color: "#F190B6",
    fontFamily: "sukar-black",
    marginStart: width * 0.3,
  },
  ViewStyle: {
    flexDirection: "row",
    marginTop: 10,
    marginStart: 10,
  },
  ImgStyle: {
    width: 14,
    height: 14,
    marginTop: 2,
  },
  TeStyle: {
    fontSize: width * 0.04,
    fontFamily: "sukar-black",
    color: "#D8D8DA",
    marginStart: 5,
  },

  ViewBtn: {
    bottom: -15,
    start: -2,
    borderColor: "#EE6D6D",
    borderWidth: width * 0.005,
    borderTopEndRadius: width * 0.05,
    backgroundColor: "white",
    width: width * 0.5,
  },
  text2: {
    paddingVertical: width * 0.04,
    paddingHorizontal: width * 0.06,
    color: "#EE6D6D",
    textAlign: "center",
  },
});

export default BookingTicket;
