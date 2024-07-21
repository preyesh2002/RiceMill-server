const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  ricetype: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  transactiontype: {
    type: String,
    required: true,
  },
  
  createdAt: {
    type: Date,
    default: Date.now,
  },
  price: {
    type: Number, // Assuming the price is a numeric value
    required: true,
  },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
