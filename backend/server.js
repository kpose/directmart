import express from "express";
import data from "./assets/data";

const app = express();

app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.listen(5000, () => {
  console.log("started server");
});
