import React, { useState, useEffect } from "react";
import "./productlist.style.css";
import { Slide } from "react-slideshow-image";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";

import productDummy from "../../../assets/data/products";

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

  // if (Object.keys(product).length === 0) {
  //   return (
  //     <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
  //       <Loader />
  //     </div>
  //   );
  // }

  const productDummyObject = productDummy.find((product) => product._id === match.params.id);
  console.log(productDummyObject);

  const alreadyItemInCart = cart.some((c) => match.params.id === c._id);
  const alreadyItemInWishlist = savedItems.some((c) => match.params.id === c._id);

  console.log(alreadyItemInWishlist, savedItems);

  return (
    // <div className="pb-28">
    //   <div>
    //     <div className="flex justify-between w-full px-3 py-3 fixed bg-white">
    //       <Link to="/">
    //         <div>
    //           <svg xmlns="http://www.w3.org/2000/svg" class="w-6" viewBox="0 0 512 512">
    //             <title>Arrow Back</title>
    //             <path
    //               fill="none"
    //               stroke="currentColor"
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //               stroke-width="48"
    //               d="M244 400L100 256l144-144M120 256h292"
    //             />
    //           </svg>
    //         </div>
    //       </Link>
    //       <div className="flex items-center space-x-3">
    //         <Link to="/favorite">
    //           <div>
    //             <svg xmlns="http://www.w3.org/2000/svg" class="w-6" viewBox="0 0 512 512">
    //               <title>Heart</title>
    //               <path
    //                 d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"
    //                 fill="none"
    //                 stroke="currentColor"
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //                 stroke-width="32"
    //               />
    //             </svg>
    //           </div>
    //         </Link>

    //         <Link to="/cart">
    //           <div>
    //             <svg xmlns="http://www.w3.org/2000/svg" class="w-6" viewBox="0 0 512 512">
    //               <title>Bag</title>
    //               <path
    //                 fill="none"
    //                 stroke="currentColor"
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //                 stroke-width="32"
    //                 d="M80 176a16 16 0 00-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 00-16-16zM160 176v-32a96 96 0 0196-96h0a96 96 0 0196 96v32"
    //               />
    //             </svg>
    //           </div>
    //         </Link>
    //       </div>
    //     </div>

    //     <img
    //       className="justify-center xl:w-80"
    //       src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2019/7/27/110eefa8-e43b-4c42-85f7-83592dc9c9701564175877424-1.jpg"
    //       alt=""
    //     />
    //   </div>

    //   <div className="px-3 mt-3 space-y-3">
    //     <div className="">
    //       <div className="leading-7">
    //         <h1 className="font-bold">{productDummyObject.productName}</h1>
    //         <p className="text-gray-500 text-sm">{productDummyObject.description}</p>
    //       </div>
    //       <div className="text-sm space-x-1 mt-2">
    //         <span className="text-sm font-bold">
    //           Rs. {Math.floor(productDummyObject.price - (productDummyObject.price * productDummyObject.priceDiscount) / 100)}
    //         </span>
    //         <span className="line-through text-gray-500">{productDummyObject.price}</span>
    //         <span className="text-red-500">{`(${productDummyObject.priceDiscount}) % OFF`}</span>
    //       </div>
    //     </div>
    //     <div>
    //       <span className="font-semiBold uppercase text-sm text-gray-500">Size:</span>
    //       <div className="mt-1">
    //         <select
    //           onClick={(e) => setSelectSize(e.target.value)}
    //           class="block border border-gray-400 focus:border-black py-2 px-1 xl:py-2 xl:px-2 bg-white outline-none w-full"
    //         >
    //           {productDummyObject.sizes.map((size) => (
    //             <option>{size}</option>
    //           ))}
    //         </select>
    //       </div>
    //     </div>

    //     <div>
    //       <span className="font-semiBold uppercase text-sm text-gray-500">Product Details</span>
    //       <p className="text-gray-500 mt-1">
    //         Black and grey checked casual shirt, has a spread collar, long roll-up sleeves, button placket, curved hem, and 1 patch pocket
    //       </p>
    //     </div>
    //   </div>
    //   <footer className="fixed bottom-0 w-full shadow-lg border-t">
    //     <div className="flex items-center px-3 py-2 space-x-3 bg-white">
    //       <div className="w-full">
    //         <button onClick={() => addSavedItem(productDummyObject)} className="border w-full uppercase py-3 text-sm font-semiBold outline-none">
    //           <div>
    //             <span>WishList</span>
    //           </div>
    //         </button>
    //       </div>
    //       <div className="w-full">
    //         <button onClick={() => addItemToCart(productDummyObject)} className="w-full bg-black uppercase text-sm py-3 font-semiBold outline-none text-white">
    //           <div></div>
    //           <span>Add To Bag</span>
    //         </button>
    //       </div>
    //     </div>
    //   </footer>
    // </div>
    <div>
      <Slide easing="ease">
        <div className="each-slide">
          <div
            style={{
              backgroundImage:
                "url(" +
                "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2019/7/27/110eefa8-e43b-4c42-85f7-83592dc9c9701564175877424-1.jpg" +
                ")",
            }}
          >
            <span>Slide 1</span>
          </div>
        </div>
        <div className="each-slide">
          <div
            style={{
              backgroundImage:
                "url(" +
                "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2019/7/27/110eefa8-e43b-4c42-85f7-83592dc9c9701564175877424-1.jpg" +
                ")",
            }}
          >
            <span>Slide 2</span>
          </div>
        </div>
        <div className="each-slide">
          <div
            style={{
              backgroundImage:
                "url(" +
                "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2019/7/27/110eefa8-e43b-4c42-85f7-83592dc9c9701564175877424-1.jpg" +
                ")",
            }}
          >
            <span>Slide 3</span>
          </div>
        </div>
      </Slide>
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
