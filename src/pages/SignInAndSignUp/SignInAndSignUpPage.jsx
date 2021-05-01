import React, { useState, useRef } from "react";
import SignUpForm from "./SignUpForm/SignUpForm";
import SignInForm from "./SignInForm/SignInForm";

const SignInAndSignUpPage = ({ signUpUser, handleClose }) => {
  const [value, setValue] = useState(1);

  return (
    <div className="h-screen pb-10">
      <div className="mt-2">
        <div className="shadow bg-black">
          <div className="header flex items-center justify-between py-2 px-3">
            <div>
              <a className="text-xl font-semibold text-white uppercase border border-white px-1 py-1 rounded-sm" href="">
                Shops
              </a>
            </div>
            <div>
              <svg onClick={handleClose} xmlns="http://www.w3.org/2000/svg" className="fill-current text-white w-7" viewBox="0 0 512 512">
                <title>Close Circle</title>
                <path
                  d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
                  fill="none"
                  stroke="currentColor"
                  stroke-miterlimit="10"
                  stroke-width="32"
                />
                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M320 320L192 192M192 320l128-128" />
              </svg>
            </div>
          </div>
        </div>

        <div className="fixed left-0 right-0 max-w-2xl m-auto flex items-center w-full justify-between space-x-2 bg-gray-100">
          <div className="w-full">
            <button
              onClick={() => setValue(1)}
              className={
                value === 1
                  ? "w-full border-b-2 focus:outline-none py-3 uppercase font-semiBold outline-none text-sm border-black"
                  : "w-full outline-none focus:outline-none border-none py-3 font-semiBold uppercase text-gray-500 font-semibold text-sm"
              }
            >
              New To Shops?
            </button>
          </div>
          <hr className="border border-gray-500 h-5" />
          <div className="w-full">
            <button
              onClick={() => setValue(2)}
              className={
                value === 2
                  ? "w-full border-b-2 py-3 uppercase font-semiBold focus:outline-none outline-none text-sm border-black"
                  : "w-full outline-none py-3 uppercase font-semiBold focus:outline-none text-sm text-gray-500"
              }
            >
              Already Registered?
            </button>
          </div>
        </div>
      </div>

      {value === 1 ? (
        <div className="pb-10">
          <div className="py-3 px-4">
            <h1 className="text-center text-lg font-semiBold uppercase font-serif">Sign Up Using Your Email Address</h1>
          </div>
          <SignUpForm />
        </div>
      ) : (
        <div className="pb-10">
          <div className="py-3 px-4">
            <h1 className="text-center text-lg font-semiBold uppercase font-serif">Sign In With Email</h1>
          </div>
          <SignInForm />
        </div>
      )}
    </div>
  );
};

export default SignInAndSignUpPage;
