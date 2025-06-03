import mongoose from "mongoose";
const userSchema=mongoose.Schema({
    name:String,
    email:String,
    pass:String
  });
const user=mongoose.model("User",userSchema);