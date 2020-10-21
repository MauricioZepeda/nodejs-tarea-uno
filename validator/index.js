exports.userSignupValidator = (req, res, next) => {
    req.check("names", "Names are required").notEmpty(); 
    req.check("surenames", "Surenames are required").notEmpty();
    req.check("email", "Email is required").notEmpty();
    req.check("email", "Email must be valid")
        .matches(/.+\@.+\..+/)
        .withMessage("Email must contain @"); 

    const errors = req.validationErrors();
    if (errors) {
        const firstError = errors.map(error => error.msg)[0];
        return res.status(400).json({ error: firstError });
    }
    next();
};

exports.userLoginValidator = (req, res, next) => { 
    req.check("email", "Email is required").notEmpty();
    req.check("email", "Email must be valid")
        .matches(/.+\@.+\..+/)
        .withMessage("Email must contain @");
    req.check("password", "Password is required").notEmpty(); 

    const errors = req.validationErrors();
    if (errors) {
        const firstError = errors.map(error => error.msg)[0];
        return res.status(400).json({ error: firstError });
    }
    next();
};

exports.tweetValidator = (req, res, next) => { 
    req.check("message", "Message is required").notEmpty(); 

    const errors = req.validationErrors();
    if (errors) {
        const firstError = errors.map(error => error.msg)[0];
        return res.status(400).json({ error: firstError });
    }
    next();
};