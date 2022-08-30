import React, { useState } from 'react';
import SendSVG from '../../assets/send.svg';
import MovieSVG from '../../assets/attachone.svg';
import ImageSVG from '../../assets/attachtwo.svg';
import DocumentSVG from '../../assets/attachthree.svg';
import MinusSVG from '../../assets/attachfour.svg';
import Box from '@mui/material/Box';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import Picker from 'emoji-picker-react';
import chatemoji from '../../assets/chatemoji.svg';

import { Store, UpdateStore } from '../../StoreContext';

import { toast } from 'react-toastify';

import Api from '../../api/index';
import { useTranslation } from 'react-i18next';

const SendMessage = ({ directUser }) => {
  const { t } = useTranslation();

  const store = Store();
  const updateStore = UpdateStore();

  const [isProcessing, setIsProcessing] = useState(false);
  const [text, setText] = useState(null);

  const sendTextMessage = () => {
    if (!text) {
      toast.error('Please type message to send.');
    }

    store.socket.emit('send_message', {
      type: 'text',
      content: text,
      direct_user: directUser,
      chat: store.chat,
    });

    setText('');
  };

  const sendAssetMessage = async (e, type) => {
    const file = e.target.files[0];

    if (file.size / 1024 > 10000) {
      toast.error('Files greater than 10 MB are not allowed.');
      return;
    }

    if (isProcessing) {
      return;
    }

    let response;

    try {
      setIsProcessing(true);

      const body = new FormData();

      body.append('file', file);

      response = await Api('post', '/assets', body);

      if (response?.data?.success) {
        const asset = response.data.file;

        store.socket.emit('send_message', {
          type: type,
          content: asset,
          direct_user: directUser,
          chat: store.chat,
        });
      }
    } catch (e) {
      console.trace(e);
    }

    setIsProcessing(false);
  };

  // Design
  const [iconsToggle, setIconsToggle] = useState(false);
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [Open, setOpen] = useState(false);
  const [values, setvalues] = useState({
    video: '',
    image: '',
    file: '',
  });
  const ToggleIcon = () => {
    setIconsToggle(!iconsToggle);
  };
  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
  };
  const EmojiOpen = () => {
    setOpen(!Open);
  };
  // Design

  return (
    <>
      <div className="send-msg-cont" style={{ pointerEvents: isProcessing ? 'none' : 'all' }}>
        <div className="send-attachments cursor-pointer">
          <Box className={iconsToggle ? 'inptwo' : 'inp'}>
            <div className="send-att-img cursor-pointer">
              <label htmlFor="videoPicker">
                <input
                  type="file"
                  accept=".mp4"
                  hidden
                  id="videoPicker"
                  onChange={(e) => sendAssetMessage(e, 'video')}
                  name="video"
                />
                <img src={MovieSVG} />
              </label>
            </div>
            <div className="send-att-img cursor-pointer">
              <label htmlFor="imgPicker">
                <input
                  type="file"
                  accept=".jpeg,.png,.jpg"
                  hidden
                  id="imgPicker"
                  onChange={(e) => sendAssetMessage(e, 'image')}
                  name="image"
                />
                <img src={ImageSVG} />
              </label>
            </div>
            <div className="send-att-img cursor-pointer">
              <label htmlFor="filePicker">
                <input
                  type="file"
                  accept="*"
                  hidden
                  id="filePicker"
                  onChange={(e) => sendAssetMessage(e, 'attachment')}
                  name="file"
                />
                <img src={DocumentSVG} />
              </label>
            </div>
          </Box>
          <div onClick={ToggleIcon} className="toggle-icons">
            {iconsToggle ? <RemoveOutlinedIcon sx={{ height: '17px', width: '17px' }} /> : <img src={MinusSVG} />}
          </div>
        </div>
        <input
          className="msg-input"
          placeholder={t('Type a message here')}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        {
          <>
            <img className="emoji-init" onClick={EmojiOpen} src={chatemoji} />
            {Open ? (
              <div className="emoji-open">
                <Picker onEmojiClick={onEmojiClick} />
              </div>
            ) : null}
          </>
        }
        <div className="send-btn cursor-pointer" onClick={sendTextMessage}>
          <img src={SendSVG} />
        </div>
      </div>
    </>
  );
};

export default SendMessage;
