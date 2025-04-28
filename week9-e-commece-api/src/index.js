import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import { productsRouter } from "./api/routes/products/index.js";
import { categoriesRouter } from "./api/routes/categories/index.js";
import path from "path";
import { fileURLToPath } from "url";
import { authRouter } from "./api/routes/auth/index.js";
import { authenticateToken } from "./core/middleware/authenticateToken.middleware.js";
import { cartRouter } from "./api/routes/cart/index.js";
import { ordersRouter } from "./api/routes/orders/index.js";

const ___filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(___filename);

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

//! serving static files
app.use("/public", express.static(path.join(__dirname, "../public")));

app.use("/auth", authRouter);
app.use(authenticateToken);
app.use("/orders", ordersRouter);
app.use("/products", productsRouter);
app.use("/categories", categoriesRouter);
app.use("/cart", cartRouter);

//!routes & models

//! users
//! products
//! categories
//! orders
//! cart
