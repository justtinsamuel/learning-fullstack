const { ProfileController } = require("../controllers");
const profileRouter = require("express").Router();

profileRouter.get("/", ProfileController.getProfiles); // GET /Profiles
profileRouter.post("/", ProfileController.add); // POST /Profiles
profileRouter.get("/search", ProfileController.search); // GET /Profiles/search
profileRouter.get("/:id", ProfileController.getProfileById); // GET /Profiles/:id
profileRouter.put("/:id", ProfileController.edit); // PUT /Profiles/:id
profileRouter.delete("/:id", ProfileController.delete); // DELETE /Profiles/:id

module.exports = profileRouter;
