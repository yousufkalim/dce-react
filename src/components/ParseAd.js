import React, { useState } from "react";

import axios from "axios";

import AutoComplete from "../components/AutoComplete";
import { makeStyles } from "@material-ui/core/styles";

import CustomDropDown from "./CustomDropDown";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import CustomDatePicker from "./CustomDatePicker";
import Attachment from "./Attachment";
import ViewImageModal from "./ViewImageModal";
import AlertBox from "./AlertBox";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import Tooltip from "@mui/material/Tooltip";
import { Modal } from "@mui/material";

import { ChromePicker } from "react-color";
import { SketchPicker, GithubPicker } from "react-color";

import InfoIcon from "@mui/icons-material/Info";

import DottedSVG from "../assets/dottedblack.svg";
import MeasurementDetailsSVG from "../assets/MeasurementDetails.svg";
import MeasurementChartSVG from "../assets/MeasurementChart.svg";

import { useTranslation } from "react-i18next";

import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import * as ParseMeasurement from "./ParseMeasurement";
import * as FormValidations from "../utils/Validations";

import { grey } from "@mui/material/colors";

import { materialFabrics, adNames, colors } from "../utils/Constants";
import UploadSVG from "../assets/upload.svg";

import { Store } from "../StoreContext";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function BasicSection({
  state,
  setState,
  onClick,
  disabled,
  disables,
  images,
  setImages,
  handleImagesSelect,
  handleImageDeselect,
}) {
  const { t } = useTranslation();

  const _setState = (key, value) => {
    const obj = {};
    obj[key] = value;
    setState({
      ...state,
      ...obj,
    });
  };

  const [anchorElMeasurements, setAnchorElMeasurements] = useState(null);
  const openMeasurements = Boolean(anchorElMeasurements);
  const handleClickMeasurements = (event) => {
    setAnchorElMeasurements(event.currentTarget);
  };
  const handleCloseMeasurements = () => {
    setAnchorElMeasurements(null);
  };

  const [isViewImageModal, setIsViewImageModal] = useState(false);
  const handleIsViewImageModalClose = () => {
    setIsViewImageModal(false);
  };
  const handleIsViewImageModalOpen = () => {
    setIsViewImageModal(true);
  };

  const [isTapeMeasurementModal, setIsTapeMeasurementModal] = useState(false);
  const handleIsTapeMeasurementModalClose = () => {
    setIsTapeMeasurementModal(false);
  };
  const handleIsTapeMeasurementModalOpen = () => {
    setIsTapeMeasurementModal(true);
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

  const useStyles = makeStyles((theme) => ({
    inputRoot: {
      color: "#ffffff",
      "& .MuiOutlinedInput-input.Mui-disabled": {
        "-webkit-text-fill-color": "#ffffff",
      },
    },
  }));
  const classes = useStyles();

  const [openColorPicker, setOpenColorPicker] = useState(false);
  const [viewImage, setViewImage] = useState(null);
  const [open, setOpen] = useState(false);
  const [imageToDeleteConfirmation, setImageToDeleteConfirmation] = useState();
  /////test code
  const handleChangeComplete = (color) => {
    // console.log("on change complete");
    // console.log(color.hex,"h");
    _setState("color", color.hex);
    // this.setState({ background: color.hex });
  };

  const handleChange = (color, event) => {
    console.log("on change");
    console.log(color);
  };
  const handleCloseAlert = (confirmation) => {
    if (confirmation) {
      const _images = [...images];
      const index = _images.map((_) => _.name).indexOf(imageToDeleteConfirmation.name);
      if (index > -1) {
        _images.splice(index, 1);
      }
      setImages([..._images]);
    }
    setOpen(false);
  };
  /////
  return (
    <>
      <div className="pa_profile_section_container">
        <AlertBox open={open} setOpen={setOpen} handleClose={handleCloseAlert} />
        {/* <div
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
              menuItems={[<MenuItem value={"male"}>{t("Male")}</MenuItem>, <MenuItem value={"female"}>{t("Female")}</MenuItem>]}
              selectSX={{
                fontSize: "12px",
              }}
            />
          </div>
        </div> */}
        <div
          style={{
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
          }}
          className="pa_profile_section_input_container"
        >
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
              selectNullValue={t("I select the category to which my con...")}
              selectValue={t(state.category)}
              onChange={(e) => {
                _setState("category", e.target.value);
                let category = e.target.value;
                let name;

                if (category == "women") {
                  name = adNames.women[0];
                } else if (category == "man") {
                  name = adNames.man[0];
                } else if (category == "child") {
                  name = adNames.child[0];
                }

                setState({
                  ...state,
                  category: category,
                  name: name,
                });
              }}
              menuItems={[
                <MenuItem value={"women"}>{t("WOMEN")}</MenuItem>,
                <MenuItem value={"man"}>{t("MAN")}</MenuItem>,
                <MenuItem value={"child"}>{t("CHILD")}</MenuItem>,
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
            <CustomDropDown
              disabled={disabled || disables?.includes("name")}
              labelStyle={{
                display: "none",
              }}
              selectID="name"
              selectName="name"
              selectNullValue={t("I give a name to my confection")}
              selectValue={t(state.name)}
              onChange={(e) => _setState("name", e.target.value)}
              menuItems={
                state.category == "women" ? (
                  adNames.women.map((_) => <MenuItem value={_}>{t(_)}</MenuItem>)
                ) : state.category == "man" ? (
                  adNames.man.map((_) => <MenuItem value={_}>{t(_)}</MenuItem>)
                ) : state.category == "child" ? (
                  adNames.child.map((_) => <MenuItem value={_}>{t(_)}</MenuItem>)
                ) : (
                  <></>
                )
              }
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
            <p className="pa_profile_section_input_text">{t("size")}</p>
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
                <span className="size">{t(_.size)} </span> <span className="measurements">{_.measurements}</span>{" "}
              </div>
            ))}
          </div>
        </div>
        <div
          className="pa_profile_section_input_container"
          style={{
            borderRadius: "20px",
            marginTop: "2%",
            marginBottom: "1%",
          }}
        >
          <div className="pa_profile_section_input_label">
            <p className="pa_profile_section_input_text">{t("My Measurements")}</p>
          </div>
          <Tooltip
            arrow
            title={
              state?.measurements?.value?.length == 0 ? "" : <p style={{ fontSize: "14px" }}>{state?.measurements?.value}</p>
            }
          >
            <div className="pa_profile_section_input_input">
              <CustomInput
                disabled={disabled || state.measurements.type == "tape" || state.measurements.type == "call"}
                labelStyle={{
                  display: "none",
                }}
                inputStyle={{
                  border: "none",
                  fontSize: "12px",
                }}
                inputPlaceholder={
                  state.measurements.type == "static"
                    ? t("I'm taking my measurements")
                    : state.measurements.type == "tape"
                    ? "Measured by tape"
                    : state.measurements.type == "call"
                    ? "Discussed on call"
                    : ""
                }
                inputValue={state?.measurements?.value}
                inputDefaultValue={state?.measurements?.value}
                onChange={(e) => {
                  setState({
                    ...state,
                    measurements: {
                      type: "static",
                      value: e.target.value,
                    },
                  });
                }}
              />
              <img className="dots-measurement" src={DottedSVG} onClick={!disabled ? handleClickMeasurements : null} />
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
                  <p>{t("Static")}</p>
                  <Tooltip
                    arrow
                    title={<p style={{ fontSize: "14px" }}>{t("Measurements are entered in this input box right away.")}</p>}
                  >
                    <InfoIcon sx={{ height: "20px", width: "20px", marginLeft: "5px" }} />
                  </Tooltip>
                </MenuItem>
                <MenuItem
                  onClick={(e) => {
                    handleIsTapeMeasurementModalOpen();
                  }}
                >
                  <p>{t("Get a Tape")}</p>
                  <Tooltip
                    arrow
                    title={
                      <p style={{ fontSize: "14px" }}>
                        {t("Measurements will be entered in a detailed form once the order is accepted.")}
                      </p>
                    }
                  >
                    <InfoIcon sx={{ height: "20px", width: "20px", marginLeft: "5px" }} />
                  </Tooltip>
                </MenuItem>
                <MenuItem onClick={(e) => selectMeasurementsType("call")}>
                  <p>{t("Book Call")}</p>
                  <Tooltip
                    arrow
                    title={
                      <p style={{ fontSize: "14px" }}>
                        {t("A message will be dropped by you to the tailor for the measurements.")}
                      </p>
                    }
                  >
                    <InfoIcon sx={{ height: "20px", width: "20px", marginLeft: "5px" }} />
                  </Tooltip>
                </MenuItem>
              </Menu>
            </div>
          </Tooltip>
        </div>
        <p className="pa_profile_section_input_instructions_text">{t("*I'm getting a tape measure")}</p>
        <p className="pa_profile_section_input_instructions_text">
          {t("*depending on the garment, I measure certain parts of the body in circumference and/or length.")}
        </p>
        <div
          className="pa_profile_section_input_container"
          style={{
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
            marginTop: "2%",
            backgroundColor: state.color ?? null,
          }}
        >
          <div style={{ width: "42%" }} className="pa_profile_section_input_label">
            <p style={{ color: state.color ? "#ffffff" : "" }} className="pa_profile_section_input_text">
              {t("dominant color")}
            </p>
          </div>
          <div
            style={{ width: "100%", height: "30pt" }}
            className="pa_profile_section_input_input"
            onClick={() => setOpenColorPicker(!openColorPicker)}
          >
            {openColorPicker ? (
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translateX(80%)",
                  marginTop: 15,
                }}
              >
                {/* <ChromePicker
                  color={state.color}
                  onChangeComplete={(e) => {
                    _setState("color", e.hex);
                  }}
                /> */}
                <div
                  style={{
                    maxHeight: "200px",
                    overflow: "scroll",
                  }}
                >
                  <GithubPicker
                    width="225px"
                    style={{
                      maxHeight: "30px",
                      overflow: "scroll",
                    }}
                    colors={colors}
                    // color={this.state.background}
                    onChange={handleChange}
                    onChangeComplete={handleChangeComplete}
                  />
                </div>
              </div>
            ) : (
              <></>
            )}
            <p>{state.color}</p>
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
            <p className="pa_profile_section_input_text">{t("Dominant FABRIC")}</p>
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
              selectValue={state.fabric}
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
                multiple
                type="file"
                accept="image/*"
                hidden
                id="filePicker"
                name="file"
                onChange={handleImagesSelect}
              />
              <div className="upload-img-text-cont">
                <span className="upload-img-text">{t("upload an illustration of your creation")}</span>
                <img src={UploadSVG} />
              </div>
            </label>
          </div>
        </div>
        <div className="selected-images-container">
          {images?.map((_) => (
            <Attachment
              image={_}
              view={() => {
                setViewImage(_);
                handleIsViewImageModalOpen();
              }}
              deselect={() => {
                //handleImageDeselect(_)
                setOpen(true);
                setImageToDeleteConfirmation(_);
              }}
            />
          ))}
        </div>
        {/* <div className="checkbox-container">
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
            onChange={(e) => _setState("includes_alteration_services", e.target.checked)}
          />
          <label>
            {" "}
            <span className="duw-text">{t("Do you Want")}</span>{" "}
            <span className="alteration-txt">{t("ALTREATION SERVICE ?")} </span>
          </label>
        </div> */}
        <div className="checkbox-container">
          <Checkbox
            {...label}
            disabled={disabled || disables?.includes("create_catalog_after_completion")}
            checked={state.create_catalog_after_completion}
            sx={{
              color: grey[900],
              "&.Mui-checked": {
                color: grey[900],
              },
            }}
            onChange={(e) => _setState("create_catalog_after_completion", e.target.checked)}
          />
          <label>
            {" "}
            <span className="duw-text">{t("I do desired not that my creation appears on the site")}</span>{" "}
            {/* <span className="alteration-txt">{t("ORDER COMPLETION ?")} </span>{" "} */}
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
        <Modal open={isViewImageModal} onClose={handleIsViewImageModalClose} aria-labelledby="View Image">
          <ViewImageModal src={viewImage} handleClose={handleIsViewImageModalClose} />
        </Modal>
        <Modal open={isTapeMeasurementModal} onClose={handleIsTapeMeasurementModalClose} aria-labelledby="Tape Measurement">
          <TapeMeasurementsModal _setState={_setState} handleClose={handleIsTapeMeasurementModalClose} />
        </Modal>
      </div>
    </>
  );
}

