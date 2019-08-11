const express = require("express");
const router = express.Router();
const Cars = require("./cars-model.js");
// this file will only be used when the route begins with "/cars"
router.post("/", async (req, res) => {
  try {
    //the body of the new car
    const newCar = req.body;
    await Cars.add(newCar);
    res.status(201).json({ message: "Car successfully added" });
  } catch (err) {
    res.status(500).json({ err: err.message, message: "Failed to add car" });
  }
});

router.get("/", async (req, res) => {
  try {
    const cars = await Cars.find();
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
    const updatedCar = await Cars.update({ id }, car);
    if (updatedCar) {
      res.status(200).json(car);
    } else {
      res.status(404).json({ message: "The car could not be found" });
    }
  } catch (err) {
    res.status(500).json({ err: err.message, message: "Failed to update car" });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  console.log({ id });
  try {
    const cars = await Cars.remove({ id });
    if (cars) {
      res.status(200).json(cars);
    } else {
      res.status(404).json({ message: "The car could not be found" });
    }
  } catch (err) {
    res.status(500).json({ err: err.message, message: "Failed to delete car" });
  }
});
module.exports = router;
