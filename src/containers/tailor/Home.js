import React from "react";
import TailorHomeSVG from "../../assets/Tailorsvg.svg";
import UserSVG from "../../assets/User.svg";
import AppBar from "../../components/TailorAppBar";
import OrderListTile from "../../components/OrderListTile";
import Footer from "../../components/Footer";

import { useNavigate } from "react-router-dom";

function TailorHomeScreen() {
  const navigate = useNavigate();

  return (
    <div className="container-page">
      <AppBar color="#F8F4EF" />
      <div
        className="container"
        style={{
          background: "rgba(255, 202, 186, 0.67)",
        }}
      >
        <div className="client_home_screen_row1">
          <div className="client_home_screen_row1_column1">
            <p
              className="client_home_screen_row1_column1_text_1"
              style={{ color: "#CC8E9C" }}
            >
              Welcome to the
            </p>
            <p className="tailor_home_screen_row1_column1_text_2">
              Design Confection Ethiques
            </p>
            <p
              className="client_home_screen_row1_column1_text_1"
              style={{
                color: "#A0805A",
              }}
            >
              Now You receive your
            </p>
            <p
              className="client_home_screen_row1_column1_text_1"
              style={{
                color: "#857B6F",
              }}
            >
              order here
            </p>
            <button className="client_home_screen_row1_column1_button">
              Find Quotes
            </button>
          </div>
          <div className="client_home_screen_row1_column2">
            <div className="client_home_screen_row1_column2_img">
              <img style={{ width: "90%" }} src={TailorHomeSVG} />
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
          <p className="client_home_screen_row2_row1_text">Order Request</p>
          <div className="client_home_screen_row2_row1_row_container">
            <OrderListTile detail="See Details" />
            <OrderListTile detail="See Details" />
            <OrderListTile detail="See Details" />
            <OrderListTile detail="See Details" />
            <OrderListTile detail="See Details" />
            <p
              style={{
                color: "#CC8E9C",
                fontWeight: "800",
                paddingLeft: "2%",
                textDecoration: "underline",
              }}
            >
              See all
            </p>
          </div>
        </div>
        <div className="client_home_screen_row2_row1">
          <p className="client_home_screen_row2_row1_text">Recently Orders</p>
          <div className="client_home_screen_row2_row1_row_container">
            <OrderListTile detail="In Process" />
            <OrderListTile detail="In Process" />
            <OrderListTile detail="In Process" />
            <OrderListTile detail="In Process" />
            <OrderListTile detail="In Process" />
            <p
              style={{
                color: "#CC8E9C",
                fontWeight: "800",
                paddingLeft: "2%",
                textDecoration: "underline",
              }}
            >
              See all
            </p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

function DesignerListTile() {
  return (
    <div className="chs_designer_list_tile">
      <div
        className="order_list_tile_img"
        style={{
          paddingBottom: "5%",
        }}
      >
        <img style={{ width: "40%" }} src={UserSVG} />
      </div>
      <p
        className="chs_designer_list_tile_title_text"
        style={{
          paddingBottom: "2%",
        }}
      >
        Almirah
      </p>
      <p
        className="chs_designer_list_tile_location_text"
        style={{
          paddingBottom: "6%",
        }}
      >
        Lahore, Pakistan
      </p>
      <p className="chs_designer_list_tile_rating_text">4.5(32K)</p>
    </div>
  );
}

export default TailorHomeScreen;
