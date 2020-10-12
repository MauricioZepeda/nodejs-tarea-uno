const express = require('express');
const router = express.router();

const {
    signup,
    signin,
    signout
} = require("../controllers/auth");
const { userSignupValidator } = require("../validator");

router.post('/auth/signup', userSignupValidator, signup); 
router.post('/signin',signin);
router.get('/signout',signout);

module.exports = router;