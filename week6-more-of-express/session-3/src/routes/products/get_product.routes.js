

import { Router } from "express";
import { getProductController } from "../../controllers/products/products.controller.js";


const router = Router()



router.get("/products/:id" , getProductController)


export {router as getProductRouter}