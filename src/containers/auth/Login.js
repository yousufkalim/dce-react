import React, { useState } from "react";

import AppLogoSVG from "../../assets/AppLogo.svg";
import DesignElaborationSVG from "../../assets/DesignElaboration.svg";

import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";

import { handleLogin } from "../../utils/Auth";
import Api from "../../api/index";

import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

import * as FormValidations from "../../utils/Validations";

import { Store, UpdateStore } from "../../StoreContext";

function LoginScreen() {
  const navigate = useNavigate();

  const [isProcessing, setIsProcessing] = useState(false);
  const store = Store();
  const updateStore = UpdateStore();

  const navToHome = () => {
    e.stopPropagation()
     navigate("/home");
  };

  const navToSelectRole = (e) => {
    e.stopPropagation()
    navigate("/select_role");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isProcessing) {
      return;
    }

    const data = new FormData(event.currentTarget);

    const isValidated = FormValidations.login(data);

    if (!isValidated) {
      return;
    }

    let response;

    try {
      setIsProcessing(true);

      const body = {
        email: data.get("Email"),
        password: data.get("Password"),
      };

      response = await Api("post", "/auth/login", body);

      if (response?.data?.success) {
        toast.success("Logged In");
        handleLogin(response.data.token, response.data.user, updateStore);
        navToHome();
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
                labelText="Email"
                inputType="email"
                inputName="Email"
                inputPlaceholder="abc@xyz.com"
                divStyle={{
                  marginBottom: "6%",
                }}
              />
              <CustomInput
                labelText="Password"
                inputType="password"
                inputName="Password"
                inputPlaceholder="********"
                enableEyes={true}
                divStyle={{
                  marginBottom: "6%",
                }}
              />
              <p
                style={{
                  fontSize: "11px",
                  fontWeight: "600",
                  color: "#A0A0A0",
                  marginBottom: "4%",
                }}
              >
                Forgot Password?
              </p>
              <CustomButton
                text="Login"
                // type="submit"
                onClick={navToHome}
                style={{
                  marginBottom: "10%",
                }}
              />
              <div
                onClick={navToSelectRole}
                style={{
                  cursor: "pointer",
                }}
              >
                <p
                  style={{
                    fontSize: "11px",
                    color: "#A0A0A0",
                  }}
                >
                  Don't have an account?
                </p>
                <p
                  style={{
                    fontSize: "16px",
                    color: "#CC8E9C",
                  }}
                >
                  Register now
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default LoginScreen;
