const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  sellerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  title: String,
  description: String,
  price: Number,
  imageUrl: String
}, { timestamps: true });

module.exports = mongoose.model('Product', ProductSchema);