function TapeMeasurementsModal(props) {
  const { t } = useTranslation();
  const steps = ["Circumference", "Length"];

  const [activeStep, setActiveStep] = useState(0);
  const [circumferenceSection, setCircumferenceSection] = useState({
    arm: "",
    chest: "",
    waist: "",
    hip: "",
    thigh: "",
    calf: "",
    ankle: "",
  });
  const [lengthSection, setLengthSection] = useState({
    head_to_floor: "",
    shoulder_to_floor: "",
    waist_to_floor: "",
    arm_length: "",
    leg_length: "",
  });

  const circumferenceSectionCallback = () => {
    const isValidated = FormValidations.parseMeasurementCircumferenceSection(circumferenceSection);
    if (!isValidated) {
      return;
    }
    setActiveStep(1);
  };

  const lengthSectionCallback = async (event) => {
    event.preventDefault();

    const isValidated =
      FormValidations.parseMeasurementCircumferenceSection(circumferenceSection) &&
      FormValidations.parseMeasurementLengthSection(lengthSection);
    if (!isValidated) {
      return;
    }

    try {
      const measurements = measurmentsObjMaker();
      const str = JSON.stringify(measurements).replace(/"([^"]+)":/g, "$1:");
      props._setState("measurements", {
        type: "tape",
        value: str,
      });
      props.handleClose();
    } catch (e) {
      console.trace(e);
    }
  };

  const measurmentsObjMaker = () => {
    let DATA = {
      ArmCirmunference: circumferenceSection.arm,
      ChestCirmunference: circumferenceSection.chest,
      WaistCirmunference: circumferenceSection.waist,
      HipCirmunference: circumferenceSection.hip,
      ThighCirmunference: circumferenceSection.thigh,
      CalfCirmunference: circumferenceSection.calf,
      AnkleCirmunference: circumferenceSection.ankle,
      HeadToFloorLength: lengthSection.head_to_floor,
      ShoulderToFloorLength: lengthSection.shoulder_to_floor,
      WaistToFloorLength: lengthSection.waist_to_floor,
      ArmLength: lengthSection.arm_length,
      LegLength: lengthSection.leg_length,
    };
    return DATA;
  };

  return (
    <div
      className="tqs_sqm_container"
      style={{
        maxHeight: "95vh",
        width: "60vw",
        overflow: "scroll",
      }}
    >
      <div style={{ width: "95%" }} className="client_create_ad_screen_column2">
        <p
          style={{
            padding: "2% 0%",
            color: "#990000",
            fontSize: "12pt",
            fontWeight: "bold",
            lineHeight: "20px",
          }}
        >
          {t(
            "REMINDER : Once the measurements have been filled in and validated, D.C.E will use these measurements to make your outfit. D.C.E will in no way be responsible for incorrect measurements. No complaints about the measurements of your outfits will be possible. Any alterations due to incorrect measurements will be invoiced to you and the shipments will be at your expense."
          )}
        </p>
        <div style={{ width: "100%", display: "flex", alignItems: "center", flexDirection: "column" }}>
          <img src={MeasurementDetailsSVG} style={{ width: "70%" }} />
          <img style={{ width: "70%" }} src={MeasurementChartSVG} />
        </div>
        <div
          className="pa_container"
          style={{
            height: "100%",
            width: "100%",
          }}
        >
          <div
            className="pa_steps_row"
            style={{
              paddingBottom: "4%",
              paddingTop: "2%",
            }}
          >
            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map((v, i) => (
                <Step key={v}>
                  <StepLabel onClick={() => setActiveStep(i)}>{t(v)}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </div>
          <div className="pa_content_row">
            {activeStep == 0 ? (
              <ParseMeasurement.CircumferenceSection
                state={circumferenceSection}
                setState={setCircumferenceSection}
                onClick={circumferenceSectionCallback}
              />
            ) : activeStep == 1 ? (
              <ParseMeasurement.LengthSection state={lengthSection} setState={setLengthSection} onClick={lengthSectionCallback} />
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
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
            <p className="pa_profile_section_input_text">{t("Delivery Address")}</p>
          </div>
          <div className="pa_profile_section_input_input">
            <div style={{ width: "100%" }}>
              <AutoComplete
                disabled={disabled}
                name="Address"
                required={true}
                label={"Address"}
                value={state?.address?.label}
                options={addresses}
                placeholder={t("Address")}
                componenet="parseaddress"
                onChangeAddress={(e) => {
                  handleInputAddress(e);
                }}
                onAddressSelect={(e) => handleSelectAddress(e)}
              />
            </div>
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
            <p className="pa_profile_section_input_text">{t("any note (s) concerning the delivery")}</p>
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
              inputPlaceholder={t("Write any note regarding Delivery (Optional)")}
              inputDefaultValue={state?.note}
              onChange={(e) => _setState("note", e.target.value)}
            />
          </div>
        </div>
        <p className="pa_profile_section_input_instructions_text">{t("*Select Delivery Type according to your Demands")}</p>
        <div
          className="pa_profile_section_input_container"
          style={{
            borderRadius: "20px",
            marginTop: "2%",
            marginBottom: "1%",
          }}
        >
          <div className="pa_profile_section_input_label">
            <p className="pa_profile_section_input_text">{t("desired delivery date")}</p>
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
        <p className="pa_profile_section_input_instructions_text">{t("*Select Date for delivery")}</p>
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
  const store = Store();
  return (
    <>
      <div className="pa_profile_section_container">
        {state?.quotes?.length === 0 || !state.quotes ? (
          <>
            {/* <div
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
            </div> */}
            {/* <div
              className="pa_payment_section_input_container"
              style={{
                borderRadius: "20px",
                marginBottom: "2%",
              }}
            >
              <div className="pa_payment_section_input_label">
                <p className="pa_payment_section_input_text">{t("Set Minimum Price")}</p>
              </div>
              <div className="pa_payment_section_input_input_container">
                <input
                  disabled={disabled}
                  className="pa_payment_section_input_input"
                  type="number"
                  defaultValue={`${state.min_price}`}
                  onChange={(e) => {
                    _setState("min_price", e.target.value);
                  }}
                  placeholder="€0"
                />
                {state.min_price ? <span className="input-currency-sign">€</span> : null}
              </div>
            </div> */}
            <div
              className="pa_payment_section_input_container"
              style={{
                borderRadius: "20px",
                marginBottom: "2%",
              }}
            >
              <div className="pa_payment_section_input_label">
                <p className="pa_payment_section_input_text">{t("Set Maximum Price")}</p>
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
                {state.max_price ? <span className="input-currency-sign">€</span> : null}
              </div>
            </div>
          </>
        ) : null}
        {(store.userRole == "tailor" || state?.quotes?.length > 0) && state?.quotes[0]?.price > 0 ? (
          <div
            className="pa_payment_section_input_container"
            style={{
              borderRadius: "25px",
              marginBottom: "2%",
            }}
          >
            <div className="pa_payment_section_input_label">
              <p className="pa_payment_section_input_text">{t("Bill")}</p>
            </div>
            <div className="pa_payment_section_input_input_container">
              <input
                disabled={disabled}
                className="pa_payment_section_input_input"
                type="number"
                defaultValue={state?.quotes[0]?.price}
                onChange={(e) => _setState("min_price", e.target.value)}
                placeholder="€0"
              />
              {state?.quotes[0]?.price ? <span className="input-currency-sign">€</span> : null}
            </div>
          </div>
        ) : null}
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
              {t("I agree with terms & condition & privacy policy of DESIGN Confections Ethicals")}
            </p>
            {/* <p
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
            </p> */}
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
