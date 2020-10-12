const mongoose = require("mongoose");
const crypto = require("crypto");
const uuidv1 = require("uuid/v1");

const UserSchema = new mongoose.Schema(
    {
        names: {
            type: String,
            required: true,
            trim: true 
        },
        surnames: {
            type: String,
            required: true,
            trim: true 
        },
        hashed_password: {
            type: String,
            required: true,
            trim: true 
        },
        birthdate: {
            type: Date,
            default: Date.now()
        },
        email: {
            type: String,
            required: true,
            trim: true,
            unique: true
        },
        avatar: {
            type: String,
            trim: true,
            default: ""
        },
        banner: {
            type:String,
            trim: true,
            default: "" 
        },
        biography: {
            type: String,
            trim: true,
            default: "" 
        },
        location: {
            type: String,
            trim: true,
            default: "" 
        },
        website: {
            type: String,
            trim: true,
            default: "" 
        },
        role: {
            type: Number,
            default: 0
        }
    },
    { 
        timestamps: true 
    } 
);

UserSchema
    .virtual("password")
    .set(function(password){
        this._password = password;
        this.salt = uuidv1();
        this.hashed_password = this.encryptPassword(password);
    })
    .get(function(){
        return this._password;
    });

UserSchema.methods = {
    authenticate: function(plainText){
        return this.encryptPassword(plainText) === this.hashed_password;
    },

    encryptPassword: function(password){
        if(!password) return "";
        try{
            return crypto
                    .createHmac("sha1", this.salt)
                    .update(password)
                    .digest("hex");
        }catch(err){
            return "";
        }
    }
}

module.exports = mongoose.model("User", UserSchema);