const express = require("express")
const productRouter = express.Router();
const {ProductModel} = require("../model/Product.model")
 


productRouter.get("/",(req,res)=>{
    res.send("Home Page")
    
})

productRouter.post('/add-many-products', (req, res) => {

    const payload  = req.body;

    const data = ProductModel.insertMany(payload, (err, products) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(products);
        }
    });
    
})
productRouter.post("/create",async (req,res)=>{



    const payload = req.body


    try {
    const new_product = new ProductModel(payload)    
    await new_product.save()
    res.send("Created Note Successfully ")

    } catch (error) {
    console.log(error)    
    res.send({"msg":"Something went wrong in creating"})

    }
    

})
productRouter.patch("/update:id",(req,res)=>{
    // const id
    res.send("Item updated")

})
productRouter.delete("/delete:id",(req,res)=>{

    res.send("deleted")

})



module.exports = {
    productRouter
    }
