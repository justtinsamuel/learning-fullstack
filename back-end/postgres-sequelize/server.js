// using express
const express = require("express");
const app = express();

// activate dotenv
const dotenv = require("dotenv");
dotenv.config();

// call PORT from ENV
const port = process.env.PORT || 3000;

// untuk parsing input dari frontend
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const routes = require("./routes");
app.use(routes);

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
