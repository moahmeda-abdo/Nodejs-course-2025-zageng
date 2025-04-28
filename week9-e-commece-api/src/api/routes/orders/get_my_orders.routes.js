import { Router } from "express"
import { Order } from "../../models/orders/order.model.js"




const router = Router()

const GetMyOrders = async (req, res) => {
    try {
        const orders = await Order.find({ user: req.user._id, is_deleted: false })

        res.status(200).json({
            message: "Orders found successfully",
            data: orders
        })
    } catch (error) {
        res.status(error.statusCode || 500).json({
            message: error.message || "Something went wrong"
        })
    }
}



router.get("/my-orders", GetMyOrders)


export { router as getMyOrdersRouter }