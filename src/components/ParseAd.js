import React, { useState } from "react";

import CustomDropDown from "./CustomDropDown";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import CustomDatePicker from "./CustomDatePicker";

import MenuItem from "@mui/material/MenuItem";
import Checkbox from '@mui/material/Checkbox';

function BasicSection({
  state,
  setState,
  onClick
}){

  const _setState = (key, value) => {
    const obj = {};
    obj[key] = value;
    setState({
      ...state,
      ...obj
    });
  }

  return (
    <>
      <div className="pa_profile_section_container">
        <div
          className="pa_profile_section_input_container"
          style={{
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px"
          }}
        >
          <div className="pa_profile_section_input_label">
            <p className="pa_profile_section_input_text">
              Gender
            </p>
          </div>
          <div className="pa_profile_section_input_input">
            <CustomDropDown
              labelStyle={{
                display: "none"
              }}
              selectID="gender"
              selectName="gender"
              selectNullValue="Select gender for your creation"
              selectValue={state.gender}
              onChange={e => _setState("gender", e.target.value)}
              menuItems={[
                <MenuItem value={"Male"}>Male</MenuItem>,
                <MenuItem value={"Female"}>Female</MenuItem>
              ]}
              selectSX={{
                fontSize: "12px"
              }}
            />
          </div>
        </div>
        <div className="pa_profile_section_input_container">
          <div className="pa_profile_section_input_label">
            <p className="pa_profile_section_input_text">
              Category
            </p>
          </div>
          <div className="pa_profile_section_input_input">
            <CustomDropDown
              labelStyle={{
                display: "none"
              }}
              selectID="category"
              selectName="category"
              selectNullValue="Select one category for your ad"
              selectValue={state.category}
              onChange={e => _setState("category", e.target.value)}
              menuItems={[
                <MenuItem value={"Category1"}>Category1</MenuItem>,
                <MenuItem value={"Category2"}>Category2</MenuItem>
              ]}
            />
          </div>
        </div>
        <div
          className="pa_profile_section_input_container"
          style={{
            borderBottomLeftRadius: "20px",
            borderBottomRightRadius: "20px",
            marginBottom: "2%"
          }}
        >
          <div className="pa_profile_section_input_label">
            <p className="pa_profile_section_input_text">
              Name
            </p>
          </div>
          <div className="pa_profile_section_input_input">
            <CustomInput
              labelStyle={{
                display: "none"
              }}
              inputStyle={{
                border: "none",
                fontSize: "12px"
              }}
              inputPlaceholder="Name of your creation"
              onChange={e => _setState("name", e.target.value)}
            />
          </div>
        </div>
        <div
          className="pa_profile_section_input_container"
          style={{
            borderRadius: "20px",
            marginBottom: "1%"
          }}
        >
          <div className="pa_profile_section_input_label">
            <p className="pa_profile_section_input_text">
              Cut
            </p>
          </div>
          <div className="pa_profile_section_input_input">
            <CustomDropDown
              labelStyle={{
                display: "none"
              }}
              selectID="cut"
              selectName="cut"
              selectNullValue="Select size"
              selectValue={state.cut}
              onChange={e => _setState("cut", e.target.value)}
              menuItems={[
                <MenuItem value={"5"}>5</MenuItem>,
                <MenuItem value={"10"}>10</MenuItem>
              ]}
            />
          </div>
        </div>
        <p className="pa_profile_section_input_instructions_text">
          *Ex: Long skirt size 38
        </p>
        <div
          className="pa_profile_section_input_container"
          style={{
            borderRadius: "20px",
            marginTop: "2%",
            marginBottom: "1%"
          }}
        >
          <div className="pa_profile_section_input_label">
            <p className="pa_profile_section_input_text">
              Measurements
            </p>
          </div>
          <div className="pa_profile_section_input_input">
            <CustomInput
              labelStyle={{
                display: "none"
              }}
              inputStyle={{
                border: "none",
                fontSize: "12px"
              }}
              inputPlaceholder="Write Measurement here"
              onChange={e => _setState("measurements", e.target.value)}
            />
          </div>
        </div>
        <p className="pa_profile_section_input_instructions_text">
          *Bring a tape measure
        </p>
        <p className="pa_profile_section_input_instructions_text">
          *Measure either the circumference or the length depending on the part of the body.
        </p>
        <div
          className="pa_profile_section_input_container"
          style={{
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
            marginTop: "2%"
          }}
        >
          <div className="pa_profile_section_input_label">
            <p className="pa_profile_section_input_text">
              Colour
            </p>
          </div>
          <div className="pa_profile_section_input_input">
            <CustomDropDown
              labelStyle={{
                display: "none"
              }}
              selectID="colour"
              selectName="colour"
              selectNullValue="Select one colour for your Creations"
              selectValue={state.color}
              onChange={e => _setState("color", e.target.value)}
              menuItems={[
                <MenuItem value={"Colour1"}>Colour1</MenuItem>,
                <MenuItem value={"Colour2"}>Colour2</MenuItem>
              ]}
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
              Material Fabrics
            </p>
          </div>
          <div className="pa_profile_section_input_input">
            <CustomDropDown
              labelStyle={{
                display: "none"
              }}
              selectID="materialFabrics"
              selectName="materialFabrics"
              selectNullValue="Select Fabric Style"
              selectValue={state.fabric}
              onChange={e => _setState("fabric", e.target.value)}
              menuItems={[
                <MenuItem value={"Fabric1"}>Fabric1</MenuItem>,
                <MenuItem value={"Fabric2"}>Fabric2</MenuItem>
              ]}
            />
          </div>
        </div>
        <div
          className="pa_profile_section_input_container"
          style={{
            borderRadius: "20px",
            marginTop: "2%"
          }}
        >
          <div className="pa_profile_section_input_label">
            <p className="pa_profile_section_input_text">
              Attachments
            </p>
          </div>
          <div className="pa_profile_section_input_input">
            <CustomInput
              labelStyle={{
                display: "none"
              }}
              inputStyle={{
                border: "none",
                fontSize: "12px"
              }}
              inputPlaceholder="Upload Drawing, Photo, Document, etc."
            />
          </div>
        </div>
        {
          !onClick
          ? <></>
          : <CustomButton
              text="Next"
              style={{
                marginTop: "3%",
                marginBottom: "2%",
                padding: "1.2% 5%",
                boxShadow: "none"
              }}
              onClick={onClick}
            />
        }
      </div>
    </>
  );
}

