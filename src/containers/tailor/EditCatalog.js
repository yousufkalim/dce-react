import React, { useState } from "react";

import AddCatalogSVG from "../../assets/AddCatalog.svg";

import TailorAppBar from "../../components/TailorAppBar";
import Footer from "../../components/Footer";

import CustomDropDown from "../../components/CustomDropDown";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";

import MenuItem from "@mui/material/MenuItem";

import { useNavigate } from "react-router-dom";

function TailorEditCatalogScreen(){

  const navigate = useNavigate();

  return (
    <div className="container-page">
      <TailorAppBar
        color="#FFFAF9"
        activeTab={1}
      />
      <div
        className="container"
        style={{
          background: "#FFEEEA",
        }}
      >
        <div className="tailor_create_catalog_screen_row1">
          <div className="tailor_create_catalog_screen_row1_column1">
            <img style={{ width: "60%" }} src={AddCatalogSVG} />
          </div>
          <div className="tailor_create_catalog_screen_row1_column2">
            <p
              style={{
                marginTop: "10%",
                marginBottom: "2.5%",
                fontSize: "18px",
                fontWeight: "900"
              }}
            >
              Edit Catalog
            </p>
            <div
              className="tccs_input_section_container"
              style={{
                
              }}
            >
              <div className="pa_content_row">
                <InputSection />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function InputSection(){

  const [gender, setGender] = useState("");
  const [category, setCategory] = useState("");

  return (
    <>
      <div className="pa_profile_section_container">
        <div
          className="pa_profile_section_input_container"
          style={{
            borderBottomLeftRadius: "20px",
            borderBottomRightRadius: "20px",
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
              inputPlaceholder="Name of your Creation"
              onChange={e => console.log(e.target.value)}
            />
          </div>
        </div>
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
              selectNullValue="Select gender"
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
              selectNullValue="Select category"
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
              Price
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
              inputPlaceholder="Set your Price"
              onChange={e => console.log(e.target.value)}
            />
          </div>
        </div>
        <div
          className="pa_payment_section_textarea_container"
          style={{
            height: "30%",
            borderRadius: "20px",
            marginBottom: "2%"
          }}
        >
          <div className="pa_payment_section_textarea_label">
            <p className="pa_profile_section_input_text">
              Description
            </p>
          </div>
          <div className="pa_profile_section_input_input">
            <textarea
              className="pa_profile_section_textarea_textarea"
              placeholder="Tell us about your service"
            >
            </textarea>
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
        <CustomButton
          text="Edit Catalog"
          style={{
            marginTop: "3%",
            marginBottom: "2%",
            padding: "1.2% 5%",
            boxShadow: "none"
          }}
        />
      </div>
    </>
  );
}

export default TailorEditCatalogScreen;