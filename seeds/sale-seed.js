exports.seed = function(knex) {
  // we want to remove all data before seeding
  // truncate will reset the primary key each time
  return knex("sales")
    .truncate()
    .then(() => {
      // Inserts seed entries
      return knex("sales").insert([
        {
          id: 1,
          stock: 1000,
          sale_amount: 10350.0
        }
      ]);
    });
};
