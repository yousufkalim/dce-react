import React, { useState, useEffect } from "react";

import AppLogoSVG from "../../assets/AppLogo.svg";
import DesignElaborationSVG from "../../assets/DesignElaboration.svg";

import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";

import Api from "../../api/index";

import { useNavigate, useLocation } from "react-router-dom";

import { toast } from "react-toastify";

import * as FormValidations from "../../utils/Validations";

function TailorVerifyEmailScreen() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    if (!state?.["Email"] || !state?.["Password"] || !state?.["otp"]) {
      navigate("/login");
    }
  }, []);

  const navToCreateAccount = (_state) => {
    navigate("/tailor_create_account_1", { state: _state });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isProcessing) {
      return;
    }

    const data = new FormData(event.currentTarget);

    const isValidated = FormValidations.tailorVerifyEmail(data);

    if (!isValidated) {
      return;
    }

    if (data.get("Verification Code") != state.otp.otp) {
      toast.error("OTP is incorrect.");
      return;
    }

    let response;

    try {
      setIsProcessing(true);

      const body = {
        email: state["Email"],
        code: data.get("Verification Code"),
      };

      response = await Api("put", "/otps", body);

      if (response?.data?.success) {
        toast.success(response.data.message);
        navToCreateAccount({
          Email: state["Email"],
          Password: state["Password"],
        });
      }
    } catch (e) {
      console.trace(e);
    }

    setIsProcessing(false);
  };

  return (
    <form noValidate={true} onSubmit={handleSubmit}>
      <div
        className="container"
        style={{
          background:
            "linear-gradient(to left top, #EEE9DC 0%, #F0EEEB 50%, #EEEEEE 100%), linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 1))",
        }}
      >
        <div className="login_screen_top">
          <div className="login_screen_row1">
            <div className="login_screen_row1_img">
              <img
                style={{ width: "35%", marginBottom: "5%" }}
                src={AppLogoSVG}
              />
            </div>
            <div className="login_screen_row1_img">
              <img style={{ width: "70%" }} src={DesignElaborationSVG} />
            </div>
          </div>
          <div className="login_screen_row2">
            <div className="login_screen_row2_container">
              <CustomInput
                disabled
                labelText="Email"
                inputType="email"
                inputName="Email"
                inputPlaceholder="abc@xyz.com"
                inputDefaultValue={state?.["Email"]}
                divStyle={{
                  marginBottom: "6%",
                }}
              />
              <CustomInput
                disabled
                labelText="Password"
                inputType="password"
                inputName="Password"
                inputPlaceholder="********"
                inputDefaultValue={state?.["Email"]}
                divStyle={{
                  marginBottom: "6%",
                }}
              />
              <CustomInput
                labelText="Verification Code"
                inputType="password"
                inputName="Verification Code"
                inputPlaceholder="Verification Code"
                enableEyes={true}
                divStyle={{
                  marginBottom: "6%",
                }}
              />
              <CustomButton
                text="Create Account"
                type="submit"
                style={{
                  marginBottom: "10%",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default TailorVerifyEmailScreen;
