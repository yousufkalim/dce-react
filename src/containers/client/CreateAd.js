import React, { useState } from "react";

import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

import AdElaborationSVG from "../../assets/AdElaboration.svg";
import { useTranslation } from "react-i18next";

import ClientAppBar from "../../components/ClientAppBar";
import * as ParseAd from "../../components/ParseAd";

import Api from "../../api/index";

import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

import * as FormValidations from "../../utils/Validations";

const steps = ["Basic", "Delivery", "Notes"];

function ClientCreateAdScreen() {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const [isProcessing, setIsProcessing] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [image, setImage] = useState(null);

  const [basicSection, setBasicSection] = useState({
    gender: "",
    category: "",
    name: "",
    cut: "",
    measurements: "",
    color: "",
    fabric: "",
    includes_alteration_services: false,
  });
  const [deliverySection, setDeliverySection] = useState({
    address: "",
    country: "",
    city: "",
    note: "",
    type: "",
    date: "",
  });
  const [notesSection, setNotesSection] = useState({
    type: "",
    min_price: "",
    max_price: "",
    note: "",
  });

  const handleImageSelect = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const basicSectionCallback = () => {
    const isValidated = FormValidations.parseAdBasicSection(basicSection);
    if (!isValidated) {
      return;
    }
    if (!image) {
      toast.error(t("Image must be selected"));
      return;
    }
    setActiveStep(1);
  };

  const deliverySectionCallback = () => {
    const isValidated = FormValidations.parseAdDeliverySection(deliverySection);
    if (!isValidated) {
      return;
    }
    setActiveStep(2);
  };

  const notesSectionCallback = async (event) => {
    event.preventDefault();

    const isValidated =
      FormValidations.parseAdBasicSection(basicSection) &&
      FormValidations.parseAdDeliverySection(deliverySection) &&
      FormValidations.parseAdNotesSection(notesSection);
    if (!isValidated) {
      return;
    }

    if (!image) {
      toast.error(t("Image must be selected"));
      return;
    }

    if (isProcessing) {
      return;
    }

    let response;

    try {
      setIsProcessing(true);

      const body = new FormData();

      body.append("type", "ad");
      body.append("gender", basicSection.gender);
      body.append("category", basicSection.category);
      body.append("name", basicSection.name);
      body.append("cut", basicSection.cut);
      body.append("measurements", basicSection.measurements);
      body.append("color", basicSection.color);
      body.append("fabric", basicSection.fabric);
      body.append(
        "includes_alteration_services",
        basicSection.includes_alteration_services
      );
      body.append(
        "delivery",
        JSON.stringify({
          address: deliverySection.address,
          country: deliverySection.country,
          city: deliverySection.city,
          note: deliverySection.note,
          type: deliverySection.type,
          date: deliverySection.date,
        })
      );
      body.append("note", notesSection.note);
      body.append(
        "budget",
        JSON.stringify({
          type: notesSection.type,
          min_price: notesSection.min_price,
          max_price: notesSection.max_price,
          note: notesSection.note,
        })
      );
      body.append("image", image);

      response = await Api("post", "/orders", body);

      if (response?.data?.success) {
        toast.success(t("Ad created successfully."));
        navToMyAds();
      }
    } catch (e) {
      console.trace(e);
    }

    setIsProcessing(false);
  };

  const navToMyAds = () => {
    navigate("/my_ads");
  };

  const navToCreateAd = () => {
    navigate("/create_ad");
  };

  return (
    <>
      <div className="container">
        <ClientAppBar activeTab={2} color="#FFFAF9" />
        <div
          className="client_create_ad_screen_top"
          style={{
            background: "#FFEEEA",
          }}
        >
          <div className="client_create_ad_screen_column1">
            <p
              style={{
                fontSize: "30px",
                fontWeight: "900",
                marginBottom: "8%",
              }}
              onClick={navToCreateAd}
            >
              {t("Place Your Ad")}
            </p>
            <img style={{ width: "70%" }} src={AdElaborationSVG} />
          </div>
          <div className="client_create_ad_screen_column2">
            <div
              className="pa_container"
              style={{
                marginTop: "8.5%",
              }}
            >
              <div className="pa_steps_row">
                <Stepper activeStep={activeStep} alternativeLabel>
                  {steps.map((v, i) => (
                    <Step key={v}>
                      <StepLabel onClick={() => setActiveStep(i)}>
                        {t(v)}
                      </StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </div>
              <div className="pa_content_row">
                {activeStep == 0 ? (
                  <ParseAd.BasicSection
                    state={basicSection}
                    setState={setBasicSection}
                    onClick={basicSectionCallback}
                    image={image}
                    handleImageSelect={handleImageSelect}
                  />
                ) : activeStep == 1 ? (
                  <ParseAd.DeliverySection
                    state={deliverySection}
                    setState={setDeliverySection}
                    onClick={deliverySectionCallback}
                  />
                ) : activeStep == 2 ? (
                  <ParseAd.NotesSection
                    state={notesSection}
                    setState={setNotesSection}
                    onClick={notesSectionCallback}
                  />
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ClientCreateAdScreen;
