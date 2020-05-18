import React from "react";
import Toast from "react-native-tiny-toast";
import { width, Colors } from "../../common";

const Toaster = (message) => {
  return Toast.show(message, {
    position: Toast.position.CENTER,
    containerStyle: {
      backgroundColor: "rgba(220,220,221,.85)",
      paddingHorizontal: width * 0.05,
      borderRadius: 20,
    },
    textColor: Colors.traby,
    textStyle: {
      fontFamily: "sukar-black",
      fontSize: width * 0.04,
    },
    duration: 9000,
  });
};

export { Toaster };
