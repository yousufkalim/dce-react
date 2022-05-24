import React, { useState } from "react";

import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TimePicker from "@mui/lab/TimePicker";

function CustomTimePicker({ labelText, value, onChange, disabled, divStyle, labelStyle }) {
  const [open, setOpen] = useState(false);

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
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <TimePicker
            className="cdp_container"
            open={open}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
            value={value}
            onChange={onChange}
            renderInput={(params) => <TextField {...params} />}
            disabled={disabled}
          />
        </LocalizationProvider>
      </div>
    </div>
  );
}

export default CustomTimePicker;
