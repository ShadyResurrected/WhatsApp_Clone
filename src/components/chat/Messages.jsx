import { Box,styled } from '@mui/material'
import {React,useContext, useState} from 'react'

import { AccountContext } from "../../context/AccountProvider";
import { newMessage } from '../../service/api';

import Footer from './Footer'

const Wrapper = styled(Box)`
background-image: url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'});
background-size: 50%;
`

const Component = styled(Box)`
height: 80vh;
overflow-y: scroll;
`

const Messages = ({person,conversation}) => {

  const [value, setValue] = useState('')

  const {account} = useContext(AccountContext)

  const sendText = async(e) => {
    const code = e.keyCode || e.which; // this retrieves the code of pressed key
    // code 13 is of enter key
    if(code === 13){
      // making a model for message
      let message = {
        senderId : account.sub,
        receiverId : person.sub,
        conversationId : conversation._id, // id from mongoDB
        type : 'text',
        text : value
      }

      await newMessage(message)

      // Clearing the text area after saving the message in the database
      setValue('')
    }
  }

  return (
    <Wrapper>
        <Component></Component>
        <Footer sendText={sendText} setValue={setValue} value={value}/>
    </Wrapper>
  )
}

export default Messages