const { error } = require("console")
const mongoose = require("mongoose")
const dotenv = require("dotenv")

dotenv.config()

const DBCONNECTION = async ()=>{
    try{
        if(!process.env.LOCAL_URL) throw new Error("URL not found")

        await mongoose.connect(process.env.LOCAL_URL)

        if(mongoose.connect.host === "localhost"){
            console.log("Connected to Production Database");
        }else{
            console.log("Connected to local Database");
        }
    }catch(error){
        console.log("An error occured while trying to connect to the Database: ", error);
    }
}

module.exports = DBCONNECTION