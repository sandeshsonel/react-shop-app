import CartActionType from "../types/cart.types";

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
