import React from "react";

import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

import AdEdit1SVG from "../../assets/AdEdit1.svg";
import AdEdit2SVG from "../../assets/AdEdit2.svg";
import AdEdit3SVG from "../../assets/AdEdit3.svg";

import TailorAppBar from "../../components//TailorAppBar";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import Footer from "../../components/Footer";
import * as ParseAd from "../../components/ParseAd";

import { useNavigate } from "react-router-dom";

const steps = [
  'Basic',
  'Delivery',
  'Notes',
];

function TailorViewQuoteScreen(){

  const navigate = useNavigate();

  return (
    <div className="container-page">
      <TailorAppBar
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
              Client Basic
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
                <ParseAd.NotesSection noButton noCheckbox />
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
              marginBottom: "2%"
            }}
          >
            <div className="tqs_sqm_input_label">
              <p className="tqs_sqm_input_text">
                Price
              </p>
            </div>
            <div className="tqs_sqm_input_input">
              <CustomInput
                labelStyle={{
                  display: "none"
                }}
                inputStyle={{
                  border: "none",
                  fontSize: "12px"
                }}
                inputPlaceholder="Set Your Price"
              />
            </div>
          </div>
          <div
            className="tqs_sqm_textarea_container"
            style={{
              borderTopLeftRadius: "20px",
              borderTopRightRadius: "20px",
              marginBottom: "10%"
            }}
          >
            <div className="tqs_sqm_textarea_label">
              <p className="tqs_sqm_input_text">
                Description
              </p>
            </div>
            <div className="tqs_sqm_input_input">
              <textarea
                className="tqs_sqm_textarea_textarea"
                placeholder="Tell us"
              >
              </textarea>
            </div>
          </div>
          <div className="tvqs_sq_buttons">
            <CustomButton
              text="Send Offer"
              style={{
                boxShadow: "none",
                marginRight: "10pt"
              }}
            />
            <CustomButton
              text="Chat Here"
              style={{
                boxShadow: "none",
              }}
            />
          </div>
        </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default TailorViewQuoteScreen;