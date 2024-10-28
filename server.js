import express from "express"
import colors from "colors";
import dotenv from "dotenv";


// config

dotenv.config();  // if you have to include path then dotenv.config({path:"/pathname"});

// Rest Object

const app=express();

//rest api

app.get('/',(req,res)=>{
    res.send("<h1>ecommerce app</h1>");
})

//PORT
const PORT= process.env.PORT || 3000;

//run listen

app.listen(PORT,(err)=>{
    if(err){
        console.log("unable to start server");
    }
    else
    console.log(`server started on ${process.env.Dev_Mode} at Port ${PORT}.`.bgCyan.white)
})