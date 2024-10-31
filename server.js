import express from "express"
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";


// config env
dotenv.config();  // if you have to include path then dotenv.config({path:"/pathname"});
// database config
connectDB();

// Rest Object
const app=express();

//middle wares
app.use(morgan('dev'));
app.use(express.json());

//rest api
app.get('/',(req,res)=>{
    res.send("<h1>ecommerce app</h1>");
})

//PORT
const PORT= process.env.PORT;

//run listen 
app.listen(PORT,(err)=>{
    if(err){
        console.log("unable to start server");
    }
    else
    console.log(`server started on ${process.env.Dev_Mode} at Port ${PORT}.`.bgCyan.white)
})