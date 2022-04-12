import { Route } from "react-router-dom";

export const initSocket = (store, updateStore) => {
  if (!store.socket) {
    const token = localStorage.getItem("token");
    const socket = require("socket.io-client")("http://localhost:5000", {
      query: {
        token: `Bearer ${token}`,
      },
    });
    socket.on("connect", function () {
      updateStore({
        socket: socket,
      });
    });
    socket.on("disconnect", function () {});
  }
};

export const handleLogin = (token, user, store, updateStore) => {
  localStorage.setItem("token", token);
  localStorage.setItem("user", JSON.stringify(user));
  initSocket(store, updateStore);
  return true;
};

export const handleLogout = (navigate, store, updateStore) => {
  localStorage.clear();
  navigate("/login");
  store.socket.disconnect();
  updateStore({
    socket: null,
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
