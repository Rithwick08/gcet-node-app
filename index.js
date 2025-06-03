import express from 'express';
import cors from 'cors'; // ✅ import cors
import mongoose from 'mongoose';
const app = express();

// ✅ Enable CORS for Vite frontend (port 5174)
app.use(cors({
    origin: '*', // allow all origins (not recommended for production)
    credentials: true
  }));
  

app.listen(8080,()=>{
  mongoose.connect("mongodb://localhost:27017/gcet");
    console.log("Server Started on port 8080 and mongodb connected");
});

const userSchema=mongoose.Schema({
  name:String,
  email:String,
  pass:String
});

const productSchema=mongoose.Schema({
  name:String,
  price:Number
});

const user=mongoose.model("User",userSchema);
app.use(express.json());
const Product = mongoose.model("Product", productSchema);

app.get("/", (req, res) => {
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Node JS API's Routes</title>
    </head>
    <body>
      <h1>Node JS API's Routes</h1>
      <ul>
        <li><a href="/greet">Greet</a></li>
        <li><a href="/name">Name</a></li>
        <li><a href="/weather">Weather</a></li>
        <li><a href="/products">Products</a></li>
      </ul>
    </body>
    </html>
  `;
  res.send(html);
});

app.get("/greet", (req, res) => {
  return res.send("Good Morning");
});

app.get("/name", (req, res) => {
  return res.send("Rithwick Reddy");
});

app.get("/weather", (req, res) => {
  return res.send("Sunny (31 C)");
});

app.get("/products", (req, res) => {
  const products = [
    { id: 1, name: "product 1", price: "45" },
    { id: 2, name: "product 2", price: "95" },
    { id: 3, name: "product 3", price: "50" },
  ];
  return res.json(products);
});

app.post("/register", async (req, res) => {
  const { name,email,pass } = req.body;
  const result = await user.insertOne({ name: name,email: email,pass: pass });
  return res.json(result);  // use Express res to send response
});

app.post("/login", async(req,res) => {
  const { email,pass } = req.body;
  const result = await user.findOne({email:email,pass:pass});
  if(result){
    return res.json("user found");
  }
  else{
    return res.json("No user found");
  }
})
app.get("/product", async (req, res) => {
  try {
    const allProducts = await Product.find({});
    return res.json(allProducts);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server error" });
  }
});