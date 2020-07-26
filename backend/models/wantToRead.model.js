const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const wantToReadSchema = new Schema({
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

const WantToRead = mongoose.model('WantToRead', wantToReadSchema);

module.exports = WantToRead;

// const mongoose = require('mongoose');

// const Schema = mongoose.Schema;

// const wantToReadSchema = new Schema({
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

// const WantToRead = mongoose.model('WantToRead', wantToReadSchema);

// module.exports = WantToRead;