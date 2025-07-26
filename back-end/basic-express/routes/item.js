const itemRouter = require("express").Router();

itemRouter.get("/", (req, res) => {
  res.send("Item main page");
});

itemRouter.get("/add", (req, res) => {
  res.send("add item  page");
});

itemRouter.get("/search", (req, res) => {
  res.send("add item  page");
});

module.exports = itemRouter;