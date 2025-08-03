const { UserController } = require("../controllers");
const userRouter = require("express").Router();

userRouter.get("/", UserController.getUsers); // GET /Users
userRouter.post("/", UserController.add); // POST /Users
userRouter.post("/bulk", UserController.addMany); // POST /Users
userRouter.get("/search", UserController.search); // GET /Users/search
userRouter.get("/:id", UserController.getUserById); // GET /Users/:id
userRouter.put("/:id", UserController.edit); // PUT /Users/:id
userRouter.delete("/:id", UserController.delete); // DELETE /Users/:id

module.exports = userRouter;
