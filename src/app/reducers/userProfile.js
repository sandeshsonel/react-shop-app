const initial_state = {
  firstName: "",
  lastName: "",
};

const userProfileReducer = (state = initial_state, action) => {
  switch (action.type) {
    case "IS_LOGIN_USER":
      return {
        ...state,
        isLogin: action.payload,
      };
    default:
      return state;
  }
};

export default userProfileReducer;
