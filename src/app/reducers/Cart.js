import CartActionType from "../types/cart.types";
import { addItemToCart } from "../utils/cart.utils";

const initial_state = {
  cart: [],
};

const cartReducer = (state = initial_state, action) => {
  switch (action.type) {
    case CartActionType.ADD_ITEM_TO_CART:
      return {
        ...state,
        cart: addItemToCart(state.cart, action.payload),
      };
    case CartActionType.REMOVE_ITEM_TO_CART:
      return {
        ...state,
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
