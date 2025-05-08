const express= require("express");
const path = require("path");
const app= express();

const mongoose=require("mongoose");
const cookieParser=require("cookie-parser");


mongoose
.connect(process.env.MONGO_URL)
.then((e)=>{
    console.log("MongoDB connected");
    
})


app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());



const PORT= process.env.PORT|| 8000;



app.listen(PORT,()=>{
    console.log("Server Started");
    
});