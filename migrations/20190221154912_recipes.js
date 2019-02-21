
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipes', function(tbl) {
        tbl.increments('id');
        tbl.string('name', 228).notNullable();
        tbl.text('Instructions');
        tbl.integer('dish_id').unsigned().references().inTable('dishes');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipes');
};
