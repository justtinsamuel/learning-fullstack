const TypeController = require("../controllers/TypesController")
const typeRouter = require("express").Router()  ;

typeRouter.get("/", TypeController.getType);
typeRouter.get("/add", TypeController.add);
typeRouter.get("/delete/:id", TypeController.delete);
typeRouter.get("/edit/:id", TypeController.edit);
typeRouter.get("/search", TypeController.search);

module.exports = typeRouter;