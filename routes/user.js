const express = require("express");
const router = express.Router();

const { requiredSignin, isAuth, isAdmin } = require("../controllers/auth")
const { userById } = require("../controllers/user");
 
router.params('userId', userById);

module.exports = router; 