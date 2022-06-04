import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import heartIcon from "assets/images/heart-outline.svg";
import notificationIcon from "assets/images/notifications-outline.svg";
import cartIcon from "assets/images/cart-outline.svg";
import searchIcon from "assets/images/search-outline.svg";

import IconButton from "@mui/material/IconButton";

const Header = ({ children, isShowSideOption = true, ...props }) => {
   let pathName = window.location.pathname;
   return (
      <div className="px-2 xl:px-0 py-2 flex items-center sticky top-0 z-50 bg-white justify-between border-b shadow-sm">
         {children}
         {isShowSideOption && (
            <div className="flex items-center space-x-1">
               {pathName === "/" && (
                  <>
                     <Link to="/my-products/wishlist">
                        <IconButton size="medium">
                           <img
                              className="w-6"
                              src={heartIcon}
                              alt="heart-icon"
                           />
                        </IconButton>
                     </Link>
                     <Link to="/notification">
                        <IconButton>
                           <img
                              className="w-6"
                              src={notificationIcon}
                              alt="notification-icon"
                           />
                        </IconButton>
                     </Link>
                  </>
               )}
               {pathName !== "/" && (
                  <Link to="/search">
                     <IconButton>
                        <img className="w-6" src={searchIcon} alt="cart-icon" />
                     </IconButton>
                  </Link>
               )}
               <Link to="/my-cart">
                  <IconButton>
                     <img className="w-6" src={cartIcon} alt="cart-icon" />
                  </IconButton>
               </Link>
            </div>
         )}
      </div>
   );
};

Header.propTypes = {
   isShowSideOption: PropTypes.bool,
};

export default Header;
