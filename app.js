const express = require("express");
const cors = require("cors");
require("dotenv").config();
const productsData = require("./products-data");
const storeData = require("./store-data");

const app = express();

const port = process.env.PORT;

const corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

app.get("/api/products", (req, res) => {
  const filteredProducts = productsData.products.map((product) => ({
    id: product.node.id,
    title: product.node.title,
    description: product.node.description,
    price: product.node.price,
    images: product.node.images,
  }));
  res.send({ products: filteredProducts });
});

app.get("/api/store", (req, res) => {
  res.send(storeData);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
