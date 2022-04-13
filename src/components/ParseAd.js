import React, { useState, useEffect } from "react";
import { Country, City } from "country-state-city";

import CustomDropDown from "./CustomDropDown";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import CustomDatePicker from "./CustomDatePicker";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import dotted from "../assets/dottedblack.svg";
import { grey } from "@mui/material/colors";

import { materialFabrics, colors } from "../utils/Constants";

import upload from "../assets/upload.svg";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const items = [
  {
    size: "small",
    measurements: "28,30,32",
  },
  {
    size: "medium",
    measurements: "36,38,40",
  },
  {
    size: "smaill",
    measurements: "42,44,46",
  },
];

function BasicSection({
  state,
  setState,
  onClick,
  disabled,
  disables,
  image,
  handleImageSelect,
}) {
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
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
          }}
        >
          <div className="pa_profile_section_input_label">
            <p className="pa_profile_section_input_text">Gender</p>
          </div>
          <div className="pa_profile_section_input_input">
            <CustomDropDown
              disabled={disabled || disables?.includes("gender")}
              labelStyle={{
                display: "none",
              }}
              selectID="gender"
              selectName="gender"
              selectNullValue="Select gender for your creation"
              selectValue={state.gender}
              onChange={(e) => _setState("gender", e.target.value)}
              menuItems={[
                <MenuItem value={"male"}>Male</MenuItem>,
                <MenuItem value={"female"}>Female</MenuItem>,
              ]}
              selectSX={{
                fontSize: "12px",
              }}
            />
          </div>
        </div>
        <div className="pa_profile_section_input_container">
          <div className="pa_profile_section_input_label">
            <p className="pa_profile_section_input_text">Category</p>
          </div>
          <div className="pa_profile_section_input_input">
            <CustomDropDown
              disabled={disabled || disables?.includes("category")}
              labelStyle={{
                display: "none",
              }}
              selectID="category"
              selectName="category"
              selectNullValue="Select one category for your ad"
              selectValue={state.category}
              onChange={(e) => _setState("category", e.target.value)}
              menuItems={[
                <MenuItem value={"WOMEN"}>WOMEN</MenuItem>,
                <MenuItem value={"MAN"}>MAN</MenuItem>,
                <MenuItem value={"CHILD"}>CHILD</MenuItem>,
                <MenuItem value={"Other"}>Other</MenuItem>,
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
            <p className="pa_profile_section_input_text">Name</p>
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
              inputPlaceholder="Name of your creation"
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
            <p className="pa_profile_section_input_text">Cut</p>
          </div>
          <div className="pa_profile_section_input_input">
            <CustomDropDown
              disabled={disabled}
              labelStyle={{
                display: "none",
              }}
              selectID="cut"
              selectName="cut"
              selectNullValue="Select size"
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
            <span className="measurements"> Standard size</span>{" "}
          </div>
          <div className="size-measurement-cont">
            {items.map((val) => (
              <div>
                <span className="size">{val?.size} </span>{" "}
                <span className="measurements">{val?.measurements}</span>{" "}
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
            <p className="pa_profile_section_input_text">Measurements</p>
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
              inputPlaceholder="Write Measurement here"
              inputDefaultValue={state.measurements}
              onChange={(e) => _setState("measurements", e.target.value)}
            />
            <img className="dots-measurement" src={dotted} />
          </div>
        </div>
        <p className="pa_profile_section_input_instructions_text">
          *Bring a tape measure
        </p>
        <p className="pa_profile_section_input_instructions_text">
          *Measure either the circumference or the length depending on the part
          of the body.
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
            <p className="pa_profile_section_input_text">Colour</p>
          </div>
          <div className="pa_profile_section_input_input">
            <CustomDropDown
              disabled={disabled}
              labelStyle={{
                display: "none",
              }}
              selectID="colour"
              selectName="colour"
              selectNullValue="Select one colour for your Creations"
              selectValue={state.color}
              onChange={(e) => _setState("color", e.target.value)}
              menuItems={colors.map((_) => (
                <MenuItem value={_.name}>{_.name}</MenuItem>
              ))}
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
            <p className="pa_profile_section_input_text">Material Fabrics</p>
          </div>
          <div className="pa_profile_section_input_input">
            <CustomDropDown
              disabled={disabled}
              labelStyle={{
                display: "none",
              }}
              selectID="materialFabrics"
              selectName="materialFabrics"
              selectNullValue="Select Fabric Style"
              selectValue={state.fabric}
              onChange={(e) => _setState("fabric", e.target.value)}
              menuItems={materialFabrics.map((_) => (
                <MenuItem value={_.title}>{_.title}</MenuItem>
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
            <p className="pa_profile_section_input_text">Attachments</p>
          </div>
          <div className="pa_profile_section_input_input">
            <label className="upload-pic-label" htmlFor="filePicker">
              <input
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
                <img src={upload} />
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
            <span className="duw-text">Do you Want</span>{" "}
            <span className="alteration-txt">ALTREATION SERVICE </span>
          </label>
        </div>
        {!onClick ? (
          <></>
        ) : (
          <CustomButton
            text="Next"
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
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const _countries = Country.getAllCountries();
    setCountries(_countries);
  }, []);

  useEffect(() => {
    if (state.country) {
      const countryObj = countries.find((_) => _.name == state.country);
      if (countryObj) {
        _setState("city", "");
        const _cities = City.getCitiesOfCountry(countryObj.isoCode);
        setCities(_cities);
      }
    }
  }, [state.country]);

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
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
          }}
        >
          <div className="pa_profile_section_input_label">
            <p className="pa_profile_section_input_text">Delivery Address</p>
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
              inputPlaceholder="Delivery Address"
              inputDefaultValue={state.address}
              onChange={(e) => _setState("address", e.target.value)}
            />
          </div>
        </div>
        <div className="pa_profile_section_input_container">
          <div className="pa_profile_section_input_label">
            <p className="pa_profile_section_input_text">Country</p>
          </div>
          <div className="pa_profile_section_input_input">
            <CustomDropDown
              disabled={disabled}
              labelStyle={{
                display: "none",
              }}
              selectID="country"
              selectName="country"
              selectNullValue="Country"
              selectValue={state.country}
              onChange={(e) => _setState("country", e.target.value)}
              menuItems={countries.map((_) => (
                <MenuItem value={_.name}>{_.name}</MenuItem>
              ))}
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
            <p className="pa_profile_section_input_text">City</p>
          </div>
          <div className="pa_profile_section_input_input">
            <CustomDropDown
              disabled={disabled}
              labelStyle={{
                display: "none",
              }}
              selectID="city"
              selectName="city"
              selectNullValue="City"
              selectValue={state.city}
              onChange={(e) => _setState("city", e.target.value)}
              menuItems={cities.map((_) => (
                <MenuItem value={_.name}>{_.name}</MenuItem>
              ))}
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
            <p className="pa_profile_section_input_text">Delivery Note</p>
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
              inputPlaceholder="Write any note regarding Delivery (Optional)"
              inputDefaultValue={state.note}
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
            <p className="pa_profile_section_input_text">Delivery Type</p>
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
          *Select Delivery Type according to your Demands
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
            <p className="pa_profile_section_input_text">Delivery Date</p>
          </div>
          <div className="pa_profile_section_input_input">
            <CustomDatePicker
              disablePast
              disabled={disabled}
              labelStyle={{
                display: "none",
              }}
              value={state.date}
              onChange={(e) => _setState("date", e)}
            />
          </div>
        </div>
        <p className="pa_profile_section_input_instructions_text">
          *Select Date for delivery
        </p>
        {!onClick ? (
          <></>
        ) : (
          <CustomButton
            text="Write Here"
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
            <p className="pa_profile_section_input_text">Choose Method</p>
          </div>
          <div className="pa_profile_section_input_input">
            <CustomDropDown
              disabled={disabled}
              labelStyle={{
                display: "none",
              }}
              selectID="payment_type"
              selectName="payment_type"
              selectNullValue="Fixed Price"
              selectValue={state.type}
              onChange={(e) => _setState("type", e.target.value)}
              menuItems={[
                <MenuItem value={"fixed"}>Fixed Price</MenuItem>,
                <MenuItem value={"hourly"}>Hourly Rate</MenuItem>,
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
            <p className="pa_payment_section_input_text">Set Minimum Price</p>
          </div>
          <div className="pa_payment_section_input_input_container">
            <input
              disabled={disabled}
              className="pa_payment_section_input_input"
              type="number"
              defaultValue={state.min_price}
              onChange={(e) => _setState("min_price", e.target.value)}
              placeholder="$50"
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
            <p className="pa_payment_section_input_text">Set Maximum Price</p>
          </div>
          <div className="pa_payment_section_input_input_container">
            <input
              disabled={disabled}
              className="pa_payment_section_input_input"
              type="number"
              defaultValue={state.max_price}
              onChange={(e) => _setState("max_price", e.target.value)}
              placeholder="$80"
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
            <p className="pa_profile_section_input_text">Payment Note</p>
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
              inputPlaceholder="Write any note regarding Payment (Optional)"
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
              I agree to the design Confection Ethiques
            </p>
            <p
              className="terms-text"
              style={{
                paddingRight: "0.6%",
                color: "#CC8E9C",
              }}
            >
              Terms of Services
            </p>
            <p
              className="terms-text"
              style={{
                paddingRight: "0.6%",
              }}
            >
              and
            </p>
            <p
              className="terms-text"
              style={{
                color: "#CC8E9C",
              }}
            >
              Privacy Policy
            </p>
          </div>
        )}
        {!onClick ? (
          <></>
        ) : (
          <CustomButton
            text={buttonText ?? "Publish Ad"}
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
function Circumference({ disabled }) {
  return (
    <>
      <div
        className="pa_profile_section_input_container"
        style={{
          borderRadius: "20px",
          marginBottom: "2%",
        }}
      >
        <div className="pa_profile_section_input_label">
          <p className="pa_profile_section_input_text">Arm</p>
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
            inputPlaceholder="Select size"
            onChange={(e) => _setState("armSize", e.target.value)}
          />
        </div>
      </div>
      <div
        className="pa_profile_section_input_container"
        style={{
          borderRadius: "20px",
          marginBottom: "2%",
        }}
      >
        <div className="pa_profile_section_input_label">
          <p className="pa_profile_section_input_text">Chest size</p>
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
            inputPlaceholder="Select size"
            onChange={(e) => _setState("chestSize", e.target.value)}
          />
        </div>
      </div>
      <div
        className="pa_profile_section_input_container"
        style={{
          borderRadius: "20px",
          marginBottom: "2%",
        }}
      >
        <div className="pa_profile_section_input_label">
          <p className="pa_profile_section_input_text">Waist size</p>
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
            inputPlaceholder="Select size"
            onChange={(e) => _setState("waistSize", e.target.value)}
          />
        </div>
      </div>
      <div
        className="pa_profile_section_input_container"
        style={{
          borderRadius: "20px",
          marginBottom: "2%",
        }}
      >
        <div className="pa_profile_section_input_label">
          <p className="pa_profile_section_input_text">Hip</p>
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
            inputPlaceholder="Select size"
            onChange={(e) => _setState("hipSize", e.target.value)}
          />
        </div>
      </div>
      <div
        className="pa_profile_section_input_container"
        style={{
          borderRadius: "20px",
          marginBottom: "2%",
        }}
      >
        <div className="pa_profile_section_input_label">
          <p className="pa_profile_section_input_text">Thigh</p>
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
            inputPlaceholder="Select size"
            onChange={(e) => _setState("thighSize", e.target.value)}
          />
        </div>
      </div>
      <div
        className="pa_profile_section_input_container"
        style={{
          borderRadius: "20px",
          marginBottom: "2%",
        }}
      >
        <div className="pa_profile_section_input_label">
          <p className="pa_profile_section_input_text">Calf</p>
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
            inputPlaceholder="Select size"
            onChange={(e) => _setState("calfSize", e.target.value)}
          />
        </div>
      </div>
      <div
        className="pa_profile_section_input_container"
        style={{
          borderRadius: "20px",
          marginBottom: "2%",
        }}
      >
        <div className="pa_profile_section_input_label">
          <p className="pa_profile_section_input_text">Ankle</p>
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
            inputPlaceholder="Select size"
            onChange={(e) => _setState("ankleSize", e.target.value)}
          />
        </div>
      </div>
      <CustomButton
        text={"Save and Next"}
        style={{
          marginTop: "2%",
          marginBottom: "7%",
          padding: "1.5% 5%",
          boxShadow: "none",
          borderRadius: "10px",
        }}
      />
    </>
  );
}
function Length({ disabled }) {
  return (
    <>
      <div
        className="pa_profile_section_input_container"
        style={{
          borderRadius: "20px",
          marginBottom: "2%",
        }}
      >
        <div className="pa_profile_section_input_label">
          <p className="pa_profile_section_input_text measurement_profile_section">
            Head to floor height
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
            inputPlaceholder="Select size"
            onChange={(e) => _setState("headtofloorheight", e.target.value)}
          />
        </div>
      </div>
      <div
        className="pa_profile_section_input_container"
        style={{
          borderRadius: "20px",
          marginBottom: "2%",
        }}
      >
        <div className="pa_profile_section_input_label">
          <p className="pa_profile_section_input_text measurement_profile_section">
            From shoulder to floor
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
            inputPlaceholder="Select size"
            onChange={(e) => _setState("shouldertofloorheight", e.target.value)}
          />
        </div>
      </div>
      <div
        className="pa_profile_section_input_container"
        style={{
          borderRadius: "20px",
          marginBottom: "2%",
        }}
      >
        <div className="pa_profile_section_input_label">
          <p className="pa_profile_section_input_text measurement_profile_section">
            From waist to floor
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
            inputPlaceholder="Select size"
            onChange={(e) => _setState("waisttofloorheight", e.target.value)}
          />
        </div>
      </div>
      <div
        className="pa_profile_section_input_container"
        style={{
          borderRadius: "20px",
          marginBottom: "2%",
        }}
      >
        <div className="pa_profile_section_input_label">
          <p className="pa_profile_section_input_text measurement_profile_section">
            Arm length <span style={{ color: "#A0A0A0" }}> (handle) </span>
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
            inputPlaceholder="Select size"
            onChange={(e) => _setState("armlength", e.target.value)}
          />
        </div>
      </div>
      <div
        className="pa_profile_section_input_container"
        style={{
          borderRadius: "20px",
          marginBottom: "2%",
        }}
      >
        <div className="pa_profile_section_input_label">
          <p className="pa_profile_section_input_text measurement_profile_section">
            Leg length
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
            inputPlaceholder="Select size"
            onChange={(e) => _setState("leglength", e.target.value)}
          />
        </div>
      </div>
      <CustomButton
        text={"Next"}
        style={{
          marginTop: "2%",
          marginBottom: "7%",
          padding: "1.5% 5%",
          boxShadow: "none",
          borderRadius: "10px",
        }}
      />
    </>
  );
}

export { BasicSection, DeliverySection, NotesSection, Circumference, Length };
