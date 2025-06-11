const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
  name: String,
  image: String, // Banner image of restaurant
  address: String,
  cusine: String,
  menu: [
    {
      name: String,
      price: Number, // Changed to Number for calculations
      description: String,
      imageUrl: String // New field for menu item image
    }
  ]
});

module.exports = mongoose.model('Restuarant', RestaurantSchema);
