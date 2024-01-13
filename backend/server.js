import express from "express";
import dotenv from "dotenv";
dotenv.config();
import products from "./data/products.js";
const port = process.env.PORT || 4000;

const app = express();

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.get("/api/products", (req, res) => {   //get all products
    res.json(products);
    });

app.get("/api/products/:id", (req, res) => {   //get product by id
    const product = products.find((x) => x._id === req.params.id);
    if(product){
        res.json(product);
    } else {
        res.status(404).json({message: "Product not found"});
    }
});

app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});