import React, { useState, useEffect } from "react";

import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

import AdEdit1SVG from "../../assets/AdEdit1.svg";
import AdEdit2SVG from "../../assets/AdEdit2.svg";
import AdEdit3SVG from "../../assets/AdEdit3.svg";

import ClientAppBar from "../../components/ClientAppBar";
import * as ParseAd from "../../components/ParseAd";
import CustomButton from "../../components/CustomButton";

import Api from "../../api";
import { useNavigate, useParams } from "react-router-dom";

import { toast } from "react-toastify";

import * as FormValidations from "../../utils/Validations";

const steps = [
  'Basic',
  'Delivery',
  'Notes',
];

function OrderFromCatalogScreen(){

  const navigate = useNavigate();
  const params = useParams();

  const [isProcessing, setIsProcessing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [catalog, setCatalog] = useState(null);
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
    price: "",
  });

  const _setNotesSection = (key, value) => {
    const obj = {};
    obj[key] = value;
    setNotesSection({
      ...notesSection,
      ...obj
    });
  }

  useEffect(() => {
    getCatalog();
  }, []);

  // func to get current project
  const getCatalog = async () => {
    let response;
    try {
      response = await Api("get", `/catalogs/${params.id}`);
      const catalogData = response.data.catalog;
      setCatalog(catalogData);
      setBasicSection({
        ...basicSection,
        gender: catalogData.gender,
        category: catalogData.category,
        name: catalogData.name,
      });
      setNotesSection({
        price: catalogData.price,
      });
    } catch (e) {
      console.trace(e);
    }
    setIsLoading(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const isValidated =
    FormValidations.parseAdBasicSection(basicSection) &&
    FormValidations.parseAdDeliverySection(deliverySection);
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
        "type": "direct",
        "tailor": catalog.tailor._id,
        "gender": basicSection.gender,
        "category": basicSection.category,
        "name": basicSection.name,
        "cut": basicSection.cut,
        "measurements": basicSection.measurements,
        "color": basicSection.color,
        "fabric": basicSection.fabric,
        "delivery": {
          "address": deliverySection.address,
          "country": deliverySection.country,
          "city": deliverySection.city,
          "note": deliverySection.note,
          "type": deliverySection.type,
          "date": "2022/02/25"
        },
        "note": notesSection.note,
        "budget": {
          "min_price": notesSection.price,
          "max_price": notesSection.price
        }
      }

      console.log(body);

      response = await Api("post", `/orders`, body);

      if (response?.data?.success) {
        toast.success("Order created successfully.");
        navToMyAds();
      }
    } catch (e) {
      console.trace(e);
    }

    setIsProcessing(false);

  }

  const navToMyAds = () => {
    navigate("/my_ads");
  }

  return (
    <>
      {
        isLoading
        ? <></>
        : <div className="container-page">
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
                    Place Order
                  </p>
                  <p
                    style={{
                      fontSize: "30px",
                      fontWeight: "900",
                      marginBottom: "20%",
                    }}
                  >
                    {basicSection.name}
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
                      <ParseAd.BasicSection
                        state={basicSection}
                        setState={setBasicSection}
                        disables={["gender", "category", "name"]}
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
                      <div className="pa_profile_section_container">
                        <div
                          className="pa_payment_section_textarea_container"
                          style={{
                            borderRadius: "20px",
                            marginBottom: "2%"
                          }}
                        >
                          <div className="pa_payment_section_textarea_label">
                            <p className="pa_profile_section_input_text">
                              Extra Note
                            </p>
                          </div>
                          <div className="pa_profile_section_input_input">
                            <textarea
                              className="pa_profile_section_textarea_textarea"
                              defaultValue={notesSection.note}
                              onChange={e => _setNotesSection("note", e.target.value)}
                            >
                            </textarea>
                          </div>
                        </div>
                        <div
                          className="pa_payment_section_input_container"
                          style={{
                            borderRadius: "20px",
                            marginBottom: "2%"
                          }}
                        >
                          <div className="pa_payment_section_input_label">
                            <p className="pa_payment_section_input_text">
                              Catalog Price
                            </p>
                          </div>
                          <div className="pa_payment_section_input_input_container">
                            <input
                              disabled
                              className="pa_payment_section_input_input"
                              type="number"
                              defaultValue={notesSection.price}
                              onChange={e => _setNotesSection("rice", e.target.value)}
                            />
                          </div>
                        </div>
                        <CustomButton
                          text="Place this Order"
                          onClick={handleSubmit}
                          style={{
                            marginBottom: "2%",
                            padding: "1.2% 5%",
                            boxShadow: "none"
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      }
    </>
    
  );
}

export default OrderFromCatalogScreen;