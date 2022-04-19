import React, { useState, useEffect } from "react";

import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

import AdEdit1SVG from "../../assets/AdEdit1.svg";
import AdEdit2SVG from "../../assets/AdEdit2.svg";
import AdEdit3SVG from "../../assets/AdEdit3.svg";

import ClientAppBar from "../../components/ClientAppBar";
import * as ParseAd from "../../components/ParseAd";

import Api from "../../api";
import { useNavigate, useParams } from "react-router-dom";

import { toast } from "react-toastify";

import * as FormValidations from "../../utils/Validations";

const steps = ["Basic", "Delivery", "Notes"];

function ClientEditAdScreen() {
  const navigate = useNavigate();
  const params = useParams();

  const [isProcessing, setIsProcessing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
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

  useEffect(() => {
    getAd();
  }, []);

  // func to get current project
  const getAd = async () => {
    let response;
    try {
      response = await Api("get", `/orders/${params.id}`);
      const adData = response.data.order;
      console.log(adData);
      setBasicSection({
        gender: adData.gender,
        category: adData.category,
        name: adData.name,
        cut: adData.cut,
        measurements: adData.measurements,
        color: adData.color,
        fabric: adData.fabric,
        includes_alteration_services: adData.includes_alteration_services,
      });
      setDeliverySection(adData.delivery);
      setNotesSection(adData.budget);
    } catch (e) {
      console.trace(e);
    }
    setIsLoading(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const isValidated =
      FormValidations.parseAdBasicSection(basicSection) &&
      FormValidations.parseAdDeliverySection(deliverySection) &&
      FormValidations.parseAdNotesSection(notesSection);
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

      response = await Api("put", `/orders/${params.id}`, body);

      if (response?.data?.success) {
        toast.success("Ad updated successfully.");
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

  return (
    <>
      {isLoading ? (
        <></>
      ) : (
        <div className="container-page">
          <ClientAppBar color="#F8F4EF" activeTab={2} />
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
                  Ad Basic
                </p>
                <p
                  style={{
                    fontSize: "30px",
                    fontWeight: "900",
                    marginBottom: "20%",
                  }}
                >
                  Details
                </p>
                <img style={{ width: "55%" }} src={AdEdit1SVG} />
              </div>
              <div className="client_edit_ad_screen_row1_column2">
                <div
                  className="pa_container"
                  style={{
                    marginTop: "10%",
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
                      state={basicSection}
                      setState={setBasicSection}
                      image={image}
                      handleImageSelect={handleImageSelect}
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
                    marginTop: "10%",
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
                  Delivery
                </p>
                <p
                  style={{
                    fontSize: "30px",
                    fontWeight: "900",
                    marginBottom: "20%",
                  }}
                >
                  Details
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
                  Payment
                </p>
                <p
                  style={{
                    fontSize: "30px",
                    fontWeight: "900",
                    marginBottom: "20%",
                  }}
                >
                  Details
                </p>
                <img style={{ width: "20%" }} src={AdEdit3SVG} />
              </div>
              <div className="client_edit_ad_screen_row1_column2">
                <div
                  className="pa_container"
                  style={{
                    marginTop: "10%",
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
                      state={notesSection}
                      setState={setNotesSection}
                      onClick={handleSubmit}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ClientEditAdScreen;
