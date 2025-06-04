import express from 'express'
import productsModel from '../models/productsModel.js'

const productsRouter = express.Router();

productsRouter.get("/all", async(req,res) => {
    const products = await productsModel.find({})
    res.json(products)
});
productsRouter.post("/products", async (req, res) => {
    const { name } = req.body;  // only take 'name' for searching
    try {
      // Find all products matching the name
      const results = await productsModel.find({ name: name });
      
      if (results.length > 0) {
        return res.json(results);  // return all matching products with their prices
      } else {
        return res.status(404).json({ message: "No product found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
  });

export default productsRouter