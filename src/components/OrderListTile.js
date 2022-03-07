import UserSVG from "../assets/User.svg";

function OrderListTile(props) {
  return (
    <div className="order_list_tile">
      <div
        className="order_list_tile_img"
        style={{
          paddingBottom: "5%",
        }}
      >
        <img style={{ width: "30%" }} src={UserSVG} />
      </div>
      <p
        className="order_list_tile_title_text"
        style={{
          paddingBottom: "8%",
        }}
      >
        Sasha Designs
      </p>
      <div className="order_list_tile_divider" />
      <div className="order_list_tile_item">
        <p className="order_list_tile_item_key">Order</p>
        <p className="order_list_tile_item_value">Shirt, Pant</p>
      </div>
      <div className="order_list_tile_item">
        <p className="order_list_tile_item_key">Order Date</p>
        <p className="order_list_tile_item_value">August 10, 2022</p>
      </div>
      <div className="order_list_tile_item">
        <p className="order_list_tile_item_key">Delivery Date</p>
        <p className="order_list_tile_item_value">August 25, 2022</p>
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
          500$
        </p>
      </div>
      <div className="order_list_tile_divider" />
      <p
        className="order_list_tile_title_text_bottom"
        style={{
          padding: "4% 0",
        }}
      >
        {props.detail}
      </p>
    </div>
  );
}

export default OrderListTile;
