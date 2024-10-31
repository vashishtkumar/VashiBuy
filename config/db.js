import mongoose from 'mongoose';
import colors from "colors";

const connectDB=async()=>{
    try{
        const conn=await mongoose.connect(process.env.Mongo_URL);
        console.log(`connected to Mongodb Database ${conn.connection.host}`.bgMagenta.white)
    }
    catch(error){
        console.log(`An error has been occured ${error}`.bgRed.white);
    }
}

export default connectDB;