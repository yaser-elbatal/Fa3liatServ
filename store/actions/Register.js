export const Register_In = "Register_In";
export const Success_REgister = "Success_REgister";
export const Failed_Register = "Failed_Register";
import ApiRequest from "../../screens/api";
import { Toaster } from "../../components/Toaster";
import { AsyncStorage } from "react-native";

export const RegisterActions = (
  name,
  phone,
  email,
  password,
  lang,
  device_id,
  navigation
) => {
  return async (dispatch) => {
    await ApiRequest.post("register", {
      name,
      phone,
      email,
      password,
      lang,
      device_id,
    })
      .then((response) => {
        console.log(response);
        console.log("message", response.data.msg);

        dispatch({
          type: Register_In,
          message: response.data,
        });

        if (response.data.status === 200) {
          navigation.navigate("Activation", {
            codeActivate: response.data.data.code,
          });
        } else {
          Toaster("somthing went error " + response.data.msg);
        }
      })
      .catch((error) => {
        console.log("ErrorRegister" + error + "ErrorResponse" + error.data.msg);
        Toaster(
          "Ensure that the phone number and password not enter before" +
            error.data.msg
        );
      });
  };
};
