import SavedItemActionType from "../types/savedItem.types";

const initial_state = {
  items: [],
};

const savedItemsReducers = (state = initial_state, action) => {
  switch (action.type) {
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
