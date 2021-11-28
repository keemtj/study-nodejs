/**
 * learn-express-pug 폴더의 routes/index.js와 비교
 */
const express = require("express");

const router = express.Router();

// GET / 라우터
router.get("/", (req, res) => {
  res.render("index", {
    title: "Express",
    template: "Nunjucks",
  }); // res.locals.title, res.locals.template
});

// // GET / 라우터
// router.get("/", (req, res) => {
//   res.locals.title = "Express";
//   res.locals.template = "Nunjucks";
//   res.render("index");
// });

module.exports = router;
