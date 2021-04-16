import React, { useState } from "react";
import { connect } from "react-redux";
import { Slide } from "react-slideshow-image";
import IconButton from "@material-ui/core/IconButton";
import Drawer from "@material-ui/core/Drawer";

import { removeSavedItem, addItemToCart } from "../../../app/actions";

const CartProductList = (props) => {
  console.log(props);
  const { savedItems, removeSavedItem, cartItems } = props;
  const [state, setState] = React.useState({
    bottom: false,
  });
  const [quantity, setQuantity] = useState();

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }

    setState({ bottom: open });
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

  console.log(cartItems);
  return (
    <div className="mt-16 pb-10">
      <div className="space-y-3">
        {cartItems.map((cartItem) => (
          <div className="flex items-start space-x-3">
            <div>
              <img
                className="w-52"
                src="https://images.asos-media.com/products/new-look-tie-sleeve-frill-hem-midi-dress-in-burgundy/22242921-1-darkburgundy"
                alt=""
              />
            </div>
            <div className="w-full">
              <div className="flex justify-between">
                <div>
                  <h1 className="font-semiBold">{cartItem.productName}</h1>
                  <p className="text-sm text-gray-500">{cartItem.description}</p>
                </div>
                <div className="mt-1">
                  <div className="cursor-pointer hidden xl:block lg:block md:block sm:block">
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
                  </div>
                  <div className="block xl:hidden lg:hidden md:hidden sm:hidden">
                    <IconButton onClick={toggleDrawer("buttom", true)} size="small">
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
              <div className="flex justify-between space-x-3 mt-2 text-sm">
                <div className="w-full">
                  <span className="font-semiBold">Price:</span>
                  <h1 className="mt-1">Rs. {Math.floor(cartItem.price - (cartItem.price * cartItem.priceDiscount) / 100)}</h1>
                </div>
                <div className="w-full">
                  <span className="font-semiBold">Quantity:</span>
                  <select onClick={(e) => setQuantity(e.target.value)} className="w-full mt-1 bg-white border" name="" id="">
                    <option selected value="">
                      {cartItem.quantity}
                    </option>
                    {quantityOption(cartItem.quantity)}
                  </select>
                </div>
                <div className="w-full">
                  <span className="font-semiBold">Total:</span>
                  <h1 className="mt-1">Rs. {cartItem.quantity * Math.floor(cartItem.price - (cartItem.price * cartItem.priceDiscount) / 100)}</h1>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Drawer anchor="bottom" open={state["bottom"]} onClose={toggleDrawer("buttom", false)}>
        <div className="px-3 text-center">
          <ul className="">
            <li className="py-4 text-green-500">Save for later</li>
            <hr />
            <li className="py-4 text-gray-500">UK 4</li>
            <hr />
            <li className="py-4 text-gray-500">Quantity 1</li>
            <hr />
            <li className="py-4 text-red-500">Delete</li>
          </ul>
        </div>
      </Drawer>
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