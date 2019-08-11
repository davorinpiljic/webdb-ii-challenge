const express = require("express");
const router = express.Router();
const db = require("../data/dbConfig.js");
// this file will only be used when the route begins with "/sales"
router.post("/", async (req, res) => {
  try {
    //the body of the new car
    const newSale = req.body;
    await db("sales").insert(newSale);
    res.status(201).json({ message: "Sale successfully added" });
  } catch (err) {
    res.status(500).json({ err: err.message, message: "Failed to add sale" });
  }
});

router.get("/", async (req, res) => {
  try {
    const sales = await db("sales").select();
    res.status(200).json(sales);
  } catch (err) {
    res
      .status(500)
      .json({ err: err.message, message: "Failed to get sale list" });
  }
});

router.get("/cars", async (req, res) => {
  try {
    const sales = await db("sales").select();
    const cars = await db("cars").select();
    const soldCars = await db("cars as c")
      .join("sales as s", "c.stock", "s.stock")
      .select("c.VIN", "c.stock", "s.sale_amount");
    res.status(200).json(soldCars);
  } catch (err) {
    res
      .status(500)
      .json({ err: err.message, message: "Failed to get sale list" });
  }
});

module.exports = router;
