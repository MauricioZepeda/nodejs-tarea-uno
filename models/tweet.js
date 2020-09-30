const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const TweetSchema = new mongoose.Schema(
    {
        userId: { type: ObjectId, ref: "User" },
        message:{
            type: String,
            required: true,
            trim: true
        } 
    },
    { 
        timestamps: true 
    }
);

module.exports = mongoose.model("Tweet", TweetSchema);
