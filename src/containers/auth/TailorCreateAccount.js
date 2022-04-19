import React, { useState, useEffect } from "react";

import AppLogoSVG from "../../assets/AppLogo.svg";
import DesignElaborationSVG from "../../assets/DesignElaboration.svg";

import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import CustomDatePicker from "../../components/CustomDatePicker";

import Checkbox from "@mui/material/Checkbox";
import { grey } from "@mui/material/colors";

import { handleLogin } from "../../utils/Auth";
import Api from "../../api/index";

import { useNavigate, useLocation } from "react-router-dom";

import { toast } from "react-toastify";

import * as FormValidations from "../../utils/Validations";

import { Store, UpdateStore } from "../../StoreContext";

function TailorCreateAccountScreen() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const [isProcessing, setIsProcessing] = useState(false);
  const [dateOfBirth, setDateOfBirth] = useState(new Date("January 01, 1999"));
  const [hasPhysicalStore, setHasPhysicalStore] = useState(false);

  const store = Store();
  const updateStore = UpdateStore();

  useEffect(() => {
    if (!state?.["Email"] || !state?.["Password"]) {
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

    const isValidated = FormValidations.tailorCreateAccount(data);

    if (!isValidated) {
      return;
    }

    if (dateOfBirth == null) {
      toast.error("Date of Birth must be selected.");
      return;
    }

    let response;

    try {
      setIsProcessing(true);

      const body = {
        email: state["Email"],
        password: state["Password"],
        shop_name: data.get("Name of your company"),
        name: data.get("Name"),
        dob: dateOfBirth,
        address: data.get("Address"),
        zip_code: data.get("Zip Code"),
        city: data.get("City"),
        phone: data.get("Phone No"),
      };

      if (hasPhysicalStore) {
        if (!data.get("Store Name")) {
          toast.error("Store Name can't be empty.");
          return;
        }
        body["store_name"] = data.get("Store Name");
      }

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
                labelText="Name of your company"
                inputName="Name of your company"
                inputPlaceholder="Name of your company"
                divStyle={{
                  marginBottom: "6%",
                }}
              />
              <CustomInput
                labelText="Name"
                inputName="Name"
                inputPlaceholder="Name"
                divStyle={{
                  marginBottom: "6%",
                }}
              />
              <CustomDatePicker
                disableFuture
                labelText="Date of Birth"
                value={dateOfBirth}
                onChange={setDateOfBirth}
                divStyle={{
                  marginBottom: "6%",
                }}
              />
              <CustomInput
                labelText="Address"
                inputName="Address"
                inputPlaceholder="Address"
                divStyle={{
                  marginBottom: "6%",
                }}
              />
              <div className="create_account_screen_row2_row1">
                <CustomInput
                  // disabled
                  labelText="Zip Code"
                  inputName="Zip Code"
                  inputPlaceholder="Zip Code"
                  divStyle={{
                    display: "flex",
                    width: "48%",
                    marginBottom: "6%",
                  }}
                />
                <CustomInput
                  // disabled
                  labelText="City"
                  inputName="City"
                  inputPlaceholder="City"
                  divStyle={{
                    display: "flex",
                    width: "48%",
                    marginBottom: "6%",
                  }}
                />
              </div>
              <CustomInput
                labelText="Phone No"
                inputName="Phone No"
                inputPlaceholder="Phone No"
                divStyle={{
                  marginBottom: "2%",
                }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "2%",
                }}
              >
                <Checkbox
                  checked={hasPhysicalStore}
                  sx={{
                    color: grey[900],
                    "&.Mui-checked": {
                      color: grey[900],
                    },
                  }}
                  onChange={(e) => setHasPhysicalStore(e.target.checked)}
                />
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: "400",
                    color: "#A0A0A0",
                    paddingLeft: "10px",
                  }}
                >
                  I Have Physical Store
                </p>
              </div>
              {hasPhysicalStore ? (
                <CustomInput
                  labelText="Store Name"
                  inputName="Store Name"
                  inputPlaceholder="Store Name"
                  labelStyle={{
                    display: "none",
                  }}
                  divStyle={{
                    marginBottom: "6%",
                    width: "48%",
                  }}
                />
              ) : (
                <></>
              )}

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

export default TailorCreateAccountScreen;
