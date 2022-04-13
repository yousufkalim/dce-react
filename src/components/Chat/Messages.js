import React, { useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import DotSVG from "../../assets/dot.svg";
import SeenSCG from "../../assets/Seenicon.svg";

import { Store, UpdateStore } from "../../StoreContext";
import { getUser } from "../../utils/Auth";
import assetsURL from "../../utils/Assets";

const Messages = ({}) => {
  const store = Store();
  const updateStore = UpdateStore();

  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "auto" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [store]);

  return (
    <>
      <div className="message-cont">
        {store.messages.map((_) => (
          <MessageListTile {..._} />
        ))}
        <div ref={messagesEndRef} />
      </div>
    </>
  );
};

const MessageListTile = (props) => {
  const user = getUser();

  const getIsSender = () => {
    if (user._id == props.sender) {
      return true;
    } else {
      return false;
    }
  };

  const isSender = getIsSender();

  const handleClick = () => {
    if (props.type != "text") {
      window.open(assetsURL(props.content), "_blank");
    }
  };

  return (
    <>
      <Box
        sx={{ justifyContent: isSender ? "right" : "left" }}
        className="message-width"
      >
        {isSender ? <img className="dot-msg" src={DotSVG} /> : null}
        <Box
          sx={{
            background: isSender ? " #ffffff" : "#F7C9D0",
            border: isSender ? "1px solid #DBDBDB" : "none",
            boxShadow: isSender ? "0px 4px 9px rgba(0, 0, 0, 0.04)" : "none",
            borderBottomRightRadius: isSender ? "none" : "10px",
            borderTopLeftRadius: isSender ? "10px" : "none",
          }}
          className="msg-text"
          onClick={handleClick}
        >
          <p style={{ cursor: props.type != "text" ? "pointer" : "auto" }}>
            {props.content}
          </p>
        </Box>
        {props.role === "receiver" ? (
          <img className="dot-msg" src={DotSVG} />
        ) : null}
        {isSender ? <img src={SeenSCG} /> : null}
      </Box>

      {isSender ? (
        <p style={{ textAlign: "end", width: "95%", color: "#DBDBDB" }}>
          {props?.lastseen}
        </p>
      ) : null}
    </>
  );
};

export default Messages;
