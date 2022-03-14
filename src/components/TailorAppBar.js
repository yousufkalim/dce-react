import React from "react";

import AppLogoSVG from "../assets/AppLogo.svg";
import UserSVG from "../assets/User.svg";
import NotificationsSVG from "../assets/AppBarNotifications.svg";
import SearchSVG from "../assets/AppBarSearch.svg";

import { useNavigate } from "react-router-dom";

function TailorAppBar({ activeTab, color, sticky = true, divStyle }) {
  const navigate = useNavigate();

  const navToHome = () => {
    navigate("/tailor_home");
  };

  const navToOrders = () => {
    navigate("/tailor_orders");
  };

  const navToCatalog = () => {
    navigate("/tailor_catalog");
  };

  const navToQuotes = () => {
    navigate("/tailor_quotes");
  };

  const navToProfile = () => {
    navigate("/profile");
  };

  return (
    <div
      className="appbar_container"
      style={{
        backgroundColor: color,
        position: sticky ? "fixed" : "inherit",
        ...divStyle,
      }}
    >
      <div className="appbar_top">
        <div className="appbar_row1">
          <img
            src={AppLogoSVG}
            className="appbar_row1_img"
            style={{ marginRight: "5%" }}
            onClick={navToHome}
          />
          <p
            className="appbar_row1_tab_text"
            style={{
              paddingRight: "5%",
              color: `${activeTab == 0 ? "#CC8E9C" : "#A0A0A0"}`,
            }}
            onClick={navToOrders}
          >
            Orders
          </p>
          {/*  */}
          <p
            className="appbar_row1_tab_text"
            style={{
              paddingRight: "5%",
              color: `${activeTab == 1 ? "#CC8E9C" : "#A0A0A0"}`,
            }}
            onClick={navToCatalog}
          >
            Catalog
          </p>
          <p
            className="appbar_row1_tab_text"
            style={{
              paddingRight: "5%",
              color: `${activeTab == 2 ? "#CC8E9C" : "#A0A0A0"}`,
            }}
            onClick={navToQuotes}
          >
            Quotes
          </p>
          <p
            className="appbar_row1_tab_text"
            style={{
              paddingRight: "5%",
              color: `${activeTab == 3 ? "#CC8E9C" : "#A0A0A0"}`,
            }}
          >
            Chats
          </p>
        </div>
        <div className="appbar_row2">
          <SearchInput />
          <img
            src={NotificationsSVG}
            className="appbar_row2_notifications_img"
            style={{ marginLeft: "3%" }}
          />
          <img
            src={UserSVG}
            className="appbar_row2_user_img"
            style={{ marginLeft: "3%" }}
            onClick={navToProfile}
          />
        </div>
      </div>
    </div>
  );
}

function SearchInput({}) {
  return (
    <div>
      <div
        style={{
          position: "relative",
          height: "100%",
          width: "100%",
        }}
      >
        <input type="text" placeholder="Search" className="appbar_row2_input" />
        <img src={SearchSVG} className="appbar_row2_search_img" />
      </div>
    </div>
  );
}

export default TailorAppBar;
