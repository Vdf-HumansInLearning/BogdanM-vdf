var express = require("express");
var fs = require("fs");
var router = express.Router();

router.get("/login", function (req, res, next) {
  res.render("login", { title: "Login", register: req.query.register, error: req.query.error });
});

router.post("/login", function (req, res, next) {

  // read username and password
  let username = req.body.username;
  let password = req.body.password;

  // get users from file
  let users = fs.readFileSync('./data/users.json', { encoding: 'utf8' });

  // check if credentials match any existing user
  let loggedInUser = users.find(user => user.username === username && user.password === password);

  if (loggedInUser) {
    // create cookie with user session and redirect to homepage

    res.redirect('/home');
  } else {
    // redirect to login and show error message
    res.redirect('/auth/login?error=true');
  }

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