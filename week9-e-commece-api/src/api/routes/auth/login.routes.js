import { Router } from "express";
import { generateToken } from "../../../core/services/jwt.service.js";
import { ComparePassword } from "../../../core/services/password.service.js";
import { User } from "../../models/user/user.model.js";
import { BadRequestError } from "../../../core/errors/Errors.js";

const router = Router();

router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email });

    if (!user) {
      throw new BadRequestError("invalid password or email");
    }

    const isMatched = await ComparePassword(password, user.password);

    if (!isMatched) {
      throw new BadRequestError("invalid password or email");
    }

    const token = generateToken(user.name, user.email, user.phone, user._id);

    res.status(200).json({
      data: user,
      token,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message || "server error",
    });
  }
});

export { router as LoginRouter };
