const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Welcome page");
});

const itemRouter = require('./item');
const userRouter = require('./user');
const locationRouter = require('./location');
const profileRouter = require('./profile');
const typeRouter = require('./type');

router.use('/item', itemRouter);
router.use('/user', userRouter);
router.use('/location', locationRouter);
router.use('/profile', profileRouter);
router.use('/type', typeRouter);

module.exports = router;
