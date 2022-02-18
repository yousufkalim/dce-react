import React from "react";

import AppLogoSVG from "../assets/AppLogo.svg";
import UserSVG from "../assets/User.svg";
import NotificationsSVG from "../assets/AppBarNotifications.svg";
import SearchSVG from "../assets/AppBarSearch.svg";

function AppBar({
  activeTab,
  color,
  sticky = true,
  divStyle
}){
  return (
    <div
      className="appbar_container"
      style={{
        backgroundColor: color,
        position: sticky ? "fixed" : "inherit",
        ...divStyle
      }}
    >
      <div className="appbar_top">
        <div className="appbar_row1">
          <img src={AppLogoSVG} className="appbar_row1_img" style={{ marginRight: "5%" }} />
          <p className="appbar_row1_tab_text" style={{ paddingRight: "5%" }}>Designers</p>
          <p className="appbar_row1_tab_text" style={{ paddingRight: "5%" }}>Orders</p>
          <p className="appbar_row1_tab_text" style={{ paddingRight: "5%" }}>My Ads</p>
          <p className="appbar_row1_tab_text" style={{ paddingRight: "5%" }}>Chats</p>
        </div>
        <div className="appbar_row2">
          <SearchInput />
          <img src={NotificationsSVG} className="appbar_row2_notifications_img" style={{ marginLeft: "3%" }} />
          <img src={UserSVG} className="appbar_row2_user_img" style={{ marginLeft: "3%" }} />
        </div>
      </div>
    </div>
  );
}

function SearchInput({

}){
  return (
    <div>
      <div
        style={{
          position: "relative",
          height: "100%",
          width: "100%"
        }}
      >
        <input
          type="text"
          placeholder="Search"
          className="appbar_row2_input"
        />
        <img
          src={SearchSVG}
          className="appbar_row2_search_img"
        />
      </div>
    </div>
  );
}

export default AppBar;