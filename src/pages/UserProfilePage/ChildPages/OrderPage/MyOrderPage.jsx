import React from "react";
import { Link } from "react-router-dom";

const MyOrderPage = (props) => {
  console.log("bobo-props", props);
  return (
    <div>
      <div className="header fixed mt-14 py-2 px-2 flex items-center">
        <Link to="/profile">
          <button className="outline-none focus:outline-none px-1 py-1 bg-gray-100 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6" viewBox="0 0 512 512">
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="48"
                d="M244 400L100 256l144-144M120 256h292"
              />
            </svg>
          </button>
        </Link>
      </div>
      <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} className="max-w-xs">
        <div className="flex flex-col flex-nowrap justify-between text-center">
          <div>
            <svg className="w-16 m-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44">
              <path d="M21 17.667V15h1a1 1 0 10-1-1h-2a3 3 0 114 2.83v.837L34 25v2H10v-2l11-7.333zM22 20l-8 5h16l-8-5z" fill="#2D2D2D" fill-rule="evenodd" />
            </svg>
          </div>
          <div className="mt-2">
            <h1 className="font-bold text-xl font-serif">You currently have no orders</h1>
            <Link to="/">
              <button className="bg-gray-800 hover:bg-black rounded-none shadow-lg font-bold uppercase py-3 mt-6 text-sm text-white w-full">
                Start Shopping
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrderPage;
