import React from "react";
import UserSVG from "../../assets/User.svg";
import writing from "../../assets/writing.svg";

import { Store, UpdateStore } from "../../StoreContext";
import { getUser } from "../../utils/Auth";

import assetsURL from "../../utils/Assets";

const ConversationsContainer = ({}) => {
  const store = Store();
  const updateStore = UpdateStore();

  const user = getUser();
  const getReceiver = (_) => (user.role = "client" ? _.tailor : _.client);

  return (
    <>
      {store.chats.map((_) => (
        <div
          style={{
            padding: "24px",
            background: "#ffffff",
            borderRadius: "10px",
            marginBottom: "10px",
          }}
        >
          <div className="parent">
            <div className="card-user">
              {_.status === "Writing" ? (
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
                src={
                  getReceiver(_).avatar
                    ? assetsURL(getReceiver(_).avatar)
                    : UserSVG
                }
              />
              <div className="name-status">
                <strong className="user-name">{getReceiver(_).name}</strong>
                <div className="status-cont">
                  {_?.status == "Writing" ? (
                    <img className="writing" src={writing} />
                  ) : null}
                  <p
                    style={{
                      color:
                        _?.status == "do not disturb" ? "#FF3737" : "#149E7A",
                    }}
                    className="status"
                  >
                    {_?.status}{" "}
                  </p>
                </div>
              </div>
            </div>
            <p className="time"> {_?.time}</p>
          </div>
          <div className="user-detail-parent">
            <p className="user-detail">{_.last_message?.content ?? "N/A"}</p>
            <div className="dot">3</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ConversationsContainer;
