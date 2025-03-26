// import { UnAuthorizedError } from "../core/errors/Errors.js";
// import { User } from "../api/models/user/user.model.js";
// import { verifyToken } from "../services/jwt.service.js";

// export const authenticateToken = async (req, res, next) => {
//   try {
//     const token = req.headers["authorization"];

//     if (!token) {
//       throw new UnAuthorizedError("Token Not provided");
//     }

//     const decodedToken = verifyToken(token);

//     const user = await User.findById(decodedToken._id);

//     if (!user) {
//       throw new UnAuthorizedError("Invalid or expired Token");
//     }
//     req.user = decodedToken;
//     next()
//   } catch (error) {
//     res.status(error.statusCode).json({
//       message: error.message,
//     });
//   }
// };
