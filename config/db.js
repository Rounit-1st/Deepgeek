import mongoose from "mongoose";
// import MONGOURI from 

let cached = global.mongoose || {conn: null, promise:null}

export default async function connectDB(){
    if(cached.conn) return cached.conn;
    if(!cached.promise){
        cached.promise = mongoose.connect(process.env.MONGOURI).then((mongoose)=>mongoose)
    }
    try{
        cached.conn = await cached.promise;
    }catch(error){
        console.error("Error in DB.js",error);
    }
    return cached.conn
}