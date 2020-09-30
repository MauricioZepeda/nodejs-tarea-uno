const express = require('express');
const mongoose = require("mongoose");
require("dotenv").config();
 
const app = express(); 

const db = async () => {
    try {
        const success = await mongoose.connect(process.env.DATABASE, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true, 
            useFindAndModify: false
        });
        console.log('DB Connected');
    } catch (error) {
        console.log('DB Connection Error', error);
    }
} 
db();
  
const port = process.env.PORT || 3000;
 
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
