import UserSVG from "../assets/User.svg";

import assetsURL from "../utils/Assets";

function OrderListTile({
  order,
  quote,
  mainDivStyle,
  viewAs
}) {
  return (
    <>
    {console.log(order)}
    <div
      className="order_list_tile"
      style={{
        ...mainDivStyle
      }}
    >
      <div
        className="order_list_tile_img"
        style={{
          paddingBottom: "5%",
        }}
      >
        <img
          className="image_container"
          style={{
            height: "50pt",
            width: "50pt"
          }}
          src={
            viewAs == "client" ?
              order?.tailor?.avatar ?
              assetsURL(order.tailor.avatar) :
              UserSVG :
            viewAs == "tailor" ?
              order?.client?.avatar ?
              assetsURL(order.client.avatar) :
              UserSVG :
            UserSVG
          }
        />
      </div>
      <p
        className="order_list_tile_title_text"
        style={{
          paddingBottom: "8%",
        }}
      >
        {
          viewAs == "client" ?
          order?.tailor?.name ?? "" :
          viewAs == "tailor" ?
          order?.client?.name ?? "" :
          ""
        }
      </p>
      <div className="order_list_tile_divider" />
      <div className="order_list_tile_item">
        <p className="order_list_tile_item_key">Order</p>
        <p className="order_list_tile_item_value">{order.name}</p>
      </div>
      <div className="order_list_tile_item">
        <p className="order_list_tile_item_key">Order Date</p>
        <p className="order_list_tile_item_value">{new Date(order.createdAt).toLocaleDateString("en-US")}</p>
      </div>
      <div className="order_list_tile_item">
        <p className="order_list_tile_item_key">Delivery Date</p>
        <p className="order_list_tile_item_value">{new Date(order.delivery.date).toLocaleDateString("en-US")}</p>
      </div>
      <div
        className="order_list_tile_item"
        style={{
          paddingTop: "2%",
        }}
      >
        <p className="order_list_tile_item_key">Bill</p>
        <p
          className="order_list_tile_item_value"
          style={{
            fontSize: "15px",
            fontWeight: "700",
          }}
        >
          {quote?.price ?? order.budget.min_price}$
        </p>
      </div>
      <div className="order_list_tile_divider"/>
      <p
        className="order_list_tile_title_text_bottom"
        style={{
          padding: "4% 0",
        }}
      >
        {order?.status?.replace("_", " ")}
      </p>
    </div>
    </>
  );
}

export default OrderListTile;
