import React from "react";
import Select from "@mui/material/Select";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  // icon: {
  //   right: 20,
  //   color: "#000000",
  // },
}));

function CustomDropDown({
  labelText,
  selectID,
  selectName,
  selectNullValue,
  selectValue,
  onChange,
  menuItems,
  disabled,
  divStyle,
  labelStyle,
  selectSX,
  valuecolor
}) {
  const classes = useStyles();
  return (
    <div
      className="custom_input_container"
      style={{
        ...divStyle,
      }}
    >
      <label
        htmlFor={labelText}
        className="custom_input_label"
        style={{
          ...labelStyle,
        }}
      >
        {labelText}
      </label>
      <div
        style={{
          position: "relative",
          height: "100%",
           width: "100%",
        }}
      >
        <Select
          displayEmpty
          disabled={disabled}
          id={selectID}
          name={selectName}
          value={selectValue}
          className="register_input_field"
          onChange={onChange}
          renderValue={(value) => (value.length > 0 ? value : selectNullValue)}
          IconComponent={KeyboardArrowDownRoundedIcon}
          sx={{
            '& .Mui-disabled': {
              borderRadius: '1px',
            },
            color: valuecolor==="on"?"#ffffff":"#A0A0A0",
            minWidth: "100%",
            background: "transparent",
            ...selectSX,
          }}
        >
  {menuItems}
        </Select>
      </div>
    </div>
  );
}

export default CustomDropDown;
