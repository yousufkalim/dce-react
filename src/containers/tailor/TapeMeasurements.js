import React from "react";
import CustomInput from "../../components/CustomInput";

const TapeMeasurements = ({state}) => {
  return (
    <>
     
      <div
        style={{ display: "flex", justifyContent: "center", padding: "2% 0%", marginBottom:"0%" }}
        className="custom_input_label"
      >
        Tape Measurements
      </div>
      <div className="measurement-container">
        <div className="container-circumference">
          <p className="heading-measurements"> Circumference </p>
          <div
            className="pa_profile_section_input_container"
            style={{
              borderRadius: "20px",
              marginBottom: "2%",
            }}
          >
            <div className="pa_profile_section_input_label">
              <p className="pa_profile_section_input_text">Arm</p>
            </div>
            <div className="pa_profile_section_input_input">
              <CustomInput
                disabled
                labelStyle={{
                  display: "none",
                }}
                inputStyle={{
                  border: "none",
                  fontSize: "12px",
                }}
                inputPlaceholder="Select size"
                inputDefaultValue={state?.ArmCirmunference}
              />
            </div>
          </div>
          <div
            className="pa_profile_section_input_container"
            style={{
              borderRadius: "20px",
              marginBottom: "2%",
            }}
          >
            <div className="pa_profile_section_input_label">
              <p className="pa_profile_section_input_text">Chest size</p>
            </div>
            <div className="pa_profile_section_input_input">
              <CustomInput
                disabled
                labelStyle={{
                  display: "none",
                }}
                inputStyle={{
                  border: "none",
                  fontSize: "12px",
                }}
                inputPlaceholder="Select size"
                inputDefaultValue={state?.ChestCirmunferenc}
              />
            </div>
          </div>
          <div
            className="pa_profile_section_input_container"
            style={{
              borderRadius: "20px",
              marginBottom: "2%",
            }}
          >
            <div className="pa_profile_section_input_label">
              <p className="pa_profile_section_input_text">Waist size</p>
            </div>
            <div className="pa_profile_section_input_input">
              <CustomInput
                disabled
                labelStyle={{
                  display: "none",
                }}
                inputStyle={{
                  border: "none",
                  fontSize: "12px",
                }}
                inputPlaceholder="Select size"
                 inputDefaultValue={state?.WaistCirmunferenc}
              />
            </div>
          </div>
          <div
            className="pa_profile_section_input_container"
            style={{
              borderRadius: "20px",
              marginBottom: "2%",
            }}
          >
            <div className="pa_profile_section_input_label">
              <p className="pa_profile_section_input_text">Hip</p>
            </div>
            <div className="pa_profile_section_input_input">
              <CustomInput
                disabled
                labelStyle={{
                  display: "none",
                }}
                inputStyle={{
                  border: "none",
                  fontSize: "12px",
                }}
                inputPlaceholder="Select size"
                 inputDefaultValue={state?.HipCirmunferenc}
              />
            </div>
          </div>
          <div
            className="pa_profile_section_input_container"
            style={{
              borderRadius: "20px",
              marginBottom: "2%",
            }}
          >
            <div className="pa_profile_section_input_label">
              <p className="pa_profile_section_input_text">Thigh</p>
            </div>
            <div className="pa_profile_section_input_input">
              <CustomInput
                disabled
                labelStyle={{
                  display: "none",
                }}
                inputStyle={{
                  border: "none",
                  fontSize: "12px",
                }}
                inputPlaceholder="Select size"
                 inputDefaultValue={state?.ThighCirmunferenc}
              />
            </div>
          </div>
          <div
            className="pa_profile_section_input_container"
            style={{
              borderRadius: "20px",
              marginBottom: "2%",
            }}
          >
            <div className="pa_profile_section_input_label">
              <p className="pa_profile_section_input_text">Calf</p>
            </div>
            <div className="pa_profile_section_input_input">
              <CustomInput
               disabled
                labelStyle={{
                  display: "none",
                }}
                inputStyle={{
                  border: "none",
                  fontSize: "12px",
                }}
                inputPlaceholder="Select size"
                inputDefaultValue={state?.CalfCirmunferenc}
                 />
            </div>
          </div>
          <div
            className="pa_profile_section_input_container"
            style={{
              borderRadius: "20px",
              marginBottom: "2%",
            }}
          >
            <div className="pa_profile_section_input_label">
              <p className="pa_profile_section_input_text">Ankle</p>
            </div>
            <div className="pa_profile_section_input_input">
              <CustomInput
              disabled
                labelStyle={{
                  display: "none",
                }}
                inputStyle={{
                  border: "none",
                  fontSize: "12px",
                }}
                inputPlaceholder="Select size"
                inputDefaultValue={state?.AnkleCirmunferenc}
              />
            </div>
          </div>
        </div>

        <div className="container-length">
          <p className="heading-measurements">Length</p>
          <div
            className="pa_profile_section_input_container"
            style={{
              borderRadius: "20px",
              marginBottom: "2%",
            }}
          >
            <div className="pa_profile_section_input_label">
              <p className="pa_profile_section_input_text measurement_profile_section">
                Head to floor height
              </p>
            </div>
            <div className="pa_profile_section_input_input">
              <CustomInput
                //disabled={disabled}
                labelStyle={{
                  display: "none",
                }}
                inputStyle={{
                  border: "none",
                  fontSize: "12px",
                }}
                inputPlaceholder="Select size"
                inputDefaultValue={state?.HeadToFloorLengt}
              />
            </div>
          </div>
          <div
            className="pa_profile_section_input_container"
            style={{
              borderRadius: "20px",
              marginBottom: "2%",
            }}
          >
            <div className="pa_profile_section_input_label">
              <p className="pa_profile_section_input_text measurement_profile_section">
                From shoulder to floor
              </p>
            </div>
            <div className="pa_profile_section_input_input">
              <CustomInput
                disabled
                labelStyle={{
                  display: "none",
                }}
                inputStyle={{
                  border: "none",
                  fontSize: "12px",
                }}
                inputPlaceholder="Select size"
                inputDefaultValue={state?.ShoulderToFloorLengt}
              />
            </div>
          </div>
          <div
            className="pa_profile_section_input_container"
            style={{
              borderRadius: "20px",
              marginBottom: "2%",
            }}
          >
            <div className="pa_profile_section_input_label">
              <p className="pa_profile_section_input_text measurement_profile_section">
                From waist to floor
              </p>
            </div>
            <div className="pa_profile_section_input_input">
              <CustomInput
                disabled
                labelStyle={{
                  display: "none",
                }}
                inputStyle={{
                  border: "none",
                  fontSize: "12px",
                }}
                inputPlaceholder="Select size"
                inputDefaultValue={state?.WaistToFloorLengt}
              />
            </div>
          </div>
          <div
            className="pa_profile_section_input_container"
            style={{
              borderRadius: "20px",
              marginBottom: "2%",
            }}
          >
            <div className="pa_profile_section_input_label">
              <p className="pa_profile_section_input_text measurement_profile_section">
                Arm length <span style={{ color: "#A0A0A0" }}> (handle) </span>
              </p>
            </div>
            <div className="pa_profile_section_input_input">
              <CustomInput
                disabled
                labelStyle={{
                  display: "none",
                }}
                inputStyle={{
                  border: "none",
                  fontSize: "12px",
                }}
                inputPlaceholder="Select size"
                inputDefaultValue={state?.ArmLengt}
              />
            </div>
          </div>
          <div
            className="pa_profile_section_input_container"
            style={{
              borderRadius: "20px",
              marginBottom: "2%",
            }}
          >
            <div className="pa_profile_section_input_label">
              <p className="pa_profile_section_input_text measurement_profile_section">
                Leg length
              </p>
            </div>
            <div className="pa_profile_section_input_input">
              <CustomInput
               disabled
                labelStyle={{
                  display: "none",
                }}
                inputStyle={{
                  border: "none",
                  fontSize: "12px",
                }}
                inputPlaceholder="Select size"
                inputDefaultValue={state?.LegLengt}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TapeMeasurements;
