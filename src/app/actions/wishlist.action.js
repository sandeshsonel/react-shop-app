import WishlistActionTypes from "../types/wishlist.types";

// GET
export const getWishlistItemsStart = () => ({
  type: WishlistActionTypes.GET_WISHLIST_ITEMS_START,
});

export const getWishlistItemsSuccess = (wishlistItems) => ({
  type: WishlistActionTypes.GET_WISHLIST_ITEMS_SUCCESS,
  payload: wishlistItems,
});

export const getWishlistItemsFailed = (errorMsg) => ({
  type: WishlistActionTypes.GET_WISHLIST_ITEMS_FAILED,
  payload: errorMsg,
});

// ADD
export const addWishlistItem = (item) => ({
  type: WishlistActionTypes.ADD_WISHLIST_ITEM,
  payload: item,
});

export const addWishlistItemSuccess = (successMsg) => ({
  type: WishlistActionTypes.GET_WISHLIST_ITEMS_SUCCESS,
  payload: successMsg,
});

export const addWishlistItemFailed = (errorMsg) => ({
  type: WishlistActionTypes.GET_WISHLIST_ITEMS_FAILED,
  payload: errorMsg,
});

// DELETE
export const removeWishlistItem = (itemId) => ({
  type: WishlistActionTypes.REMOVE_WISHLIST_ITEM,
  payload: itemId,
});

export const removeWishlistItemSuccess = (successMsg) => ({
  type: WishlistActionTypes.REMOVE_WISHLIST_ITEM_SUCCESS,
  payload: successMsg,
});

export const removeWishlistItemFailed = (errorMsg) => ({
  type: WishlistActionTypes.REMOVE_WISHLIST_ITEM_FAILED,
  payload: errorMsg,
});
