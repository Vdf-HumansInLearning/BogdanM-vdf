var express = require("express");
var router = express.Router();
var fs = require("fs");

router.get("/", function (req, res, next) {
  // read the cookie
  let email = req.signedCookies.email;
  if (email) {
    let users = JSON.parse(fs.readFileSync('./data/users.json', { encoding: 'utf8' }));
    let loggedInUser = users.find(user => user.email.toLowerCase() === email.toLowerCase());

    // we should see the logged in user
    console.log(loggedInUser);

    // WARNING: this is not safe, as the user can still modify the cookie
    // TODO: take a look at express session for user session management. see an example here: https://www.section.io/engineering-education/session-management-in-nodejs-using-expressjs-and-express-session/

  }

  res.render("home", { title: "Home" });
});

module.exports = router;