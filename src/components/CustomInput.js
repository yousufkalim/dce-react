import React, { useState } from 'react';
import InputEyeSVG from '../assets/InputEye.svg';
import { useTranslation } from 'react-i18next';

function CustomInput({
  labelText,
  inputType,
  inputName,
  inputPlaceholder,
  inputDefaultValue,
  inputValue,
  enableEyes,
  accept,
  onChange,
  disabled,
  ref,
  divStyle,
  labelStyle,
  inputStyle,
  dobinput,
  minmax,
  maxChar
}) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const { t } = useTranslation();

  const handlePasswordVisible = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  return (
    <div
      className='custom_input_container'
      style={{
        ...divStyle,
      }}
    >
      <label
        htmlFor={labelText}
        className='custom_input_label'
        style={{
          ...labelStyle,
        }}
      >
        {labelText}
      </label>
      <div
        style={{
          position: 'relative',
          height: '100%',
          width: '100%',
        }}
      >
        <input
          disabled={disabled}
          ref={ref}
          type={
            enableEyes ? (!isPasswordVisible ? 'password' : 'text') : inputType ? inputType : 'text'
          }
          name={inputName}
          accept={accept}
          onChange={onChange}
          placeholder={t(inputPlaceholder)}
          defaultValue={inputDefaultValue}
          value={inputValue}
          maxlength={minmax ? maxChar? 2 : 30 : 100}
          className='custom_input_input'
          style={{
            ...inputStyle,
          }}
        />
        {enableEyes ? (
          <img
            onClick={handlePasswordVisible}
            src={InputEyeSVG}
            style={{
              position: 'absolute',
              right: '10px',
              top: '12px',
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
