import React, { useState, useEffect } from "react";

import AppLogoSVG from "../../assets/AppLogo.svg";
import DesignElaborationSVG from "../../assets/DesignElaboration.svg";

import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import CustomDatePicker from "../../components/CustomDatePicker";
import CustomDropDown from "../../components/CustomDropDown";
import AutoComplete from "../../components/AutoComplete";
import MenuItem from "@mui/material/MenuItem";

import { handleLogin } from "../../utils/Auth";
import Api from "../../api/index";

import axios from "axios";

import { useNavigate, useLocation } from "react-router-dom";

import { toast } from "react-toastify";

import * as FormValidations from "../../utils/Validations";

import { Store, UpdateStore } from "../../StoreContext";

import { useTranslation } from "react-i18next";

function ClientCreateAccountScreen() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const [isProcessing, setIsProcessing] = useState(false);
  const [dateOfBirth, setDateOfBirth] = useState(new Date("January 01, 1999"));
  const [gender, setGender] = useState("");
  const [addresses, setAddresses] = useState([]);
  const [address, setAddress] = useState({
    zip: "",
    label: "",
    city: "",
    lat: "",
    lng: "",
  });
  const { t } = useTranslation();
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

    const isValidated = FormValidations.clientCreateAccount(data);

    if (!isValidated) {
      return;
    }

    if (dateOfBirth == null) {
      toast.error("Date of Birth must be selected.");
      return;
    }

    if (!address?.label) {
      toast.error("Address can't be empty");
      return;
    }

    let response;

    try {
      setIsProcessing(true);

      const body = {
        email: state["Email"],
        password: state["Password"],
        name: data.get("Full Name"),
        phone: data.get("Phone Number"),
        dob: dateOfBirth,
        address: address.label,
        zip_code: address.zip,
        city: address.city,
        gender: gender,
      };
      response = await Api("post", "/clients", body);

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
  const _setAddress = (_) => {
    setAddress({ ...address, ..._ });
  };
  const handleSelectAddress = (e) => {
    if (e) {
      _setAddress({
        label: e.label,
        zip: e.PostalCode,
        city: e.city,
        lat: e.lat,
        lng: e.lng,
      });
    } else {
      _setAddress({
        label: "",
        zip: "",
        city: "",
        lat: "",
        lng: "",
      });
    }
  };
  const handleInputAddress = async (e) => {
    if (e.target.value === "") {
      _setAddress({
        label: "",
        zip: "",
        city: "",
        lat: "",
        lng: "",
      });
      setAddresses([]);
    } else {
      _setAddress({
        label: e.target.value,
      });
      const config = {
        method: "get",
        url: `https://api-adresse.data.gouv.fr/search/?q=${e.target.value}&type=housenumber&autocomplete=1`,
      };
      axios.defaults.headers = null;
      try {
        const response = await axios(config);
        const addressToSet = [];
        response.data.features
          .map((item) => {
            addressToSet.push({
              label: item.properties.label,
              city: item.properties.city,
              PostalCode: item.properties.postcode,
              lat: item.geometry.coordinates[1],
              lng: item.geometry.coordinates[0],
            });
            setAddresses(addressToSet);
          })
          .catch(function (error) {
            console.log(error);
          });
        setAddresses(addressToSet);
      } catch (e) {
        console.trace(e);
      }
    }
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
                  Building
                </p>
                <p
                  style={{
                    fontSize: "32px",
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
                  marginBottom: "6%",
                }}
              />
              <CustomInput
                labelText="Phone Number"
                inputName="Phone Number"
                inputPlaceholder="Phone Number"
                divStyle={{
                  marginBottom: "6%",
                }}
                minmax={true}
              />
              <CustomDatePicker
                disableFuture
                labelText="Date of Birth"
                value={dateOfBirth}
                onChange={setDateOfBirth}
                divStyle={{
                  marginBottom: "6%",
                }}
                dobinput="dob"
              />
              <div style={{ width: "100%", border: "none" }}>
                <div>
                  <p className="custom_input_label">{t("Category")}</p>
                </div>
                <CustomDropDown
                  labelStyle={{
                    display: "none",
                  }}
                  selectID="gender"
                  selectName="gender"
                  selectNullValue={t("Select gender for your creation")}
                  selectValue={gender}
                  onChange={(e) => setGender(e.target.value)}
                  menuItems={[
                    <MenuItem value={"male"}>{t("Male")}</MenuItem>,
                    <MenuItem value={"female"}>{t("Female")}</MenuItem>,
                  ]}
                  selectSX={{
                    fontSize: "12px",
                    border: "2px solid #CC8E9C",
                    padding: "2%",
                    borderRadius: "10px",
                    marginBottom: "3%",
                  }}
                />
              </div>
              <div style={{ width: "100%" }}>
                <label className="custom_input_label">Address</label>
                <AutoComplete
                  name="Address"
                  required={true}
                  label={"Address"}
                  value={address?.label}
                  options={addresses}
                  placeholder={"Address"}
                  onChangeAddress={(e) => {
                    handleInputAddress(e);
                  }}
                  onAddressSelect={(e) => handleSelectAddress(e)}
                />
              </div>
              {/* <div className="create_account_screen_row2_row1">
                <CustomInput
                  disabled
                  labelText="Zip Code"
                  inputName="Zip Code"
                  inputPlaceholder="Zip Code"
                  divStyle={{
                    display: "flex",
                    width: "48%",
                    marginBottom: "6%",
                  }}
                  Inputvalue={address?.zip}
                />
                <CustomInput
                  disabled
                  labelText="City"
                  inputName="City"
                  inputPlaceholder="City"
                  divStyle={{
                    display: "flex",
                    width: "48%",
                    marginBottom: "6%",
                  }}
                  Inputvalue={address?.city}
                />
              </div> */}
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

export default ClientCreateAccountScreen;
