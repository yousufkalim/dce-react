import React from "react";

import UserSVG from "../../assets/User.svg";

import AppBar from "../../components/AppBar";

import { useNavigate } from "react-router-dom";

function ClientDesignersScreen(){

  const navigate = useNavigate();

  return (
    <div className="container-page-vertical">
      <AppBar
        activeTab={0}
        color="#FCFCFC"
      />
      <div
        className="client_orders_screen_top"
        style={{
          background: "linear-gradient(to left top, #EEE9DC 0%, #F0EEEB 50%, #EEEEEE 100%), linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 1))",
        }}
      >
        <div className="client_orders_screen_row1">
          <p className="client_orders_screen_row1_text" style={{paddingLeft: "3%"}}>
            Designers
          </p>
        </div>
        <div className="client_orders_screen_row2">
          <DesignerListTile />
          <DesignerListTile />
          <DesignerListTile />
          <DesignerListTile />
          <DesignerListTile />
        </div>
      </div>
    </div>
  );
}

function DesignerListTile(){
  return (
    <div className="cds_designer_list_tile_container">
      <div className="cds_designer_list_tile_column1">
        <div
          className="cds_designer_list_tile_column1_img"
          style={{
            "paddingBottom": "5%"
          }}
        >
          <img style={{ width: "50%" }} src={UserSVG} />
        </div>
      </div>
      <div className="cds_designer_list_tile_column1" style={{ alignItems: "flex-start" }}>
        <p style={{ fontSize: "16px", fontWeight: "bold", color: "#CC8E9C", paddingBottom: "5%" }}>
          Almirah
        </p>
        <p style={{ fontSize: "10px", fontWeight: "200", color: "#A0A0A0" }}>
          Lahore, Pakistan
        </p>
      </div>
      <div className="cds_designer_list_tile_column3">
        <p style={{ fontSize: "14px", fontWeight: "400", color: "#A0A0A0" }}>
          4.5 (32K)
        </p>
      </div>
      <div className="cds_designer_list_tile_column1">
        <p style={{ fontSize: "16px", fontWeight: "bold" }}>
          Order here
        </p>
      </div>
    </div>
  );
}

export default ClientDesignersScreen;