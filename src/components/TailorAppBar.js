import React, { useState, useEffect } from 'react';

import { styled } from '@mui/material/styles';
import AppLogoSVG from '../assets/AppLogo.svg';
import UserSVG from '../assets/dummy.jpeg';
import NotificationsSVG from '../assets/AppBarNotifications.svg';
import SearchSVG from '../assets/AppBarSearch.svg';
import dummy from '../assets/dummy.jpeg';
import Nock from '../assets/Nock.svg';
import EditIcon from '../assets/Edit.svg';
import SupportIcon from '../assets/Support.svg';
import TermsConditionsIcon from '../assets/TermsConditions.svg';
import SignOutIcon from '../assets/SignOut.svg';

import GTranslateIcon from '@mui/icons-material/GTranslate';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import NotificationsListTile from './NotificationsListTile';

import { handleLogout } from '../utils/Auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import Api from '../api';
import assetsURL from '../utils/Assets';
import { useTranslation } from 'react-i18next';

import { Store, UpdateStore } from '../StoreContext';
const StyledMenu = styled((MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...MenuProps}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 12,
    marginTop: theme.spacing(3),
    padding: '2% 2% 1% 2%',
    minWidth: 230,
    color: theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow: '0px 4px 20px rgba(160, 160, 160, 0.33)',

    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      // '&:active': {
      //   backgroundColor: alpha(
      //     theme.palette.primary.main,
      //     theme.palette.action.selectedOpacity,
      //   ),
      // },
    },
  },
}));

