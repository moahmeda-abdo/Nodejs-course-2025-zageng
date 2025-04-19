import { Router } from "express";
import { BadRequestError, NotFoundError } from "../../../core/errors/Errors.js";
import { Product } from "../../models/products/product.model.js";

const router = Router();

const GetProducts = async (req, res) => {
  req.body;
  req.params;
  req.query;
  try {
    const query = buildQuery(req)

    const products = await Product.find(query); // [] // [{}, {}]

    res.status(200).json({
      message: "Product found successfully",
      data: products,
    });
  } catch (error) {
    res.status(error.statusCode).json({
      message: error.message,
    });
  }
};

router.get("/", GetProducts);

export { router as GetProductsRouter };

function buildQuery(req) {
  const { category, name, startDate, endDate, brand, minPrice, maxPrice } =
    req.query;

  const query = {
    ...(category && { category :category }),
    ...(name && { name: { $regex: name, $options: "i" } }),
    ...(startDate && { createdAt: { $gte: startDate } }),
    ...(endDate && { createdAt: { $lte: endDate } }),
    ...(brand && { brand }),
    ...(minPrice && { price: { $gte: minPrice } }),
    ...(maxPrice && { price: { $lte: maxPrice } }),
    is_deleted: false,
  };
  return query;
}
