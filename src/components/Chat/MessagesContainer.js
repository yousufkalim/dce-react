import React, { useState } from "react";
import ChatHeader from "./ChatHeader";
import SendMessage from "./SendMessage";
import Messages from "./Messages";
import Box from "@mui/material/Box";
const MessagesContainer = ({ width, mobiletoggle, chat }) => {
  const [fileName, setFileName] = useState([]);
  return (
    <>
      <Box
        sx={{
          display:
            width <= 768 && mobiletoggle
              ? "block"
              : width > 768
              ? "block"
              : "none",
          width: width <= 768 ? "100%" : "55%",
        }}
        className="c-body"
      >
        {chat ? (
          <>
            <ChatHeader />
            <Messages fileName={fileName} />
            <SendMessage fileName={fileName} setFileName={setFileName} />
          </>
        ) : (
          <></>
        )}
      </Box>
    </>
  );
};

export default MessagesContainer;
