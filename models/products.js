const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const prodcutsSchema=new Schema({
    nombreProducto:{
        type:String,
        required:true,
        
    },
    categoria:{
        type:String,
        required:true,
        unique:true
    },
    precio:{
        type:Number,
        required:true,
        
    },
    stock:{
        type:Number,
        required:true,
        
    }
})

const Products=mongoose.model("products",prodcutsSchema)

module.exports=Products