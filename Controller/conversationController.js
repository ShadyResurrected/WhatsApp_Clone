import conversation from "../Model/Conversation.js";

export const newConversation = async (request,response) => {
    try {
        const senderId = request.body.senderId;
        const receiverId = request.body.receiverId;

        const exist = await conversation.findOne({members : {$all : [receiverId,senderId]}})

        if(exist){
            return response.status(200).json('conversation already exists')
        }

        const newConversation = new conversation({
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
        let Conversation = await conversation.findOne({members: {$all : [receiverId,senderId]}})
        return response.status(200).json(Conversation)
    } catch (error) {
        return response.status(500).json(error.message)
    }
}