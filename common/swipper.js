import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Swiper from "react-native-swiper";
import { Images } from "../common";
import RBSheet from "react-native-raw-bottom-sheet";
import { Notifcations } from "../screens/Notifcations";

const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");

const styles = {
  wrapper: {
    flex: 1,
  },

  slide: {
    flex: 1,
    justifyContent: "center",
    height: height * 0.3,
    position: "relative",
  },
  image: {
    flex: 1,
    borderBottomLeftRadius: width * 0.2,
    width,
  },
};

const Slide = (props) => {
  return (
    <View style={styles.slide}>
      <Image style={styles.image} source={props.uri} />
    </View>
  );
};

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgList: [Images.Slider],
      loadQueue: [0, 0, 0, 0],
    };
  }

  render() {
    const { navigation } = this.props;

    return (
      <View style={styleg.container}>
        <Swiper autoplay height={height * 0.2}>
          {this.state.imgList.map((item, i) => (
            <Slide uri={item} i={i} key={i} />
          ))}
        </Swiper>

        <View style={styleg.wrap}>
          <View style={styleg.pic}>
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
              <Image source={Images.menue} style={styleg.imageStyl} />
            </TouchableOpacity>
          </View>
          <View style={styleg.viewImg}>
            <TouchableOpacity
              onPress={() => {
                this.RBSheet.open();
              }}
            >
              <Image source={Images.notification} style={styleg.imageStyl} />
            </TouchableOpacity>
          </View>

          <RBSheet
            ref={(ref) => {
              this.RBSheet = ref;
            }}
            closeOnDragDown={false}
            closeOnPressMask={true}
            closeOnPressBack={true}
            animationType="slide"
            duration={100}
            customStyles={{
              container: {
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
                flex: 10,
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
            <Notifcations />
          </RBSheet>
        </View>
      </View>
    );
  }
}

const styleg = StyleSheet.create({
  container: { height: height * 0.3 },
  wrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    position: "absolute",
  },
  pic: {
    alignItems: "flex-end",
    marginTop: width * 0.03,
    marginLeft: width * 0.03,
  },
  imageStyl: {
    width: width * 0.07,
    height: height * 0.03,
    resizeMode: "stretch",
    opacity: 0.5,
  },
  viewImg: {
    marginLeft: width * 0.8,
    marginTop: width * 0.03,
  },
});
