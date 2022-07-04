import React from 'react';

import UserSVG from '../assets/dummy.jpeg';
import { useNavigate } from 'react-router-dom';
import assetsURL from '../utils/Assets';
import { useTranslation } from 'react-i18next';

function NotificationsListTile(props) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const navToLink = () => {
    navigate(`/${props.link}`);
    props.handleClose();
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '5pt',
        backgroundColor: '#FFF',
        cursor: 'pointer',
      }}
      onClick={navToLink}
    >
      <div>
        <img
          className="image_container"
          style={{
            height: '40pt',
            width: '40pt',
          }}
          src={props.sender.avatar ? assetsURL(props.sender.avatar) : UserSVG}
        />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          marginLeft: '5pt',
          width: '13vw',
        }}
      >
        <p
          style={{
            fontSize: '17px',
            fontWeight: '600',
            color: '#CC8E9C',
          }}
        >
          {props.sender.name}
        </p>
        <p
          style={{
            fontSize: '13px',
          }}
        >
          {t(props.text).length < 35
            ? t(props.text)
            : t(props.text).slice(0, 34) + '...'}
        </p>
      </div>
      <p
        style={{
          fontSize: '12px',
        }}
      >
        {new Date(props.createdAt).toLocaleDateString('en-gb')}
      </p>
    </div>
  );
}

export default NotificationsListTile;
