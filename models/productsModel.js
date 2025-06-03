import mongoose from "mongoose";
const productSchema=mongoose.Schema({
    name:String,
    price:Number
  });
  const Product = mongoose.model("Product", productSchema);