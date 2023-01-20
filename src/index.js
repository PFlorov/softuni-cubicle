const express = require("express");

const routes = require("./routes");

const config = require("./config");

const setUpViewEngine = require("./config/viewEngine");

const app = express();
setUpViewEngine(app);

app.use(express.static("src/public"));

app.use(routes);

app.listen(config.PORT, () =>
  console.log(`Server listening on port ${config.PORT}...`)
);
