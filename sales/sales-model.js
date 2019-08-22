const db = require("../data/dbConfig.js");

module.exports = {
  add,
  find,
  findSoldCars
};

function add(sale) {
  return db("sales").insert(sale);
}

function find() {
  return db("sales");
}

function findSoldCars() {
  return db("cars as c")
    .join("sales as s", "c.stock", "s.stock")
    .select("c.VIN", "c.stock", "s.sale_amount");
}
