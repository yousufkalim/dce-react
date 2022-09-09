import React from 'react';

import AppLogoSVG from '../../assets/AppLogo.svg';
import DesignElaborationSVG from '../../assets/DesignElaboration.svg';
import ClientRole from '../../assets/ClientRole.svg';
import DesignerRole from '../../assets/DesignerRole.svg';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Footer from '../../components/Footer';

const SelectRoleLoginScreen = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const navToClientLogin = () => {
    navigate('/client_login');
  };

  const navToTailorLogin = () => {
    navigate('/tailor_login');
  };
  const navToSelectRole = (e) => {
    navigate('/select_role_register');
  };

  return (
    <>
      <div
        className='container'
        style={{
          background:
            'linear-gradient(to left top, #EEE9DC 0%, #F0EEEB 50%, #EEEEEE 100%), linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 1))',
        }}
      >
        <div className='login_screen_top'>
          {/* <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end', background: 'red' }}>
            <p>abc</p>
          </div> */}

          <div className='login_screen_row1'>
            <div className='login_screen_row1_img_custom' style={{ marginTop: '10%' }}>
              <img style={{ width: '50%', marginBottom: '5%' }} src={AppLogoSVG} />
            </div>
            <div className='login_screen_row1_img_custom'>
              <img style={{ width: '70%' }} src={DesignElaborationSVG} />
            </div>
          </div>
          <div className='login_screen_row2'>
            <div style={{ position: 'absolute', top: '6%', right: '9%' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <AccountCircleIcon style={{ color: '#e9a555', fontSize: '50px', cursor: 'pointer' }} onClick={navToSelectRole} />
                <p style={{ textAlign: 'center', color: '#cc8e9c', fontWeight: '600' }}>Je me connecte</p>
              </div>
            </div>
            <h1 className='select_role_screen_heading'>{t('Se connecter en tant que')}</h1>
            <div className='select_role_screen_row2_container'>
              <div style={{ display: 'flex', flexDirection: 'column', width: '200px', marginRight: '10%' }}>
                <div
                  className='select_role_screen_tile'
                  style={{ marginRight: '15%', height: '220px', width: '200px' }}
                  onClick={navToClientLogin}
                >
                  <img src={ClientRole} style={{ height: '127px', width: '150px' }}></img>
                  {/* <p className='select_role_screen_tile_text' style={{ marginTop: '16%' }}>
                  {t('Client')}
                </p> */}
                </div>
                <div>
                  <p
                    className='select_role_screen_tile_text'
                    style={{ marginTop: '10%', lineHeight: '20px', textAlign: 'center' }}
                  >
                    {t('Client')}
                  </p>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', width: '200px' }}>
                <div className='select_role_screen_tile' onClick={navToTailorLogin} style={{ height: '220px', width: '200px' }}>
                  <img src={DesignerRole} style={{ height: '150px', width: '150px' }}></img>
                  {/* <p className='select_role_screen_tile_text' style={{ marginTop: '16%' }}>
                  {t('Designer')}
                </p> */}
                </div>
                <div>
                  <p
                    className='select_role_screen_tile_text'
                    style={{ marginTop: '10%', textAlign: 'center', lineHeight: '20px' }}
                  >
                    {t('Professionnels')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SelectRoleLoginScreen;
