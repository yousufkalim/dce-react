import React, { useState, useEffect } from "react";

import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { useTranslation } from "react-i18next";

import AdEdit1SVG from "../../assets/AdEdit1.svg";
import AdEdit2SVG from "../../assets/AdEdit2.svg";
import AdEdit3SVG from "../../assets/AdEdit3.svg";

import TailorAppBar from "../../components//TailorAppBar";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import Footer from "../../components/Footer";
import * as ParseAd from "../../components/ParseAd";

import { getUser } from "../../utils/Auth";
import Api from "../../api";
import { useNavigate, useParams } from "react-router-dom";

import { toast } from "react-toastify";

import * as FormValidations from "../../utils/Validations";

const steps = ["Basic", "Delivery", "Notes"];

function TailorViewQuoteScreen() {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const params = useParams();

  const [isProcessing, setIsProcessing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const user = getUser();

  const [ad, setAd] = useState(null);
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

  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    getAd();
  }, []);

  // func to get current project
  const getAd = async () => {
    let response;
    try {
      response = await Api("get", `/orders/${params.id}`);
      const adData = response.data.order;
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

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (ad.quotes.some((_) => _.tailor._id == user._id)) {
      toast.error(t("You have already sent quote for this ad."));
      return;
    }

    const isValidated = FormValidations.sendQuote({
      price,
      description,
    });

    if (!isValidated) {
      return;
    }

    if (isProcessing) {
      return;
    }

    let response;

    try {
      setIsProcessing(true);

      const body = {
        order: params.id,
        price: price,
        description: description,
      };

      response = await Api("post", `/quotes`, body);

      if (response?.data?.success) {
        toast.success(t("Quote sent successfully."));
        navToQuotes();
      }
    } catch (e) {
      console.trace(e);
    }

    setIsProcessing(false);
  };

  const navToQuotes = () => {
    navigate("/quotes");
  };

  const navToChat = () => {
    navigate(`/chat`, { state: { directUser: ad.client } });
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
                      disabled
                      state={basicSection}
                      setState={setBasicSection}
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
                      disabled
                      state={notesSection}
                      setState={setNotesSection}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              height: "80vh",
              width: "100vw",
              background: "#FFEEEA",
            }}
          >
            <div className="client_edit_ad_screen_row1">
              <div className="tvqs_sq_container">
                <div
                  className="tqs_sqm_input_container"
                  style={{
                    borderBottomLeftRadius: "20px",
                    borderBottomRightRadius: "20px",
                    marginBottom: "2%",
                  }}
                >
                  <div className="tqs_sqm_input_label">
                    <p className="tqs_sqm_input_text">{t("Price")}</p>
                  </div>
                  <div className="tqs_sqm_input_input">
                    <CustomInput
                      inputType="number"
                      labelStyle={{
                        display: "none",
                      }}
                      inputStyle={{
                        border: "none",
                        fontSize: "12px",
                      }}
                      inputPlaceholder={t("Set Your Price")}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </div>
                </div>
                <div
                  className="tqs_sqm_textarea_container"
                  style={{
                    borderTopLeftRadius: "20px",
                    borderTopRightRadius: "20px",
                    marginBottom: "10%",
                  }}
                >
                  <div className="tqs_sqm_textarea_label">
                    <p className="tqs_sqm_input_text">{t("Description")}</p>
                  </div>
                  <div className="tqs_sqm_input_input">
                    <textarea
                      className="tqs_sqm_textarea_textarea"
                      placeholder={t("Tell us")}
                      onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                  </div>
                </div>
                <div className="tvqs_sq_buttons">
                  <CustomButton
                    text={"Send Offer"}
                    style={{
                      boxShadow: "none",
                      marginRight: "10pt",
                    }}
                    onClick={handleSubmit}
                  />
                  <CustomButton
                    text={t("Chat Here")}
                    style={{
                      boxShadow: "none",
                    }}
                    onClick={navToChat}
                  />
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

export default TailorViewQuoteScreen;
