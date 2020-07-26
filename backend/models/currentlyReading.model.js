const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const currentlyReadingSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  image: String,
}, {
  timestamps: true,
});

const CurrentlyReading = mongoose.model('CurrentlyReading', currentlyReadingSchema);

module.exports = CurrentlyReading;

// const mongoose = require('mongoose');

// const Schema = mongoose.Schema;

// const currentlyReadingSchema = new Schema({
//   title: {
//     type: String,
//     required: true,
//     unique: true,
//     trim: true,
//     minlength: 3
//   },
// }, {
//   timestamps: true,
// });

// const CurrentlyReading = mongoose.model('CurrentlyReading', currentlyReadingSchema);

// module.exports = CurrentlyReading;