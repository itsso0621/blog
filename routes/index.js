var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Main" });
});

router.get("/article", (req, res, next) => {
  res.render("article", {
    title: "Articles ",
  });
});

module.exports = router;
