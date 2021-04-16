import React from "react";
import { Link } from "react-router-dom";
import errorLogo from "../../assets/images/errorEmoji.svg";

const NotFoundPage = () => {
  return (
    <div>
      <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} className="">
        <div className="flex flex-col flex-nowrap justify-between text-center max-w-xs">
          <div>
            <img className="w-24 m-auto" src={errorLogo} alt="" />
          </div>
          <div className="mt-4">
            <h1 className="font-bold text-xl font-serif">Oops!</h1>
            <p className="text-sm xl:text-lg mt-4">Sorry, My ASOS is unavailable right now. Why not check out what's new while we fix this?</p>
            <Link to="/wishlist">
              <button className="bg-gray-700 hover:bg-black shadow-lg font-bold uppercase py-3 mt-6 text-sm text-white w-full">Shop New In</button>
            </Link>
            <div className="mt-5">
              <Link to="/">
                <a className="underline text-sm">Continue Shopping</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
