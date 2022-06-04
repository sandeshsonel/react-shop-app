import * as React from "react";
import { Link } from "react-router-dom";
// import { makeStyles } from "@material-ui/core/styles";

// import homeIcon from "assets/images/home-outline.svg";
// import bagIcon from "assets/images/home-outline.svg";
// import userAccountIcon from "assets/images/person.svg";

const HomeBottomNavigation = () => {
   const [value, setValue] = React.useState(0);
   let pathName = window.location.pathname;

   console.log("path", pathName);

   return (
      <section className="block fixed border-t max-w-xl mx-auto inset-x-0 bottom-0 z-10 bg-white">
         <div id="tabs" className="flex justify-between">
            <Link
               to="/"
               className={`${
                  pathName === "/" && "text-black"
               } hover:text-black w-full cursor-pointer justify-center inline-block text-center pt-2 pb-1`}
            >
               {pathName !== "/" ? (
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     className="inline-block mb-1 w-6"
                     viewBox="0 0 512 512"
                  >
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
               ) : (
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     className="inline-block mb-1 w-6"
                     viewBox="0 0 512 512"
                  >
                     <title>Home</title>
                     <path d="M261.56 101.28a8 8 0 00-11.06 0L66.4 277.15a8 8 0 00-2.47 5.79L63.9 448a32 32 0 0032 32H192a16 16 0 0016-16V328a8 8 0 018-8h80a8 8 0 018 8v136a16 16 0 0016 16h96.06a32 32 0 0032-32V282.94a8 8 0 00-2.47-5.79z" />
                     <path d="M490.91 244.15l-74.8-71.56V64a16 16 0 00-16-16h-48a16 16 0 00-16 16v32l-57.92-55.38C272.77 35.14 264.71 32 256 32c-8.68 0-16.72 3.14-22.14 8.63l-212.7 203.5c-6.22 6-7 15.87-1.34 22.37A16 16 0 0043 267.56L250.5 69.28a8 8 0 0111.06 0l207.52 198.28a16 16 0 0022.59-.44c6.14-6.36 5.63-16.86-.76-22.97z" />
                  </svg>
               )}
               <span className="tab tab-home block text-xs">Home</span>
            </Link>
            <Link
               to="/my-orders"
               className={`${
                  pathName === "/my-orders" && "text-black"
               } hover:text-black w-full cursor-pointer justify-center inline-block text-center pt-2 pb-1`}
            >
               {pathName !== "/my-orders" ? (
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     className="inline-block mb-1 w-6"
                     viewBox="0 0 512 512"
                  >
                     <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="32"
                        d="M80 176a16 16 0 00-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 00-16-16zM160 176v-32a96 96 0 0196-96h0a96 96 0 0196 96v32"
                     />
                  </svg>
               ) : (
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     className="inline-block mb-1 w-6"
                     viewBox="0 0 512 512"
                  >
                     <title>Bag</title>
                     <path d="M454.65 169.4A31.82 31.82 0 00432 160h-64v-16a112 112 0 00-224 0v16H80a32 32 0 00-32 32v216c0 39 33 72 72 72h272a72.22 72.22 0 0050.48-20.55 69.48 69.48 0 0021.52-50.2V192a31.75 31.75 0 00-9.35-22.6zM176 144a80 80 0 01160 0v16H176z" />
                  </svg>
               )}
               <span className="tab tab-home block text-xs">My Orders</span>
            </Link>
            <Link
               to="/account"
               className={`${
                  pathName === "/account" && "text-black"
               } hover:text-black w-full cursor-pointer justify-center inline-block text-center pt-2 pb-1`}
            >
               {pathName !== "/account" ? (
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     class="ionicon"
                     className="inline-block mb-1 w-6"
                     viewBox="0 0 512 512"
                  >
                     <title>Person</title>
                     <path
                        d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="32"
                     />
                     <path
                        d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z"
                        fill="none"
                        stroke="currentColor"
                        stroke-miterlimit="10"
                        stroke-width="32"
                     />
                  </svg>
               ) : (
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     className="inline-block mb-1 w-6"
                     viewBox="0 0 512 512"
                  >
                     <title>Person</title>
                     <path d="M332.64 64.58C313.18 43.57 286 32 256 32c-30.16 0-57.43 11.5-76.8 32.38-19.58 21.11-29.12 49.8-26.88 80.78C156.76 206.28 203.27 256 256 256s99.16-49.71 103.67-110.82c2.27-30.7-7.33-59.33-27.03-80.6zM432 480H80a31 31 0 01-24.2-11.13c-6.5-7.77-9.12-18.38-7.18-29.11C57.06 392.94 83.4 353.61 124.8 326c36.78-24.51 83.37-38 131.2-38s94.42 13.5 131.2 38c41.4 27.6 67.74 66.93 76.18 113.75 1.94 10.73-.68 21.34-7.18 29.11A31 31 0 01432 480z" />
                  </svg>
               )}
               <span className="tab tab-account block text-xs">Account</span>
            </Link>
         </div>
      </section>
   );
};

export default HomeBottomNavigation;
