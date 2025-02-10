const express = require("express");
const cors = require("cors");
require("dotenv").config();
const data = require("./data");

const app = express();

const port = process.env.PORT;

const corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

app.get("/api/products", (req, res) => {
  res.send(data);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
