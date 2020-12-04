
exports.up = function(knex) {
    return knex.schema.createTable('bag', function (table) {
        table.string('id').primary();
        table.string('descricao');
        table.string('usuarioid');
        table.string('produtosid');
        table.decimal('totalcompra');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('bag'); 
};
