import React, { Component } from "react";
import { connect } from "react-redux";

class MyDetailsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      dateOfBirth: {
        date: "",
        month: "",
        year: "",
      },
      mostlyInterestedIn: "",
    };
  }

  handleOnChange = () => {};

  handleOnSubmit = () => {};

  generateYearOptions = () => {
    const arr = [];

    const startYear = 1900;
    const endYear = 2005;

    for (let i = endYear; i >= startYear; i--) {
      arr.push(<option value={i}>{i}</option>);
    }

    return arr;
  };

  generateMonthOptions = () => {
    let array = [];
    let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    for (let i = 0; i < monthNames.length; i++) {
      array.push(<option value={i}>{monthNames[i]}</option>);
    }
    return array;
  };

  generateDateOptions = () => {
    let array = [];

    for (let i = 1; i <= 31; i++) {
      array.push(<option value={i}>{i}</option>);
    }

    return array;
  };

  render() {
    const { userProfile } = this.props;
    console.log("zozo", this.props);
    return (
      <div className="mt-16 px-3 xl:px-0 lg:px-0 md:px-0 sm:px-0">
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
                    // onChange={(e) =>
                    //   this.setState({...this.state.dateOfBirth, date})

                    //   setUserDetails({ ...userDetails, dateOfBirth: { ...userDetails.dateOfBirth, date: e.target.value } })
                    // }
                    className="w-full py-2 border border-black bg-white outline-none"
                    name=""
                    id=""
                  >
                    <option selected disabled>
                      DD
                    </option>
                    {this.generateDateOptions()}
                  </select>
                </div>
                <div className="w-full">
                  <select
                    required
                    // onChange={(e) => setUserDetails({ ...userDetails, dateOfBirth: { ...userDetails.dateOfBirth, month: e.target.value } })}
                    className="w-full py-2 border border-black bg-white outline-none"
                    name=""
                    id=""
                  >
                    <option selected disabled>
                      MM
                    </option>
                    {this.generateMonthOptions()}
                  </select>
                </div>
                <div className="w-full">
                  <select
                    required
                    // onChange={(e) => setUserDetails({ ...userDetails, dateOfBirth: { ...userDetails.dateOfBirth, year: e.target.value } })}
                    className="w-full py-2 border border-black bg-white outline-none"
                    name=""
                    id=""
                  >
                    <option selected disabled>
                      YYYY
                    </option>
                    {this.generateYearOptions()}
                  </select>
                </div>
              </div>
              <span className="text-xs text-gray-500">You need to be 16 or over to use SHOPS</span>
            </div>
            <div>
              <label className="uppercase font-semiBold text-gray-400  text-sm">MOSTLY INTERESTED IN:</label>
              <div className="flex items-center space-x-10 mt-1">
                <div
                  // onClick={() => setUserDetails({ ...userDetails, mostlyInterestedIn: "Womenwear" })}

                  className="flex items-center space-x-3 cursor-pointer"
                >
                  <input
                    required
                    value="Womenwear"
                    // onChange={(e) => setUserDetails({ ...userDetails, mostlyInterestedIn: e.target.value })}
                    // checked={userDetails.mostlyInterestedIn === "Womenwear"}
                    className="w-5 h-5 cursor-pointer"
                    type="radio"
                  />
                  <span className="cursor-pointer">Womenswear</span>
                </div>
                <div
                  //  onClick={() => setUserDetails({ ...userDetails, mostlyInterestedIn: "Menswear" })}
                  className="flex items-center space-x-3 cursor-pointer"
                >
                  <input
                    required
                    value="Menswear"
                    // onChange={(e) => setUserDetails({ ...userDetails, mostlyInterestedIn: e.target.value })}
                    // checked={userDetails.mostlyInterestedIn === "Menswear"}
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
              Sign In
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateTopProps = (state) => ({
  userProfile: state.userProfile,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateTopProps, mapDispatchToProps)(MyDetailsPage);
