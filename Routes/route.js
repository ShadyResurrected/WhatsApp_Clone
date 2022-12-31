import express from "express";
import { newConversation } from "../Controller/conversationController.js";
import { addUser, getUsers } from "../Controller/userController.js";

const route = express.Router();

// Adding a user
route.post("/add", addUser);
route.get("/users", getUsers);
route.post("/conversation/add", newConversation);

export default route;
