import React, { useState, useEffect } from "react";
import FooterLogo from "../assets/FooterLogo.svg";
import TwitterIcon from "../assets/TwitterIcon.svg";
import InstagramIcon from "../assets/Instagram.svg";
import { useTranslation } from "react-i18next";
import Api from "../api/index";

import { useNavigate } from "react-router-dom";

const Footer = () => {
  useEffect(() => {
    getProfile();
  }, []);
  const { t } = useTranslation();
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();

  const navToOrders = () => {
    navigate("/orders");
  };

  const navToQuotes = () => {
    navigate("/quotes");
  };

  const navToCatalog = () => {
    navigate("/catalog");
  };

  const navToSupport = () => {
    navigate("/support_center");
  };
  const navToTermsAndConditions = () => {
    navigate("/terms_and_conditions");
  };
  const navToMyAds = () => {
    navigate("/my_ads");
  };
  const navToDesigner = () => {
    navigate("/tailors");
  };

  const getProfile = async () => {
    let response;
    try {
      response = await Api("get", `/auth`);
      const userData = response.data.user;
      setProfile(userData);
    } catch (e) {
      console.trace(e);
    }
    return;
  };
  return (
    <div className="footer_main_div">
      <img src={FooterLogo} style={{ height: "50%" }}></img>

      <div>
        <ul className="footer_list">
          <li onClick={navToOrders}>{t("Orders")}</li>
          {profile?.role === "client" ? <li onClick={navToMyAds}>{t("My Ads")}</li> : null}
          {profile?.role === "client" ? <li onClick={navToDesigner}>{t("Designers")}</li> : null}
          {profile?.role === "tailor" ? <li onClick={navToQuotes}>{t("Quotes")}</li> : null}
          {profile?.role === "tailor" ? <li onClick={navToCatalog}>{t("Catalogue")}</li> : null}
          <li onClick={navToSupport}>{t("Support")}</li>
          <li onClick={navToTermsAndConditions}>{t("Terms and Conditions")}</li>
        </ul>
        <div className="footer_icon_div">
          <div>
            <p>
              © 2022 <span className="footer_bottom_text">Design Confection Ethiques</span>
              {t(", Developed by Falcon Consulting. All rights reserved.")}
            </p>
          </div>
          <div>
            <img src={InstagramIcon} className="footer_icon"></img>
            <img src={TwitterIcon} className="footer_icon"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
