const express = require("express");
const router = express.Router();
const Sales = require("./sales-model.js");
const Cars = require("../cars/cars-model.js");

// this file will only be used when the route begins with "/sales"
router.post("/", async (req, res) => {
  try {
    //the body of the new car
    const newSale = req.body;
    await Sales.add(newSale);
    res.status(201).json({ message: "Sale successfully added" });
  } catch (err) {
    res.status(500).json({ err: err.message, message: "Failed to add sale" });
  }
});

router.get("/", async (req, res) => {
  try {
    const sales = await Sales.find();
    res.status(200).json(sales);
  } catch (err) {
    res
      .status(500)
      .json({ err: err.message, message: "Failed to get sale list" });
  }
});

router.get("/cars", async (req, res) => {
  try {
    const soldCars = await Sales.findSoldCars();
    res.status(200).json(soldCars);
  } catch (err) {
    res
      .status(500)
      .json({ err: err.message, message: "Failed to get sale list" });
  }
});

module.exports = router;
