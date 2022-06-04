import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

// actions
import { signOutUser, setLogin } from "../../app/actions";

// icons
import orderIcon from "../../assets/images/order.svg";
import myDetailsIcon from "../../assets/images/myDetails.svg";
import addressIcon from "../../assets/images/home.svg";
import paymentIcon from "../../assets/images/payment.svg";

const UserProfilePage = (props) => {
  console.log("popo-props", props);
  const { signOutUser, fullName, isLogin } = props;

  const handleSignOutUser = () => {
    signOutUser();

    props.history.push("/");
  };

  return (
    <div className="mt-16 fixed h-screen w-full max-w-2xl">
      <div className="px-3 xl:px-0 lg:px-0 md:px-0 sm:px-0">
        <div>
          <span className="text-lg">Hi,</span>
          <h1 className="text-2xl font-semiBold">{fullName}</h1>
        </div>
        <div className="mt-4">
          <ul className="font-medium">
            <li>
              <Link to="/profile/orders">
                <div className="flex items-center justify-between space-x-4 py-3 border-b-4 border-t-4 border-gray-200" href="">
                  <div className="flex space-x-4">
                    {/* <div>
                  <img className="w-5" src={orderIcon} alt="" />
                </div> */}
                    <div className="w-full">
                      <span className="uppercase">My orders</span>
                    </div>
                  </div>
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5" viewBox="0 0 512 512">
                      <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M184 112l144 144-144 144" />
                    </svg>
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/profile/myDetails">
                <div className="flex items-center justify-between space-x-4 py-3 border-b-4 border-gray-200" href="">
                  <div className="flex space-x-4">
                    {/* <div>
                  <img className="w-5" src={orderIcon} alt="" />
                </div> */}
                    <div className="w-full">
                      <span className="uppercase">My Details</span>
                    </div>
                  </div>
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5" viewBox="0 0 512 512">
                      <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M184 112l144 144-144 144" />
                    </svg>
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/profile/address">
                <div className="flex items-center justify-between space-x-4 py-3 border-b-4 border-gray-200" href="">
                  <div className="flex space-x-4">
                    {/* <div>
                  <img className="w-5" src={orderIcon} alt="" />
                </div> */}
                    <div className="w-full">
                      <span className="uppercase">Address book</span>
                    </div>
                  </div>
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5" viewBox="0 0 512 512">
                      <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M184 112l144 144-144 144" />
                    </svg>
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <div
                onClick={handleSignOutUser}
                className="flex items-center justify-between cursor-pointer space-x-4 py-3 border-b-4 hover:bg-gray-100 border-gray-200"
                href=""
              >
                <div className="flex items-center space-x-2">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6" viewBox="0 0 512 512">
                      <path
                        d="M320 176v-40a40 40 0 00-40-40H88a40 40 0 00-40 40v240a40 40 0 0040 40h192a40 40 0 0040-40v-40M384 176l80 80-80 80M191 256h273"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="32"
                      />
                    </svg>
                  </div>
                  <div className="w-full">
                    <span className="uppercase">Sign out</span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  fullName: `${state.userProfile.firstName} ${state.userProfile.lastName}`,
  isLogin: state.auth.isLogin,
});

const mapDispatchToProps = (dispatch) => ({
  signOutUser: () => dispatch(signOutUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfilePage);
