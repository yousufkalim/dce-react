import React, { useState } from "react";
import send from "../../assets/send.svg";
import one from "../../assets/attachone.svg";
import two from "../../assets/attachtwo.svg";
import three from "../../assets/attachthree.svg";
import four from "../../assets/attachfour.svg";
import Box from "@mui/material/Box";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import Picker from "emoji-picker-react";
import chatemoji from "../../assets/chatemoji.svg";
const ChatBodyBottom = ({ setFileName }) => {
  const [iconsToggle, setIconsToggle] = useState(true);
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [Open, setOpen] = useState(false);
  const [values, setvalues] = useState({
    video: "",
    image: "",
    file: "",
  });
  const ToggleIcon = () => {
    setIconsToggle(!iconsToggle);
  };
  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
  };
  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.files[0];
    setvalues((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
    setFileName((pre) => {
      return [...pre, e.target.files[0].name];
    });
  };
  const EmojiOpen = () => {
    setOpen(!Open);
  };
  return (
    <>
      <div className="send-msg-cont">
        <div className="send-attachments cursor-pointer">
          {
            <Box className={iconsToggle ? "inptwo" : "inp"}>
              <div className="send-att-img cursor-pointer">
                <label htmlFor="videoPicker">
                  <input
                    type="file"
                    accept=".mov, .mp4"
                    hidden
                    id="videoPicker"
                    onChange={onChange}
                    name="video"
                  />
                  <img src={one} />
                </label>
              </div>

              <div className="send-att-img cursor-pointer">
                <label htmlFor="imgPicker">
                  <input
                    type="file"
                    accept=".jpeg,.png,.svg,.gif, .jpg"
                    hidden
                    id="imgPicker"
                    onChange={onChange}
                    name="image"
                  />
                  <img src={two} />
                </label>
              </div>

              <div className="send-att-img cursor-pointer">
                <label htmlFor="filePicker">
                  <input
                    type="file"
                    accept="*"
                    hidden
                    id="filePicker"
                    onChange={onChange}
                    name="file"
                  />
                  <img src={three} />
                </label>
              </div>
            </Box>
          }
          <div onClick={ToggleIcon} className="toggle-icons">
            {iconsToggle ? (
              <RemoveOutlinedIcon sx={{ height: "17px", width: "17px" }} />
            ) : (
              <img src={four} />
            )}
          </div>
        </div>
        <input
          className="msg-input"
          placeholder="Type a message here"
          value={chosenEmoji?.emoji}
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
        <div className="send-btn cursor-pointer">
          <img src={send} />
        </div>
      </div>
    </>
  );
};

export default ChatBodyBottom;
