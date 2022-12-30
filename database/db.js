import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

const Connection = async () => {
  mongoose.set("strictQuery", false);
  const URL = process.env.MONGODB_URL;
  try {
    await mongoose.connect(URL, { useUnifiedTopology: true });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connection with the database", error.message);
  }
};

export default Connection;
