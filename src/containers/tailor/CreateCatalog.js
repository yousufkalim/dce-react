import React, { useState } from "react";

import AddCatalogSVG from "../../assets/AddCatalog.svg";

import TailorAppBar from "../../components/TailorAppBar";
import Footer from "../../components/Footer";

import CustomDropDown from "../../components/CustomDropDown";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";

import MenuItem from "@mui/material/MenuItem";

import Api from "../../api/index";

import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

import * as FormValidations from "../../utils/Validations";

function TailorCreateCatalogScreen() {
  return (
    <div className="container-page">
      <TailorAppBar color="#FFFAF9" activeTab={1} />
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
                fontWeight: "900",
              }}
            >
              Add Catalog
            </p>
            <div className="tccs_input_section_container" style={{}}>
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

function InputSection() {
  const navigate = useNavigate();

  const [isProcessing, setIsProcessing] = useState(false);
  const [image, setImage] = useState(null);

  const [state, setState] = useState({
    name: "",
    gender: "",
    category: "",
    price: "",
    description: "",
  });

  const handleImageSelect = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const _setState = (key, value) => {
    const obj = {};
    obj[key] = value;
    setState({
      ...state,
      ...obj,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const isValidated = FormValidations.tailorCreateCatalog(state);
    if (!isValidated) {
      return;
    }

    if (!image) {
      toast.error("Image must be selected");
      return;
    }

    if (isProcessing) {
      return;
    }

    let response;

    try {
      setIsProcessing(true);

      const body = new FormData();

      body.append("name", state.name);
      body.append("gender", state.gender);
      body.append("category", state.category);
      body.append("price", state.price);
      body.append("description", state.description);
      body.append("image", image);

      response = await Api("post", "/catalogs", body);

      if (response?.data?.success) {
        toast.success("Catalog created successfully.");
        navToCatalogs();
      }
    } catch (e) {
      console.trace(e);
    }

    setIsProcessing(false);
  };

  const navToCatalogs = () => {
    navigate("/catalog");
  };

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
            <p className="pa_profile_section_input_text">Name</p>
          </div>
          <div className="pa_profile_section_input_input">
            <CustomInput
              labelStyle={{
                display: "none",
              }}
              inputStyle={{
                border: "none",
                fontSize: "12px",
              }}
              inputPlaceholder="Name of your Creation"
              onChange={(e) => _setState("name", e.target.value)}
            />
          </div>
        </div>
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
              labelStyle={{
                display: "none",
              }}
              selectID="gender"
              selectName="gender"
              selectNullValue="Select gender"
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
              labelStyle={{
                display: "none",
              }}
              selectID="category"
              selectName="category"
              selectNullValue="Select category"
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
            <p className="pa_profile_section_input_text">Price</p>
          </div>
          <div className="pa_profile_section_input_input">
            <CustomInput
              inputType="number"
              labelStyle={{
                display: "none",
              }}
              inputStyle={{
                border: "none",
                fontSize: "12px",
              }}
              inputPlaceholder="Set your Price"
              onChange={(e) => _setState("price", e.target.value)}
            />
          </div>
        </div>
        <div
          className="pa_payment_section_textarea_container"
          style={{
            height: "30%",
            borderRadius: "20px",
            marginBottom: "2%",
          }}
        >
          <div className="pa_payment_section_textarea_label">
            <p className="pa_profile_section_input_text">Description</p>
          </div>
          <div className="pa_profile_section_input_input">
            <textarea
              className="pa_profile_section_textarea_textarea"
              placeholder="Tell us about your service"
              onChange={(e) => _setState("description", e.target.value)}
            ></textarea>
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
            <CustomInput
              labelStyle={{
                display: "none",
              }}
              inputStyle={{
                border: "none",
                fontSize: "12px",
              }}
              inputPlaceholder="Upload Drawing, Photo, Document, etc."
              inputType="file"
              accept="image/*"
              onChange={handleImageSelect}
            />
          </div>
        </div>
        <CustomButton
          text="Create Catalog"
          onClick={handleSubmit}
          style={{
            marginTop: "3%",
            marginBottom: "2%",
            padding: "1.2% 5%",
            boxShadow: "none",
          }}
        />
      </div>
    </>
  );
}

export default TailorCreateCatalogScreen;
