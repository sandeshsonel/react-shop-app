import React from "react";
import { Link } from "react-router-dom";

import chevronBackIcon from "assets/images/chevron-back-outline.svg";

import IconButton from "@mui/material/IconButton";

import SearchBar from "components/SearchBar";

const Search = () => {
   return (
      <div className="">
         <div className="flex items-center space-x-2 border-b px-2 py-2">
            <Link to="/">
               <IconButton>
                  <img
                     src={chevronBackIcon}
                     alt="chevron-back-icon"
                     className="w-6"
                  />
               </IconButton>
            </Link>
            <SearchBar />
         </div>
      </div>
   );
};

export default Search;
