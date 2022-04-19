import React from "react";

import UserSVG from "../assets/User.svg";
import { useNavigate } from "react-router-dom";
import assetsURL from "../utils/Assets";

function NotificationsListTile(props) {
  const navigate = useNavigate();

  const navToLink = () => {
    navigate(`/${props.link}`);
    props.handleClose();
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
          width: "13vw",
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
          {props.text.length < 35
            ? props.text
            : props.text.slice(0, 34) + "..."}
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
