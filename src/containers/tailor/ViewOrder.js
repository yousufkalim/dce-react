import React, { useState, useEffect } from "react";

import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { useTranslation } from "react-i18next";

import AdEdit1SVG from "../../assets/AdEdit1.svg";
import AdEdit2SVG from "../../assets/AdEdit2.svg";
import AdEdit3SVG from "../../assets/AdEdit3.svg";
import UploadSVG from "../../assets/upload.svg";

import TailorAppBar from "../../components//TailorAppBar";
import CustomButton from "../../components/CustomButton";
import Footer from "../../components/Footer";
import * as ParseAd from "../../components/ParseAd";
import { Modal } from "@mui/material";
import Rating from "@mui/material/Rating";

import Api from "../../api";
import { useNavigate, useParams } from "react-router-dom";

import { toast } from "react-toastify";

import * as FormValidations from "../../utils/Validations";

const steps = ["Basic", "Delivery", "Notes"];

function TailorViewOrderScreen() {
  const { t } = useTranslation();

  const params = useParams();

  const [isLoading, setIsLoading] = useState(true);

  const [ad, setAd] = useState(null);
  const [profile, setProfile] = useState(null);
  const [basicSection, setBasicSection] = useState({
    gender: "",
    category: "",
    name: "",
    cut: "",
    measurements: {
      type: "static",
      value: "",
    },
    color: "",
    fabric: "",
    includes_alteration_services: false,
    userRole:""
  });
  const [deliverySection, setDeliverySection] = useState({
    note: "",
    type: "",
    date: "",
    address: { zip: "", label: "", city: "", lat: "", lng: "" },
  });
  const [notesSection, setNotesSection] = useState({
    note: "",
    min_price: "",
    max_price: "",
  });

  useEffect(() => {
    getAd();
    getProfile();
  }, []);

  // func to get current project
  const getAd = async () => {
    let response;
    try {
      response = await Api("get", `/orders/${params.id}`);
      const adData = response.data.order;
      console.log(adData, "<><>adData");
      setAd(adData);
      setBasicSection({
        gender: adData.gender,
        category: adData.category,
        name: adData.name,
        cut: adData.cut,
        measurements: adData.measurements,
        color: adData.color,
        fabric: adData.fabric,
        includes_alteration_services: adData.includes_alteration_services,
        userRole:userData?.user?.role
      });
      setDeliverySection({
        date: adData.delivery.date,
        note: adData.delivery.note,
        type: adData.delivery.type,
        address: {
          zip: adData.delivery.zipcode,
          label: adData.delivery.address,
          city: adData.delivery.city,
        },
      });
      setNotesSection(adData.budget);
      
    } catch (e) {
      console.trace(e);
    }
    setIsLoading(false);
  };
  const getProfile = async () => {
    let response;
    try {
      response = await Api("get", `/auth`);
      const userData = response.data.user;
      setProfile(userData);
    } catch (e) {
      console.trace(e);
    }
    return;
  };
  return (
    <>
      {isLoading ? (
        <></>
      ) : (
        <div className="container-page">
          <TailorAppBar color="#F8F4EF" activeTab={2} />
          <div
            className="container"
            style={{
              background: "#FFE9A0",
            }}
          >
            <div className="client_edit_ad_screen_row1">
              <div className="client_edit_ad_screen_row1_column1">
                <p
                  style={{
                    fontSize: "30px",
                    fontWeight: "900",
                  }}
                >
                  {t("Client Basic")}
                </p>
                <p
                  style={{
                    fontSize: "30px",
                    fontWeight: "900",
                    marginBottom: "20%",
                  }}
                >
                  {t("Details")}
                </p>
                <img style={{ width: "55%" }} src={AdEdit1SVG} />
              </div>
              <div className="client_edit_ad_screen_row1_column2">
                <div
                  className="pa_container"
                  style={{
                    marginTop: "8%",
                  }}
                >
                  <div className="pa_steps_row">
                    <Stepper activeStep={0} alternativeLabel>
                      {steps.map((label, index) => (
                        <Step key={label}>
                          <StepLabel onClick={() => setActiveStep(index)}>
                            {label}
                          </StepLabel>
                        </Step>
                      ))}
                    </Stepper>
                  </div>
                  <div className="pa_content_row">
                    <ParseAd.BasicSection
                      disabled
                      state={basicSection}
                      setState={setBasicSection}
                      profile={profile}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="container"
            style={{
              background: "#FFC396",
            }}
          >
            <div className="client_edit_ad_screen_row1">
              <div className="client_edit_ad_screen_row2_column1">
                <div
                  className="pa_container"
                  style={{
                    marginTop: "7%",
                  }}
                >
                  <div className="pa_steps_row">
                    <Stepper activeStep={1} alternativeLabel>
                      {steps.map((label, index) => (
                        <Step key={label}>
                          <StepLabel onClick={() => setActiveStep(index)}>
                            {label}
                          </StepLabel>
                        </Step>
                      ))}
                    </Stepper>
                  </div>
                  <div className="pa_content_row">
                    <ParseAd.DeliverySection
                      disabled
                      state={deliverySection}
                      setState={setDeliverySection}
                    />
                  </div>
                </div>
              </div>
              <div className="client_edit_ad_screen_row2_column2">
                <p
                  style={{
                    fontSize: "30px",
                    fontWeight: "900",
                  }}
                >
                  {t("Delivery")}
                </p>
                <p
                  style={{
                    fontSize: "30px",
                    fontWeight: "900",
                    marginBottom: "20%",
                  }}
                >
                  {t("Details")}
                </p>
                <img style={{ width: "70%" }} src={AdEdit2SVG} />
              </div>
            </div>
          </div>
          <div
            className="container"
            style={{
              background: "#FFFCFB",
            }}
          >
            <div className="client_edit_ad_screen_row1">
              <div className="client_edit_ad_screen_row1_column1">
                <p
                  style={{
                    fontSize: "30px",
                    fontWeight: "900",
                  }}
                >
                  {t("Payment")}
                </p>
                <p
                  style={{
                    fontSize: "30px",
                    fontWeight: "900",
                    marginBottom: "20%",
                  }}
                >
                  {t("Details")}
                </p>
                <img style={{ width: "20%" }} src={AdEdit3SVG} />
              </div>
              <div className="client_edit_ad_screen_row1_column2">
                <div
                  className="pa_container"
                  style={{
                    marginTop: "7%",
                  }}
                >
                  <div className="pa_steps_row">
                    <Stepper activeStep={2} alternativeLabel>
                      {steps.map((label, index) => (
                        <Step key={label}>
                          <StepLabel onClick={() => setActiveStep(index)}>
                            {label}
                          </StepLabel>
                        </Step>
                      ))}
                    </Stepper>
                  </div>
                  <div className="pa_content_row">
                    <ParseAd.NotesSection
                      disabled
                      state={notesSection}
                      setState={setNotesSection}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {ad.status == "in_progress" ? (
            <CompleteOrderSection {...ad} />
          ) : (
            <></>
          )}
          <Footer />
        </div>
      )}
    </>
  );
}

