exports.userSignupValidator = (req, res, next) => {
    req.check("names", "Names are required")
        .notEmpty();
    req.check("surnames", "Surnames are required")
        .notEmpty(); 
    req.check("email", "Email is required")
        .notEmpty();
    req.check("email")
        .matches(/.+\@.+\..+/)
        .withMessage("Email must contain @")
        .isLength({
            min: 4 
        });
    req.check("password", "Password is required")
        .notEmpty();
    req.check("password",)
        .isLength({ min: 6 })
        .withMessage("Password must contain at least 6 characters")
        .matches(/\d/)
        .withMessage("Password must contain a number");
    
    const errors = req.validationErrors();
    if(errors){
        const firstError = errors.map(error => error.msg)[0];
        return req.status(400).json({
            error: firstError
        });
    }
    next();
}