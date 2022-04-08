import React, { useState, useEffect } from "react";

import ClientAppBar from "../../components/ClientAppBar";
import CustomButton from "../../components/CustomButton";

import UserSVG from "../../assets/User.svg";

import Collapse from "@mui/material/Collapse";

import { useNavigate } from "react-router-dom";

import { getUser } from "../../utils/Auth";
import Api from "../../api";
import { toast } from "react-toastify";

import assetsURL from "../../utils/Assets";

function ClientAdsScreen() {
  const navigate = useNavigate();

  const [isProcessing, setIsProcessing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [ads, setAds] = useState([]);
  const user = getUser();

  useEffect(() => {
    getAds();
  }, []);

  const getAds = async () => {
    let response;
    try {
      response = await Api("post", `/orders/byQuery`, {
        client: user._id,
        type: "ad",
        status: "pending",
      });
      const adsData = response.data.orders;
      setAds(adsData);
      setIsLoading(false);
    } catch (e) {
      console.trace(e);
    }
  };

  const acceptQuote = async (event, id) => {
    event.preventDefault();

    if (isProcessing) {
      return;
    }

    let response;

    try {
      setIsProcessing(true);

      const body = {
        quote: id,
      };

      response = await Api("post", "/quotes/accept", body);

      if (response?.data?.success) {
        toast.success(response.data.message);
        getAds();
      }
    } catch (e) {
      console.trace(e);
    }

    setIsProcessing(false);
  };

  const navToCreateAd = () => {
    navigate("/create_ad");
  };

  return (
    <div className="container-page-vertical">
      <ClientAppBar activeTab={2} color="#FCFCFC" />
      <div
        className="client_orders_screen_top"
        style={{
          background:
            "linear-gradient(to left top, #F2DCD7 0%, #F3E0E1 50%, #F2DFE2 100%), linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 1))",
        }}
      >
        <div className="client_ads_screen_row1">
          <p className="client_orders_screen_row1_text">Ads</p>
          <CustomButton
            text="Place New Ad"
            padding="8px 20px"
            style={{
              backgroundColor: "#FFFFFF",
              color: "#000000",
              boxShadow: "none",
              fontSize: "12px",
              fontWeight: "600",
            }}
            onClick={navToCreateAd}
          />
        </div>
        <div className="client_ads_screen_row2">
          {ads.map((_) => (
            <AdListTile {..._} acceptQuote={acceptQuote} />
          ))}
        </div>
      </div>
    </div>
  );
}

function AdListTile(props) {
  const navigate = useNavigate();

  const [expanded, setExpanded] = React.useState(false);

  const navToEditAd = () => {
    navigate(`/edit_ad/${props._id}`);
  };

  return (
    <div className="cas_ad_list_tile_container_collapsible">
      <div
        className="cas_ad_list_tile_container"
        onClick={() => setExpanded(!expanded)}
      >
        <div
          className="cas_ad_list_tile_column1"
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
            <p className="cas_ad_list_tile_column1_item_key">Ad for</p>
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
            <p className="cas_ad_list_tile_column1_item_key">Delivery Date</p>
            <p className="cas_ad_list_tile_column1_item_value">
              {new Date(props.delivery.date).toLocaleDateString("en-US")}
            </p>
          </div>
        </div>
        <div className="cas_ad_list_tile_column2">
          <p className="cas_ad_list_tile_column2_title">min</p>
          <p className="cas_ad_list_tile_column2_description">
            {`${props.budget.min_price}$`}
          </p>
          <p className="cas_ad_list_tile_column2_title">max</p>
          <p className="cas_ad_list_tile_column2_description">
            {`${props.budget.max_price}$`}
          </p>
          <p
            style={{
              fontSize: "16px",
              color: "#CC8E9C",
            }}
          >
            Range
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
            Responses
          </p>
        </div>
        <div className="cas_ad_list_tile_column4">
          <p
            onClick={navToEditAd}
            style={{
              fontSize: "16px",
              fontWeight: "bold",
              color: "#CC8E9C",
              cursor: "pointer",
            }}
          >
            Edit
          </p>
        </div>
      </div>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        {props?.quotes?.map((_) => (
          <AdQuoteListTile {..._} acceptQuote={props.acceptQuote} />
        ))}
      </Collapse>
    </div>
  );
}

function AdQuoteListTile(props) {
  return (
    <div className="cas_quote_list_tile_container">
      <div className="cas_quote_list_tile_column1">
        <div
          className="cas_quote_list_tile_column1_img"
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
            src={props.tailor.avatar ? assetsURL(props.tailor.avatar) : UserSVG}
          />
        </div>
      </div>
      <div
        className="cas_quote_list_tile_column1"
        style={{
          padding: "3%",
          alignItems: "flex-start",
        }}
      >
        <p
          className="cas_quote_list_tile_column1_title_text"
          style={{
            paddingBottom: "10px",
          }}
        >
          {props.tailor.name}
        </p>
        <p className="cas_quote_list_tile_column1_description_text">
          {props.tailor.speciality}
        </p>
      </div>
      <div
        className="cas_quote_list_tile_column1"
        style={{
          padding: "3%",
        }}
      >
        <p
          style={{
            fontSize: "12px",
            color: "#A0A0A0",
          }}
        >
          {props?.tailor?.rating?.value ?? "5"}(
          {props?.tailor?.rating?.count ?? "10"})
        </p>
      </div>
      <div className="cas_quote_list_tile_column1">
        <p
          style={{
            fontSize: "12px",
            fontWeight: "200",
            color: "#A0A0A0",
            paddingBottom: "3%",
          }}
        >
          Offer
        </p>
        <p style={{ fontSize: "20px", fontWeight: "bold" }}>
          {`${props.price}$`}
        </p>
      </div>
      <div
        className="cas_quote_list_tile_column5"
        style={{
          marginRight: "5vw",
        }}
      >
        <div className="cas_quote_list_tile_column5_buttons">
          <CustomButton
            text="Accept"
            onClick={(e) => props.acceptQuote(e, props._id)}
            style={{
              boxShadow: "none",
            }}
          />
          <p
            style={{
              fontSize: "13px",
              fontWeight: "900",
              marginTop: "10px",
              cursor: "pointer",
            }}
          >
            Discard
          </p>
        </div>
      </div>
      <div className="cas_quote_list_tile_column1">
        <p style={{ fontSize: "14px", fontWeight: "900" }}>Chat Here</p>
      </div>
    </div>
  );
}

export default ClientAdsScreen;
