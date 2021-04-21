import CartActionType from "../types/cart.types";
import { addItemToCart } from "../utils/cart.utils";

const initial_state = {
  cart: [],
};

const cartReducer = (state = initial_state, action) => {
  console.log("xolo-action", action.payload);
  switch (action.type) {
    case CartActionType.ADD_ITEM_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case CartActionType.REMOVE_ITEM_TO_CART:
      return {
        ...state,
        cart: state.cart.filter((cart) => action.payload !== cart._id),
      };
    case CartActionType.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default cartReducer;
