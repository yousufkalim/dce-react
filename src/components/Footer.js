import React from "react";
import FooterLogo from "../assets/FooterLogo.svg";
import FacebookIcon from "../assets/FacebookIcon.svg";
import TwitterIcon from "../assets/TwitterIcon.svg";
import LinkedinIcon from "../assets/LinkedinIcon.svg";

import { useNavigate } from "react-router-dom";

const Footer = () => {
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

  const navToHowItWorks = () => {
    navigate("/how_it_works");
  };

  return (
    <div className="footer_main_div">
      <img src={FooterLogo} style={{ height: "50%" }}></img>
      <p style={{ paddingTop: "1%" }}>Terms & conditions</p>
      <div>
        <ul className="footer_list">
          <li onClick={navToOrders}>Orders</li>
          <li onClick={navToQuotes}>Quotes</li>
          <li onClick={navToCatalog}>Catalog</li>
          <li onClick={navToHowItWorks}>Help</li>
          <li>Privacy Policy</li>
        </ul>
        <div className="footer_icon_div">
          <div>
            <p>
              © 2022
              <span className="footer_bottom_text">
                Design Confection Ethiques
              </span>
              , Developed by Falcon Consulting. All rights reserved.
            </p>
          </div>
          <div>
            <img src={FacebookIcon} className="footer_icon"></img>
            <img src={TwitterIcon} className="footer_icon"></img>
            <img
              src={LinkedinIcon}
              className="footer_icon"
              style={{ padding: "0" }}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
