import express from "express";

import { addUser } from "../Controller/userController.js";

const route = express.Router();

// Adding a user
route.post("/add", addUser);

export default route;
