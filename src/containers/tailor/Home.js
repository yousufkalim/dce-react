import React, { useState, useEffect } from 'react';
import TailorHomeSVG from '../../assets/sewing.svg';
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
        type: 'direct'
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
        status: 'in_progress'
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
    <div className="container-page">
      <AppBar color="#F8F4EF" />
      <div
        className="designer_container"
        style={{
          background: '#CC8E9C30'
        }}>
        <div className="designer_home_screen_row1">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0 5%'
            }}
            className="designer_header">
            <div className="designer_home_screen_row1_column1_">
              {/* <p className='client_home_screen_row1_column1_text_1' style={{ color: '#CC8E9C' }}>
                {t('Welcome to the')} Design Confections Ethiques
              </p> */}
              <h3 className="client_home_screen_row1_column1_text_1" style={{ color: '#CC8E9C' }}>
                {t('Design Ethical Confections')}
              </h3>
              <h4
                className="client_home_screen_row1_column1_text_1"
                style={{ color: ' #8b7964', fontSize: '22px' }}>
                {t('Make your sewing projects a reality in just a few clicks!')}
              </h4>
              <p
                className="client_home_screen_row1_column1_text_1"
                style={{ color: ' #0d0c0c', opacity: '0.5', fontSize: '18px' }}>
                {t(
                  'Plateforme de mise en relation dans le domaine de la confection mode sur-mesure'
                )}
              </p>
              <button
                className="tailor_home_screen_row1_column1_button"
                style={{
                  backgroundColor: '#FFFFFF'
                }}
                onClick={navToQuotes}>
                {t('Find your sewing assignments')}
              </button>
            </div>
            <div className="designer_home_screen_row1_column2">
              <div className="design_home_screen_row1_column2_img">
                <img style={{ width: '100%' }} src={TailorHomeSVG} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container"
        style={{
          background:
            'linear-gradient(to left top, #F5F1EA 0%, #F4F2F0 50%, #F5F5F5 100%), linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 1))'
        }}>
        <div
          className="client_home_screen_row2_row1"
          style={{
            borderBottomColor: '#DBDBDB',
            borderBottomStyle: 'solid',
            borderBottomWidth: '0.5px'
          }}>
          <p className="client_home_screen_row2_row1_text">{t('Order Requests')}</p>
          <div className="client_home_screen_row2_row1_row_container">
            {ordersRequest.length > 0 ? (
              <>
                {ordersRequest.map(_ => (
                  <OrderListTile
                    order={_}
                    quote={_.quotes.filter(__ => __.status == 'accepted')[0]}
                  />
                ))}
              </>
            ) : (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  width: '50%'
                }}>
                <p style={{ textAlign: 'center', fontWeight: '500', color: 'rgb(160, 160, 160)' }}>
                  Aucune commande passée
                </p>
              </div>
            )}
            {/* <div style={{ width: '90%' }}>
              {ordersRequest.map((_) => (
                <OrderListTile order={_} viewAs='tailor' />
              ))}
            </div> */}
            <p
              style={{
                color: '#CC8E9C',
                fontWeight: '800',
                paddingLeft: '2%',
                textDecoration: 'underline',
                cursor: 'pointer'
              }}
              onClick={navToOrders}>
              {t('See all')}
            </p>
          </div>
        </div>
        <div className="client_home_screen_row2_row1">
          <p className="client_home_screen_row2_row1_text">{t('Recent Orders')}</p>
          <div className="client_home_screen_row2_row1_row_container">
            {ordersInProgress.length > 0 ? (
              <>
                {ordersInProgress.map(_ => (
                  <OrderListTile
                    order={_}
                    quote={_.quotes.filter(__ => __.status == 'accepted')[0]}
                  />
                ))}
              </>
            ) : (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  width: '50%'
                }}>
                <p style={{ textAlign: 'center', fontWeight: '500', color: 'rgb(160, 160, 160)' }}>
                  Aucune commande passée
                </p>
              </div>
            )}
            {/* <div style={{ width: '90%' }}>
              {ordersInProgress.map((_) => (
                <OrderListTile
                  order={_}
                  quote={_.quotes.filter((__) => __.status == 'accepted')[0]}
                />
              ))}
            </div> */}

            <p
              style={{
                color: '#CC8E9C',
                fontWeight: '800',
                paddingLeft: '2%',
                textDecoration: 'underline',
                cursor: 'pointer'
              }}
              onClick={navToOrders}>
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
