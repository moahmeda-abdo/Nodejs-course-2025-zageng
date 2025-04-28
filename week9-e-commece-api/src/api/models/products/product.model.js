import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  price: { type: Number }, // number - positive value - required
  name: { type: String }, //string - max length 100
  description: { type: String }, 
  category: { type: mongoose.Schema.Types.ObjectId, ref: "category" }, // category id
  image: { type: String },
  rating: { type: Number },
  brand: { type: String }, // samsung
  stock: { type: Number },
  is_deleted: { type: Boolean, default: false }, //true
},{
  timestamps: true
});

export const Product = mongoose.model("product", productSchema);
