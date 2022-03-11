import React, { useState } from "react";

import AppLogoSVG from "../../assets/AppLogo.svg";
import DesignElaborationSVG from "../../assets/DesignElaboration.svg";

import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import CustomDatePicker from "../../components/CustomDatePicker";
import CustomDropDown from "../../components/CustomDropDown";

import MenuItem from "@mui/material/MenuItem";

import { useNavigate, useLocation} from "react-router-dom";

function ClientCreateAccountScreen(){

  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");

  const navigate = useNavigate();
  const { state } = useLocation();

  const navToHome = () => {
    navigate("/home");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const data = new FormData(event.currentTarget);

    try {
      const body = {
        ...state,
        "full_name": data.get("Full Name"),
        "data_of_birth": dateOfBirth,
        "address": data.get("Address"),
        "country": country,
        "city": city,
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
                  <MenuItem value={"USA"}>USA</MenuItem>,
                  <MenuItem value={"Pakistan"}>Pakistan</MenuItem>
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
                  <MenuItem value={"USA"}>New York</MenuItem>,
                  <MenuItem value={"Pakistan"}>Lahore</MenuItem>
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

export default ClientCreateAccountScreen;