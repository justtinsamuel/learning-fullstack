const router = require("express").Router();
const base = 'api'

router.get(`/${base}`, (req, res) => {
  res.json("API webpage");
});

const itemRouter = require('./item');
const userRouter = require('./user');
// const locationRouter = require('./location');
// const profileRouter = require('./profile');
const typeRouter = require('./type');

router.use(`/${base}/items`, itemRouter);
router.use(`/${base}/users`, userRouter);
// router.use(`/${base}/locations`, locationRouter);
// router.use(`/${base}/profiles`, profileRouter);
router.use(`/${base}/types`, typeRouter);

module.exports = router;
