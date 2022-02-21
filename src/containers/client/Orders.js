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
        color="#FCFCFC"
      />
      <div
        className="client_orders_screen_top"
        style={{
          background: "linear-gradient(to left top, #EEE9DC 0%, #F0EEEB 50%, #EEEEEE 100%), linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 1))",
        }}
      >
        <div className="client_orders_screen_column1">
          <p className="client_orders_screen_column1_text">
            Orders List
          </p>
          <CustomButton
            text="Place your order"
          />
        </div>
        <div className="client_orders_screen_column2">
          <div className="client_orders_screen_order_list_tile_container">
            
          </div>
          <div className="client_orders_screen_order_list_tile_container">
            
          </div>
          <div className="client_orders_screen_order_list_tile_container">
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientOrdersScreen;