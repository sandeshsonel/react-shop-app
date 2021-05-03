import CartActionType from "../types/cart.types";
import { updateCartItemQuantity } from "../utils/cart.utils";

const initial_state = {
  cart: [],
  isLoading: true,
  errorMsg: null,
};

const cartReducer = (state = initial_state, action) => {
  console.log("xolo-action", action.type);
  switch (action.type) {
    //----------GET-----------//

    case CartActionType.GET_CART_ITEM_START:
      return {
        ...state,
        isLoading: true,
      };
    case CartActionType.GET_CART_ITEM_SUCCESS:
      return {
        ...state,
        isLoading: false,
        cart: action.payload,
      };
    case CartActionType.GET_CART_ITEM_FAILED:
      return {
        ...state,
        errorMsg: action.payload,
      };
    //----------GET-----------//

    //----------ADD-----------//
    case CartActionType.ADD_ITEM_TO_CART_START:
      return {
        ...state,
        isLoading: true,
      };
    case CartActionType.ADD_ITEM_TO_CART_SUCCESS:
      return {
        ...state,
        isLoading: false,
        cart: action.payload,
      };
    case CartActionType.ADD_ITEM_TO_CART_FAILED:
      return {
        ...state,
        isLoading: false,
        errorMsg: action.payload,
      };
    //----------ADD-----------//

    //----------REMOVE-----------//
    case CartActionType.REMOVE_ITEM_TO_CART_START:
      return {
        ...state,
        isLoading: true,
      };
    case CartActionType.REMOVE_ITEM_TO_CART_SUCCESS:
      return {
        ...state,
        isLoading: false,
        cart: action.payload,
      };
    case CartActionType.REMOVE_ITEM_TO_CART_FAILED:
      return {
        ...state,
        isLoading: false,
        errorMsg: action.payload,
      };
    //----------REMOVE-----------//

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
    //----------UPDATE-----------//
    case CartActionType.UPDATE_CART_ITEM_QUANTITY:
      return {
        ...state,
        cart: updateCartItemQuantity(state.cart, action.payload.productId, action.payload.quantity),
      };
    case "USER_SIGN_OUT_SUCCESS":
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
};

export default cartReducer;
