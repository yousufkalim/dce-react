import React, { useState, useEffect } from "react";

import UserSVG from "../../assets/User.svg";

import ClientAppBar from "../../components/ClientAppBar";

import { useNavigate } from "react-router-dom";
import CustomButton from "../../components/CustomButton";
import { getUser } from "../../utils/Auth";
import Api from "../../api";
import { toast } from "react-toastify";
import star from '../../assets/star.svg'
function ClientTailorsScreen(){

  const [isLoading, setIsLoading] = useState(true);
  const [tailors, setTailors] = useState([]);
  const user = getUser();

  useEffect(() => {
    getTailors();
  }, []);

  const getTailors = async () => {
    let response;
    try {
      response = await Api("get", `/tailors`);
      const tailorsData = response.data.users;
      setTailors(tailorsData);
      setIsLoading(false);
    } catch (e) {
      console.trace(e);
    }
  };

  return (
    <div className="container-page-vertical">
      <ClientAppBar
        activeTab={0}
        color="#FCFCFC"
      />
      <div
        className="client_orders_screen_top"
        style={{
          background: "linear-gradient(to left top, #EEE9DC 0%, #F0EEEB 50%, #EEEEEE 100%), linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 1))",
        }}
      >
        <div className="client_orders_screen_row1">
          <p className="client_orders_screen_row1_text" style={{paddingLeft: "3%"}}>
            Designers
          </p>
        </div>
        <div className="client_orders_screen_row2">
          {
            tailors.map(
              _ =>
              <TailorListTile
                {..._}
              />
            )
          }
        </div>
      </div>
    </div>
  );
}

function TailorListTile(props){

  const navigate = useNavigate();

  const navToViewTailor = () => {
    navigate(`/view_tailor/${props._id}`);
  };

  return (
    <>
    <div className="cds_tailor_list_tile_container">
      <div className="cds_tailor_list_tile_column1">
        <div
          className="cds_tailor_list_tile_column1_img"
          style={{
            "paddingBottom": "5%"
          }}
        >
          <img onClick={navToViewTailor} className="tailors-img cursor-pointer" src={UserSVG} />
        </div>
      </div>
      <div className="cds_tailor_list_tile_column1">
        <p style={{ fontSize: "16px", fontWeight: "bold", color: "#CC8E9C", paddingBottom: "5%" }}>
          {props.name}
        </p>
        <p style={{ fontSize: "10px", fontWeight: "200", color: "#A0A0A0" }}>
          {props.city}, {props.country}
        </p>
      </div>
      <div className="cds_tailor_list_tile_column3">
        <div style={{display:"flex"}}>
        <Star/>
       <Star/>
       <Star/>
       <Star/>
       <Star/>
        <p style={{ fontSize: "14px", fontWeight: "400", color: "#A0A0A0", whiteSpace:"nowrap", paddingLeft:"7%"}}>
          4.5 (32K)
        </p>
        
        </div>
      </div>
      <div className="cds_tailor_list_tile_column1">
        {/* <p
          style={{
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer"
          }}
          onClick={navToViewTailor}
        >
          Order here
        </p> */}
        <CustomButton  text="Chat Here" style={{borderRadius:"20px"}}/>
      </div>
    </div>
    </>
  );
}

function Star(){
  return(
    <>
     <img src={star}/>
    </>
  )
}


export default ClientTailorsScreen;