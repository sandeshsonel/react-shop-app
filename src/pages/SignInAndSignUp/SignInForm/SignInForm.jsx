import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

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

    const data = {
      email: email,
      password: password,
    };

    this.props.signInUser(data);
    if (this.props.isLogin) {
      return <Redirect to="/" />;
    }
  };

  render() {
    console.log("fofo", this.props);
    return (
      <div className="mt-2 px-2 xl:px-0 lg:px-0 h-screen">
        <form onSubmit={this.handleOnSubmit} action="">
          <div className="space-y-3">
            <div>
              <label className="uppercase font-semiBold text-gray-400 text-sm">Email Address:</label>
              <input
                name="email"
                autoFocus
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
            <button type="submit" className="w-full uppercase bg-black shadow-md text-white py-3 font-semiBold">
              Sign In
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  authLoading: state.auth.isLoading,
  isLogin: state.auth.isLogin,
});

const mapDispatchToProps = (dispatch) => ({
  signInUser: (data) => dispatch(signInUser(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
