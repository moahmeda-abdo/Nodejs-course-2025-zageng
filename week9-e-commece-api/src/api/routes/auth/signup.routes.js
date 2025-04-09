import { Router } from "express";
import { generateToken } from "../../../core/services/jwt.service.js";
import { User } from "../../models/user/user.model.js";
import { BadRequestError } from "../../../core/errors/Errors.js";
import { hashPassword } from "../../../core/services/password.service.js";

const router = Router();

router.post("/signup", async (req, res) => {
  try {
    const data = req.body;
    const email = data.email;
    const user = await User.findOne({ email: email });

    if (user) {
      throw new BadRequestError("user already exists");
    }

    const hashedPassword = await hashPassword(data.password);

    const newUser = await User({ ...data, password: hashedPassword });
    const token = generateToken(
      newUser.name,
      newUser.email,
      newUser.phone,
      newUser._id
    );

    await newUser.save();

    res.status(200).json({
      data: newUser,
      token,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message || "server error",
    });
  }
});

export { router as signupRouter };
