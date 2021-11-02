const express = require("express");
const path = require("path");
const morgan = require("morgan");
const nunjucks = require("nunjucks");

const { sequelize } = require("./models"); // db.sequelize
const indexRouter = require("./routes");
const usersRouter = require("./routes/users");
const commentsRouter = require("./routes/comments");

const app = express();

app.set("port", process.env.PORT || 3001);
app.set("view engine", "html");
nunjucks.configure("views", {
  express: app,
  watch: true,
});
// sync메서드를 이용해 서버 실행 시 MySQL과 연동되도록 설정
sequelize
  .sync({ force: false }) // 서버 실행 시마다 테이블을 재생성, 테이블을 잘못 만든 경우 true로 설정
  .then(() => {
    console.log("데이터 베이스 연결 성공");
  })
  .catch((err) => {
    console.error(err);
  });

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/comments", commentsRouter);

app.use((req, res, next) => {
  const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV !== "production" ? err : {};
  res.status(err.status || 500);
  res.render("error");
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 대기중");
});
