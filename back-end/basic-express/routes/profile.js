const ProfileController = require("../controllers/ProfilesController")
const profileRouter = require("express").Router();

profileRouter.get("/", ProfileController.getProfile);
profileRouter.get("/add", ProfileController.add);
profileRouter.get("/delete/:id", ProfileController.delete);
profileRouter.get("/edit/:id", ProfileController.edit);
profileRouter.get("/search", ProfileController.search);

module.exports = profileRouter;
