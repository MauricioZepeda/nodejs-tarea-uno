const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const expressValidator = require("express-validator");
require("dotenv").config(); 
 
// rutas
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");

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
  
// middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
app.use(cors());

// routes middelwares
app.use("/api", authRoutes);
app.use("/api", userRoutes);

const port = process.env.PORT || 3000;
 
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
