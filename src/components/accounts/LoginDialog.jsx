import { React, useContext } from "react";

import { Dialog, Box, Typography, List, ListItem, styled } from "@mui/material";

import { AccountContext } from "../../context/AccountProvider";

import { GoogleLogin } from "@react-oauth/google";

import { addUser } from "../../service/api";

import jwt_decode from "jwt-decode";

const Component = styled(Box)`
  display: flex;
`;

const Container = styled(Box)`
  padding: 56px 0 56px 56px;
`;

const QRCode = styled("div")({
  height: 264,
  width: 264,
  margin: "50px 0 0 50px",
});

const Title = styled(Typography)`
  font-size: 26px;
  color: #525252;
  font-weight: 500;
  font-family: inherit;
  margin-bottom: 25px;
`;

const dialogStyle = {
  height: "96%",
  marginTop: "12%",
  width: "60%",
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "none",
  overflow: "hidden",
};

const StyledList = styled(List)`
  & > li {
    padding: 0;
    margin-top: 15px;
    font-size: 18px;
    line-height: 28px;
    color: #4a4a4a;
  }
`;

const LoginDialog = () => {
  const { setAccount } = useContext(AccountContext);

  const onLoginSuccess = async (res) => {
    const decoded = jwt_decode(res.credential);
    console.log(decoded);
    setAccount(decoded);
    await addUser(decoded);
  };

  const onLoginError = (res) => {
    console.log("Login Failed", res);
  };

  return (
    <Dialog open={true} PaperProps={{ sx: dialogStyle }} hideBackdrop={true}>
      <Component>
        <Container>
          <Title>To use WhatsApp on your computer: </Title>
          <StyledList>
            <ListItem>Log In using react-oauth/google</ListItem>
            <ListItem>
              1. Tap on the button
            </ListItem>
            <ListItem>
              2. Login using your google account
            </ListItem>
          </StyledList>
        </Container>
        <Box sx={{ position: "relative" }}>
          <QRCode />
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "22%",
              // transform: "translateX(50%)",
            }}
          >
            <GoogleLogin onSuccess={onLoginSuccess} onError={onLoginError} />
          </Box>
        </Box>
      </Component>
    </Dialog>
  );
};

export default LoginDialog;
