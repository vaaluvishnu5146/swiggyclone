const mongoose = require("mongoose");

const RestaurantModel = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  pincode: {
    type: String,
    required: true,
  },
  cuisine: {
    type: Array,
    required: true,
  },
  foodType: {
    type: Array,
    required: true,
  },
  timings: {
    type: Array,
    required: false,
  },
  branch: {
    type: String,
    required: false,
  },
  branchId: {
    type: Number,
    required: false,
  },
  isOpen: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Restaurant", RestaurantModel);