function DeliverySection({
  state,
  setState,
  onClick
}){

  const _setState = (key, value) => {
    const obj = {};
    obj[key] = value;
    setState({
      ...state,
      ...obj
    });
  }

  return (
    <>
      <div className="pa_profile_section_container">
        <div
          className="pa_profile_section_input_container"
          style={{
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px"
          }}
        >
          <div className="pa_profile_section_input_label">
            <p className="pa_profile_section_input_text">
              Delivery Address
            </p>
          </div>
          <div className="pa_profile_section_input_input">
            <CustomInput
              labelStyle={{
                display: "none"
              }}
              inputStyle={{
                border: "none",
                fontSize: "12px"
              }}
              inputPlaceholder="Delivery Address"
              onChange={e => _setState("address", e.target.value)}
            />
          </div>
        </div>
        <div className="pa_profile_section_input_container">
          <div className="pa_profile_section_input_label">
            <p className="pa_profile_section_input_text">
              Country
            </p>
          </div>
          <div className="pa_profile_section_input_input">
            <CustomDropDown
              labelStyle={{
                display: "none"
              }}
              selectID="country"
              selectName="country"
              selectNullValue="Country"
              selectValue={state.country}
              onChange={e => _setState("country", e.target.value)}
              menuItems={[
                <MenuItem value={"Country1"}>Country1</MenuItem>,
                <MenuItem value={"Country2"}>Country2</MenuItem>
              ]}
            />
          </div>
        </div>
        <div
          className="pa_profile_section_input_container"
          style={{
            borderBottomLeftRadius: "20px",
            borderBottomRightRadius: "20px",
            marginBottom: "2%"
          }}
        >
          <div className="pa_profile_section_input_label">
            <p className="pa_profile_section_input_text">
              City
            </p>
          </div>
          <div className="pa_profile_section_input_input">
            <CustomDropDown
              labelStyle={{
                display: "none"
              }}
              selectID="city"
              selectName="city"
              selectNullValue="City"
              selectValue={state.city}
              onChange={e => _setState("city", e.target.value)}
              menuItems={[
                <MenuItem value={"City1"}>City1</MenuItem>,
                <MenuItem value={"City2"}>City2</MenuItem>
              ]}
            />
          </div>
        </div>
        <div
          className="pa_profile_section_input_container"
          style={{
            borderRadius: "20px",
            marginBottom: "1%"
          }}
        >
          <div className="pa_profile_section_input_label">
            <p className="pa_profile_section_input_text">
              Delivery Note
            </p>
          </div>
          <div className="pa_profile_section_input_input">
            <CustomInput
              labelStyle={{
                display: "none"
              }}
              inputStyle={{
                border: "none",
                fontSize: "12px"
              }}
              inputPlaceholder="Write any note regarding Delivery (Optional)"
              onChange={e => _setState("note", e.target.value)}
            />
          </div>
        </div>
        <div
          className="pa_profile_section_input_container"
          style={{
            borderRadius: "20px",
            marginBottom: "1%"
          }}
        >
          <div className="pa_profile_section_input_label">
            <p className="pa_profile_section_input_text">
              Delivery Type
            </p>
          </div>
          <div className="pa_profile_section_input_input">
            <CustomDropDown
              labelStyle={{
                display: "none"
              }}
              selectID="delivery_type"
              selectName="delivery_type"
              selectNullValue="Urgent, Normal"
              selectValue={state.type}
              onChange={e => _setState("type", e.target.value)}
              menuItems={[
                <MenuItem value={"Urgent"}>Urgent</MenuItem>,
                <MenuItem value={"Normal"}>Normal</MenuItem>
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
            marginBottom: "1%"
          }}
        >
          <div className="pa_profile_section_input_label">
            <p className="pa_profile_section_input_text">
              Delivery Date
            </p>
          </div>
          <div className="pa_profile_section_input_input">
            <CustomDatePicker
              labelStyle={{
                display: "none"
              }}
              value={state.date}
              onChange={e => _setState("date", e)}
            />
          </div>
        </div>
        <p className="pa_profile_section_input_instructions_text">
          *Select Date for delivery
        </p>
        {
          !onClick
          ? <></>
          : <CustomButton
              text="Next"
              style={{
                marginTop: "3%",
                marginBottom: "2%",
                padding: "1.2% 5%",
                boxShadow: "none"
              }}
              onClick={onClick}
            />
        }
      </div>
    </>
  );
}

