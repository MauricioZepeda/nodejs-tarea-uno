const express = require("express");
const router = express.Router();

const { getUserById, getUsers } = require("../controllers/user");

router.get("/user", getUsers ,(req, res)=>{ 
    res.json(req.users);
});

router.get("/user/:idUser", getUserById)

router.param("idUser", getUserById);

module.exports = router; 