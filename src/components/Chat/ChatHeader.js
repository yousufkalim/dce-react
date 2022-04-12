import React, { useState } from "react";
import UserSVG from "../../assets/User.svg";
import attachment from "../../assets/attachment.svg";
import threedots from "../../assets/dotted.svg";

import { Store, UpdateStore } from "../../StoreContext";

import assetsURL from "../../utils/Assets";

const ChatHeader = ({ directUser }) => {
  const store = Store();
  const updateStore = UpdateStore();

  const [inputData, setInputData] = useState("");
  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.files[0];
    setInputData(e.target.files[0]);
  };
  return (
    <>
      <div className="main">
        <div className="img-user">
          <img
            className="image_container"
            style={{
              height: "50pt",
              width: "50pt",
              marginRight: "20px",
            }}
            src={
              store.chat?.tailor
                ? assetsURL(store.chat.tailor.avatar)
                : directUser
                ? assetsURL(directUser.avatar)
                : UserSVG
            }
          />
          <div>
            <p className="usr">
              {store.chat?.tailor?.name ?? directUser?.name}
            </p>
            <p className="last-online"> last online N/A</p>
          </div>
        </div>
        <div>
          <label htmlFor="filePicker">
            <input
              type="file"
              accept="*"
              hidden
              id="filePicker"
              onChange={onChange}
              name="attachment"
            />
            <img className="chat-header-icons" src={attachment} />
          </label>
          <img className="chat-header-icons-two" src={threedots} />
        </div>
      </div>
    </>
  );
};

export default ChatHeader;
