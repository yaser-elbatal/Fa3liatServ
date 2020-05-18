import { chooseLang } from "../actions/Language";
import { getLocale } from "../../Language/Localization";

const initalstate = {
  language: getLocale(),
};

export default (state = initalstate, action) => {
  switch (action.type) {
    case chooseLang:
      return { ...state, language: action.lang };

    default:
      return state;
  }
};
