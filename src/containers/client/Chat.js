import React, { useState, useEffect } from "react";
import ClientAppBar from "../../components/ClientAppBar";
import MessagesContainer from "../../components/Chat/MessagesContainer";
import ArrowSVG from "../../assets/recentdown.svg";
import ConversationsContainer from "../../components/Chat/ConversationsContainer";
import SearchSVG from "../../assets/search.svg";
import Box from "@mui/material/Box";
import CustomDropDown from "../../components/CustomDropDown";

import { useNavigate } from "react-router-dom";
import { getUser } from "../../utils/Auth";
import Api from "../../api";
import { toast } from "react-toastify";

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

const ClientChatScreen = () => {
  const navigate = useNavigate();

  const [isProcessing, setIsProcessing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [chats, setChats] = useState([]);
  const [chat, setChat] = useState(null);

  const user = getUser();

  useEffect(() => {
    getChats();
  }, []);

  const getChats = async () => {
    let response;
    try {
      response = await Api("post", `/chats/byQuery`, {
        client: user._id,
      });
      const chatsData = response.data.chats;
      setChats(chatsData);
      setChat(chatsData[0]);
      setIsLoading(false);
    } catch (e) {
      console.trace(e);
    }
  };

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
                <img className="recent-down-icon" src={ArrowSVG} />
              </div>
              <div className="search-msg-cont">
                <img className="srch-icon" src={SearchSVG} />
                <input className="search-msg-input" placeholder="Search" />
                <select className="search-msg-dropdown">
                  <option value="Messages">Messages</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option>
                </select>
              </div>
              <div className="user-card-container">
                <ConversationsContainer chats={chats} />
              </div>
            </Box>
            <MessagesContainer
              width={width}
              mobiletoggle={mobiletoggle}
              chat={chat}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientChatScreen;
