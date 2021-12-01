const Sequelize = require("sequelize");
const User = require("./user");
const Comment = require("./comment");

const env = process.env.NODE_ENV || "development";
const config = require("../config/config")[env];
const db = {};

// Sequelize 패키지이자 생성자이다.
// config/config.json에서 데이터베이스 설정을 불러온 후
// new Sequelize를 통해 MySQL 연결 객체를 생성한다.
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);
// 연결 객체를 나중에 재사용하기 위해 db.sequelize에 넣어둔다.
db.sequelize = sequelize;

// db 객체에 User, Comment 모델을 담아두었다
// db 객체를 require해서 User, Comment 모델에 접근할 수 있다
db.User = User;
db.Comment = Comment;

// init이 실행되어야 테이블이 모델로 연결된다
User.init(sequelize);
Comment.init(sequelize);

// 다른 테이블과의 관계를 연결하는 associate도 미리 실행한다
User.associate(db);
Comment.associate(db);

module.exports = db;
