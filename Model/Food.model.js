const mongoose = require("mongoose");

const OfferModel = mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
  offerType: {
    type: String, // CASHBACK, DISCOUNT, FLAT DISCOUNT
    required: false,
  },
  offerValue: {
    type: Number,
    required: false,
  },
  offerUnit: {
    type: String,
    required: false,
  },
});

const FoodModel = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
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
