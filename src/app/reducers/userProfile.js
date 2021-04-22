import UserProfileActionTypes from "../types/userprofile.types";

const initial_state = {};

const userProfileReducer = (state = initial_state, action) => {
  switch (action.type) {
    case UserProfileActionTypes.SET_USER_PROFILE_DATA:
      return action.payload;
    default:
      return state;
  }
};

export default userProfileReducer;
