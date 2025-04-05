import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import morgan from "morgan";
import { authRouter } from "./api/routes/auth/auth.routes.js";
// import { authenticateToken } from "./middleware/authenticateToken.middlware.js";
import helmet from "helmet";
import cors from "cors";
import { productsRouter } from "./api/routes/products/index.js";
import { categoriesRouter } from "./api/routes/categories/index.js";
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

const corsOptions = {
  origin: "http://localhost:3300",
  optionsSuccessStatus: 200,
};

//middlewares
app.use(cors(corsOptions)); //self-study
app.use(helmet()); //self-study
app.use(express.json());
app.use(morgan("dev"));
//routes

app.use("/auth", authRouter);

// app.use(authenticateToken);
app.use("/products", productsRouter);
app.use("/categories", categoriesRouter);

//!routes & models

//! users
//! products
//! categories
//! orders
//! cart

//! payments
