import React, { useEffect, useState } from "react";

import UserSVG from "../../assets/User.svg";
import AddCatalogSVG from "../../assets/AddOrder.svg";

import ProfileBirthdaySVG from "../../assets/ProfileBirthday.svg";
import ProfileCitySVG from "../../assets/ProfileCity.svg";
import ProfileCountrySVG from "../../assets/ProfileCountry.svg";
import ProfileEmailSVG from "../../assets/ProfileEmail.svg";
import ProfileLocationSVG from "../../assets/ProfileLocation.svg";
import ProfilePhoneSVG from "../../assets/ProfilePhone.svg";

import TailorAppBar from "../../components/TailorAppBar";
import Footer from "../../components/Footer";
import CustomButton from "../../components/CustomButton";

import CatalogListTile from "../../components/CatalogListTile";

import { getUser } from "../../utils/Auth";

import Api from "../../api";

import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

import * as FormValidations from "../../utils/Validations";

import assetsURL from "../../utils/Assets";

function TailorProfileScreen(){

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);
  const [catalogs, setCatalogs] = useState([]);
  const [profile, setProfile] = useState(null);
  const [profileImage, setProfileImage] = useState(null);

  const user = getUser();

  const [toEdit, setToEdit] = useState(false);

  const [state, setState] = useState({
    phone: "",
    experience: "",
    diploma: "",
    shop_name: "",
    hourly_rate: "",
    free_shipping_rate: "",
    password: undefined
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
      ...obj
    });
  }

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    await getCatalogs();
    await getProfile();
  }

  const getCatalogs = async () => {
    let response;
    try {
      response = await Api("post", `/catalogs/byQuery`, { tailor: user._id });
      const catalogsData = response.data.catalogs.splice(-4);
      setCatalogs(catalogsData);
    } catch (e) {
      console.trace(e);
    }
    return;
  };

  const getProfile = async () => {
    let response;
    try {
      response = await Api("get", `/auth`);
      const userData = response.data.user;
      setProfile(userData);
      setState({
        ...state,
        phone: userData.phone ?? "",
        experience: userData.experience ?? "",
        diploma: userData.diploma ?? "",
        shop_name: userData.shop_name ?? "",
        hourly_rate: userData.hourly_rate ?? "",
        free_shipping_rate: userData.free_shipping_rate ?? ""
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

    const isValidated = FormValidations.tailorEditProfile(state);
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
      body.append("experience", state.experience);
      body.append("diploma", state.diploma);
      body.append("shop_name", state.shop_name);
      body.append("hourly_rate", state.hourly_rate);
      body.append("free_shipping_rate", state.free_shipping_rate);
      body.append("password", state.password);
      body.append("image", profileImage);

      response = await Api("put", "/tailors", body);

      if (response?.data?.success) {
        toast.success("Profile updated successfully.");
        navToHome();
      }
    } catch (e) {
      console.trace(e);
    }

    setIsProcessing(false);

  }

  const navToHome = () => {
    navigate("/home");
  }

  const navToViewCatalog = (id) => {
    navigate(`/view_catalog/${id}`);
  }

  const navToEditCatalog = (id) => {
    navigate(`/edit_catalog/${id}`);
  }

  return (
    <>
      {
        isLoading ?
        <></> :
        <div
          style={{
            height: "150vh",
            width: "100vw"
          }}
        >
          <TailorAppBar
            color="#FCFCFC"
          />
          <div
            className="client_profile_screen_top"
            style={{
              background: "linear-gradient(to left top, #EEE9DC 0%, #F0EEEB 50%, #EEEEEE 100%), linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 1))",
            }}
          >
            <div
              className="tailor_profile_screen_row1"
              style={{
                borderBottomColor: "#DBDBDB",
                borderBottomStyle: "solid",
                borderBottomWidth: "1.5px",
              }}
            >
              <div className="tailor_profile_screen_row1_column1">
                <div className="tailor_profile_screen_row1_column1_header_text">
                  <p className="client_profile_screen_row1_text" style={{paddingLeft: "3%"}}>
                    Profile
                  </p>
                </div>
                <div
                  className="tailor_profile_screen_row1_column1_img"
                  style={{
                    "paddingBottom": "5%"
                  }}
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
                        width: "80pt"
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
                <p className="tailor_profile_screen_row1_column1_user_name_text">
                  {profile.name}
                </p>
              </div>
              <div className="tailor_profile_screen_row1_column2">
                <ProfileInput
                  disabled={!toEdit}
                  name="Phone"
                  placeholder="Phone"
                  defaultValue={profile.phone}
                  img={ProfilePhoneSVG}
                  divStyle={{
                    borderTopLeftRadius: "10px",
                    borderTopRightRadius: "10px"
                  }}
                  onChange={e => _setState("phone", e.target.value)}
                />
                <ProfileInput
                  disabled
                  name="Email"
                  placeholder="Email"
                  defaultValue={profile.email}
                  img={ProfileEmailSVG}
                />
                <ProfileInput
                  disabled
                  name="Date Of Birth"
                  placeholder="Date Of Birth"
                  defaultValue={new Date(profile.dob).toLocaleDateString("en-US")}
                  img={ProfileBirthdaySVG}
                  divStyle={{
                    marginBottom: "3%"
                  }}
                />
                <ProfileInput
                  disabled
                  name="Country"
                  placeholder="Country"
                  defaultValue={profile.country}
                  img={ProfileCountrySVG}
                />
                <ProfileInput
                  disabled
                  name="City"
                  placeholder="City"
                  defaultValue={profile.city}
                  img={ProfileCitySVG}
                />
                <ProfileInput
                  disabled
                  name="Location"
                  placeholder="Location"
                  defaultValue={profile.address}
                  img={ProfileLocationSVG}
                  divStyle={{
                    borderBottomLeftRadius: "10px",
                    borderBottomRightRadius: "10px",
                    marginBottom: "3%"
                  }}
                />
              </div>
              <div className="tailor_profile_screen_row1_column2">
                <CustomButton
                  type="submit"
                  onClick={toEditCallback}
                  text={toEdit ? "Save" : "Edit"}
                  style={{
                    "alignSelf": "flex-end",
                    "boxShadow": "none",
                    "marginRight": "5%",
                    "marginBottom": "2%"
                  }}
                />
                <ProfileInput
                  disabled
                  name="Last Password Changed"
                  placeholder="Last Password Changed"
                  defaultValue={
                    profile.last_password_changed ?
                    new Date(profile.last_password_changed).toLocaleDateString("en-US") :
                    "N/A"
                  }
                  label="Last Password Changed"
                  divStyle={{
                    borderTopLeftRadius: "10px",
                    borderTopRightRadius: "10px"
                  }}
                />
                <ProfileInput
                  disabled={!toEdit}
                  name="Password"
                  placeholder="**********"
                  label="Password"
                  onChange={e => _setState("password", e.target.value)}
                />
                <ProfileInput
                  disabled
                  name="Account Created"
                  placeholder="Account Created"
                  defaultValue={new Date(profile.createdAt).toLocaleDateString("en-US")}
                  label="Account Created"
                  divStyle={{
                    borderBottomLeftRadius: "10px",
                    borderBottomRightRadius: "10px",
                    marginBottom: "3%"
                  }}
                />
                <ProfileInput
                  disabled={!toEdit}
                  name="Experience"
                  placeholder="Experience"
                  defaultValue={profile.experience}
                  label="Experience"
                  divStyle={{
                    borderTopLeftRadius: "10px",
                    borderTopRightRadius: "10px"
                  }}
                  onChange={e => _setState("experience", e.target.value)}
                />
                <ProfileInput
                  disabled={!toEdit}
                  name="Diploma"
                  placeholder="Diploma"
                  defaultValue={profile.diploma}
                  label="Diploma"
                  onChange={e => _setState("diploma", e.target.value)}
                />
                <ProfileInput
                  disabled={!toEdit}
                  name="Shop Name"
                  placeholder="Shop Name"
                  defaultValue={profile.shop_name}
                  label="Shop Name"
                  divStyle={{
                    borderBottomLeftRadius: "10px",
                    borderBottomRightRadius: "10px",
                    marginBottom: "3%"
                  }}
                  onChange={e => _setState("shop_name", e.target.value)}
                />
              </div>
            </div>
            <div className="tailor_profile_screen_row2">
              <div className="tailor_profile_screen_row2_list_container">
                <div className="tailor_profile_screen_row2_column1">
                  <p className="tailor_profile_screen_row2_column1_text">
                    Hourly Rate
                  </p>
                </div>
                <div className="tailor_profile_screen_row2_column2">
                  <ProfileInput
                    disabled
                    name="Fixed price"
                    placeholder="Certain Amount"
                    label="Fixed price"
                    divStyle={{
                      borderTopLeftRadius: "10px",
                      borderTopRightRadius: "10px",
                      padding: "1.0% 0"
                    }}
                  />
                  <ProfileInput
                    disabled={!toEdit}
                    name="Any Confection"
                    placeholder="$120"
                    defaultValue={profile.hourly_rate}
                    label="Any Confection"
                    inputType="number"
                    divStyle={{
                      borderBottomLeftRadius: "10px",
                      borderBottomRightRadius: "10px",
                      padding: "1.0% 0"
                    }}
                    onChange={e => _setState("hourly_rate", e.target.value)}
                  />
                </div>
              </div>
              <div className="tailor_profile_screen_row2_list_container">
                <div className="tailor_profile_screen_row2_column1">
                  <p className="tailor_profile_screen_row2_column1_text">
                    Free Shipping
                  </p>
                </div>
                <div className="tailor_profile_screen_row2_column2">
                  <ProfileInput
                    disabled
                    name="Free Shipping"
                    placeholder="Certain Amount"
                    label="Free Shipping"
                    divStyle={{
                      borderTopLeftRadius: "10px",
                      borderTopRightRadius: "10px",
                      padding: "1.0% 0"
                    }}
                  />
                  <ProfileInput
                    disabled={!toEdit}
                    name="Confection"
                    placeholder="$500"
                    defaultValue={profile.free_shipping_rate}
                    label="Confection"
                    inputType="number"
                    divStyle={{
                      borderBottomLeftRadius: "10px",
                      borderBottomRightRadius: "10px",
                      padding: "1.0% 0"
                    }}
                    onChange={e => _setState("free_shipping_rate", e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="tailor_profile_screen_row3">
              <p
                className="tailor_profile_screen_row3_text"
                style={{
                  marginRight: "2%"
                }}
              >
                Catalog
              </p>
              <div className="tailor_profile_screen_row3_list_container">
                <AddCatalogListTile />
                {
                  catalogs.map(
                    _ =>
                    <CatalogListTile
                      catalog={_}
                      mainDivStyle={{
                        width: "160pt"
                      }}
                      buttonText="Edit"
                      onClick={() => navToViewCatalog(_._id)}
                      onClickButton={() => navToEditCatalog(_._id)}
                    />
                  )
                }
              </div>
            </div>
          </div>
          <Footer />
        </div>
      }
    </>
  );
}

function ProfileInput({
  name,
  onChange,
  placeholder,
  defaultValue,
  inputType,
  img,
  label,
  disabled,
  divStyle
}){
  return (
    <div
      className="tps_profile_input_container"
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
          disabled={disabled}
          className="tps_profile_input_input"
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          defaultValue={defaultValue}
          type={inputType}
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

function AddCatalogListTile(){

  const navigate = useNavigate();

  const navToCreateCatalog = () => {
    navigate("/create_catalog");
  }

  return (
    <div
      className="new_order_list_tile"
      style={{
        height: "65%",
        width: "13%",
      }}
      onClick={navToCreateCatalog}
    >
      <div className="new_order_list_tile_img">
        <img style={{ width: "40%" }} src={AddCatalogSVG} />
      </div>
      <p className="new_order_list_tile_text">
        Add Catalog
      </p>
    </div>
  );
}

export default TailorProfileScreen;