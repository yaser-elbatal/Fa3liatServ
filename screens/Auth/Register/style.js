import { StyleSheet } from "react-native";
import { Colors, width } from "../../../common";

const styles = StyleSheet.create({
  image: {
    width: width * 0.4,
    height: width * 0.4,
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: width * 0.1
  },
  loginBtn: {
    width: "50%",
    marginTop: width * 0.1,
    marginBottom: width * 0.2
  }
});

export default styles;
