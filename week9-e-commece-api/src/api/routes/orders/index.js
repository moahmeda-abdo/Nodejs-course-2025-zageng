import { Router } from "express";
import { CreateOrderRouter } from "./create_order.route.js";
import { getMyOrdersRouter } from "./get_my_orders.routes.js";
import { GetAllOrdersRouter } from "./get_orders.routes.js";

const router = Router();




router.use(CreateOrderRouter)
router.use(getMyOrdersRouter)
router.use(GetAllOrdersRouter)


export { router as ordersRouter }