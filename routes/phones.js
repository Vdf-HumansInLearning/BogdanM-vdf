var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  console.log(req.query);
  res.render("phones", { title: "Phones" });
});

module.exports = router;