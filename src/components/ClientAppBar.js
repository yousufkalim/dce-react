import React, { useState, useEffect } from "react";

import AppLogoSVG from "../assets/AppLogo.svg";
import UserSVG from "../assets/User.svg";
import NotificationsSVG from "../assets/AppBarNotifications.svg";
import SearchSVG from "../assets/AppBarSearch.svg";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import NotificationsListTile from "./NotificationsListTile";

import { handleLogout } from "../utils/Auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import dotted from "../assets/dotted.svg";

import Api from "../api";
import assetsURL from "../utils/Assets";
import { Store, UpdateStore } from "../StoreContext";
import { useTranslation } from "react-i18next";

function useWindowSize() {
  const [size, setSize] = useState([window.innerWidth]);
  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerWidth]);
    };
    window.addEventListener("resize", handleResize);
  }, []);
  return size;
}

function ClientAppBar({ activeTab, color, sticky = true, disableSearch = false, divStyle }) {
  const { t } = useTranslation();

  const [width] = useWindowSize();
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(true);

  const [anchorElProfile, setAnchorElProfile] = React.useState(null);
  const openProfile = Boolean(anchorElProfile);
  const handleClickProfile = (event) => {
    setAnchorElProfile(event.currentTarget);
  };
  const handleCloseProfile = () => {
    setAnchorElProfile(null);
  };

  const [anchorElNotifications, setAnchorElNotifications] = React.useState(null);
  const openNotifications = Boolean(anchorElNotifications);
  const handleClickNotifications = (event) => {
    setAnchorElNotifications(event.currentTarget);
  };
  const handleCloseNotifications = () => {
    setAnchorElNotifications(null);
  };

  const [searchQuery, setSearchQuery] = useState("");
  const store = Store();
  const updateStore = UpdateStore();

  const navToHome = () => {
    navigate("/home");
  };

  const navToSearch = () => {
    if (!searchQuery) {
      toast.error(t("Search Input can't be empty"));
      return;
    }
    navigate(`/search_results?query=${searchQuery}`);
  };

  const navToProfile = () => {
    navigate("/profile");
  };

  const navToSupport = () => {
    handleCloseProfile();
    toast.success(t("Coming soon!"));
  };

  const navToTermsAndConditions = () => {
    handleCloseProfile();
    navigate("/terms_and_conditions");
  };

  const handleLogoutSubmit = () => {
    handleCloseProfile();
    handleLogout(navigate, store, updateStore);
  };

  const [profile, setProfile] = useState(null);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    getProfile();
    getNotifications();
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

  const getNotifications = async () => {
    let response;
    try {
      response = await Api("get", `/notifications`);
      console.log(response.data);
      const notificationsData = response.data.notifications.splice(-10);
      setNotifications(notificationsData);
    } catch (e) {
      console.trace(e);
    }
    return;
  };

  const mobilemenu = () => {
    setToggle(!toggle);
  };

  const { i18n } = useTranslation();
  const { language } = i18n;
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
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
            <img src={AppLogoSVG} className="appbar_row1_img" style={{ marginRight: "5%" }} onClick={navToHome} />
            {width > 768 ? (
              <>
                <NavlinkDesktop activeTab={activeTab} />
              </>
            ) : (
              <img className="cursor-pointer" onClick={mobilemenu} src={dotted} />
            )}
          </div>

          <div className="appbar_row2">
            {!disableSearch ? <SearchInput setSearchQuery={setSearchQuery} callback={navToSearch} /> : <></>}
            <img
              src={NotificationsSVG}
              className="appbar_row2_notifications_img"
              style={{ marginLeft: "3%" }}
              onClick={handleClickNotifications}
            />
            <Menu
              id="basic-menu"
              anchorEl={anchorElNotifications}
              open={openNotifications}
              onClose={handleCloseNotifications}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              {notifications.map((_) => (
                <NotificationsListTile {..._} handleClose={handleCloseNotifications} />
              ))}
            </Menu>
            <img
              className="appbar_row2_user_img image_container"
              style={{
                width: "6vh",
                height: "6vh",
                marginLeft: "3%",
              }}
              src={profile?.avatar ? assetsURL(profile.avatar) : UserSVG}
              onClick={handleClickProfile}
            />
            <Menu
              id="basic-menu"
              anchorEl={anchorElProfile}
              open={openProfile}
              onClose={handleCloseProfile}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={() => changeLanguage(`${language == "en" ? "fr" : "en"}`)}>
                {language == "fr" ? "French" : "English"}
              </MenuItem>
              <MenuItem onClick={navToProfile}>{t("Profile")}</MenuItem>
              <MenuItem onClick={navToSupport}>{t("Support")}</MenuItem>
              <MenuItem onClick={navToTermsAndConditions}>{t("Terms and Conditions")}</MenuItem>
              <MenuItem onClick={handleLogoutSubmit}>{t("Logout")}</MenuItem>
            </Menu>
          </div>
        </div>
      </div>
      {width <= 768 && !toggle ? <NavlinkMobile /> : null}
    </>
  );
}

