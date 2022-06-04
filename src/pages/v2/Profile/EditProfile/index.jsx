import React, { useState, useEffect } from "react";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import chevronBackIcon from "assets/images/chevron-back-outline.svg";

import IconButton from "@mui/material/IconButton";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import Header from "v2/components/Header/Header";
import PrimaryInfo from "./PrimaryInfo";
import OtherInfo from "./OtherInfo";
import Setting from "./Setting";

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

const EditProfile = () => {
   const history = useHistory();
   const [value, setValue] = useState(0);

   const handleChange = (_, newValue) => {
      history.push(newValue);
      setValue(newValue);
   };

   useEffect(() => {
      history.push("/profile/edit/primary");
   }, []);

   return (
      <div>
         <Header isShowSideOption={false}>
            <div className="flex items-center space-x-1">
               <Link to="/profile">
                  <IconButton>
                     <img
                        src={chevronBackIcon}
                        alt="chevron-back-icon"
                        className="w-6"
                     />
                  </IconButton>
               </Link>
               <span className="uppercase text-tiny font-medium">
                  Edit Profile Information
               </span>
            </div>
         </Header>
         <Router>
            <Tabs
               value={history.location.pathname}
               onChange={handleChange}
               aria-label="basic tabs example"
            >
               <Tab
                  value="/profile/edit/primary"
                  label="Primary"
                  {...a11yProps(0)}
               />
               <Tab
                  value="/profile/edit/otherinfo"
                  label="Shared"
                  {...a11yProps(1)}
               />
               <Tab
                  value="/profile/edit/setting"
                  label="Shared"
                  {...a11yProps(2)}
               />
            </Tabs>

            <Switch>
               <Route exact path="/profile/edit/primary">
                  <TabPanel value={value} index={0}>
                     <PrimaryInfo />
                  </TabPanel>
               </Route>
               <TabPanel value={value} index={1}>
                  <Route path="/profile/edit/otherinfo">
                     <OtherInfo />
                  </Route>
               </TabPanel>
               <TabPanel value={value} index={2}>
                  <Route path="/profile/edit/setting">
                     <Setting />
                  </Route>
               </TabPanel>
            </Switch>
         </Router>
      </div>
   );
};

export default EditProfile;
