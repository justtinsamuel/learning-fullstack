const { TypeController } = require("../controllers");
const typeRouter = require("express").Router();

typeRouter.get("/", TypeController.getTypes); // GET /Types
typeRouter.post("/", TypeController.add); // POST /Types
typeRouter.get("/search", TypeController.search); // GET /Types/search
typeRouter.get("/:id", TypeController.getTypeById); // GET /Types/:id
typeRouter.put("/:id", TypeController.edit); // PUT /Types/:id
typeRouter.delete("/:id", TypeController.delete); // DELETE /Types/:id

module.exports = typeRouter;
