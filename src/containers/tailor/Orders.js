import React, { useState, useEffect } from "react";

import UserSVG from "../../assets/User.svg";

import TailorAppBar from "../../components/TailorAppBar";
import CustomButton from "../../components/CustomButton";
import Footer from "../../components/Footer";

import { useNavigate } from "react-router-dom";

import { getUser } from "../../utils/Auth";
import Api from "../../api";

function TailorOrdersScreen(){

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [ordersInProgress, setOrdersInProgress] = useState([]);
  const user = getUser();

  useEffect(() => {
    getOrders();
  }, []);

  const getOrders = async () => {
    let response;
    try {
      response = await Api("post", `/orders/byQuery`, { tailor: user._id }); // TODO
      const ordersData = response.data.orders;
      setOrdersInProgress(ordersData);
      setIsLoading(false);
    } catch (e) {
      console.trace(e);
    }
  };

  return (
    <div className="container-page-vertical">
      <TailorAppBar
        activeTab={0}
        color="#FCFCFC"
      />
      <div
        className="tailor_orders_screen_top"
        style={{
          background: "linear-gradient(to right, #EEEEEE , #FDF3EA)",
        }}
      >
        <div className="client_orders_screen_row1">
          <p className="client_orders_screen_row1_text">
            Orders Requests
          </p>
          <CustomButton
            text="See All Requests"
          />
        </div>
        <div className="client_orders_screen_row2">
          {/* <OrderRequestListTile />
          <OrderRequestListTile />
          <OrderRequestListTile /> */}
        </div>
      </div>
      <div
        className="tailor_orders_screen_top"
        style={{
          background: "linear-gradient(to right, #EEEEEE , #FDF3EA)",
        }}
      >
        <div
          className="tailor_orders_screen_row1"
        >
          <p className="client_orders_screen_row1_text">
            In Progress
          </p>
          <CustomButton
            text="See All Orders"
          />
        </div>
        <div className="client_orders_screen_row2">
          {
            ordersInProgress.map(
              _ =>
              <OrderInProgressListTile
                order={_}
                quote={_.quotes.filter(__ => __.status == "accepted")[0]}
              />
            )
          }
        </div>
      </div>
      <div
        className="tailor_orders_screen_top"
        style={{
          background: "linear-gradient(to right, #EEEEEE , #FDF3EA)",
        }}
      >
        <div
          className="tailor_orders_screen_row1"
        >
          <p className="client_orders_screen_row1_text">
            Completed
          </p>
          <CustomButton
            text="See All Orders"
          />
        </div>
        <div className="client_orders_screen_row2">
          {/* <OrderCompletedListTile />
          <OrderCompletedListTile /> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

function OrderRequestListTile(){
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
        className="tos_order_list_tile_column2"
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
      <div className="tos_order_list_tile_column4">
        <div className="tos_order_list_tile_column4_buttons">
          <CustomButton
            text="Accept"
            style={{
              boxShadow: "none",
              marginBottom: "10px"
            }}
          />
          <CustomButton
            text="Discard"
            style={{
              boxShadow: "none",
              backgroundColor: "transparent",
              color: "#CC8E9C"
            }}
          />
        </div>
        <p style={{ fontSize: "16px", fontWeight: "900" }}>
          Chat Here
        </p>
      </div>
    </div>
  );
}

function OrderInProgressListTile(props){
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
          {props.order.client.name}
        </p>
      </div>
      <div
        className="tos_order_list_tile_column2"
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
            {props.order.name}
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
            {new Date(props.order.createdAt).toLocaleDateString("en-US")}
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
            {new Date(props.order.delivery.date).toLocaleDateString("en-US")}
          </p>
        </div>
      </div>
      <div className="cos_order_list_tile_column1">
        <p style={{ fontSize: "20px", fontWeight: "bold", paddingBottom: "10%" }}>
          {`${props.quote.price}$`}
        </p>
        <p style={{ fontSize: "12px", fontWeight: "200", color: "#CC8E9C" }}>
          Bill
        </p>
      </div>
      <div className="tos_order_list_tile_column4">
        <p style={{ fontSize: "16px", fontWeight: "900" }}>
          Chat Here
        </p>
        <div className="tos_order_list_tile_column4_buttons">
          <CustomButton
            text="Discard"
            style={{
              boxShadow: "none",
            }}
          />
        </div>
      </div>
    </div>
  );
}

function OrderCompletedListTile(){
  return (
    <div className="tcos_order_list_tile_container">
      <div className="tcos_order_list_tile_column1">
        <div
          className="tcos_order_list_tile_column1_img"
          style={{
            "paddingBottom": "5%"
          }}
        >
          <img style={{ width: "30%" }} src={UserSVG} />
        </div>
      </div>
      <div
        className="tcos_order_list_tile_column1"
        style={{
          padding: "3%",
          alignItems: "flex-start"
        }}
      >
        <p
          className="tcos_order_list_tile_column1_title_text"
          style={{
            paddingBottom: "10px"
          }}
        >
          Almirah
        </p>
        <p className="tcos_order_list_tile_column1_description_text">
          Bride Dresses
        </p>
      </div>
      <div
        className="tcos_order_list_tile_column1"
        style={{
          padding: "3%",
        }}
      >
        <p
          style={{
            fontSize: "12px",
            color: "#A0A0A0"
          }}
        >
          4.5(32K)
        </p>
      </div>
      <div className="tcos_order_list_tile_column1">
        <p style={{ fontSize: "12px", fontWeight: "200", color: "#A0A0A0", paddingBottom: "3%" }}>
          Offer
        </p>
        <p style={{ fontSize: "20px", fontWeight: "bold" }}>
          500$
        </p>
      </div>
      <div
        className="tcos_order_list_tile_column5"
        style={{
          marginRight: "5vw"
        }}
      >
        <div className="tcos_order_list_tile_column5_buttons">
          <CustomButton
            text="Support"
            style={{
              boxShadow: "none"
            }}
          />
          <p style={{ fontSize: "13px", fontWeight: "900", marginTop: "10px" }}>
            Completed
          </p>
        </div>
      </div>
    </div>
  );
}

export default TailorOrdersScreen;