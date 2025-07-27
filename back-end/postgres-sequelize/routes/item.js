const { ItemController } = require("../controllers");
const itemRouter = require("express").Router();

itemRouter.get("/", ItemController.getItems); // GET /items
itemRouter.post("/", ItemController.add); // POST /items
itemRouter.get("/search", ItemController.search); // GET /items/search
itemRouter.get("/:id", ItemController.getItemById); // GET /items/:id
itemRouter.put("/:id", ItemController.edit); // PUT /items/:id
itemRouter.delete("/:id", ItemController.delete); // DELETE /items/:id

module.exports = itemRouter;
