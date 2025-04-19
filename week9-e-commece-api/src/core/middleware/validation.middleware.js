
export const validateBody = (schema) => (req, res, next) => {
    const result = schema.validate(req.body , { abortEarly: false });
    if (result.error) {
       return res.status(400).json({
           message : result.error.details.map((detail) => detail.message)
       })
    }
    next()
};
