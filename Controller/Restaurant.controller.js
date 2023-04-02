const router = require("express").Router();
const RestaurantModel = require("../Model/Restaurant.model");

/**
 * METHOD = GET
 * INPUT = Req, Res, Next Callback
 * OUTPUT = RESPONSE
 */
router.get("/", (req, res, next) => {
  RestaurantModel.find()
    .select(
      "_id name category city state address pincode cuisine foodType isOpen"
    )
    .then((response) => {
      if (response.length > 0) {
        return res.status(200).json({
          message: "Restaurant fetched successfully",
          data: response,
        });
      } else {
        return res.status(200).json({
          message: "No restaurants found",
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
 * METHOD = GET
 * INPUT = Req, Res, Next Callback
 * TASK - Get 'id' from req.params and get the particular restaurant id and return the response
 * OUTPUT = RESPONSE
 */
router.get("/:id", (req, res, next) => {
  const { id = "" } = req.params;
  RestaurantModel.findById({
    _id: id,
  })
    .select(
      "_id name category city state address pincode cuisine foodType isOpen"
    )
    .then((response) => {
      if (response._id) {
        return res.status(200).json({
          message: "Restaurant fetched successfully",
          data: response,
        });
      } else {
        return res.status(200).json({
          message: "No restaurants found",
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
  console.log(req);
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
  /**
   * SAVE - WILL CREATE A RECORD OF RESTAURANT IN DB
   */
  Restaurant.save()
    .then((response) => {
      if (response._id) {
        return res.status(200).json({
          data: response,
          message: "Restaurant added successfully!",
        });
      } else {
        return res.status(500).json({
          message: "Error Occured!",
        });
      }
    })
    .catch((e) =>
      res.status(400).json({
        error: e.message,
      })
    );
});

/**
 * METHOD = UPDATE
 * DESCRIPTION = UPDATE A RESTAURANT
 * PARAMS = ID
 * BODY = UPDATED RESTAURANT DATA
 * OUTPUT = CREATED RESTAURANT
 */
router.put("/:id", (req, res, next) => {
  const { id = "" } = req.params;
  /**
   * findByIdAndUpdate - Will update the restaurant data in DB
   */
  RestaurantModel.findByIdAndUpdate(id, req.body)
    .then((response) => {
      if (response) {
        return res.status(200).json({
          data: response,
          message: "Restaurant added successfully!",
        });
      } else {
        return res.status(500).json({
          message: "Error Occured!",
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
