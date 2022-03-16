import React from "react";

import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

import AdEdit1SVG from "../../assets/AdEdit1.svg";
import AdEdit2SVG from "../../assets/AdEdit2.svg";
import AdEdit3SVG from "../../assets/AdEdit3.svg";

import ClientAppBar from "../../components/ClientAppBar";
import * as ParseAd from "../../components/ParseAd";

import { useNavigate } from "react-router-dom";

const steps = [
  'Basic',
  'Delivery',
  'Notes',
];

function ClientEditAdScreen(){

  const navigate = useNavigate();

  return (
    <div className="container-page">
      <ClientAppBar
        color="#F8F4EF"
        activeTab={2}
      />
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
                marginTop: "10%"
              }}
            >
              <div className="pa_steps_row">
                <Stepper activeStep={0} alternativeLabel>
                  {steps.map((label, index) => (
                    <Step key={label}>
                      <StepLabel onClick={() => setActiveStep(index)}>{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </div>
              <div className="pa_content_row">
                <ParseAd.BasicSection noButton />
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
                marginTop: "10%"
              }}
            >
              <div className="pa_steps_row">
                <Stepper activeStep={1} alternativeLabel>
                  {steps.map((label, index) => (
                    <Step key={label}>
                      <StepLabel onClick={() => setActiveStep(index)}>{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </div>
              <div className="pa_content_row">
                <ParseAd.DeliverySection noButton />
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
                marginTop: "10%"
              }}
            >
              <div className="pa_steps_row">
                <Stepper activeStep={2} alternativeLabel>
                  {steps.map((label, index) => (
                    <Step key={label}>
                      <StepLabel onClick={() => setActiveStep(index)}>{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </div>
              <div className="pa_content_row">
                <ParseAd.NotesSection noButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientEditAdScreen;