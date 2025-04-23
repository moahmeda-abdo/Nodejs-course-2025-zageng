import mongoose from "mongoose";

const cartSchema = new mongoose.Schema(
  {
    items: [
      {
        product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
        quantity: { type: Number, required: true },
        price: { type: Number, required: true },
      },
    ],
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    total_price: { type: Number },
    is_deleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

export const Cart = mongoose.model("cart", cartSchema);

// a 20
// b 20 //!40
//create order 
//! 0 