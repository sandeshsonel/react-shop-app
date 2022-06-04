import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Slide } from "react-slideshow-image";
import IconButton from "@material-ui/core/IconButton";
import Drawer from "@material-ui/core/Drawer";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

import {
  removeSavedItem,
  addItemToCart,
  removeItemToCart,
  addSavedItem,
  setRemoveCartItemStart,
  setAddCartItemStart,
  updateCartItemQuantity,
} from "../../../app/actions";

const CartProductList = (props) => {
  console.log(props);
  const {
    savedItems,
    removeSavedItem,
    cartItems,
    removeItemToCart,
    addSavedItem,
    setRemoveCartItemStart,
    isLogin,
    setAddCartItemStart,
    updateCartItemQuantity,
  } = props;
  const [state, setState] = React.useState({
    bottom: false,
  });
  const [quantity, setQuantity] = useState();
  const [moreInfoDetail, setMoreInfoDetail] = useState({});
  const [snackbar, setSnackbar] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
    message: "",
    warning: "success",
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }

    setState({ bottom: open });
  };

  const handleMoreInfoButton = (cartItem) => {
    setState({ bottom: true });
    setMoreInfoDetail(cartItem);
  };

  const handleDrawerSaveFLator = () => {
    let alreadySaveItemInWishlist = savedItems.some((saveItem) => moreInfoDetail._id === saveItem._id);
    if (alreadySaveItemInWishlist) {
      setSnackbar({ ...snackbar, open: true, message: "Item Already exists in wishlist", warning: "error" });
      setTimeout(() => {
        setSnackbar({ ...snackbar, open: false, message: "", warning: "" });
      }, 2000);
      setState({ bottom: false });
    } else {
      if (isLogin) {
        addSavedItem(moreInfoDetail);
        setRemoveCartItemStart(moreInfoDetail.productId);
      } else {
        addSavedItem(moreInfoDetail);
        removeItemToCart({ itemId: moreInfoDetail._id, size: moreInfoDetail.selectSize });
      }
      setState({ bottom: false });
    }
  };

  const handleSaveForLator = (cartItem) => {
    let alreadySaveItemInWishlist = savedItems.some((saveItem) => cartItem._id === saveItem._id && cartItem.selectSize === saveItem.selectSize);
    if (alreadySaveItemInWishlist) {
      setSnackbar({ ...snackbar, open: true, message: "Item Already exists in wishlist", warning: "error" });
      setTimeout(() => {
        setSnackbar({ ...snackbar, open: false, message: "", warning: "" });
      }, 2000);
    } else {
      if (isLogin) {
        addSavedItem(cartItem);
        setRemoveCartItemStart(moreInfoDetail.productId);
      } else {
        addSavedItem(cartItem);
        removeItemToCart({ itemId: cartItem._id, size: cartItem.selectSize });
      }
    }
  };

  const handleUpdateItemQuantity = (productId, quantity) => {
    updateCartItemQuantity({ productId, quantity });
  };

  const quantityOption = (quantity) => {
    console.log(quantity);
    let array = [];

    for (let i = 1; i <= 5; i++) {
      array.push(
        <option selected={i === quantity} value={i}>
          {i}
        </option>
      );
    }
    return array;
  };

  const sizesOptions = (sizes, selectSize) => {
    let array = [];

    for (let i = 0; i < sizes.length; i++) {
      array.push(
        <option selected={sizes[i] === selectSize} value={sizes[i]}>
          {sizes[i]}
        </option>
      );
    }

    return array;
  };

  // Math.floor(cartItem.price - (cartItem.price * cartItem.priceDiscount) / 100)
  const subTotal = cartItems
    .map((cartItem) => [Math.floor((cartItem.price - (cartItem.price * cartItem.priceDiscount) / 100) * cartItem.quantity)])
    .reduce((r, a) => r.concat(a), [])
    .reduce((acc, cur) => acc + cur, 0);
  // .map((value, idx) => value.reduce((sum, curr) => sum + curr[idx], 0));

  console.log("lolo", props);

  return (
    <div className="mt-16 pb-10">
      <div className="space-y-3 xl:max-h-80 overflow-y-auto">
        {cartItems.map((cartItem) => (
          <div className="flex items-start space-x-3 border-b pb-4">
            <div>
              <img
                className="w-36"
                src="https://images.asos-media.com/products/new-look-tie-sleeve-frill-hem-midi-dress-in-burgundy/22242921-1-darkburgundy"
                alt=""
              />
            </div>
            <div className="w-full">
              <div className="flex justify-between">
                <div>
                  <h1 className="font-semiBold xl:text-lg">{cartItem.productName}</h1>
                  <p className="text-sm xl:text-base text-gray-500">{cartItem.description}</p>
                </div>
                <div className="mt-1 mr-3">
                  <button
                    onClick={() =>
                      isLogin
                        ? setRemoveCartItemStart({ itemId: cartItem.productId, size: cartItem.selectSize })
                        : removeItemToCart({ itemId: cartItem._id, size: cartItem.selectSize })
                    }
                    className="cursor-pointer hidden xl:block lg:block md:block sm:block px-1 py-1 bg-gray-100 rounded-full focus:outline-none outline-none focus:ring-2 focus:ring-black"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6" viewBox="0 0 512 512">
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="32"
                        d="M368 368L144 144M368 144L144 368"
                      />
                    </svg>
                  </button>
                  <button onClick={() => handleMoreInfoButton(cartItem)} className="block xl:hidden lg:hidden md:hidden sm:hidden px-1 py-1 bg-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5" viewBox="0 0 512 512">
                      <title>Ellipsis Vertical</title>
                      <circle cx="256" cy="256" r="48" />
                      <circle cx="256" cy="416" r="48" />
                      <circle cx="256" cy="96" r="48" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-center m-auto space-x-3 mt-2 text-sm xl:text-base">
                <div className="w-full">
                  <span className="font-semiBold">Price:</span>
                  <h1 className="mt-1">Rs. {Math.floor(cartItem.price - (cartItem.price * cartItem.priceDiscount) / 100)}</h1>
                </div>
                <div className="w-full">
                  <span className="font-semiBold">Size:</span>
                  <select
                    //  onChange={(e) => handleUpdateItemQuantity(cartItem._id, e.target.value)}
                    className="w-full mt-1 bg-white border"
                    name=""
                    id=""
                  >
                    {sizesOptions(cartItem.sizes, cartItem.selectSize)}
                  </select>
                </div>
                <div className="w-full">
                  <span className="font-semiBold">Quantity:</span>
                  <select onChange={(e) => handleUpdateItemQuantity(cartItem._id, e.target.value)} className="w-full mt-1 bg-white border" name="" id="">
                    {quantityOption(cartItem.quantity)}
                  </select>
                </div>
                <div className="w-full">
                  <span className="font-semiBold">Total:</span>
                  <h1 className="mt-1">Rs. {Math.floor((cartItem.price - (cartItem.price * cartItem.priceDiscount) / 100) * cartItem.quantity)}</h1>
                </div>
              </div>

              <button
                onClick={() => handleSaveForLator(cartItem)}
                className="hidden xl:flex lg:flex md:flex sm:flex items-center space-x-1 border rounded-md hover:border-gray-600 mt-4 px-1 py-1"
              >
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4" viewBox="0 0 512 512">
                    <path
                      d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="32"
                    />
                  </svg>
                </div>
                <span className="text-sm">Save for later</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      <footer className="mt-8">
        <hr />
        <div>
          <ul>
            <li className="flex items-center justify-between py-2">
              <span className="font-semiBold text-gray-500 text-sm xl:text-base uppercase">Sub total</span>
              <p className="font-semiBold text-sm xl:text-base text-gray-600 uppercase">₹ {subTotal}</p>
            </li>
            <li className="flex items-center justify-between py-2">
              <span className="font-semiBold text-gray-500 text-sm xl:text-base uppercase">Delivery free</span>
              <p className="font-semiBold text-sm xl:text-base text-gray-600 uppercase">Free</p>
            </li>
            <hr />
            <li className="flex items-center justify-between py-3">
              <span className="font-semiBold text-gray-500 text-sm xl:text-base uppercase">Total</span>
              <p className="font-semiBold text-sm xl:text-base text-gray-600 uppercase">₹ {subTotal}</p>
            </li>
          </ul>
        </div>
        <footer className=" w-full mt-6">
          <Link to={isLogin ? "/checkout" : "/loginSign"}>
            <button className="uppercase bottom-0 bg-green-500 hover:bg-green-600 outline-none shadow-md text-white font-semiBold w-full py-3 text-sm xl:text-base rounded-none">
              Checkout
            </button>
          </Link>
        </footer>
      </footer>
      {moreInfoDetail !== {} && (
        <Drawer anchor="bottom" open={state["bottom"]} onClose={toggleDrawer("buttom", false)}>
          <div className="px-3 text-center">
            <ul className="uppercase font-semiBold">
              <li
                onClick={handleDrawerSaveFLator}
                // onClick={() => {
                //   addSavedItem(moreInfoDetail);
                //   removeItemToCart(moreInfoDetail._id);
                //   setState({ bottom: false });
                // }}
                className="py-4 text-green-500 cursor-pointer"
              >
                Save for later
              </li>
              <hr />
              <li className="py-4 text-gray-500">Size : {moreInfoDetail.selectSize}</li>
              <hr />
              <li className="py-4 text-gray-500">Quantity : {moreInfoDetail.quantity}</li>
              <hr />
              <li
                onClick={() => {
                  setState({ bottom: false });
                  isLogin
                    ? setRemoveCartItemStart({ itemId: moreInfoDetail.productId, size: moreInfoDetail.selectSize })
                    : removeItemToCart({ itemId: moreInfoDetail._id, size: moreInfoDetail.selectSize });
                }}
                className="py-4 text-red-500 cursor-pointer"
              >
                Delete
              </li>
            </ul>
          </div>
        </Drawer>
      )}
      <Snackbar
        autoHideDuration={2000}
        anchorOrigin={{ vertical: snackbar.vertical, horizontal: snackbar.horizontal }}
        open={snackbar.open}
        key={snackbar.vertical + snackbar.horizontal}
      >
        <Alert severity={snackbar.warning}>{snackbar.message}</Alert>
      </Snackbar>
    </div>
  );
};

const mapStateToProps = (state) => ({
  savedItems: state.wishlist.items,
  isLogin: state.auth.isLogin,
});

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItemToCart(item)),
  removeSavedItem: (id) => dispatch(removeSavedItem(id)),
  removeItemToCart: (details) => dispatch(removeItemToCart(details)),
  addSavedItem: (item) => dispatch(addSavedItem(item)),
  updateCartItemQuantity,
  // online
  setAddCartItemStart: (item) => dispatch(setAddCartItemStart(item)),
  setRemoveCartItemStart: (details) => dispatch(setRemoveCartItemStart(details)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartProductList);
