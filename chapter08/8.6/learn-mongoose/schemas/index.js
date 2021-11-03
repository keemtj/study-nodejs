const mongoose = require("mongoose");

const connect = () => {
  // 개발 환경에서만 콘솔을 통해 몽구스가 생성하는 쿼리 내용을 확인할 수 있다
  if (process.env.NODE_ENV !== "production") {
    mongoose.set("debug", true);
  }
  // 몽구스와 몽고디비를 연결하는 부분이다
  mongoose
    .connect(
      process.env.MONGO_DB_URI,
      {
        dbName: "nodejs", // 실제 주소
        // Migrating from 5.x to 6.x
        // No More Deprecation Warning Options
        // useNewUrlParser: true, // <-- no longer necessary
        // useCreateIndex: true, // <-- no longer necessary
      }
      //   ,(error) => {
      //     if (error) {
      //       console.log("몽고디비 연결 에러", error);
      //     } else {
      //       console.log("몽고디비 연결 성공");
      //     }
      //   }
      // );
    )
    .catch((error) => {
      if (error) {
        console.log("몽고디비 연결 에러", error);
      } else {
        console.log("몽고디비 연결 성공");
      }
    });
  // Error Handling
  // mongoose.connect('mongodb://localhost:27017/myapp').
  // catch(error => handleError(error));
  // Or:
  // try {
  //   await mongoose.connect('mongodb://localhost:27017/test');
  // } catch (error) {
  //   handleError(error);
  // }
};

// 몽구스 커넥션에 이벤트 리스너를 달아두었다
mongoose.connection.on("error", (error) => {
  console.error("몽고디비 연결 에러", error);
});
mongoose.connection.on("disconnected", () => {
  console.error("몽고디비 연결이 끊겼습니다. 연결을 재시도합니다.");
  connect();
});

module.exports = connect;
