const Product = require('../models/Product');

// ✅ Used by CustomerDashboard
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find(); // gets ALL products
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Seller-specific functions (optional later)
exports.createProduct = async (req, res) => {
  const { title, description, price, imageUrl, sellerId } = req.body;
  try {
    const product = new Product({ title, description, price, imageUrl, sellerId });
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
