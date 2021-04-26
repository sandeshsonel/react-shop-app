import ShopActionTypes from "../types/shop.types";

export const setSnackbarVisible = (flag) => ({
  type: ShopActionTypes.SET_SNACBAR_VISIBLE,
  payload: flag,
});

export const setRoute = (route) => ({
  type: ShopActionTypes.SET_MY_ROUTE,
  payload: route,
});
