import React from "react";

import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

import AdElaborationSVG from "../../assets/AdElaboration.svg";

import AppBar from "../../components/AppBar";

import { useNavigate } from "react-router-dom";

const steps = [
  'Basic',
  'Delivery',
  'Notes',
];

function ClientMyAdsScreen(){

  const navigate = useNavigate();

  const [activeStep, setActiveStep] = React.useState(0);

  return (
    <div className="container">
      <AppBar
        activeTab={2}
        color="#FFFAF9"
      />
      <div
        className="client_myads_screen_top"
        style={{
          background: "#FFEEEA",
        }}
      >
        <div className="client_myads_screen_column1">
          <div>
            <p
              style={{
                fontSize: "30px",
                fontWeight: "900",
                marginLeft: "35%",
                marginBottom: "25%"
              }}
            >
              Place Your Ad
            </p>
            <img style={{ width: "80%" }} src={AdElaborationSVG} />
          </div>
        </div>
        <div className="client_myads_screen_column2">
          <div
            className="cas_profile_container"
            style={{
              marginTop: "10%"
            }}
          >
            <div
              className="client_myads_screen_column2_row1"
            >
              <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label, index) => (
                  <Step key={label}>
                    <StepLabel onClick={() => setActiveStep(index)}>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </div>
            <div
              className="client_myads_screen_column2_row2"
            >
              <p>Section {activeStep + 1}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default ClientMyAdsScreen;