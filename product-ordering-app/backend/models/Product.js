const mongoose = require("mongoose");

// Product collection schema

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model(
  "Product",
  ProductSchema
);