import React, { useState, useEffect } from "react";
import ClientAppBar from "../ClientAppBar";
import ChatBody from "./ChatBody";
import arrow from "../../assets/recentdown.svg";
import UserCard from "./UserCard";
import search from "../../assets/search.svg";
import Box from "@mui/material/Box";
import CustomDropDown from '../CustomDropDown'
function useWindowSize() {
  const [size, setSize] = useState([window.innerWidth]);
  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerWidth]);
    };
    window.addEventListener("resize", handleResize);
  }, []);
  return size;
}

const Chat = () => {
  const [width] = useWindowSize();
  const [mobiletoggle, setMobiletoggle] = useState(false);
  const OpenChat = () => {
    if (width <= "768") {
      setMobiletoggle(true);
    }
  };
  return (
    <>
      <div
        style={{ background: "#DFDFDF" }}
        className="container-page-vertical"
      >
        <ClientAppBar activeTab={3} color="#FCFCFC" />
        <div className="client_orders_screen_top">
          <div className="chat">
            <Box
              sx={{
                display: mobiletoggle && width <= "768" ? "none" : "block",
              }}
              onClick={OpenChat}
              className="chat-left-bar"
            >
              <h4>Chats</h4>
              <div className="recentchats">
                <p> Recent Chats</p>
                <img className="recent-down-icon" src={arrow} />
              </div> 
              <div className="search-msg-cont">
                <img className="srch-icon" src={search} />
                <input className="search-msg-input" placeholder="Search" />
                <select  className="search-msg-dropdown">
                  <option value="Messages">Messages</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option>
                </select>
              </div>
              <div className="user-card-container">
                <UserCard />
              </div>
            </Box>
            <ChatBody width={width} mobiletoggle={mobiletoggle} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
