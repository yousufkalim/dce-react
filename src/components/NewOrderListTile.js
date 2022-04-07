import AddOrderSVG from "../assets/AddOrder.svg";

import { useNavigate } from "react-router-dom";

function NewOrderListTile() {
  const navigate = useNavigate();

  const navToCreateAd = () => {
    navigate("/create_ad");
  };

  return (
    <div className="new_order_list_tile" onClick={navToCreateAd}>
      <div className="new_order_list_tile_img">
        <img style={{ width: "40%" }} src={AddOrderSVG} />
      </div>
      <p className="new_order_list_tile_text">New Order</p>
    </div>
  );
}

export default NewOrderListTile;
