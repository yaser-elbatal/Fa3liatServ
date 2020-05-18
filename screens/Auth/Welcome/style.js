import { StyleSheet } from "react-native";
import { Colors, width } from "../../../common";

const styles = StyleSheet.create({
  image: {
    width: width * 0.4,
    height: width * 0.4,
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: width * 0.25
  },
  fCircle: {
    marginStart: width * 0.18,
    marginTop: width * 0.12
  },
  sCircle: {
    alignSelf: "flex-end",
    marginEnd: width * 0.18,
    marginTop: -width * 0.08
  }
});

export default styles;
