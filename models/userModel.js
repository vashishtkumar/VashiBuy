import mongoose from "mongoose";

const userSchema=new mongoose({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    phone:{
        type:number,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    role:{
        type:number,
        default:0
    }
},
{
    timestamps:true,
})


export default mongoose.model("users",userSchema);