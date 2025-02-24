import { Router } from "express";
import { getAllProducts } from "../../controllers/products/products.controller.js";


const router = Router()



router.get("/products" , getAllProducts)


export {router as getProductsRouter}