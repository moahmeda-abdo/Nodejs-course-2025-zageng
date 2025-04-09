import { UnAuthorizedError } from "../errors/Errors.js";

export const authorize = (roles) => {
  return async (req, res, next) => {
    try {
        const userRole = req.user.role;
        if (!roles.includes(userRole)) {
          throw new UnAuthorizedError("unAuthorized : Access denied");
        }
        next()
    } catch (error) {
        res.status(error.statusCode).json({
          message: error.message,
        })
    }
  };
};
