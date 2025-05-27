const express = require('express');
const router = express.Router(); // Make sure you're using express.Router() to handle routes
const Product = require('../models/Product'); // Assuming you have a Product model

// Get all products
router.get('/', (req, res) => {
  Product.find()
    .then((products) => res.json(products))  // Respond with the products as JSON
    .catch((err) => res.status(500).json({ error: err.message }));
});

// Add a new product (POST)
router.post('/', (req, res) => {
  const { title, description, price, imageUrl, sellerId } = req.body;

  const newProduct = new Product({
    title,
    description,
    price,
    imageUrl,
    sellerId,
  });

  newProduct.save()
    .then((product) => res.status(201).json({ message: 'Product created successfully', product }))
    .catch((err) => res.status(500).json({ error: err.message }));
});

module.exports = router;  // Ensure the router is exported
