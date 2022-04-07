import UserSVG from "../assets/User.svg";

function OrderListTile(props) {
  const items=[
    {
    designer:"Sasha Designs",
    dress:"Shirt, Pant",
    orderdate:"june 10, 2022",
    deliverydate:"August 10, 2022",
    price:"$500",
    status:"In Process"
  },
]
const Color = (status)=>{
  let color=""
 if(status=="In Process"){
      color="#000000"
 }
 if(status=="Completed"){
   color="#A0A0A0"
 }
 return color
}
const Opacity = (status)=>{
  let opacity=""
  if(status=="Completed"){
    opacity="0.5"
  }
  if(status=="In Process"){
    opacity="1"
}
  return opacity
}
  return (
    <>
    
    {
      items.map((val)=>(
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
       {val?.designer}
      </p>
      <div className="order_list_tile_divider" />
      <div className="order_list_tile_item">
        <p style={{
            opacity:Opacity(props.detail)
        }}
    className="order_list_tile_item_key">
      Order {props.detail}
      </p>
        <p  style={{
          color:Color(props.detail)
          }} className="order_list_tile_item_value">{val.dress}</p>
      </div>
      <div className="order_list_tile_item">
        <p style={{
            opacity:Opacity(props.detail),
           
        }} className="order_list_tile_item_key">Order Date</p>
        <p style={{
        color:Color(props.detail)
      }}  
        className="order_list_tile_item_value">{val?.orderdate}</p>
      </div>
      <div className="order_list_tile_item">
        <p style={{
            opacity:Opacity(props.detail),
          
        }} 
        className="order_list_tile_item_key">Delivery Date</p>
        <p style={{
          color:Color(props.detail)
          }}  className="order_list_tile_item_value">{val?.deliverydate}</p>
      </div>
      <div
        className="order_list_tile_item"
        style={{
          paddingTop: "6%",
          paddingBottom:"4%"
        }}
      >
        <p style={{
            opacity:Opacity(props.detail),
        }} className="order_list_tile_item_key">Bill</p>
        <p
          className="order_list_tile_item_value"
          style={{
            fontSize: "15px",
            fontWeight: "700",
            color:Color(props.detail)
          }}
        >
          {val.price}
        </p>
      </div>
      <div className="order_list_tile_divider"/>
      <p
        className="order_list_tile_title_text_bottom"
        style={{
          padding: "4% 0",
      
          color:Color(props.detail)
        }}
      >
        {props.detail}
       
      </p>
    </div>

      ))
    }
    </>
    
    
  );
}

export default OrderListTile;
