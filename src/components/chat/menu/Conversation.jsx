import { React, useContext, useEffect, useState } from "react";

import { Box, Typography, styled } from "@mui/material";

import { AccountContext } from "../../../context/AccountProvider";
import { setConversation, getConversation } from "../../../service/api";

import {formatDate} from '../../../utils/commonUtils'

const Component = styled(Box)`
  display: flex;
  height: 45px;
  padding: 13px 0;
  cursor: pointer;
`;

const Image = styled("img")({
  width: 50,
  height: 50,
  borderRadius: "50%",
  padding: "0 14px",
  objectFit: "cover",
});

const Container = styled(Box)`
display: flex;
`

const TimeStamp = styled(Typography)`
font-size: 12px;
margin-left: auto;
color: #00000099;
margin-right: 20px;
`

const Text = styled(Typography)`
font-size: 14px;
color: rgba(0,0,0,0.6);
margin-right: 20px;
`

const Conversation = ({ user }) => {
  const { setPerson, account,newMessageFlag,setNewMessageFlag } = useContext(AccountContext);
  const [message, setMessage] = useState({})

  useEffect(() => {
    const getConversationDetails = async () => {
      const data = await getConversation({senderId : account.sub, receiverId : user.sub})
      setMessage({text : data?.message, timestamp : data?.updatedAt})
    }
    getConversationDetails()
  },[newMessageFlag])

  const getUser = async () => {
    setPerson(user);
    await setConversation({ senderId: account.sub, receiverId: user.sub });
  };

  return (
    <Component onClick={() => getUser()}>
      {/* LEFT PART */}
      <Box>
        <Image src={user.picture} alt="" />
      </Box>
      <Box style={{width : '100%'}}>
        <Container>
          <Typography>{user.name}</Typography>
          {
            message?.text && 
            <TimeStamp>{formatDate(message?.timestamp)}</TimeStamp>
          }
        </Container>
        <Box>
        <Text>{message?.text?.includes('https://whatsapp-server-cjm9.onrender.com') ? 'media' : message.text}</Text>
        </Box>
      </Box>
    </Component>
  );
};

export default Conversation;
