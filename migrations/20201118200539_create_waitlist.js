// Migrations have an "up" direction and "down" direction where
// the "down" migration undoes the "up" migration. If the up
// migration creates a table, the corresponding down migration
// would drop the table.

// The below corresponds to the following SQL:

exports.up = function(knex) {
  return knex.schema.createTable('waitlist', (table) => {
    table.increments('id').primary();
    table.text('email').unique().notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};


exports.down = function(knex) {
  return knex.schema.dropTable('waitlist');
};
