const router = require("express").Router();

router.get("/login", function (req, res) {
  res.render("auth/login");
});

router.get("/register", function (req, res) {
  res.render("auth/register");
});

router.post("/register", function (req, res) {
  const { username, password, repeatPassword } = req.body;
  if (password !== repeatPassword) {
    return res.status(404).end();
  }
});

module.exports = router;
