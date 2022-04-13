import React, { useState, useEffect } from "react";

import UserSVG from "../../assets/User.svg";

import ClientAppBar from "../../components/ClientAppBar";
import CustomButton from "../../components/CustomButton";

import { useNavigate } from "react-router-dom";

import { getUser } from "../../utils/Auth";
import Api from "../../api";

import assetsURL from "../../utils/Assets";

function ClientOrdersScreen() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [orders, setOrders] = useState([]);
  const user = getUser();

  useEffect(() => {
    getOrders();
  }, []);

  const getOrders = async () => {
    let response;
    try {
      response = await Api("post", `/orders/byQuery`, {
        client: user._id,
        status: ["in_progress", "discarded", "completed"], // As "pending" doesn't count as order
      });
      const ordersData = response.data.orders;
      setOrders(ordersData);
      setIsLoading(false);
    } catch (e) {
      console.trace(e);
    }
  };

  const navToCreateAd = () => {
    navigate("/create_ad");
  };

  return (
    <div className="container-page-vertical">
      <ClientAppBar activeTab={1} color="#FCFCFC" />
      <div
        className="client_orders_screen_top"
        style={{
          background:
            "linear-gradient(to left top, #EEE9DC 0%, #F0EEEB 50%, #EEEEEE 100%), linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 1))",
        }}
      >
        <div className="client_orders_screen_row1">
          <p className="client_orders_screen_row1_text">Orders List</p>
          <CustomButton
            padding={"15px 45px"}
            style={{ borderRadius: "15px", boxShadow: "none" }}
            text="Place your order"
            onClick={navToCreateAd}
          />
        </div>
        <div className="client_orders_screen_row2">
          {orders.map((_) => (
            <OrderListTile
              order={_}
              quote={_.quotes.filter((__) => __.status == "accepted")[0]}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function OrderListTile(props) {
  return (
    <div className="cos_order_list_tile_container">
      <div className="cos_order_list_tile_column1">
        <div
          className="cos_order_list_tile_column1_img"
          style={{
            paddingBottom: "5%",
          }}
        >
          <img
            className="image_container"
            style={{
              height: "70pt",
              width: "70pt",
            }}
            src={
              props?.quote?.tailor?.avatar
                ? assetsURL(props.quote.tailor.avatar)
                : props?.order?.tailor?.avatar
                ? assetsURL(props.order.tailor.avatar)
                : UserSVG
            }
          />
        </div>
        <p className="cos_order_list_tile_column1_title_text">
          {props?.quote?.tailor?.name ?? props?.order?.tailor?.name ?? "N/A"}
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
            padding: "3% 0",
          }}
        >
          <p className="cos_order_list_tile_column2_item_key">Order</p>
          <p className="cos_order_list_tile_column2_item_value">
            {props.order.name}
          </p>
        </div>
        <div
          className="cos_order_list_tile_column2_item cos_order_list_tile_column2_item_borders"
          style={{
            padding: "3% 0",
          }}
        >
          <p className="cos_order_list_tile_column2_item_key">Order Date</p>
          <p className="cos_order_list_tile_column2_item_value">
            {new Date(props.order.createdAt).toLocaleDateString("en-US")}
          </p>
        </div>
        <div
          className="cos_order_list_tile_column2_item"
          style={{
            padding: "3% 0",
          }}
        >
          <p className="cos_order_list_tile_column2_item_key">Delivery Date</p>
          <p className="cos_order_list_tile_column2_item_value">
            {new Date(props.order.delivery.date).toLocaleDateString("en-US")}
          </p>
        </div>
      </div>
      <div className="cos_order_list_tile_column1">
        <p
          style={{ fontSize: "20px", fontWeight: "bold", paddingBottom: "10%" }}
        >
          {`${props?.quote?.price ?? props?.order?.budget?.min_price ?? "0"}$`}
        </p>
        <p style={{ fontSize: "12px", fontWeight: "200", color: "#CC8E9C" }}>
          Bill
        </p>
      </div>
      <div className="cos_order_list_tile_column4">
        <CustomButton
          text="Support"
          padding={"10px 14px"}
          style={{ borderRadius: "15px", margin: "8px 0px", boxShadow: "none" }}
        />
        <p style={{ fontSize: "15px", fontWeight: "600" }}>
          {props.order.status.replace("_", " ")}
        </p>
      </div>
    </div>
  );
}

export default ClientOrdersScreen;
