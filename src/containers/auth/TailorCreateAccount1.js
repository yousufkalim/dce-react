import React, { useState, useEffect } from "react";

import AppLogoSVG from "../../assets/AppLogo.svg";
import DesignElaborationSVG from "../../assets/DesignElaboration.svg";

import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import CustomDatePicker from "../../components/CustomDatePicker";
import CustomDropDown from "../../components/CustomDropDown";

import MenuItem from "@mui/material/MenuItem";

import { useNavigate, useLocation} from "react-router-dom";

import { toast } from "react-toastify";

import * as FormValidations from "../../utils/Validations";

function TailorCreateAccount1Screen(){

  const navigate = useNavigate();
  const { state } = useLocation();

  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");

  useEffect(() => {
    if(
      !state?.["Email"] ||
      !state?.["Password"]
    ){
      navigate("/login");
    }
  }, [])

  const navToCreateAccount2 = (_state) => {
    navigate("/tailor_create_account_2", { "state": _state });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    const isValidated = FormValidations.tailorCreateAccount1(data);

    if (!isValidated) {
      return;
    }

    if(dateOfBirth == null){
      toast.error("Date of Birth must be selected.");
      return;
    } else if(country == ""){
      toast.error("Country must be selected.");
      return;
    } else if(city == "") {
      toast.error("City must be selected.");
      return;
    }

    try {
      const body = {
        "Email": state["Email"],
        "Password": state["Password"],
        "Full Name": data.get("Full Name"),
        "Date of Birth": dateOfBirth,
        "Address": data.get("Address"),
        "Country": country,
        "City": city,
      };

      navToCreateAccount2(body);
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
                Building
              </p>
              <p
                style={{
                  fontSize: "32px"
                }}
              >
                Profile
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
              labelText="Full Name"
              inputName="Full Name"
              inputPlaceholder="Full Name"
              divStyle={{
                marginBottom: "6%"
              }}
            />
            <CustomDatePicker
              disableFuture
              labelText="Date of Birth"
              value={dateOfBirth}
              onChange={setDateOfBirth}
              divStyle={{
                marginBottom: "6%"
              }}
            />
            <CustomInput
              labelText="Address"
              inputName="Address"
              inputPlaceholder="Address"
              divStyle={{
                marginBottom: "6%"
              }}
            />
            <div className="create_account_screen_row2_row1">
              <CustomDropDown
                labelText="Country"
                selectID="country"
                selectName="Country"
                selectNullValue="Country"
                selectValue={country}
                onChange={e => setCountry(e.target.value)}
                menuItems={[
                  <MenuItem value={"country_1"}>Country1</MenuItem>,
                  <MenuItem value={"country_2"}>Country2</MenuItem>
                ]}
                inputName="Country"
                divStyle={{
                  display: "flex",
                  width: "48%",
                  marginBottom: "6%"
                }}
                selectSX={{
                  borderColor: "#CC8E9C",
                  borderStyle: "solid",
                  borderWidth: "1.5px",
                  borderRadius: "10px"
                }}
              />
              <CustomDropDown
                labelText="City"
                selectID="city"
                selectName="City"
                selectNullValue="City"
                selectValue={city}
                onChange={e => setCity(e.target.value)}
                menuItems={[
                  <MenuItem value={"city_1"}>City1</MenuItem>,
                  <MenuItem value={"city_2"}>City2</MenuItem>
                ]}
                inputName="City"
                divStyle={{
                  display: "flex",
                  width: "48%",
                  marginBottom: "6%",
                }}
                selectSX={{
                  borderColor: "#CC8E9C",
                  borderStyle: "solid",
                  borderWidth: "1.5px",
                  borderRadius: "10px"
                }}
              />
            </div>
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

export default TailorCreateAccount1Screen;