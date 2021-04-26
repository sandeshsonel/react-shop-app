import UserProfileActionTypes from "../types/userprofile.types";

const initial_state = {};

const userProfileReducer = (state = initial_state, action) => {
  console.log("user-xolo", action.type);
  switch (action.type) {
    case UserProfileActionTypes.SET_USER_PROFILE_DATA:
      return action.payload;
    case "USER_SIGN_OUT_SUCCESS":
      return initial_state;
    default:
      return state;
  }
};

export default userProfileReducer;
