import React, { useState, useEffect, useRef } from "react";

import axios from "axios";

import AutoComplete from "../components/AutoComplete";

import Modal from './Modal/ModalComp'

import CustomDropDown from "./CustomDropDown";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import CustomDatePicker from "./CustomDatePicker";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import DottedSVG from "../assets/dottedblack.svg";
import { grey } from "@mui/material/colors";
import { useTranslation } from "react-i18next";

import { materialFabrics, colors } from "../utils/Constants";
import UploadSVG from "../assets/upload.svg";

import { Store } from "../StoreContext";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function BasicSection({
  state,
  profile,
  setState,
  onClick,
  disabled,
  disables,
  image,
  handleImageSelect,
}) {
  const { t } = useTranslation();

  const _setState = (key, value) => {
    console.log(key, value);
    const obj = {};
    obj[key] = value;
    setState({
      ...state,
      ...obj,
    });
  };

  const [anchorElMeasurements, setAnchorElMeasurements] = React.useState(null);
  const openMeasurements = Boolean(anchorElMeasurements);
  const handleClickMeasurements = (event) => {
    setAnchorElMeasurements(event.currentTarget);
  };
  const handleCloseMeasurements = () => {
    setAnchorElMeasurements(null);
  };

  const selectMeasurementsType = (_) => {
    setState({
      ...state,
      measurements: {
        type: _,
        value: "",
      },
    });
    handleCloseMeasurements();
  };
  const store = Store();
  return (
    <>
      <div className="pa_profile_section_container">
        <div
          className="pa_profile_section_input_container"
          style={{
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
          }}
        >
          <div className="pa_profile_section_input_label">
            <p className="pa_profile_section_input_text">{t("Gender")}</p>
          </div>
          <div className="pa_profile_section_input_input">
            <CustomDropDown
              disabled={disabled || disables?.includes("gender")}
              labelStyle={{
                display: "none",
              }}
              selectID="gender"
              selectName="gender"
              selectNullValue={t("Select gender for your creation")}
              selectValue={state?.gender}
              onChange={(e) => _setState("gender", e.target.value)}
              menuItems={[
                <MenuItem value={"male"}>{t("Male")}</MenuItem>,
                <MenuItem value={"female"}>{t("Female")}</MenuItem>,
              ]}
              selectSX={{
                fontSize: "12px",
              }}
            />
          </div>
        </div>
        <div className="pa_profile_section_input_container">
          <div className="pa_profile_section_input_label">
            <p className="pa_profile_section_input_text">{t("Category")}</p>
          </div>
          <div className="pa_profile_section_input_input">
            <CustomDropDown
              disabled={disabled || disables?.includes("category")}
              labelStyle={{
                display: "none",
              }}
              selectID="category"
              selectName="category"
              selectNullValue={t("Select one category for your ad")}
              selectValue={t(state.category)}
              onChange={(e) => _setState("category", e.target.value)}
              menuItems={[
                <MenuItem value={"WOMEN"}>{t("WOMEN")}</MenuItem>,
                <MenuItem value={"MAN"}>{t("MAN")}</MenuItem>,
                <MenuItem value={"CHILD"}>{t("CHILD")}</MenuItem>,
                <MenuItem value={"Other"}>{t("Other")}</MenuItem>,
              ]}
            />
          </div>
        </div>
        <div
          className="pa_profile_section_input_container"
          style={{
            borderBottomLeftRadius: "20px",
            borderBottomRightRadius: "20px",
            marginBottom: "2%",
          }}
        >
          <div className="pa_profile_section_input_label">
            <p className="pa_profile_section_input_text">{t("Name")}</p>
          </div>
          <div className="pa_profile_section_input_input">
            <CustomInput
              disabled={disabled || disables?.includes("name")}
              labelStyle={{
                display: "none",
              }}
              inputStyle={{
                border: "none",
                fontSize: "12px",
              }}
              inputPlaceholder={t("Name of your creation")}
              inputDefaultValue={state.name}
              onChange={(e) => _setState("name", e.target.value)}
            />
          </div>
        </div>
        <div
          className="pa_profile_section_input_container"
          style={{
            borderRadius: "20px",
            marginBottom: "1%",
          }}
        >
          <div className="pa_profile_section_input_label">
            <p className="pa_profile_section_input_text">{t("Cut")}</p>
          </div>
          <div className="pa_profile_section_input_input">
            <CustomDropDown
              disabled={disabled}
              labelStyle={{
                display: "none",
              }}
              selectID="cut"
              selectName="cut"
              selectNullValue={t("Select size")}
              selectValue={state.cut}
              onChange={(e) => _setState("cut", e.target.value)}
              menuItems={[
                <MenuItem value={"34"}>34</MenuItem>,
                <MenuItem value={"36"}>36</MenuItem>,
                <MenuItem value={"38"}>38</MenuItem>,
                <MenuItem value={"40"}>40</MenuItem>,
                <MenuItem value={"42"}>42</MenuItem>,
                <MenuItem value={"44"}>44</MenuItem>,
                <MenuItem value={"46"}>46</MenuItem>,
                <MenuItem value={"48"}>48</MenuItem>,
                <MenuItem value={"50"}>50</MenuItem>,
                <MenuItem value={"52"}>52</MenuItem>,
                <MenuItem value={"54"}>54</MenuItem>,
                <MenuItem value={"56"}>56</MenuItem>,
                <MenuItem value={"58"}>58</MenuItem>,
                <MenuItem value={"60"}>60</MenuItem>,
              ]}
            />
          </div>
        </div>
        <div></div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "80%",
            marginLeft: "4%",
          }}
        >
          <div>
            <span className="measurements"> {t("Standard size")}</span>{" "}
          </div>
          <div className="size-measurement-cont">
            {[
              {
                size: "small",
                measurements: "28,30,32",
              },
              {
                size: "medium",
                measurements: "36,38,40",
              },
              {
                size: "large",
                measurements: "42,44,46",
              },
            ].map((_) => (
              <div>
                <span className="size">{t(_.size)} </span>{" "}
                <span className="measurements">{_.measurements}</span>{" "}
              </div>
            ))}
          </div>
        </div>
        <Modal _setState ={_setState }  RenderComp="tapemeasurements" state={state} open={state?.openModal}/>
        <div
        onClick={()=>state?.measurements?.type=="tape" && store.userRole=="tailor"? (_setState("openModal",true)):""}
          className="pa_profile_section_input_container"
          style={{
            borderRadius: "20px",
            marginTop: "2%",
            marginBottom: "1%",
          }}
        >
          <div   className="pa_profile_section_input_label">
            <p className="pa_profile_section_input_text">{t("Measurements")}</p>
          </div>
          <div  className="pa_profile_section_input_input">
           
            <CustomInput
              disabled={
                disabled ||
                state.measurements.type == "tape" ||
                state.measurements.type == "call"
              }
              labelStyle={{
                display: "none",
              }}
              inputStyle={{
                border: "none",
                fontSize: "12px",
              }}
              inputPlaceholder={
                state.measurements.type == "static"
                  ? t("Write Measurement here")
                  : state.measurements.type == "tape"
                  ? "Measured by tape"
                  : state.measurements.type == "call"
                  ? "Discussed on call"
                  : ""
              }
              inputDefaultValue={state.measurements.value}
              onChange={(e) => {
                setState({
                  ...state,
                  measurements: {
                    type: "static",
                    value: e.target.value,
                  },
                });
              }}
            />{" "}
            {/* TODO: This should be cleared when other types selected. */}
            <img
              className="dots-measurement"
              src={DottedSVG}
              onClick={!disabled ? handleClickMeasurements : null}
            />
            <Menu
              id="basic-menu"
              anchorEl={anchorElMeasurements}
              open={openMeasurements}
              onClose={handleCloseMeasurements}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={(e) => selectMeasurementsType("static")}>
                Static
              </MenuItem>
              <MenuItem onClick={(e) => selectMeasurementsType("tape")}>
                Get a Tape
              </MenuItem>
              <MenuItem onClick={(e) => selectMeasurementsType("call")}>
                Book Call
              </MenuItem>
            </Menu>
          </div>
        </div>
        <p className="pa_profile_section_input_instructions_text">
          {t("*Bring a tape measure")}
        </p>
        <p className="pa_profile_section_input_instructions_text">
          {t(
            "*Measure either the circumference or the length depending on the part of the body."
          )}
        </p>
        <div
          className="pa_profile_section_input_container"
          style={{
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
            marginTop: "2%",
            backgroundColor: state.color
              ? colors.filter((_) => _.name == state.color)[0].value
              : null,
          }}
        >
          <div className="pa_profile_section_input_label">
            <p
              style={{ color: state.color ? "#ffffff" : "" }}
              className="pa_profile_section_input_text"
            >
              {t("Colour")}
            </p>
          </div>
          <div className="pa_profile_section_input_input">
            <CustomDropDown
              disabled={disabled}
              labelStyle={{
                display: "none",
              }}
              selectID="colour"
              selectName="colour"
              selectNullValue={t("Select one colour for your Creations")}
              selectValue={state.color}
              onChange={(e) => _setState("color", e.target.value)}
              menuItems={colors.map((_) => (
                <MenuItem value={_.name}> {_.name}</MenuItem>
              ))}
              valuecolor={state.color ? "on" : "off"}
            />
          </div>
        </div>
        <div
          className="pa_profile_section_input_container"
          style={{
            borderBottomLeftRadius: "20px",
            borderBottomRightRadius: "20px",
          }}
        >
          <div className="pa_profile_section_input_label">
            <p className="pa_profile_section_input_text">
              {t("Material Fabrics")}
            </p>
          </div>
          <div className="pa_profile_section_input_input">
            <CustomDropDown
              disabled={disabled}
              labelStyle={{
                display: "none",
              }}
              selectID="materialFabrics"
              selectName="materialFabrics"
              selectNullValue={t("Select Fabric Style")}
              selectValue={t(state.fabric)}
              onChange={(e) => _setState("fabric", e.target.value)}
              menuItems={materialFabrics.map((_) => (
                <MenuItem value={_.title}>{t(_.title)}</MenuItem>
              ))}
            />
          </div>
        </div>
        <div
          className="pa_profile_section_input_container"
          style={{
            borderRadius: "20px",
            marginTop: "2%",
          }}
        >
          <div className="pa_profile_section_input_label">
            <p className="pa_profile_section_input_text">{t("Attachments")}</p>
          </div>
          <div className="pa_profile_section_input_input">
            <label className="upload-pic-label" htmlFor="filePicker">
              <input
                disabled={disabled}
                // multiple
                type="file"
                accept="image/*"
                hidden
                id="filePicker"
                name="file"
                onChange={handleImageSelect}
              />
              <div className="upload-img-text-cont">
                <span className="upload-img-text">
                  {image?.name ?? "Upload Drawing, Photo, Document, etc"}
                </span>
                <img src={UploadSVG} />
              </div>
            </label>
          </div>
        </div>
        <div className="checkbox-container">
          <Checkbox
            {...label}
            disabled={disabled}
            checked={state.includes_alteration_services}
            sx={{
              color: grey[900],
              "&.Mui-checked": {
                color: grey[900],
              },
            }}
            onChange={(e) =>
              _setState("includes_alteration_services", e.target.checked)
            }
          />
          <label>
            {" "}
            <span className="duw-text">{t("Do you Want")}</span>{" "}
            <span className="alteration-txt">{t("ALTREATION SERVICE ?")} </span>
          </label>
        </div>
        {!onClick ? (
          <></>
        ) : (
          <CustomButton
            text={t("Next")}
            style={{
              marginBottom: "6%",
              padding: "1.7% 5%",
              boxShadow: "none",
            }}
            onClick={onClick}
          />
        )}
      </div>
    </>
  );
}

