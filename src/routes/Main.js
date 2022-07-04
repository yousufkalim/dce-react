import React, { useEffect } from "react";

import { Routes } from "react-router-dom";

import { getToken, getUser, handleLogout } from "../utils/Auth";
import { useLocation, useNavigate } from "react-router-dom";
import { focusHandling } from "cruip-js-toolkit";
import { isExpired } from "react-jwt";

import RoutesObj from "../routes/Routes";
import { getRoutes, initSocket } from "../utils/Auth";

import { Store, UpdateStore } from "../StoreContext";
import SS from "../utils/services/socket.io/utils/state";

const Main = () => {
  const token = getToken();
  const user = getUser();
  const location = useLocation();
  const isMyTokenExpired = isExpired(token);

  const navigate = useNavigate();

  const store = Store();
  const updateStore = UpdateStore();

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
    focusHandling("outline");
    initSocket(updateStore);
    if (token && isMyTokenExpired) {
      handleLogout(navigate, store, updateStore);
    }
  }, [location.pathname]); // triggered on route change

  useEffect(() => {
    Object.assign(SS, store);
    // console.log(SS, `_SS_`);
  }, [store]);

  return (
    <>
      <div className="main-container">
        <Routes>
          {token && isMyTokenExpired == false ? (
            <>{user.role == "client" ? <>{getRoutes(RoutesObj.ClientRoutes)}</> : <>{getRoutes(RoutesObj.TailorRoutes)}</>}</>
          ) : (
            <>{getRoutes(RoutesObj.AuthRoutes)}</>
          )}
        </Routes>
      </div>
    </>
  );
};

export default Main;
