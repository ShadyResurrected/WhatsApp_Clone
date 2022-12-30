import express from "express";

import { addUser, getUsers } from "../Controller/userController.js";

const route = express.Router();

// Adding a user
route.post("/add", addUser);
route.get("/users", getUsers);

export default route;
