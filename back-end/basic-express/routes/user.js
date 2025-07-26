const UserController = require("../controllers/UsersController")
const userRouter = require("express").Router();

userRouter.get("/", UserController.getUsers);
userRouter.get("/add", UserController.add);
userRouter.get("/delete/:id", UserController.delete);
userRouter.get("/edit/:id", UserController.edit);
userRouter.get("/search", UserController.search);

module.exports = userRouter;