function SearchInput({ setSearchQuery, callback }) {
  const { t } = useTranslation();

  return (
    <div>
      <div
        style={{
          position: "relative",
          height: "100%",
          width: "100%",
        }}
      >
        <input
          type="text"
          placeholder={t("Search")}
          className="appbar_row2_input"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <img src={SearchSVG} className="appbar_row2_search_img" onClick={callback} />
      </div>
    </div>
  );
}
function NavlinkDesktop({ activeTab }) {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const navToOrders = () => {
    navigate("/orders");
  };

  const navToDesigners = () => {
    navigate("/tailors");
  };

  const navToMyAds = () => {
    navigate("/my_ads");
  };

  const navToChat = () => {
    navigate("/chat");
  };
  return (
    <>
      <p
        className="appbar_row1_tab_text"
        style={{
          paddingRight: "5%",
          color: `${activeTab == 0 ? "#CC8E9C" : "#A0A0A0"}`,
        }}
        onClick={navToDesigners}
      >
        {t("Designers")}
      </p>
      <p
        className="appbar_row1_tab_text"
        style={{
          paddingRight: "5%",
          color: `${activeTab == 1 ? "#CC8E9C" : "#A0A0A0"}`,
        }}
        onClick={navToOrders}
      >
        {t("Orders")}
      </p>
      <p
        className="appbar_row1_tab_text"
        style={{
          paddingRight: "5%",
          color: `${activeTab == 2 ? "#CC8E9C" : "#A0A0A0"}`,
        }}
        onClick={navToMyAds}
      >
        {t("My Ads")}
      </p>
      <p
        className="appbar_row1_tab_text"
        style={{
          paddingRight: "5%",
          color: `${activeTab == 3 ? "#CC8E9C" : "#A0A0A0"}`,
        }}
        onClick={navToChat}
      >
        {t("Chats")}
      </p>
    </>
  );
}

function NavlinkMobile({ activeTab }) {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const navToOrders = () => {
    navigate("/orders");
  };

  const navToDesigners = () => {
    navigate("/tailors");
  };

  const navToMyAds = () => {
    navigate("/my_ads");
  };

  const navToChat = () => {
    navigate("/chat");
  };

  return (
    <div className="mobile-nav">
      <p
        className="appbar_row1_tab_text"
        style={{
          paddingRight: "5%",
          color: `${activeTab == 0 ? "#CC8E9C" : "#A0A0A0"}`,
        }}
        onClick={navToDesigners}
      >
        {t("Designers")}
      </p>
      <p
        className="appbar_row1_tab_text"
        style={{
          paddingRight: "5%",
          color: `${activeTab == 1 ? "#CC8E9C" : "#A0A0A0"}`,
        }}
        onClick={navToOrders}
      >
        {t("Orders")}
      </p>
      <p
        className="appbar_row1_tab_text"
        style={{
          paddingRight: "5%",
          color: `${activeTab == 2 ? "#CC8E9C" : "#A0A0A0"}`,
        }}
        onClick={navToMyAds}
      >
        {t("My Ads")}
      </p>
      <p
        className="appbar_row1_tab_text"
        style={{
          paddingRight: "5%",
          color: `${activeTab == 3 ? "#CC8E9C" : "#A0A0A0"}`,
        }}
        onClick={navToChat}
      >
        {t("Chats")}
      </p>
    </div>
  );
}
export default ClientAppBar;
