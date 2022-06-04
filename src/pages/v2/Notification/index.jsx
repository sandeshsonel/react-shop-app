import React from "react";
import { Link } from "react-router-dom";

import chevronBackIcon from "assets/images/chevron-back-outline.svg";

import IconButton from "@mui/material/IconButton";

import Header from "v2/components/Header/Header";

const Notification = () => {
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
               <span className="uppercase text-sm">Notifications</span>
            </div>
         </Header>

         <div className="text-center center">
            <span className="uppercase text-xs">No Notifications</span>
            <p className="text-xs text-gray-400">
               We will notify you once we have something for you
            </p>
         </div>
      </div>
   );
};

export default Notification;
