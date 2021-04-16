import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProductDetails from "./components/Product/ProductDetails/ProductDetails";

import CartPage from "./pages/Cart/CartPage";
import HomePage from "./pages/HomePage/HomePage";
import WishListPage from "./pages/WishListPage/WishListPage";
import UserProfilePage from "./pages/UserProfilePage/UserProfilePage";

import Header from "./components/Header/Header";
import SearchPage from "./pages/SearchPage/SearchPage";
import ProductCategory from "./components/Product/ProductCategory/ProductCategory";
import ProductList from "./components/Product/ProductList/ProductList";
import ProductDescriptionPage from "./components/ProductDescriptionPage/ProductDescriptionPage";
import SignInAndSignUpPage from "./pages/SignInAndSignUp/SignInAndSignUpPage";
import BottomNavigationBar from "./components/BottomNavigation/BottomNavigation";
import OrderPage from "./pages/UserProfilePage/ChildPages/OrderPage/OrderPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <div className="">
      <div className="font-futura  max-w-2xl m-auto">
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <BrowserRouter>
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/cart" component={CartPage} />
                <Route path="/wishlist" component={WishListPage} />
                <Route path="/profile/orders" component={OrderPage} />

                <Route path="/profile" component={UserProfilePage} />

                <Route path="/search" component={SearchPage} />
                {/* 
                <Route path="/:productype/:type" component={ProductList} /> */}
                <Route path="/productDetails/:type/:category/:productName/:id" component={ProductDetails} />
                <Route path="/loginSign" component={SignInAndSignUpPage} />
                <Route component={NotFoundPage} />
              </Switch>
              <Header />
              <BottomNavigationBar />
            </BrowserRouter>
          </PersistGate>
        </Provider>
      </div>
    </div>
  );
}

export default App;
