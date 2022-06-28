import React, { useState, useEffect } from "react";

import AddCatalogSVG from "../../assets/AddCatalog.svg";
import UploadSVG from "../../assets/upload.svg";

import TailorAppBar from "../../components/TailorAppBar";
import Footer from "../../components/Footer";
import { useTranslation } from "react-i18next";

import CustomDropDown from "../../components/CustomDropDown";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import Attachment from "../../components/Attachment";
import ViewImageModal from "../../components/ViewImageModal";

import MenuItem from "@mui/material/MenuItem";
import { Modal } from "@mui/material";

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
  const [images, setImages] = useState([]);
  const [viewImage, setViewImage] = useState(null);

  const [isViewImageModal, setIsViewImageModal] = useState(false);
  const handleIsViewImageModalClose = () => {
    setIsViewImageModal(false);
  };
  const handleIsViewImageModalOpen = () => {
    setIsViewImageModal(true);
  };

  const handleImagesSelect = (event) => {
    if (event.target.files.length + images.length > 5) {
      toast.error("You can select a maximum of 5 files.");
      return;
    }

    for (let i = 0; i < event.target.files.length; i++) {
      const obj = event.target.files[i];
      if (obj.size / 1024 > 5000) {
        toast.error("File sizes greater than 5 MB are not allowed.");
        return;
      }
    }

    if (event.target.files.length + images.length > 5) {
      toast.error("You can select a maximum of 5 files.");
      return;
    }
    setImages([...images, ...event.target.files]);
  };
  const handleImageDeselect = (image) => {
    const _images = [...images];
    const index = _images.map((_) => _.name).indexOf(image.name);
    if (index > -1) {
      _images.splice(index, 1);
    }
    setImages([..._images]);
  };

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
      for (let i = 0; i < images.length; i++) {
        body.append("images", images[i]);
      } // Multipart files share the same field name

      response = await Api("put", `/catalogs/${params.id}`, body);

      if (response?.data?.success) {
        toast.success(t("Catalogue edited successfully."));
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
              inputPlaceholder={t("I give a name to my confection")}
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
              menuItems={[<MenuItem value={"male"}>{t("Male")}</MenuItem>, <MenuItem value={"female"}>{t("Female")}</MenuItem>]}
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
            <p className="pa_profile_section_input_text">Attachments</p>
          </div>
          <div className="pa_profile_section_input_input">
            <label className="upload-pic-label" htmlFor="filePicker">
              <input type="file" multiple accept="image/*" hidden id="filePicker" name="file" onChange={handleImagesSelect} />
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
              deselect={() => handleImageDeselect(_)}
            />
          ))}
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
        <Modal open={isViewImageModal} onClose={handleIsViewImageModalClose} aria-labelledby="View Image">
          <ViewImageModal src={viewImage} handleClose={handleIsViewImageModalClose} />
        </Modal>
      </div>
    </>
  );
}

export default TailorEditCatalogScreen;
