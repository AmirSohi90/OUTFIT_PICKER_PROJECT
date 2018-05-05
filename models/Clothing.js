const mongoose = require('mongoose');

const clothingSchema = new mongoose.Schema({
  name: { type: String, required: true},
  brand: { type: String },
  category: { type: String },
  image: { type: String },
  user: {type: mongoose.Schema.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Clothing', clothingSchema);
