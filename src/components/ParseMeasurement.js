import React from "react";

import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";

function CircumferenceSection({ state, setState, onClick, disabled }) {
  const _setState = (key, value) => {
    const obj = {};
    obj[key] = value;
    setState({
      ...state,
      ...obj,
    });
  };

  return (
    <>
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
            disabled={disabled}
            labelStyle={{
              display: "none",
            }}
            inputStyle={{
              border: "none",
              fontSize: "12px",
            }}
            inputPlaceholder="Select size"
            inputDefaultValue={state.arm}
            onChange={(e) => _setState("arm", e.target.value)}
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
            disabled={disabled}
            labelStyle={{
              display: "none",
            }}
            inputStyle={{
              border: "none",
              fontSize: "12px",
            }}
            inputPlaceholder="Select size"
            inputDefaultValue={state.chest}
            onChange={(e) => _setState("chest", e.target.value)}
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
            disabled={disabled}
            labelStyle={{
              display: "none",
            }}
            inputStyle={{
              border: "none",
              fontSize: "12px",
            }}
            inputPlaceholder="Select size"
            inputDefaultValue={state.waist}
            onChange={(e) => _setState("waist", e.target.value)}
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
            disabled={disabled}
            labelStyle={{
              display: "none",
            }}
            inputStyle={{
              border: "none",
              fontSize: "12px",
            }}
            inputPlaceholder="Select size"
            inputDefaultValue={state.hip}
            onChange={(e) => _setState("hip", e.target.value)}
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
            disabled={disabled}
            labelStyle={{
              display: "none",
            }}
            inputStyle={{
              border: "none",
              fontSize: "12px",
            }}
            inputPlaceholder="Select size"
            inputDefaultValue={state.thigh}
            onChange={(e) => _setState("thigh", e.target.value)}
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
            disabled={disabled}
            labelStyle={{
              display: "none",
            }}
            inputStyle={{
              border: "none",
              fontSize: "12px",
            }}
            inputPlaceholder="Select size"
            inputDefaultValue={state.calf}
            onChange={(e) => _setState("calf", e.target.value)}
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
            disabled={disabled}
            labelStyle={{
              display: "none",
            }}
            inputStyle={{
              border: "none",
              fontSize: "12px",
            }}
            inputPlaceholder="Select size"
            inputDefaultValue={state.ankle}
            onChange={(e) => _setState("ankle", e.target.value)}
          />
        </div>
      </div>
      <CustomButton
        text={"Save and Next"}
        style={{
          marginTop: "2%",
          marginBottom: "7%",
          padding: "1.5% 5%",
          boxShadow: "none",
          borderRadius: "10px",
        }}
        onClick={onClick}
      />
    </>
  );
}

function LengthSection({ state, setState, onClick, disabled }) {
  const _setState = (key, value) => {
    const obj = {};
    obj[key] = value;
    setState({
      ...state,
      ...obj,
    });
  };

  return (
    <>
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
            disabled={disabled}
            labelStyle={{
              display: "none",
            }}
            inputStyle={{
              border: "none",
              fontSize: "12px",
            }}
            inputPlaceholder="Select size"
            inputDefaultValue={state.head_to_floor}
            onChange={(e) => _setState("head_to_floor", e.target.value)}
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
            disabled={disabled}
            labelStyle={{
              display: "none",
            }}
            inputStyle={{
              border: "none",
              fontSize: "12px",
            }}
            inputPlaceholder="Select size"
            inputDefaultValue={state.shoulder_to_floor}
            onChange={(e) => _setState("shoulder_to_floor", e.target.value)}
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
            disabled={disabled}
            labelStyle={{
              display: "none",
            }}
            inputStyle={{
              border: "none",
              fontSize: "12px",
            }}
            inputPlaceholder="Select size"
            inputDefaultValue={state.waist_to_floor}
            onChange={(e) => _setState("waist_to_floor", e.target.value)}
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
            disabled={disabled}
            labelStyle={{
              display: "none",
            }}
            inputStyle={{
              border: "none",
              fontSize: "12px",
            }}
            inputPlaceholder="Select size"
            inputDefaultValue={state.arm_length}
            onChange={(e) => _setState("arm_length", e.target.value)}
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
            disabled={disabled}
            labelStyle={{
              display: "none",
            }}
            inputStyle={{
              border: "none",
              fontSize: "12px",
            }}
            inputPlaceholder="Select size"
            inputDefaultValue={state.leg_length}
            onChange={(e) => _setState("leg_length", e.target.value)}
          />
        </div>
      </div>
      <CustomButton
        text={"Next"}
        style={{
          marginTop: "2%",
          marginBottom: "7%",
          padding: "1.5% 5%",
          boxShadow: "none",
          borderRadius: "10px",
        }}
        onClick={onClick}
      />
    </>
  );
}

export { CircumferenceSection, LengthSection };
