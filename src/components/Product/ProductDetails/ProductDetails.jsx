import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";

// design
import CircularProgress from "@material-ui/core/CircularProgress";

// redux
import { addItemToCart, addSavedItem } from "../../../app/actions";
import Loader from "src/components/Loader/Loader";

const ProductDetails = (props) => {
  console.log(props);
  const { match, addItemToCart, addSavedItem, cart, savedItems } = props;
  const [product, setProducts] = useState({});
  const [selectSize, setSelectSize] = useState(null);

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

  const alreadyItemInCart = cart.some((c) => match.params.id === c._id);
  const alreadyItemInWishlist = savedItems.some((c) => match.params.id === c._id);

  console.log(alreadyItemInWishlist, savedItems);

  return (
    <div className="pb-28">
      <div>
        <div className="flex justify-between w-full px-3 py-3 fixed bg-white">
          <Link to="/">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6" viewBox="0 0 512 512">
                <title>Arrow Back</title>
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="48"
                  d="M244 400L100 256l144-144M120 256h292"
                />
              </svg>
            </div>
          </Link>
          <div className="flex items-center space-x-3">
            <Link to="/favorite">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6" viewBox="0 0 512 512">
                  <title>Heart</title>
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
            </Link>

            <Link to="/cart">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6" viewBox="0 0 512 512">
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
            </Link>
          </div>
        </div>

        <img
          className="justify-center xl:w-80"
          src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2019/7/27/110eefa8-e43b-4c42-85f7-83592dc9c9701564175877424-1.jpg"
          alt=""
        />
      </div>

      <div className="px-3 mt-3 space-y-3">
        <div className="">
          <div className="flex items-center justify-between">
            <h1 className="font-semibold">{product.productName}</h1>
            <span className="font-semibold">Rs. {product.price}</span>
          </div>
          <p className="text-base text-gray-500">{product.description}</p>
        </div>
        <div>
          <span className="font-semibold">Size</span>
          <div className="mt-1">
            <select onClick={(e) => setSelectSize(e.target.value)} class="block border rounded-md py-1 px-1 xl:py-2 xl:px-2 bg-white outline-none w-full">
              {product.sizes.map((size) => (
                <option>{size}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex items-center space-x-5 w-full">
          <div className="w-full">
            <button onClick={() => addItemToCart(product)} className="w-full bg-green-600 text-white py-2 font-bold uppercase">
              Add To Bag
            </button>
          </div>
          <div>
            <div onClick={() => addSavedItem(product)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 bg-gray-200 py-2 px-2 rounded-full" viewBox="0 0 512 512">
                <title>Heart</title>
                <path
                  d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"
                  fill={alreadyItemInWishlist ? "true" : "false"}
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                />
              </svg>
            </div>
          </div>
        </div>
        <div>
          <span className="font-semibold">Product Details</span>
          <p className="text-gray-500 mt-1">
            Black and grey checked casual shirt, has a spread collar, long roll-up sleeves, button placket, curved hem, and 1 patch pocket
          </p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart.cart,
  savedItems: state.savedItem.items,
});

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItemToCart(item)),
  addSavedItem: (item) => dispatch(addSavedItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
