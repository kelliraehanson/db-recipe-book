
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: 'Brooklyn Pizza', dish_id: 1, instructions: 'make a pizza?'},
        {name: 'Arugula and other stuff', dish_id: 2, instructions: 'Rinse things and put in bowl I dk.'},
        {name: 'Vanilla Ice Cream', dish_id: 3, instructions:'Buy this instead of making it probably.'}
      ]);
    });
};
