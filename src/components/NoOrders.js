import React from 'react';
import { useTranslation } from 'react-i18next';
const NoOrders = ({ RenderText }) => {
  const { t } = useTranslation();
  return (
    <>
      <div
        style={{
          marginTop: '10%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}
      >
        {t(RenderText)}
      </div>
    </>
  );
};

export default NoOrders;
