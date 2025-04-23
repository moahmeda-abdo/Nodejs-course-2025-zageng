import { Router } from "express";
import { Cart } from "../../models/cart/cart.model.js";
import { Product } from "../../models/products/product.model.js";
import { BadRequestError } from "../../../core/errors/Errors.js";

const router = Router();

const AddToCart = async (req, res) => {
  const { productId, quantity } = req.body;
  const user = req.user;
  const userId = user._id;
  try {
    const product = await Product.findOne({ _id: productId });
    if (!product) throw new BadRequestError("Product not found");

    const userCart = await Cart.findOne({ user: userId });

    if (!userCart) {
      const newCart = new Cart({
        user: userId,
        items: [
          {
            product: productId,
            quantity: quantity || 1,
            price: product.price,
          },
        ],
        total_price: product.price * (quantity || 1),
      });

      await newCart.save();
      return res
        .status(201)
        .json({ message: "Product added to cart successfully" , data : newCart});
    }

    const existingItem = userCart.items.find(
      (item) => item.product.toString() === productId
    );
    if (existingItem) {
      existingItem.quantity += quantity || 1;
      userCart.total_price += product.price * (quantity || 1);
    } else {
      userCart.items.push({
        product: productId,
        quantity: quantity || 1,
        price: product.price,
      });

      userCart.total_price += product.price * (quantity || 1);
    }

    await userCart.save();

    res.status(201).json({ message: "Product added to cart successfully" , data : userCart});
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .json({ message: error.message || "Server Error" });
  }
};

router.post("/add-to-cart", AddToCart);

export { router as addToCartRouter };

//global error handling
