import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  price: { type: Number },
  name: { type: String },
  description: { type: String },
  category: { type: mongoose.Schema.Types.ObjectId, ref: "category" },
  image: { type: String },
  rating: { type: Number },
  brand: { type: String },
  is_deleted: { type: Boolean, default: false }, //true
});

export const Product = mongoose.model("product", productSchema);
