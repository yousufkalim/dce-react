import React, { useState, useEffect } from "react";

import UserSVG from "../../assets/User.svg";
import { useTranslation } from "react-i18next";

import TailorAppBar from "../../components/TailorAppBar";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import NoOrders from '../../components/NoOrders'
import Footer from "../../components/Footer";

import Modal from "@mui/material/Modal";

import { useNavigate } from "react-router-dom";

import { getUser } from "../../utils/Auth";
import Api from "../../api";

import assetsURL from "../../utils/Assets";

function TailorQuotesScreen() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    getQuotes();
  }, []);

  const getQuotes = async () => {
    let response;
    try {
      response = await Api("post", `/orders/byQuery`, {
        status: "pending",
        tailor: null,
      });
      const quotesData = response.data.orders;
      setQuotes(quotesData);
      setIsLoading(false);
    } catch (e) {
      console.trace(e);
    }
  };

  return (
    <div className="container-page-vertical">
      <TailorAppBar activeTab={2} color="#FCFCFC" />
      <div
        className="client_orders_screen_top"
        style={{
          background:
            "linear-gradient(to left top, #F2DCD7 0%, #F3E0E1 50%, #F2DFE2 100%), linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 1))",
        }}
      >
      {
       quotes.length>0?(
         <>
        
        <div className="client_ads_screen_row1"></div>
        <div className="client_ads_screen_row2">
          {quotes?.map((_) => (
            <QuoteListTile {..._} />
          ))}
        </div>
      
         </>
       ):<NoOrders/> 
      }
      </div>
      <Footer />
    </div>
  );
}

function QuoteListTile(props) {
  const { t } = useTranslation();

  const user = getUser();
  const [isSendOfferModal, setIsSendOfferModal] = useState(false);
  const handleSendOfferModalOpen = (e) => {
    navToViewQuote();
  };
  const handleSendOfferModalClose = (e) => {
    setIsSendOfferModal(false);
  };

  const navigate = useNavigate();

  const navToViewQuote = (e) => {
    e.stopPropagation();
    navigate(`/view_quote/${props._id}`);
  };

  const navToChat = (e) => {
    e.stopPropagation();
    navigate(`/chat`, { state: { directUser: props.client } });
  };

  return (
    <div className="cas_ad_list_tile_container" onClick={navToViewQuote}>
      <div className="tqs_quote_list_tile_column0">
        <div
          className="tqs_quote_list_tile_column0_img"
          style={{
            paddingBottom: "5%",
          }}
        >
          <img
            className="image_container"
            style={{
              height: "65pt",
              width: "65pt",
            }}
            src={props?.client?.avatar ? assetsURL(props?.client?.avatar) : UserSVG}
          />
        </div>
        <p className="tqs_quote_list_tile_column0_title_text">
          {props?.client?.name}
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
            {t("Name of Creation")}
          </p>
          <p
            className="cas_ad_list_tile_column1_item_value"
            style={{
              fontWeight: "900",
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
          <p className="cas_ad_list_tile_column1_item_key">{t("Ad for")}</p>
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
            {t("Delivery Date")}
          </p>
          <p className="cas_ad_list_tile_column1_item_value">
            {new Date(props?.delivery?.date).toLocaleDateString("en-US")}
          </p>
        </div>
      </div>
      <div className="cas_ad_list_tile_column2">
        <p className="cas_ad_list_tile_column2_title">{t("min")}</p>
        <p className="cas_ad_list_tile_column2_description">
          {`${props?.budget?.min_price}$`}
        </p>
        <p className="cas_ad_list_tile_column2_title">{t("max")}</p>
        <p className="cas_ad_list_tile_column2_description">
          {`${props?.budget?.max_price}$`}
        </p>
        <p
          style={{
            fontSize: "16px",
            color: "#CC8E9C",
          }}
        >
          {t("Range")}
        </p>
      </div>
      <div className="cas_ad_list_tile_column2">
        <p
          style={{
            fontSize: "40px",
            fontWeight: "bold",
            paddingBottom: "2.5%",
          }}
        >
          {props.quotes.length}
        </p>
        <p style={{ fontSize: "12px", fontWeight: "200", color: "#CC8E9C" }}>
          {t("Responses")}
        </p>
      </div>
      <div className="tqs_quote_list_tile_column5">
        <div className="tqs_quote_list_tile_column5_buttons">
          {props?.quotes?.some((_) => _.tailor._id == user._id) ? (
            <>
              <p style={{ fontSize: "16px", fontWeight: "900" }}>
                {t("Offer Sent")}
              </p>
            </>
          ) : (
            <>
              <CustomButton
                text={t("Send Offer")}
                style={{
                  boxShadow: "none",
                  marginBottom: "10px",
                }}
                onClick={handleSendOfferModalOpen}
              />
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: "600",
                  color: "#CC8E9C",
                  cursor: "pointer",
                }}
                onClick={navToChat}
              >
                {t("Chat Here")}
              </p>
            </>
          )}
        </div>
      </div>
      <Modal
        open={isSendOfferModal}
        onClose={handleSendOfferModalClose}
        aria-labelledby={t("Send Offer")}
      >
        <SendQuoteModal handleClose={handleSendOfferModalClose} />
      </Modal>
    </div>
  );
}

function SendQuoteModal({ handleClose }) {
  const { t } = useTranslation();

  return (
    <div className="tqs_sqm_container">
      <div
        className="tqs_sqm_input_container"
        style={{
          borderBottomLeftRadius: "20px",
          borderBottomRightRadius: "20px",
          marginBottom: "2%",
        }}
      >
        <div className="tqs_sqm_input_label">
          <p className="tqs_sqm_input_text">{t("Price")}</p>
        </div>
        <div className="tqs_sqm_input_input">
          <CustomInput
            labelStyle={{
              display: "none",
            }}
            inputStyle={{
              border: "none",
              fontSize: "12px",
            }}
            inputPlaceholder={t("Set Your Price")}
          />
        </div>
      </div>
      <div
        className="tqs_sqm_textarea_container"
        style={{
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px",
          marginBottom: "10%",
        }}
      >
        <div className="tqs_sqm_textarea_label">
          <p className="tqs_sqm_input_text">{t("Description")}</p>
        </div>
        <div className="tqs_sqm_input_input">
          <textarea
            className="tqs_sqm_textarea_textarea"
            placeholder={t("Tell us")}
          ></textarea>
        </div>
      </div>
      <CustomButton
        text={t("Send Offer")}
        style={{
          boxShadow: "none",
          marginBottom: "10px",
        }}
        onClick={handleClose}
      />
    </div>
  );
}

export default TailorQuotesScreen;
