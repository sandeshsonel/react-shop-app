import storage from "redux-persist/lib/storage";
import UserProfileActionTypes from "../types/userprofile.types";

const initial_state = {};

const userProfileReducer = (state = initial_state, action) => {
  if (action.type === "USER_SIGN_OUT_SUCCESS") {
    storage.removeItem("persist:root");
  }
  switch (action.type) {
    case UserProfileActionTypes.SET_USER_PROFILE_DATA:
      return action.payload;
    case "USER_SIGN_OUT_SUCCESS":
      return {};
    default:
      return state;
  }
};

export default userProfileReducer;
