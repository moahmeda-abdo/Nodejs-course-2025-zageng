import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    items: [
      {
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
        quantity: { type: Number, required: true, min: 1 },
        price: { type: Number, required: true, min: 0 },
      },
    ],
    total: { type: Number, required: true, min: 0 },
    status: {
      type: String,
      enum: ['pending', 'shipped', 'delivered', 'canceled'],
      default: 'pending',
    },
    address: { type: String, required: true },
    payment_status: { type: String, enum: ['pending', 'paid', 'failed'], default: 'pending' },
    is_deleted: { type: Boolean, default: false },
});

export const Order = mongoose.model("order", orderSchema);
