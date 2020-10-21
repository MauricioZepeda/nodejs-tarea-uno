const express = require('express');
const router = express.router();

const { tweetValidator } = require('../validator');
  
routes.get('/tweets');
routes.get('/tweets/followers');
routes.post('/tweet/create', tweetValidator);
routes.delete('/tweet/:tweetId'); 
 
routes.param('tweetId');

module.exports = router;