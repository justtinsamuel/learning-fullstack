const userRouter = require("express").Router();

userRouter.get("/", (req, res) => {
  res.send("User main page");
});

module.exports = userRouter;
