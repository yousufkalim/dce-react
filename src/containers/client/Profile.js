import React, { useState, useEffect } from "react";

import UserSVG from "../../assets/User.svg";
import DesignElaborationSVG from "../../assets/profile.svg";

import ProfileBirthdaySVG from "../../assets/ProfileBirthday.svg";
import ProfileCitySVG from "../../assets/ProfileCity.svg";
import ProfileCountrySVG from "../../assets/ProfileCountry.svg";
import ProfileEmailSVG from "../../assets/ProfileEmail.svg";
import ProfileLocationSVG from "../../assets/ProfileLocation.svg";
import ProfilePhoneSVG from "../../assets/ProfilePhone.svg";
import { useTranslation } from "react-i18next";

import ClientAppBar from "../../components/ClientAppBar";
import CustomButton from "../../components/CustomButton";

import Api from "../../api";

import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

import * as FormValidations from "../../utils/Validations";

import assetsURL from "../../utils/Assets";

function ClientProfileScreen() {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);
  const [profile, setProfile] = useState(null);
  const [profileImage, setProfileImage] = useState(null);

  const [toEdit, setToEdit] = useState(false);

  const [state, setState] = useState({
    phone: "",
    password: undefined,
  });

  const handleImageSelect = (event) => {
    const file = event.target.files[0];
    setProfileImage(file);
  };

  const _setState = (key, value) => {
    const obj = {};
    obj[key] = value;
    setState({
      ...state,
      ...obj,
    });
  };

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    let response;
    try {
      response = await Api("get", `/auth`);
      const userData = response.data.user;
      setProfile(userData);
      setState({
        ...state,
        phone: userData.phone ?? "",
      });
      setIsLoading(false);
    } catch (e) {
      console.trace(e);
    }
    return;
  };

  const toEditCallback = (event) => {
    event.preventDefault();

    if (!toEdit) {
      setToEdit(true);
    } else {
      handleSubmit(event);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const isValidated = FormValidations.clientEditProfile(state);
    if (!isValidated) {
      return;
    }

    if (isProcessing) {
      return;
    }

    let response;

    try {
      setIsProcessing(true);

      const body = new FormData();

      body.append("phone", state.phone);
      if (state.password) {
        body.append("password", state.password);
      }
      body.append("image", profileImage);

      response = await Api("put", "/clients", body);

      if (response?.data?.success) {
        toast.success(t("Profile updated successfully."));
        navToHome();
      }
    } catch (e) {
      console.trace(e);
    }

    setIsProcessing(false);
  };

  const navToHome = () => {
    navigate("/home");
  };

  return (
    <>
      {isLoading ? (
        <></>
      ) : (
        <div className="container">
          <ClientAppBar color="#FCFCFC" />
          <div
            className="client_profile_screen_top"
            style={{
              background:
                "linear-gradient(to left top, #EEE9DC 0%, #F0EEEB 50%, #EEEEEE 100%), linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 1))",
            }}
          >
            <div className="client_profile_screen_row1">
              <p
                className="client_profile_screen_row1_text"
                style={{ paddingLeft: "3%" }}
              >
                {t("Profile")}
              </p>
              <CustomButton
                type="submit"
                onClick={toEditCallback}
                text={toEdit ? t("Save") : t("Edit")}
                style={{
                  boxShadow: "none",
                  marginRight: "5%",
                }}
              />
            </div>
            <div className="client_profile_screen_row2">
              <div className="client_profile_screen_row2_column1">
                <div className="prof-img">
                  <img style={{ width: "86%" }} src={DesignElaborationSVG} />
                </div>
              </div>
              <div className="client_profile_screen_row2_column2">
                <div className="cps_profile_container">
                  <div
                    className="cps_profile_img"
                    style={{ paddingBottom: "2%" }}
                  >
                    <label>
                      <input
                        style={{
                          display: "none",
                          cursor: "none",
                        }}
                        disabled={!toEdit}
                        type="file"
                        accept="image/*"
                        onChange={handleImageSelect}
                      />
                      <img
                        className="image_container"
                        style={{
                          height: "80pt",
                          width: "80pt",
                        }}
                        src={
                          profileImage
                            ? URL.createObjectURL(profileImage)
                            : profile.avatar
                            ? assetsURL(profile.avatar)
                            : UserSVG
                        }
                      />
                    </label>
                  </div>
                  <p
                    className="cps_profile_text"
                    style={{ paddingBottom: "10px" }}
                  >
                    {profile.name}
                  </p>
                  <ProfileInput
                    disabled={!toEdit}
                    name="Phone"
                    placeholder={t("Phone")}
                    defaultValue={profile.phone}
                    img={ProfilePhoneSVG}
                    divStyle={{
                      borderTopLeftRadius: "10px",
                      borderTopRightRadius: "10px",
                    }}
                    onChange={(e) => _setState("phone", e.target.value)}
                  />
                  <ProfileInput
                    disabled
                    name="Email"
                    placeholder={t("Email")}
                    defaultValue={profile.email}
                    img={ProfileEmailSVG}
                  />
                  <ProfileInput
                    disabled
                    name="Date Of Birth"
                    placeholder={t("Date Of Birth")}
                    defaultValue={new Date(profile.dob).toLocaleDateString(
                      "en-US"
                    )}
                    img={ProfileBirthdaySVG}
                  />
                  <ProfileInput
                    disabled
                    name="Country"
                    placeholder={t("Country")}
                    defaultValue={profile.country}
                    img={ProfileCountrySVG}
                  />
                  <ProfileInput
                    disabled
                    name="City"
                    placeholder={t("City")}
                    defaultValue={profile.city}
                    img={ProfileCitySVG}
                  />
                  <ProfileInput
                    disabled
                    name="Location"
                    placeholder={t("Location")}
                    defaultValue={profile.location}
                    img={ProfileLocationSVG}
                    divStyle={{
                      borderBottomLeftRadius: "10px",
                      borderBottomRightRadius: "10px",
                      marginBottom: "2%",
                    }}
                  />
                  <ProfileInput
                    disabled
                    name="Last Password Changed"
                    placeholder={t("Last Password Changed")}
                    defaultValue={
                      profile.last_password_changed
                        ? new Date(
                            profile.last_password_changed
                          ).toLocaleDateString("en-US")
                        : "N/A"
                    }
                    label={t("Last Password Changed")}
                    divStyle={{
                      borderTopLeftRadius: "10px",
                      borderTopRightRadius: "10px",
                    }}
                  />
                  <ProfileInput
                    disabled={!toEdit}
                    name="Password"
                    placeholder="**********"
                    defaultValue=""
                    label="Password"
                    onChange={(e) => _setState("password", e.target.value)}
                  />
                  <ProfileInput
                    disabled
                    name="Account Created"
                    placeholder={t("Account Created")}
                    defaultValue={new Date(
                      profile.createdAt
                    ).toLocaleDateString("en-US")}
                    label={t("Account Created")}
                    divStyle={{
                      borderBottomLeftRadius: "10px",
                      borderBottomRightRadius: "10px",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function ProfileInput({
  disabled,
  name,
  onChange,
  placeholder,
  defaultValue,
  img,
  label,
  divStyle,
}) {
  return (
    <div
      className="cps_profile_input_container"
      style={{
        ...divStyle,
      }}
    >
      <div
        style={{
          position: "relative",
          height: "100%",
          width: "100%",
        }}
      >
        <input
          disabled={disabled}
          className="cps_profile_input_input"
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          defaultValue={defaultValue}
        />
        {label ? (
          <p
            style={{
              fontSize: "12px",
              fontWeight: "500",
              position: "absolute",
              left: "2%",
              top: "1%",
            }}
          >
            {label}
          </p>
        ) : (
          <img
            src={img}
            style={{
              width: "16px",
              position: "absolute",
              left: "2%",
              top: "1%",
            }}
          />
        )}
      </div>
    </div>
  );
}

export default ClientProfileScreen;
