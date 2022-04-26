import React from "react";

import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";

function CustomDatePicker({
  labelText,
  value,
  onChange,
  disablePast,
  disableFuture,
  disabled,
  divStyle,
  labelStyle,
  dobinput,
}) {
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
          border: dobinput == "dob" ? "1px solid #CC8E9C" : "",
          borderRadius: dobinput == "dob" ? "10px" : "",
          borderWidth: dobinput == "dob" ? "1.5px" : "",
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DesktopDatePicker
            className="cdp_container"
            value={value}
            onChange={onChange}
            disablePast={disablePast}
            disableFuture={disableFuture}
            inputFormat="dd/MM/yyyy"
            renderInput={(params) => <TextField {...params} />}
            disabled={disabled}
          />
        </LocalizationProvider>
      </div>
    </div>
  );
}

export default CustomDatePicker;
