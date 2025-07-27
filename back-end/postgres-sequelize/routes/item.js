const ItemController = require("../controllers/ItemsController")
const itemRouter = require("express").Router();

itemRouter.get("/", ItemController.getItems);
itemRouter.get("/add", ItemController.add);
itemRouter.get("/delete/:id", ItemController.delete);
itemRouter.get("/edit/:id", ItemController.edit);
itemRouter.get("/search", ItemController.search);

module.exports = itemRouter;