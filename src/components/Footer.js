import React from "react";
import FooterLogo from "../assets/FooterLogo.svg";
import FacebookIcon from "../assets/FacebookIcon.svg";
import TwitterIcon from "../assets/TwitterIcon.svg";
import LinkedinIcon from "../assets/LinkedinIcon.svg";

const Footer = () => {
  return (
    <>
      <div className="Footer_main_div">
        <img src={FooterLogo}></img>
        <p style={{ paddingTop: "1%" }}>Terms & conditions</p>
        <div>
          <ul className="Footer_list">
            <li>Orders</li>
            <li>Qoutes</li>
            <li>catalog</li>
            <li>Help</li>
            <li>Privacy Policy</li>
          </ul>
          <div className="Footer_icon_div">
            <div>
              <p>
                © 2022
                <span className="Footer_designConfection_text">
                  Design Confection Ethiques
                </span>
                , Developed by Falcon Consulting. All rights reserved.
              </p>
            </div>
            <div>
              <img src={FacebookIcon} className="Footer_icon"></img>
              <img src={TwitterIcon} className="Footer_icon"></img>
              <img src={LinkedinIcon}></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
