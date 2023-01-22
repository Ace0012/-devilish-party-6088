const express = require("express")
const { connection } = require("./config/db")
const app= express()
const {adminRouter} = require("./routes/Admin.route")
const {productRouter} = require("./routes/Products.route")



require("dotenv").config();




app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Admin Home Page")

})
app.use("/admin",adminRouter)
app.use("/admin/products", productRouter)
// 

app.listen(process.env.port,async ()=>{
    try {
        await connection
        console.log("connected to database ")
        console.log(`server is running on ${process.env.port}`)


    } catch (error) {
        console.log('found error in connecting')
        console.log(error)

    }
})


