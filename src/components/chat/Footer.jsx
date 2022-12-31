import React from "react";

import { Box, InputBase, styled } from "@mui/material";

import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";

const Container = styled(Box)`
  height: 55px;
  background: #ededed;
  display: flex;
  width: 100%;
  align-items: center;
  padding: 0 15px;
  & > * {
    margin: 7px;
    color: #919191;
  }
`;

const Search = styled(Box)`
background-color: #fff;
border-radius: 18px;
width: calc(94% - 100px);
`

const InputField = styled(InputBase)`
width: 100%;
padding: 20px;
height: 20px;
padding-left: 25px;
font-size: 14px;
`

const ClipIcon = styled(AttachFileOutlinedIcon)`
transform: rotate(40deg);
`

const Footer = () => {
  return (
    <Container>
      <EmojiEmotionsOutlinedIcon />
      <ClipIcon />
      <Search>
        <InputField placeholder="Type a message" />
      </Search>
      <KeyboardVoiceIcon />
    </Container>
  );
};

export default Footer;
