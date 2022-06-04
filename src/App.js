// import React, { Component, lazy } from "react";
// import { connect } from "react-redux";
// import { Router, Route, Switch } from "react-router-dom";
// import { createBrowserHistory } from "history";
// import ReactGA from "react-ga";

// import { setLogin } from "./app/actions";

// //pages
// import ProductDetails from "./components/Product/ProductDetails/ProductDetails";
// import CartPage from "./pages/Cart/CartPage";
// import HomePage from "./pages/HomePage/HomePage";
// import WishListPage from "./pages/WishListPage/WishListPage";
// import UserProfilePage from "./pages/UserProfilePage/UserProfilePage";
// import Header from "./components/Header/Header";
// import SearchPage from "./pages/SearchPage/SearchPage";
// import ProductCategory from "./components/Product/ProductCategory/ProductCategory";
// import ProductList from "./components/Product/ProductList/ProductList";
// import ProductDescriptionPage from "./components/ProductDescriptionPage/ProductDescriptionPage";
// import SignInAndSignUpPage from "./pages/SignInAndSignUp/SignInAndSignUpPage";
// import BottomNavigationBar from "./components/BottomNavigation/BottomNavigation";
// import MyOrderPage from "./pages/UserProfilePage/ChildPages/OrderPage/MyOrderPage";
// import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
// import MyDetailsPage from "./pages/UserProfilePage/ChildPages/MyDetailsPage/MyDetailsPage";
// import Dashboard from "./pages/Dashboard/Dashboard";
// import AddressPage from "./pages/UserProfilePage/ChildPages/AddressPage/AddressPage";
// import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";

// const history = createBrowserHistory();

// history.listen((location) => {
//    ReactGA.set({ page: location.pathname }); // Update the user's current page
//    ReactGA.pageview(location.pathname); // Record a pageview for the given page
// });

// class App extends Component {
//    constructor(props) {
//       super(props);

//       this.state = {};
//    }

//    checkAutoLogin = () => {
//       const {
//          token,
//          expireDate,
//          setLogin,
//          getUserDetails,
//          fetchCompanyDetails,
//       } = this.props;
//       if (token && new Date(expireDate) > new Date()) {
//          setLogin(true);
//       } else {
//          setLogin(false);
//       }
//    };

//    componentDidMount() {
//       this.checkAutoLogin();
//    }
//    componentDidUpdate(prevProps) {
//       if (
//          prevProps.token !== this.props.token ||
//          new Date(this.props.expireDate) > new Date()
//       ) {
//          this.checkAutoLogin();
//       }
//    }

//    render() {
//       console.log("xopo", this.props);
//       return (
//          <div>
//             <div className="font-inter max-w-2xl m-auto">
//                <Router history={history}>
//                   <Switch>
//                      <Route exact path="/" component={HomePage} />
//                      <Route path="/cart" component={CartPage} />
//                      <Route path="/wishlist" component={WishListPage} />

//                      <Route path="/profile/address" component={AddressPage} />
//                      <Route path="/profile/orders" component={MyOrderPage} />
//                      <Route
//                         path="/profile/myDetails"
//                         component={MyDetailsPage}
//                      />
//                      <Route path="/profile" component={UserProfilePage} />

//                      <Route path="/search" component={SearchPage} />
//                      <Route
//                         path="/productDetails/:type/:category/:productName/:id"
//                         component={ProductDetails}
//                      />
//                      <Route path="/loginSign" component={SignInAndSignUpPage} />
//                      <Route path="/checkout" component={CheckoutPage} />
//                      <Route path="/dashboard" component={Dashboard} />
//                      <Route component={NotFoundPage} />
//                   </Switch>
//                   <Header />
//                   <BottomNavigationBar />
//                </Router>
//             </div>
//          </div>
//       );
//    }
// }

// const mapStateToProps = (state) => ({
//    isLogin: state.auth.isLogin,
//    token: state.auth.token,
//    expireDate: state.auth.expireDate,
// });

// const mapDispatchToProps = (dispatch) => ({
//    setLogin: (flag) => dispatch(setLogin(flag)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(App);
import React, { Component, Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import CircularProgress from "@mui/material/CircularProgress";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import { theme } from "theme";
import { CssBaseline } from "@material-ui/core";

const Home = lazy(() => import("pages/v2/Home"));
const Order = lazy(() => import("pages/v2/Order"));
const Account = lazy(() => import("pages/v2/Account"));
const Notification = lazy(() => import("pages/v2/Notification"));
const MyProducts = lazy(() => import("pages/v2/MyProducts"));
const MyCart = lazy(() => import("pages/v2/MyCart"));
const Profile = lazy(() => import("pages/v2/Profile"));
const SearchPage = lazy(() => import("pages/v2/SearchPage"));
const MyOrders = lazy(() => import("pages/v2/MyOrders"));
const EditProfile = lazy(() => import("pages/v2/Profile/EditProfile"));
const ProductDetails = lazy(() =>
   import("pages/v2/Home/Product/ProductDetails"),
);

class App extends Component {
   render() {
      return (
         <div className="max-w-lg mx-auto font-inter">
            <ThemeProvider theme={theme}>
               <Suspense
                  fallback={
                     <div className="center">
                        <CircularProgress />
                     </div>
                  }
               >
                  <Router>
                     <Switch>
                        <Route
                           path="/product/:type/:category/:productName/:id"
                           component={ProductDetails}
                        />
                        <Route path="/notification" component={Notification} />
                        <Route path="/my-products" component={MyProducts} />
                        <Route path="/my-cart" component={MyCart} />
                        <Route path="/my-orders" component={MyOrders} />

                        <Route path="/account" component={Account} />
                        <Route path="/order" component={Order} />
                        <Route path="/profile/edit" component={EditProfile} />
                        <Route path="/profile" component={Profile} />

                        <Route path="/search" component={SearchPage} />

                        <Route path="/" component={Home} />
                        <Route
                           path="*"
                           component={() => (
                              <div className="center">Page Not Found</div>
                           )}
                        />
                     </Switch>
                  </Router>
               </Suspense>
            </ThemeProvider>
         </div>
      );
   }
}

export default App;
