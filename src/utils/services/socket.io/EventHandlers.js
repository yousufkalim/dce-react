import SS from "./utils/state";

export const connectHandler = (socket, updateStore) => {
  updateStore({
    socket: socket,
  });
};

export const disconnectHandler = (socket, updateStore) => {
  // Do nothing
};

export const receiveChatHandler = (socket, updateStore, _) => {
  const chats = [...store.chats];
  chats.push(_);

  updateStore({
    chats: chats,
    chat: _,
    messages: [], // Fetch and display real messages
  });
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
