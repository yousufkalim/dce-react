import React, { useState, useEffect } from "react";
import ClientAppBar from "../../components/ClientAppBar";
import MessagesContainer from "../../components/Chat/MessagesContainer";
import ArrowSVG from "../../assets/recentdown.svg";
import ConversationsContainer from "../../components/Chat/ConversationsContainer";
import SearchSVG from "../../assets/search.svg";
import Box from "@mui/material/Box";
import CustomDropDown from "../../components/CustomDropDown";

import { useNavigate, useLocation } from "react-router-dom";
import { getUser } from "../../utils/Auth";
import Api from "../../api";
import { toast } from "react-toastify";
import { Store, UpdateStore } from "../../StoreContext";

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
  const location = useLocation();

  const [isProcessing, setIsProcessing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const directUser = location?.state?.directUser;

  const store = Store();
  const updateStore = UpdateStore();

  const user = getUser();

  useEffect(() => {
    if (store.chats.length == 0) {
      loadData();
    }
  }, []);

  const loadData = async () => {
    const chatID = await getChats();
    if (chatID) {
      getMessages(chatID);
    }
  };

  const getChats = async () => {
    let response;
    try {
      response = await Api("post", `/chats/byQuery`, {
        client: user._id,
      });
      const chatsData = response.data.chats;
      updateStore({
        chats: chatsData,
        chat: chatsData[0],
      });
      return chatsData[0];
    } catch (e) {
      console.trace(e);
    }
  };

  const getMessages = async (chatID) => {
    let response;
    try {
      response = await Api("post", `/messages/byQuery`, {
        chat: chatID,
      });
      const messagesData = response.data.messages;
      updateStore({
        messages: messagesData,
      });
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
      {console.log(store, "_store_")}
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
                <ConversationsContainer />
              </div>
            </Box>
            <MessagesContainer
              width={width}
              mobiletoggle={mobiletoggle}
              directUser={directUser}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientChatScreen;
