import { Router } from "express";
import { BadRequestError, NotFoundError } from "../../../core/errors/Errors.js";
import { Category } from "../../models/category/category.models.js";

const router = Router();

const DeleteCategory = async (req ,res) => {
  const { id } = req.params;
  try {
    
    const category = await Category.findByIdAndUpdate(id ,{ is_deleted: true });

    if (!category) {
      throw new NotFoundError("category not found");
    }
    await category.save();
    res.status(204).json()
    

  } catch (error) {
    res.status(error.statusCode).json({
      message: error.message,
    });
  }
};

router.delete("/:id", DeleteCategory);

export { router as deleteCategoryRouter };
