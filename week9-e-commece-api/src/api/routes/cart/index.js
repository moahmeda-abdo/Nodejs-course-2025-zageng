import { Router } from "express";
import { addToCartRouter } from "./add_to_cart.routes.js";
import { getCartRouter } from "./get_cart.routes.js";

const router = Router();

router.use(addToCartRouter);
router.use(getCartRouter);

export { router as cartRouter };
