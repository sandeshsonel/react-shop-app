import React, { useState } from "react";

const SearchPage = (props) => {
  const { handleClose } = props;
  const [userDetails, setUserDetails] = useState({
    emailAddress: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    dateOfBirth: {
      date: "",
      month: "",
      year: "",
    },
    mostlyInterestedIn: "",
  });

  const handleChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const generateYearOptions = () => {
    const arr = [];

    const startYear = 1900;
    const endYear = 2005;

    for (let i = endYear; i >= startYear; i--) {
      arr.push(<option value={i}>{i}</option>);
    }

    return arr;
  };

  const generateMonthOptions = () => {
    let array = [];
    let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    for (let i = 0; i < monthNames.length; i++) {
      array.push(<option value={monthNames[i]}>{monthNames[i]}</option>);
    }
    return array;
  };

  const generateDateOptions = () => {
    let array = [];

    for (let i = 1; i <= 31; i++) {
      array.push(<option value={i}>{i}</option>);
    }
    return array;
  };

  console.log("xoxo", userDetails);

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
                  <label className="uppercase font-semiBold text-gray-400 text-sm">Email Address:</label>
                  <input
                    name="emailAddress"
                    value={userDetails.emailAddress}
                    onChange={handleChange}
                    type="text"
                    className="border border-black w-full py-2 px-2 mt-1 outline-none"
                  />
                  <span className="text-xs text-gray-500">We'll send your order confirmation here</span>
                </div>
                <div>
                  <label className="uppercase font-semiBold text-gray-400  text-sm">First Name:</label>
                  <input name="firstName" onChange={handleChange} type="text" className="border border-black w-full py-2 px-2 mt-1 outline-none" />
                </div>
                <div>
                  <label className="uppercase font-semiBold text-gray-400  text-sm">Last Name:</label>
                  <input name="lastName" onChange={handleChange} type="text" className="border border-black w-full py-2 px-2 mt-1 outline-none" />
                </div>
                <div>
                  <label className="uppercase font-semiBold text-gray-400 text-sm">Password:</label>
                  <input name="password" onChange={handleChange} type="text" className="border border-black w-full py-2 px-2 mt-1 outline-none" />
                  <span className="text-xs text-gray-500">Must be 10 or more characters</span>
                </div>
                <div>
                  <label className="uppercase font-semiBold text-gray-400  text-sm">Confirm Password:</label>
                  <input name="confirmPassword" onChange={handleChange} type="text" className="border border-black w-full py-2 px-2 mt-1 outline-none" />
                </div>
                <div>
                  <label className="uppercase font-semiBold text-gray-400  text-sm">Date of Birth:</label>
                  <div className="flex items-center space-x-2 mt-1">
                    <div className="w-full">
                      <select className="w-full py-2 border border-black bg-white outline-none" name="" id="">
                        <option selected disabled>
                          DD
                        </option>
                        {generateDateOptions()}
                      </select>
                    </div>
                    <div className="w-full">
                      <select
                        onChange={(e) => setUserDetails({ ...userDetails.dateOfBirth, dateOfBirth: { month: e.target.value } })}
                        className="w-full py-2 border border-black bg-white outline-none"
                        name=""
                        id=""
                      >
                        <option selected disabled>
                          MM
                        </option>
                        {generateMonthOptions()}
                      </select>
                    </div>
                    <div className="w-full">
                      <select
                        onChange={(e) => setUserDetails({ ...userDetails.dateOfBirth, dateOfBirth: { year: e.target.value } })}
                        className="w-full py-2 border border-black bg-white outline-none"
                        name=""
                        id=""
                      >
                        <option selected disabled>
                          YYYY
                        </option>
                        {generateYearOptions()}
                      </select>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">You need to be 16 or over to use SHOPS</span>
                </div>
                <div>
                  <label className="uppercase font-semiBold text-gray-400  text-sm">MOSTLY INTERESTED IN:</label>
                  <div className="flex items-center space-x-10 mt-1">
                    <div className="flex items-center space-x-3">
                      <input
                        value="Womenwear"
                        onChange={(e) => setUserDetails({ ...userDetails, mostlyInterestedIn: e.target.value })}
                        checked={userDetails.mostlyInterestedIn === "Womenwear"}
                        className="w-5 h-5"
                        type="radio"
                      />
                      <span onClick={() => setUserDetails({ ...userDetails, mostlyInterestedIn: "Womenwear" })}>Womenswear</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <input
                        value="Menswear"
                        onChange={(e) => setUserDetails({ ...userDetails, mostlyInterestedIn: e.target.value })}
                        checked={userDetails.mostlyInterestedIn === "Menswear"}
                        className="w-5 h-5"
                        type="radio"
                      />
                      <span onClick={() => setUserDetails({ ...userDetails, mostlyInterestedIn: "Menswear" })}>Menswear</span>
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
