const express = require("express")
const productRouter = express.Router();
const {ProductModel} = require("../model/Product.model")
 


productRouter.get("/",(req,res)=>{
    res.send("Home Page")
    
})

productRouter.post('/create-bulk', (req, res) => {

    const payload  = req.body;

    const data = ProductModel.insertMany(payload, (err, products) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(products);
        }
    });
    
})
productRouter.post("/create-one",async (req,res)=>{




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
productRouter.put("/update/:id",async (req,res)=>{

    const ID = req.params.id
    const payload = req.body
try {
    await ProductModel.findByIdAndUpdate({id:ID}, payload)

    res.send("product updated ")
} catch (error) {
    console.log(error)
    res.send({"Erorr":"Something went wrong while updating "})
    }


    // res.send("Item updated")

})
productRouter.delete("/delete/:id",async (req,res)=>{

    const id = req.params.id
    // const payload = req.body
try {
    await ProductModel.findByIdAndDelete({_id:id})
    res.send("product deleted ")
    
} catch (error) {
    console.log(error)
    res.send({"Erorr":"Something went wrong while updating "})
    }

    
    res.send("Item updated")

})



module.exports = {
    productRouter
    }
