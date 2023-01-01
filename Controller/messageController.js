import message from "../Model/Message.js";
import conversation from "../Model/Conversation.js";

export const newMessage = async (request, response) => {
  try {
    const newMessage = new message(request.body);

    await newMessage.save();
    // latest message is saved in the conversation model
    await conversation.findByIdAndUpdate(request.body.conversationId, {
        message : request.body.text
    })

    return response.status(200).json("Message has been sent successfully");
  } catch (error) {
    return response.status(500).json(error.message);
  }
};

export const getMessages = async(request,response) => {
  try {
    const messages = await message.find({conversationId : request.params.id})
    return response.status(200).json(messages)
  } catch (error) {
    return response.status(500).json(error.message)
  }
}
