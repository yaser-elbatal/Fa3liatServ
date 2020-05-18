import I18n from "../Language/Localization";
export const validatePhone = (phone) =>
  phone.length < 9 ? I18n.t("validate.phoneError") : null;

export const validatePassword = (password) =>
  password.length < 6 ? I18n.t("validate.passwordError") : null;

export const validateEmail = (email) => {
  let mailReg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  return !mailReg.test(String(email).toLowerCase())
    ? I18n.t("validate.emailError")
    : null;
};
export const validateUserName = (userName) =>
  userName.length < 1 ? I18n.t("validate.userNameError") : null;

export const validateTwoPasswords = (password, confirmPassword) => {
  return password != confirmPassword
    ? I18n.t("validate.passwordNotConfirmed")
    : null;
};

export const validateCode = (code) =>
  code.length < 4 ? I18n.t("validate.codeLengthError") : null;
