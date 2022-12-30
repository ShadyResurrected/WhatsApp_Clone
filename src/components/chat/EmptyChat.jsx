import { Box, Typography, styled, Divider } from "@mui/material";
import React from "react";

import { emptyChatImage } from "../../constants/data";

import LockIcon from "@mui/icons-material/Lock";

const Component = styled(Box)`
  background: #f8f9fa;
  padding: 30px 0;
  text-align: center;
  height: 100vh;
`;

const Container = styled(Box)`
  padding: 0 200px;
`;
const Image = styled("img")({
  width: 400,
  marginTop: 100,
});

const Title = styled(Typography)`
  font-size: 32px;
  margin: 25px 0 10px 0;
  font-family: inherit;
  font-weight: 300;
  color: #415158;
`;

const SubTitle = styled(Typography)`
  font-size: 14px;
  color: #667781;
  font-weight: 400;
  font-family: inherit;
`;

const StyledDivider = styled(Divider)`
  margin: 40px 0;
  opacity: 0.4;
`;

const LockContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 110px;
  & > svg {
    font-size: 14px;
    color: #8696a0;
  }
`;

const LockText = styled(Typography)`
  font: inherit;
  font-size: 14px;
  color: #8696a0;
  margin-left: 5px;
`;

const GreenBottom = styled(Box)`
  background-color: #25d366;
  width: 100%;
  height: 6px;
  position: absolute;
  bottom: 0;
`;

const EmptyChat = () => {
  return (
    <Component>
      <Container>
        <Image src={emptyChatImage} alt="image" />
        <Title>WhatsApp Web</Title>
        <SubTitle>
          Send and receive messages without keeping your phone online.
        </SubTitle>
        <SubTitle>
          Use WhatsApp on up to 4 linked devices and 1 phone at the same time.
        </SubTitle>
        <StyledDivider />
        <LockContainer>
          <LockIcon />
          <LockText>End-to-end encrypted</LockText>
        </LockContainer>
      </Container>
      <GreenBottom></GreenBottom>
    </Component>
  );
};

export default EmptyChat;
