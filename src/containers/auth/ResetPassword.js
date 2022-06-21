import React, { useState } from "react";

import AppLogoSVG from "../../assets/AppLogo.svg";
import DesignElaborationSVG from "../../assets/DesignElaboration.svg";

import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";

import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

function ResetPasswordScreen() {
  const { t } = useTranslation();

  return (
    <>
      <form>
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
                <img style={{ width: "35%", marginBottom: "5%" }} src={AppLogoSVG} />
              </div>
              <div className="login_screen_row1_img">
                <img style={{ width: "70%" }} src={DesignElaborationSVG} />
              </div>
            </div>
            <div className="login_screen_row2">
              <div className="login_screen_row2_container">
                <div
                  style={{
                    cursor: "pointer",
                  }}
                >
                  <p
                    style={{
                      fontSize: "16px",
                      color: "#CC8E9C",
                      fontWeight: "600",
                      marginBottom: "4%",
                    }}
                  >
                    {t("Reset Password")}
                  </p>
                  <p
                    style={{
                      fontSize: "11px",
                      color: "#A0A0A0",
                      marginBottom: "10%",
                    }}
                  >
                    {t("Set up your new Password & Login")}
                  </p>
                </div>
                <CustomInput
                  labelText={t("Password")}
                  inputType="password"
                  inputName="Password"
                  inputPlaceholder="********"
                  enableEyes={true}
                  divStyle={{
                    marginBottom: "12%",
                  }}
                />
                <CustomInput
                  labelText={t("Password")}
                  inputType="password"
                  inputName="Password"
                  inputPlaceholder="********"
                  enableEyes={true}
                  divStyle={{
                    marginBottom: "12%",
                  }}
                />

                <CustomButton
                  text={t("Change Password")}
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
    </>
  );
}

export default ResetPasswordScreen;
