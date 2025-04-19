import { Router } from "express";
import { BadRequestError } from "../../../core/errors/Errors.js";
import { Product } from "../../models/products/product.model.js";
import { upload } from "../../../config/multer/multerConfig.js";
import { validateBody } from "../../../core/middleware/validation.middleware.js";
import { createProductSchema } from "./validation/create_product.validation.js";

const router = Router();

const CreateProduct = async (req, res) => {
  try {
    const data = req.body;
    //! bad way for validation
    // if(!price) throw new BadRequestError("price is required");
    // if(price <= 0) throw new BadRequestError("price must be greater than 0");
    // if(typeof price !== 'number') throw new BadRequestError("price must be a number");

    // if(!name) throw new BadRequestError("name is required");
    // if(name.length <= 120) throw new BadRequestError("name must be less than 120 characters");
    // if(typeof price !== 'string') throw new BadRequestError("price must be a number");

    const newProduct = await Product({
      ...data,
      image: req.file.path.replace(/\\/g, "/"),
    });
    await newProduct.save();

    if (!newProduct) throw new BadRequestError("Product not created");

    res.status(201).json({
      message: "Product created successfully",
      data: newProduct,
    });
  } catch (error) {
    console.log(error);
    res.status(error.statusCode).json({
      message: error.message,
    });
  }
};

router.post(
  "/",
  upload.single("image"),
  validateBody(createProductSchema),
  CreateProduct
);

export { router as createProductRouter };