function TailorAppBar({ activeTab, color, sticky = true, disableSearch = false, divStyle }) {
  const navigate = useNavigate();

  const { i18n, t } = useTranslation();
  const { language } = i18n;
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const [anchorElProfile, setAnchorElProfile] = React.useState(null);
  const [profileImage, setProfileImage] = useState(null);
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
    if (notifications.filter((_) => !_.is_read).length > 0) {
      _readNotifications();
    }
  };
  const handleCloseNotifications = () => {
    setAnchorElNotifications(null);
  };

  const [searchQuery, setSearchQuery] = useState('');
  const store = Store();
  const updateStore = UpdateStore();

  const navToHome = () => {
    navigate('/home');
  };

  const navToOrders = () => {
    navigate('/orders');
  };

  const navToCatalog = () => {
    navigate('/catalog');
  };

  const navToQuotes = () => {
    navigate('/quotes');
  };

  const navToChat = () => {
    navigate('/chat');
  };

  const navToSearch = () => {
    if (!searchQuery) {
      toast.error(t("Search Input can't be empty"));
      return;
    }
    navigate(`/search_results?query=${searchQuery}`);
  };

  const navToProfile = () => {
    handleCloseProfile();
    navigate('/profile');
  };

  const navToSupport = () => {
    handleCloseProfile();
    navigate('/support_center');
  };

  const navToTermsAndConditions = () => {
    handleCloseProfile();
    navigate('/terms_and_conditions');
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
      response = await Api('get', `/auth`);
      const userData = response.data.user;
      setProfile(userData);
      updateStore({ userRole: userData.role });
    } catch (e) {
      console.trace(e);
    }
    return;
  };

  const getNotifications = async () => {
    let response;
    try {
      response = await Api('get', `/notifications`);
      const notificationsData = response.data.notifications.splice(-8);
      notificationsData.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      setNotifications(notificationsData);
    } catch (e) {
      console.trace(e);
    }
    return;
  };

  const _readNotifications = async () => {
    let response;
    try {
      response = await Api('post', `/notifications/read`);
    } catch (e) {
      console.trace(e);
    }
    return;
  };

  return (
    <div
      className='appbar_container'
      style={{
        backgroundColor: color,
        position: sticky ? 'fixed' : 'inherit',
        ...divStyle,
      }}
    >
      <div className='appbar_top'>
        <div className='appbar_row1'>
          <img src={AppLogoSVG} className='appbar_row1_img' style={{ marginRight: '5%' }} onClick={navToHome} />
          <p
            className='appbar_row1_tab_text'
            style={{
              paddingRight: '5%',
              color: `${activeTab == 0 ? '#CC8E9C' : '#A0A0A0'}`,
            }}
            onClick={navToOrders}
          >
            {t('Orders')}
          </p>
          {/*  */}
          <p
            className='appbar_row1_tab_text'
            style={{
              paddingRight: '5%',
              color: `${activeTab == 1 ? '#CC8E9C' : '#A0A0A0'}`,
            }}
            onClick={navToCatalog}
          >
            {t('Catalogue')}
          </p>
          <p
            className='appbar_row1_tab_text'
            style={{
              paddingRight: '5%',
              color: `${activeTab == 2 ? '#CC8E9C' : '#A0A0A0'}`,
            }}
            onClick={navToQuotes}
          >
            {t('Quotes')}
          </p>
          <p
            className='appbar_row1_tab_text'
            style={{
              paddingRight: '5%',
              color: `${activeTab == 3 ? '#CC8E9C' : '#A0A0A0'}`,
            }}
            onClick={navToChat}
          >
            {t('Chats')}
          </p>
        </div>
        <div className='appbar_row2'>
          {!disableSearch ? <SearchInput setSearchQuery={setSearchQuery} callback={navToSearch} /> : <></>}
          <div className='notifications_count_container' style={{ marginLeft: '3%' }}>
            <img src={NotificationsSVG} className='appbar_row2_notifications_img' onClick={handleClickNotifications} />
            {notifications.filter((_) => !_.is_read).length > 0 ? (
              <div className='notifications_count_pos'>
                <p
                  style={{
                    fontSize: '14px',
                  }}
                >
                  {notifications.filter((_) => !_.is_read).length}
                </p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <Menu
            id='basic-menu'
            anchorEl={anchorElNotifications}
            open={openNotifications}
            onClose={handleCloseNotifications}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            {notifications.map((_) => (
              <NotificationsListTile {..._} handleClose={handleCloseNotifications} />
            ))}
          </Menu>
          <img
            className='appbar_row2_user_img image_container'
            style={{
              width: '6vh',
              height: '6vh',
              marginLeft: '3%',
            }}
            src={profile?.avatar ? assetsURL(profile.avatar) : dummy}
            onClick={handleClickProfile}
          />

          {/* <Menu
            id="basic-menu"
            anchorEl={anchorElProfile}
            open={openProfile}
            onClose={handleCloseProfile}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          > */}
          <StyledMenu
            id='demo-customized-menu'
            MenuListProps={{
              'aria-labelledby': 'demo-customized-button',
            }}
            anchorEl={anchorElProfile}
            open={openProfile}
            onClose={handleCloseProfile}
          >
            {/* <img className="nock" src={Nock} /> */}
            <div className='user-detail-conatiner'>
              <img
                className='image_container'
                src={profileImage ? URL.createObjectURL(profileImage) : profile?.avatar ? assetsURL(profile?.avatar) : dummy}
              />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <p className='user-name'>{profile?.name} </p>
                <p className='user-email'>{profile?.email}</p>
              </div>
            </div>

            <MenuItem style={{ borderBottom: '1px solid #DBDBDB' }} className='menu-item' onClick={navToProfile}>
              <img style={{ padding: '4% 0%' }} src={EditIcon} /> <p>{t('Profile')} </p>
            </MenuItem>
            {/* <MenuItem className='menu-item' onClick={() => changeLanguage(`${language == 'en' ? 'fr' : 'en'}`)}>
              <GTranslateIcon sx={{ width: '20px' }} />
              {language == 'fr' ? 'French' : 'English'}
            </MenuItem> */}
            <MenuItem className='menu-item support-padding' onClick={navToSupport}>
              <img style={{ width: '16px' }} src={SupportIcon} />
              <p>{t('Support')}</p>
            </MenuItem>
            {/* <MenuItem className="menu-item" onClick={navToTermsAndConditions}>
              <img src={TermsConditionsIcon} />
              <p>{t("Terms and Conditions")}</p>
            </MenuItem> */}
            <MenuItem className='menu-item sign-out-padding' onClick={handleLogoutSubmit}>
              <img style={{ width: '16px' }} src={SignOutIcon} /> <p> {t('Sign out')} </p>
            </MenuItem>
          </StyledMenu>
        </div>
      </div>
    </div>
  );
}

function SearchInput({ setSearchQuery, callback }) {
  const { t } = useTranslation();

  return (
    <div className='prof_search'>
      <div
        style={{
          position: 'relative',
          height: '100%',
          width: '100%',
          background: '#ffff',
          display: 'flex',
          borderRadius: '10px',
          paddingRight: '3%',
        }}
      >
        <input
          type='text'
          placeholder={t('Search')}
          className='appbar_row2_input'
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <img src={SearchSVG} className='appbar_row2_search_img' onClick={callback} />
      </div>
    </div>
  );
}

export default TailorAppBar;
