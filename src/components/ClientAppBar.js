import React from "react";

import AppLogoSVG from "../assets/AppLogo.svg";
import UserSVG from "../assets/User.svg";
import NotificationsSVG from "../assets/AppBarNotifications.svg";
import SearchSVG from "../assets/AppBarSearch.svg";

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { handleLogout } from "../utils/Auth";

import { useNavigate} from "react-router-dom";
import { toast } from "react-toastify";

function ClientAppBar({
  activeTab,
  color,
  sticky = true,
  divStyle
}){

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

  const navToTailors = () => {
    navigate("/tailors");
  };

  const navToMyAds = () => {
    navigate("/my_ads");
  };

  const navToChat = () => {
    navigate("/chat");
  };

  const navToProfile = () => {
    navigate("/profile");
  };

  const handleLogoutSubmit = () => {
    handleCloseProfile();
    handleLogout(navigate);
  }

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
          <img src={AppLogoSVG} className="appbar_row1_img" style={{ marginRight: "5%" }} onClick={navToHome} />
          <p
            className="appbar_row1_tab_text"
            style={{
              paddingRight: "5%",
              color: `${activeTab == 0 ? "#CC8E9C" : "#A0A0A0"}`
            }}
            onClick={navToTailors}
          >
            Designers
          </p>
          {/*  */}
          <p
            className="appbar_row1_tab_text"
            style={{
              paddingRight: "5%",
              color: `${activeTab == 1 ? "#CC8E9C" : "#A0A0A0"}`
            }}
            onClick={navToOrders}
          >
            Orders
          </p>
          <p
            className="appbar_row1_tab_text"
            style={{
              paddingRight: "5%",
              color: `${activeTab == 2 ? "#CC8E9C" : "#A0A0A0"}`
            }}
            onClick={navToMyAds}
          >
            My Ads
          </p>
          <p
            className="appbar_row1_tab_text"
            style={{
              paddingRight: "5%",
              color: `${activeTab == 3 ? "#CC8E9C" : "#A0A0A0"}`
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
            src={UserSVG}
            className="appbar_row2_user_img"
            style={{ marginLeft: "3%" }}
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
            <MenuItem onClick={handleLogoutSubmit}>Logout</MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
}

function SearchInput({
  
}){

  const callback = () => {
    toast.success("Coming soon!");
  };

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
          onClick={callback}
          src={SearchSVG}
          className="appbar_row2_search_img"
        />
      </div>
    </div>
  );

}

export default ClientAppBar;