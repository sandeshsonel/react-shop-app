import CartActionType from "../types/cart.types";

//----------GET-----------//
export const getCartItemStart = () => ({
  type: CartActionType.GET_CART_ITEM_START,
});

export const getCartItemSuccess = (cartItems) => ({
  type: CartActionType.GET_CART_ITEM_SUCCESS,
  payload: cartItems,
});

export const getCartItemFailed = (errMsg) => ({
  type: CartActionType.GET_CART_ITEM_FAILED,
  payload: errMsg,
});

//----------ADD-----------//
export const setAddCartItemStart = (addItem) => ({
  type: CartActionType.ADD_ITEM_TO_CART_START,
  payload: addItem,
});

export const addCartItemSuccess = (cartItem) => ({
  type: CartActionType.ADD_ITEM_TO_CART_SUCCESS,
  payload: cartItem,
});

export const addCartItemFailed = (errorMsg) => ({
  type: CartActionType.ADD_ITEM_TO_CART_FAILED,
  payload: errorMsg,
});

//----------REMOVE-----------//
export const setRemoveCartItemStart = (itemId) => ({
  type: CartActionType.REMOVE_ITEM_TO_CART_START,
  payload: itemId,
});

export const removeCartItemSuccess = (successMsg) => ({
  type: CartActionType.REMOVE_ITEM_TO_CART_SUCCESS,
  payload: successMsg,
});

export const removeCartItemFailed = (errorMsg) => ({
  type: CartActionType.REMOVE_ITEM_TO_CART_FAILED,
  payload: errorMsg,
});

//----------UPDATE-----------//
export const updateCartItemQuantity = ({ productId, quantity }) => ({
  type: CartActionType.UPDATE_CART_ITEM_QUANTITY,
  payload: productId,
});

export const updateCartItemQuantitySuccess = (updateProduct) => ({
  type: CartActionType.UPDATE_CART_ITEM_SUCCESS,
  payload: updateProduct,
});

export const updateCartItemQuantityFailed = (errorMsg) => ({
  type: CartActionType.UPDATE_CART_ITEM_FAILED,
  payload: errorMsg,
});

export const addItemToCart = (item) => ({
  type: CartActionType.ADD_ITEM_TO_CART,
  payload: item,
});

export const removeItemToCart = (itemId) => ({
  type: CartActionType.REMOVE_ITEM_TO_CART,
  payload: itemId,
});

export const clearAllItemToCart = () => ({
  type: CartActionType.CLEAR_ITEM_FROM_CART,
});
