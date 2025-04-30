
//! Testing Route not in use ‼️‼️‼️‼️
import { Router } from "express";
import { Cart } from "../../models/cart/cart.model.js";
import { BadRequestError, NotFoundError } from "../../../core/errors/Errors.js";
import { Order } from "../../models/orders/order.model.js";
import { Product } from "../../models/products/product.model.js";

const router = Router()

const CreateOrder = async (req, res) => {
    try {
       const pord = "1"
       const order = "2"
       const user = "3"
       const cart = "4"
       const category = "5"

    //    const product = await Product.findById(pord)  //1
    //    const Order = await Order.findById(pord) // 1 
    //    const Order = await Order.findById(pord)//1
    //    const Order = await Order.findById(pord)//1
    //    const Order = await Order.findById(pord)//1


    const [product , Order] = await Promise.all([
        await Product.findById(pord),
        await Order.findById(pord)
    ])

    //    5s
    // !  1s

    } catch (error) {
        res.status(error.statusCode || 500).json({
            message: error.message || "server error"
        })
    }

}



router.post("/", CreateOrder)

export { router as CreateOrderRouter }