function DeliverySection({ state, setState, onClick, disabled }) {
  const { t } = useTranslation();
  const [addresses, setAddresses] = useState([]);
  const _setState = (key, value) => {
    const obj = {};
    obj[key] = value;
    setState({
      ...state,
      ...obj,
    });
  };
  const _setAddress = (_) => {
    _setState("address", { ...state.address, ..._ });
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
    <>
      <div className="pa_profile_section_container">
        <div
          className="pa_profile_section_input_container"
          style={{
            borderRadius: "20px",
            marginBottom: "2%",
          }}
        >
          <div className="pa_profile_section_input_label">
            <p className="pa_profile_section_input_text">
              {t("Delivery Address")}
            </p>
          </div>
          <div className="pa_profile_section_input_input">
            <div style={{ width: "100%" }}>
              <AutoComplete
                name="Address"
                required={true}
                label={"Address"}
                value={state?.address?.label}
                options={addresses}
                placeholder={"Address"}
                componenet="parseaddress"
                onChangeAddress={(e) => {
                  handleInputAddress(e);
                }}
                onAddressSelect={(e) => handleSelectAddress(e)}
              />
            </div>
          </div>
        </div>
        {/* <div className="pa_profile_section_input_container">
          <div className="pa_profile_section_input_label">
            <p className="pa_profile_section_input_text">Zip code</p>
          </div>
          <div className="pa_profile_section_input_input">
            <CustomInput
              disabled
              labelStyle={{
                display: "none",
              }}
              inputStyle={{
                border: "none",
                fontSize: "12px",
              }}
              inputPlaceholder="Zip code"
              Inputvalue={state?.address?.zip}
            />
          </div>
        </div> */}
        {/* <div
          className="pa_profile_section_input_container"
          style={{
            borderBottomLeftRadius: "20px",
            borderBottomRightRadius: "20px",
            marginBottom: "2%",
          }}
        >
          <div className="pa_profile_section_input_label">
            <p className="pa_profile_section_input_text">{t("City")}</p>
          </div>
          <div className="pa_profile_section_input_input">
            <CustomInput
              disabled
              labelStyle={{
                display: "none",
              }}
              inputStyle={{
                border: "none",
                fontSize: "12px",
              }}
              inputPlaceholder="City"
              Inputvalue={state?.address?.city}
            />
          </div>
        </div> */}
        <div
          className="pa_profile_section_input_container"
          style={{
            borderRadius: "20px",
            marginBottom: "1%",
          }}
        >
          <div className="pa_profile_section_input_label">
            <p className="pa_profile_section_input_text">
              {t("Delivery Note")}
            </p>
          </div>
          <div className="pa_profile_section_input_input">
            <CustomInput
              disabled={disabled}
              labelStyle={{
                display: "none",
              }}
              inputStyle={{
                border: "none",
                fontSize: "12px",
              }}
              inputPlaceholder={t(
                "Write any note regarding Delivery (Optional)"
              )}
              inputDefaultValue={state?.note}
              onChange={(e) => _setState("note", e.target.value)}
            />
          </div>
        </div>
        <div
          className="pa_profile_section_input_container"
          style={{
            borderRadius: "20px",
            marginBottom: "1%",
          }}
        >
          <div className="pa_profile_section_input_label">
            <p className="pa_profile_section_input_text">
              {t("Delivery Type")}
            </p>
          </div>
          <div className="pa_profile_section_input_input">
            <CustomDropDown
              disabled={disabled}
              labelStyle={{
                display: "none",
              }}
              selectID="delivery_type"
              selectName="delivery_type"
              selectNullValue="Urgent, Normal"
              selectValue={state.type}
              onChange={(e) => _setState("type", e.target.value)}
              menuItems={[
                <MenuItem value={"urgent"}>Urgent</MenuItem>,
                <MenuItem value={"normal"}>Normal</MenuItem>,
              ]}
            />
          </div>
        </div>
        <p className="pa_profile_section_input_instructions_text">
          {t("*Select Delivery Type according to your Demands")}
        </p>
        <div
          className="pa_profile_section_input_container"
          style={{
            borderRadius: "20px",
            marginTop: "2%",
            marginBottom: "1%",
          }}
        >
          <div className="pa_profile_section_input_label">
            <p className="pa_profile_section_input_text">
              {t("Delivery Date")}
            </p>
          </div>
          <div className="pa_profile_section_input_input">
            <CustomDatePicker
              disablePast
              disabled={disabled}
              labelStyle={{
                display: "none",
              }}
              value={state?.date}
              onChange={(e) => _setState("date", e)}
            />
          </div>
        </div>
        <p className="pa_profile_section_input_instructions_text">
          {t("*Select Date for delivery")}
        </p>
        {!onClick ? (
          <></>
        ) : (
          <CustomButton
            text={t("Next")}
            style={{
              marginTop: "3%",
              marginBottom: "10%",
              padding: "1.5% 5%",
              boxShadow: "none",
            }}
            onClick={onClick}
          />
        )}
      </div>
    </>
  );
}