const CompleteOrderSection = (props) => {
  const [isCompleteOrderModal, setIsCompleteOrderModal] = useState(false);
  const { t } = useTranslation();
  const handleCompleteOrderModalClose = (e) => {
    setIsCompleteOrderModal(false);
  };

  return (
    <div
      style={{
        height: "30vh",
        width: "100vw",
        background: "#FFEEEA",
      }}
    >
      <div className="client_edit_ad_screen_row1">
        <p
          style={{
            fontSize: 28,
            fontWeight: "900",
            textDecoration: "underline",
            cursor: "pointer",
          }}
          onClick={() => setIsCompleteOrderModal(true)}
        >
          {t("Want to complete this order")}
        </p>
        <Modal
          open={isCompleteOrderModal}
          onClose={handleCompleteOrderModalClose}
          aria-labelledby="Complete Order"
          onBackdropClick="false"
        >
          <CompleteOrderModal
            handleClose={handleCompleteOrderModalClose}
            order={props}
          />
        </Modal>
      </div>
    </div>
  );
};

const CompleteOrderModal = (props) => {
  const navigate = useNavigate();

  const [isProcessing, setIsProcessing] = useState(false);

  const [rating, setRating] = useState(5);
  const [details, setDetails] = useState("");
  const [attachment, setAttachment] = useState(null);
  const { t } = useTranslation();
  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    setAttachment(file);
  };

  const navToOrders = () => {
    navigate("/orders");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const isValidated = FormValidations.tailorCompleteOrder({
      rating,
      details,
    });
    if (!isValidated) {
      return;
    }

    if (!attachment) {
      toast.error(t("Attachment must be selected"));
      return;
    }

    if (isProcessing) {
      return;
    }

    let response;

    try {
      setIsProcessing(true);

      const body = new FormData();

      body.append("id", props.order._id);
      body.append("rating", rating);
      body.append("details", details);
      body.append("attachment", attachment);

      response = await Api("post", "/orders/complete", body);

      if (response?.data?.success) {
        toast.success(t("Order completed successfully."));
        props.handleClose();
        navToOrders();
      }
    } catch (e) {
      console.trace(e);
    }

    setIsProcessing(false);
  };

  return (
    <div className="tqs_sqm_container">
      <div
        className="tqs_sqm_input_container"
        style={{
          borderBottomLeftRadius: "20px",
          borderBottomRightRadius: "20px",
          marginBottom: "2%",
          padding: "1.6% 0",
        }}
      >
        <div className="tqs_sqm_input_label">
          <p className="tqs_sqm_input_text">{t("Rating")}</p>
        </div>
        <div className="tqs_sqm_input_input">
          <Rating
            name="rating"
            value={rating}
            onChange={(_, __) => {
              setRating(__);
            }}
          />
        </div>
      </div>
      <div
        className="tqs_sqm_textarea_container"
        style={{
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px",
          marginBottom: "2%",
        }}
      >
        <div className="tqs_sqm_textarea_label">
          <p className="tqs_sqm_input_text">{t("Details")}</p>
        </div>
        <div className="tqs_sqm_input_input">
          <textarea
            className="tqs_sqm_textarea_textarea"
            placeholder={t("Describe about submit report")}
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />
        </div>
      </div>
      <div
        className="pa_profile_section_input_container"
        style={{
          borderRadius: "20px",
          marginBottom: "2%",
          width: "100%",
          padding: "1.6% 0",
        }}
      >
        <div className="pa_profile_section_input_label">
          <p className="pa_profile_section_input_text">{t("Attachments")}</p>
        </div>
        <div className="pa_profile_section_input_input">
          <label className="upload-pic-label">
            <input
              type="file"
              accept="image/*"
              hidden
              id="filePicker"
              name="file"
              onChange={handleFileSelect}
            />
            <div className="upload-img-text-cont">
              <span className="upload-img-text">
                {attachment?.name ?? "Upload Drawing, Photo, Document, etc"}
              </span>
              <img src={UploadSVG} />
            </div>
          </label>
        </div>
      </div>
      <div className="tvqs_sq_buttons">
        <CustomButton
          text={t("Cancel")}
          style={{
            boxShadow: "none",
            marginRight: "10pt",
          }}
          onClick={props.handleClose}
        />
        <CustomButton
          text={t("Complete")}
          style={{
            boxShadow: "none",
          }}
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
};

export default TailorViewOrderScreen;
