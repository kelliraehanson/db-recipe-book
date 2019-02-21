const knex = require('knex');
const knexConfig = require('./knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
    getDishes,
    getDishById,
    addNewDish,
    getRecipes,
};

function addNewDish(dish) {
    return db('dishes')
    .insert(dish)
    .then(ids => ({ id: ids[0] }));
}

function getDishes(){
    return db('dishes')
}

function getDishById(id){
    return db('dishes').where({ id: Number(id) });
}

function getRecipes(){
    return db('recipes')
}