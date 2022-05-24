import React from "react";

import AppLogoSVG from "../../assets/AppLogo.svg";
import DesignElaborationSVG from "../../assets/DesignElaboration.svg";
import ClientRole from "../../assets/ClientRole.svg";
import DesignerRole from "../../assets/DesignerRole.svg";

import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const SelectRole = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const navToClientRegister = () => {
    navigate("/client_register");
  };

  const navToTailorRegister = () => {
    navigate("/tailor_register");
  };

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
            <img style={{ width: "35%", marginBottom: "5%" }} src={AppLogoSVG} />
          </div>
          <div className="login_screen_row1_img">
            <img style={{ width: "70%" }} src={DesignElaborationSVG} />
          </div>
        </div>
        <div className="login_screen_row2">
          <h1 className="select_role_screen_heading">{t("Register As a")}</h1>
          <div className="select_role_screen_row2_container">
            <div className="select_role_screen_tile" style={{ marginRight: "15%" }} onClick={navToClientRegister}>
              <img src={ClientRole} style={{ height: "90%" }}></img>
              <p className="select_role_screen_tile_text" style={{ marginTop: "16%" }}>
                {t("Client")}
              </p>
            </div>
            <div className="select_role_screen_tile" onClick={navToTailorRegister}>
              <img src={DesignerRole}></img>
              <p className="select_role_screen_tile_text" style={{ marginTop: "16%" }}>
                {t("Designer")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectRole;
