import React from 'react';

import CustomButton from './CustomButton';

import CatalogContent1SVG from '../assets/CatalogContent1.svg';

import Rating from '@mui/material/Rating';
import { useTranslation } from 'react-i18next';

import { useNavigate } from 'react-router-dom';
import dummy from '../assets/dummy.jpeg';
import ron from '../assets/ron.jpeg';
import assetsURL from '../utils/Assets';
import { calculateRating, calculateRatingsCount } from '../utils/Helpers';

function CatalogListTile({ catalog, buttonText, onClickButton, onClick, mainDivStyle }) {
  const { t } = useTranslation();

  const rating = calculateRating(catalog.ratings);
  const [value, setValue] = React.useState(rating ?? 0);

  const onClickButtonCallback = (e) => {
    e.stopPropagation();
    onClickButton?.();
  };
  return (
    <div
      className="tailor_catalog_list_tile_container"
      style={{
        ...mainDivStyle,
        width: 'auto',
      }}
    >
      <div
        style={{
          position: 'relative',
          height: '100%',
          width: '100%',
        }}
        onClick={onClick}
      >
        <img
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            borderRadius: '20px',
          }}
          src={catalog?.attachments[0] ? assetsURL(catalog.attachments[0]) : CatalogContent1SVG}
        />
        <CustomButton
          text={buttonText}
          type="submit"
          onClick={onClickButtonCallback}
          style={{
            background: '#fff',
            color: '#CC8E9C',
            fontWeight: '600',
            fontSize: '12px',
            boxShadow: 'none',
            borderRadius: '20px',
            marginTop: '5%',
            padding: '2% 8%',
            position: 'absolute',
            top: '0',
            right: '5%',
          }}
        />
        <p className="tailor_catalog_list_tile_title">{catalog.name}</p>
        <div className="tailor_catalog_list_tile_details">
          <p className="tailor_catalog_list_tile_price_detail">{t('Stitching Price')}</p>
          <p className="tailor_catalog_list_tile_price">${catalog.price}</p>
        </div>
        {/* <div className="tailor_catalog_list_tile_details">
          <p className="tailor_catalog_list_tile_price_detail">
            {t("Reviews")}
          </p>
          <Rating name="read-only" value={rating} size="small" readOnly />
        </div> */}
      </div>
    </div>
  );
}

export default CatalogListTile;
