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

// export const signUpUserSuccess = (data) => ({
//   type: AuthActionTypes.SIGN_UP_USER_SUCCESS,
//   payload: data,
// });

// export const signUpUserFailed = (error) => ({
//   type: AuthActionTypes.SIGN_UP_USER_FAILED,
//   payload: error,
// });
// // -------------signUpUser-------------//

// // -------------signINUser-------------//
// export const signInUserStart = () => ({
//   type: AuthActionTypes.SIGN_IN_USER_START,
// });
// export const signInUserSuccess = (data) => ({
//   type: AuthActionTypes.SIGN_IN_USER_SUCCESS,
//   payload: data,
// });
// export const signInUserFailed = (error) => ({
//   type: AuthActionTypes.SIGN_IN_USER_FAILED,
//   payload: error,
// });
// //
