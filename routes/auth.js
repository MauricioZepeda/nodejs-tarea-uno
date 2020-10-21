const express = require('express');
const router = express.router();

const { userSignupValidator, userLoginValidator } = require('../validator');

routes.post('/auth/sign-up', userSignupValidator);
routes.post('/auth/log-in', userLoginValidator);

module.exports = router;