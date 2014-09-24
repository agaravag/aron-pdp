var mongoose = require('mongoose');

module.exports = mongoose.model('Meetup', {
  name: String,
  location: String,
  time: String,
  food: String
});
