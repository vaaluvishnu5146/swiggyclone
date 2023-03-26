const router = require("express").Router();
const RestaurantModel = require("../Model/Restaurant.model");

/**
 * METHOD = GET
 * INPUT = Req, Res, Next Callback
 * OUTPUT = RESPONSE
 */
router.get("/", (req, res, next) => {
  return res.json({
    message: "GET REQUEST SUCCESSFULL",
  });
});

/**
 * METHOD = POST
 * DESCRIPTION = CREATE A RESTAURANT AND SAVE IT IN MONGODB
 * PARAMS =
 * OUTPUT = CREATED RESTAURANT
 */
router.post("/", (req, res, next) => {
  const {
    name = "",
    category = "",
    city = "",
    state = "",
    address = "",
    pincode = "",
    cuisine = [],
    foodType = [],
  } = req.body;
  const Restaurant = new RestaurantModel({
    name: name,
    category: category,
    city: city,
    state: state,
    address: address,
    pincode: pincode,
    cuisine: cuisine,
    foodType: foodType,
  });
  Restaurant.save()
    .then((response) => {
      if (response._id) {
        return res.status(200).json({
          data: response,
          message: "Restaurant added successfully!",
        });
      }
    })
    .catch((e) => console.log(e));
  return res.json({
    message: "POST REQUEST SUCCESSFULL",
  });
});

module.exports = router;
