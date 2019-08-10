// prettier-ignore

exports.up = function(knex) {
    return knex.schema.createTable("sales", function(table) {
      table.string("VIN").unique().notNullable()
      table.decimal("sale_amount").notNullable()
      table.foreign('VIN')
      .references('VIN')
      .inTable('cars');
    });
  };

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("sales");
};
