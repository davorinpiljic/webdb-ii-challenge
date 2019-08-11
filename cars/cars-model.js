const db = require("../data/dbConfig.js");

module.exports = {
  add,
  find,
  remove,
  update
};

function add(car) {
  return db("cars").insert(car);
}

function find() {
  return db("cars");
}

function update(id, car) {
  return db("cars")
    .where(id)
    .update(car);
}

function remove(id) {
  return db("cars")
    .where(id)
    .del();
}
