import React, { useState } from "react";
import ChatBodyHeader from "./ChatBodyHeader";
import ChatBodyBottom from "./ChatBodyBottom";
import Messages from "./Messages";
import Box from "@mui/material/Box";
const ChatBody = ({ width, mobiletoggle }) => {
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
        <ChatBodyHeader />
        <Messages fileName={fileName} />
        <ChatBodyBottom fileName={fileName} setFileName={setFileName} />
      </Box>
    </>
  );
};

export default ChatBody;
