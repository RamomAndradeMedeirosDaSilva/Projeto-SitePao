
exports.up = function(knex) {
    return knex.schema.createTable('products', function (table) {
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('descricao');
        table.integer('quantidade').notNullable();
        table.decimal('preco');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('products');
};
