import express from 'express';
import cors from 'cors'; // ✅ import cors

const app = express();

// ✅ Enable CORS for Vite frontend (port 5174)
app.use(cors({
    origin: '*', // allow all origins (not recommended for production)
    credentials: true
  }));
  

app.listen(8080, () => {
  console.log("Server Started on http://localhost:8080");
});

app.get("/", (req, res) => {
  return res.send("Hello world");
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
