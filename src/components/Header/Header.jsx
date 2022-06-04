import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import SignInAndSignUpPage from "pages/SignInAndSignUp/SignInAndSignUpPage";

import { setRoute } from "../../app/actions";

const useStyles = makeStyles((theme) => ({
   appBar: {
      position: "relative",
   },
   title: {
      marginLeft: theme.spacing(2),
      flex: 1,
   },
   sidebar: {
      width: "300px",
   },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
   return <Slide direction="left" ref={ref} {...props} />;
});

const Header = (props) => {
   const pathname = window.location.pathname;
   console.log("momo", pathname);
   const { isLogin, setRoute, myRoute, cartItems } = props;
   const classes = useStyles();
   const [state, setState] = React.useState({
      left: false,
   });
   const [open, setOpen] = React.useState(false);
   const [value, setValue] = useState(0);

   const handleClickOpen = () => {
      setOpen(true);
   };

   const handleClose = () => {
      setOpen(false);
   };

   const toggleDrawer = (anchor, open) => (event) => {
      if (
         event &&
         event.type === "keydown" &&
         (event.key === "Tab" || event.key === "Shift")
      ) {
         return;
      }

      setState({ ...state, [anchor]: open });
   };

   const cartItemQuantity = cartItems
      .map((c) => c.quantity)
      .reduce((acc, cur) => acc + cur, 0);

   console.log("header", cartItemQuantity);

   return (
      <div className="max-w-2xl m-auto fixed w-full top-0">
         <div className="shadow-md bg-black">
            <div className="flex justify-between items-center px-3 py-3">
               <div className="flex items-center space-x-2">
                  <div className="space-x-4 flex items-center">
                     <Link to="/">
                        <a
                           className="text-xl font-bold text-white uppercase"
                           onClick={() =>
                              myRoute !== "/" ? setRoute("/") : null
                           }
                           href=""
                        >
                           Shops
                        </a>
                     </Link>
                  </div>
               </div>
               <div>
                  <div className="flex items-center space-x-4">
                     {/* <div className="hidden xl:block lg:block md:block sm:block">
                <Link to="/dashboard">
                  <button
                    onClick={() => setRoute("/dashboard")}
                    className={
                      myRoute === "/dashboard"
                        ? "px-2 py-1  text-black bg-white text-sm font-medium rounded-md"
                        : "px-2 py-1 text-white border-white border text-sm font-medium rounded-md"
                    }
                  >
                    Dasboard
                  </button>
                </Link>
              </div> */}
                     <div className="hidden xl:block lg:block md:block sm:block">
                        <Link to="/search">
                           <div onClick={() => setRoute("/search")}>
                              {myRoute === "/search" ? (
                                 <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="w-6 fill-current text-white"
                                    viewBox="0 0 512 512"
                                 >
                                    <path d="M456.69 421.39L362.6 327.3a173.81 173.81 0 0034.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 00327.3 362.6l94.09 94.09a25 25 0 0035.3-35.3zM97.92 222.72a124.8 124.8 0 11124.8 124.8 124.95 124.95 0 01-124.8-124.8z" />
                                 </svg>
                              ) : (
                                 <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 fill-current text-white"
                                    viewBox="0 0 512 512"
                                 >
                                    <path
                                       d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
                                       fill="none"
                                       stroke="currentColor"
                                       stroke-miterlimit="10"
                                       stroke-width="32"
                                    />
                                    <path
                                       fill="none"
                                       stroke="currentColor"
                                       stroke-linecap="round"
                                       stroke-miterlimit="10"
                                       stroke-width="32"
                                       d="M338.29 338.29L448 448"
                                    />
                                 </svg>
                              )}
                           </div>
                        </Link>
                     </div>
                     <div className="">
                        <Link to={isLogin ? "/profile" : "/loginSign"}>
                           <div onClick={() => setRoute("/profile")}>
                              {myRoute === "/profile" ? (
                                 <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="w-6 fill-current text-white"
                                    viewBox="0 0 512 512"
                                 >
                                    <path d="M332.64 64.58C313.18 43.57 286 32 256 32c-30.16 0-57.43 11.5-76.8 32.38-19.58 21.11-29.12 49.8-26.88 80.78C156.76 206.28 203.27 256 256 256s99.16-49.71 103.67-110.82c2.27-30.7-7.33-59.33-27.03-80.6zM432 480H80a31 31 0 01-24.2-11.13c-6.5-7.77-9.12-18.38-7.18-29.11C57.06 392.94 83.4 353.61 124.8 326c36.78-24.51 83.37-38 131.2-38s94.42 13.5 131.2 38c41.4 27.6 67.74 66.93 76.18 113.75 1.94 10.73-.68 21.34-7.18 29.11A31 31 0 01432 480z" />
                                 </svg>
                              ) : (
                                 <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 fill-current text-white"
                                    viewBox="0 0 512 512"
                                 >
                                    <path
                                       d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z"
                                       fill="none"
                                       stroke="currentColor"
                                       stroke-linecap="round"
                                       stroke-linejoin="round"
                                       stroke-width="32"
                                    />
                                    <path
                                       d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z"
                                       fill="none"
                                       stroke="currentColor"
                                       stroke-miterlimit="10"
                                       stroke-width="32"
                                    />
                                 </svg>
                              )}
                           </div>
                        </Link>
                     </div>
                     <div className="hidden xl:block lg:block md:block sm:block">
                        <Link to="/wishlist">
                           <div onClick={() => setRoute("/wishlist")}>
                              {myRoute === "/wishlist" ? (
                                 <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="w-6 fill-current text-white"
                                    viewBox="0 0 512 512"
                                 >
                                    <path d="M256 448a32 32 0 01-18-5.57c-78.59-53.35-112.62-89.93-131.39-112.8-40-48.75-59.15-98.8-58.61-153C48.63 114.52 98.46 64 159.08 64c44.08 0 74.61 24.83 92.39 45.51a6 6 0 009.06 0C278.31 88.81 308.84 64 352.92 64c60.62 0 110.45 50.52 111.08 112.64.54 54.21-18.63 104.26-58.61 153-18.77 22.87-52.8 59.45-131.39 112.8a32 32 0 01-18 5.56z" />
                                 </svg>
                              ) : (
                                 <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 fill-current text-white"
                                    viewBox="0 0 512 512"
                                 >
                                    <path
                                       d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"
                                       fill="none"
                                       stroke="currentColor"
                                       stroke-linecap="round"
                                       stroke-linejoin="round"
                                       stroke-width="32"
                                    />
                                 </svg>
                              )}
                           </div>
                        </Link>
                     </div>
                     <div className="hidden xl:block lg:block md:block sm:block">
                        <Link to="/cart">
                           <div onClick={() => setRoute("/cart")}>
                              <div className="relative">
                                 {myRoute === "/cart" ? (
                                    <svg
                                       xmlns="http://www.w3.org/2000/svg"
                                       className="w-6 fill-current text-white"
                                       viewBox="0 0 512 512"
                                    >
                                       <path d="M454.65 169.4A31.82 31.82 0 00432 160h-64v-16a112 112 0 00-224 0v16H80a32 32 0 00-32 32v216c0 39 33 72 72 72h272a72.22 72.22 0 0050.48-20.55 69.48 69.48 0 0021.52-50.2V192a31.75 31.75 0 00-9.35-22.6zM176 144a80 80 0 01160 0v16H176z" />
                                    </svg>
                                 ) : (
                                    <svg
                                       xmlns="http://www.w3.org/2000/svg"
                                       className={
                                          value === 4
                                             ? "w-6 fill-curren text-white relative"
                                             : "w-6 fill-current text-white relative"
                                       }
                                       viewBox="0 0 512 512"
                                    >
                                       <path
                                          fill="none"
                                          stroke="currentColor"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          stroke-width="32"
                                          d="M80 176a16 16 0 00-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 00-16-16zM160 176v-32a96 96 0 0196-96h0a96 96 0 0196 96v32"
                                       />
                                    </svg>
                                 )}
                                 <div>
                                    <span
                                       className={`text-sm font-semiBold absolute ml-2 top-1 text-center ${
                                          myRoute === "/cart"
                                             ? "text-black"
                                             : "text-white"
                                       }`}
                                    >
                                       {cartItemQuantity === 0
                                          ? ""
                                          : cartItemQuantity}
                                    </span>
                                 </div>
                              </div>
                           </div>
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <Dialog
            fullScreen
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}
         >
            <div>
               <SignInAndSignUpPage handleClose={handleClose} />
            </div>
         </Dialog>

         <SwipeableDrawer
            classes={{ paper: classes.sidebar }}
            anchor="left"
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
            onOpen={toggleDrawer("left", true)}
         >
            <div>
               <div>
                  <div className="flex items-center w-full justify-between space-x-2 border">
                     <div className="w-full">
                        <button
                           onClick={() => setValue(1)}
                           className={
                              value === 1
                                 ? "w-full border-b-2 py-3 uppercase font-bold outline-none text-sm border-black"
                                 : "w-full outline-none border-none py-3 uppercase font-semibold text-sm"
                           }
                        >
                           Women
                        </button>
                     </div>
                     <hr className="border border-gray-500 h-5" />
                     <div className="w-full">
                        <button
                           onClick={() => setValue(2)}
                           className={
                              value === 2
                                 ? "w-full border-b-2 outline-none py-3 uppercase font-bold text-sm border-black"
                                 : "w-full outline-none py-3 uppercase font-semibold text-sm"
                           }
                        >
                           Mens
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </SwipeableDrawer>
      </div>
   );
};

const mapStateToProps = (state) => ({
   isLogin: state.auth.isLogin,
   myRoute: state.shop.myRoute,
   cartItems: state.cart.cart,
});

const mapDispatchToProps = (dispatch) => ({
   setRoute: (route) => dispatch(setRoute(route)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
