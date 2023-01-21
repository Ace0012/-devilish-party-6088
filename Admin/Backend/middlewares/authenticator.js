const jwt = require("jsonwebtoken")
require("dotenv").config();




const authenticate = (req,res,next)=>{
    const token = req.headers.authorization
    if(token){
        const decoded = jwt.verify(token,process.env.key)
        if(decoded){
            next();

        }else{
            res.send("Please Login First ")
            }
        }
    else{
        res.send("You Don't have permission access Admin Panel")
        }
}

module.exports = {
    authenticate

}