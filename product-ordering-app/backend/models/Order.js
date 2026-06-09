const mongoose = require("mongoose");

// Order collection schema

const OrderSchema = new mongoose.Schema({
  product: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  total: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model(
  "Order",
  OrderSchema
);