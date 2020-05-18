import { Register_In } from "../actions/SignIn";

const initialState = {
  msg: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Register_In:
      return { ...state, msg: action.message.msg };

    default:
      return state;
  }
};
