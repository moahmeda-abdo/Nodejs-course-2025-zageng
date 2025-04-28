import { Router } from "express";
import { Cart } from "../../models/cart/cart.model.js";
import { BadRequestError, NotFoundError } from "../../../core/errors/Errors.js";
import { Order } from "../../models/orders/order.model.js";
import { Product } from "../../models/products/product.model.js";

const router = Router()

const CreateOrder = async (req, res) => {
    try {
        const { address } = req.body
        const userCart = await Cart.findOne({ user: req.user._id });

        if (!userCart) throw new NotFoundError("Cart not found");

        if (userCart.items.length === 0) throw new BadRequestError("Cart is empty");


        userCart.items.map(async (item) => {
            const prod = await Product.findById({ _id: item.product, is_deleted: false });
            if (!prod) throw new NotFoundError("Product not found");
            if (prod.stock < item.quantity) throw new BadRequestError("Product out of stock")
            prod.stock -= item.quantity;
            await prod.save();
        })

        const newOrder = new Order({
            user: req.user._id,
            items: userCart.items,
            total: userCart.total_price,
            address,
        })
        userCart.items = [];
        userCart.total_price = 0;

        await newOrder.save();

        res.status(201).json({
            message: "Order created successfully",
            data: newOrder
        })
    } catch (error) {
        res.status(error.statusCode || 500).json({
            message: error.message || "server error"
        })
    }

}



router.post("/", CreateOrder)

export { router as CreateOrderRouter }