import React from "react";

import UserSVG from "../../assets/User.svg";

import AppBar from "../../components/AppBar";
import CustomButton from "../../components/CustomButton";

import { useNavigate } from "react-router-dom";

function ClientOrdersScreen(){

  const navigate = useNavigate();

  return (
    <div className="container-page-vertical">
      <AppBar
        activeTab={1}
        color="#FCFCFC"
      />
      <div
        className="client_orders_screen_top"
        style={{
          background: "linear-gradient(to left top, #EEE9DC 0%, #F0EEEB 50%, #EEEEEE 100%), linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 1))",
        }}
      >
        <div className="client_orders_screen_row1">
          <p className="client_orders_screen_row1_text">
            Orders List
          </p>
          <CustomButton
            text="Place your order"
          />
        </div>
        <div className="client_orders_screen_row2">
          <OrderListTile />
          <OrderListTile />
          <OrderListTile />
          <OrderListTile />
          <OrderListTile />
        </div>
      </div>
    </div>
  );
}

function OrderListTile(){
  return (
    <div className="cos_order_list_tile_container">
      <div className="cos_order_list_tile_column1">
        <div
          className="cos_order_list_tile_column1_img"
          style={{
            "paddingBottom": "5%"
          }}
        >
          <img style={{ width: "30%" }} src={UserSVG} />
        </div>
        <p className="cos_order_list_tile_column1_title_text">
          Sasha Designs
        </p>
      </div>
      <div
        className="cos_order_list_tile_column2"
        style={{
          padding: "3%",
        }}
      >
        <div
          className="cos_order_list_tile_column2_item"
          style={{
            padding: "2% 0",
          }}
        >
          <p className="cos_order_list_tile_column2_item_key">
            Order
          </p>
          <p className="cos_order_list_tile_column2_item_value">
            Pant, Shirt
          </p>
        </div>
        <div
          className="cos_order_list_tile_column2_item cos_order_list_tile_column2_item_borders"
          style={{
            padding: "2% 0",
          }}
        >
          <p className="cos_order_list_tile_column2_item_key">
            Order Date
          </p>
          <p className="cos_order_list_tile_column2_item_value">
            August 10, 2022
          </p>
        </div>
        <div
          className="cos_order_list_tile_column2_item"
          style={{
            padding: "2% 0",
          }}
        >
          <p className="cos_order_list_tile_column2_item_key">
            Delivery Date
          </p>
          <p className="cos_order_list_tile_column2_item_value">
            August 25, 2022
          </p>
        </div>
      </div>
      <div className="cos_order_list_tile_column1">
        <p style={{ fontSize: "20px", fontWeight: "bold", paddingBottom: "10%" }}>
          500$
        </p>
        <p style={{ fontSize: "12px", fontWeight: "200", color: "#CC8E9C" }}>
          Bill
        </p>
      </div>
      <div className="cos_order_list_tile_column4">
        <p style={{ fontSize: "16px", fontWeight: "bold" }}>
          In Process
        </p>
      </div>
    </div>
  );
}

export default ClientOrdersScreen;