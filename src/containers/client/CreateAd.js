import React, { useState } from "react";

import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

import AdElaborationSVG from "../../assets/AdElaboration.svg";

import ClientAppBar from "../../components/ClientAppBar";
import * as ParseAd from "../../components/ParseAd";

import Api from "../../api/index";

import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

import * as FormValidations from "../../utils/Validations";

const steps = [
  'Basic',
  'Delivery',
  'Notes',
];

function ClientCreateAdScreen(){

  const navigate = useNavigate();

  const [activeStep, setActiveStep] = useState(0);
  const [basicSection, setBasicSection] = useState({
    gender: "",
    category: "",
    name: "",
    cut: "",
    measurements: "",
    color: "",
    fabric: ""
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
    note: "",
    min_price: "",
    max_price: "",
  });

  const basicSectionCallback = () => {
    const isValidated = FormValidations.parseAdBasicSection(basicSection);
    if (!isValidated) {
      return;
    }
    setActiveStep(1);
  }

  const deliverySectionCallback = () => {
    const isValidated = FormValidations.parseAdDeliverySection(deliverySection);
    if (!isValidated) {
      return;
    }
    setActiveStep(2);
  }

  const navToMyAds = () => {
    navigate("my_ads");
  }

  return (
    <>
    {console.log(deliverySection)}
    <div className="container">
      <ClientAppBar
        activeTab={2}
        color="#FFFAF9"
      />
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
              marginBottom: "8%"
            }}
          >
            Place Your Ad
          </p>
          <img style={{ width: "70%" }} src={AdElaborationSVG} />
        </div>
        <div className="client_create_ad_screen_column2">
          <div
            className="pa_container"
            style={{
              marginTop: "10%"
            }}
          >
            <div className="pa_steps_row">
              <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((v, i) => (
                  <Step key={v}>
                    <StepLabel onClick={() => setActiveStep(i)}>{v}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </div>
            <div className="pa_content_row">
              {
                activeStep == 0
                ? <ParseAd.BasicSection
                    state={basicSection}
                    setState={setBasicSection}
                    onClick={basicSectionCallback}
                  />
                : activeStep == 1
                ? <ParseAd.DeliverySection
                    state={deliverySection}
                    setState={setDeliverySection}
                    onClick={deliverySectionCallback}
                  />
                : activeStep == 2
                ? <ParseAd.NotesSection
                    onClick={() => navToMyAds()}
                  />
                : <></>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}


export default ClientCreateAdScreen;