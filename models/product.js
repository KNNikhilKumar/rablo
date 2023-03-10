const mongoose=require('mongoose');
const proSchema=new mongoose.Schema({
    id:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    featured:{
        type:Boolean,
        default:false
    },
    rating:{
        type:Number
    },
    createdAt:{
        type:Date,
        required:true
    },
    company:{
        type:String,
        required:true
    }
});
module.exports=mongoose.model("Product",proSchema);
