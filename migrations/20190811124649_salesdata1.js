// prettier-ignore

exports.up = function(knex) {
    return knex.schema.createTable("sales", function(table) {
      table.increments()
      table.integer("stock").unique().notNullable()
      table.decimal("sale_amount").notNullable()
      table.foreign('stock')
      .references('stock')
      .inTable('cars');
    });
  };

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("sales");
};
