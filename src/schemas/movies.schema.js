const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  image: String,
  title: String,
  description: String,
  actors: [String],
  genre: String,
  session: {
    capacity: Number,
    time: Date,
    room: String,
    ticket: [
      {
        seat: String,
        price: Number,
      },
    ],
  },
});

module.exports = mongoose.model('Movie', movieSchema);
