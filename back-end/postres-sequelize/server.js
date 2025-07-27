const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT || 3000;

const routes = require("./routes");
app.use(routes);

app.listenerCount(port, () => {
  console.log(`App is running on port ${port}`);
});
