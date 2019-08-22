exports.seed = function(knex) {
  // we want to remove all data before seeding
  // truncate will reset the primary key each time
  return knex("cars")
    .truncate()
    .then(() => {
      // Inserts seed entries
      return knex("cars").insert([
        {
          id: 1,
          VIN: "DT84290750198K",
          make: "Yugo",
          model: "Zastava 55",
          mileage: 92000,
          transmission: "manual",
          title: "clean",
          stock: 1000,
          sold: true
        },
        {
          id: 2,
          VIN: "alsh20735072",
          make: "Porsche",
          model: "911",
          mileage: 7626,
          transmission: "manual",
          title: "clean",
          stock: 1001,
          sold: false
        },
        {
          id: 3,
          VIN: "alks029375097209",
          make: "Volkswagen",
          model: "Golf MK2",
          mileage: 136800,
          transmission: "manual",
          title: "clean",
          stock: 1002,
          sold: false
        }
      ]);
    });
};