function NotesSection({ state, setState, buttonText, onClick, disabled }) {
  const { t } = useTranslation();

  const _setState = (key, value) => {
    const obj = {};
    obj[key] = value;
    setState({
      ...state,
      ...obj,
    });
  };

  return (
    <>
      <div className="pa_profile_section_container">
        <div
          className="pa_profile_section_input_container"
          style={{
            borderRadius: "20px",
            marginBottom: "2%",
          }}
        >
          <div className="pa_profile_section_input_label">
            <p className="pa_profile_section_input_text">
              {t("Choose Method")}
            </p>
          </div>
          <div className="pa_profile_section_input_input">
            <CustomDropDown
              disabled={disabled}
              labelStyle={{
                display: "none",
              }}
              selectID="payment_type"
              selectName="payment_type"
              selectNullValue={t("Fixed price")}
              selectValue={state.type}
              onChange={(e) => _setState("type", t(e.target.value))}
              menuItems={[
                <MenuItem value={"fixed"}>{t("Fixed price")}</MenuItem>,
                <MenuItem value={"hourly"}>{t("Hourly Rate")}</MenuItem>,
              ]}
            />
          </div>
        </div>
        <div
          className="pa_payment_section_input_container"
          style={{
            borderRadius: "20px",
            marginBottom: "2%",
          }}
        >
          <div className="pa_payment_section_input_label">
            <p className="pa_payment_section_input_text">
              {t("Set Minimum Price")}
            </p>
          </div>
          <div className="pa_payment_section_input_input_container">
            <input
              disabled={disabled}
              className="pa_payment_section_input_input"
              type="number"
              defaultValue={state.min_price}
              onChange={(e) => _setState("min_price", e.target.value)}
              placeholder="€0"
            />
          </div>
        </div>
        <div
          className="pa_payment_section_input_container"
          style={{
            borderRadius: "20px",
            marginBottom: "2%",
          }}
        >
          <div className="pa_payment_section_input_label">
            <p className="pa_payment_section_input_text">
              {t("Set Maximum Price")}
            </p>
          </div>
          <div className="pa_payment_section_input_input_container">
            <input
              disabled={disabled}
              className="pa_payment_section_input_input"
              type="number"
              defaultValue={state.max_price}
              onChange={(e) => _setState("max_price", e.target.value)}
              placeholder="€0"
            />
          </div>
        </div>
        <div
          className="pa_profile_section_input_container"
          style={{
            borderRadius: "20px",
            marginBottom: "1%",
          }}
        >
          <div className="pa_profile_section_input_label">
            <p className="pa_profile_section_input_text">{t("Payment Note")}</p>
          </div>
          <div className="pa_profile_section_input_input">
            <CustomInput
              disabled={disabled}
              labelStyle={{
                display: "none",
              }}
              inputStyle={{
                border: "none",
                fontSize: "12px",
              }}
              inputPlaceholder={t(
                "Write any note regarding Payment (Optional)"
              )}
              inputDefaultValue={state.note}
              onChange={(e) => _setState("note", e.target.value)}
            />
          </div>
        </div>
        {!onClick ? (
          <></>
        ) : (
          <div className="pa_payment_section_consent_container">
            <Checkbox
              style={{
                transform: "scale(0.8)",
                color: "#000000",
                paddingRight: "2%",
              }}
              defaultChecked
            />
            <p
              className="terms-text"
              style={{
                paddingRight: "0.6%",
              }}
            >
              {t("I agree to the design Confection Ethiques")}
            </p>
            <p
              className="terms-text"
              style={{
                paddingRight: "0.6%",
                color: "#CC8E9C",
              }}
            >
              {t("Terms of Services")}
            </p>
            <p
              className="terms-text"
              style={{
                paddingRight: "0.6%",
              }}
            >
              {t("and")}
            </p>
            <p
              className="terms-text"
              style={{
                color: "#CC8E9C",
              }}
            >
              {t("Privacy Policy")}
            </p>
          </div>
        )}
        {!onClick ? (
          <></>
        ) : (
          <CustomButton
            text={buttonText ?? t("Publish Ad")}
            onClick={onClick}
            style={{
              margin: "7%",
              padding: "1.5% 5%",
              boxShadow: "none",
            }}
          />
        )}
      </div>
    </>
  );
}

export { BasicSection, DeliverySection, NotesSection };
