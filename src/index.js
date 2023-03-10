const express = require("express");
const cookieParser = require("cookie-parser");

const routes = require("./routes");
const config = require("./config");
const authMiddleware = require("./middlewares/authMiddleware");
const errorHandler = require("./middlewares/errorHandlerMiddleware");

const setUpViewEngine = require("./config/viewEngine");
const initDatabase = require("./config/databaseInit");

const app = express();
setUpViewEngine(app);

app.use(express.static("src/public"));
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(authMiddleware.authentication);
app.use(routes);
app.use(errorHandler);

initDatabase()
  .then(() =>
    app.listen(config.PORT, () =>
      console.log(`Server listening on port ${config.PORT}...`)
    )
  )
  .catch((err) => console.error(err.message));
