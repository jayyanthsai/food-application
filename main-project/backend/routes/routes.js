const location=require("../controller/locationController")
const restaurant=require("../controller/restaurantController")
const meal=require("../controller/mealController")
const filter=require("../controller/filter_and_sort");

const apiRoutes=require("express").Router();

const { genOrderDetails, verifyPayment} = require("../controller/PaymentController");

apiRoutes.get("/api",location.home)
apiRoutes.get("/api/locations",location.getLocationList)
apiRoutes.get("/api/restaurants-list-by-location-id/:query_name",restaurant.getRestaurantListByLocationId)
apiRoutes.get("/api/restaurants-list-by-restaurant-id/:query_name",restaurant.getRestaurantListByRestaurantId)
apiRoutes.get("/api/menu-items-list-by-restaurant-id/:query_name",restaurant.getmenuitemsListByRestaurantId)
apiRoutes.get("/api/meal-type",meal.getmealtype)

apiRoutes.post("/api/filter",filter.filter_method)

// payment
apiRoutes.post("/api/gen-order-details", genOrderDetails);
apiRoutes.post("/api/verify-payment", verifyPayment);
module.exports=apiRoutes;
