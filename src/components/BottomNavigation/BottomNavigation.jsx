import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles((theme) => ({
  root: {
    textTransform: "uppercase",
    [theme.breakpoints.up("xl")]: {
      display: "none",
    },
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
    width: "100%",
    fontStyle: "uppercase",
    color: "#fff",
    bottom: 0,
    position: "fixed",
    backgroundColor: "#000",
    boxShadow: "inset 0 1px #fff, 0 1px 3px rgba(34,25,25,0.4)",
  },
}));

const BottomNavigationBar = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(1);
  return (
    <div className="">
      <div class="w-full h-screen block xl:hidden lg:hidden md:hidden sm:hidden">
        <section id="bottom-navigation" class="block fixed inset-x-0 bottom-0 z-10 bg-white shadow border-t">
          <div id="tabs" class="flex justify-between">
            <a onClick={() => setValue(1)} class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
              <Link to="/">
                {value === 1 ? (
                  <svg className="inline-block mb-1 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <title>Home</title>
                    <path d="M416 174.74V48h-80v58.45L256 32 0 272h64v208h144V320h96v160h144V272h64l-96-97.26z" />
                  </svg>
                ) : (
                  <svg className="inline-block mb-1 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <title>Home</title>
                    <path
                      d="M80 212v236a16 16 0 0016 16h96V328a24 24 0 0124-24h80a24 24 0 0124 24v136h96a16 16 0 0016-16V212"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="32"
                    />
                    <path
                      d="M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256M400 179V64h-48v69"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="32"
                    />
                  </svg>
                )}
                <span class={value === 1 ? "tab tab-home block text-xs font-semiBold" : "tab tab-home block text-xs"}>Home</span>
              </Link>
            </a>
            <a onClick={() => setValue(2)} class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
              <Link to="/search">
                {value === 2 ? (
                  <svg className="inline-block mb-1 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <title>Search</title>
                    <path d="M456.69 421.39L362.6 327.3a173.81 173.81 0 0034.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 00327.3 362.6l94.09 94.09a25 25 0 0035.3-35.3zM97.92 222.72a124.8 124.8 0 11124.8 124.8 124.95 124.95 0 01-124.8-124.8z" />
                  </svg>
                ) : (
                  <svg className="inline-block mb-1 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <title>Search</title>
                    <path
                      d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
                      fill="none"
                      stroke="currentColor"
                      stroke-miterlimit="10"
                      stroke-width="32"
                    />
                    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M338.29 338.29L448 448" />
                  </svg>
                )}
                <span className={value === 2 ? "tab tab-home block text-xs font-semiBold" : "tab tab-home block text-xs"}>Search</span>
              </Link>
            </a>
            <a onClick={() => setValue(3)} class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
              <Link to="/wishlist">
                {value === 3 ? (
                  <svg className="inline-block mb-1 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <title>Heart</title>
                    <path d="M256 448a32 32 0 01-18-5.57c-78.59-53.35-112.62-89.93-131.39-112.8-40-48.75-59.15-98.8-58.61-153C48.63 114.52 98.46 64 159.08 64c44.08 0 74.61 24.83 92.39 45.51a6 6 0 009.06 0C278.31 88.81 308.84 64 352.92 64c60.62 0 110.45 50.52 111.08 112.64.54 54.21-18.63 104.26-58.61 153-18.77 22.87-52.8 59.45-131.39 112.8a32 32 0 01-18 5.56z" />
                  </svg>
                ) : (
                  <svg className="inline-block mb-1 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <title>Heart</title>
                    <path
                      d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="32"
                    />
                  </svg>
                )}
                <span className={value === 3 ? "tab tab-home block text-xs font-semiBold" : "tab tab-home block text-xs"}>WishList</span>
              </Link>
            </a>
            <a onClick={() => setValue(4)} class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
              <Link to="cart">
                {value === 4 ? (
                  <svg className="inline-block mb-1 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <title>Bag</title>
                    <path d="M454.65 169.4A31.82 31.82 0 00432 160h-64v-16a112 112 0 00-224 0v16H80a32 32 0 00-32 32v216c0 39 33 72 72 72h272a72.22 72.22 0 0050.48-20.55 69.48 69.48 0 0021.52-50.2V192a31.75 31.75 0 00-9.35-22.6zM176 144a80 80 0 01160 0v16H176z" />
                  </svg>
                ) : (
                  <svg className="inline-block mb-1 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <title>Bag</title>
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="32"
                      d="M80 176a16 16 0 00-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 00-16-16zM160 176v-32a96 96 0 0196-96h0a96 96 0 0196 96v32"
                    />
                  </svg>
                )}
                <span className={value === 4 ? "tab tab-home block text-xs font-semiBold" : "tab tab-home block text-xs"}>Cart</span>
              </Link>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BottomNavigationBar;