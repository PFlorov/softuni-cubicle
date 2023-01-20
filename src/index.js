const express = require("express");

const config = require("./config");

const app = express();
app.get("/", function (req, res) {
  res.send("Home Page");
});
app.listen(config.PORT, () =>
  console.log(`Server listening on port ${config.PORT}...`)
);
