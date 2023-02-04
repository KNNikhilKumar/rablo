require('dotenv').config();
const express=require('express');
const app=express();
const cors=require('cors');
app.use(cors());
app.use(express.json());
app.listen(8000,()=> console.log("server started"));
const mongoose=require('mongoose');
mongoose.connect("mongodb+srv://KNNK:KNNK@cluster0.chhmj.mongodb.net/product");
mongoose.set('strictQuery',true);
const subRouter=require('./routes/product');
app.use('/product',subRouter);