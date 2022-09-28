import UserSVG from '../assets/dummy.jpeg';
import { useTranslation } from 'react-i18next';

import assetsURL from '../utils/Assets';

function OrderListTile({ order, quote, mainDivStyle, viewAs }) {
  const { t } = useTranslation();

  const Color = status => {
    let color = '';
    if (status == 'in_process') {
      color = '#000000';
    }
    if (status == 'completed') {
      color = '#A0A0A0';
    }
    return color;
  };

  const Opacity = status => {
    let opacity = '';
    if (status == 'completed') {
      opacity = '0.5';
    }
    if (status == 'in_process') {
      opacity = '1';
    }
    return opacity;
  };

  return (
    <>
      <div
        className="order_list_tile"
        style={{
          ...mainDivStyle
        }}>
        <div
          className="order_list_tile_img"
          style={{
            paddingBottom: '5%'
          }}>
          <img
            className="image_container"
            style={{
              height: '50pt',
              width: '50pt'
            }}
            src={
              viewAs == 'client'
                ? order?.tailor?.avatar
                  ? assetsURL(order.tailor.avatar)
                  : UserSVG
                : viewAs == 'tailor'
                ? order?.client?.avatar
                  ? assetsURL(order.client.avatar)
                  : UserSVG
                : UserSVG
            }
          />
        </div>
        <p
          className="order_list_tile_title_text"
          style={{
            paddingBottom: '8%'
          }}>
          {viewAs == 'client'
            ? order?.tailor?.name ?? ''
            : viewAs == 'tailor'
            ? order?.client?.name ?? ''
            : ''}
        </p>
        <div className="order_list_tile_divider" />
        <div className="order_list_tile_item">
          <p
            style={{
              opacity: Opacity(order.status)
            }}
            className="order_list_tile_item_key">
            {t('Order')}
          </p>
          <p
            style={{
              color: Color(order.status)
            }}
            className="order_list_tile_item_value">
            {order.name}
          </p>
        </div>
        <div className="order_list_tile_item">
          <p
            style={{
              opacity: Opacity(order.status)
            }}
            className="order_list_tile_item_key">
            {t('Order Date')}
          </p>
          <p
            style={{
              color: Color(order.status)
            }}
            className="order_list_tile_item_value">
            {new Date(order.createdAt).toLocaleDateString('en-gb')}
          </p>
        </div>
        <div className="order_list_tile_item">
          <p
            style={{
              opacity: Opacity(order.status)
            }}
            className="order_list_tile_item_key">
            {t('desired delivery date')}
          </p>
          <p
            style={{
              color: Color(order.status)
            }}
            className="order_list_tile_item_value">
            {new Date(order.delivery.date).toLocaleDateString('en-gb')}
          </p>
        </div>
        <div
          className="order_list_tile_item"
          style={{
            paddingTop: '6%',
            paddingBottom: '4%'
          }}>
          <p
            style={{
              opacity: Opacity(order.status),
              color: 'gray',
              textDecoration: 'underline'
            }}
            className="order_list_tile_item_key">
            {t('Bill')}
          </p>
          {/* <p
            className="order_list_tile_item_value"
            style={{
              fontSize: "15px",
              fontWeight: "700",
              color: Color(order.status),
            }}
          >
            {quote?.price ?? order.budget.min_price}€
          </p> */}
        </div>
        <div className="order_list_tile_divider" />
        <p
          className="order_list_tile_title_text_bottom"
          style={{
            padding: '4% 0',
            color: Color(order.status)
          }}>
          {t(order?.status?.replace('_', ' '))}
        </p>
      </div>
    </>
  );
}

export default OrderListTile;
