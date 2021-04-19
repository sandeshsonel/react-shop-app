import React, { Component } from "react";
import { connect } from "react-redux";

import { signInUser } from "../../../app/actions/auth.action";

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleOnSubmit = (e) => {
    e.preventDefault();

    const { email, password } = this.state;
    // if (!email || !password) {
    //   alert("Please fill your details");
    // }

    const data = {
      email: email,
      password: password,
    };

    this.props.signInUser(data);
  };

  render() {
    console.log("xoxo", this.state);
    return (
      <div>
        <div className="px-3">
          <form onSubmit={this.handleOnSubmit} action="">
            <div className="space-y-3">
              <div>
                <label className="uppercase font-semiBold text-gray-400 text-sm">Email Address:</label>
                <input
                  name="email"
                  required
                  value={this.state.email}
                  onChange={this.handleOnChange}
                  type="email"
                  className="border border-black w-full py-2 px-2 mt-1 outline-none"
                />
              </div>
              <div>
                <label className="uppercase font-semiBold text-gray-400 text-sm">Password:</label>
                <input
                  name="password"
                  required
                  value={this.state.password}
                  onChange={this.handleOnChange}
                  type="password"
                  className="border border-black w-full py-2 px-2 mt-1 outline-none"
                />
              </div>
            </div>
            <div className="mt-10">
              <button type="submit" className="w-full uppercase font-semibold bg-black text-white py-2 ">
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  signInUser: (data) => dispatch(signInUser(data)),
});

export default connect(null, mapDispatchToProps)(SignInForm);
