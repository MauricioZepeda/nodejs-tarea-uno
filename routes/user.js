const express = require('express');
const router = express.router(); 
  
router.get("/user/list");
router.get("/user/profile");
router.put("/user/:userId");

// params
router.param("userId"); 

module.exports = router;