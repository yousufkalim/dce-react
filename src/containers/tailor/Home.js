import React, { useState, useEffect } from 'react';
import TailorHomeSVG from '../../assets/TailorHome_.svg';
import UserSVG from '../../assets/dummy.jpeg';
import AppBar from '../../components/TailorAppBar';
import OrderListTile from '../../components/OrderListTile';
import Footer from '../../components/Footer';
import { useTranslation } from 'react-i18next';

import { getUser } from '../../utils/Auth';

import Api from '../../api';

import { useNavigate } from 'react-router-dom';

function TailorHomeScreen() {
  const navigate = useNavigate();

  const { t } = useTranslation();

  const [isLoading, setIsLoading] = useState(true);
  const [ordersRequest, setOrdersRequest] = useState([]);
  const [ordersInProgress, setOrdersInProgress] = useState([]);

  const user = getUser();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    await getOrdersRequest();
    await getOrdersInProgress();
  };

  const getOrdersRequest = async () => {
    let response;
    try {
      response = await Api('post', `/orders/byQuery`, {
        tailor: user._id,
        type: 'direct',
      });
      const ordersData = response.data.orders.splice(-4);
      setOrdersRequest(ordersData);
    } catch (e) {
      console.trace(e);
    }
    return;
  };

  const getOrdersInProgress = async () => {
    let response;
    try {
      response = await Api('post', `/orders/byQuery`, {
        tailor: user._id,
        status: 'in_progress',
      });
      const ordersData = response.data.orders.splice(-4);
      setOrdersInProgress(ordersData);
    } catch (e) {
      console.trace(e);
    }
    return;
  };

  const navToQuotes = () => {
    navigate('/quotes');
  };

  const navToOrders = () => {
    navigate('/orders');
  };

  return (
    <div className='container-page'>
      <AppBar color='#F8F4EF' />
      <div
        className='container'
        style={{
          background: '#FAFAFA',
        }}
      >
        <div className='client_home_screen_row1'>
          <div className='client_home_screen_row1_column1'>
            <p className='client_home_screen_row1_column1_text_1' style={{ color: '#CC8E9C' }}>
              {t('Welcome to the')}
            </p>
            <p className='tailor_home_screen_row1_column1_text_2'>Design Confections Ethiques</p>
            {/* <p
              className="client_home_screen_row1_column1_text_1"
              style={{
                color: "#A0805A",
              }}
            >
              {t("Now You receive your")}
            </p> */}
            {/* <p
              className="client_home_screen_row1_column1_text_1"
              style={{
                color: "#857B6F",
              }}
            >
              {t("order here")}
            </p> */}
            <button
              className='client_home_screen_row1_column1_button'
              style={{
                backgroundColor: '#FFFFFF',
              }}
              onClick={navToQuotes}
            >
              {t('find your sewing assignments')}
            </button>
          </div>
          <div className='client_home_screen_row1_column2'>
            <div className='design_home_screen_row1_column2_img'>
              <img style={{ width: '70%' }} src={TailorHomeSVG} />
            </div>
          </div>
        </div>
      </div>
      <div
        className='container'
        style={{
          background:
            'linear-gradient(to left top, #F5F1EA 0%, #F4F2F0 50%, #F5F5F5 100%), linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 1))',
        }}
      >
        <div
          className='client_home_screen_row2_row1'
          style={{
            borderBottomColor: '#DBDBDB',
            borderBottomStyle: 'solid',
            borderBottomWidth: '0.5px',
          }}
        >
          <p className='client_home_screen_row2_row1_text'>{t('Order Requests')}</p>
          <div className='client_home_screen_row2_row1_row_container'>
            {ordersRequest.map((_) => (
              <OrderListTile order={_} viewAs='tailor' />
            ))}
            <p
              style={{
                color: '#CC8E9C',
                fontWeight: '800',
                paddingLeft: '2%',
                textDecoration: 'underline',
                cursor: 'pointer',
              }}
              onClick={navToOrders}
            >
              {t('See all')}
            </p>
          </div>
        </div>
        <div className='client_home_screen_row2_row1'>
          <p className='client_home_screen_row2_row1_text'>{t('Recent Orders')}</p>
          <div className='client_home_screen_row2_row1_row_container'>
            {ordersInProgress.map((_) => (
              <OrderListTile order={_} quote={_.quotes.filter((__) => __.status == 'accepted')[0]} />
            ))}
            <p
              style={{
                color: '#CC8E9C',
                fontWeight: '800',
                paddingLeft: '2%',
                textDecoration: 'underline',
                cursor: 'pointer',
              }}
              onClick={navToOrders}
            >
              {t('See all')}
            </p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default TailorHomeScreen;
