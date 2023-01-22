// const { application } = require("express")
const express=require("express")
const jwt =require("jsonwebtoken")
const bcrypt = require('bcrypt');
const adminRouter = express.Router();
const {AdminModel} = require("../model/Admin.model")
// const {validator} = require("../middlewares/validator")





adminRouter.get("/",(req,res)=>{
    res.send("<h1>Welcome to admin's homepage here you can edit and delete anything</h1>")

})



adminRouter.post("/register",async (req,res)=>{
    const {email,username,password} = req.body;
    console.log(email)

try {
        bcrypt.hash(password,5,async (err,hash)=>{
            if(err){
                console.log(err)
                res.send("something went wrong with register")

            }
               
                const admin1 = new AdminModel({email,username,password:hash});
                await admin1.save()
              
                console.log(admin1)
                res.send("Admin has registered now ready to go ")
            
            
        })
    

} catch (err) {
    console.log(err)
    res.send({meassage:"something went wrong with registration"})


    
}
})
 

adminRouter.post("/login",async (req,res)=>{
    const {username,password} = req.body;

    try {
        const admin1 = await AdminModel.find({username})

        // console.log(admin1)
        if(admin1.length>0){
            bcrypt.compare(password, admin1[0].password,function(err,result){
               
                if(result){
                    const token = jwt.sign({admin:"columbia"},"admin")
                    console.log("Login Data updated")
                    res.send({"msg":"Login Successful","token":token})

                }else{
                    res.send("Wrong Credential")
                }
            })

        }

    } catch (error) {
        console.log("error : ",error)
        res.send(error)
    }

})



module.exports ={
    adminRouter

}   