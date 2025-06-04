// import express from 'express';
// import cors from 'cors';
// import mongoose from 'mongoose';
// import userModel from '../models/userModel.js';
// import productsModel from '../models/productsModel.js';
// import productsRouter from '../routes/productsRoutes.js';
// import userRouter from '../routes/userRoutes.js';
// const app = express();
// app.use(express.json());
// app.use(cors({
//     origin: '*', 
//     credentials: true
//   }));
  

// app.listen(8080,()=>{
//   mongoose.connect("mongodb://localhost:27017/gcet");
//     console.log("Server Started on port 8080 and mongodb connected");
// });

// app.use("/users", userRouter);
// app.use("/products", productsRouter);

// app.get("/", (req, res) => {
//   const html = `
//     <!DOCTYPE html>
//     <html>
//     <head>
//       <title>Node JS API's Routes</title>
//     </head>
//     <body>
//       <h1>Node JS API's Routes</h1>
//       <ul>
//         <li><a href="/greet">Greet</a></li>
//         <li><a href="/name">Name</a></li>
//         <li><a href="/weather">Weather</a></li>
//         <li><a href="/products">Products</a></li>
//       </ul>
//     </body>
//     </html>
//   `;
//   res.send(html);
// });

// app.get("/greet", (req, res) => {
//   return res.send("Good Morning");
// });

// app.get("/name", (req, res) => {
//   return res.send("Rithwick Reddy");
// });

// app.get("/weather", (req, res) => {
//   return res.send("Sunny (31 C)");
// });
// app.use(express.json()); // Make sure this is set at the top

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv';
import userRouter from "./routes/userRoutes.js";
import productRouter from "./routes/productsRoutes.js";
import orderRouter from "./routes/orderRoutes.js";

const app = express();
app.use(cors());
dotenv.config();

app.use(express.json());

const MONGODB_URI = process.env.MONGODB_URI;
app.use("/users", userRouter);
app.use("/orders", orderRouter);
app.use("/products", productRouter);

app.listen(8080, () => {
  mongoose.connect(`${MONGODB_URI}`);
  console.log("Server Started at 8080");

});
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