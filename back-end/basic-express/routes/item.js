const ItemController = require("../controllers/ItemsController")
const itemRouter = require("express").Router();

// itemRouter.get("/", (req, res) => {
//   res.send("Item main page");
// });

// itemRouter.get("/add", (req, res) => {
//   res.send("add item  page");
// });

// itemRouter.get("/search", (req, res) => {
//   res.send("add item  page");
// });

itemRouter.get("/", ItemController.getItems);
itemRouter.get("/add", ItemController.add);
itemRouter.get("/delete", ItemController.delete);
itemRouter.get("/edit", ItemController.update);
itemRouter.get("/search", ItemController.search);

module.exports = itemRouter;