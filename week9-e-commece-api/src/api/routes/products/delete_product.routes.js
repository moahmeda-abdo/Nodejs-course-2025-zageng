import { Router } from "express";
import { BadRequestError, NotFoundError } from "../../../core/errors/Errors.js";
import { Product } from "../../models/products/product.model.js";

const router = Router();

const DeleteProduct = async (req ,res) => {
  const { id } = req.params;
  try {
    
    const product = await Product.findByIdAndUpdate(id ,{ is_deleted: true });

    if (!product) {
      throw new NotFoundError("Product not found");
    }
    await product.save();
    res.status(204).json()
    

  } catch (error) {
    res.status(error.statusCode).json({
      message: error.message,
    });
  }
};

router.delete("/:id", DeleteProduct);

export { router as deleteProductRouter };
