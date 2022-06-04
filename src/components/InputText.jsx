import React from "react";
import PropTypes from "prop-types";

import { OutlinedInput } from "@mui/material";

const AodhInput = ({
   labelName,
   defaultValue,
   value,
   name,
   errorDetails,
   inputType = "text",
   handleChange,
   handleOnBlur,
   placeholder,
   isDisable = false,
   multiline = false,
   rows = 0,
   startIcon,
   fullWidth = true,
   dateRange = "max",
}) => {
   return (
      <div className="w-full">
         {labelName && (
            <label className="text-xs font-medium text-gray-600" htmlFor="">
               {labelName}
            </label>
         )}

         <OutlinedInput
            defaultValue={defaultValue}
            value={value}
            onChange={handleChange}
            id={`outlined-adornment-weight outlined-select-currency ${
               errorDetails?.isError && "outlined-error-helper-text"
            }`}
            onBlur={() => {
               handleOnBlur && handleOnBlur(name, value);
            }}
            error={errorDetails?.isError}
            name={name}
            style={{
               // height: "45px",
               borderRadius: "10px",
               // marginTop: "5px",
            }}
            multiline={multiline}
            rows={rows}
            disabled={isDisable}
            placeholder={placeholder}
            className={`mt-0 xl:mt-1 w-full h-9 xl:h-11 text-tiny xl:text-base hide-input-arrow capitalize ${
               isDisable ? "bg-gray-200" : "bg-white"
            }`}
            fullWidth={fullWidth}
            type={inputType}
            size="small"
            aria-describedby="outlined-weight-helper-text"
            aria-labelledby={name}
            for={name}
            labelWidth={0}
            startAdornment={
               startIcon && <div className="pr-1">{startIcon}</div>
            }
         />

         {/* {errorDetails?.isError && (
            <div className="text-xs text-red-500 mt-1">
               Please fill this field
            </div>
         )} */}
      </div>
   );
};

AodhInput.propTypes = {
   labelName: PropTypes.string,
   defaultValue: PropTypes.string,
   value: PropTypes.string,
   name: PropTypes.string,
   isEditDetails: PropTypes.bool,
   errorDetails: PropTypes.object,
   inputType: PropTypes.string,
   handleChange: PropTypes.func,
   handleOnBlur: PropTypes.func,
   placeholder: PropTypes.string,
   isDisable: PropTypes.bool,
   multiline: PropTypes.bool,
   rows: PropTypes.number,
   startIcon: PropTypes.string,
   fullWidth: PropTypes.bool,
   dateRange: PropTypes.string,
};

export default AodhInput;
