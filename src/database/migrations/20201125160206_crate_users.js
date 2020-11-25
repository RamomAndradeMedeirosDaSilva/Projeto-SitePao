
exports.up = function(knex) {
    return knex.schema.createTable('users', function (table) {
        /*table.increments();*/
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.integer('idade');
        table.string('empresa');
        /*table.timestamps();*/
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');  
};
