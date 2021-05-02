import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import countryNames from "../../../../assets/data/countryNames";

class AddressPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      mobileNo: "",
      country: "",
      address: "",
      city: "",
      postCode: "",
    };
  }

  generateCountryNameOptions = () => {
    let array = [];
    for (let i = 0; i < countryNames.length; i++) {
      array.push(<option value={countryNames[i].name}>{countryNames[i].name}</option>);
    }
    return array;
  };

  handleOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { userProfile } = this.props;
    console.log("popo-state", this.state);
    return (
      <div>
        <div className="header sticky mt-14 py-2 px-2 flex items-center">
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
        <div className="px-3 xl:px-0 lg:px-0 md:px-0 sm:px-0">
          <form onSubmit={this.handleOnSubmit} action="">
            <div className="space-y-3">
              <div className="xl:flex lg:flex md:flex sm:flex items-center xl:space-x-3 lg:space-x-3 md:space-x-3 sm:space-x-3 space-x-0">
                <div className="w-full">
                  <label className="uppercase font-semiBold text-gray-400 text-sm">First Name:</label>
                  <input
                    name="firstName"
                    defaultValue={userProfile.firstName}
                    onChange={this.handleOnChange}
                    type="text"
                    className="border border-black w-full py-2 px-2 mt-1 outline-none"
                  />
                </div>
                <div className="w-full">
                  <label className="uppercase font-semiBold text-gray-400 text-sm">Last Name:</label>
                  <input
                    name="lastName"
                    defaultValue={userProfile.lastName}
                    onChange={this.handleOnChange}
                    type="text"
                    className="border border-black w-full py-2 px-2 mt-1 outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="uppercase font-semiBold text-gray-400 text-sm">Mobile:</label>
                <input name="mobileNo" onChange={this.handleOnChange} type="number" className="border border-black w-full py-2 px-2 mt-1 outline-none" />
              </div>
              <div>
                <label className="uppercase font-semiBold text-gray-400  text-sm">Country:</label>
                <div className="flex items-center space-x-2 mt-1">
                  <div className="w-full">
                    <select
                      onChange={(e) => this.setState({ country: e.target.value })}
                      required
                      className="w-full py-2 border border-black bg-white outline-none"
                      name=""
                      id=""
                    >
                      <option selected disabled>
                        Please select
                      </option>
                      {this.generateCountryNameOptions()}
                    </select>
                  </div>
                </div>
                <span className="text-xs text-gray-500">You need to be 16 or over to use SHOPS</span>
              </div>
              {this.state.country && (
                <div className="space-y-3">
                  <div>
                    <label className="uppercase font-semiBold text-gray-400 text-sm">Address:</label>
                    <input name="address" onChange={this.handleOnChange} type="text" className="border border-black w-full py-2 px-2 mt-1 outline-none" />
                  </div>
                  <div>
                    <label className="uppercase font-semiBold text-gray-400 text-sm">City:</label>
                    <input name="city" onChange={this.handleOnChange} type="text" className="border border-black w-full py-2 px-2 mt-1 outline-none" />
                  </div>
                  <div>
                    <label className="uppercase font-semiBold text-gray-400 text-sm">PostCode:</label>
                    <input name="postCode" onChange={this.handleOnChange} type="text" className="border border-black w-full py-2 px-2 mt-1 outline-none" />
                  </div>
                </div>
              )}
            </div>
            <div className="mt-10">
              <button type="submit" className="w-full uppercase bg-gray-300 shadow-md text-white py-3 font-semiBold">
                Save Address
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateTopProps = (state) => ({
  userProfile: state.userProfile,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateTopProps, mapDispatchToProps)(AddressPage);
