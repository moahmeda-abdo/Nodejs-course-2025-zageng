import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import { todoRouter } from "./routes/todo/todo.routes.js";
import morgan from "morgan";
import { authRouter } from "./routes/auth/auth.routes.js";

const app = express();

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

const connectToDb = async () => {
  try {
    const Uri = process.env.MONGO_URI;
    await mongoose.connect(Uri);
    console.log("Database connected");
  } catch (error) {
    console.log(error);
  }
};

connectToDb();

//middlewares

app.use(express.json());
app.use(morgan("dev"));
//routes

app.use("/todo", todoRouter);
app.use("/auth" , authRouter)