import React from "react";
import UserSVG from "../../assets/User.svg";
import WritingSVG from "../../assets/writing.svg";

import { Store, UpdateStore } from "../../StoreContext";
import { getUser } from "../../utils/Auth";

import Api from "../../api/index";
import assetsURL from "../../utils/Assets";

const ConversationsContainer = (props) => {
  const store = Store();
  const updateStore = UpdateStore();

  return (
    <>
      {store.chats.map((_) => (
        <ConversationListTile {..._} />
      ))}
    </>
  );
};

const ConversationListTile = (props) => {
  const store = Store();
  const updateStore = UpdateStore();

  const getReceiver = () => {
    if (user.role == "client") {
      return props.tailor;
    } else if (user.role == "tailor") {
      return props.client;
    } else {
      return null;
    }
  };

  const user = getUser();
  const receiver = getReceiver();

  const receiverCheckIn = new Date(receiver.check_in);
  const receiverCheckOut = new Date(receiver.check_out);

  receiver.status = receiverCheckIn > receiverCheckOut ? "online" : "offline";

  const handleSelect = async () => {
    let response;
    try {
      response = await Api("post", `/messages/byQuery`, {
        chat: props._id,
      });
      const messagesData = response.data.messages;
      updateStore({
        chat: props,
        messages: messagesData,
      });
      setIsLoading(false);
    } catch (e) {
      console.trace(e);
    }
  };

  return (
    <>
      <div
        style={{
          padding: "24px",
          background: "#ffffff",
          borderRadius: "10px",
          marginBottom: "10px",
          cursor: "pointer",
        }}
        onClick={handleSelect}
      >
        <div className="parent">
          <div className="card-user">
            {props.status === "online" ? (
              <div className="online">
                <div className="online-white">
                  <div className="online-green"> </div>
                </div>
              </div>
            ) : null}
            <img
              className="image_container"
              style={{
                height: "50pt",
                width: "50pt",
                marginRight: "20px",
              }}
              src={receiver?.avatar ? assetsURL(receiver.avatar) : UserSVG}
            />
            <div className="name-status">
              <strong className="user-name">{receiver?.name}</strong>
              <div className="status-cont">
                {/* {receiver?.status == "writing" ? (
                  <img className="writing" src={WritingSVG} />
                ) : null} */}
                <p
                  style={{
                    color: receiver.status == "online" ? "#149E7A" : "#cc8e9c",
                  }}
                  className="status"
                >
                  {receiver.status}{" "}
                </p>
              </div>
            </div>
          </div>
          <p className="time"> {receiver?.time}</p>
        </div>
        <div className="user-detail-parent">
          <p className="user-detail">{props.last_message?.content ?? "N/A"}</p>
          {(user.role == "client" && props.client_unread_messages) ||
          (user.role == "tailor" && props.tailor_unread_messages) ? (
            <div className="dot">
              {user.role == "client"
                ? props.client_unread_messages
                : props.tailor_unread_messages}
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default ConversationsContainer;
