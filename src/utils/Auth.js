import { Route } from "react-router-dom";

import Constants from "./services/socket.io/utils/Constants";
import Helpers from "./services/socket.io/utils/Helpers";

import SS from "./services/socket.io/utils/state";
import * as EventHandlers from "./services/socket.io/EventHandlers";

export const initSocket = (updateStore) => {
  const token = localStorage.getItem("token");
  if (!SS.socket && token) {
    const socket = require("socket.io-client")("http://localhost:5000", {
      query: {
        token: `Bearer ${token}`,
      },
    });
    Helpers.registerEvent(socket, Constants.E_CONNECTION, () =>
      EventHandlers.connectHandler(socket, updateStore)
    );
    Helpers.registerEvent(socket, Constants.E_DISCONNECT, () =>
      EventHandlers.disconnectHandler(socket, updateStore)
    );
    Helpers.registerEvent(socket, Constants.E_RECEIVE_CHAT, (_) =>
      EventHandlers.receiveChatHandler(socket, updateStore, _)
    );
    Helpers.registerEvent(socket, Constants.E_RECEIVE_MESSAGE, (_) =>
      EventHandlers.receiveMessageHandler(socket, updateStore, _)
    );
  }
};

export const handleLogin = (token, user, updateStore) => {
  localStorage.setItem("token", token);
  localStorage.setItem("user", JSON.stringify(user));
  initSocket(updateStore);
  return true;
};

export const handleLogout = (navigate, store, updateStore) => {
  localStorage.clear();
  navigate("/login");
  store.socket.disconnect();
  updateStore({
    socket: null,
    chats: [],
    chat: null,
    messages: [],
  });
}; // Handle here.

export const getUser = () => {
  let cookie = localStorage.getItem("user");
  let user = cookie && JSON.parse(cookie);
  return user;
};

export const setUser = (user) => {
  return localStorage.setItem("user", JSON.stringify(user));
};

export const getToken = () => {
  let token = localStorage.getItem("token");
  return token;
};

export function getRoutes(routesArr) {
  const routes = [];

  for (let i = 0; i < routesArr.length; i++) {
    const Element = routesArr[i].element;

    routes.push(
      <Route exact path={routesArr[i].path} element={<Element />} key={i} />
    );
  }

  return routes;
}
