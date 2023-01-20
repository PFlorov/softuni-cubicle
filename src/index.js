const express = require("express");

const config = require("./config");

const setUpViewEngine = require("./config/viewEngine");

const app = express();
setUpViewEngine(app);

app.get("/", function (req, res) {
  res.render("Home");
});
app.listen(config.PORT, () =>
  console.log(`Server listening on port ${config.PORT}...`)
);
