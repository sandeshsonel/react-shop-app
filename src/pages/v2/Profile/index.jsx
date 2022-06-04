import React, { useState } from "react";
import { Link } from "react-router-dom";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import chevronBackIcon from "assets/images/chevron-back-outline.svg";
import defaultProfile from "assets/images/men.jpg";

import {
   Dialog,
   IconButton,
   TextField,
   OutlinedInput,
   InputAdornment,
} from "@mui/material";

import Header from "v2/components/Header/Header";

const initialState = {
   mobileNumber: "9111164064",
   fullName: "",
   email: "",
   gender: "",
   birthday: "",
   location: "",
   alternateNumber: "",
   hintName: "",
   profileImage: null,
   bannerImage: null,
};

const photoType = {
   banner: "banner",
   photo: "photo",
};

const Profile = () => {
   const [profileDetails, setProfileDetails] = useState(initialState);
   const [isOpenPhotoDialog, setIsOpenPhotoDialog] = useState(false);
   const [updatePhotoType, setUpdatePhotoType] = useState("");

   const handleChange = (e) => {
      console.log(e.target.name, e.target.value);
      setProfileDetails({ [e.target.name]: e.target.value });
   };

   const handleFileUpload = (e) => {
      const file = e.target.files[0];
      var fileName = file.name;
      var idxDot = fileName.lastIndexOf(".") + 1;
      var extFile = fileName.substr(idxDot, fileName.length).toLowerCase();
      const fileFormate = ["png", "jpg", "jpeg"];
      if (fileFormate.includes(extFile)) {
         if (updatePhotoType === photoType.banner) {
            setProfileDetails({
               ...profileDetails,
               bannerImage: e.target.files[0],
            });
         } else {
            setProfileDetails({
               ...profileDetails,
               profileImage: e.target.files[0],
            });
         }
      } else {
         alert("Only jpg/jpeg and png files are allowed!");
      }
   };

   console.log("xoxo", profileDetails);
   return (
      <>
         <Header isShowSideOption={false}>
            <div className="flex items-center space-x-1">
               <Link to="/account">
                  <IconButton>
                     <img
                        src={chevronBackIcon}
                        alt="chevron-back-icon"
                        className="w-6"
                     />
                  </IconButton>
               </Link>
               <span className="uppercase text-tiny font-medium">Profile</span>
            </div>
         </Header>
         <div className="relative">
            <div
               onClick={() => {
                  setUpdatePhotoType(photoType.banner);
                  setIsOpenPhotoDialog(true);
               }}
               className="absolute bottom-2 right-1 text-white fill-current cursor-pointer z-50"
            >
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5"
                  viewBox="0 0 512 512"
               >
                  <path
                     d="M384 224v184a40 40 0 01-40 40H104a40 40 0 01-40-40V168a40 40 0 0140-40h167.48"
                     fill="none"
                     stroke="currentColor"
                     stroke-linecap="round"
                     stroke-linejoin="round"
                     stroke-width="32"
                  />
                  <path d="M459.94 53.25a16.06 16.06 0 00-23.22-.56L424.35 65a8 8 0 000 11.31l11.34 11.32a8 8 0 0011.34 0l12.06-12c6.1-6.09 6.67-16.01.85-22.38zM399.34 90L218.82 270.2a9 9 0 00-2.31 3.93L208.16 299a3.91 3.91 0 004.86 4.86l24.85-8.35a9 9 0 003.93-2.31L422 112.66a9 9 0 000-12.66l-9.95-10a9 9 0 00-12.71 0z" />
               </svg>
            </div>
            <div className="flex items-center justify-center absolute -bottom-14 mx-auto w-full left-0 right-0">
               <div
                  onClick={() => {
                     setUpdatePhotoType(photoType.photo);
                     setIsOpenPhotoDialog(true);
                  }}
                  className="relative"
               >
                  <div className="absolute right-1 top-1 text-white fill-current cursor-pointer">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5"
                        viewBox="0 0 512 512"
                     >
                        <path
                           d="M384 224v184a40 40 0 01-40 40H104a40 40 0 01-40-40V168a40 40 0 0140-40h167.48"
                           fill="none"
                           stroke="currentColor"
                           stroke-linecap="round"
                           stroke-linejoin="round"
                           stroke-width="32"
                        />
                        <path d="M459.94 53.25a16.06 16.06 0 00-23.22-.56L424.35 65a8 8 0 000 11.31l11.34 11.32a8 8 0 0011.34 0l12.06-12c6.1-6.09 6.67-16.01.85-22.38zM399.34 90L218.82 270.2a9 9 0 00-2.31 3.93L208.16 299a3.91 3.91 0 004.86 4.86l24.85-8.35a9 9 0 003.93-2.31L422 112.66a9 9 0 000-12.66l-9.95-10a9 9 0 00-12.71 0z" />
                     </svg>
                  </div>
                  <img
                     src={defaultProfile}
                     alt="default-men-profile"
                     className="w-28 rounded border border-white"
                     loading="lazy"
                  />
               </div>
            </div>
            <div
               onClick={() => {
                  setUpdatePhotoType(photoType.banner);
                  setIsOpenPhotoDialog(true);
               }}
               className="bg-gray-600 w-full h-40"
            ></div>
         </div>
         <div className="relative space-y-4 pb-24 mt-16 px-3 xl:px-0">
            <OutlinedInput
               id="outlined-adornment-password"
               name="mobileNumber"
               value={profileDetails.mobileNumber}
               onChange={handleChange}
               endAdornment={
                  <InputAdornment position="end">
                     <button className="uppercase text-xs text-black">
                        Change
                     </button>
                  </InputAdornment>
               }
               disabled
               fullWidth
               size="small"
               className="bg-white"
               label="Mobile Number*"
            />
            <TextField
               id="outlined-basic"
               label="Full Name"
               variant="outlined"
               size="small"
               fullWidth
               className="bg-white"
               name="fullName"
               value={profileDetails.fullName}
               onChange={handleChange}
            />
            <TextField
               id="outlined-basic"
               label="Email"
               variant="outlined"
               name="email"
               value={profileDetails.email}
               onChange={handleChange}
               size="small"
               fullWidth
               className="bg-white"
            />
            <div className="flex items-center">
               <button
                  name="gender"
                  value="M"
                  onClick={handleChange}
                  className="flex items-center border border-gray-400 py-2 rounded-l justify-center space-x-1 w-full"
               >
                  {profileDetails.gender === "M" && (
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="none"
                           stroke="currentColor"
                           stroke-linecap="round"
                           stroke-linejoin="round"
                           stroke-width="32"
                           d="M416 128L192 384l-96-96"
                        />
                     </svg>
                  )}
                  <span className="text-xs">Female</span>
               </button>
               <button
                  name="gender"
                  value="F"
                  onClick={handleChange}
                  className="flex items-center border border-gray-400 py-2 rounded-r justify-center space-x-1 w-full"
               >
                  {profileDetails.gender === "F" && (
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="none"
                           stroke="currentColor"
                           stroke-linecap="round"
                           stroke-linejoin="round"
                           stroke-width="32"
                           d="M416 128L192 384l-96-96"
                        />
                     </svg>
                  )}
                  <span className="text-xs">Male</span>
               </button>
            </div>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
               <DatePicker
                  label="Birthday"
                  className="bg-white"
                  name="birthday"
                  onChange={(e) => setProfileDetails({ birthday: e })}
                  value={profileDetails.birthday}
                  renderInput={(params) => (
                     <TextField
                        fullWidth
                        size="small"
                        onChange={handleChange}
                        {...params}
                     />
                  )}
               />
            </LocalizationProvider>
            <TextField
               id="outlined-basic"
               label="Location"
               variant="outlined"
               name="location"
               value={profileDetails.location}
               onChange={handleChange}
               size="small"
               fullWidth
               className="bg-white"
            />
            <div className="text-sm">Alternate mobile number details</div>
            <div>
               <TextField
                  label="Mobile Number"
                  id="outlined-start-adornment"
                  InputProps={{
                     startAdornment: (
                        <InputAdornment position="start">+91</InputAdornment>
                     ),
                  }}
                  fullWidth
                  size="small"
                  name="alternateNumber"
                  value={profileDetails.alternateNumber}
                  onChange={handleChange}
               />
               <span className="text-xs text-gray-500 ml-4">
                  This will help recover your account if needed
               </span>
            </div>
            <div>
               <TextField
                  id="outlined-basic"
                  label="Hint name"
                  variant="outlined"
                  size="small"
                  fullWidth
                  className="bg-white"
                  placeholder="Hint name"
                  name="hintName"
                  value={profileDetails.hintName}
                  onChange={handleChange}
               />
               <span className="text-xs text-gray-500 ml-4">
                  Add a name that helps you identify alternate number
               </span>
            </div>

            <button className="w-full text-xs border border-gray-400 rounded py-2 uppercase">
               Change Password
            </button>
         </div>
         <div className="flex items-center space-x-2 fixed bottom-0 w-full z-50 bg-white max-w-lg py-4 px-4 xl:py-3 xl:px-0 border-t">
            <button className="w-full py-3 bg-black text-white rounded text-xs uppercase">
               Save Details
            </button>
         </div>

         {isOpenPhotoDialog && (
            <Dialog
               open={isOpenPhotoDialog}
               onClose={() => setIsOpenPhotoDialog(false)}
               fullWidth
               fullScreen
            >
               <div className="max-w-md mx-auto w-full">
                  <div className="flex items-center justify-between py-1">
                     <IconButton onClick={() => setIsOpenPhotoDialog(false)}>
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           className="w-5"
                           viewBox="0 0 512 512"
                        >
                           <path
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="32"
                              d="M368 368L144 144M368 144L144 368"
                           />
                        </svg>
                     </IconButton>
                     <div className="uppercase text-sm">Photo</div>
                     <button
                        onClick={() => setIsOpenPhotoDialog(false)}
                        className="uppercase text-sm"
                     >
                        Done
                     </button>
                  </div>

                  {(profileDetails.bannerImage ||
                     profileDetails.profileImage) && (
                     <div>
                        <img
                           className="w-full h-72 rounded object-center"
                           src={URL.createObjectURL(
                              profileDetails.bannerImage
                                 ? profileDetails.bannerImage
                                 : profileDetails.profileImage,
                           )}
                           alt=""
                        />
                     </div>
                  )}
                  {!profileDetails.bannerImage && !profileDetails.profileImage && (
                     <div className="w-full h-72 flex flex-col m-auto justify-center items-center rounded bg-gray-300 mt-2">
                        {updatePhotoType === photoType.banner && (
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-10 text-white fill-current"
                              viewBox="0 0 512 512"
                           >
                              <circle cx="256" cy="272" r="64" />
                              <path d="M456 144h-83c-3 0-6.72-1.94-9.62-5L336.1 96.2C325 80 320 80 302 80h-92c-18 0-24 0-34.07 16.21L148.62 139c-2.22 2.42-5.34 5-8.62 5v-16a8 8 0 00-8-8H92a8 8 0 00-8 8v16H56a24 24 0 00-24 24v240a24 24 0 0024 24h400a24 24 0 0024-24V168a24 24 0 00-24-24zM260.51 367.9a96 96 0 1191.39-91.39 96.11 96.11 0 01-91.39 91.39z" />
                           </svg>
                        )}
                     </div>
                  )}

                  <label className="flex w-32 cursor-pointer mx-auto mt-6 items-center justify-center uppercase text-xs border border-black rounded focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 px-3 py-1">
                     <p>Upload Photo</p>
                     <input
                        onChange={handleFileUpload}
                        type="file"
                        accept=".png, .jpg, .jpeg"
                        className="hidden"
                     />
                  </label>
               </div>
            </Dialog>
         )}
      </>
   );
};

export default Profile;
