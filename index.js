import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";

const port = process.env.PORT || 4000;
const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.CONURL);
    console.log("Connected with Database");
  } catch (error) {
    throw error;
  }
};
mongoose.connection.on("disconnected", () => {
  console.log("Mongodb Disconnected");
});

//middlewares

app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.listen(port, () => {
  connect();
  console.log(`Example app listening on port ${port}`);
});
