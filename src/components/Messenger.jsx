import React from "react";

import { AppBar, Toolbar, styled, Box } from "@mui/material";

import LoginDialog from "./accounts/LoginDialog";

const Header = styled(AppBar)` // overriden AppBar with Header (The properties of header still remain)
    height : 220px;
    background-color: #00bfa5;
    box-shadow: none;
`

const Component = styled(Box)`
    height: 100vh;
    background: #DCDCDC;
`


const Messenger = () => {
  return (
    <Component>
      <Header>
        <Toolbar></Toolbar>
      </Header>
      <LoginDialog />
    </Component>
  );
};

export default Messenger;
