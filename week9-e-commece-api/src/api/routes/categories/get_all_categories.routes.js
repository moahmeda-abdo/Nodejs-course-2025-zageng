import { Router } from "express";
import { Category } from "../../models/category/category.models.js";

const router = Router();

const GetCategories = async (req ,res) => {
 
  try {
    
    const Categories = await Category.find({ is_deleted : false}); // [] // [{}, {}]

    res.status(200).json({
      message: "Category found successfully",
      data: Categories,
    })
    
  } catch (error) {
    res.status(error.statusCode).json({
      message: error.message,
    });
  }
};

router.get("/", GetCategories);

export { router as GetCategoriesRouter };
