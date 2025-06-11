const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  username: { type: String, required: true },
  items: [
    {
      name: { type: String, required: true },
      price: { type: Number, required: true },
      quantity: { type: Number, required: true },
      total: { type: Number, required: true },
      restaurantName: { type: String, required: true }, // ✅ added field
    }
  ],
  totalAmount: { type: Number, required: true },
  paymentMethod: { type: String, required: true },
  location: { type: String, required: true },
  timestamp: { type: String, required: true }
});

module.exports = mongoose.model('Order', orderSchema);
