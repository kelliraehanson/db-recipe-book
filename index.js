const express = require('express');

const db = require('./db.js');

const server = express();

server.use(express.json());

// POST DISHES

server.post('/api/dishes', (req, res) => {
    db.addNewDish(req.body)
      .then(result => {
        db.getDish(result.id)
          .then(dish => {
            res.status(201).json(dish);
          });
      })
      .catch(err => res.status(500).json(err));
  });


// GET DISHES

server.get('/', (req, res) => {
    res.send('Things are working!');
  });

  server.get('/api/dishes', (req, res) => {
    db.getDishes()
      .then(dishes => {
        res.status(200).json(dishes);
      })
      .catch(err => res.status(500).json(err));
  });

  server.get('/api/dishes/:id', (req, res) => {
    const id = req.params.id;
    db.getDishById(id)
        .then(dish => {
        if (dish) {
            res.status(200).json(dish);
        } else {
            res.status(404).json({ message: 'There was an error finding this dish' });
        }
        });
});

// GET RECIPES
server.get('/api/recipes', (req, res) => {
    db.getRecipes()
      .then(recipes => {
        res.status(200).json(recipes);
      })
      .catch(err => res.status(500).json(err));
  });





const port = process.env.PORT || 7000;
server.listen(port, () => console.log(`\nrunning on ${port}\n`));