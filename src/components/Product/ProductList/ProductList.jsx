import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";

import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

import { addSavedItem, setAddCartItemStart } from "../../../app/actions";

const ProductList = ({ isLogin, products, addSavedItem, setAddCartItemStart, savedItems }) => {
  let history = useHistory();
  const [snackbar, setSnackbar] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
    message: "",
    warning: "success",
  });

  const routeChange = (product) => {
    let path = `/productDetails/${product.gender}/${product.category}/${product.productName.replace(/\s/g, "")}/${product._id}`;
    history.push(path);
  };

  const handleSavedItem = (product) => {
    let alreadyItemInSaved = savedItems.some((saveItem) => product._id === saveItem._id);
    if (alreadyItemInSaved) {
      setSnackbar({ ...snackbar, open: true, message: "Already item exists in wishlist", warning: "error" });
      setTimeout(() => {
        setSnackbar({ ...snackbar, open: false, message: "", warning: "" });
      }, 2000);
    } else {
      if (isLogin) {
        setAddCartItemStart(product);
      } else {
        addSavedItem(product);
      }

      setSnackbar({ ...snackbar, open: true, message: "Item save in wishlist", warning: "success" });
      setTimeout(() => {
        setSnackbar({ ...snackbar, open: false, message: "", warning: "" });
      }, 2000);
    }
  };
  // let productFilterByFav = [];
  // for (let i = 0; i < products.length; i++) {
  //   for (let j = 0; j < savedItems.length; j++) {
  //     if (products[i]._id === savedItems[j]._id) {
  //       productFilterByFav.push({ ...products[i], fav: true });
  //     } else {
  //       productFilterByFav.push(products[i]);
  //     }
  //   }
  // }
  // let productsItems = !productFilterByFav.length ? products : productFilterByFav;
  // console.log(productFilterByFav);
  // const mathFavItem = products.map((pro) => savedItems.find((savedItem) => savedItem._id !== pro._id ? p));
  // console.log("xono", mathFavItem);
  return (
    <div className="mt-2 xl:mt-4 pb-24">
      <div className="grid grid-cols-2 gap-3 xl:grid xl:grid-cols-3 xl:gap-4 lg:grid lg:grid-cols-3 md:grid md:grid-cols-3 sm:grid sm:grid-cols-3 ">
        {products.map((product) => (
          // <Link to={`/productDetails/${product.gender}/${product.category}/${product.productName.replace(/\s/g, "")}/${product._id}`}>
          <div className="cursor-pointer hover:opacity-75 w-auto h-auto">
            <div className="relative">
              <img
                onClick={() => routeChange(product)}
                src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2019/7/27/110eefa8-e43b-4c42-85f7-83592dc9c9701564175877424-1.jpg"
                alt=""
              />
              <button className="absolute cursor-pointer bottom-0 right-0 mr-2 mb-2 bg-white bg-opacity-70 px-1 py-1 rounded-full focus:ring-2 focus:ring-offset-2 focus:ring-offset-pink-500 focus:ring-pink-300 focus:outline-none transition-colors duration-200">
                {product.fav ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 fill-current text-pink-600" viewBox="0 0 512 512">
                    <title>Heart</title>
                    <path d="M256 448a32 32 0 01-18-5.57c-78.59-53.35-112.62-89.93-131.39-112.8-40-48.75-59.15-98.8-58.61-153C48.63 114.52 98.46 64 159.08 64c44.08 0 74.61 24.83 92.39 45.51a6 6 0 009.06 0C278.31 88.81 308.84 64 352.92 64c60.62 0 110.45 50.52 111.08 112.64.54 54.21-18.63 104.26-58.61 153-18.77 22.87-52.8 59.45-131.39 112.8a32 32 0 01-18 5.56z" />
                  </svg>
                ) : (
                  <svg
                    onClick={() =>
                      // addSavedItem(product)
                      handleSavedItem(product)
                    }
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6"
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
              </button>
            </div>
            <div onClick={() => routeChange(product)} className="mt-1">
              <h1 className="font-semiBold text-sm">{product.productName}</h1>
              <p className="text-sm text-gray-500 break-words overflow-ellipsis">{product.description}</p>
              <div className="text-sm space-x-1">
                <span className="text-sm font-bold">Rs. {Math.floor(product.price - (product.price * product.priceDiscount) / 100)}</span>
                <span className="line-through text-gray-500">{product.price}</span>
                <span className="text-red-500">{`(${product.priceDiscount}) % OFF`}</span>
              </div>
            </div>
          </div>
          // </Link>
        ))}
      </div>
      <Snackbar
        autoHideDuration={2000}
        anchorOrigin={{ vertical: snackbar.vertical, horizontal: snackbar.horizontal }}
        open={snackbar.open}
        // onClose={handleClose}
        key={snackbar.vertical + snackbar.horizontal}
      >
        <Alert severity={snackbar.warning}>{snackbar.message}</Alert>
      </Snackbar>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLogin: state.auth.isLogin,
  savedItems: state.wishlist.items,
});

const mapDispatchToProps = (dispatch) => ({
  addSavedItem: (item) => dispatch(addSavedItem(item)),
  setAddCartItemStart: (item) => dispatch(setAddCartItemStart(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
