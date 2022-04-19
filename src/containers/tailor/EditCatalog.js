import React, { useState, useEffect } from "react";

import AddCatalogSVG from "../../assets/AddCatalog.svg";

import TailorAppBar from "../../components/TailorAppBar";
import Footer from "../../components/Footer";
import { useTranslation } from "react-i18next";

import CustomDropDown from "../../components/CustomDropDown";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";

import MenuItem from "@mui/material/MenuItem";

import Api from "../../api/index";

import { useNavigate, useParams } from "react-router-dom";

import { toast } from "react-toastify";

import * as FormValidations from "../../utils/Validations";

function TailorEditCatalogScreen() {
  const { t } = useTranslation();

  const params = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [catalog, setCatalog] = useState(null);

  useEffect(() => {
    getCatalog();
  }, []);

  const getCatalog = async () => {
    let response;
    try {
      response = await Api("get", `/catalogs/${params.id}`);
      const catalogData = response.data.catalog;
      setCatalog(catalogData);
      setIsLoading(false);
    } catch (e) {
      console.trace(e);
    }
  };

  return (
    <>
      {isLoading ? (
        <></>
      ) : (
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
                  {t("Edit Catalogue")}
                </p>
                <div className="tccs_input_section_container" style={{}}>
                  <div className="pa_content_row">
                    <InputSection {...catalog} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}

function InputSection(props) {
  const navigate = useNavigate();
  const params = useParams();

  const [isProcessing, setIsProcessing] = useState(false);
  const [image, setImage] = useState(null);

  const [state, setState] = useState({
    name: props.name ?? "",
    gender: props.gender ?? "",
    category: props.category ?? "",
    price: props.price ?? "",
    description: props.description ?? "",
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

      response = await Api("put", `/catalogs/${params.id}`, body);

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
  const { t } = useTranslation();

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
            <p className="pa_profile_section_input_text">{t("Name")}</p>
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
              inputPlaceholder={t("Name of your Creation")}
              inputDefaultValue={state.name}
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
            <p className="pa_profile_section_input_text">{t("Gender")}</p>
          </div>
          <div className="pa_profile_section_input_input">
            <CustomDropDown
              labelStyle={{
                display: "none",
              }}
              selectID="gender"
              selectName="gender"
              selectNullValue={t("Select gender")}
              selectValue={state.gender}
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
              labelStyle={{
                display: "none",
              }}
              selectID="category"
              selectName="category"
              selectNullValue={t("Select category")}
              selectValue={state.category}
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
            <p className="pa_profile_section_input_text">{t("Price")}</p>
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
              inputPlaceholder={t("Set your Price")}
              inputDefaultValue={state.price}
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
            <p className="pa_profile_section_input_text">{t("Description")}</p>
          </div>
          <div className="pa_profile_section_input_input">
            <textarea
              className="pa_profile_section_textarea_textarea"
              placeholder={t("Tell us about your service")}
              onChange={(e) => _setState("description", e.target.value)}
            >
              {state.description}
            </textarea>
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
          text={t("Edit Catalogue")}
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

export default TailorEditCatalogScreen;
