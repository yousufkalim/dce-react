import React, { useState, useEffect } from 'react';
import TailorAppBar from '../../components/TailorAppBar';
import NoOrders from '../../components/NoOrders';
import dummy from '../../assets/dummy.jpeg';
import { useTranslation } from 'react-i18next';
import Footer from '../../components/Footer';

import { useNavigate } from 'react-router-dom';
import { getUser } from '../../utils/Auth';
import Api from '../../api';
import assetsURL from '../../utils/Assets';

function ClientSupportCenterScreen() {
  const { t } = useTranslation();

  const [isLoading, setIsLoading] = useState(true);
  const [supportOrders, setSupportOrders] = useState([]);
  const user = getUser();

  useEffect(() => {
    getSupportOrders();
  }, []);

  const getSupportOrders = async () => {
    let response;
    try {
      response = await Api('post', `/orders/byQuery`, {
        client: user._id,
        client_support: true,
      });
      const supportOrdersData = response.data.orders;
      setSupportOrders(supportOrdersData);
      setIsLoading(false);
    } catch (e) {
      console.trace(e);
    }
  };

  return (
    <div className="container-page-vertical">
      <TailorAppBar color="#FDFDFC" />
      <div
        className="client_orders_screen_top"
        style={{
          background: 'linear-gradient(to right, #EEEEEE , #FDF3EA)',
        }}
      >
        <div className="thiw_qna_standard_screen_row1">
          <h1 className="supportheading">{t('Support Center')}</h1>
          <p className="suppordesc">
            {t(
              'In just a few clicks, Design Créations allows you to find one-off assignments in the production and manufacture of clothing, decorative elements or household linen.'
            )}
          </p>
        </div>
        {supportOrders.map((_) => (
          <SupportListTile {..._} />
        ))}
        {supportOrders.length == 0 ? <NoOrders RenderText="No Support Orders" /> : <></>}
      </div>
      <Footer />
    </div>
  );
}

function SupportListTile(props) {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const navToChat = () => {
    navigate('/chat');
  };

  return (
    <div className="supportmainDiv">
      <div className="supportcol1">
        <img src={props.tailor.avatar ? assetsURL(props.tailor.avatar) : dummy} style={{ width: '10%', padding: '25px 25px' }} />
        <div className="supportName">
          <h3 className="supportnameh3">{props.name}</h3>
        </div>
        <div className="supportReview">
          <button
            className="chatBtn"
            style={{
              cursor: 'pointer',
            }}
            onClick={navToChat}
          >
            {t('Chat With Us')}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ClientSupportCenterScreen;
