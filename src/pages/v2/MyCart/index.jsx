import React from "react";
import { Link } from "react-router-dom";

import chevronBackIcon from "assets/images/chevron-back-outline.svg";
import emptyCartIcon from "assets/images/empty-cart.png";

import IconButton from "@mui/material/IconButton";

import Header from "v2/components/Header/Header";

const MyCart = () => {
   return (
      <div>
         <Header isShowSideOption={false}>
            <div className="flex items-center space-x-1">
               <Link to="/">
                  <IconButton>
                     <img
                        src={chevronBackIcon}
                        alt="chevron-back-icon"
                        className="w-6"
                     />
                  </IconButton>
               </Link>
               <span className="uppercase text-tiny font-medium">Cart</span>
            </div>
         </Header>

         <div className="flex flex-col items-center justify-center center space-y-4">
            <img src={emptyCartIcon} alt="empty-cart-icon" className="w-44" />
            <span className="text-sm font-semiBold">Your cart is empty</span>
            <Link to="/">
               <button className="text-sm border-2 border-black rounded bg-white px-4 py-1">
                  View Products
               </button>
            </Link>
         </div>
      </div>
   );
};

export default MyCart;
