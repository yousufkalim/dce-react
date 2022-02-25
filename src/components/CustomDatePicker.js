import React from "react";

import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";

function CustomDatePicker({
  labelText,
  value,
  onChange,
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
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DesktopDatePicker
            className="cdp_container"
            value={value}
            onChange={onChange}
            inputFormat="MM/dd/yyyy"
            renderInput={(params) => <TextField {...params} />}
            maxDate={new Date()}
          />
        </LocalizationProvider>
      </div>
    </div>
  );
}

export default CustomDatePicker;