import SS from './utils/state';
import Api from '../../../api/index';

export const connectHandler = (socket, updateStore) => {
  updateStore({
    socket: socket,
  });
};

export const disconnectHandler = (socket, updateStore) => {
  // Do nothing
};

export const receiveChatHandler = async (socket, updateStore, _) => {
  const chats = [...SS.chats];
  chats.push(_);

  const _messages = await _getMessages(_._id);

  updateStore({
    chats: chats,
    chat: _,
    messages: _messages,
  });
};

const _getMessages = async (chatID) => {
  let response;
  try {
    response = await Api('post', `/messages/byQuery`, {
      chat: chatID,
    });
    const messagesData = response.data.messages ?? [];
    return messagesData;
  } catch (e) {
    console.trace(e);
    return [];
  }
};

export const receiveMessageHandler = (socket, updateStore, _) => {
  if (SS.chat._id == _.chat) {
    const messages = [...SS.messages];
    messages.push(_);
    updateStore({
      messages: messages,
    });
  }
};
