// using express
const express = require("express");
const app = express();

// activate dotenv
const dotenv = require("dotenv");
dotenv.config();

// call PORT from ENV
const port = process.env.PORT || 3000;

const routes = require("./routes");
app.use(routes);

app.listenerCount(port, () => {
  console.log(`App is running on port ${port}`);
});
