import { Router } from "express";
import { BadRequestError, NotFoundError } from "../../../core/errors/Errors.js";
import { Category } from "../../models/category/category.models.js";

const router = Router();

const GetCategory = async (req ,res) => {
  const { id } = req.params;
  try {
    
    const category = await Category.findOne({_id : id , is_deleted : false});

    if (!category) {
      throw new NotFoundError("Category not found");
    }

    res.status(200).json({
      message: "Category found successfully",
      data: category,
    })
    
  } catch (error) {
    res.status(error.statusCode).json({
      message: error.message,
    });
  }
};

router.get("/:id", GetCategory);

export { router as GetCategoryRouter };
