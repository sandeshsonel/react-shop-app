import ShopActionTypes from "../types/shop.types";

const initial_state = {
  showSnackbar: false,
  myRoute: "/",
};

const shopReducer = (state = initial_state, action) => {
  console.log("nono", action);
  switch (action.type) {
    case ShopActionTypes.SET_SNACBAR_VISIBLE:
      return {
        ...state,
        showSnackbar: action.payload,
      };
    case ShopActionTypes.SET_MY_ROUTE:
      return {
        ...state,
        myRoute: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
