import Conversation from "../Model/Conversation.js";

export const newConversation = async (request,response) => {
    try {
        const senderId = request.body.senderId;
        const receiverId = request.body.receiverId;

        const exist = await Conversation.findOne({members : {$all : [receiverId,senderId]}})

        if(exist){
            return response.status(200).json('conversation already exists')
        }

        const newConversation = new Conversation({
            members : [senderId,receiverId]
        })

        await newConversation.save() // saves it in the mongoDB
        return response.status(200).json('conversation saved successfully')
    } catch (error) {
        return response.status(500).json(error.message)
    }
}

export const getConversation = async(request,response) => {
    try {
        const senderId = request.body.senderId;
        const receiverId = request.body.receiverId;
        let ConversationSt = await Conversation.findOne({members: {$all : [receiverId,senderId]}})
        return response.status(200).json(ConversationSt)
    } catch (error) {
        return response.status(500).json(error.message)
    }
}