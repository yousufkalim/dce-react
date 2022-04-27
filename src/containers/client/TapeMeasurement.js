import React, { useEffect, useState } from "react";

import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

import MeasuremenToneSVG from "../../assets/measurementone.svg";
import measurementTwoSVG from "../../assets/measurementtwo.svg";
import VideotutSVG from "../../assets/videotut.svg";
import YoutubeIconSVG from "../../assets/youtubeicon.svg";

import ClientAppBar from "../../components/ClientAppBar";
import Footer from "../../components/Footer";

import * as ParseMeasurement from "../../components/ParseMeasurement";

import Api from "../../api/index";

import { useNavigate, useLocation } from "react-router-dom";

import { toast } from "react-toastify";

import * as FormValidations from "../../utils/Validations";

const steps = ["Circumference", "Length"];

function ClientTapeMeasurementScreen() {
  const navigate = useNavigate();
  const location = useLocation();

  const state = location.state;

  const [isProcessing, setIsProcessing] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  const [circumferenceSection, setCircumferenceSection] = useState({
    arm: "",
    chest: "",
    waist: "",
    hip: "",
    thigh: "",
    calf: "",
    ankle: "",
  });
  const [lengthSection, setLengthSection] = useState({
    head_to_floor: "",
    shoulder_to_floor: "",
    waist_to_floor: "",
    arm_length: "",
    leg_length: "",
  });

  useEffect(() => {
    // TODO: Ad the check for state here.
  }, []);

  const circumferenceSectionCallback = () => {
    const isValidated =
      FormValidations.parseMeasurementCircumferenceSection(
        circumferenceSection
      );
    if (!isValidated) {
      return;
    }
    setActiveStep(1);
  };

  const lengthSectionCallback = async (event) => {
    event.preventDefault();

    const isValidated =
      FormValidations.parseMeasurementCircumferenceSection(
        circumferenceSection
      ) && FormValidations.parseMeasurementLengthSection(lengthSection);
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
        measurements: measurmentsObjMaker(),
      }; // TODO: Change this to string of measurements field and call accept quote API here.
      let line_items = [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: "Order",
            },
            unit_amount: state.quote.price * 100,
          },
          quantity: 1,
        },
      ];
      let measurements = JSON.stringify(body.measurements);
      console.log(measurements, "m");
      getSessionUrl(state.quote, line_items, measurements);
    } catch (e) {
      console.trace(e);
    }

    setIsProcessing(false);
  };

  const getSessionUrl = async (quote, line_items, measurements) => {
    try {
      let id = quote._id;
      let type = "tape";
      let response = await Api("post", "/payments/Checkout", {
        line_items: line_items,
        metaData: { id, type, measurements },
      });
      window.location = response.data.url;
    } catch (e) {
      console.trace(e);
    }
  };

  const measurmentsObjMaker = () => {
    let DATA = {
      ArmCirmunference: circumferenceSection.arm,
      ChestCirmunferenc: circumferenceSection.chest,
      WaistCirmunferenc: circumferenceSection.waist,
      HipCirmunferenc: circumferenceSection.hip,
      ThighCirmunferenc: circumferenceSection.thigh,
      CalfCirmunferenc: circumferenceSection.calf,
      AnkleCirmunferenc: circumferenceSection.ankle,
      HeadToFloorLengt: lengthSection.head_to_floor,
      ShoulderToFloorLengt: lengthSection.shoulder_to_floor,
      WaistToFloorLengt: lengthSection.waist_to_floor,
      ArmLengt: lengthSection.arm_length,
      LegLengt: lengthSection.leg_length,
    };
    return DATA;
  };

  const navToOrders = () => {
    navigate("/orders");
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
          <div
            className="client_create_ad_screen_column1"
            style={{
              paddingTop: "22vh",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <p
              style={{
                fontSize: "40px",
                fontWeight: "900",
              }}
            >
              Get a tape
            </p>
            <p
              style={{
                fontSize: "40px",
                fontWeight: "900",
                marginBottom: "8%",
              }}
            >
              Measure
            </p>
          </div>
          <div className="client_create_ad_screen_column2">
            <div
              className="pa_container"
              style={{
                marginTop: "8.5%",
              }}
            >
              <div
                className="pa_steps_row"
                style={{
                  paddingBottom: "4%",
                }}
              >
                <Stepper activeStep={activeStep} alternativeLabel>
                  {steps.map((v, i) => (
                    <Step key={v}>
                      <StepLabel onClick={() => setActiveStep(i)}>
                        {v}
                      </StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </div>
              <div className="pa_content_row">
                {activeStep == 0 ? (
                  <ParseMeasurement.CircumferenceSection
                    state={circumferenceSection}
                    setState={setCircumferenceSection}
                    onClick={circumferenceSectionCallback}
                  />
                ) : activeStep == 1 ? (
                  <ParseMeasurement.LengthSection
                    state={lengthSection}
                    setState={setLengthSection}
                    onClick={lengthSectionCallback}
                  />
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="measurements-container">
          <div> </div>
          <div className="m-cont">
            <p className="m-one-text">
              Important: If you hesitate between two sizes, take the larger one.
            </p>
            <img src={MeasuremenToneSVG} />
          </div>
          <div className="m-cont">
            <p>Standard Size Chart</p>
            <img src={measurementTwoSVG} />
          </div>
          <div className="m-cont">
            <p>Video Tutorial</p>
            <div className="utube-icon-container">
              <img className="utube-icon" src={YoutubeIconSVG} />
              <img className="video-img" src={VideotutSVG} />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default ClientTapeMeasurementScreen;
