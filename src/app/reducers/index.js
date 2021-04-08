import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import cartReducer from "../reducers/Cart";
import savedItemReducer from "../reducers/SavedItems";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const reducers = combineReducers({
  cart: cartReducer,
  savedItem: savedItemReducer,
});

export default persistReducer(persistConfig, reducers);
