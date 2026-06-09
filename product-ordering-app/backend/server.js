const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const OrderRoutes=require("./routes/orderRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

//mongoDB connection
mongoose
    .connect("mongodb://127.0.0.1:27017/productdb")
    .then(()=>console.log("MongoDB Connected"))
    .catch((error)=> console.log(error));


// router registration
app.use("/", OrderRoutes);

// serer startup
app.listen(5000, ()=> {
    console.log("server running on port 5000");
});