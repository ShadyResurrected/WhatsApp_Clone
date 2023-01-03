import { Box, styled } from "@mui/material";
import { React, useContext, useState, useEffect } from "react";

import { AccountContext } from "../../context/AccountProvider";
import { getMessages, newMessage } from "../../service/api";

import Footer from "./Footer";
import Message from "./Message";

const Wrapper = styled(Box)`
  background-image: url(${"https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png"});
  background-size: 50%;
`;

const Component = styled(Box)`
  height: 80vh;
  overflow-y: scroll;
`;

const Container = styled(Box)`
  padding: 1px 80px;
`;

const Messages = ({ person, conversation }) => {
  const [value, setValue] = useState("");
  const [messages, setMessages] = useState([]);
  const [newMessageFlag, setNewMessageFlag] = useState(false);
  const [file, setFile] = useState();
  const [image, setImage] = useState("")

  const { account } = useContext(AccountContext);

  useEffect(() => {
    const getMessageDetails = async () => {
      let data = await getMessages(conversation._id);
      setMessages(data);
    };
    conversation._id && getMessageDetails();
  }, [person._id, conversation._id, newMessageFlag]);

  const sendText = async (e) => {
    const code = e.keyCode || e.which; // this retrieves the code of pressed key
    // code 13 is of enter key
    if (code === 13) {
      // When the sent information is not a file
      let message = []
      if (!file) {
        // making a model for message
        message = {
          senderId: account.sub,
          receiverId: person.sub,
          conversationId: conversation._id, // id from mongoDB
          type: "text",
          text: value,
        };
      } else {
        message = {
          senderId: account.sub,
          receiverId: person.sub,
          conversationId: conversation._id, // id from mongoDB
          type: "file",
          text: image,
        };
      }

      await newMessage(message);

      // Clearing the text area after saving the message in the database
      setValue("");
      setFile("")
      setImage("")
      // toggling the state
      setNewMessageFlag((prev) => !prev);
    }
  };

  return (
    <Wrapper>
      <Component>
        {messages &&
          messages.map((message) => (
            <Container>
              <Message message={message} />
            </Container>
          ))}
      </Component>
      <Footer
        sendText={sendText}
        setValue={setValue}
        value={value}
        file={file}
        setFile={setFile}
        setImage={setImage}
      />
    </Wrapper>
  );
};

export default Messages;
