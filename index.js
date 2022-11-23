import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
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

app.use("/server/auth", authRoute);
app.use("/server/users", usersRoute);
app.use("/server/hotels", hotelsRoute);
app.use("/server/rooms", roomsRoute);

app.listen(port, () => {
  connect();
  console.log(`Example app listening on port ${port}`);
});
