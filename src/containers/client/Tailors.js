import React, { useState, useEffect } from 'react';

import UserSVG from '../../assets/dummy.jpeg';
import { useTranslation } from 'react-i18next';

import ClientAppBar from '../../components/ClientAppBar';
import Footer from '../../components/Footer';
import Rating from '@mui/material/Rating';

import dummy from '../../assets/dummy.jpeg';

import { useNavigate } from 'react-router-dom';
import CustomButton from '../../components/CustomButton';
import { getUser } from '../../utils/Auth';
import Api from '../../api';

import assetsURL from '../../utils/Assets';
import { calculateRating, calculateRatingsCount } from '../../utils/Helpers';
import { Store, UpdateStore } from '../../StoreContext';

import star from '../../assets/star.svg';

function ClientTailorsScreen() {
  const { t } = useTranslation();

  const [isLoading, setIsLoading] = useState(true);
  const [tailors, setTailors] = useState([]);
  const user = getUser();

  useEffect(() => {
    getTailors();
  }, []);

  const getTailors = async () => {
    let response;
    try {
      response = await Api('get', `/tailors`);
      const tailorsData = response.data.users;
      setTailors(tailorsData);
      setIsLoading(false);
    } catch (e) {
      console.trace(e);
    }
  };

  return (
    <>
      <div className="container-page-vertical">
        <ClientAppBar activeTab={0} color="#FCFCFC" />
        <div
          className="client_orders_screen_top"
          style={{
            background:
              'linear-gradient(to left top, #EEE9DC 0%, #F0EEEB 50%, #EEEEEE 100%), linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 1))'
          }}>
          <div className="client_orders_screen_row1">
            <p className="client_orders_screen_row1_text" style={{ paddingLeft: '3%' }}>
              {t('Professionnels présents sur notre plateforme')}
            </p>
          </div>
          <div className="client_orders_screen_row2">
            {tailors.map(_ => (
              <TailorListTile {..._} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

function TailorListTile(props) {
  const { t } = useTranslation();
  const store = Store();
  const updateStore = UpdateStore();

  const rating = calculateRating(props.ratings);
  const ratingsCount = calculateRatingsCount(props.ratings);

  const navigate = useNavigate();

  const navToViewTailor = () => {
    navigate(`/view_tailor/${props._id}`);
  };

  const navToChat = () => {
    updateStore({
      chat: null,
      messages: []
    });
    navigate(`/chat`, { state: { directUser: props } });
  };
  return (
    <>
      <div className="cds_tailor_list_tile_container">
        <div className="cds_tailor_list_tile_column1">
          <div
            className="cds_tailor_list_tile_column1_img"
            style={{
              paddingBottom: '5%'
            }}>
            <img
              className="image_container"
              style={{
                height: '80pt',
                width: '80pt',
                cursor: 'pointer'
              }}
              src={props.avatar ? assetsURL(props.avatar) : dummy}
              onClick={navToViewTailor}
            />
          </div>
        </div>
        <div className="cds_tailor_list_tile_column1" onClick={navToViewTailor}>
          <p
            style={{
              fontSize: '16px',
              fontWeight: 'bold',
              color: '#CC8E9C',
              paddingBottom: '5%'
            }}>
            {props.name}
          </p>
          <p style={{ fontSize: '10px', fontWeight: '200', color: '#A0A0A0' }}>
            {props.city}, {props.country}
          </p>
        </div>
        <div className="cds_tailor_list_tile_column3">
          {/* <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItemsL: "center",
            }}
          >
            <Rating value={rating} size="small" />
            <p
              style={{
                fontSize: "14px",
                fontWeight: "400",
                color: "#A0A0A0",
                whiteSpace: "nowrap",
                paddingLeft: "7%",
              }}
            >
              {rating} ({ratingsCount})
            </p>
          </div> */}
        </div>
        <div className="cds_tailor_list_tile_column1">
          <CustomButton
            text={t('Contacter')}
            style={{ borderRadius: '20px' }}
            onClick={navToChat}
          />
        </div>
      </div>
    </>
  );
}

export default ClientTailorsScreen;
