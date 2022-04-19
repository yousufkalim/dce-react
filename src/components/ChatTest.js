import React, { useState, useEffect } from "react";
import { Store } from "../StoreContext";

function ChatTest() {
  const { user, socket } = Store();

  useEffect(() => {
    socket?.on("welcome", (payload) => {
      console.table(user);
    });
  }, []);
  return <div>ChatTest</div>;
}

export default ChatTest;
