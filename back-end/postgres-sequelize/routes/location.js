const { LocationController } = require("../controllers");
const locationRouter = require("express").Router();

locationRouter.get("/", LocationController.getLocations); // GET /Locations
locationRouter.post("/", LocationController.add); // POST /Locations
locationRouter.get("/search", LocationController.search); // GET /Locations/search
locationRouter.get("/:id", LocationController.getLocationById); // GET /Locations/:id
locationRouter.put("/:id", LocationController.edit); // PUT /Locations/:id
locationRouter.delete("/:id", LocationController.delete); // DELETE /Locations/:id

module.exports = locationRouter;
