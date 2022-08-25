import React, { useState, useEffect } from 'react';
import ClientAppBar from '../../components/ClientAppBar';
import TailorAppBar from '../../components/TailorAppBar';
import MessagesContainer from '../../components/Chat/MessagesContainer';
import ArrowSVG from '../../assets/recentdown.svg';
import ConversationsContainer from '../../components/Chat/ConversationsContainer';
import SearchSVG from '../../assets/search.svg';
import Box from '@mui/material/Box';
import CustomDropDown from '../../components/CustomDropDown';
import { useTranslation } from 'react-i18next';

import { useNavigate, useLocation } from 'react-router-dom';
import { getUser } from '../../utils/Auth';
import Api from '../../api';
import { toast } from 'react-toastify';
import { Store, UpdateStore } from '../../StoreContext';

function useWindowSize() {
  const [size, setSize] = useState([window.innerWidth]);
  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerWidth]);
    };
    window.addEventListener('resize', handleResize);
  }, []);
  return size;
}

const ChatScreen = () => {
  const { t } = useTranslation();

  const [width] = useWindowSize();
  const [mobiletoggle, setMobiletoggle] = useState(false);
  const OpenChat = () => {
    if (width <= '768') {
      setMobiletoggle(true);
    }
  };

  const navigate = useNavigate();
  const location = useLocation();

  const [isProcessing, setIsProcessing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [directUser, setDirectUser] = useState(location?.state?.directUser);

  const store = Store();
  const updateStore = UpdateStore();

  const user = getUser();

  useEffect(() => {
    // if (store.chats.length == 0) {
    //   loadData();
    // }
    loadData();
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
      const body = {};

      if (user.role == 'client') {
        body['client'] = user._id;
      } else {
        body['tailor'] = user._id;
      }

      response = await Api('post', `/chats/byQuery`, body);
      const chatsData = response.data.chats;
      updateStore({
        chats: chatsData,
      });
      if (directUser) {
        const isDirectUserInvalid = chatsData.some((_) => _.tailor._id == directUser._id || _.client._id == directUser._id);
        if (isDirectUserInvalid) {
          setDirectUser(null);
        } else {
          // If direct user is valid then don't set chat as it will get a priority at the server.
          return null;
        }
      }
      updateStore({
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
      response = await Api('post', `/messages/byQuery`, {
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

  return (
    <>
      <div style={{ background: '#DFDFDF' }} className='container-page-vertical'>
        {user.role == 'client' ? <ClientAppBar activeTab={3} color='#FCFCFC' /> : <TailorAppBar activeTab={3} color='#FCFCFC' />}
        <div className='client_orders_screen_top' style={{ paddingTop: '6% !important' }}>
          <div className='chat'>
            <Box
              sx={{
                display: mobiletoggle && width <= '768' ? 'none' : 'block',
              }}
              onClick={OpenChat}
              className='chat-left-bar'
            >
              <h4>{t('Chats')}</h4>
              <div className='recentchats'>
                <p> {t('Recent Chats')}</p>
                <img className='recent-down-icon' src={ArrowSVG} />
              </div>
              <div className='search-msg-cont'>
                <img className='srch-icon' src={SearchSVG} />
                <input className='search-msg-input' placeholder={t('Search')} />
              </div>
              <div className='user-card-container'>
                <ConversationsContainer />
              </div>
            </Box>
            <MessagesContainer width={width} mobiletoggle={mobiletoggle} directUser={directUser} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatScreen;
