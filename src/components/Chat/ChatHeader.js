import React, { useState } from "react";
import UserSVG from "../../assets/dummy.jpeg";
import attachment from "../../assets/attachment.svg";
import threedots from "../../assets/dotted.svg";
import { useTranslation } from "react-i18next";

import { Store, UpdateStore } from "../../StoreContext";

import assetsURL from "../../utils/Assets";
import { getUser } from "../../utils/Auth";

const ChatHeader = ({ directUser }) => {
  const { t } = useTranslation();

  const [inputData, setInputData] = useState("");
  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.files[0];
    setInputData(e.target.files[0]);
  };

  const store = Store();
  const updateStore = UpdateStore();

  const getReceiver = () => {
    if (user.role == "client") {
      return store.chat?.tailor ?? directUser ?? {};
    } else {
      return store.chat?.client ?? directUser ?? {};
    }
  };

  const user = getUser();
  const receiver = getReceiver();

  const receiverCheckIn = receiver.check_in
    ? new Date(receiver.check_in)
    : null;
  const receiverCheckOut = receiver.check_out
    ? new Date(receiver.check_out)
    : null;

  if (receiverCheckIn && receiverCheckOut) {
    receiver.status = receiverCheckIn > receiverCheckOut ? "online" : "offline";
  } else {
    receiver.status = "online";
  }

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
            src={receiver.avatar ? assetsURL(receiver.avatar) : UserSVG}
          />
          <div>
            <p className="usr">
              {receiver.name
                ? receiver.name
                : store.chat.is_admin
                ? "Admin"
                : "N/A"}
            </p>
            {receiver.status == "online" ? (
              <p className="is-online">{t("Online")}</p>
            ) : (
              <p className="is-offline">
                {t("Last Online")}{" "}
                {new Date(receiver.check_out).toLocaleDateString("en-US")}
              </p>
            )}
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
