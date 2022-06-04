import React from "react";
import PropTypes from "prop-types";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const InputSelect = ({
   value,
   defaultValue,
   handleChange,
   placeholder,
   options,
   style,
}) => {
   return (
      <>
         <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={value}
            onChange={handleChange}
            className={style}
            placeholder={placeholder}
            defaultValue={defaultValue}
         >
            {options.length > 0 &&
               options.map((optItem, idx) => (
                  <MenuItem key={idx} value={optItem.value}>
                     {optItem.name}
                  </MenuItem>
               ))}
         </Select>
      </>
   );
};

InputSelect.propTypes = {
   value: PropTypes.string.isRequired,
   handleChange: PropTypes.func,
   placeholder: PropTypes.string,
   options: PropTypes.array,
   style: PropTypes.string,
};

export default InputSelect;
