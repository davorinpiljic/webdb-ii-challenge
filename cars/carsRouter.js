const express = require("express");
const router = express.Router();
const db = require("../data/dbConfig.js");
// this file will only be used when the route begins with "/cars"
router.post("/", async (req, res) => {
  try {
    //the body of the new car
    const newCar = req.body;
    console.log(newCar);
    await db("cars").insert(newCar);
    res.status(201).json({ message: "Car successfully added" });
  } catch (err) {
    res.status(500).json({ err: err.message, message: "Failed to add car" });
  }
});

router.get("/", async (req, res) => {
  try {
    const cars = await db("cars").select();
    res.status(200).json(cars);
  } catch (err) {
    res
      .status(500)
      .json({ err: err.message, message: "Failed to get car list" });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const car = req.body;
  try {
    const updatedCars = await db("cars")
      .where({ id })
      .update(car);
    res.status(200).json(car);
  } catch (err) {
    res.status(500).json({ err: err.message, message: "Failed to update car" });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const cars = await db("cars")
      .where({ id })
      .del();
    res.status(200).json(cars);
  } catch (err) {
    res.status(500).json({ err: err.message, message: "Failed to delete car" });
  }
});
module.exports = router;
