const express = require('express');
const router = express.Router();
const Order = require('../Modals/OrderModel');

router.post('/', async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.status(201).json({ message: 'Order saved' });
  } catch (error) {
    console.error('Order save failed:', error);
    res.status(500).json({ message: 'Failed to save order' });
  }
});

module.exports = router;
