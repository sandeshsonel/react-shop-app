import React, { useState, useRef } from "react";
import { connect } from "react-redux";

import { signUpUser } from "../../../app/actions/auth.action";

const SignUpForm = ({ signUpUser }) => {
  const inputRef = useRef(null);
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
  const [hidePassword, setHidePassword] = useState(true);

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
      array.push(<option value={i}>{monthNames[i]}</option>);
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

  const onSubmit = (e) => {
    e.preventDefault();

    let dateOfBirth = new Date(userDetails.dateOfBirth.year, userDetails.dateOfBirth.month, userDetails.dateOfBirth.date, 0, 0, 0, 0);

    const data = {
      email: userDetails.emailAddress,
      firstName: userDetails.firstName,
      lastName: userDetails.lastName,
      password: userDetails.password,
      passwordConfirm: userDetails.password,
      dateOfBirth: dateOfBirth,
      mostlyInterested: userDetails.mostlyInterestedIn,
    };

    signUpUser(data);
  };

  console.log("xoxo", userDetails);
  return (
    <div>
      <div className="px-3">
        <form onSubmit={onSubmit}>
          <div className="space-y-3">
            <div>
              <label className="uppercase font-semiBold text-gray-400 text-sm">Email Address:</label>
              <input
                ref={inputRef}
                autoFocus
                required
                name="emailAddress"
                value={userDetails.emailAddress}
                onChange={handleChange}
                type="email"
                className="border focus:bg-white border-black w-full py-2 px-2 mt-1 outline-none"
              />
              <span className="text-xs text-gray-500">We'll send your order confirmation here</span>
            </div>
            <div>
              <label className="uppercase font-semiBold text-gray-400  text-sm">First Name:</label>
              <input required name="firstName" onChange={handleChange} type="text" className="border border-black w-full py-2 px-2 mt-1 outline-none" />
            </div>
            <div>
              <label className="uppercase font-semiBold text-gray-400  text-sm">Last Name:</label>
              <input required name="lastName" onChange={handleChange} type="text" className="border border-black w-full py-2 px-2 mt-1 outline-none" />
            </div>
            <div>
              <label className="uppercase font-semiBold text-gray-400 text-sm">Password:</label>
              <div className="flex items-center justify-between w-full border border-black py-2 px-2 mt-1">
                <div className="w-full">
                  <input required name="password" onChange={handleChange} type={hidePassword ? "password" : "text"} className=" w-full outline-none" />
                </div>
                <div>
                  {hidePassword ? (
                    <div className="cursor-pointer">
                      <svg onClick={() => setHidePassword(!hidePassword)} xmlns="http://www.w3.org/2000/svg" className="w-5" viewBox="0 0 512 512">
                        <path d="M432 448a15.92 15.92 0 01-11.31-4.69l-352-352a16 16 0 0122.62-22.62l352 352A16 16 0 01432 448zM255.66 384c-41.49 0-81.5-12.28-118.92-36.5-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 00.14-2.94L93.5 161.38a2 2 0 00-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0075.8-12.58 2 2 0 00.77-3.31l-21.58-21.58a4 4 0 00-3.83-1 204.8 204.8 0 01-51.16 6.47zM490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 00-74.89 12.83 2 2 0 00-.75 3.31l21.55 21.55a4 4 0 003.88 1 192.82 192.82 0 0150.21-6.69c40.69 0 80.58 12.43 118.55 37 34.71 22.4 65.74 53.88 89.76 91a.13.13 0 010 .16 310.72 310.72 0 01-64.12 72.73 2 2 0 00-.15 2.95l19.9 19.89a2 2 0 002.7.13 343.49 343.49 0 0068.64-78.48 32.2 32.2 0 00-.1-34.78z" />
                        <path d="M256 160a95.88 95.88 0 00-21.37 2.4 2 2 0 00-1 3.38l112.59 112.56a2 2 0 003.38-1A96 96 0 00256 160zM165.78 233.66a2 2 0 00-3.38 1 96 96 0 00115 115 2 2 0 001-3.38z" />
                      </svg>
                    </div>
                  ) : (
                    <div className="cursor-pointer">
                      <svg onClick={() => setHidePassword(!hidePassword)} xmlns="http://www.w3.org/2000/svg" className="w-5" viewBox="0 0 512 512">
                        <path
                          d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z"
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="32"
                        />
                        <circle cx="256" cy="256" r="80" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              <span className="text-xs text-gray-500">Must be 10 or more characters</span>
            </div>
            <div>
              <label className="uppercase font-semiBold text-gray-400  text-sm">Confirm Password:</label>
              <input
                required
                name="confirmPassword"
                onChange={handleChange}
                type="password"
                className="border border-black w-full py-2 px-2 mt-1 outline-none"
              />
            </div>
            <div>
              <label className="uppercase font-semiBold text-gray-400  text-sm">Date of Birth:</label>
              <div className="flex items-center space-x-2 mt-1">
                <div className="w-full">
                  <select
                    required={true}
                    onChange={(e) => setUserDetails({ ...userDetails, dateOfBirth: { ...userDetails.dateOfBirth, date: e.target.value } })}
                    className="w-full py-2 border border-black bg-white outline-none"
                    name=""
                    id=""
                  >
                    <option selected disabled>
                      DD
                    </option>
                    {generateDateOptions()}
                  </select>
                </div>
                <div className="w-full">
                  <select
                    required
                    onChange={(e) => setUserDetails({ ...userDetails, dateOfBirth: { ...userDetails.dateOfBirth, month: e.target.value } })}
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
                    required
                    onChange={(e) => setUserDetails({ ...userDetails, dateOfBirth: { ...userDetails.dateOfBirth, year: e.target.value } })}
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
                <div onClick={() => setUserDetails({ ...userDetails, mostlyInterestedIn: "Womenwear" })} className="flex items-center space-x-3 cursor-pointer">
                  <input
                    required
                    value="Womenwear"
                    onChange={(e) => setUserDetails({ ...userDetails, mostlyInterestedIn: e.target.value })}
                    checked={userDetails.mostlyInterestedIn === "Womenwear"}
                    className="w-5 h-5 cursor-pointer"
                    type="radio"
                  />
                  <span className="cursor-pointer">Womenswear</span>
                </div>
                <div onClick={() => setUserDetails({ ...userDetails, mostlyInterestedIn: "Menswear" })} className="flex items-center space-x-3 cursor-pointer">
                  <input
                    required
                    value="Menswear"
                    onChange={(e) => setUserDetails({ ...userDetails, mostlyInterestedIn: e.target.value })}
                    checked={userDetails.mostlyInterestedIn === "Menswear"}
                    className="w-5 h-5 cursor-pointer"
                    type="radio"
                  />
                  <span className="cursor-pointer">Menswear</span>
                </div>
              </div>
            </div>
            {/* <div className="mt-4">
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
            </div> */}
          </div>
          <div className="mt-8 bottom-0 py-3 sticky w-full">
            <button type="submit" className="w-full uppercase font-semibold bg-black shadow-md text-white py-3 ">
              Join Shops
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpUser: (data) => dispatch(signUpUser(data)),
});

export default connect(null, mapDispatchToProps)(SignUpForm);
