import SavedItemActionType from "../types/savedItem.types";
import WishlistActionTypes from "../types/wishlist.types";

const initial_state = {
  items: [],
  isLoading: true,
  errorMsg: null,
};

const savedItemsReducers = (state = initial_state, action) => {
  switch (action.type) {
    // GET
    case WishlistActionTypes.GET_WISHLIST_ITEMS_START:
      return {
        ...state,
        isLoading: true,
      };
    case WishlistActionTypes.GET_WISHLIST_ITEMS_SUCCESS:
      return {
        ...state,
        items: action.payload,
        isLoading: false,
      };
    case WishlistActionTypes.GET_WISHLIST_ITEMS_FAILED:
      return {
        ...state,
        isLoading: false,
        errorMsg: action.payload,
      };
    // ADD
    case WishlistActionTypes.ADD_WISHLIST_ITEM:
      return {
        ...state,
        isLoading: true,
      };
    case WishlistActionTypes.ADD_WISHLIST_ITEM_SUCCESS:
      return {
        ...state,
        isLoading: false,
        items: action.payload,
      };
    case WishlistActionTypes.ADD_WISHLIST_ITEM_FAILED:
      return {
        ...state,
        isLoading: false,
        errorMsg: action.payload,
      };
    // DELETE
    case WishlistActionTypes.REMOVE_WISHLIST_ITEM:
      return {
        ...state,
        isLoading: true,
      };
    case WishlistActionTypes.REMOVE_WISHLIST_ITEM_SUCCESS:
      return {
        ...state,
        isLoading: false,
        items: action.payload,
      };
    case WishlistActionTypes.REMOVE_WISHLIST_ITEM_FAILED:
      return {
        ...state,
        isLoading: false,
        errorMsg: action.payload,
      };
    // other
    case SavedItemActionType.ADD_SAVE_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case SavedItemActionType.REMOVE_SAVE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => action.payload !== item._id),
      };
    default:
      return state;
  }
};

export default savedItemsReducers;
