const fs = require("fs");

console.log("시작");
fs.readFile("./readme2.txt", (err, data) => {
  if (err) {
    throw err;
  }
  console.log("1번", data.toString());
  fs.readFile("./readme2.txt", (err, data) => {
    if (err) {
      throw err;
    }
    console.log("2번", data.toString());
    fs.readFile("./readme2.txt", (err, data) => {
      if (err) {
        throw err;
      }
      console.log("3번", data.toString());
      console.log("끝");
    });
  });
});

/**
 * 비동기적으로 처리하면서 순서를 보장하는 방식으로 콜백 방식을 이용하지만
 * 콜백 지옥에 빠지게 된다
 * 콜백 지옥은 promise나 aysnc/await로 어느 정도 해결할 수 있다
 */
