import React, { useEffect, useState } from "react";
import { useRef } from "react";

import { createContext } from "react";

import { io } from "socket.io-client";

export const AccountContext = createContext(null);

// Here children is the messenger.jsx component
const AccountProvider = ({ children }) => {
  const [account, setAccount] = useState();
  const [person, setPerson] = useState({});
  const [activeUsers, setActiveUsers] = useState([])

  const socket = useRef();

  useEffect(() => {
    // url of the port on which socket is running
    socket.current = io("ws://localhost:9000");
  }, []);

  return (
    <AccountContext.Provider
      value={{ account, setAccount, person, setPerson, socket ,activeUsers,setActiveUsers}}
    >
      {children}
    </AccountContext.Provider>
  );
};

export default AccountProvider;
