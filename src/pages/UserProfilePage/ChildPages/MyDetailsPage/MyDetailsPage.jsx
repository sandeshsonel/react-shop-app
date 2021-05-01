import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class MyDetailsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      dateOfBirth: {
        date: "",
        month: "",
        year: "",
      },
      mostlyInterestedIn: "",
    };
  }

  handleOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleOnSubmit = () => {};

  generateYearOptions = (year) => {
    const arr = [];

    const startYear = 1900;
    const endYear = 2005;

    for (let i = endYear; i >= startYear; i--) {
      arr.push(
        <option selected={i === year} value={i}>
          {i}
        </option>
      );
    }

    return arr;
  };

  generateMonthOptions = (month) => {
    let array = [];
    let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    for (let i = 0; i < monthNames.length; i++) {
      array.push(
        <option selected={i === month} value={i}>
          {monthNames[i]}
        </option>
      );
    }
    return array;
  };

  generateDateOptions = (date) => {
    let array = [];

    for (let i = 1; i <= 31; i++) {
      array.push(
        <option selected={i === date} value={i}>
          {i}
        </option>
      );
    }

    return array;
  };

  render() {
    const { userProfile } = this.props;
    console.log("zozo", this.state);
    console.log("zozo-props", this.props);

    let date = new Date(userProfile.dateOfBirth);
    console.log("zozo-date", date);
    return (
      <div className="px-3 xl:px-0 lg:px-0 md:px-0 sm:px-0">
        <div className="header sticky mt-14 py-1 px-2 flex items-center">
          <Link to="/profile">
            <button className="outline-none focus:outline-none px-1 py-1 bg-gray-100 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5" viewBox="0 0 512 512">
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
        <div className="relative">
          <form onSubmit={this.handleOnSubmit} action="">
            <div className="space-y-3">
              <div>
                <label className="uppercase font-semiBold text-gray-400 text-sm">First Name:</label>
                <input
                  name="firstName"
                  required
                  defaultValue={userProfile.firstName}
                  onChange={this.handleOnChange}
                  type="text"
                  className="border border-black w-full py-2 px-2 mt-1 outline-none"
                />
              </div>
              <div>
                <label className="uppercase font-semiBold text-gray-400 text-sm">Last Name:</label>
                <input
                  name="lastName"
                  required
                  defaultValue={userProfile.lastName}
                  onChange={this.handleOnChange}
                  type="text"
                  className="border border-black w-full py-2 px-2 mt-1 outline-none"
                />
              </div>
              <div>
                <label className="uppercase font-semiBold text-gray-400 text-sm">Email Address:</label>
                <input
                  name="email"
                  required
                  defaultValue={userProfile.email}
                  onChange={this.handleOnChange}
                  type="email"
                  className="border border-black w-full py-2 px-2 mt-1 outline-none"
                />
              </div>
              <div>
                <label className="uppercase font-semiBold text-gray-400  text-sm">Date of Birth:</label>
                <div className="flex items-center space-x-2 mt-1">
                  <div className="w-full">
                    <select
                      required={true}
                      onChange={(e) => this.setState({ ...this.state, dateOfBirth: { ...this.state.dateOfBirth, date: e.target.value } })}
                      className="w-full py-2 border border-black bg-white outline-none"
                      name=""
                      id=""
                    >
                      <option selected disabled>
                        Day:
                      </option>
                      {this.generateDateOptions(date.getDate())}
                    </select>
                  </div>
                  <div className="w-full">
                    <select
                      required
                      onChange={(e) => this.setState({ ...this.state, dateOfBirth: { ...this.state.dateOfBirth, month: e.target.value } })}
                      className="w-full py-2 border border-black bg-white outline-none"
                      name=""
                      id=""
                    >
                      <option selected disabled>
                        Month:
                        {/* {date.toLocaleString("en-us", { month: "long" })} */}
                      </option>
                      {this.generateMonthOptions(date.getMonth())}
                    </select>
                  </div>
                  <div className="w-full">
                    <select
                      required
                      onChange={(e) => this.setState({ ...this.state, dateOfBirth: { ...this.state.dateOfBirth, year: e.target.value } })}
                      className="w-full py-2 border border-black bg-white outline-none"
                      name=""
                      id=""
                    >
                      <option selected disabled>
                        Year:
                      </option>
                      {this.generateYearOptions(date.getFullYear())}
                    </select>
                  </div>
                </div>
                <span className="text-xs text-gray-500">You need to be 16 or over to use SHOPS</span>
              </div>
              <div>
                <label className="uppercase font-semiBold text-gray-400  text-sm">MOSTLY INTERESTED IN:</label>
                <div className="flex items-center space-x-10 mt-1">
                  <div onClick={() => this.setState({ mostlyInterestedIn: "Womenwear" })} className="flex items-center space-x-3 cursor-pointer">
                    <input
                      required
                      value="Womenwear"
                      defaultChecked={userProfile.mostlyInterested === "Womenwear"}
                      onChange={(e) => this.setState({ mostlyInterestedIn: e.target.value })}
                      checked={this.state.mostlyInterestedIn === "Womenwear"}
                      className="w-5 h-5 cursor-pointer"
                      type="radio"
                    />
                    <span className="cursor-pointer">Womenswear</span>
                  </div>
                  <div onClick={() => this.setState({ mostlyInterestedIn: "Menswear" })} className="flex items-center space-x-3 cursor-pointer">
                    <input
                      required
                      value="Menswear"
                      defaultChecked={userProfile.mostlyInterested === "Menswear"}
                      onChange={(e) => this.setState({ mostlyInterestedIn: e.target.value })}
                      // checked={this.state.mostlyInterestedIn === "Menswear"}
                      className="w-5 h-5 cursor-pointer"
                      type="radio"
                    />
                    <span className="cursor-pointer">Menswear</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <button disabled type="submit" className="w-full uppercase bg-gray-300 shadow-md text-white py-3 font-semiBold">
                Update
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

export default connect(mapStateTopProps, mapDispatchToProps)(MyDetailsPage);
