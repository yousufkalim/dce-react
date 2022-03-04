import React from "react";
import Footer from "../../components/Footer";

import AppLogoSVG from "../../assets/AppLogo.svg";
import DesignElaborationSVG from "../../assets/DesignElaboration.svg";
import ClientRole from "../../assets/ClientRole.svg";
import DesignerRole from "../../assets/DesignerRole.svg";

const selectRole = () => {
  return (
    <div
      className="container"
      style={{
        background:
          "linear-gradient(to left top, #EEE9DC 0%, #F0EEEB 50%, #EEEEEE 100%), linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 1))",
      }}
    >
      <div className="login_screen_top">
        <div className="login_screen_row1">
          <div className="login_screen_row1_img">
            <img
              style={{ width: "35%", marginBottom: "5%" }}
              src={AppLogoSVG}
            />
          </div>
          <div className="login_screen_row1_img">
            <img style={{ width: "70%" }} src={DesignElaborationSVG} />
          </div>
        </div>
        <div className="login_screen_row2">
          <h1 className="selectrole_heading">Register As a</h1>
          <div className="selectrole_row2_container">
            <div className="selectrole_tile" style={{ marginRight: "15%" }}>
              <img src={ClientRole} style={{ height: "90%" }}></img>
              <p className="custom_input_label" style={{ marginTop: "16%" }}>
                Client
              </p>
            </div>
            <div className="selectrole_tile">
              <img src={DesignerRole}></img>
              <p className="custom_input_label" style={{ marginTop: "16%" }}>
                Designer
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default selectRole;
