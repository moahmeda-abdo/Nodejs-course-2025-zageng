import { Router } from "express";
import { BadRequestError } from "../../../core/errors/Errors.js";
import { Product } from "../../models/products/product.model.js";

const router = Router();

const CreateProduct = async (req ,res) => {
  try {
    const data = req.body;

    const newProduct = await Product(data);
    await newProduct.save();

    if (!newProduct) throw new BadRequestError("Product not created");

    res.status(201).json({
      message: "Product created successfully",
      data: newProduct,
    });
  } catch (error) {
    res.status(error.statusCode).json({
      message: error.message,
    });
  }
};

router.post("/", CreateProduct);

export { router as createProductRouter };
