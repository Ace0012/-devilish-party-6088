const mongoose = requrie("mongoose")


const productSchema = mongoose.Schema({
    title:{type:String,required:true},
    img:{type:String,required:true},
    price:{type:String,required:true},
    id:{type:String,required:true},
    type:{type:String, required:true}

})


const ProductModel = mongoose.model("products", productSchema)


module.exports={
    ProductModel
    }


    