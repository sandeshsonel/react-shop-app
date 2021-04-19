import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import authReducer from "../reducers/auth";
import userProfileReducer from "../reducers/userProfile";
import cartReducer from "../reducers/Cart";
import savedItemReducer from "../reducers/SavedItems";
import productReducer from "../reducers/products";

const persistConfig = {
  key: "root",
  storage,
  // whitelist: ["cart"],
};

const reducers = combineReducers({
  cart: cartReducer,
  savedItem: savedItemReducer,
  auth: authReducer,
  userProfile: userProfileReducer,
  products: productReducer,
});

export default persistReducer(persistConfig, reducers);
