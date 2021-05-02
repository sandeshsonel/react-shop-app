import storage from "redux-persist/lib/storage";
import AuthActionTypes from "../types/auth.types";

const initial_state = {
  isLogin: false,
  token: "",
  expireDate: "",
  isLoading: false,
};

const authReducer = (state = initial_state, action) => {
  if (action.type === "USER_SIGN_OUT_SUCCESS") {
    storage.removeItem("persist:root");
  }
  switch (action.type) {
    case AuthActionTypes.IS_LOGIN_USER:
      return {
        ...state,
        isLogin: action.payload,
      };
    case AuthActionTypes.USER_SIGN_OUT_SUCCESS:
      return {
        ...state,
        isLogin: false,
        token: "",
        expireDate: "",
      };
    case AuthActionTypes.SIGN_IN_USER:
      return {
        ...state,
        isLoading: true,
      };
    case AuthActionTypes.SIGN_IN_USER_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isLoading: false,
      };
    case AuthActionTypes.SIGN_IN_USER_FAILED:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default authReducer;
