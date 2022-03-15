import React, { useState } from "react";

import AppLogoSVG from "../../assets/AppLogo.svg";
import DesignElaborationSVG from "../../assets/DesignElaboration.svg";

import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";

import { useNavigate, useLocation} from "react-router-dom";

function TailorCreateAccount2Screen(){

  const navigate = useNavigate();
  const { state } = useLocation();

  const navToHome = () => {
    navigate("/tailor_home");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const data = new FormData(event.currentTarget);

    try {
      const body = {
        ...state,
        "experience": data.get("Experience"),
        "area_of_experience": data.get("Area of Experience"),
        "diploma": data.get("Diploma"),
        "speciality": data.get("Speciality"),
      };

      console.log(`THIS IS THE body: ${JSON.stringify(body)}`);

      navToHome(body);
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
          <div className="login_screen_row1_img create_account_screen_row1_img">
            <img style={{ width: "15%", marginBottom: "5%"}} src={AppLogoSVG} />
            <div>
              <p
                style={{
                  fontSize: "32px"
                }}
              >
                Introduce
              </p>
              <p
                style={{
                  fontSize: "32px"
                }}
              >
                yourself
              </p>
            </div>
          </div>
          <div className="login_screen_row1_img">
            <img style={{ width: "70%" }} src={DesignElaborationSVG} />
          </div>
        </div>
        <div className="login_screen_row2">
          <div className="create_account_screen_row2_container">
            <CustomInput
              labelText="Experience"
              inputName="Experience"
              inputPlaceholder="Experience"
              divStyle={{
                marginBottom: "6%"
              }}
            />
            <CustomInput
              labelText="Area of Experience"
              inputName="Area of Experience"
              inputPlaceholder="Area of Experience"
              divStyle={{
                marginBottom: "6%"
              }}
            />
            <CustomInput
              labelText="Diploma"
              inputName="Diploma"
              inputPlaceholder="Diploma"
              divStyle={{
                marginBottom: "6%"
              }}
            />
            <CustomInput
              labelText="Speciality"
              inputName="Speciality"
              inputPlaceholder="Speciality"
              divStyle={{
                marginBottom: "6%"
              }}
            />
            <CustomButton
              text="Save"
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

export default TailorCreateAccount2Screen;