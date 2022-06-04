import React from "react";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import chevronBackIcon from "assets/images/chevron-back-outline.svg";

import IconButton from "@mui/material/IconButton";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import Wishlist from "./Wishlist";
import Shared from "./Shared";
import Header from "v2/components/Header/Header";

function a11yProps(index) {
   return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
   };
}

function TabPanel(props) {
   const { children, value, index, ...other } = props;

   return (
      <div
         role="tabpanel"
         hidden={value !== index}
         id={`simple-tabpanel-${index}`}
         aria-labelledby={`simple-tab-${index}`}
         {...other}
      >
         {value === index && <>{children}</>}
      </div>
   );
}

const MyProducts = () => {
   const history = useHistory();
   const [value, setValue] = React.useState(0);

   const handleChange = (_, newValue) => {
      history.push(newValue);
      setValue(newValue);
   };

   return (
      <div>
         <Header>
            <div className="flex items-center space-x-1">
               <Link to="/">
                  <IconButton>
                     <img
                        src={chevronBackIcon}
                        alt="chevron-back-icon"
                        className="w-6"
                     />
                  </IconButton>
               </Link>
               <span className="uppercase text-sm">My Products</span>
            </div>
         </Header>
         <Router>
            <Tabs
               value={history.location.pathname}
               onChange={handleChange}
               aria-label="basic tabs example"
            >
               <Tab
                  value="/my-products/wishlist"
                  label="Wishlist"
                  {...a11yProps(0)}
               />
               <Tab
                  value="/my-products/shared"
                  label="Shared"
                  {...a11yProps(1)}
               />
            </Tabs>

            <Switch>
               <TabPanel value={value} index={0}>
                  <Route exact path="/my-products/wishlist">
                     <Wishlist />
                  </Route>
               </TabPanel>
               <TabPanel value={value} index={1}>
                  <Route path="/my-products/shared">
                     <Shared />
                  </Route>
               </TabPanel>
            </Switch>
         </Router>
      </div>
   );
};

export default MyProducts;
