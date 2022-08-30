import AddOrderSVG from '../assets/AddOrder.svg';
import { useTranslation } from 'react-i18next';

import { useNavigate } from 'react-router-dom';

function NewOrderListTile() {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const navToCreateAd = () => {
    navigate('/create_ad');
  };

  return (
    <div className='new_order_list_tile' style={{ height: '100%' }} onClick={navToCreateAd}>
      <div className='new_order_list_tile_img'>
        <img style={{ width: '40%' }} src={AddOrderSVG} />
      </div>
      <p className='new_order_list_tile_text'>{t('New Order')}</p>
    </div>
  );
}

export default NewOrderListTile;
