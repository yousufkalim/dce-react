import React, { useState } from "react";

import CustomDropDown from "./CustomDropDown";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import CustomDatePicker from "./CustomDatePicker";

import MenuItem from "@mui/material/MenuItem";
import Checkbox from '@mui/material/Checkbox';

import { useNavigate } from "react-router-dom";

function BasicSection({
  noButton = false
}){

  const [gender, setGender] = useState("");
  const [category, setCategory] = useState("");
  const [cut, setCut] = useState("");
  const [color, setColor] = useState("");
  const [materialFabrics, setMaterialFabrics] = useState("");

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
              selectValue={gender}
              onChange={e => setGender(e.target.value)}
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
              selectValue={category}
              onChange={e => setCategory(e.target.value)}
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
              onChange={e => console.log(e.target.value)}
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
              selectValue={cut}
              onChange={e => setCut(e.target.value)}
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
              selectValue={color}
              onChange={e => setColor(e.target.value)}
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
              selectValue={materialFabrics}
              onChange={e => setMaterialFabrics(e.target.value)}
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
          noButton
          ? <></>
          : <CustomButton
              text="Next"
              style={{
                marginTop: "3%",
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

function DeliverySection({
  noButton = false
}){

  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [deliveryType, setDeliveryType] = useState("");
  const [deliveryDate, setDeliveryDate] = useState(null);

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
              selectValue={country}
              onChange={e => setCountry(e.target.value)}
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
              selectValue={city}
              onChange={e => setCity(e.target.value)}
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
              selectValue={deliveryType}
              onChange={e => setDeliveryType(e.target.value)}
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
              value={deliveryDate}
              onChange={setDeliveryDate}
            />
          </div>
        </div>
        <p className="pa_profile_section_input_instructions_text">
          *Select Date for delivery
        </p>
        {
          noButton
          ? <></>
          : <CustomButton
              text="Next"
              style={{
                marginTop: "3%",
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

function NotesSection({
  noButton = false
}){

  const navigate = useNavigate();

  const navToCreateAd = () => {
    navigate("/my_ads");
  };

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
        <div className="pa_payment_section_consent_container">
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
        {
          noButton
          ? <></>
          : <CustomButton
              text="Publish Ad"
              onClick={navToCreateAd}
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