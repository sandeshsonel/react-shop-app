import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import WishListProductList from "./WishListProductList/WishListProductList";

const WishListPage = ({ isLogin, wishListItems }) => {
  return (
    <div className="">
      {!wishListItems.length ? (
        <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} className="max-w-xs">
          <div className="flex flex-col flex-nowrap justify-between text-center">
            <div>
              <svg className="m-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="23">
                <path
                  d="M17.334 1C21.229.995 23.995 3.754 24 7.875c.005 3.156-1.325 5.885-3.097 8.125a21.224 21.224 0 01-1.902 2.09A27.938 27.938 0 0115.404 21h2.597v2h-5.984L12 22.992l.001-2.255V17h2v2.509c.926-.619 1.844-1.281 2.709-2.031A21.896 21.896 0 0018.245 16c.26-.273.52-.547.756-.825 1.924-2.279 3.003-4.725 2.999-7.298-.003-2.993-1.851-4.88-4.665-4.877a2.5 2.5 0 00-.334.031c-.89.13-2.033.736-3.001 1.573V2.132c.94-.586 1.989-1.025 3.001-1.107.111-.009.223-.025.333-.025zM12 0v7H6.001V5h3.058c-.324-.94-1.661-2.1-3.256-1.99a3.125 3.125 0 00-.802.171C3.383 3.73 1.999 5.544 2 7.872c.002 1.417.347 2.794.964 4.128.843 1.818 2.218 3.552 4.037 5.184.107.097.204.196.315.292.857.742 1.766 1.398 2.684 2.012v2.395a30.664 30.664 0 01-2.999-2.077C3.708 17.216.007 13.134 0 7.876c-.001-1.466.387-2.73 1.001-3.764.966-1.63 2.5-2.678 4-2.998.223-.048.446-.086.666-.1 1.911-.13 3.294.73 4.177 1.66.129.13.157.217.157.217V.001H12z"
                  fill="#2D2D2D"
                  fill-rule="evenodd"
                />
              </svg>
            </div>
            <div className="mt-4">
              <h1 className="font-bold text-xl font-serif">You have no Saved Items</h1>
              <p className="text-sm xl:text-base mt-4">Sign in to sync your Saved Items across all your devices.</p>
              <Link to="/loginSign">
                <button className="bg-black shadow-lg font-bold uppercase py-3 mt-6 text-sm text-white w-full">Sign In</button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <WishListProductList />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  wishListItems: state.savedItem.items,
  isLogin: state.auth.isLogin,
});

export default connect(mapStateToProps)(WishListPage);
