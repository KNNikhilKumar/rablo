const express=require('express');
const router=express.Router();
const Pro=require('../models/product.js');
//add
router.post('/',(req,res)=>{
    const newPro=Pro({
    id:req.body.id,
    name:req.body.name,
    price:req.body.price,
    featured:req.body.featured,
    createdAt:req.body.createdAt,
    rating:req.body.rating,
    company:req.body.company
    })
    newPro.save((err,rec)=>{
        if(err) res.status(500).json({message:err.message});
        else res.status(200).json({message:"saved successfully"});
    })
});

//getall
router.get('/',(req,res)=>{
    Pro.find({},(err,rec)=>{
        if(err) res.status(500).json({message:err.message});
        else res.status(200).json(rec);
    })
});

//update
router.patch('/:id',(req,response)=>{
    Pro.findOne({id:req.params.id},(err,res)=>
    {
        if(err) response.status(500).json({message:err.message});
        else
        {
            if(req.body.name!=null) res.name=req.body.name;
            if(req.body.price!=null) res.price=req.body.price;
            if(req.body.featured!=null) res.featured=req.body.featured;
            if(req.body.rating!=null) res.rating=req.body.rating;
            if(req.body.company!=null) res.company=req.body.company;
            res.save();
            response.status(200).json(res);
        }
    });
});

//4) Delete a product
router.delete('/:id',(req,res)=>{
    Pro.deleteOne({id:req.params.id},(err,rec)=>
    {
        if(err) res.status(500).json({message:err.message});
        else res.status(200).json({message:"deleted successfully"});
    })
});

//5) Fetch featured products
router.get('/featured',(req,res)=>{
    Pro.find({featured:true},(err,rec)=>{
        if(err) res.status(500).json({message:err.message});
        else res.status(200).json(rec);
    })
});

//6) Fetch products with price less than a certain value
router.get('/price/:val',(req,res)=> {
    Pro.find({price:{$lt:req.params.val}},(err,rec)=>{
        if(err) res.status(500).json({message:err.message});
        else res.status(200).json(rec);
    })
});

//7) Fetch products with rating higher than a certain value
router.get('/rating/:val',(req,res)=>{
    Pro.find({rating:{$gt:req.params.val}},(err,rec)=>{
        if(err) res.status(500).json({message:err.message});
        else res.status(200).json(rec);
    })
});
module.exports=router;