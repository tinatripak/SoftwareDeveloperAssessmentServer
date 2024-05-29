const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "The name is required"],
    unique: true,
  },
  shortDescription: {
    type: String,
    required: [true, "The short description is required"],
  },
  fullDescription: {
    type: String,
    required: [true, "The full description is required"],
  },
  price: {
    type: String,
    required: [true, "The price is required"],
  },
  createdAt: {
    type: Date,
  },
});

module.exports = mongoose.model("service", serviceSchema);
