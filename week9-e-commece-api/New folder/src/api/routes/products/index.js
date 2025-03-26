import { Router } from "express";
import { createProductRouter } from "./create_product.routes.js";
import { deleteProductRouter } from "./delete_product.routes.js";


const router = Router()

router.use(createProductRouter)
router.use(deleteProductRouter)

export { router as productsRouter }
