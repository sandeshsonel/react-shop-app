import React from "react";
import { Link } from "react-router-dom";

import userCircleIcon from "assets/images/person-circle-outline.svg";
import chevronForwardIcon from "assets/images/chevron-forward-outline.svg";
import defaultProfile from "assets/images/men.jpg";

import IconButton from "@mui/material/IconButton";
import { CardActionArea } from "@mui/material";

import Header from "v2/components/Header/Header";
import BottomNavigation from "components/BottomNavigation";

const accountOptions = [
   {
      title: "Orders",
      subTitle: "Check your order status",
      link: "/my-orders",
      icon: "",
   },
   {
      title: "Wishlist",
      subTitle: "Your most loved styles",
      link: "/my-products/wishlist",
      icon: "",
   },
   {
      title: "My Bank Details",
      subTitle: "Update your bank details",
      link: "/bank-details",
      icon: "",
   },
   {
      title: "Manage Your Account",
      subTitle: "Password, Email ID and Phone number",
      link: "/profile",
      icon: "",
   },
   {
      title: "Settings",
      subTitle: "Manage notications & delete account",
      link: "/settings",
      icon: "",
   },
];

const Account = () => {
   return (
      <div>
         <Header>
            <span className="uppercase text-sm">Account</span>
         </Header>

         <div className="relative">
            <div className="flex items-center absolute -bottom-14 left-4">
               <Link to="/profile">
                  <img
                     src={defaultProfile}
                     alt="default-men-profile"
                     className="w-28 rounded border border-white"
                     loading="lazy"
                  />
               </Link>
               <span className="mt-10 ml-4 font-semiBold">Sandesh</span>
            </div>
            <div className="bg-gray-600 w-full h-40"></div>
         </div>
         <div className="mt-16 pb-24">
            {accountOptions.map((accOptItem, idx) => (
               <CardActionArea key={idx}>
                  <Link to={accOptItem.link}>
                     <div className="flex items-center justify-between px-3 py-2 bg-white border-b">
                        <div>
                           <div>
                              <span className="text-gray-800 text-tiny">
                                 {accOptItem.title}
                              </span>
                              <p className="text-xs text-gray-500">
                                 {accOptItem.subTitle}
                              </p>
                           </div>
                        </div>
                        <div>
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-5 text-gray-600"
                              viewBox="0 0 512 512"
                           >
                              <path
                                 fill="none"
                                 stroke="currentColor"
                                 stroke-linecap="round"
                                 stroke-linejoin="round"
                                 stroke-width="48"
                                 d="M184 112l144 144-144 144"
                              />
                           </svg>
                        </div>
                     </div>
                  </Link>
               </CardActionArea>
            ))}

            <div className="px-3 py-4">
               <button className="text-xs uppercase w-full border border-red-500 text-red-500 rounded py-2">
                  Log Out
               </button>
            </div>
         </div>
         <BottomNavigation />
      </div>
   );
};

export default Account;
