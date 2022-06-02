import React, { useState } from "react";
import UserSVG from "../../assets/dummy.jpeg";
import threedots from "../../assets/dotted.svg";
import { useTranslation } from "react-i18next";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { Store, UpdateStore } from "../../StoreContext";

import assetsURL from "../../utils/Assets";
import { getUser } from "../../utils/Auth";

import { toast } from "react-toastify";

import Api from "../../api/index";

const ChatHeader = ({ directUser }) => {
  const [isProcessing, setIsProcessing] = useState(false);

  const { t } = useTranslation();

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

  const receiverCheckIn = receiver.check_in ? new Date(receiver.check_in) : null;
  const receiverCheckOut = receiver.check_out ? new Date(receiver.check_out) : null;

  if (receiverCheckIn && receiverCheckOut) {
    receiver.status = receiverCheckIn > receiverCheckOut ? "online" : "offline";
  } else {
    receiver.status = "online";
  }

  const [anchorElMenu, setAnchorElMenu] = React.useState(null);
  const openMenu = Boolean(anchorElMenu);
  const handleClickMenu = (event) => {
    setAnchorElMenu(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorElMenu(null);
  };

  const handleDelete = async (e) => {
    if (isProcessing) {
      return;
    }

    let response;

    try {
      setIsProcessing(true);

      response = await Api("delete", `/chats/${store.chat._id}`);

      if (response?.data?.success) {
        handleCloseMenu();
        toast.success("Chat deleted successfully");
        _loadChats();
      }
    } catch (e) {
      console.trace(e);
    }

    setIsProcessing(false);
  };

  const _loadChats = async () => {
    let response;
    try {
      const body = {};
      if (user.role == "client") {
        body["client"] = user._id;
      } else {
        body["tailor"] = user._id;
      }
      response = await Api("post", `/chats/byQuery`, body);
      const chatsData = response.data.chats;
      updateStore({
        chats: chatsData,
        chat: chatsData[0],
      });
      _loadMessages(chatsData[0]._id);
    } catch (e) {
      console.trace(e);
    }
  };

  const _loadMessages = async (chatID) => {
    let response;
    try {
      response = await Api("post", `/messages/byQuery`, {
        chat: chatID,
      });
      const messagesData = response.data.messages ?? [];
      updateStore({
        messages: messagesData,
      });
    } catch (e) {
      console.trace(e);
    }
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
            src={receiver.avatar ? assetsURL(receiver.avatar) : UserSVG}
          />
          <div>
            <p className="usr">{receiver.name ? receiver.name : store.chat.is_admin ? "Admin" : "N/A"}</p>
            {receiver.status == "online" ? (
              <p className="is-online">{t("Online")}</p>
            ) : (
              <p className="is-offline">
                {t("Last Online")} {new Date(receiver.check_out).toLocaleDateString("en-gb")}
              </p>
            )}
          </div>
        </div>
        <div>
          <img className="chat-header-icons-two" src={threedots} onClick={handleClickMenu} />
          <Menu
            id="basic-menu"
            anchorEl={anchorElMenu}
            open={openMenu}
            onClose={handleCloseMenu}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem
              style={{ borderBottom: "1px solid #DBDBDB", margin: "5px 20px" }}
              className="menu-item"
              onClick={handleDelete}
            >
              <p>{t("Delete")}</p>
            </MenuItem>
          </Menu>
        </div>
      </div>
    </>
  );
};

export default ChatHeader;
