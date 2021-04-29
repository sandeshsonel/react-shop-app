import React, { useState, useEffect } from "react";
import { Redirect } from "react-router";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./productlist.style.css";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import { connect } from "react-redux";
import axios from "axios";

import productDummy from "../../../assets/data/products";

// redux
import { addItemToCart, addSavedItem, removeItemToCart, setAddCartItemStart } from "../../../app/actions";
import Loader from "src/components/Loader/Loader";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  // centerMode: true
  swipeToSlide: true,
  arrow: true,
};

const ProductDetails = (props) => {
  console.log(props);
  const { match, addItemToCart, addSavedItem, cart, savedItems, isLogin, removeItemToCart, setAddCartItemStart } = props;
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

  const handleAddItemToBag = (product) => {
    const alreadyItemInCart = cart.some((c) => product._id === c._id);
    console.log("xolo", alreadyItemInCart);

    if (selectSize === null) {
      setSnackbar({ ...snackbar, open: true, message: "Please Select Size", warning: "error" });
      setTimeout(() => {
        setSnackbar({ ...snackbar, open: false, message: "", warning: "" });
      }, 2000);
    } else if (alreadyItemInCart) {
      setSnackbar({ ...snackbar, open: true, message: "Already item in cart", warning: "error" });
      setTimeout(() => {
        setSnackbar({ ...snackbar, open: false, message: "", warning: "" });
      }, 2000);
    } else {
      if (isLogin) {
        setAddCartItemStart(product);
      } else {
        addItemToCart({ ...product, selectSize: selectSize });
      }
      setSnackbar({ ...snackbar, open: true, message: "Add Item To Cart", warning: "success" });
      setTimeout(() => {
        setSnackbar({ ...snackbar, open: false, message: "", warning: "" });
      }, 2000);
      // props.history.push("/cart");
    }
  };

  const handleSavedItem = (product) => {
    let alreadyItemInSaved = savedItems.some((saveItem) => product._id === saveItem._id);

    if (alreadyItemInSaved) {
      setSnackbar({ ...snackbar, open: true, message: "Already item exists in wishlist", warning: "error" });
      setTimeout(() => {
        setSnackbar({ ...snackbar, open: false, message: "", warning: "" });
      }, 2000);
    } else {
      addSavedItem(product);
      setSnackbar({ ...snackbar, open: true, message: "Item save in wishlist", warning: "success" });
      setTimeout(() => {
        setSnackbar({ ...snackbar, open: false, message: "", warning: "" });
      }, 2000);
    }
    // if (isLogin) {

    // } else {
    //   setSnackbar({ ...snackbar, open: true, message: "Please ", warning: "success" });
    //   setTimeout(() => {
    //     setSnackbar({ ...snackbar, open: false, message: "", warning: "" });
    //   }, 2000);
    //   props.history.push("/loginSign");
    //   // <Redirect to="/auth" />;
    //   return;
    // }
  };

  const productDummyObject = productDummy.find((product) => product._id === match.params.id);
  console.log(productDummyObject);

  const alreadyItemInCart = cart.some((c) => match.params.id === c._id);
  const alreadyItemInWishlist = savedItems.some((c) => match.params.id === c._id);

  console.log("xoxo", props);

  const sizesOptions = () => {
    let array = [];

    for (let i = 0; i < product.sizes.length; i++) {
      array.push(<option value={product.sizes[i]}>{product.sizes[i]}</option>);
    }

    return array;
  };

  console.log("xoxo", isLogin);

  return (
    <div className="pb-28">
      <div>
        {/* <img
          className="justify-center xl:w-80 mt-10"
          src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2019/7/27/110eefa8-e43b-4c42-85f7-83592dc9c9701564175877424-1.jpg"
          alt=""
        /> */}
        <div className="mt-10">
          <Slider {...settings}>
            <div>
              <img
                className="w-auto"
                src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2019/7/27/110eefa8-e43b-4c42-85f7-83592dc9c9701564175877424-1.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="w-auto"
                src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2019/7/27/110eefa8-e43b-4c42-85f7-83592dc9c9701564175877424-1.jpg"
                alt=""
              />
            </div>
          </Slider>
        </div>
      </div>

      <div className="px-3 xl:px-0 mt-3 space-y-3">
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
              onChange={(e) => setSelectSize(e.target.value)}
              class="block border border-gray-400 focus:border-black py-2 px-1 xl:py-2 xl:px-2 bg-white outline-none w-full"
            >
              <option selected disabled>
                Please select
              </option>
              {sizesOptions()}
            </select>
          </div>
        </div>

        <div className="space-y-5 mt-4">
          {product.productDetails.map((prod) => (
            <div>
              <span className="font-semiBold uppercase text-base text-gray-500">{prod.title}</span>
              <ul className="mt-2">{prod.description}</ul>
            </div>
          ))}
        </div>
      </div>
      <footer className="px-3 py-2 bg-white xl:px-0 lg:px-0 md:px-0 sm:px-0 bottom-0 sticky w-full mt-10">
        <div className="flex items-center space-x-3">
          <div className="w-full">
            <button
              onClick={() => handleSavedItem(product)}
              className="border w-full uppercase py-3 text-sm xl:text-base lg:text-base md:text-base sm:text-base font-semiBold outline-none"
            >
              <div>
                <span>WishList</span>
              </div>
            </button>
          </div>
          <div className="w-full">
            <button
              type="submit"
              onClick={() => handleAddItemToBag(product)}
              // onClick={() => setAddCartItemStart(product)}
              className="w-full bg-black uppercase text-sm xl:text-base lg:text-base md:text-base sm:text-base py-3 font-semiBold outline-none text-white"
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
  savedItems: state.wishlist.items,
  isLogin: state.auth.isLogin,
});

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItemToCart(item)),
  addSavedItem: (item) => dispatch(addSavedItem(item)),
  setAddCartItemStart: (addItem) => dispatch(setAddCartItemStart(addItem)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
