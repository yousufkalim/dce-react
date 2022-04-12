import React, { useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import dot from "../../assets/dot.svg";
import seen from "../../assets/Seenicon.svg";

import { Store, UpdateStore } from "../../StoreContext";
import { getUser } from "../../utils/Auth";

const Messages = ({}) => {
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "auto" });
  };

  useEffect(() => {
    scrollToBottom();
  }, []);

  const store = Store();
  const updateStore = UpdateStore();

  const user = getUser();
  const isUserSender = (_) => _.sender == user._id;

  return (
    <>
      <div className="message-cont">
        {store.messages.map((_) => (
          <>
            <Box
              sx={{ justifyContent: isUserSender ? "right" : "left" }}
              className="message-width"
            >
              {isUserSender ? <img className="dot-msg" src={dot} /> : null}
              <Box
                sx={{
                  background: isUserSender ? " #ffffff" : "#F7C9D0",
                  border: isUserSender ? "1px solid #DBDBDB" : "none",
                  boxShadow: isUserSender
                    ? "0px 4px 9px rgba(0, 0, 0, 0.04)"
                    : "none",
                  borderBottomRightRadius: isUserSender ? "none" : "10px",
                  borderTopLeftRadius: isUserSender ? "10px" : "none",
                }}
                className="msg-text"
              >
                <p>{_.content} </p>
              </Box>
              {_.role === "receiver" ? (
                <img className="dot-msg" src={dot} />
              ) : null}
              {isUserSender ? <img src={seen} /> : null}
            </Box>

            {isUserSender ? (
              <p style={{ textAlign: "end", width: "95%", color: "#DBDBDB" }}>
                {_?.lastseen}
              </p>
            ) : null}
          </>
        ))}
        <div ref={messagesEndRef} />
      </div>
    </>
  );
};

export default Messages;
