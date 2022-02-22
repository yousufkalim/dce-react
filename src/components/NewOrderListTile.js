import AddOrderSVG from "../assets/AddOrder.svg";

function NewOrderListTile(){
  return (
    <div className="new_order_list_tile">
      <div className="new_order_list_tile_img">
        <img style={{ width: "40%" }} src={AddOrderSVG} />
      </div>
      <p className="new_order_list_tile_text">
        New Order
      </p>
    </div>
  );
}

export default NewOrderListTile;