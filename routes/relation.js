const express = require('express');
const router = express.router(); 
  
routes.get('/relation');
routes.post('/relation/create/:userRelationId'); 
routes.delete('/relation/:userRelationId'); 
 
routes.param('userRelationId');

module.exports = router;