import React, { useState, useEffect } from "react";
import { Redirect } from "react-router";
import "./productlist.style.css";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import { connect } from "react-redux";
import axios from "axios";

import productDummy from "../../../assets/data/products";

// redux
import { addItemToCart, addSavedItem } from "../../../app/actions";
import Loader from "src/components/Loader/Loader";

const ProductDetails = (props) => {
  console.log(props);
  const { match, addItemToCart, addSavedItem, cart, savedItems, isLogin } = props;
  const [product, setProducts] = useState({});
  const [selectSize, setSelectSize] = useState(null);
  const [snackbar, setSnackbar] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
    message: "",
    warning: "success",
  });

  const getProduct = async () => {
    const result = await axios.get(`http://localhost:8000/api/v1/products/${match.params.id}`);
    setProducts(result.data.data.product);
  };

  useEffect(() => {
    getProduct();
  }, []);

  if (Object.keys(product).length === 0) {
    return (
      <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
        <Loader />
      </div>
    );
  }

  const handleClick = (newState) => () => {
    setSnackbar({ open: true, ...newState });
  };

  const handleClose = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const handleAddItemToBag = () => {
    if (selectSize === null) {
      alert("Please Select Size");
      // setSnackbar({ ...snackbar, message: "Please Select Size", open: true, warning: "error" });
      // setSnackbar({ ...snackbar, open: true });
    }
  };

  const handleSavedItem = (product) => {
    if (isLogin) {
      addSavedItem(product);
    } else {
      props.history.push("/loginSign");
      // <Redirect to="/auth" />;
      return;
    }
  };

  const productDummyObject = productDummy.find((product) => product._id === match.params.id);
  console.log(productDummyObject);

  const alreadyItemInCart = cart.some((c) => match.params.id === c._id);
  const alreadyItemInWishlist = savedItems.some((c) => match.params.id === c._id);

  console.log("xoxo", props);

  const sizesOptions = () => {
    let array = [];

    for (let i = 0; i < product.sizes.length; i++) {
      array.push(<option value={product.sizes[i]}>{productDummyObject.sizes[i]}</option>);
    }

    return array;
  };

  console.log("xoxo", isLogin);

  return (
    <div className="pb-28">
      <div>
        <img
          className="justify-center xl:w-80 mt-10"
          src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2019/7/27/110eefa8-e43b-4c42-85f7-83592dc9c9701564175877424-1.jpg"
          alt=""
        />
      </div>

      <div className="px-3 mt-3 space-y-3">
        <div className="">
          <div className="leading-7">
            <h1 className="font-bold">{product.productName}</h1>
            <p className="text-gray-500 text-sm">{product.description}</p>
          </div>
          <div className="text-sm space-x-1 mt-2">
            <span className="text-sm font-bold">Rs. {Math.floor(product.price - (product.price * product.priceDiscount) / 100)}</span>
            <span className="line-through text-gray-500">{product.price}</span>
            <span className="text-red-500">{`(${product.priceDiscount}) % OFF`}</span>
          </div>
        </div>
        <div>
          <span className="font-semiBold uppercase text-sm text-gray-500">Size:</span>
          <div className="mt-1">
            <select
              onClick={(e) => setSelectSize(e.target.value)}
              class="block border border-gray-400 focus:border-black py-2 px-1 xl:py-2 xl:px-2 bg-white outline-none w-full"
            >
              <option selected disabled>
                Please select
              </option>
              {sizesOptions()}
            </select>
          </div>
        </div>

        <div>
          <span className="font-semiBold uppercase text-sm text-gray-500">Product Details</span>
          <p className="text-gray-500 mt-1">
            Black and grey checked casual shirt, has a spread collar, long roll-up sleeves, button placket, curved hem, and 1 patch pocket
          </p>
        </div>
      </div>
      <footer className="bottom-0 sticky w-full mt-10">
        <div className="flex items-center py-2 space-x-3 bg-white">
          <div className="w-full">
            <button onClick={() => handleSavedItem(product)} className="border w-full uppercase py-3 text-sm font-semiBold outline-none">
              <div>
                <span>WishList</span>
              </div>
            </button>
          </div>
          <div className="w-full">
            <button
              // onClick={handleAddItemToBag}
              // onClick={handleClick({ vertical: "bottom", horizontal: "center" })}
              onClick={() => addItemToCart({ ...product, quantity: 5 })}
              className="w-full bg-black uppercase text-sm py-3 font-semiBold outline-none text-white"
            >
              <span>Add To Bag</span>
            </button>
          </div>
        </div>
      </footer>
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
  cart: state.cart.cart,
  savedItems: state.savedItem.items,
  isLogin: state.auth.isLogin,
});

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItemToCart(item)),
  addSavedItem: (item) => dispatch(addSavedItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
