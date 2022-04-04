import React, { useState, useEffect } from "react";
import { Country, City }  from 'country-state-city';

import AppLogoSVG from "../../assets/AppLogo.svg";
import DesignElaborationSVG from "../../assets/DesignElaboration.svg";

import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import CustomDatePicker from "../../components/CustomDatePicker";
import CustomDropDown from "../../components/CustomDropDown";
import MenuItem from "@mui/material/MenuItem";

import { handleLogin } from "../../utils/Auth";
import Api from "../../api/index";

import { useNavigate, useLocation} from "react-router-dom";

import { toast } from "react-toastify";

import * as FormValidations from "../../utils/Validations";

function ClientCreateAccountScreen(){

  const navigate = useNavigate();
  const { state } = useLocation();

  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);

  const [isProcessing, setIsProcessing] = useState(false);
  const [dateOfBirth, setDateOfBirth] = useState(new Date("January 01, 1999"));
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");

  useEffect(() => {
    const _countries = Country.getAllCountries();
    setCountries(_countries);
  }, [])

  useEffect(() => {
    if(country){
      setCity("");

      const countryObj = countries.find(_ => _.name == country);
      const _cities = City.getCitiesOfCountry(countryObj.isoCode);
      setCities(_cities);
    }
  }, [country])

  useEffect(() => {
    if(
      !state?.["Email"] ||
      !state?.["Password"]
    ){
      navigate("/login");
    }
  }, [])

  const navToHome = () => {
    navigate("/home");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isProcessing) {
      return;
    }
    
    const data = new FormData(event.currentTarget);

    const isValidated = FormValidations.clientCreateAccount(data);

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

    let response;

    try {
      setIsProcessing(true);

      const body = {
        "email": state["Email"],
        "password": state["Password"],
        "name": data.get("Full Name"),
        "dob": dateOfBirth,
        "address": data.get("Address"),
        "country": country,
        "city": city,
      };

      response = await Api("post", "/clients", body);

      if (response?.data?.success) {
        toast.success("Registered successfully!");
        handleLogin(response.data.token, response.data.user);
        navToHome();
      }
    } catch (e) {
      console.trace(e);
    }

    setIsProcessing(false);
    
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
                menuItems={
                  countries.map(
                    _ => <MenuItem value={_.name}>{_.name}</MenuItem>
                  )
                }
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
                menuItems={
                  cities.map(
                    _ => <MenuItem value={_.name}>{_.name}</MenuItem>
                  )
                }
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