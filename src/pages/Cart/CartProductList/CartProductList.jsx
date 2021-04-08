import React from "react";
import { connect } from "react-redux";
import { Slide } from "react-slideshow-image";

import { removeSavedItem, addItemToCart } from "../../../app/actions";

const CartProductList = (props) => {
  console.log(props);
  const { savedItems, removeSavedItem } = props;
  return (
    <div>
      <div className="grid grid-cols-2 gap-3">
        {savedItems.map((item) => (
          <div>
            <div className="relative">
              <div>
                <img src="https://images.asos-media.com/products/ellesse-prado-t-shirt-in-green/22255224-1-khaki?$n_240w$&wid=238&fit=constrain" alt="" />
              </div>
              <div className="bg-white px-1 py-1">
                <svg
                  onClick={() => removeSavedItem(item._id)}
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 cursor-pointer bg-white p-1 rounded-full absolute top-0 right-0 mr-2 mt-2"
                  viewBox="0 0 512 512"
                >
                  <title>Trash</title>
                  <path
                    d="M112 112l20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="32"
                  />
                  <path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M80 112h352" />
                  <path
                    d="M192 112V72h0a23.93 23.93 0 0124-24h80a23.93 23.93 0 0124 24h0v40M256 176v224M184 176l8 224M328 176l-8 224"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="32"
                  />
                </svg>
              </div>
            </div>
            <div>
              <div className="mt-1">
                <h1 className="font-semibold">{item.productName}</h1>
                <p className="text-sm text-gray-500">Men White & Sea Green Slim Fit Striped Casual Shirt</p>
                <div>
                  <span className="text-sm font-semibold">Rs. </span>
                </div>
              </div>
              <div className="w-full">
                <select className="w-full">
                  <option>Select size</option>
                </select>
              </div>
              <div>
                <button onClick={() => addItemToCart(item)} disabled className="w-full border-2 border-green-600 font-semibold uppercase py-1 text-sm">
                  Move To Bag
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  savedItems: state.savedItem.items,
});

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItemToCart(item)),
  removeSavedItem: (id) => dispatch(removeSavedItem(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartProductList);
