import ApiRequest from "../../screens/api";
import { AsyncStorage } from "react-native";
import { Toaster } from "../../components/Toaster";

export const Sign_In = "Sign_In";
export const Success_Login = "Success_Login";
export const Failed_Sig_IN = "Failed_Sig_IN";
export const user_logout = "user_logout";

export const SignInActions = (phone, password, token, lang) => {
  return async (dispatch) => {
    const Response = await ApiRequest.post("login", {
      phone,
      password,
      device_id: token,
      lang,
    }).then((respone) => {
      SubmitLogin(dispatch, respone.data);
    });

    dispatch({
      type: Sign_In,
    });
  };
};

const Successedlogin = async (dispatch, data) => {
  AsyncStorage.setItem("token", JSON.stringify(data.data.token)).then(() =>
    dispatch({ type: Success_Login, data })
  );
};

const FailedLogin = (dispatch, error) => {
  dispatch({ type: Failed_Sig_IN, error });
  Toaster(
    "Ensure that the phone number and password are entered correctly",
    error.message
  );
};

const SubmitLogin = async (dispatch, data) => {
  if (data.status != 200) {
    await FailedLogin(dispatch, data);
  } else {
    await Successedlogin(dispatch, data);
  }
};

export const logout = () => {
  return async (dispatch) => {
    await ApiRequest.post("logout").then(() => AsyncStorage.clear());
    dispatch({ type: user_logout });
  };
};
