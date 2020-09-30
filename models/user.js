const mongoose = require('mongoose');  

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
        password: {
            type: String,
            required: true,
            trim: true 
        },
        birthdate: {
            type: Date,
            default: Date.now
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
            default: ''
        },
        banner: {
            type:String,
            trim: true,
            default: '' 
        },
        biography: {
            type: String,
            trim: true,
            default: '' 
        },
        location: {
            type: String,
            trim: true,
            default: '' 
        },
        website: {
            type: String,
            trim: true,
            default: '' 
        }
    },
    { 
        timestamps: true 
    }
);

module.exports = mongoose.model('User', UserSchema);