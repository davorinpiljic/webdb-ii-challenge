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
          title: "clean"
        }
      ]);
    });
};
