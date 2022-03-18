import React, { useState } from "react";

import AppLogoSVG from "../../assets/AppLogo.svg";
import DesignElaborationSVG from "../../assets/DesignElaboration.svg";

import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";

import Api from "../../api/index";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import * as FormValidations from "../../utils/Validations";

function ClientRegisterScreen(){

  const navigate = useNavigate();

  const [processing, setProcessing] = useState(false);

  const navToLogin = () => {
    navigate("/login");
  };

  const navToVerifyEmail = (state) => {
    navigate(
      "/client_verify_email",
      {
        state: state
      }
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (processing) {
      return;
    }
    
    const data = new FormData(event.currentTarget);

    const isValidated = FormValidations.clientRegister(data);

    if (!isValidated) {
      return;
    }

    let response;

    try {
      setProcessing(true);

      const body = {
        "email": data.get("Email"),
      };

      response = await Api("post", "/otps", body);

      if (response?.data?.success) {
        toast.success(response.data.message);
        navToVerifyEmail({
          "Email": data.get("Email"),
          "Password": data.get("Password"),
          "otp": {
            ...response.data.otp
          }
        });
      }
    } catch (e) {
      console.trace(e);
    }

    setProcessing(false);

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
              divStyle={{
                marginBottom: "6%"
              }}
            />
            <CustomInput
              labelText="Password"
              inputType="password"
              inputName="Password"
              inputPlaceholder="********"
              enableEyes={true}
              divStyle={{
                marginBottom: "6%"
              }}
            />
            <CustomButton
              text="Sign up"
              type="submit"
              style={{
                marginBottom: "10%"
              }}
            />
            <div
              onClick={navToLogin}
              style={{
                cursor: "pointer"
              }}
            >
              <p
                style={{
                  fontSize: "11px",
                  color: "#A0A0A0",
                }}
              >
                Already have an account?
              </p>
              <p
                style={{
                  fontSize: "16px",
                  color: "#CC8E9C",
                }}
              >
                Sign in now
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </form>
  );
}

export default ClientRegisterScreen;