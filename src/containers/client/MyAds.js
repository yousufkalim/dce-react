import React from "react";

import ClientAppBar from "../../components/ClientAppBar";
import CustomButton from "../../components/CustomButton";

import { useNavigate } from "react-router-dom";

function ClientAdsScreen(){

  const navigate = useNavigate();

  const navToCreateAd = () => {
    navigate("/create_ad");
  };

  return (
    <div className="container-page-vertical">
      <ClientAppBar
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
          <p className="client_orders_screen_row1_text">
            Ads
          </p>
          <CustomButton
            text="Place New Ad"
            padding="8px 20px"
            style={{
              backgroundColor: "#FFFFFF",
              color: "#000000",
              boxShadow: "none",
              fontSize: "12px",
              fontWeight: "600"
            }}
            onClick={navToCreateAd}
          />
        </div>
        <div className="client_ads_screen_row2">
          <AdListTile />
          <AdListTile />
          <AdListTile />
          <AdListTile />
          <AdListTile />
        </div>
      </div>
    </div>
  );
}

function AdListTile(){

  const navigate = useNavigate();

  const navToEditAd = () => {
    navigate("/edit_ad");
  };

  return (
    <div className="cas_ad_list_tile_container">
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
              fontWeight: "900"
            }}
          >
            Want a Shirt and pant
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
            Shirt, Pant
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
            August 25, 2022
          </p>
        </div>
      </div>
      <div className="cas_ad_list_tile_column2">
        <p className="cas_ad_list_tile_column2_title">
          min
        </p>
        <p className="cas_ad_list_tile_column2_description">
          100$
        </p>
        <p className="cas_ad_list_tile_column2_title">
          max
        </p>
        <p className="cas_ad_list_tile_column2_description">
          500$
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
          10
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
            cursor: "pointer"
          }}
        >
          Edit
        </p>
      </div>
    </div>
  );
}

export default ClientAdsScreen;