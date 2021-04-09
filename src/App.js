import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProductDetails from "./components/Product/ProductDetails/ProductDetails";

import CartPage from "./pages/Cart/CartPage";
import HomePage from "./pages/Home/HomePage";
import WishListPage from "./pages/WishListPage/WishListPage";
import UserProfilePage from "./pages/User/UserProfilePage";

import Header from "./components/Header/Header";
import SearchPage from "./pages/SearchPage/SearchPage";

function App() {
  return (
    <div className="">
      <div className="max-w-2xl m-auto font-inter">
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <BrowserRouter>
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/cart" component={CartPage} />
                <Route path="/wishlist" component={WishListPage} />
                <Route path="/profile" component={UserProfilePage} />
                <Route path="/search" component={SearchPage} />
                <Route path="/productDetails/:type/:category/:productName/:id" component={ProductDetails} />
              </Switch>
              <Header />
            </BrowserRouter>
          </PersistGate>
        </Provider>
      </div>
    </div>
  );
}

export default App;
