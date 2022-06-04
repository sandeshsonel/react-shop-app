import React from "react";

import userCircleIcon from "assets/images/person-circle-outline.svg";

import InputText from "components/InputText";
import MuiSelect from "components/MuiSelect";

const PrimaryInfo = () => {
   return (
      <div className="px-3 xl:px-0">
         <div className="flex items-center space-x-1 py-2 border-t">
            <img
               src={userCircleIcon}
               alt="person-circle-icon"
               className="w-14"
            />
            <button className="uppercase text-sm">Add Picture</button>
         </div>
         <div className="space-y-1 pb-20">
            <InputText
               name="fullName"
               labelName="Full Name*"
               placeholder="Johne Doe"
            />
            <InputText name="phoneNumber" labelName="Phone Number*" />
            <InputText name="email" labelName="Email ID*" />
            <MuiSelect name="gender" labelName="Gender" />
            <InputText name="fullName" labelName="Full Name*" />
            <MuiSelect className="w-full" labelName="Languages Spoken*" />
         </div>
         <div className="py-3 px-2 xl:px-0 border-t fixed bottom-0 max-w-lg w-full bg-white">
            <button className="w-full bg-black text-white py-2 rounded-md">
               Save
            </button>
         </div>
      </div>
   );
};

export default PrimaryInfo;
