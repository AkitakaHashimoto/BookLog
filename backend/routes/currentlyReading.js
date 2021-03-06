const router = require('express').Router();
let CurrentlyReading = require('../models/currentlyReading.model');

router.route('/').get((req, res) => {
  CurrentlyReading.find()
    .then(books => res.json(books))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const title = req.body.title;
  const image = req.body.image;

  const newCurrentlyReading = new CurrentlyReading({title, image});

  newCurrentlyReading.save()
    .then(() => res.json('CurrentlyReading added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  CurrentlyReading.findById(req.params.id)
    .then(book => res.json(book))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  CurrentlyReading.findByIdAndDelete(req.params.id)
    .then(() => res.json('CurrentlyReading deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;