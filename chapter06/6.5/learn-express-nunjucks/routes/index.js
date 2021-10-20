const express = require("express");

const router = express.Router();

// GET / 라우터
router.get("/", (req, res) => {
  res.render("index", { title: "Express", template: "Nunjucks" });
});

// router.get("/", (req, res) => {
//   res.locals.title = "Express";
//   res.locals.template = "Nunjucks";
//   res.render("index");
// });

module.exports = router;
