const express = require("express")
const { connection } = require("./config/db")
const app= express()

require("dotenv").config()




app.use(express.json)

app.get("/",(req,res)=>{
    res.send("Admin Home Page")

})


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
