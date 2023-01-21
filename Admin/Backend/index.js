const express = require("express");
const app = express();
const {connection} = require("./config/db");
const { authenticate } = require("./middlewares/authenticator");
const {adminRouter} = require("./routes/Admin.route")
const {productRouter} = require("./routes/Products.route")






require('dotenv').config();
app.use(express.json())


app.get("/",(req,res)=>{
    res.send("<h1>Welcome to homepage</h1>")
    
})


app.use('/admin',adminRouter);
app.use(authenticate)
app.use('/admin/products',productRouter);

// app.use(validator())
app.listen(process.env.port,async ()=>{
    try {
        await connection
        console.log("connected to db")
        
        
    } catch (error) {
        console.log(error)
        console.log({"message":"Something went wrong"})
        
    }


     
    
    


    
    
    

    console.log(`server is running on ${process.env.port}`)
    
    
})


