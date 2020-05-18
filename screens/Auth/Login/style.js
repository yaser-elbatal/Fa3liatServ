import { StyleSheet } from "react-native";
import { Colors, width } from "../../../common";

const styles = StyleSheet.create({
  image: {
    width: width * 0.4,
    height: width * 0.4,
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: width * 0.18
  },
  rowSpace: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "80%",
    alignSelf: "center",
    marginTop: width * 0.02
  },
  text: { color: Colors.text, fontSize: width * 0.036 },
  loginBtn: {
    width: "50%",
    marginTop: width * 0.1
  }
});

export default styles;
