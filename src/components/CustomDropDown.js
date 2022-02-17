import React from "react";

import Select from "@mui/material/Select";

function CustomDropDown({
  labelText,
  selectID,
  selectName,
  selectNullValue,
  selectValue,
  onChange,
  menuItems,
  divStyle,
  labelStyle,
}){
  return (
    <div
      className="custom_input_container"
      style={{
        ...divStyle
      }}
    >
      <label
        htmlFor={labelText}
        className="custom_input_label"
        style={{
          ...labelStyle
        }}
      >
        {labelText}
      </label>
      <div
        style={{
          position: "relative",
          height: "100%",
          width: "100%"
        }}
      >
        <Select
          displayEmpty
          id={selectID}
          name={selectName}
          value={selectValue}
          className="register_input_field"
          onChange={onChange}
          renderValue={(value) =>
            value.length > 0 ? value : selectNullValue
          }
        >
          {menuItems}
        </Select>
      </div>
    </div>
  );
}

export default CustomDropDown;