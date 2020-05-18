import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import { Images, height, width } from "../../common";
import { SliderBox } from "react-native-image-slider-box";
import { BtnOk } from "../../components/CornerBtn/BtnOk";
import { _toArt } from "../../navigation/Navigator";

function SliderSIgner({ navigation }) {
  return (
    <View style={styles.container}>
      <SliderBox
        images={[
          Images.signer,
          Images.tabla,
          Images.signer,
          Images.tabla,
          Images.signer,
        ]}
        sliderBoxHeight={200}
        dotColor="#0D5D95"
        inactiveDotColor="#918C99"
        dotStyle={{
          width: 5,
          height: 5,
          borderRadius: 5,
          marginBottom: 100,
        }}
        resizeMode="cover"
        sliderBoxHeight={400}
      />
      <View
        style={{
          position: "absolute",
          flexDirection: "row",
          marginTop: width * 0.06,
        }}
      >
        <View style={{ marginStart: 10 }}>
          <TouchableWithoutFeedback onPress={() => _toArt(navigation)}>
            <Image source={Images.right} style={styles.Img} />
          </TouchableWithoutFeedback>
        </View>
        <View
          style={{
            flexDirection: "row",
            left: width * 0.7,
          }}
        >
          <Image source={Images.sav} style={styles.Img} />
          <View style={{ left: width * 0.03 }}>
            <Image source={Images.share} style={styles.Img} />
          </View>
        </View>
      </View>
      <View style={styles.wrap}>
        <View style={styles.fViewSt}>
          <Text style={styles.texstyle}>حفله عمر خيرت</Text>
          <View style={styles.point}></View>
          <Text style={styles.STexStyle}>متاح</Text>

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
          <View style={styles.pointStyle}></View>

          <Text style={styles.TallText}>
            هذا النص هو مثال لنص يمكن ان يستدل بنفس المساحه لقد تم توليد هذا
            النص من مولد
          </Text>
        </View>
        <View style={{ top: width * 0.59 }}>
          <BtnOk btnName="حجز" btnPress={() => _toArt(navigation)} />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
  },
  wrap: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderTopRightRadius: 100,
    top: width * 0.85,
    width: width,
    position: "absolute",
    height: height,
  },
  fViewSt: {
    flexDirection: "row",
    marginTop: 10,
    marginStart: 10,
  },
  point: {
    width: 10,
    height: 10,
    backgroundColor: "#A6D958",
    borderRadius: 10,
    marginTop: 5,
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
    marginStart: width * 0.2,
  },
  ViewStyle: {
    flexDirection: "row",
    marginTop: 5,
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
  pointStyle: {
    width: 5,
    height: 5,
    backgroundColor: "#B4B4B4",
    borderRadius: 10,
    marginTop: 5,
    marginStart: 5,
  },
  TallText: {
    fontSize: width * 0.035,
    fontFamily: "sukar-black",
    color: "#D8D8DA",
    marginStart: 5,
  },
  Img: { width: 20, height: 20, opacity: 0.5 },
});

export default SliderSIgner;
