const Products = require("../models/products")


const validarId =async(req,res,next)=>{
    const productId = await Products.findById(req.params.id)
    if(productId){
        next()
    }else{
        res.status(404).json({msg:"el campo id es obligatorio"})
    }
}


module.exports={validarId}