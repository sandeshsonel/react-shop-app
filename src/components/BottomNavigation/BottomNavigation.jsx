import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles((theme) => ({
  root: {
    textTransform: "uppercase",
    [theme.breakpoints.up("xl")]: {
      display: "none",
    },
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
    width: "100%",
    fontStyle: "uppercase",
    bottom: 0,
    position: "fixed",
    boxShadow: "inset 0 1px #fff, 0 1px 3px rgba(34,25,25,0.4)",
  },
}));

const BottomNavigationBar = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  return (
    <div className="">
      <Paper elevation={1}>
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          showLabels
          className={classes.root}
        >
          <BottomNavigationAction component={Link} to="/" label="Home" icon={<ion-icon name="home-outline"></ion-icon>} />
          <BottomNavigationAction component={Link} to="/search" label="Search" icon={<ion-icon name="search-outline"></ion-icon>} />
          <BottomNavigationAction component={Link} to="/cart" label="Bag" icon={<ion-icon name="bag-outline"></ion-icon>} />
          <BottomNavigationAction component={Link} to="/profile" label="Profile" icon={<ion-icon name="person-circle-outline"></ion-icon>} />
        </BottomNavigation>
      </Paper>
    </div>
  );
};

export default BottomNavigationBar;
