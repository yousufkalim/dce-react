import React, { useState } from "react";
import InputEyeSVG from "../assets/InputEye.svg";

function CustomInput({
  labelText,
  inputType,
  inputName,
  inputPlaceholder,
  inputDefaultValue,
  Inputvalue,
  enableEyes,
  accept,
  onChange,
  disabled,
  ref,
  divStyle,
  labelStyle,
  inputStyle,
  dobinput
}) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handlePasswordVisible = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
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
        <input
          disabled={disabled}
          ref={ref}
          type={
            enableEyes
              ? !isPasswordVisible
                ? "password"
                : "text"
              : inputType
              ? inputType
              : "text"
          }
          name={inputName}
          accept={accept}
          onChange={onChange}
          placeholder={inputPlaceholder}
          defaultValue={inputDefaultValue}
          value={Inputvalue}
          className="custom_input_input"
          style={{
            ...inputStyle,
          }}
        />
        {enableEyes ? (
          <img
            onClick={handlePasswordVisible}
            src={InputEyeSVG}
            style={{
              position: "absolute",
              right: "10px",
              top: "12px",
            }}
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default CustomInput;
