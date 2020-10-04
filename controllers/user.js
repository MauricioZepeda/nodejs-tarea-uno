const User = require('../models/user');
const { errorHandler } = require("../helpers/dbErrorHandler");

exports.getUserById = (req, res, next, id) => {
   
   console.log('id: '+id);
    next();
    // User.findById(id).exec((err, user)=>{
    //     if(err || !user){
    //         return res.status(400).json({
    //             error: "User not found"
    //         });
    //     }
    //     req.profile = user;
    //     next();
    // });
};

exports.getUsers = (req, res, next) => {
   User.find().exec((err,users)=>{
        if(err){
            return res.status(400).json({
                error: errorHandler(err)
            })
        }
        req.users = users;
        next();
   }); 
 };