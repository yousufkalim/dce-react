import React from "react";
import ron from "../../assets/ron.jpeg";
import attachment from "../../assets/attachment.svg";
import threedots from "../../assets/threedots.svg";
const ChatBodyHeader = () => {
  return (
    <>
      <div className="main">
        <div className="img-user">
          <img className="img-user-chat" src={ron} />
          <div>
            <p className="usr"> ihtisham</p>
            <p className="last-online"> last online 3 hours ago</p>
          </div>
        </div>
        <div>
          <img className="chat-header-icons" src={attachment} />
          <img className="chat-header-icons-two" src={threedots} />
        </div>
      </div>
    </>
  );
};

export default ChatBodyHeader;
