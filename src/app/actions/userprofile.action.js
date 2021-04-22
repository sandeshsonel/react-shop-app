import UserProfileActionTypes from "../types/userprofile.types";

export const setUserProfileData = (userData) => ({
  type: UserProfileActionTypes.SET_USER_PROFILE_DATA,
  payload: userData,
});
