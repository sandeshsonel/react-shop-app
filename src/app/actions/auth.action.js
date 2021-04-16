import AuthActionTypes from "../types/auth.types.js";

export const setLogin = (flag) => ({
  type: AuthActionTypes.IS_LOGIN_USER,
  payload: flag,
});

export const setUserData = (data) => ({
  type: AuthActionTypes.SET_USER_DATA,
  payload: data,
});

export const signUpUser = (data) => ({
  type: AuthActionTypes.SIGN_UP_USER,
  payload: data,
});

export const signInUser = (data) => ({
  type: AuthActionTypes.SIGN_IN_USER,
  payload: data,
});

export const signOutUser = () => ({
  type: AuthActionTypes.SIGN_OUT_USER,
});
