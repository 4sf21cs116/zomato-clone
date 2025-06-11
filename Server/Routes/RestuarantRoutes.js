const express = require('express');
const router = express.Router();
const Restuarant=require('../Modals/Restuarant');
const { Model } = require('mongoose');

router.get('/', async(req,res)=>{
  try{
    const resturant=await Restuarant.find();
    res.json(resturant);
  }
  catch(err){
     res.status(500).json({ message: err.message });    
  }
})
router.post('/', async (req, res) => {
  const { name, image, address, cusine, menu} = req.body;

  const newRestaurant = new Restuarant({
    name,
    image,
    address,
    cusine,
    menu
  });

  try {
    const savedRestaurant = await newRestaurant.save();
    res.status(201).json(savedRestaurant);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
router.get('/:id', async (req, res) => {
  try {
    const restaurant = await Restuarant.findById(req.params.id);
    res.json(restaurant);
    console.log(restaurant);
  } catch (err) {
    res.status(404).json({ message: 'Restaurant not found' });
  }
});
module.exports=router;