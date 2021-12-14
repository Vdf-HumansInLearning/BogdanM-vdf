var express = require("express");
var router = express.Router();

router.get("/login", function (req, res, next) {
  res.render("login", { title: "Login", register: req.query.register });
});

router.get("/register", function (req, res, next) {

  res.render("register", { title: "Register" });
});

router.post("/register", function (req, res, next) {
  console.log(req.body);

  let user = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  };

  // back-end validation!!!
  let isValid = validateUser(user, req.body.confirmPassword);

  // register new user
  if (isValid) {
    // TODO: read/write users from file
  }

  // redirect to login page
  res.redirect('/auth/login?register=true');
});

function validateUser(user, confirmPassword) {
  let isValid = true;

  if (!user.username || user.username < 3 || user.username > 20) {
    isValid = false;
  }

  const pattern = /^\S+@\S+\.\S+$/;
  if (!pattern.test(user.email)) {
    isValid = false;
  }

  if (user.password <= 6 || user.password >= 20 || user.password !== confirmPassword) {
    isValid = false;
  }

  return isValid;
}

module.exports = router;