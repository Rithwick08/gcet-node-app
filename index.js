import express from 'express'
const app = express()
app.listen(8080, ()=>{
    console.log("Server Started");
});
app.get("/",(req,res)=>{
    return res.send("Hello world");
});
app.get("/greet",(req,res)=>{
    return res.send("Good Morning");
});
app.get("/name",(req,res)=>{
    return res.send("Rithwick Reddy");
});
app.get("/weather",(req,res)=>{
    return res.send("Sunny (31 C)");
});
app.get("/products",(req,res)=>{
    const products=[
     {name:"product 1",price:"45"},
     {name:"product 2",price:"95"},
     {name:"product 3",price:"50"},
    ]
    return res.json(products);
 
 });