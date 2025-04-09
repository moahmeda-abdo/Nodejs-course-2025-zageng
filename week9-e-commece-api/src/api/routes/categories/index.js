import { Router } from "express";
import { CreateCategoryRouter } from "./create_category.routes.js";
import { deleteCategoryRouter } from "./delete_category.routes.js";
import { GetCategoriesRouter } from "./get_all_categories.routes.js";
import { GetCategoryRouter } from "./get_category.routes.js";


const router = Router()

router.use(CreateCategoryRouter)
router.use(deleteCategoryRouter)
router.use(GetCategoriesRouter)
router.use(GetCategoryRouter)

export { router as categoriesRouter }
