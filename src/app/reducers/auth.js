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
    default:
      return state;
  }
};

export default authReducer;
