import mongoose from "mongoose";

export const dbConnection = ()=>{
    mongoose.connect(process.env.MONOGO_URI,{
        dbName: "RESTAURANT"
    }).then(()=>{
        console.log("CONNECTED TO DATABASE SUCCCESFULLY");   
    })
    .catch((err) => {
        console.log(`Some error occured while connecting to db ${err}`);
        
    })
}

