const ItemController = require("../controllers/ItemsController")
const itemRouter = require("express").Router();

itemRouter.get("/", ItemController.getItems);
itemRouter.get("/add", ItemController.add);
itemRouter.get("/delete", ItemController.delete);
itemRouter.get("/edit", ItemController.edit);
itemRouter.get("/search", ItemController.search);

module.exports = itemRouter;