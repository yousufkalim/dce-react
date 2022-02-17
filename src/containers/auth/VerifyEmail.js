import React from "react";

import AppLogoSVG from "../../assets/AppLogo.svg";
import DesignElaborationSVG from "../../assets/DesignElaboration.svg";

import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";

import { useNavigate, useLocation } from "react-router-dom";

function VerifyEmailScreen(){

  const navigate = useNavigate();
  const { state } = useLocation();

  const navToCreateAccount = (_state) => {
    navigate("/create_account", { state: _state });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const data = new FormData(event.currentTarget);

    try {
      const body = {
        "email": data.get("Email"),
        "password": data.get("Password"),
        "verification_code": data.get("Verification Code"),
      };

      console.log(`THIS IS THE body: ${JSON.stringify(body)}`);

      navToCreateAccount(body);
    } catch (e) {
      console.trace(e);
    }
  }

  return (
    <form
      noValidate={true}
      onSubmit={handleSubmit}
    >
    <div
      className="container"
      style={{
        background: "linear-gradient(to left top, #EEE9DC 0%, #F0EEEB 50%, #EEEEEE 100%), linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 1))",
      }}
    >
      <div className="login_screen_top">
        <div className="login_screen_row1">
          <div className="login_screen_row1_img">
            <img style={{ width: "35%", marginBottom: "5%"}} src={AppLogoSVG} />
          </div>
          <div className="login_screen_row1_img">
            <img style={{ width: "70%" }} src={DesignElaborationSVG} />
          </div>
        </div>
        <div className="login_screen_row2">
          <div className="login_screen_row2_container">
            <CustomInput
              labelText="Email"
              inputType="email"
              inputName="Email"
              inputPlaceholder="abc@xyz.com"
              inputDefaultValue={state.email}
              divStyle={{
                marginBottom: "6%"
              }}
            />
            <CustomInput
              labelText="Password"
              inputType="password"
              inputName="Password"
              inputPlaceholder="********"
              inputDefaultValue={state.password}
              divStyle={{
                marginBottom: "6%"
              }}
            />
            <CustomInput
              labelText="Verification Code"
              inputType="password"
              inputName="Verification Code"
              inputPlaceholder="Passcode"
              enableEyes={true}
              divStyle={{
                marginBottom: "6%"
              }}
            />
            <CustomButton
              text="Create Account"
              type="submit"
              style={{
                marginBottom: "10%"
              }}
            />
          </div>
        </div>
      </div>
    </div>
    </form>
  );
}

export default VerifyEmailScreen;