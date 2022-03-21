import React, { useState, useEffect } from "react";

import UserSVG from "../../assets/User.svg";

import TailorAppBar from "../../components/TailorAppBar";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import Footer from "../../components/Footer";

import Modal from '@mui/material/Modal';

import { useNavigate } from "react-router-dom";

import { getUser } from "../../utils/Auth"
import Api from "../../api";

function TailorQuotesScreen(){

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    getQuotes();
  }, []);

  const getQuotes = async () => {
    let response;
    try {
      response = await Api("get", `/orders/quotes`);
      const quotesData = response.data.orders;
      setQuotes(quotesData);
      setIsLoading(false);
    } catch (e) {
      console.trace(e);
    }
  };

  return (
    <div className="container-page-vertical">
      <TailorAppBar
        activeTab={2}
        color="#FCFCFC"
      />
      <div
        className="client_orders_screen_top"
        style={{
          background: "linear-gradient(to left top, #F2DCD7 0%, #F3E0E1 50%, #F2DFE2 100%), linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 1))",
        }}
      >
        <div className="client_ads_screen_row1">
        </div>
        <div className="client_ads_screen_row2">
          {
            quotes.map(
              _ =>
              <QuoteListTile {..._} />
            )
          }
        </div>
      </div>
      <Footer />
    </div>
  );
}

function QuoteListTile(props){

  const user = getUser();
  const [isSendOfferModal, setIsSendOfferModal] = useState(false);
  const handleSendOfferModalOpen = (e) => {
    // e.stopPropogation();
    // setIsSendOfferModal(true);
    navToViewQuote();
  } 
  const handleSendOfferModalClose = (e) => {
    setIsSendOfferModal(false);
  }

  const navigate = useNavigate();

  const navToViewQuote = (e) => {
    navigate(`/view_quote/${props._id}`);
  };

  return (
    <div
      className="cas_ad_list_tile_container"
      onClick={navToViewQuote}
    >
      <div className="tqs_quote_list_tile_column0">
        <div
          className="tqs_quote_list_tile_column0_img"
          style={{
            "paddingBottom": "5%"
          }}
        >
          <img style={{ width: "30%" }} src={UserSVG} />
        </div>
        <p className="tqs_quote_list_tile_column0_title_text">
          {props.client.name}
        </p>
      </div>
      <div
        className="tqs_quote_list_tile_column1"
        style={{
          padding: "3%",
        }}
      >
        <div
          className="cas_ad_list_tile_column1_item"
          style={{
            padding: "2% 0",
          }}
        >
          <p className="cas_ad_list_tile_column1_item_key">
            Name of Creation
          </p>
          <p
            className="cas_ad_list_tile_column1_item_value"
            style={{
              fontWeight: "900"
            }}
          >
            {props.name}
          </p>
        </div>
        <div
          className="cas_ad_list_tile_column1_item cas_ad_list_tile_column1_item_borders"
          style={{
            padding: "2% 0",
          }}
        >
          <p className="cas_ad_list_tile_column1_item_key">
            Ad for
          </p>
          <p className="cas_ad_list_tile_column1_item_value">
            {props.category}
          </p>
        </div>
        <div
          className="cas_ad_list_tile_column1_item"
          style={{
            padding: "2% 0",
          }}
        >
          <p className="cas_ad_list_tile_column1_item_key">
            Delivery Date
          </p>
          <p className="cas_ad_list_tile_column1_item_value">
            {new Date(props.delivery.date).toLocaleDateString("en-US")}
          </p>
        </div>
      </div>
      <div className="cas_ad_list_tile_column2">
        <p className="cas_ad_list_tile_column2_title">
          min
        </p>
        <p className="cas_ad_list_tile_column2_description">
          {`${props.budget.min_price}$`}
        </p>
        <p className="cas_ad_list_tile_column2_title">
          max
        </p>
        <p className="cas_ad_list_tile_column2_description">
          {`${props.budget.max_price}$`}
        </p>
        <p
          style={{
            fontSize: "16px",
            color: "#CC8E9C"
          }}
        >
          Range
        </p>
      </div>
      <div className="cas_ad_list_tile_column2">
        <p style={{ fontSize: "40px", fontWeight: "bold", paddingBottom: "2.5%" }}>
          {props.quotes.length}
        </p>
        <p style={{ fontSize: "12px", fontWeight: "200", color: "#CC8E9C" }}>
          Responses
        </p>
      </div>
      <div className="tqs_quote_list_tile_column5">
        <div className="tqs_quote_list_tile_column5_buttons">
          {
            props.quotes.some(_ => _.tailor._id == user._id)
            ? <>
                <p style={{ fontSize: "16px", fontWeight: "900" }}>
                  Offer Sent
                </p>
              </>
            : <>
                <CustomButton
                  text="Send Offer"
                  style={{
                    boxShadow: "none",
                    marginBottom: "10px"
                  }}
                  onClick={handleSendOfferModalOpen}
                />
                <p style={{ fontSize: "12px", fontWeight: "600", color: "#CC8E9C" }}>
                  Chat Here
                </p>
              </>
          }
        </div>
      </div>
      <Modal
        open={isSendOfferModal}
        onClose={handleSendOfferModalClose}
        aria-labelledby="Send Offer"
      >
        <SendQuote
          handleClose={handleSendOfferModalClose}
        />
      </Modal>
    </div>
  );
}

function SendQuote({
  handleClose
}){
  return (
    <div className="tqs_sqm_container">
      <div
        className="tqs_sqm_input_container"
        style={{
          borderBottomLeftRadius: "20px",
          borderBottomRightRadius: "20px",
          marginBottom: "2%"
        }}
      >
        <div className="tqs_sqm_input_label">
          <p className="tqs_sqm_input_text">
            Price
          </p>
        </div>
        <div className="tqs_sqm_input_input">
          <CustomInput
            labelStyle={{
              display: "none"
            }}
            inputStyle={{
              border: "none",
              fontSize: "12px"
            }}
            inputPlaceholder="Set Your Price"
          />
        </div>
      </div>
      <div
        className="tqs_sqm_textarea_container"
        style={{
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px",
          marginBottom: "10%"
        }}
      >
        <div className="tqs_sqm_textarea_label">
          <p className="tqs_sqm_input_text">
            Description
          </p>
        </div>
        <div className="tqs_sqm_input_input">
          <textarea
            className="tqs_sqm_textarea_textarea"
            placeholder="Tell us"
          >
          </textarea>
        </div>
      </div>
      <CustomButton
        text="Send Offer"
        style={{
          boxShadow: "none",
          marginBottom: "10px"
        }}
        onClick={handleClose}
      />
    </div>
  );
}

export default TailorQuotesScreen;