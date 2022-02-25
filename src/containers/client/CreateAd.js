import React, { useState } from "react";

import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

import AdElaborationSVG from "../../assets/AdElaboration.svg";

import AppBar from "../../components/AppBar";
import * as ParseAd from "../../components/ParseAd";

import { useNavigate } from "react-router-dom";

const steps = [
  'Basic',
  'Delivery',
  'Notes',
];

function ClientCreateAdScreen(){

  const navigate = useNavigate();

  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="container">
      <AppBar
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
                {steps.map((label, index) => (
                  <Step key={label}>
                    <StepLabel onClick={() => setActiveStep(index)}>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </div>
            <div className="pa_content_row">
              {
                activeStep == 0
                ? <ParseAd.BasicSection />
                : activeStep == 1
                ? <ParseAd.DeliverySection />
                : activeStep == 2
                ? <ParseAd.NotesSection />
                : <></>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default ClientCreateAdScreen;