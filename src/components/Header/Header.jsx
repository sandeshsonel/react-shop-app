import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import SignInAndSignUpPage from "src/pages/SignInAndSignUp/SignInAndSignUpPage";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  sidebar: {
    width: "300px",
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const Header = (props) => {
  const { isLogin } = props;
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = useState(0);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  console.log(props);
  return (
    <div className="max-w-2xl m-auto fixed w-full top-0">
      <div className="shadow-md bg-black">
        <div className="flex justify-between items-center px-3 py-2">
          <div className="flex items-center space-x-2">
            {/* <div>
              <svg onClick={toggleDrawer("left", true)} className="w-7 fill-current text-white" xmlns="http://www.w3.org/2000/svg" height="14" width="18">
                <path d="M0 0h18v2H0zm0 6h18v2H0zm0 6h18v2H0z" fill="#fff" />
              </svg>
            </div> */}
            <div className="space-x-4 flex items-center">
              <Link to="/">
                <a href="">
                  <div>
                    <svg class="w-16" viewBox="0 0 104 30" role="img">
                      <path
                        fill="#FFF"
                        fill-rule="evenodd"
                        d="M71.83 21.983c-1.558 1.666-3.56 2.51-5.95 2.51-2.387 0-4.39-.844-5.947-2.51-1.488-1.587-2.343-4.124-2.343-6.96 0-2.766.864-5.27 2.37-6.867 1.572-1.667 3.565-2.516 5.92-2.523 2.36.007 4.35.856 5.924 2.523 1.506 1.598 2.37 4.1 2.37 6.867 0 2.836-.855 5.373-2.343 6.96zm-20.915-6.96c0 .128.005.255.008.38-2.39-2.166-5.845-2.974-7.957-3.394-3.907-.82-6.89-1.58-6.89-4.35 0-1.96 1.757-3.38 5.132-3.14 3.085.224 4.384 2.102 4.74 3.914.05.3.19.515.53.517l5.547.05c.026 0 .048-.003.072-.004-.783 1.816-1.182 3.84-1.182 6.015zM41.48 25.19c-2.683 0-5.64-.95-6.32-4.624-.06-.35-.225-.496-.495-.503l-5.364-.07v-9.446c.71 2.768 3.04 4.684 8.09 5.816 3.38.806 9.24 1.318 9.24 4.774 0 2.408-1.78 4.11-5.15 4.054zm-26.714-.69c-4.327 0-8.29-3.394-8.29-9.47 0-4.77 2.97-9.39 8.32-9.39 2.315 0 8.188.79 8.188 9.39 0 8.62-6.132 9.47-8.218 9.47zm65.922-11.792c1.232 1.636 3.453 2.848 7.063 3.657 3.38.805 9.25 1.318 9.25 4.775 0 2.403-1.78 4.11-5.15 4.05-2.68 0-5.64-.95-6.32-4.625-.052-.35-.22-.497-.49-.504L80.06 20c.523-1.54.79-3.21.79-4.974 0-.793-.056-1.566-.16-2.317zM91.474 30c5.95 0 12.965-2.208 12.416-9.366-.606-6.355-7.244-7.964-10.562-8.625-3.907-.82-6.892-1.58-6.892-4.35 0-1.96 1.758-3.38 5.134-3.14 3.084.224 4.384 2.102 4.74 3.914.05.3.19.515.53.517l5.546.048c.422.002.554-.216.5-.516C101.8 1.874 96.246 0 91.133 0 86.03 0 79.88 1.43 79.443 7.754c-.015.246-.02.486-.02.722-.814-1.683-1.985-3.23-3.495-4.597C73.142 1.37 69.666.03 65.878 0h-.127c-1.81 0-3.58.333-5.26.99a15.26 15.26 0 0 0-4.65 2.888c-1.43 1.295-2.56 2.747-3.36 4.327C51.27 1.822 45.81 0 40.77 0 36.084 0 30.517 1.208 29.3 6.305v-5.06a.49.49 0 0 0-.49-.488h-5.224c-.27 0-.49.22-.49.49V2.61c0 .23-.155.31-.343.175-1.858-1.34-4.607-2.782-7.915-2.782-1.86 0-3.635.326-5.277.968-1.64.65-3.2 1.63-4.64 2.92C3.29 5.37 2.05 7.05 1.23 8.9.417 10.742 0 12.807 0 15.027 0 17.1.367 19.043 1.088 20.8c.722 1.756 1.82 3.382 3.267 4.83 1.446 1.45 3.063 2.553 4.804 3.276 1.74.722 3.66 1.09 5.7 1.09 3.51 0 6.15-1.493 7.88-2.85.19-.144.342-.067.342.17v1.435c0 .27.22.49.49.49H28.8c.27 0 .49-.22.49-.49v-4.83C31.766 29.7 38.04 30 41.113 30c5.137 0 11.06-1.647 12.234-6.7.55.818 1.192 1.597 1.924 2.33 2.8 2.807 6.47 4.316 10.62 4.362h.17c1.97 0 3.87-.377 5.648-1.12a14.82 14.82 0 0 0 4.79-3.242 15.25 15.25 0 0 0 2.594-3.43c1.86 7.438 9.035 7.8 12.387 7.8z"
                      ></path>
                    </svg>
                  </div>
                </a>
                {/* <a
                  href=""
                  onClick={() => setValue(0)}
                  className="text-white text-xl uppercase font-semiBold"
                  //  className="text-xl font-semibold text-white uppercase border border-white px-1 py-1 rounded-sm"
                >
                  Shops
                </a> */}
              </Link>
              <select className="bg-black text-white py-1 rounded-md uppercase font-semiBold text-sm outline-none border-white border" name="" id="">
                <option value="">Mens</option>
                <option value="">Women</option>
              </select>
            </div>
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <div className="hidden xl:block lg:block md:block sm:block">
                <Link to="/search">
                  <div onClick={() => setValue(1)}>
                    {value === 1 ? (
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-6 fill-current text-white" viewBox="0 0 512 512">
                        <title>Search</title>
                        <path d="M456.69 421.39L362.6 327.3a173.81 173.81 0 0034.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 00327.3 362.6l94.09 94.09a25 25 0 0035.3-35.3zM97.92 222.72a124.8 124.8 0 11124.8 124.8 124.95 124.95 0 01-124.8-124.8z" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 fill-current text-white" viewBox="0 0 512 512">
                        <title>Search</title>
                        <path
                          d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
                          fill="none"
                          stroke="currentColor"
                          stroke-miterlimit="10"
                          stroke-width="32"
                        />
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M338.29 338.29L448 448" />
                      </svg>
                    )}
                  </div>
                </Link>
              </div>
              <div className="">
                <Link to={isLogin ? "/profile" : "/loginSign"}>
                  <div onClick={() => setValue(2)}>
                    {value === 2 ? (
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-6 fill-current text-white" viewBox="0 0 512 512">
                        <title>Person</title>
                        <path d="M332.64 64.58C313.18 43.57 286 32 256 32c-30.16 0-57.43 11.5-76.8 32.38-19.58 21.11-29.12 49.8-26.88 80.78C156.76 206.28 203.27 256 256 256s99.16-49.71 103.67-110.82c2.27-30.7-7.33-59.33-27.03-80.6zM432 480H80a31 31 0 01-24.2-11.13c-6.5-7.77-9.12-18.38-7.18-29.11C57.06 392.94 83.4 353.61 124.8 326c36.78-24.51 83.37-38 131.2-38s94.42 13.5 131.2 38c41.4 27.6 67.74 66.93 76.18 113.75 1.94 10.73-.68 21.34-7.18 29.11A31 31 0 01432 480z" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 fill-current text-white" viewBox="0 0 512 512">
                        <title>Person</title>
                        <path
                          d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z"
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="32"
                        />
                        <path
                          d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z"
                          fill="none"
                          stroke="currentColor"
                          stroke-miterlimit="10"
                          stroke-width="32"
                        />
                      </svg>
                    )}
                  </div>
                </Link>
              </div>
              <div className="hidden xl:block lg:block md:block sm:block">
                <Link to="/wishlist">
                  <div onClick={() => setValue(3)}>
                    {value === 3 ? (
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-6 fill-current text-white" viewBox="0 0 512 512">
                        <title>Heart</title>
                        <path d="M256 448a32 32 0 01-18-5.57c-78.59-53.35-112.62-89.93-131.39-112.8-40-48.75-59.15-98.8-58.61-153C48.63 114.52 98.46 64 159.08 64c44.08 0 74.61 24.83 92.39 45.51a6 6 0 009.06 0C278.31 88.81 308.84 64 352.92 64c60.62 0 110.45 50.52 111.08 112.64.54 54.21-18.63 104.26-58.61 153-18.77 22.87-52.8 59.45-131.39 112.8a32 32 0 01-18 5.56z" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 fill-current text-white" viewBox="0 0 512 512">
                        <title>Heart</title>
                        <path
                          d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="32"
                        />
                      </svg>
                    )}
                  </div>
                </Link>
              </div>
              <div className="hidden xl:block lg:block md:block sm:block">
                <Link to="/cart">
                  <div onClick={() => setValue(4)}>
                    <div className="relative">
                      {value === 4 ? (
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 fill-current text-white" viewBox="0 0 512 512">
                          <title>Bag</title>
                          <path d="M454.65 169.4A31.82 31.82 0 00432 160h-64v-16a112 112 0 00-224 0v16H80a32 32 0 00-32 32v216c0 39 33 72 72 72h272a72.22 72.22 0 0050.48-20.55 69.48 69.48 0 0021.52-50.2V192a31.75 31.75 0 00-9.35-22.6zM176 144a80 80 0 01160 0v16H176z" />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className={value === 4 ? "w-6 fill-curren text-white relative" : "w-6 fill-current text-white relative"}
                          viewBox="0 0 512 512"
                        >
                          <title>Bag</title>
                          <path
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="32"
                            d="M80 176a16 16 0 00-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 00-16-16zM160 176v-32a96 96 0 0196-96h0a96 96 0 0196 96v32"
                          />
                        </svg>
                      )}
                      <div>
                        <span className="text-sm text-black font-semiBold absolute top-0 text-center">12</span>
                      </div>
                    </div>
                    {/* <div classname="absolute">
                      <span className="text-white text-xs">1</span>
                    </div> */}
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <div>
          <SignInAndSignUpPage handleClose={handleClose} />
        </div>
      </Dialog>

      <SwipeableDrawer
        classes={{ paper: classes.sidebar }}
        anchor="left"
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
        onOpen={toggleDrawer("left", true)}
      >
        <div>
          <div>
            <div className="flex items-center w-full justify-between space-x-2 border">
              <div className="w-full">
                <button
                  onClick={() => setValue(1)}
                  className={
                    value === 1
                      ? "w-full border-b-2 py-3 uppercase font-bold outline-none text-sm border-black"
                      : "w-full outline-none border-none py-3 uppercase font-semibold text-sm"
                  }
                >
                  Women
                </button>
              </div>
              <hr className="border border-gray-500 h-5" />
              <div className="w-full">
                <button
                  onClick={() => setValue(2)}
                  className={
                    value === 2
                      ? "w-full border-b-2 outline-none py-3 uppercase font-bold text-sm border-black"
                      : "w-full outline-none py-3 uppercase font-semibold text-sm"
                  }
                >
                  Mens
                </button>
              </div>
            </div>
          </div>
        </div>
      </SwipeableDrawer>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLogin: state.auth.isLogin,
});

export default connect(mapStateToProps)(Header);
