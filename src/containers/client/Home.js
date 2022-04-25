import React, { useState, useEffect } from "react";
import ClientHomeSVG from "../../assets/ClientHome.svg";
import UserSVG from "../../assets/dummy.jpeg";

import dummy from "../../assets/dummy.jpeg";

import ClientAppBar from "../../components/ClientAppBar";
import OrderListTile from "../../components/OrderListTile";
import NewOrderListTile from "../../components/NewOrderListTile";
import Rating from "@mui/material/Rating";
import Footer from "../../components/Footer";
import { useTranslation } from "react-i18next";
import star from "../../assets/star.svg";

import assetsURL from "../../utils/Assets";
import { calculateRating, calculateRatingsCount } from "../../utils/Helpers";
import { getUser } from "../../utils/Auth";
import Api from "../../api";
import { useNavigate } from "react-router-dom";

function ClientHomeScreen() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [orders, setOrders] = useState([]);
  const [tailors, setTailors] = useState([]);

  const user = getUser();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    await getOrders();
    await getTailors();
  };

  const getOrders = async () => {
    let response;
    try {
      response = await Api("post", `/orders/byQuery`, {
        client: user._id,
        tailor: { $ne: null },
      });
      const ordersData = response.data.orders.splice(-4);
      setOrders(ordersData);
    } catch (e) {
      console.trace(e);
    }
    return;
  };

  const getTailors = async () => {
    let response;
    try {
      response = await Api("get", `/tailors`);
      const tailorsData = response.data.users.splice(-5);
      setTailors(tailorsData);
    } catch (e) {
      console.trace(e);
    }
    return;
  };

  const navToCreateAd = () => {
    navigate("/create_ad");
  };

  const navToOrders = () => {
    navigate("/orders");
  };

  const navToTailors = () => {
    navigate("/tailors");
  };
  console.log(orders, "<>><><");
  return (
    <>
      <div className="container-page">
        <ClientAppBar color="#F8F4EF" />
        <div
          className="container"
          style={{
            background: "#E8DCCA",
          }}
        >
          <div className="client_home_screen_row1">
            <div className="client_home_screen_row1_column1">
              <p className="client_home_screen_row1_column1_text_1">
                {t("Submit your idea,")}
              </p>
              <p className="client_home_screen_row1_column1_text_2">
                {t("We make it real,")}
              </p>
              <p
                className="client_home_screen_row1_column1_text_1"
                style={{
                  color: "#A0805A",
                }}
              >
                {t("You receive your creation")}
              </p>
              <p
                className="client_home_screen_row1_column1_text_1"
                style={{
                  color: "#857B6F",
                }}
              >
                {t("at home!")}
              </p>
              <button
                className="client_home_screen_row1_column1_button"
                onClick={navToCreateAd}
              >
                {t("Place Your Ad")}
              </button>
            </div>
            <div className="client_home_screen_row1_column2">
              <div className="client_home_screen_row1_column2_img">
                <img style={{ width: "90%" }} src={ClientHomeSVG} />
              </div>
            </div>
          </div>
        </div>
        <div
          className="container"
          style={{
            background:
              "linear-gradient(to left top, #F5F1EA 0%, #F4F2F0 50%, #F5F5F5 100%), linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 1))",
          }}
        >
          <div
            className="client_home_screen_row2_row1"
            style={{
              borderBottomColor: "#DBDBDB",
              borderBottomStyle: "solid",
              borderBottomWidth: "0.5px",
            }}
          >
            <p className="client_home_screen_row2_row1_text">
              {t("Orders List")}
            </p>
            <div className="client_home_screen_row2_row1_row_container">
              <NewOrderListTile />
              {orders.map((_) => (
                <OrderListTile
                  order={_}
                  quote={_.quotes.filter((__) => __.status == "accepted")[0]}
                  viewAs="client"
                />
              ))}
              <p
                style={{
                  color: "#CC8E9C",
                  fontWeight: "800",
                  paddingLeft: "2%",
                  cursor: "pointer",
                }}
                onClick={navToOrders}
              >
                {t("See all")}
              </p>
            </div>
          </div>
          <div className="client_home_screen_row2_row1">
            <p className="client_home_screen_row2_row1_text">
              {t("Designers")}
            </p>
            <div className="client_home_screen_row2_row1_row_container">
              {tailors.map((_) => (
                <DesignerListTile {..._} />
              ))}
              <div style={{ paddingLeft: "2%" }}>
                <p className="see-all-text" onClick={navToTailors}>
                  {t("See all")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

function DesignerListTile(props) {
  console.log(props);
  const { t } = useTranslation();

  const rating = calculateRating(props.ratings);
  const navigate = useNavigate();

  const navToViewTailor = () => {
    navigate(`/view_tailor/${props._id}`);
  };

  return (
    <div className="chs_designer_list_tile" onClick={navToViewTailor}>
      <div
        className="order_list_tile_img"
        style={{
          paddingBottom: "5%",
        }}
      >
        <img
          className="image_container"
          style={{
            height: "80pt",
            width: "80pt",
            cursor: "pointer",
            marginBottom: "4%",
          }}
          src={props.avatar ? assetsURL(props.avatar) : dummy}
        />
      </div>
      <p
        className="chs_designer_list_tile_title_text"
        style={{
          paddingBottom: "2%",
        }}
      >
        {props.name}
      </p>
      <p
        className="chs_designer_list_tile_location_text"
        style={{
          paddingBottom: "6%",
        }}
      >
        {`${props.city}`}
      </p>
      <div className="stars">
        <Rating value={rating} size="small" />
      </div>
    </div>
  );
}

export default ClientHomeScreen;
