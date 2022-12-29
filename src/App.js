import React from "react";
import "./App.css";

import Messenger from "./components/Messenger";
import AccountProvider from "./context/AccountProvider";

import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  const clientId =
    "202213112640-jft40l3ka5vckvk7na4hkufsu3a715k9.apps.googleusercontent.com";

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messenger /> // It will act as children for the context
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
