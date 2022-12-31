import express from "express";
import { newConversation,getConversation } from "../Controller/conversationController.js";
import { newMessage } from "../Controller/messageController.js";
import { addUser, getUsers } from "../Controller/userController.js";


const route = express.Router();

// Adding a user
route.post("/add", addUser);
route.get("/users", getUsers);
route.post("/conversation/add", newConversation);
route.post("/conversation/get", getConversation);
route.post('/message/add', newMessage)

export default route;
