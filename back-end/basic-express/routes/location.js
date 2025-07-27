const LocationController = require("../controllers/LocationsController")
const locationRouter = require("express").Router();

locationRouter.get("/", LocationController.getLocation);
locationRouter.get("/add", LocationController.add);
locationRouter.get("/delete/:id", LocationController.delete);
locationRouter.get("/edit/:id", LocationController.edit);
locationRouter.get("/search", LocationController.search);

module.exports = locationRouter;
