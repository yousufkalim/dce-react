import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { makeStyles } from "@mui/styles";
import InputLabel from "@mui/material/InputLabel";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";

export default function ComboBox(props) {
  const useStyles = makeStyles((theme) => ({
    formControl: {
      width: "100% !important",
      "@media (max-width:600px)": {
        width: "100% !important",
      },
    },
    inputLabels: {
      display: "flex",
      fontStyle: "normal !important",
      fontWeight: "550 !important",
      fontSize: "14px !important",
      lineHeight: "151.02 !important%",
      color: "#363557 !important",
      "&  .MuiInputLabel-formControl": { textAlign: "center !important" },

      "@media (max-width:992px)": {
        fontSize: "20px !important",
      },
      "@media (max-width:600px)": {
        width: "200% !important",
        textAlign: "center !important",
      },
    },
    textfield: {
      border: props.componenet == "parseaddress" ? "" : "1px solid #CC8E9C",
      borderRadius: "10px",
      borderWidth: "1.5px",
      fontStyle: "normal !important",
      fontSize: props.componenet == "parseaddress" ? "12px !important" : "14px !important",
      lineHeight: "151.02% !important",
      color: "black !important",
      fontWeight: "300 !important",
      marginTop: props.componenet == "parseaddress" ? "0px" : "10px !important",
      "@media (max-width:992px)": {
        fontSize: "16px !important",
      },
      "@media (max-width:600px)": {
        height: "60px !important",
        "& .MuiInput-input": {
          textAlign: "center !important",
        },
      },
    },
    helper: {},
  }));
  const classes = useStyles();

  return (
    <FormControl
      className={classes.formControl}
      error={props.error ? true : false}
      variant={props.variant || "standard"}
      {...props.FormControlProps}
    >
      <Autocomplete
        disab
        sx={{
          width: "100%",
          height: props.componenet == "parseaddress" ? "42px !important" : "72px !important",
          border: "none",
        }}
        getOptionLabel={(option) => option.label}
        disabled={props.disabled}
        options={props.options}
        defaultValue={props.defaultValue}
        onChange={(event, value) => props.onAddressSelect(value)}
        renderInput={(params) => (
          <TextField
            {...params}
            type="text"
            placeholder={props.placeholder}
            sx={{
              width: "100% !important",
              height: "72px !important",
              border: "none",
            }}
            onChange={(e) => {
              props.onChangeAddress ? props.onChangeAddress(e) : props.onChangeLanguage(e);
            }}
            inputProps={{
              ...params.inputProps,
              className: classes.textfield,
              Autocomplete: "#####autoComplete",
              value: props.value,
              form: {
                autocomplete: props.disabled ? "off" : "on",
              },
            }}
          />
        )}
      />
      {props.error && (
        <FormHelperText className={classes.helper} {...props.helperProps}>
          {props.ErrorMsg}
        </FormHelperText>
      )}
    </FormControl>
  );
}
