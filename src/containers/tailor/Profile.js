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

import TailorCatalogListTile from "../../components/TailorCatalogListTile";

import { useNavigate } from "react-router-dom";

import { getUser } from "../../utils/Auth";
import Api from "../../api";

function TailorProfileScreen(){

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [catalogs, setCatalogs] = useState([]);
  const user = getUser();

  useEffect(() => {
    getCatalogs();
  }, []);

  const getCatalogs = async () => {
    let response;
    try {
      response = await Api("post", `/catalogs/byQuery`, { tailor: user._id });
      const catalogsData = response.data.catalogs;
      setCatalogs(catalogsData);
      setIsLoading(false);
    } catch (e) {
      console.trace(e);
    }
  };

  const navToCreateCatalog = () => {
    navigate("/create_catalog");
  }

  return (
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
              <img style={{ width: "30%" }} src={UserSVG} />
            </div>
            <p className="tailor_profile_screen_row1_column1_user_name_text">
              Sasha
            </p>
          </div>
          <div className="tailor_profile_screen_row1_column2">
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
              divStyle={{
                marginBottom: "3%"
              }}
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
                marginBottom: "3%"
              }}
            />
          </div>
          <div className="tailor_profile_screen_row1_column2">
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
                borderBottomRightRadius: "10px",
                marginBottom: "3%"
              }}
            />
            <ProfileInput
              name="Experience"
              placeholder="Experience"
              defaultValue="2 years"
              label="Experience"
              divStyle={{
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px"
              }}
            />
            <ProfileInput
              name="Diploma"
              placeholder="Diploma"
              defaultValue="Bachelor of Arts (BA)"
              label="Diploma"
            />
            <ProfileInput
              name="Shop Name"
              placeholder="Shop Name"
              defaultValue="Urooj Garments"
              label="Shop Name"
              divStyle={{
                borderBottomLeftRadius: "10px",
                borderBottomRightRadius: "10px",
                marginBottom: "3%"
              }}
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
                name="Any Confection"
                placeholder="$120"
                label="Any Confection"
                inputType="number"
                divStyle={{
                  borderBottomLeftRadius: "10px",
                  borderBottomRightRadius: "10px",
                  padding: "1.0% 0"
                }}
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
                name="Confection"
                placeholder="$500"
                label="Confection"
                inputType="number"
                divStyle={{
                  borderBottomLeftRadius: "10px",
                  borderBottomRightRadius: "10px",
                  padding: "1.0% 0"
                }}
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
                <TailorCatalogListTile
                  catalog={_}
                  mainDivStyle={{
                    width: "160pt"
                  }}
                />
              )
            }
          </div>
        </div>
      </div>
      <Footer />
    </div>
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