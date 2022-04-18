import React from "react";

import UserSVG from "../assets/User.svg";
import { useNavigate } from "react-router-dom";
import assetsURL from "../utils/Assets";

function NotificationsListTile(props) {
  const navigate = useNavigate();

  const navToLink = () => {
    console.log("CSL", props.link);
    navigate(`/${props.link}`);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: "5pt",
        backgroundColor: "#FFF",
        cursor: "pointer",
      }}
      onClick={navToLink}
    >
      <div>
        <img
          className="image_container"
          style={{
            height: "40pt",
            width: "40pt",
          }}
          src={props.sender.avatar ? assetsURL(props.sender.avatar) : UserSVG}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          marginLeft: "5pt",
          marginRight: "30pt",
        }}
      >
        <p
          style={{
            fontSize: "17px",
            fontWeight: "600",
            color: "#CC8E9C",
          }}
        >
          {props.sender.name}
        </p>
        <p
          style={{
            fontSize: "13px",
          }}
        >
          {props.text}
        </p>
      </div>
      <p
        style={{
          fontSize: "12px",
        }}
      >
        {new Date(props.createdAt).toLocaleDateString("en-US")}
      </p>
    </div>
  );
}

export default NotificationsListTile;