function NotesSection({
  onClick
}){

  return (
    <>
      <div className="pa_profile_section_container">
        <div
          className="pa_payment_section_textarea_container"
          style={{
            borderRadius: "20px",
            marginBottom: "2%"
          }}
        >
          <div className="pa_payment_section_textarea_label">
            <p className="pa_profile_section_input_text">
              Extra Note
            </p>
          </div>
          <div className="pa_profile_section_input_input">
            <textarea className="pa_profile_section_textarea_textarea">
            </textarea>
          </div>
        </div>
        <div
          className="pa_payment_section_input_container"
          style={{
            borderRadius: "20px",
            marginBottom: "2%"
          }}
        >
          <div className="pa_payment_section_input_label">
            <p className="pa_payment_section_input_text">
              Set Minimum Price
            </p>
          </div>
          <div className="pa_payment_section_input_input_container">
            <input className="pa_payment_section_input_input" />
          </div>
        </div>
        <div
          className="pa_payment_section_input_container"
          style={{
            borderRadius: "20px",
            marginBottom: "3%"
          }}
        >
          <div className="pa_payment_section_input_label">
            <p className="pa_payment_section_input_text">
              Set Maximum Price
            </p>
          </div>
          <div className="pa_payment_section_input_input_container">
            <input className="pa_payment_section_input_input" />
          </div>
        </div>
        {
          !onClick
          ? <></>
          : <div className="pa_payment_section_consent_container">
              <Checkbox
                style={{
                  transform: "scale(0.8)",
                  color: "#000000",
                  paddingRight: "2%"
                }}
                defaultChecked
              />
              <p
                style={{
                  fontSize: "11px",
                  fontWeight: "600",
                  paddingRight: "0.6%"
                }}
              >
                I agree to the design Confection Ethiques
              </p>
              <p
                style={{
                  fontSize: "11px",
                  fontWeight: "600",
                  paddingRight: "0.6%",
                  color: "#CC8E9C"
                }}
              >
                Terms of Services
              </p>
              <p
                style={{
                  fontSize: "11px",
                  fontWeight: "600",
                  paddingRight: "0.6%"
                }}
              >
                and
              </p>
              <p
                style={{
                  fontSize: "11px",
                  fontWeight: "600",
                  color: "#CC8E9C"
                }}
              >
                Privacy Policy
              </p>
            </div>
        }
        {
          !onClick
          ? <></>
          : <CustomButton
              text="Publish Ad"
              onClick={onClick}
              style={{
                marginBottom: "2%",
                padding: "1.2% 5%",
                boxShadow: "none"
              }}
            />
        }
      </div>
    </>
  );
}

export {
  BasicSection,
  DeliverySection,
  NotesSection
}