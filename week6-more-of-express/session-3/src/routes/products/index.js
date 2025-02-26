import { Router } from "express"
import { getProductRouter } from "./get_product.routes.js"
import { getProductsRouter } from "./get_products.routes.js"


const router = Router()


router.use(getProductRouter)
router.use(getProductsRouter)


export { router as ProductsRouters }


