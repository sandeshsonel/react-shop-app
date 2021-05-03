import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import shopReducer from "../reducers/shopReducer";
import authReducer from "../reducers/auth";
import userProfileReducer from "../reducers/userProfile";
import cartReducer from "../reducers/Cart";
import wishlistReducer from "../reducers/wishlistReducer";
import productReducer from "../reducers/products";

const persistConfig = {
  key: "root",
  storage,
  // Whitelist (Save Specific Reducers)
  whitelist: ["auth", "userProfile", "cart", "wishlist"],
  // Blacklist (Don't Save Specific Reducers)
  // blacklist: ['authReducer.loading'],
};

const reducers = combineReducers({
  cart: cartReducer,
  wishlist: wishlistReducer,
  auth: authReducer,
  userProfile: userProfileReducer,
  products: productReducer,
  shop: shopReducer,
});

// export default reducers;

export default persistReducer(persistConfig, reducers);
