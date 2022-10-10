import React, { useRef, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import DotSVG from '../../assets/dot.svg';
import SeenSCG from '../../assets/Seenicon.svg';
import ViewImageSVG from '../../assets/InputEye.svg';
import { useTranslation } from 'react-i18next';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { Store, UpdateStore } from '../../StoreContext';
import { getUser } from '../../utils/Auth';

import { assetsUrl } from '../../config';

import { toast } from 'react-toastify';

import Api from '../../api/index';
import Modal from '@mui/material/Modal';

const Messages = ({}) => {
  const store = Store();
  const updateStore = UpdateStore();

  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: 'auto' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [store]);

  return (
    <>
      <div className="message-cont">
        {store.messages.map(_ => (
          <MessageListTile {..._} />
        ))}
        <div ref={messagesEndRef} />
      </div>
    </>
  );
};

const MessageListTile = props => {
  const store = Store();
  const updateStore = UpdateStore();

  const [isProcessing, setIsProcessing] = useState(false);

  const { t } = useTranslation();
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
    if (props.type != 'text') {
      // window.open(assetsURL(props.content), '_blank');
      handleIsViewImageModalOpen();
    }
  };

  const [anchorElMenu, setAnchorElMenu] = React.useState(null);
  const openMenu = Boolean(anchorElMenu);
  const handleClickMenu = event => {
    setAnchorElMenu(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorElMenu(null);
  };

  const handleDelete = async e => {
    if (isProcessing) {
      return;
    }

    let response;

    try {
      setIsProcessing(true);

      response = await Api('delete', `/messages/${props._id}`);

      if (response?.data?.success) {
        handleCloseMenu();
        toast.success(t('Messagee deleted successfully'));
        _loadMessages();
      }
    } catch (e) {
      console.trace(e);
    }

    setIsProcessing(false);
  };

  const _loadMessages = async () => {
    let response;
    try {
      response = await Api('post', `/messages/byQuery`, {
        chat: store.chat._id
      });
      const messagesData = response.data.messages ?? [];
      updateStore({
        messages: messagesData
      });
    } catch (e) {
      console.trace(e);
    }
  };

  const [isViewImageModal, setIsViewImageModal] = useState(false);
  const handleIsViewImageModalClose = () => {
    setIsViewImageModal(false);
  };
  const handleIsViewImageModalOpen = () => {
    setIsViewImageModal(true);
  };

  return (
    <>
      <Box sx={{ justifyContent: isSender ? 'right' : 'left' }} className="message-width">
        {isSender ? (
          <>
            <img className="dot-msg" src={DotSVG} onClick={handleClickMenu} />
            <Menu
              id="basic-menu"
              anchorEl={anchorElMenu}
              open={openMenu}
              onClose={handleCloseMenu}
              MenuListProps={{
                'aria-labelledby': 'basic-button'
              }}>
              <MenuItem
                style={{
                  // borderBottom: '1px solid #DBDBDB',
                  margin: '5px 20px'
                }}
                className="menu-item"
                onClick={handleDelete}>
                <p>{t('Delete')}</p>
              </MenuItem>
            </Menu>
          </>
        ) : null}
        <Box
          sx={{
            background: isSender ? ' #ffffff' : '#F7C9D0',
            border: isSender ? '1px solid #DBDBDB' : 'none',
            boxShadow: isSender ? '0px 4px 9px rgba(0, 0, 0, 0.04)' : 'none',
            borderBottomRightRadius: isSender ? 'none' : '10px',
            borderTopLeftRadius: isSender ? '10px' : 'none'
          }}
          className="msg-text"
          onClick={handleClick}>
          <p style={{ cursor: props.type != 'text' ? 'pointer' : 'auto' }}>
            {props.type != 'text' && (
              <img
                src={ViewImageSVG}
                style={{
                  cursor: 'pointer',
                  width: '16pt',
                  margin: '0px 12px -4px 0px'
                }}
              />
            )}
            {props.content}
          </p>
        </Box>
        {props.role === 'receiver' ? <img className="dot-msg" src={DotSVG} /> : null}
        {isSender ? <img src={SeenSCG} /> : null}
      </Box>

      {isSender ? (
        <p style={{ textAlign: 'end', width: '95%', color: '#DBDBDB' }}>{props?.lastseen}</p>
      ) : null}

      <Modal
        open={isViewImageModal}
        onClose={handleIsViewImageModalClose}
        aria-labelledby="View Image">
        <ViewImageModal src={props.content} handleClose={handleIsViewImageModalClose} />
      </Modal>
    </>
  );
};

function ViewImageModal(props) {
  console.log('ViewImageModal in message', props);
  return (
    <div
      className="tqs_sqm_container"
      style={{
        height: '40vh',
        width: '40vw'
      }}>
      <img
        src={assetsUrl + props?.src}
        // src={typeof props?.src == 'string' ? props.src : URL.createObjectURL(props.src)}
        style={{
          height: '100%',
          width: '100%',
          objectFit: 'contain'
        }}
      />
    </div>
  );
}

export default Messages;
