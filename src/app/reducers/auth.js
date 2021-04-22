import AuthActionTypes from "../types/auth.types";

const initial_state = {
  isLogin: false,
  token: "",
  expireDate: "",
};

const authReducer = (state = initial_state, action) => {
  switch (action.type) {
    case AuthActionTypes.IS_LOGIN_USER:
      return {
        ...state,
        isLogin: action.payload,
      };
    case AuthActionTypes.SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };
    case AuthActionTypes.USER_SIGN_OUT_SUCCESS:
      return {
        ...state,
        islogin: false,
        token: "",
        expireDate: "",
      };
    default:
      return state;
  }
};

export default authReducer;
