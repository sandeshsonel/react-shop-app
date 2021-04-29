import React from "react";
import { connect } from "react-redux";
import { removeSavedItem, addItemToCart, setAddCartItemStart, setRemoveCartItemStart } from "../../../app/actions";

import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

const WishListProductList = (props) => {
  const { savedItems, removeSavedItem, addItemToCart, isLogin } = props;

  const [snackbar, setSnackbar] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
    message: "",
    warning: "success",
  });

  const sizesOptions = (product) => {
    let array = [];

    for (let i = 0; i < product.sizes.length; i++) {
      array.push(<option value={product.sizes[i]}>{product.sizes[i]}</option>);
    }

    return array;
  };

  const handleMoveItemToBag = (item) => {
    // if (!item.selectSize) {
    //   setSnackbar({ ...snackbar, open: true, message: "Please Select Size", warning: "error" });
    //   setTimeout(() => {
    //     setSnackbar({ ...snackbar, open: false, message: "", warning: "" });
    //   }, 2000);
    // } else {
    if (isLogin) {
      setAddCartItemStart(item);
      setRemoveCartItemStart(item._id);
    } else {
      addItemToCart(item);
      removeSavedItem(item._id);
    }
    // }
  };

  console.log("xolo", props);

  return (
    <div className="px-3 xl:px-0 mt-16">
      <div className="grid grid-cols-2 xl:grid-cols-3 gap-3">
        {savedItems.map((item, idx) => (
          <div className="" key={idx}>
            <div className="relative">
              <img
                className=""
                src="https://images.asos-media.com/products/ellesse-prado-t-shirt-in-green/22255224-1-khaki?$n_240w$&wid=238&fit=constrain"
                alt=""
              />
              <div className="absolute top-0 right-0 mr-1 mt-1 cursor-pointer">
                <svg onClick={() => removeSavedItem(item._id)} xmlns="http://www.w3.org/2000/svg" class="fill-current text-gray-600 w-7" viewBox="0 0 512 512">
                  <path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z" />
                </svg>
              </div>
            </div>
            <div className="mt-1">
              <div>
                <h1 className="font-semibold text-sm uppercase font-semiBold">{item.productName}</h1>
                <p className="text-sm text-gray-500">Men White & Sea Green Slim Fit Striped Casual Shirt</p>
                <div>
                  <span className="text-sm font-semiBold">Rs. {Math.floor(item.price - (item.price * item.priceDiscount) / 100)} </span>
                </div>
              </div>
              <div className="w-full py-2">
                <select onClick="" className="w-full border bg-white py-1 border-black">
                  <option selected disabled>
                    Select size
                  </option>
                  {sizesOptions(item)}
                </select>
              </div>
              <div>
                <button onClick={() => handleMoveItemToBag(item)} className="w-full border-2 border-green-600 font-semiBold uppercase py-1 text-sm">
                  Move To Bag
                </button>
              </div>
            </div>
          </div>
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
  savedItems: state.wishlist.items,
  isLogin: state.auth.isLogin,
});

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItemToCart(item)),
  removeSavedItem: (id) => dispatch(removeSavedItem(id)),
  // api actions
  setAddCartItemStart: (item) => dispatch(setAddCartItemStart(item)),
  setRemoveCartItemStart: (id) => dispatch(setRemoveCartItemStart(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WishListProductList);
