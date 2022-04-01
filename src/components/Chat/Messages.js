import React, { useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import dot from "../../assets/dot.svg";
import seen from "../../assets/Seenicon.svg";
const Messages = ({ fileName }) => {
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "auto" });
  };
  useEffect(() => {
    scrollToBottom();
  }, []);
  const items = [
    {
      msg: `Mai nhi btaounga`,
      role: "sender",
      lastseen: `4 days ago`,
    },
    {
      msg: `Vestibulum eget luctus eros. Aenean luctus varius lacus in imperdiet.`,
      role: "receiver",
      lastseen: `5 days ago`,
    },
    {
      msg: `Vestibulum eget Aenean luctus varius lacus in imperdiet.`,
      role: "sender",
      lastseen: `6 days ago`,
    },
    {
      msg: `Vestibulum lacus in imperdiet.`,
      role: "sender",
      lastseen: `8 days ago`,
    },
    {
      msg: `Vestibulum eget`,
      role: "receiver",
      lastseen: `10 days ggo`,
    },
    {
      msg: `Vestibulum eget luctus eros. Aenean luctus varius lacus in imperdiet.`,
      role: "sender",
      lastseen: `12 days ggo`,
    },
    {
      msg: `Vestibulum eget luctus eros. Aenean luctus varius lacus in imperdiet.`,
      role: "sender",
      lastseen: `2 days ago`,
    },
    {
      msg: `Vestibulum eget luctus eros. Aenean luctus varius lacus in imperdiet.`,
      role: "sender",
      lastseen: `9 days ago`,
    },
    {
      msg: `Vestibulum eget luctus eros. Aenean luctus varius lacus in imperdiet.`,
      role: "receiver",
      lastseen: `6 days ago`,
    },
    {
      msg: `Vestibulum eget luctus eros. Aenean luctus varius lacus in imperdiet.`,
      role: "receiver",
      lastseen: `6 days ago`,
    },
    {
      msg: `Vestibulum eget luctus eros. Aenean luctus varius lacus in imperdiet.`,
      role: "sender",
      lastseen: `6 days ago`,
    },
    {
      msg: `Vestibulum eget luctus eros. Aenean luctus varius lacus in imperdiet.`,
      role: "receiver",
      lastseen: `6 days ago`,
    },
  ];

  console.log(fileName, "fileName");
  return (
    <>
      <div className="message-cont">
        {items.map((val) => (
          <>
            <Box
              sx={{ justifyContent: val.role === "sender" ? "right" : "left" }}
              className="message-width"
            >
              {val.role === "sender" ? (
                <img className="dot-msg" src={dot} />
              ) : null}
              <Box
                sx={{
                  background: val.role === "sender" ? " #ffffff" : "#F7C9D0",
                  border: val.role === "sender" ? "1px solid #DBDBDB" : "none",
                  boxShadow:
                    val.role === "sender"
                      ? "0px 4px 9px rgba(0, 0, 0, 0.04)"
                      : "none",
                  borderBottomRightRadius:
                    val.role === "sender" ? "none" : "10px",
                  borderTopLeftRadius: val.role === "sender" ? "10px" : "none",
                }}
                className="msg-text"
              >
                <p>{val?.msg} </p>
              </Box>
              {val.role === "receiver" ? (
                <img className="dot-msg" src={dot} />
              ) : null}
              {val.role === "sender" ? <img src={seen} /> : null}
            </Box>

            {val.role === "sender" ? (
              <p style={{ textAlign: "end", width: "95%", color: "#DBDBDB" }}>
                {val?.lastseen}
              </p>
            ) : null}
          </>
        ))}
        {fileName?.map((val) => (
          <p> {val}</p>
        ))}

        <div ref={messagesEndRef} />
      </div>
    </>
  );
};

export default Messages;
