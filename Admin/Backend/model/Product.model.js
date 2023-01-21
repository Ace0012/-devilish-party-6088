const mongoose = require("mongoose");


const productSchema = mongoose.Schema({
    img:{type:String,required:true},
    title:{type:String,required:true},
    price:{type:String,required:true},
    type:{type:String,required:true}

})

const ProductModel = mongoose.model("products",productSchema)

module.exports = {
    ProductModel
    }