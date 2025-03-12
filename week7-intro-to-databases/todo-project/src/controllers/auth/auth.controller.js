import { BadRequestError } from "../../errors/Errors.js";
import { User } from "../../models/user/user.model.js";
import { generateToken } from "../../services/jwt.service.js";
import hashPassword from "../../services/password.service.js";

export const SignUpController = async (req, res) => {
  try {
    const data = req.body;
    const email = data.email;
    const user = await User.findOne({ email: email });
    
    if (user) {
        throw new BadRequestError("user already exists");
    }
    
    const hashedPassword = await  hashPassword(data.password);
    
    const newUser = await User({ ...data, password: hashedPassword });
    const token = generateToken(newUser.name, newUser.email, newUser.phone);
    
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
};
