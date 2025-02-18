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
  res.send(productsData);
});

app.get("/api/store", (req, res) => {
  res.send(storeData);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
