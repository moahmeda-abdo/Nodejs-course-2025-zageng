import { Router } from "express";
import { BadRequestError, NotFoundError } from "../../../core/errors/Errors.js";
import { Product } from "../../models/products/product.model.js";

const router = Router();

const GetProduct = async (req ,res) => {
  const { id } = req.params;
  try {
    
    const product = await Product.findOne({_id : id , is_deleted : false});

    if (!product) {
      throw new NotFoundError("Product not found");
    }

    res.status(200).json({
      message: "Product found successfully",
      data: product,
    })
    
  } catch (error) {
    res.status(error.statusCode).json({
      message: error.message,
    });
  }
};

router.get("/:id", GetProduct);

export { router as GetProductRouter };
