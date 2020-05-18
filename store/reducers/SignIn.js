import {
  Sign_In,
  Success_Login,
  Failed_Sig_IN,
  user_logout,
} from "../actions/SignIn";

const initialState = {
  user: null,
  logedIN: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Sign_In:
      return { ...state };
    case Success_Login:
      return { ...state, user: action.data, logedIN: true };

    case Failed_Sig_IN:
      return { ...state, user: action.error };
    case user_logout:
      return { ...state, ...initialState };
    default:
      return state;
  }
};
