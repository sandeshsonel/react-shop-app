import React from "react";
import { useHistory } from "react-router-dom";

import searchIcon from "assets/images/search-outline.svg";
import micIcon from "assets/images/mic-outline.svg";
import cameraIcon from "assets/images/camera-outline.svg";

const SearchBar = () => {
   const history = useHistory();
   let pathName = window.location.pathname;
   return (
      <div className="py-2 px-3 border border-gray-400 rounded-md inline-block w-full">
         <div className="flex items-center space-x-4">
            <div
               onClick={() => pathName === "/" && history.push("/search")}
               className="flex items-center space-x-2 cursor-pointer border-r w-full"
            >
               <div>
                  <img className="w-6" src={searchIcon} alt="search-icon" />
               </div>
               <input
                  disabled={pathName === "/"}
                  autoFocus
                  className="outline-none bg-white cursor-pointer border-none text-tiny w-full"
                  type="text"
                  placeholder="Search by keyword or Product ID"
               />
            </div>
            <div className="flex items-center space-x-5">
               <button>
                  <img className="w-7" src={micIcon} alt="mic-icon" />
               </button>
               <button>
                  <img className="w-7" src={cameraIcon} alt="camera-icon" />
               </button>
            </div>
         </div>
      </div>
   );
};

export default SearchBar;
