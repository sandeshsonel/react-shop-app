import React from "react";
import PropTypes from "prop-types";

import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const AodhSelect = ({
   labelName,
   defaultValue,
   value,
   name,
   handleOnBlur,
   options,
   handleChange,
   errorDetails,
   placeholder,
   helperText,
   disable = false,
}) => {
   return (
      <div className="w-full">
         {labelName && (
            <label className="text-xs font-medium text-gray-600" htmlFor="">
               {labelName}
            </label>
         )}

         <Select
            labelId="demo-simple-select-label"
            variant="outlined"
            fullWidth
            style={{
               // height: "45px",
               borderRadius: "10px",
               // marginTop: "5px",
            }}
            placeholder={placeholder}
            defaultValue={defaultValue}
            value={value}
            onChange={handleChange}
            id={`outlined-adornment-weight ${
               errorDetails?.isError && "outlined-error-helper-text"
            }`}
            onClose={() => handleOnBlur && handleOnBlur(name, value)}
            displayEmpty={true}
            renderValue={(value) =>
               value?.length
                  ? Array.isArray(value)
                     ? value.join(", ")
                     : value
                  : placeholder
            }
            disabled={disable}
            className={`mt-0 xl:mt-1 w-full h-9 xl:h-11 hide-input-arrow ${
               disable ? "bg-gray-200" : "bg-white"
            }`}
            error={errorDetails?.isError}
            name={name}
            inputProps={{
               "data-testid": name,
            }}
         >
            {options?.length > 0 &&
               options.map((option, idx) => (
                  <MenuItem key={idx} value={option}>
                     {option}
                  </MenuItem>
               ))}
         </Select>
         <div className="flex items-center justify-between">
            {errorDetails?.isError && (
               <div className="text-sm text-red-500 mt-1">
                  {errorDetails.errorName}
               </div>
            )}
            {helperText && (
               <div className="text-green-700 text-sm mt-1 font-medium">
                  {helperText}
               </div>
            )}
         </div>
      </div>
   );
};

AodhSelect.propTypes = {
   labelName: PropTypes.string.isRequired,
   defaultValue: PropTypes.string,
   value: PropTypes.string,
   name: PropTypes.string,
   handleOnBlur: PropTypes.func,
   options: PropTypes.array.isRequired,
   handleChange: PropTypes.func,
   errorDetails: PropTypes.object,
   placeholder: PropTypes.string,
   helperText: PropTypes.string,
   disable: PropTypes.bool,
};

export default AodhSelect;
