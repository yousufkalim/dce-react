import React from "react";

import ClientHomeSVG from "../../assets/ClientHome.svg";
import UserSVG from "../../assets/User.svg";

import ClientAppBar from "../../components/ClientAppBar";
import OrderListTile from "../../components/OrderListTile";
import NewOrderListTile from "../../components/NewOrderListTile";

import { useNavigate } from "react-router-dom";

function ClientHomeScreen(){

  const navigate = useNavigate();

  return (
    <div className="container-page">
      <ClientAppBar
        color="#F8F4EF"
      />
      <div
        className="container"
        style={{
          background: "#E8DCCA",
        }}
      >
        <div className="client_home_screen_row1">
          <div className="client_home_screen_row1_column1">
            <p className="client_home_screen_row1_column1_text_1">
              Submit your idea,
            </p>
            <p className="client_home_screen_row1_column1_text_2">
              We make it real,
            </p>
            <p
              className="client_home_screen_row1_column1_text_1"
              style={{
                color: "#A0805A",
              }}
            >
              You receive your creation
            </p>
            <p
              className="client_home_screen_row1_column1_text_1"
              style={{
                color: "#857B6F",
              }}
            >
              at home!
            </p>
            <button className="client_home_screen_row1_column1_button">
              Place your Ad
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
          background: "linear-gradient(to left top, #F5F1EA 0%, #F4F2F0 50%, #F5F5F5 100%), linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 1))",
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
            Orders List
          </p>
          <div className="client_home_screen_row2_row1_row_container">
            <NewOrderListTile />
            <OrderListTile />
            <OrderListTile />
            <OrderListTile />
            <OrderListTile />
            <p style={{ color: "#CC8E9C", fontWeight: "800", paddingLeft: "2%" }}>See all</p>
          </div>
        </div>
        <div className="client_home_screen_row2_row1">
          <p className="client_home_screen_row2_row1_text">
            Designers
          </p>
          <div className="client_home_screen_row2_row1_row_container">
            <DesignerListTile />
            <DesignerListTile />
            <DesignerListTile />
            <DesignerListTile />
            <DesignerListTile />
            <p style={{ color: "#CC8E9C", fontWeight: "800", paddingLeft: "2%" }}>See all</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DesignerListTile(){
  return (
    <div className="chs_designer_list_tile">
      <div
        className="order_list_tile_img"
        style={{
          "paddingBottom": "5%"
        }}
      >
        <img style={{ width: "40%" }} src={UserSVG} />
      </div>
      <p
        className="chs_designer_list_tile_title_text"
        style={{
          paddingBottom: "2%"
        }}
      >
        Almirah
      </p>
      <p
        className="chs_designer_list_tile_location_text"
        style={{
          paddingBottom: "6%"
        }}
      >
        Lahore, Pakistan
      </p>
      <p
        className="chs_designer_list_tile_rating_text"
      >
        4.5(32K)
      </p>
    </div>
  );
}

export default ClientHomeScreen;