
exports.up = function(knex) {
    return knex.schema.createTable('users', function (table) {
        /*table.increments();*/
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('rua');
        table.string('bairro');
        table.string('numero');
        table.string('complemento');
        table.string('telefone');
        table.string('email').notNullable();
        table.string('senha');

        /*table.timestamps();*/
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');  
};
