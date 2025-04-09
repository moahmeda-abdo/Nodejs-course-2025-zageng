import { Router } from "express";
import { BadRequestError, NotFoundError } from "../../../core/errors/Errors.js";
import { Product } from "../../models/products/product.model.js";

const router = Router();

const GetProducts = async (req ,res) => {
 
  try {
    
    const products = await Product.find({ is_deleted : false}); // [] // [{}, {}]

    res.status(200).json({
      message: "Product found successfully",
      data: products,
    })
    
  } catch (error) {
    res.status(error.statusCode).json({
      message: error.message,
    });
  }
};

router.get("/", GetProducts);

export { router as GetProductsRouter };
