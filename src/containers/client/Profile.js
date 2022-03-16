import React from "react";

import UserSVG from "../../assets/User.svg";
import DesignElaborationSVG from "../../assets/DesignElaboration.svg";

import ProfileBirthdaySVG from "../../assets/ProfileBirthday.svg";
import ProfileCitySVG from "../../assets/ProfileCity.svg";
import ProfileCountrySVG from "../../assets/ProfileCountry.svg";
import ProfileEmailSVG from "../../assets/ProfileEmail.svg";
import ProfileLocationSVG from "../../assets/ProfileLocation.svg";
import ProfilePhoneSVG from "../../assets/ProfilePhone.svg";

import ClientAppBar from "../../components/ClientAppBar";

import { useNavigate } from "react-router-dom";

function ClientProfileScreen(){

  const navigate = useNavigate();

  return (
    <div className="container">
      <ClientAppBar
        color="#FCFCFC"
      />
      <div
        className="client_profile_screen_top"
        style={{
          background: "linear-gradient(to left top, #EEE9DC 0%, #F0EEEB 50%, #EEEEEE 100%), linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 1))",
        }}
      >
        <div className="client_profile_screen_row1">
          <p className="client_profile_screen_row1_text" style={{paddingLeft: "3%"}}>
            Profile
          </p>
        </div>
        <div className="client_profile_screen_row2">
          <div className="client_profile_screen_row2_column1">
            <div>
              <img style={{ width: "80%" }} src={DesignElaborationSVG} />
            </div>
          </div>
          <div className="client_profile_screen_row2_column2">
            <div className="cps_profile_container">
              <div className="cps_profile_img" style={{ paddingBottom: "2%" }}>
                <img style={{ width: "12%" }} src={UserSVG} />
              </div>
              <p className="cps_profile_text" style={{ paddingBottom: "10px" }}>
                Maria. B
              </p>
              <ProfileInput
                name="Phone"
                placeholder="Phone"
                defaultValue="+92 312 4967890"
                img={ProfilePhoneSVG}
                divStyle={{
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px"
                }}
              />
              <ProfileInput
                name="Email"
                placeholder="Email"
                defaultValue="falcon@designcreation.com"
                img={ProfileEmailSVG}
              />
              <ProfileInput
                name="Date Of Birth"
                placeholder="Date Of Birth"
                defaultValue="2002/11/23"
                img={ProfileBirthdaySVG}
              />
              <ProfileInput
                name="Country"
                placeholder="Country"
                defaultValue="Pakistan"
                img={ProfileCountrySVG}
              />
              <ProfileInput
                name="City"
                placeholder="City"
                defaultValue="Lahore"
                img={ProfileCitySVG}
              />
              <ProfileInput
                name="Location"
                placeholder="Location"
                defaultValue="Johar Town"
                img={ProfileLocationSVG}
                divStyle={{
                  borderBottomLeftRadius: "10px",
                  borderBottomRightRadius: "10px",
                  marginBottom: "2%"
                }}
              />
              <ProfileInput
                name="Last Password Changed"
                placeholder="Last Password Changed"
                defaultValue="13-Dec-2022"
                label="Last Password Changed"
                divStyle={{
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px"
                }}
              />
              <ProfileInput
                name="Password"
                placeholder="**********"
                defaultValue="**********"
                label="Password"
              />
              <ProfileInput
                name="Account Created"
                placeholder="Account Created"
                defaultValue="29-July-2021"
                label="Account Created"
                divStyle={{
                  borderBottomLeftRadius: "10px",
                  borderBottomRightRadius: "10px"
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProfileInput({
  name,
  onChange,
  placeholder,
  defaultValue,
  img,
  label,
  divStyle
}){
  return (
    <div
      className="cps_profile_input_container"
      style={{
        ...divStyle
      }}
    >
      <div
        style={{
          position: "relative",
          height: "100%",
          width: "100%"
        }}
      >
        <input
          className="cps_profile_input_input"
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          defaultValue={defaultValue}
        />
        {
          label
          ? <p
              style={{
                fontSize: "12px",
                fontWeight: "500",
                position: "absolute",
                left: "2%",
                top: "1%"
              }}
            >
              {label}
            </p>
          : <img
              src={img}
              style={{
                width: "16px",
                position: "absolute",
                left: "2%",
                top: "1%"
              }}
            />
        }
      </div>
    </div>
  );
}


export default ClientProfileScreen;