import React, { useState } from "react";
import ClientAppBar from "../../components/ClientAppBar";
import measurementone from "../../assets/measurementone.svg";
import measurementtwo from "../../assets/measurementtwo.svg";
import videotut from "../../assets/videotut.svg";
import youtubeicon from "../../assets/youtubeicon.svg";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { useTranslation } from "react-i18next";

import * as ParseAd from "../../components/ParseAd";
function Measurements() {
  const { t } = useTranslation();

  const [activeStep, setActiveStep] = useState(0);
  const steps = ["Circumference", "Length"];

  const Circumference = () => {
    setActiveStep(0);
  };
  const Length = () => {
    setActiveStep(1);
  };
  return (
    <>
      <ClientAppBar />
      {/* start */}
      <div
        className="client_create_ad_screen_top measurements_create_ad_screen_top"
        style={{
          background: "#FFEEEA",
        }}
      >
        <div className="client_create_ad_screen_column1">
          <p
            style={{
              fontSize: "36px",
              fontWeight: "900",
              marginBottom: "8%",
            }}
          >
            {t("Get a tape")} <br /> <span> {t("Measure")} </span>
          </p>
          <img style={{ width: "70%" }} />
        </div>
        <div className="client_create_ad_screen_column2">
          <div
            className="pa_container"
            style={{
              marginTop: "8.5%",
            }}
          >
            <div style={{ paddingBottom: "5%" }} className="pa_steps_row">
              <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((v, i) => (
                  <Step key={v}>
                    <StepLabel onClick={() => setActiveStep(i)}>{v}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </div>
            <div className="pa_content_row">
              {activeStep == 0 ? (
                <ParseAd.Circumference
                  // state={basicSection}
                  // setState={setBasicSection}
                  onClick={Circumference}
                />
              ) : activeStep == 1 ? (
                <ParseAd.Length
                  // state={deliverySection}
                  // setState={setDeliverySection}
                  onClick={Length}
                />
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* end */}
      <div className="measurements-container">
        <div> </div>
        <div className="m-cont">
          <p className="m-one-text">
            {t(
              "Important: If you hesitate between two sizes, take the larger one."
            )}
          </p>
          <img src={measurementone} />
        </div>
        <div className="m-cont">
          <p>{t("Standard Size Chart")}</p>
          <img src={measurementtwo} />
        </div>
        <div className="m-cont">
          <p>{t("Video Tutorial")}</p>
          <div className="utube-icon-container">
            <img className="utube-icon" src={youtubeicon} />
            <img className="video-img" src={videotut} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Measurements;
