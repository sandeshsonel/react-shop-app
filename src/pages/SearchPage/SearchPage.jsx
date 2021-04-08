import React, { useState } from "react";

const SearchPage = (props) => {
  const { handleClose } = props;
  const [value, setValue] = useState(1);
  return (
    <div>
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

      <div className="flex items-center w-full justify-between space-x-2">
        <div className="w-full">
          <button
            onClick={() => setValue(1)}
            className={
              value === 1
                ? "w-full border-b-2 py-3 uppercase font-semibold outline-none text-sm border-black"
                : "w-full outline-none border-none py-3 uppercase font-semibold text-sm"
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
                ? "w-full border-b-2 outline-none py-3 uppercase font-semibold text-sm border-black"
                : "w-full outline-none py-3 uppercase font-semibold text-sm"
            }
          >
            Already Registered?
          </button>
        </div>
      </div>

      {value === 1 ? (
        <div className="pb-10">
          <div className="py-3 px-4">
            <h1 className="text-center font-semibold uppercase font-serif">Sign Up Using Your Email Address</h1>
          </div>

          <div className="px-3">
            <form action="">
              <div className="space-y-3">
                <div>
                  <label className="uppercase font-semibold text-sm">Email Address:</label>
                  <input type="text" className="border border-black w-full py-2 px-2 mt-1 outline-none" />
                  <span className="text-xs text-gray-500">We'll send your order confirmation here</span>
                </div>
                <div>
                  <label className="uppercase font-semibold text-sm">First Name:</label>
                  <input type="text" className="border border-black w-full py-2 px-2 mt-1 outline-none" />
                </div>
                <div>
                  <label className="uppercase font-semibold text-sm">Last Name:</label>
                  <input type="text" className="border border-black w-full py-2 px-2 mt-1 outline-none" />
                </div>
                <div>
                  <label className="uppercase font-semibold text-sm">Password:</label>
                  <input type="text" className="border border-black w-full py-2 px-2 mt-1 outline-none" />
                  <span className="text-xs text-gray-500">Must be 10 or more characters</span>
                </div>
                <div>
                  <label className="uppercase font-semibold text-sm">Date of Birth:</label>
                  <div className="flex items-center space-x-2 mt-1">
                    <div className="w-full">
                      <select className="w-full py-2 border border-black bg-white outline-none" name="" id="">
                        <option value="">DD</option>
                      </select>
                    </div>
                    <div className="w-full">
                      <select className="w-full py-2 border border-black bg-white outline-none" name="" id="">
                        <option value="">Month</option>
                      </select>
                    </div>
                    <div className="w-full">
                      <select className="w-full py-2 border border-black bg-white outline-none" name="" id="">
                        <option value="">YYYY</option>
                      </select>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">You need to be 16 or over to use SHOPS</span>
                </div>
                <div>
                  <label className="uppercase font-semibold text-sm">MOSTLY INTERESTED IN:</label>
                  <div className="flex items-center space-x-10 mt-1">
                    <div className="flex items-center space-x-3">
                      <input className="w-5 h-5" type="radio" />
                      <span>Womenswear</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <input className="w-5 h-5" type="radio" />
                      <span>Menswear</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-xs">
                    By creating your account, you agree to our &nbsp;
                    <a className="underline" href="">
                      Terms and Conditions
                    </a>
                    &nbsp; & &nbsp;
                    <a className="underline" href="">
                      Privacy Policy
                    </a>
                  </p>
                </div>
                <div className="mt-10">
                  <button className="w-full uppercase font-semibold bg-black shadow-md text-white py-2 ">Join Shops</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className="pb-10">
          <div className="py-3 px-4">
            <h1 className="text-center text-lg font-semibold uppercase font-serif">Sign In With Email</h1>
          </div>

          <div className="px-3">
            <form action="">
              <div className="space-y-3">
                <div>
                  <label className="uppercase font-semibold text-sm">Email Address:</label>
                  <input type="text" className="border border-black w-full py-2 px-2 mt-1 outline-none" />
                </div>
                <div>
                  <label className="uppercase font-semibold text-sm">Password:</label>
                  <input type="text" className="border border-black w-full py-2 px-2 mt-1 outline-none" />
                </div>
              </div>
              <div className="mt-10">
                <button className="w-full uppercase font-semibold bg-black text-white py-2 ">Sign In</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchPage;
