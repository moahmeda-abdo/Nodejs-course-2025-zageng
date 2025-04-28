import { Router } from "express"
import { Order } from "../../models/orders/order.model.js"




const router = Router()

const GetAllOrders = async (req, res) => {
    try {
        const orders = await Order.find({ is_deleted: false })

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



router.get("/all", GetAllOrders)


export { router as GetAllOrdersRouter }