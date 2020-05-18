import React, { useEffect } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";

import { width, Images } from "../../common";

import { _toHome } from "../../navigation/Navigator";

function PiceTextComponent({ image, label, onPress }) {
  return (
    <View>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.ImgText}>
          <View style={styles.CollText}>
            <View
              style={{
                alignItems: "center",
                backgroundColor: label == 15 ? "#0FD1FA" : null,
                borderRadius: 5,

                paddingVertical: 10,
              }}
            >
              <Text>{label} </Text>
              <Text>مايو</Text>
            </View>

            <View style={{ alignItems: "center", marginTop: 5 }}>
              <Text style={{ color: "#EAEAEA" }}>16 </Text>
              <Text style={{ color: "#EAEAEA" }}>مايو</Text>
            </View>
            <View style={{ alignItems: "center", marginTop: 5 }}>
              <Text style={{ color: "#EAEAEA" }}>17 </Text>
              <Text style={{ color: "#EAEAEA" }}>مايو</Text>
            </View>
          </View>
          <View>
            <Image source={image} style={styles.ImageStyle} />
            <View style={{ position: "absolute", justifyContent: "center" }}>
              <View
                style={{
                  alignSelf: "flex-end",
                  left: width * 0.5,
                  backgroundColor: "#CACDCF",
                  marginTop: 5,
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: width * 0.03,
                    textAlign: "center",
                  }}
                >
                  15{" "}
                </Text>
                <Text style={{ color: "white" }}>مايو</Text>
              </View>
              <View style={{ top: width * 0.2, marginStart: width * 0.06 }}>
                <Text style={{ color: "white", fontFamily: "sukar-black" }}>
                  حفله عمر خيرت
                </Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}
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
export default PiceTextComponent;
