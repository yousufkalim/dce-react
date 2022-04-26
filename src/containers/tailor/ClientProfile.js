import React, { useState, useEffect } from "react";
import TailorAppBar from "../../components/TailorAppBar";
import UserSVG from "../../assets/supportpic.png";
import ProfileBirthdaySVG from "../../assets/ProfileBirthday.svg";
import ProfileCitySVG from "../../assets/ProfileCity.svg";
import ProfileCountrySVG from "../../assets/ProfileCountry.svg";
import ProfileEmailSVG from "../../assets/ProfileEmail.svg";
import ProfileLocationSVG from "../../assets/ProfileLocation.svg";
import ProfilePhoneSVG from "../../assets/ProfilePhone.svg";
import Background from "../../assets/backgroung1.svg";
import { useTranslation } from "react-i18next";

import { getUser } from "../../utils/Auth";

import Api from "../../api";

import { useNavigate, useParams } from "react-router-dom";

import assetsURL from "../../utils/Assets";

function TailorClientProfileScreen() {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const params = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [orders, setOrders] = useState([]);
  const [client, setClient] = useState(null);

  const user = getUser();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    await getOrders();
    await getClient();
  };

  const getOrders = async () => {
    let response;
    try {
      response = await Api("post", `/orders/byQuery`, {
        client: params.id,
        tailor: user._id,
      });
      const ordersData = response.data.orders.splice(-4);
      setOrders(ordersData);
    } catch (e) {
      console.trace(e);
    }
    return;
  };

  const getClient = async () => {
    let response;
    try {
      response = await Api("get", `/clients/${params.id}`);
      const userData = response.data.user;
      setClient(userData);
      setIsLoading(false);
    } catch (e) {
      console.trace(e);
    }
    return;
  };

  return (
    <>
      {isLoading ? (
        <></>
      ) : (
        <div className="container-page-vertical">
          <TailorAppBar color="#FDFDFC" />
          <div
            className="client_orders_screen_top"
            style={{
              background:
                "linear-gradient(to left top, #EEE9DC 0%, #F0EEEB 50%, #EEEEEE 100%), linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 1))",
            }}
          >
            <img src={Background} className="backgrounimg" />
            <div className="thiw_qna_standard_screen_row1">
              <div className="clientProfilediv">{t("Client Profile")}</div>
              <div className="clientProfileRow">
                <div className="clientProfilePic">
                  <img
                    className="image_container"
                    style={{
                      height: "80pt",
                      width: "80pt",
                    }}
                    src={client.avatar ? assetsURL(client.avatar) : UserSVG}
                  />
                  <p
                    className="tailor_profile_screen_row1_column1_user_name_text"
                    style={{ padding: "10px" }}
                  >
                    {client.name}
                  </p>
                </div>
                <div className="clientInfoleftdiv orderclientinfo">
                  <ProfileInput
                    disabled
                    name="Phone"
                    placeholder={t("Phone")}
                    defaultValue={client.phone}
                    img={ProfilePhoneSVG}
                    divStyle={{
                      borderTopLeftRadius: "20px",
                      borderTopRightRadius: "20px",
                    }}
                    onChange={(e) => _setState("phone", e.target.value)}
                  />
                  <ProfileInput
                    disabled
                    name="Email"
                    placeholder="Email"
                    defaultValue={client.email}
                    img={ProfileEmailSVG}
                  />
                  <ProfileInput
                    disabled
                    name="Date Of Birth"
                    placeholder={t("Date Of Birth")}
                    defaultValue={new Date(client.dob).toLocaleDateString(
                      "en-US"
                    )}
                    img={ProfileBirthdaySVG}
                    divStyle={{
                      marginBottom: "3%",
                      borderBottomLeftRadius: "20px",
                      borderBottomRightRadius: "20px",
                    }}
                  />
                </div>
                <div className="clientinfoRightDiv orderclientinfo">
                  <ProfileInput
                    disabled
                    name="Country"
                    placeholder={t("Country")}
                    defaultValue={client.country}
                    img={ProfileCountrySVG}
                    divStyle={{
                      borderTopLeftRadius: "20px",
                      borderTopRightRadius: "20px",
                    }}
                  />
                  <ProfileInput
                    disabled
                    name="City"
                    placeholder={t("City")}
                    defaultValue={client.city}
                    img={ProfileCitySVG}
                  />
                  <ProfileInput
                    disabled
                    name="Location"
                    placeholder={t("Location")}
                    defaultValue={client.address}
                    img={ProfileLocationSVG}
                    divStyle={{
                      borderBottomLeftRadius: "20px",
                      borderBottomRightRadius: "20px",
                      marginBottom: "3%",
                    }}
                  />
                </div>
              </div>
            </div>
            <div
              style={{
                background: "grey",
                width: "100%",
                height: "1px",
                opacity: "0.2",
              }}
            ></div>
            <div className="ClientOrder">
              <div className="clientorderdiv">{t("Client Orders")}</div>
              {orders.map((_) => (
                <ClientProfileOrderListTile {..._} />
              ))}
            </div>
          </div>
        </div>
      )}
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
}) {
  return (
    <div
      className="tps_profile_input_container inputcontainer2"
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
          className="tps_profile_input_input"
          name={name}
          onChange={onChange}
          placeholder={t(placeholder)}
          defaultValue={defaultValue}
          type={inputType}
          style={{ color: "black" }}
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

function ClientProfileOrderListTile(props) {
  return (
    <div className="ordermainDiv">
      <div className="ordercol1">
        <div className="orderimgdiv">
          <img
            className="image_container"
            style={{
              height: "80pt",
              width: "80pt",
            }}
            src={props.client.avatar ? assetsURL(props.client.avatar) : UserSVG}
          />
          <p className="clientName">{props.client.name}</p>
        </div>
        <div className="orderLine"></div>
        <div className="orderabovediv">
          <div className="orderDiv">
            <p className="ordername">{t("Order")}</p>
            <p className="ordername2">{props.name}</p>
          </div>
          <hr className="hrline" />
          <div className="orderDiv">
            <p className="ordername">{t("Order Date")}</p>
            <p className="ordername2">
              {new Date(props.createdAt).toLocaleDateString("en-US")}
            </p>
          </div>
          <hr className="hrline" />
          <div className="orderDiv">
            <p className="ordername">{t("Delivery Date")}</p>
            <p className="ordername2">
              {new Date(props.delivery.date).toLocaleDateString("en-US")}
            </p>
          </div>
        </div>
        <div className="orderLine"></div>
        <div className="orderofferDiv">
          <h3 className="orderofferPrice">{props.budget.min_price}€</h3>
          <h3 className="orderofferheading">{t("Bill")}</h3>
        </div>
        <div className="orderLine"></div>
        <div>
          <h1 className="ordercompleteStatus">{props.status}</h1>
        </div>
      </div>
    </div>
  );
}

export default TailorClientProfileScreen;
