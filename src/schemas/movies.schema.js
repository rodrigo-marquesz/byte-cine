const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image_url: String,
  actors: [String],
  genre: String,
  session: {
    shift: {
      type: String,
      required: true,
      enum: ['Morning', 'Afternoon', 'Evening'],
    },
    capacity: Number,
    time: Date,
    room: String,
    tickets: [
      {
        isAvailable: Boolean,
        seat: String,
        price: Number,
      },
    ],
  },
});

module.exports = mongoose.model('Movie', movieSchema);
