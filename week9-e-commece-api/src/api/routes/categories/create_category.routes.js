import { Router } from "express";
import { BadRequestError } from "../../../core/errors/Errors.js";
import { Category } from "../../models/category/category.models.js";

const router = Router();

const CreateCategory = async (req ,res) => {
  try {
    const data = req.body;

    const newCategory = await Category(data);
    await newCategory.save();

    if (!newCategory) throw new BadRequestError("Category not created");

    res.status(201).json({
      message: "Category created successfully",
      data: newCategory,
    });
  } catch (error) {
    res.status(error.statusCode).json({
      message: error.message,
    });
  }
};

router.post("/", CreateCategory);

export { router as CreateCategoryRouter };
