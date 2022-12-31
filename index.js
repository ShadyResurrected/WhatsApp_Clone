import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import Connection from "./database/db.js";
import route from "./Routes/route.js";

const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true })); // to accept the body
app.use(bodyParser.urlencoded({extended : true}))

app.use("/", route);

Connection();

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});