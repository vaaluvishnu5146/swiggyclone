const mongoose = require("mongoose");

const OfferModel = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  offerType: {
    type: String, // CASHBACK, DISCOUNT, FLAT DISCOUNT
    required: true,
  },
  offerValue: {
    type: Number,
    required: true,
  },
  offerUnit: {
    type: String,
    required: true,
  },
});

const FoodModel = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  restaurantId: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  foodType: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  offer: {
    type: OfferModel,
    required: false,
  },
  isAvailable: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Food", FoodModel);
