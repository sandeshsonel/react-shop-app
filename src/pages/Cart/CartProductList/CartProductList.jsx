import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Slide } from "react-slideshow-image";
import IconButton from "@material-ui/core/IconButton";
import Drawer from "@material-ui/core/Drawer";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

import { removeSavedItem, addItemToCart, removeItemToCart, addSavedItem, setRemoveCartItemStart, setAddCartItemStart } from "../../../app/actions";
import { SignalCellularNullTwoTone } from "@material-ui/icons";

const CartProductList = (props) => {
  console.log(props);
  const { savedItems, removeSavedItem, cartItems, removeItemToCart, addSavedItem, setRemoveCartItemStart, isLogin, setAddCartItemStart } = props;
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
    console.log(cartItem);
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
        setAddCartItemStart(moreInfoDetail);
        setRemoveCartItemStart(moreInfoDetail._id);
      } else {
        addSavedItem(moreInfoDetail);
        removeItemToCart(moreInfoDetail._id);
      }
      // setSnackbar({ ...snackbar, open: true, message: "Item add in wishlist", warning: "error" });
      // setTimeout(() => {
      //   setSnackbar({ ...snackbar, open: false, message: "", warning: "" });
      // }, 2000);
      setState({ bottom: false });
    }
  };

  const quantityOption = (quantity) => {
    console.log(quantity);
    let array = [];

    for (let i = 1; i <= 5; i++) {
      if (i !== quantity) {
        array.push(<option value={i}>{i}</option>);
      }
    }

    return array;
  };

  // Math.floor(cartItem.price - (cartItem.price * cartItem.priceDiscount) / 100)
  const subTotal = cartItems
    .map((cartItem) => [Math.floor(cartItem.price - (cartItem.price * cartItem.priceDiscount) / 100)])
    .reduce((r, a) => r.concat(a), [])
    .reduce((acc, cur) => acc + cur, 0);
  // .map((value, idx) => value.reduce((sum, curr) => sum + curr[idx], 0));
  console.log("lolo", subTotal);

  return (
    <div className="mt-16 pb-10">
      <div className="space-y-3 xl:max-h-80 overflow-y-auto">
        {cartItems.map((cartItem) => (
          <div className="flex items-start space-x-3 border-b">
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
                <div className="mt-1">
                  <div className="cursor-pointer hidden xl:block lg:block md:block sm:block">
                    <svg onClick={() => removeItemToCart(cartItem._id)} xmlns="http://www.w3.org/2000/svg" class="w-6" viewBox="0 0 512 512">
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="32"
                        d="M368 368L144 144M368 144L144 368"
                      />
                    </svg>
                  </div>
                  <div className="block xl:hidden lg:hidden md:hidden sm:hidden">
                    <IconButton onClick={() => handleMoreInfoButton(cartItem)} size="small">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5" viewBox="0 0 512 512">
                        <title>Ellipsis Vertical</title>
                        <circle cx="256" cy="256" r="48" />
                        <circle cx="256" cy="416" r="48" />
                        <circle cx="256" cy="96" r="48" />
                      </svg>
                    </IconButton>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center m-auto space-x-3 mt-2 text-sm xl:text-base">
                <div className="w-full">
                  <span className="font-semiBold">Price:</span>
                  <h1 className="mt-1">Rs. {Math.floor(cartItem.price - (cartItem.price * cartItem.priceDiscount) / 100)}</h1>
                </div>
                <div className="w-full">
                  <span className="font-semiBold">Quantity:</span>
                  <select onClick={(e) => setQuantity(e.target.value)} className="w-full mt-1 bg-white border" name="" id="">
                    <option selected value="">
                      {!cartItem.quantity ? "Quantity" : cartItem.quantity}
                    </option>
                    {quantityOption(cartItem.quantity)}
                  </select>
                </div>
                <div className="w-full">
                  <span className="font-semiBold">Total:</span>
                  <h1 className="mt-1">
                    Rs. {Math.floor(cartItem.price - (cartItem.price * cartItem.priceDiscount) / 100) * cartItem.quantity ? cartItem.quantity : 1}
                  </h1>
                </div>
              </div>
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
          <Link to="/checkout">
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
                  isLogin ? setRemoveCartItemStart(moreInfoDetail._id) : removeItemToCart(moreInfoDetail._id);
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
  removeItemToCart: (itemId) => dispatch(removeItemToCart(itemId)),
  addSavedItem: (item) => dispatch(addSavedItem(item)),
  // online
  setAddCartItemStart: (item) => dispatch(setAddCartItemStart(item)),
  setRemoveCartItemStart: (itemId) => dispatch(setRemoveCartItemStart(itemId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartProductList);
