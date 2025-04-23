import { Router } from "express";
import { Cart } from "../../models/cart/cart.model.js";
import { NotFoundError } from "../../../core/errors/Errors.js";

const router = Router();

const getCart = async (req, res) => {
  const user = req.user;

  try {
    const cart = await Cart.findOne({ user: user._id });
    // case 1 : cart not found
    // if(!cart) throw new NotFoundError("Cart not found")

    //case 2 : create cart
    if (!cart) {
      const newCart = new Cart({
        user: user._id,
        items: [],
        total_price: 0,
      });
      return res.status(201).json({
        message: "Cart found successfully",
        data: await newCart.save(),
      });
    }
    res.status(200).json({
      message: "Cart found successfully",
      data: cart,
    });
  } catch (error) {}
};


router.get("/", getCart);

export { router as getCartRouter };