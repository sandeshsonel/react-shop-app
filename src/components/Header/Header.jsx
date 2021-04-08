import React, { useState } from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import SearchPage from "src/pages/SearchPage/SearchPage";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const Header = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [value, setValue] = useState(0);
  return (
    <div className="max-w-2xl m-auto fixed w-full top-0">
      <div className="bg-gray-900">
        <div className="flex justify-between items-center px-3 py-2">
          <div className="flex items-center space-x-2">
            <div>
              <svg className="w-7 fill-current text-white" xmlns="http://www.w3.org/2000/svg" height="14" width="18">
                <path d="M0 0h18v2H0zm0 6h18v2H0zm0 6h18v2H0z" fill="#fff" />
              </svg>
            </div>
            <div>
              <Link to="/">
                <a
                  href=""
                  onClick={() => setValue(0)}
                  className="text-white text-xl uppercase font-semiBold"
                  //  className="text-xl font-semibold text-white uppercase border border-white px-1 py-1 rounded-sm"
                >
                  Shops
                </a>
              </Link>
            </div>
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <Link to="/search">
                <div onClick={() => setValue(1)} className={value === 1 ? "border border-white px-1 py-1 rounded-md" : "border-none px-1 py-1"}>
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
                </div>
              </Link>
              <Link to="/profile">
                <div onClick={() => setValue(2)} className={value === 2 ? "border border-white px-1 py-1 rounded-md" : "border-none px-1 py-1"}>
                  <svg onClick={handleClickOpen} xmlns="http://www.w3.org/2000/svg" className="w-6 fill-current text-white" viewBox="0 0 512 512">
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
                </div>
              </Link>
              <Link to="/wishlist">
                <div onClick={() => setValue(3)} className={value === 3 ? "border border-white px-1 py-1 rounded-md" : "border-none px-1 py-1"}>
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
                </div>
              </Link>

              <Link to="/cart">
                <div onClick={() => setValue(4)} className={value === 4 ? "border border-white px-1 py-1 rounded-md" : "border-none px-1 py-1"}>
                  <div className="">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 fill-current text-white" viewBox="0 0 512 512">
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
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <div>
          <SearchPage handleClose={handleClose} />
        </div>
      </Dialog>
    </div>
  );
};

export default Header;
