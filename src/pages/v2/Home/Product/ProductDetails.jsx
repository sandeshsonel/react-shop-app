import React from "react";
import { Link } from "react-router-dom";

import chevronBackIcon from "assets/images/chevron-back-outline.svg";
import forwardIcon from "assets/images/forward.svg";
import cartIcon from "assets/images/cart-outline.svg";
import IconButton from "@mui/material/IconButton";

import Header from "v2/components/Header/Header";

const ProductDetails = () => {
   return (
      <div>
         <Header>
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
            </div>
         </Header>

         <div className="flex items-center space-x-2 fixed bottom-0 w-full max-w-lg py-4 px-4 xl:py-3 xl:px-0 border-t">
            <button className="w-full py-2 border border-black rounded xl:text-tiny">
               <div className="flex items-center justify-center space-x-2">
                  <img src={cartIcon} alt="cart-icon-outline" className="w-5" />
                  <span>Add to Cart</span>
               </div>
            </button>
            <button className="w-full py-2 border border-black rounded xl:text-tiny bg-black text-white">
               <div className="flex items-center justify-center space-x-2">
                  <img
                     src={forwardIcon}
                     alt="cart-icon-outline"
                     className="w-5"
                  />
                  <span>Buy Now</span>
               </div>
            </button>
         </div>
      </div>
   );
};

export default ProductDetails;
