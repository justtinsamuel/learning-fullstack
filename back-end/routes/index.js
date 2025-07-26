const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Welcome page");
});

const itemRouter = require('./item');
const userRouter = require('./user');

router.use('/item', itemRouter);
router.use('/user', userRouter);

module.exports = router;
