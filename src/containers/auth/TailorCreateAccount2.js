import React, { useState, useEffect } from "react";

import AppLogoSVG from "../../assets/AppLogo.svg";
import DesignElaborationSVG from "../../assets/DesignElaboration.svg";

import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";

import { handleLogin } from "../../utils/Auth";
import Api from "../../api/index";

import { useNavigate, useLocation } from "react-router-dom";

import { toast } from "react-toastify";

import * as FormValidations from "../../utils/Validations";

import { Store, UpdateStore } from "../../StoreContext";

function TailorCreateAccount2Screen() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const [isProcessing, setIsProcessing] = useState(false);
  const store = Store();
  const updateStore = UpdateStore();

  useEffect(() => {
    if (
      !state?.["Email"] ||
      !state?.["Password"] ||
      !state?.["Full Name"] ||
      !state?.["Date of Birth"] ||
      !state?.["Address"] ||
      !state?.["Country"] ||
      !state?.["City"]
    ) {
      navigate("/login");
    }
  }, []);

  const navToHome = () => {
    navigate("/home");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isProcessing) {
      return;
    }

    const data = new FormData(event.currentTarget);

    const isValidated = FormValidations.tailorCreateAccount2(data);

    if (!isValidated) {
      return;
    }

    let response;

    try {
      setIsProcessing(true);

      const body = {
        email: state["Email"],
        password: state["Password"],
        name: state["Full Name"],
        dob: state["Date of Birth"],
        address: state["Address"],
        country: state["Country"],
        city: state["City"],
        experience: data.get("Experience"),
        area_of_experience: data.get("Area of Experience"),
        diploma: data.get("Diploma"),
        speciality: data.get("Speciality"),
      };

      response = await Api("post", "/tailors", body);

      if (response?.data?.success) {
        toast.success("Registered successfully!");
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
            <div className="login_screen_row1_img create_account_screen_row1_img">
              <img
                style={{ width: "15%", marginBottom: "5%" }}
                src={AppLogoSVG}
              />
              <div>
                <p
                  style={{
                    fontSize: "32px",
                  }}
                >
                  Introduce
                </p>
                <p
                  style={{
                    fontSize: "32px",
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
                  marginBottom: "6%",
                }}
              />
              <CustomInput
                labelText="Area of Experience"
                inputName="Area of Experience"
                inputPlaceholder="Area of Experience"
                divStyle={{
                  marginBottom: "6%",
                }}
              />
              <CustomInput
                labelText="Diploma"
                inputName="Diploma"
                inputPlaceholder="Diploma"
                divStyle={{
                  marginBottom: "6%",
                }}
              />
              <CustomInput
                labelText="Speciality"
                inputName="Speciality"
                inputPlaceholder="Speciality"
                divStyle={{
                  marginBottom: "6%",
                }}
              />
              <CustomButton
                text="Save"
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

export default TailorCreateAccount2Screen;
