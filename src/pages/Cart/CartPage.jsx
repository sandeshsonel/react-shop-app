import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import CartProductList from "../../pages/Cart/CartProductList/CartProductList";

import { getCartItemStart } from "../../app/actions";
import Loader from "src/components/Loader/Loader";

const CartPage = (props) => {
  const { cartItems, getCartItemStart, isLoading, isLogin } = props;
  console.log("momo", isLoading);

  useEffect(() => {
    if (isLogin) {
      getCartItemStart();
    }
  }, []);

  if (isLoading && isLogin) {
    return (
      <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
        <Loader />
      </div>
    );
  }

  return (
    <div className="px-3 xl:px-0 lg:px-0 md:px-0 sm:px-0">
      {!cartItems.length ? (
        <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} className="max-w-xs">
          <div className="flex flex-col flex-nowrap justify-between text-center">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 m-auto" viewBox="0 0 512 512">
                <title>Bag</title>
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                  d="M80 176a16 16 0 00-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 00-16-16zM160 176v-32a96 96 0 0196-96h0a96 96 0 0196 96v32"
                />
              </svg>
            </div>
            <div className="mt-4">
              <h1 className="font-semiBold text-xl font-serif">Your bag is empty</h1>
              <p className="text-sm mt-4 xl:text-base text-gray-600">Items remain in your bag for 60 minutes, and then they’re moved to your Saved Items.</p>
              <Link to="/wishlist">
                <button className="bg-green-400 shadow-lg font-bold uppercase py-3 mt-6 text-sm text-white w-full">View Saved Items</button>
              </Link>
              <div className="mt-5">
                <Link to="/">
                  <a className="underline text-sm">Continue Shopping</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <CartProductList cartItems={cartItems} />
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cart.cart,
  isLoading: state.cart.isLoading,
  isLogin: state.auth.isLogin,
});

const mapDispatchToProps = (dispatch) => ({
  getCartItemStart: (cartItems) => dispatch(getCartItemStart(cartItems)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
