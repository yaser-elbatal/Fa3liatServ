import React, { useState, useRef } from "react";
import {
  View,
  Image,
  Text,
  FlatList,
  TouchableWithoutFeedback,
  StyleSheet,
} from "react-native";
import { Images, width } from "../../../common";
import { _toSports, _toArt } from "../../../navigation/Navigator";

const ImageType = ({ navigation }) => {
  const refRBSheet = useRef();
  const refRBSheet2 = useRef();

  const [items, SetItems] = useState([
    {
      image: Images.birthday,
      title: "اعياد ميلاد",
    },
    {
      image: Images.party,
      title: "حفالات",
    },
    {
      image: Images.sports,
      title: "رياضه",
      onPress: () => {
        _toSports(navigation, {
          refRBSheet: refRBSheet,
        });
      },
    },
    {
      image: Images.art,
      title: "فن",
      onPress: () => {
        _toArt(navigation, {
          refRBSheet: refRBSheet2,
        });
      },
    },
    {
      image: Images.rest,
      title: "مطاعم",
    },
    {
      image: Images.birth,
      title: "ترفيهات",
    },
  ]);
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        numColumns={2}
        keyExtractor={(item, index) => index}
        renderItem={(item) => (
          <View style={styles.wrap}>
            <View style={styles.line}></View>
            <TouchableWithoutFeedback onPress={item.item.onPress}>
              <View>
                <Image source={item.item.image} style={styles.image} />
                <View style={styles.imgopacity}>
                  <Text style={styles.Textstyle}>{item.item.title}</Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        )}
      />
      <View style={{ marginTop: width * 0.1 }}></View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: width,
  },
  wrap: { marginTop: width * 0.02, marginLeft: width * 0.05 },
  line: {
    height: 2,
    width: 50,
    backgroundColor: "#E51D6F",
    left: width / 7,
  },
  image: {
    height: 155,
    width: 155,
    borderTopWidth: 95,
    borderColor: "#D71C6A",
  },
  imgopacity: {
    width: width * 0.44,
    height: 50,
    backgroundColor: "#11121E",
    opacity: 0.9,
    position: "absolute",
    bottom: 0,
    left: 0,
  },
  Textstyle: {
    color: "white",
    fontFamily: "sukar-black",
    textAlign: "center",
    top: width * 0.036,
    opacity: 0.5,
  },
});
export { ImageType };
