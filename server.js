// Imports
const express =require("express")
const DBCONNECTION = require("./config/db")
const ProductRoute = require("./route/productRoute")
require("dotenv").config()

const app = express()
const PORT = process.env.PORT


// Middlewares
app.use(express.json())
DBCONNECTION()

app.get('/',(req,res)=>{
    res.json({message:"default route"})
})

app.use("/api/product", ProductRoute)

app.listen(PORT, ()=>{
    console.log(`Server is running at PORT ${PORT}`);
})