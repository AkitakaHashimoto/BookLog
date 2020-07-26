const router = require('express').Router();
let WantToRead = require('../models/wantToRead.model');

router.route('/').get((req, res) => {
    WantToRead.find()
    .then(books => res.json(books))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const title = req.body.title;
  const image = req.body.image;

  const newWantToRead = new WantToRead({title, image});

  newWantToRead.save()
    .then(() => res.json('WantToRead added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    WantToRead.findById(req.params.id)
    .then(book => res.json(book))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    WantToRead.findByIdAndDelete(req.params.id)
    .then(() => res.json('WantToRead deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;