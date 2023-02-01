const express = require("express");

const routes = require("./routes");

const config = require("./config");

const setUpViewEngine = require("./config/viewEngine");
const initDatabase = require("./config/databaseInit");

const app = express();
setUpViewEngine(app);

app.use(express.static("src/public"));
app.use(express.urlencoded({ extended: false }));
app.use(routes);

initDatabase()
  .then(() =>
    app.listen(config.PORT, () =>
      console.log(`Server listening on port ${config.PORT}...`)
    )
  )
  .catch((err) => console.error(err.message));
