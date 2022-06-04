import SavedItemActionType from "../types/savedItem.types";

export const addSavedItem = (item) => ({
  type: SavedItemActionType.ADD_SAVE_ITEM,
  payload: item,
});

export const removeSavedItem = (itemId) => ({
  type: SavedItemActionType.REMOVE_SAVE_ITEM,
  payload: itemId,
});

export const clearAllSaveItem = () => ({
  type: SavedItemActionType.CLEAR_ALL_SAVE_ITEM,
});
