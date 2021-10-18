const fs = require("fs");

fs.readFile("./readme.txt", (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data); // <Buffer ec a0 ... 94>
  console.log(data.toString());
});

/**
 * 버퍼 형식의 데이터는 메모리의 데이터라고 생각하면 쉽다
 * toString을 사용해 문자열로 변환한다
 */
