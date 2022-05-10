import React, { useState, useEffect } from "react";

import AppLogoSVG from "../../assets/AppLogo.svg";
import DesignElaborationSVG from "../../assets/DesignElaboration.svg";

import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import CustomDatePicker from "../../components/CustomDatePicker";
import AutoComplete from "../../components/AutoComplete";

import Checkbox from "@mui/material/Checkbox";
import { grey } from "@mui/material/colors";

import { handleLogin } from "../../utils/Auth";
import Api from "../../api/index";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

import { toast } from "react-toastify";

import * as FormValidations from "../../utils/Validations";

import { Store, UpdateStore } from "../../StoreContext";

function TailorCreateAccountScreen() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [Open, setOpen] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false);
  const [dateOfBirth, setDateOfBirth] = useState(new Date("January 01, 1999"));
  const [hasPhysicalStore, setHasPhysicalStore] = useState(false);
  const [addresses, setAddresses] = useState([]);
  const [address, setAddress] = useState({
    zip: "",
    label: "",
    city: "",
    lat: "",
    lng: "",
  });
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

    if (!address?.label) {
      toast.error("Address can't be empty");
      return;
    }

    let response;

    try {
      const body = {
        email: state["Email"],
        password: state["Password"],
        shop_name: data.get("Name of your company"),
        name: data.get("Name"),
        dob: dateOfBirth,
        address: address.label,
        zip_code: address.zip,
        city: address.city,
        phone: data.get("Phone No"),
      };
      setIsProcessing(true);
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
        response.data.features.map((item) => {
          addressToSet.push({
            label: item.properties.label,
            city: item.properties.city,
            PostalCode: item.properties.postcode,
            lat: item.geometry.coordinates[1],
            lng: item.geometry.coordinates[0],
          });
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
                Open={Open} 
                setOpen={setOpen}
                labelText="Date of Birth"
                value={dateOfBirth}
                onChange={setDateOfBirth}
                divStyle={{
                  marginBottom: "6%",
                }}
                dobinput="dob"
              />
              <div style={{ width: "100%" }}>
                <label className="custom_input_label">Address</label>
                <AutoComplete
                  name="Address"
                  required={true}
                  label={"Address"}
                  value={address.label}
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
              <CustomInput
                labelText="Phone No"
                inputName="Phone No"
                inputPlaceholder="Phone No"
                divStyle={{
                  marginBottom: "2%",
                }}
                minmax={true}
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
