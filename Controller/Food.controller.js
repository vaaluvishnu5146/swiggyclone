const router = require("express").Router();
const FoodModel = require("../Model/Food.model");

/**
 * METHOD = GET
 * INPUT = Req, Res, Next Callback
 * OUTPUT = RESPONSE
 */
router.get("/", (req, res, next) => {
  FoodModel.find()
    .then((response) => {
      if (response.length > 0) {
        return res.status(200).json({
          message: "Foods fetched successfully",
          data: response,
        });
      } else {
        return res.status(200).json({
          message: "No Foods found",
          data: response,
        });
      }
    })
    .catch((error) => {
      return res.status(201).json({
        error: error,
      });
    });
});

/**
 * METHOD = POST
 * DESCRIPTION = CREATE A FOOD AND SAVE IT IN MONGODB
 * PARAMS =
 * OUTPUT = CREATED FOOD
 */
router.post("/", (req, res, next) => {
  const {
    name = "",
    description = "",
    foodtype = "",
    price = 0,
    offer = {},
    isAvailable = false,
    foodType = "",
    restaurantId = "",
  } = req.body;
  const Food = new FoodModel({
    name: name,
    description: description,
    foodtype: foodtype,
    price: price,
    offer: offer,
    isAvailable: isAvailable,
    foodType: foodType,
    restaurantId: restaurantId,
  });
  Food.save()
    .then((response) => {
      if (response._id) {
        return res.status(200).json({
          data: response,
          message: "Food added successfully!",
        });
      }
    })
    .catch((e) =>
      res.status(400).json({
        error: e.message,
      })
    );
});

module.exports = router;
