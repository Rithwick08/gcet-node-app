import mongoose from "mongoose";
const orderSchema= mongoose.Schema({
    email:String,
    orderValue:Number
});
export default mongoose.model("Orders", orderSchema)