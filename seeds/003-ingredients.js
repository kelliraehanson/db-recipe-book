
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'Basil'},
        {name: 'Tomato'},
        {name: 'Cheese'},
        {name: 'Arugula'},
        {name: 'Almonds'},
        {name: 'Chickpeas'},
        {name: 'Apple Cider Vinegar'},
        {name: 'Dark Chocolate'},
      ]);
    });
};
