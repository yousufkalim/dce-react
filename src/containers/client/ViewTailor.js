import React, { useEffect, useState } from "react";

import UserSVG from "../../assets/User.svg";
import AddCatalogSVG from "../../assets/AddOrder.svg";

import ProfileBirthdaySVG from "../../assets/ProfileBirthday.svg";
import ProfileCitySVG from "../../assets/ProfileCity.svg";
import ProfileCountrySVG from "../../assets/ProfileCountry.svg";
import ProfileEmailSVG from "../../assets/ProfileEmail.svg";
import ProfileLocationSVG from "../../assets/ProfileLocation.svg";
import ProfilePhoneSVG from "../../assets/ProfilePhone.svg";
import dummy from "../../assets/dummy.jpeg";
import { useTranslation } from "react-i18next";

import ClientAppBar from "../../components/ClientAppBar";
import Footer from "../../components/Footer";
import CustomButton from "../../components/CustomButton";

import CatalogListTile from "../../components/CatalogListTile";
import OrderListTile from "../../components/OrderListTile";

import { getUser } from "../../utils/Auth";

import Api from "../../api";

import { useNavigate, useParams } from "react-router-dom";

import assetsURL from "../../utils/Assets";

function ClientViewTailorScreen() {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const params = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [catalogs, setCatalogs] = useState([]);
  const [orders, setOrders] = useState([]);
  const [tailor, setTailor] = useState(null);

  const user = getUser();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    await getCatalogs();
    await getOrders();
    await getTailor();
  };

  const getCatalogs = async () => {
    let response;
    try {
      response = await Api("post", `/catalogs/byQuery`, { tailor: params.id });
      const catalogsData = response.data.catalogs.splice(-4);
      setCatalogs(catalogsData);
    } catch (e) {
      console.trace(e);
    }
    return;
  };

  const getOrders = async () => {
    let response;
    try {
      response = await Api("post", `/orders/byQuery`, {
        tailor: params.id,
        client: user._id,
      });
      const ordersData = response.data.orders.splice(-4);
      setOrders(ordersData);
    } catch (e) {
      console.trace(e);
    }
    return;
  };

  const getTailor = async () => {
    let response;
    try {
      response = await Api("get", `/tailors/${params.id}`);
      const userData = response.data.user;
      setTailor(userData);
      setIsLoading(false);
    } catch (e) {
      console.trace(e);
    }
    return;
  };

  const navToViewCatalog = (id) => {
    navigate(`/view_catalog/${id}`);
  };

  const navToChat = () => {
    navigate(`/chat`, { state: { directUser: tailor } });
  };

  return (
    <>
      {isLoading ? (
        <></>
      ) : (
        <div
          style={{
            height: "190vh",
            width: "100vw",
          }}
        >
          <ClientAppBar color="#FCFCFC" activeTab={0} />

          <div
            className="client_profile_screen_top"
            style={{
              background:
                "linear-gradient(to left top, #EEE9DC 0%, #F0EEEB 50%, #EEEEEE 100%), linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 1))",
            }}
          >
            <div className="designer-prof">
              <p className="D-profile">Designer Profile</p>{" "}
              <CustomButton
                padding={"15px 37px"}
                style={{ borderRadius: "15px", boxShadow: "none" }}
                text={t("Send Message")}
                onClick={navToChat}
              />
            </div>
            <div
              className="tailor_profile_screen_row1"
              style={{
                borderBottomColor: "#DBDBDB",
                borderBottomStyle: "solid",
                borderBottomWidth: "1.5px",
              }}
            >
              <div className="tailor_profile_screen_row1_column1">
                <div className="tailor_profile_screen_row1_column1_header_text"></div>
                <div
                  className="tailor_profile_screen_row1_column1_img"
                  style={{
                    paddingBottom: "5%",
                  }}
                >
                  <img
                    className="image_container"
                    style={{
                      height: "80pt",
                      width: "80pt",
                    }}
                    src={tailor?.avatar ? assetsURL(tailor?.avatar) : dummy}
                  />
                </div>
                <p className="tailor_profile_screen_row1_column1_user_name_text">
                  {tailor.name}
                </p>
              </div>
              <div className="tailor_profile_screen_row1_column2">
                <ProfileInput
                  disabled
                  name="Phone"
                  placeholder={t("Phone")}
                  defaultValue={tailor.phone}
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
                  defaultValue={tailor.email}
                  img={ProfileEmailSVG}
                />
                <ProfileInput
                  disabled
                  name="Date Of Birth"
                  placeholder={t("Date Of Birth")}
                  defaultValue={new Date(tailor.dob).toLocaleDateString(
                    "en-US"
                  )}
                  img={ProfileBirthdaySVG}
                  divStyle={{
                    marginBottom: "3%",
                    borderBottomLeftRadius: "10px",
                    borderBottomRightRadius: "10px",
                  }}
                />
              </div>
              <div className="tailor_profile_screen_row1_column2">
                <ProfileInput
                  divStyle={{
                    borderTopLeftRadius: "10px",
                    borderTopRightRadius: "10px",
                  }}
                  disabled
                  name="Country"
                  placeholder={t("Country")}
                  defaultValue={tailor.country}
                  img={ProfileCountrySVG}
                />
                <ProfileInput
                  disabled
                  name="City"
                  placeholder={t("City")}
                  defaultValue={tailor.city}
                  img={ProfileCitySVG}
                />
                <ProfileInput
                  disabled
                  name="Location"
                  placeholder={t("Location")}
                  defaultValue={tailor.address}
                  img={ProfileLocationSVG}
                  divStyle={{
                    borderBottomLeftRadius: "10px",
                    borderBottomRightRadius: "10px",
                    marginBottom: "3%",
                  }}
                />
              </div>
            </div>
            <div
              className="tailor_profile_screen_row2"
              style={{
                height: "20%",
              }}
            >
              <div className="tailor_profile_screen_row2_list_container">
                {/* <div className="tailor_profile_screen_row2_column1">
                  <p className="tailor_profile_screen_row2_column1_text">
                    Hourly Rate
                  </p>
                </div> */}
                <div className="tailor_profile_screen_row2_column2">
                  <ProfileInput
                    disabled
                    name="Fixed price"
                    placeholder={t("Certain Amount")}
                    label={t("Fixed price")}
                    divStyle={{
                      borderTopLeftRadius: "10px",
                      borderTopRightRadius: "10px",
                      padding: "1.0% 0",
                    }}
                    alignText={"textend"}
                  />
                  <ProfileInput
                    disabled
                    name="Any Confection"
                    placeholder="€120"
                    defaultValue={tailor.hourly_rate}
                    label={t("Any Confection")}
                    inputType="number"
                    divStyle={{
                      borderBottomLeftRadius: "10px",
                      borderBottomRightRadius: "10px",
                      padding: "1.0% 0",
                    }}
                    alignText={"textend"}
                    onChange={(e) => _setState("hourly_rate", e.target.value)}
                  />
                </div>
              </div>
              <div className="tailor_profile_screen_row2_list_container">
                {/* <div className="tailor_profile_screen_row2_column1">
                  <p className="tailor_profile_screen_row2_column1_text">
                    Free Shipping
                  </p>
                </div> */}
                <div className="tailor_profile_screen_row2_column2">
                  <ProfileInput
                    disabled
                    name="Free Shipping"
                    placeholder={t("Certain Amount")}
                    label={t("Free Shipping")}
                    divStyle={{
                      borderTopLeftRadius: "10px",
                      borderTopRightRadius: "10px",
                      padding: "1.0% 0",
                    }}
                    alignText={"textend"}
                  />
                  <ProfileInput
                    disabled
                    name="Confection"
                    placeholder="500€"
                    defaultValue={tailor.free_shipping_rate}
                    label="Confection"
                    inputType="number"
                    divStyle={{
                      borderBottomLeftRadius: "10px",
                      borderBottomRightRadius: "10px",
                      padding: "1.0% 0",
                    }}
                    onChange={(e) =>
                      _setState("free_shipping_rate", e.target.value)
                    }
                    alignText={"textend"}
                  />
                </div>
              </div>
            </div>
            <div className="tailor_profile_screen_row3">
              <p
                className="tailor_profile_screen_row3_text"
                style={{
                  marginRight: "2%",
                }}
              >
                {t("Catalogue")}
              </p>
              <div className="tailor_profile_screen_row3_list_container">
                {catalogs.map((_) => (
                  <CatalogListTile
                    catalog={_}
                    buttonText={t("View")}
                    onClickButton={() => navToViewCatalog(_._id)}
                    onClick={console.log("XYZZ")}
                    mainDivStyle={{
                      width: "160pt",
                    }}
                  />
                ))}
              </div>
            </div>
            <div className="tailor_profile_screen_row3">
              <p
                className="tailor_profile_screen_row3_text"
                style={{
                  marginRight: "2%",
                }}
              >
                {t("Orders")}
              </p>
              <div className="tailor_profile_screen_row3_list_container">
                <AddOrderListTile id={params.id} />
                {orders.map((_) => (
                  <OrderListTile
                    order={_}
                    quote={_.quotes.filter((__) => __.status == "accepted")[0]}
                    mainDivStyle={{
                      width: "14%",
                    }}
                    viewAs="client"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
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
  divStyle,
  alignText,
}) {
  const { t } = useTranslation();

  return (
    <div
      className="tps_profile_input_container"
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
          className={
            alignText == "textend"
              ? "tps_profile_input_text_end"
              : "tps_profile_input_input"
          }
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          defaultValue={defaultValue}
          type={inputType}
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

function AddOrderListTile(props) {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const navToCreateOrder = () => {
    navigate(`/create_order/${props.id}`);
  };

  return (
    <div className="new_order_list_tile order-now" onClick={navToCreateOrder}>
      <div className="new_order_list_tile_img">
        <img style={{ width: "40%" }} src={AddCatalogSVG} />
      </div>
      <p className="new_order_list_tile_text">{t("Place Order")}</p>
    </div>
  );
}

export default ClientViewTailorScreen;
