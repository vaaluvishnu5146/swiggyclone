const express = require("express");
const app = express();
const parser = require("body-parser");
const cors = require("cors");

/**
 * REGISTERING THE MIDDLEWARE
 */
app.use(cors());
app.use(parser.urlencoded({ extended: false }));
app.use(parser.json());

const RestaurantController = require("./Controller/Restaurant.controller");
const FoodController = require("./Controller/Food.controller");

/**
 * REGISTERING TEH CONTROLLER
 */
app.use("/api/restaurants", RestaurantController);
app.use("/api/food", FoodController);

module.exports = app;
