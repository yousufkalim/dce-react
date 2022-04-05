import React, { useState, useEffect } from "react";

import AppLogoSVG from "../assets/AppLogo.svg";
import UserSVG from "../assets/User.svg";
import NotificationsSVG from "../assets/AppBarNotifications.svg";
import SearchSVG from "../assets/AppBarSearch.svg";

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import Api from "../api";

import { handleLogout } from "../utils/Auth";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import assetsURL from "../utils/Assets";

function TailorAppBar({
  activeTab,
  color,
  sticky = true,
  divStyle
}) {

  const navigate = useNavigate();

  const handleClickNotifications = () => {
    toast.success("Coming soon!");
  };

  const [anchorElProfile, setAnchorElProfile] = React.useState(null);
  const openProfile = Boolean(anchorElProfile);
  const handleClickProfile = (event) => {
    setAnchorElProfile(event.currentTarget);
  };
  const handleCloseProfile = () => {
    setAnchorElProfile(null);
  };

  const navToHome = () => {
    navigate("/home");
  };

  const navToOrders = () => {
    navigate("/orders");
  };

  const navToCatalog = () => {
    navigate("/catalog");
  };

  const navToQuotes = () => {
    navigate("/quotes");
  };

  const navToChat = () => {
    handleCloseProfile();
    toast.success("Coming soon!");
  };

  const navToProfile = () => {
    handleCloseProfile();
    navigate("/profile");
  };

  const navToSupport = () => {
    handleCloseProfile();
    toast.success("Coming soon!");
  };

  const navToTermsAndConditions = () => {
    handleCloseProfile();
    navigate("/terms_and_conditions");
  };

  const handleLogoutSubmit = () => {
    handleCloseProfile();
    handleLogout(navigate);
  }

  const [profile, setProfile] = useState(null);

  useEffect(() => {
    getProfile();
  }, []);

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
            onClick={navToChat}
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
            onClick={handleClickNotifications}
          />
          <img
            className="appbar_row2_user_img image_container"
            style={{
              width: "6vh",
              height: "6vh",
              marginLeft: "3%"
            }}
            src={
              profile?.avatar
              ? assetsURL(profile.avatar)
              : UserSVG
            }
            onClick={handleClickProfile}
          />
          <Menu
            id="basic-menu"
            anchorEl={anchorElProfile}
            open={openProfile}
            onClose={handleCloseProfile}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={navToProfile}>Profile</MenuItem>
            <MenuItem onClick={navToSupport}>Support</MenuItem>
            <MenuItem onClick={navToTermsAndConditions}>Terms and Conditions</MenuItem>
            <MenuItem onClick={handleLogoutSubmit}>Logout</MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
}

function SearchInput({}) {

  const callback = () => {
    toast.success("Coming soon!");
  };

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
        <img onClick={callback} src={SearchSVG} className="appbar_row2_search_img" />
      </div>
    </div>
  );
  
}

export default TailorAppBar;
